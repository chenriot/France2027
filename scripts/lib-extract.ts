/**
 * Utilitaires de migration : conversion HTML → JSX, analyse des cellules
 * chiffrées, inversion des échelles des figures.
 *
 * Ce module n'est utilisé que par `scripts/extract.ts`. Rien ici ne tourne au
 * build ni dans le navigateur.
 */
import type { HTMLElement, Node } from 'node-html-parser'
import { NodeType } from 'node-html-parser'
import type { Cell, NumCell } from '../src/lib/types'
import { formatNum } from '../src/lib/format'

// ------------------------------------------------------------- cellules

const NUM_RE = /^(≈\s*)?([+−-]?)(\d{1,3}(?: \d{3})+|\d+)(?:,(\d+))?(.*)$/s

/**
 * Convertit le contenu HTML d'une cellule en valeur typée.
 *
 * Garantie centrale : on ne renvoie une valeur chiffrée que si `formatNum`
 * reproduit **exactement** la chaîne d'origine. Sinon la cellule reste du
 * texte. Le rendu ne peut donc pas dériver, quel que soit le cas non prévu.
 */
export function parseCell(html: string, attrs: CellAttrs = {}): Cell {
  const cell = parseCellValue(html)
  if (attrs.cs === undefined && attrs.n === undefined) return cell
  // Une cellule absente qui porte des attributs de rendu devient explicite :
  // `null` ne peut pas les porter, et un `—` muet perdrait le colspan.
  if (cell === null) return { t: '—', ...attrs }
  return { ...cell, ...attrs }
}

export interface CellAttrs {
  readonly cs?: number
  readonly n?: boolean
}

function parseCellValue(html: string): Cell {
  const trimmed = html.trim()
  // `—` signale une donnée absente ; une cellule vide est une cellule vide.
  // Les confondre ajouterait des tirets là où le document n'en a pas.
  if (trimmed === '—') return null
  if (trimmed === '') return { t: '' }

  let body = trimmed
  let strong: true | undefined
  if (/^<b>[\s\S]*<\/b>$/.test(body)) {
    const inner = body.slice(3, -4).trim()
    if (!inner.includes('<')) {
      body = inner
      strong = true
    }
  }

  // Complément de phrase après une valeur en gras : « <b>+27,4 %</b> pour … »
  let after: string | undefined
  const split = /^<b>([^<]*)<\/b>\s+([^<]+)$/.exec(trimmed)
  if (split) {
    body = split[1].trim()
    after = split[2].trim()
    strong = true
  }

  if (body.includes('<')) return { t: trimmed }

  const m = NUM_RE.exec(body)
  if (!m) return { t: trimmed }

  const [, approx, sign, intPart, frac, rest] = m
  const unit = rest.trim()
  if (unit.includes('<')) return { t: trimmed }

  const digits = intPart.replace(/ /g, '')
  const magnitude = Number(frac ? `${digits}.${frac}` : digits)
  if (!Number.isFinite(magnitude)) return { t: trimmed }

  const cell: NumCell = {
    v: sign === '−' || sign === '-' ? -magnitude : magnitude,
    d: frac ? frac.length : 0,
    ...(unit ? { u: unit } : {}),
    ...(sign === '+' ? { sign: true as const } : {}),
    ...(approx ? { approx: true as const } : {}),
    ...(strong ? { strong: true as const } : {}),
    ...(after ? { after } : {}),
    ...(digits.length > 3 && !intPart.includes(' ') ? { g: false as const } : {}),
  }

  return formatNum(cell) === stripTags(trimmed) ? cell : { t: trimmed }
}

export function stripTags(html: string): string {
  return html.replace(/<[^>]+>/g, '').trim()
}

// ------------------------------------------------------------------ JSX

const ATTR_MAP: Record<string, string> = {
  class: 'className',
  for: 'htmlFor',
  colspan: 'colSpan',
  rowspan: 'rowSpan',
  tabindex: 'tabIndex',
  readonly: 'readOnly',
  maxlength: 'maxLength',
  'aria-labelledby': 'aria-labelledby',
}

const VOID_TAGS = new Set(['br', 'hr', 'img', 'input', 'meta', 'link', 'source'])

/** Échappe un texte pour un corps de JSX. */
export function jsxText(text: string): string {
  return text
    .replace(/[{}]/g, (c) => `{'${c}'}`)
    .replace(/</g, '{\'<\'}')
    .replace(/>/g, '{\'>\'}')
}

export function jsxAttrValue(value: string): string {
  return `"${value.replace(/"/g, '&quot;')}"`
}

export interface JsxOptions {
  /** Remplace un nœud par du JSX prêt à l'emploi ; `null` pour le supprimer. */
  readonly replace?: (el: HTMLElement) => string | null | undefined
  readonly indent?: string
}

/** Convertit un arbre HTML en JSX, en conservant balises et classes. */
export function toJsx(nodes: readonly Node[], opts: JsxOptions = {}): string {
  const out: string[] = []
  for (const node of nodes) {
    if (node.nodeType === NodeType.TEXT_NODE) {
      const text = node.rawText
      if (text.trim() === '') {
        if (text.includes('\n')) continue
        out.push(' ')
        continue
      }
      out.push(jsxText(decodeEntities(text)))
      continue
    }
    if (node.nodeType !== NodeType.ELEMENT_NODE) continue
    const el = node as HTMLElement

    const replaced = opts.replace?.(el)
    if (replaced === null) continue
    if (replaced !== undefined) {
      out.push(replaced)
      continue
    }

    const tag = el.rawTagName.toLowerCase()
    const attrs = Object.entries(el.attributes)
      .map(([k, v]) =>
        k === 'style'
          ? `style={${styleObject(v)}}`
          : `${ATTR_MAP[k] ?? k}=${jsxAttrValue(decodeEntities(v))}`,
      )
      .join(' ')
    const open = attrs ? `<${tag} ${attrs}` : `<${tag}`
    if (VOID_TAGS.has(tag)) {
      out.push(`${open} />`)
      continue
    }
    const inner = toJsx(el.childNodes, opts)
    out.push(`${open}>${inner}</${tag}>`)
  }
  return out.join('')
}

/** `text-align:center` → `{ textAlign: 'center' }`, ce qu'attend React. */
export function styleObject(css: string): string {
  const entries = css
    .split(';')
    .map((d) => d.trim())
    .filter(Boolean)
    .map((d) => {
      const [prop, ...rest] = d.split(':')
      const key = prop.trim().replace(/-([a-z])/g, (_, c: string) => c.toUpperCase())
      return `${key}: ${quote(rest.join(':').trim())}`
    })
  return `{ ${entries.join(', ')} }`
}

const ENTITIES: Record<string, string> = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'",
  '&apos;': "'",
  '&nbsp;': ' ',
}

export function decodeEntities(s: string): string {
  return s.replace(/&(?:amp|lt|gt|quot|#39|apos|nbsp);/g, (m) => ENTITIES[m] ?? m)
}

// ------------------------------------------------------- identifiants

export function slugify(s: string): string {
  return stripTags(s)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[’']/g, '-')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 58)
    .replace(/-+$/g, '')
}

/** Rend un identifiant unique dans un ensemble donné. */
export function unique(base: string, taken: Set<string>): string {
  const seed = base || 'item'
  let id = seed
  let n = 2
  while (taken.has(id)) id = `${seed}-${n++}`
  taken.add(id)
  return id
}

// -------------------------------------------------- littéraux TypeScript

export function lit(value: unknown, indent = 0): string {
  const pad = '  '.repeat(indent)
  const padIn = '  '.repeat(indent + 1)
  if (value === null) return 'null'
  if (typeof value === 'number') return Number.isInteger(value) ? String(value) : String(value)
  if (typeof value === 'boolean') return String(value)
  if (typeof value === 'string') return quote(value)
  if (Array.isArray(value)) {
    if (value.length === 0) return '[]'
    const flat = value.every((v) => v === null || typeof v === 'number' || typeof v === 'string')
    if (flat) {
      const inline = `[${value.map((v) => lit(v)).join(', ')}]`
      if (inline.length <= 96) return inline
      return `[\n${padIn}${chunk(value.map((v) => lit(v)), 90, padIn)}\n${pad}]`
    }
    return `[\n${value.map((v) => `${padIn}${lit(v, indent + 1)},`).join('\n')}\n${pad}]`
  }
  const entries = Object.entries(value as Record<string, unknown>).filter(([, v]) => v !== undefined)
  if (entries.length === 0) return '{}'
  const inline = `{ ${entries.map(([k, v]) => `${key(k)}: ${lit(v)}`).join(', ')} }`
  if (inline.length <= 96 && !inline.includes('\n')) return inline
  return `{\n${entries.map(([k, v]) => `${padIn}${key(k)}: ${lit(v, indent + 1)},`).join('\n')}\n${pad}}`
}

function chunk(parts: readonly string[], width: number, pad: string): string {
  const lines: string[] = []
  let line = ''
  for (const p of parts) {
    const next = line ? `${line} ${p},` : `${p},`
    if (next.length > width && line) {
      lines.push(line)
      line = `${p},`
    } else {
      line = next
    }
  }
  if (line) lines.push(line)
  return lines.join(`\n${pad}`)
}

function key(k: string): string {
  return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(k) ? k : quote(k)
}

export function quote(s: string): string {
  // Toujours des apostrophes simples, et un échappement complet : les textes
  // du document d'origine contiennent des apostrophes, des antislashs et,
  // pour les SVG conservés, des retours à la ligne.
  const escaped = s
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
  return `'${escaped}'`
}
