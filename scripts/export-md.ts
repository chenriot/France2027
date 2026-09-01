/**
 * Export du dossier en Markdown.
 *
 *   npm run export:md      → .artifacts/md/
 *
 * Un fichier par chapitre, plus un sommaire et la bibliographie ; les figures
 * sont écrites à côté en SVG autonomes et référencées par une image.
 *
 * La conversion part du **rendu prérendu des pages de chapitre**, pas des
 * données : c'est le même document que le site, dans le même ordre, y compris
 * le pied de chapitre daté et le tableau de valeurs replié sous chaque figure —
 * que `/tout` n'a pas, puisqu'il rend en mode verbatim.
 *
 * Ce qui ne survit pas au Markdown est traduit, jamais inventé : un encadré
 * devient une citation préfixée de sa nature, un verdict un libellé en gras,
 * une invite un bloc de code copiable. Le reste — chiffres, sources,
 * millésimes — est repris tel quel.
 *
 * Sert à relire le dossier hors ligne, à le déposer dans un dépôt Git, ou à le
 * passer à un outil qui lit du texte plutôt que du HTML.
 */
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { parse } from 'node-html-parser'
import type { HTMLElement, Node } from 'node-html-parser'
import { chapters } from '../src/data/chapters'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const OUT = join(ROOT, '.artifacts', 'md')
const FIGURES = join(OUT, 'figures')

const TEXT_NODE = 3

/** Marge ajoutée autour du repère : sur le site, `svg.cv` déborde librement. */
const SVG_PADDING = 8

// ------------------------------------------------------------------- lecture

function built(route: string): HTMLElement {
  const file = join(ROOT, '.next', 'server', 'app', `${route}.html`)
  let html: string
  try {
    html = readFileSync(file, 'utf8')
  } catch {
    throw new Error(`rendu de /${route} introuvable — lancer \`next build\` d’abord`)
  }
  return parse(html)
}

function need(root: HTMLElement, selector: string, route: string): HTMLElement {
  const el = root.querySelector(selector)
  if (!el) throw new Error(`\`${selector}\` introuvable dans le rendu de /${route}`)
  return el
}

// --------------------------------------------------------- fichiers de sortie

/** `Thème 02` → `03-dette-deficit.md` : l'ordre du dossier tient dans le nom. */
const fileOf = new Map<string, string>(
  chapters.map((c, i) => [c.slug, `${String(i + 1).padStart(2, '0')}-${c.slug}.md`]),
)

function hrefToMd(href: string): string {
  if (href === '/' || href === '/tout') return 'README.md'
  if (href === '/sources') return 'sources.md'
  if (href.startsWith('/')) {
    const target = fileOf.get(href.slice(1))
    if (!target) throw new Error(`lien interne non résolu : ${href}`)
    return target
  }
  return href
}

// --------------------------------------------------------------------- texte

const ENTITIES: Record<string, string> = {
  amp: '&',
  lt: '<',
  gt: '>',
  quot: '"',
  apos: '\u0027',
  nbsp: '\u00a0',
}

function decode(text: string): string {
  return text.replace(/&(#x?[0-9a-f]+|[a-z]+);/gi, (whole, body: string) => {
    if (body.startsWith('#x') || body.startsWith('#X')) {
      return String.fromCodePoint(Number.parseInt(body.slice(2), 16))
    }
    if (body.startsWith('#')) return String.fromCodePoint(Number.parseInt(body.slice(1), 10))
    return ENTITIES[body.toLowerCase()] ?? whole
  })
}

/**
 * Réduit les blancs de mise en page, et **eux seuls**.
 *
 * `\s` couperait aussi l'espace insécable et l'espace fine insécable, qui sont
 * de la typographie française et pas de l'indentation : `152,5 Md€` et `5,1 %`
 * y perdraient leur espace. On n'écrase donc que l'espace ordinaire et les
 * retours à la ligne.
 */
function collapse(text: string): string {
  return text.replace(/[ \t\r\n]+/g, ' ')
}

function trimOuter(text: string): string {
  return text.replace(/^[ \t\r\n]*([\s\S]*?)[ \t\r\n]*$/, '$1')
}

/** Caractères que Markdown lirait comme du balisage. */
function escapeInline(text: string): string {
  return text.replace(/[\\`*_[\]|]/g, '\\$&').replace(/</g, '&lt;')
}

/** Un début de ligne qui ressemblerait à un titre, une liste ou une citation. */
function escapeLineStart(text: string): string {
  return text.replace(/^([#>+-]|\d+[.)])(?= |$)/, '\\$1')
}

function paragraph(text: string): string {
  return escapeLineStart(trimOuter(text))
}

function emphasise(inner: string, mark: string): string {
  const trimmed = trimOuter(inner)
  if (trimmed === '') return ''
  const left = /^[ \t\r\n]/.test(inner) ? ' ' : ''
  const right = /[ \t\r\n]$/.test(inner) ? ' ' : ''
  return `${left}${mark}${trimmed}${mark}${right}`
}

function quote(lines: string): string {
  return lines
    .split('\n')
    .map((line) => (line === '' ? '>' : `> ${line}`))
    .join('\n')
}

// ------------------------------------------------------------------- contexte

interface Context {
  /** Chapitre en cours de conversion, pour nommer ses figures. */
  readonly slug: string
  readonly figures: string[]
}

// --------------------------------------------------------------------- inline

const CHIP = /^(k[1-5]|chip( c[1-5])?)$/

function isElement(node: Node): node is HTMLElement {
  return node.nodeType !== TEXT_NODE
}

function inlineOf(el: HTMLElement, ctx: Context): string {
  return el.childNodes.map((child) => inline(child, ctx)).join('')
}

function inline(node: Node, ctx: Context): string {
  if (!isElement(node)) return escapeInline(decode(collapse(node.rawText)))

  const el = node
  const classes = el.classList
  const children = () => inlineOf(el, ctx)

  switch (el.rawTagName) {
    case 'b':
    case 'strong':
      return emphasise(children(), '**')
    case 'em':
      return emphasise(children(), '*')
    case 'i':
      // `<i class="k3">` est une pastille de couleur, pas de l'italique.
      return CHIP.test(el.getAttribute('class') ?? '') ? '' : emphasise(children(), '*')
    case 'code':
      return `\`${trimOuter(decode(collapse(el.text)))}\``
    case 'sup':
      return `^${children()}`
    case 'br':
      return '  \n'
    case 'a': {
      const label = children()
      const href = hrefToMd(el.getAttribute('href') ?? '')
      return label === '' ? '' : `[${label}](${href})`
    }
    case 'span': {
      if (classes.contains('verdict')) return `**${trimOuter(children())}** · `
      if (classes.contains('num')) {
        // Un identifiant de série — `nasa_10_nf_tr` — se lit mieux en code, et
        // ses tirets bas n'ont alors plus besoin d'être échappés.
        const raw = trimOuter(decode(collapse(el.text)))
        if (/^[a-z][a-z0-9_]*[a-z0-9]$/i.test(raw) && /[_\d]/.test(raw)) return `\`${raw}\``
        return children()
      }
      if (classes.contains('cited')) return `  \n  ${emphasise(children(), '*')}`
      return children()
    }
    default:
      return children()
  }
}

// ---------------------------------------------------------------------- blocs

const BLOCK_TAGS = new Set([
  'p', 'div', 'ul', 'ol', 'li', 'table', 'figure', 'figcaption', 'details',
  'section', 'header', 'footer', 'nav', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'blockquote', 'hr', 'summary',
])

/**
 * Convertit les enfants d'un élément, en regroupant les passages en ligne.
 *
 * Un encadré s'écrit `<div class="defn"><b>titre</b> texte…</div>` : le corps
 * n'est pas dans un `<p>`. Les suites de nœuds en ligne sont donc réunies en
 * un paragraphe, et les vrais blocs traités un par un.
 */
function blocks(
  el: HTMLElement,
  ctx: Context,
  skip: (child: HTMLElement) => boolean = () => false,
): string[] {
  const out: string[] = []
  let run: Node[] = []

  const flush = () => {
    if (run.length === 0) return
    const text = paragraph(run.map((n) => inline(n, ctx)).join(''))
    run = []
    if (text !== '') out.push(text)
  }

  for (const child of el.childNodes) {
    if (isElement(child) && BLOCK_TAGS.has(child.rawTagName)) {
      if (skip(child)) continue
      flush()
      out.push(...block(child, ctx))
    } else {
      run.push(child)
    }
  }
  flush()
  return out.filter((b) => trimOuter(b) !== '')
}

/**
 * Un titre, sur une seule ligne et sans espace double : le libellé de verdict
 * qui ouvre certains titres en laisse un derrière lui.
 */
function heading(el: HTMLElement, ctx: Context): string {
  return trimOuter(inlineOf(el, ctx)).replace(/ {2,}/g, ' ')
}

const CALLOUTS: Record<string, string> = {
  defn: 'Définition',
  lim: 'Limite de mesure',
  hole: 'Donnée non produite',
  take: 'À retenir',
}

function block(el: HTMLElement, ctx: Context): string[] {
  const classes = el.classList

  switch (el.rawTagName) {
    case 'h2':
    case 'h3':
      return [`## ${heading(el, ctx)}`]
    case 'h4':
      return [`### ${heading(el, ctx)}`]

    case 'p': {
      if (classes.contains('src')) return [`**Source** — ${trimOuter(inlineOf(el, ctx))}`]
      if (classes.contains('kf')) return [emphasise(inlineOf(el, ctx), '**')]
      if (classes.contains('sec-note')) return [quote(paragraph(inlineOf(el, ctx)))]
      if (classes.contains('chapfoot')) {
        const parts = el.querySelectorAll('span').map((s) => trimOuter(inlineOf(s, ctx)))
        return [emphasise(parts.filter((p) => p !== '').join(' · '), '*')]
      }
      return [paragraph(inlineOf(el, ctx))]
    }

    case 'ul':
    case 'ol':
      return [list(el, ctx)]

    case 'figure':
      return figure(el, ctx)

    case 'figcaption':
      return [paragraph(inlineOf(el, ctx))]

    case 'table':
      return [table(el, ctx)]

    case 'details':
      return [details(el, ctx)]

    case 'nav':
    case 'hr':
      return []

    case 'div': {
      for (const [kind, label] of Object.entries(CALLOUTS)) {
        if (classes.contains(kind)) return [callout(el, ctx, label)]
      }
      if (classes.contains('pull')) return [pull(el, ctx)]
      if (classes.contains('part')) return part(el, ctx)
      if (classes.contains('prompt')) return prompt(el)
      if (classes.contains('q')) {
        return [`<a id="${el.getAttribute('id')}"></a>`, ...blocks(el, ctx)]
      }
      if (classes.contains('keyrow')) return [chips(el, ctx, 'Légende : ')]
      if (classes.contains('legend')) return [chips(el, ctx, '')]
      if (classes.contains('rail') || classes.contains('toolbar') || classes.contains('extra')) {
        return []
      }
      return blocks(el, ctx)
    }

    default:
      return blocks(el, ctx)
  }
}

/** Les blocs d'un élément, en ignorant tout ce qui précède `marker`. */
function blocksAfter(el: HTMLElement, marker: HTMLElement, ctx: Context): string[] {
  const holder = parse('<div></div>').querySelector('div') as HTMLElement
  holder.childNodes = el.childNodes.slice(el.childNodes.indexOf(marker) + 1)
  return blocks(holder, ctx)
}

/** Encadré : une citation, préfixée de ce qu'elle est. */
function callout(el: HTMLElement, ctx: Context, label: string): string {
  const heading = el.querySelector('b')
  const title = heading ? trimOuter(inlineOf(heading, ctx)) : ''
  const head = title === '' ? `**${label}**` : `**${label} — ${title}**`
  const body = heading ? blocksAfter(el, heading, ctx) : blocks(el, ctx)
  return quote([head, ...body].join('\n\n'))
}

/** Les chiffres saillants d'une fiche. */
function pull(el: HTMLElement, ctx: Context): string {
  return el
    .querySelectorAll('div')
    .map((item) => {
      const value = item.querySelector('span.v')
      const caption = item.querySelector('span.l')
      const v = value ? trimOuter(inlineOf(value, ctx)) : ''
      const l = caption ? trimOuter(inlineOf(caption, ctx)) : ''
      return l === '' ? `- **${v}**` : `- **${v}** — ${l}`
    })
    .join('\n')
}

/** Intertitre de partie : `Partie 1` puis son titre. */
function part(el: HTMLElement, ctx: Context): string[] {
  const label = el.querySelector('span')
  const title = el.querySelector('h3')
  const heading = [
    label ? trimOuter(inlineOf(label, ctx)) : '',
    title ? trimOuter(inlineOf(title, ctx)) : '',
  ]
    .filter((s) => s !== '')
    .join(' · ')
  return [`## ${heading}`, ...blocks(el, ctx, (child) => child === title)]
}

/** Invite à recopier : un bloc de code, puisqu'elle est faite pour être copiée. */
function prompt(el: HTMLElement): string[] {
  const label = el.querySelector('span.pl')
  const text = trimOuter(
    decode(collapse(el.childNodes.filter((n) => n !== label).map((n) => n.text).join(''))),
  )
  const title = label ? trimOuter(decode(collapse(label.text))) : 'Invite'
  return [`**${title}**`, `\`\`\`text\n${text}\n\`\`\``]
}

/**
 * Une rangée de pastilles — légende de figure, légende des encadrés du chapeau.
 * La couleur reste dans le SVG et dans le texte qui l'explique ; ici, seuls les
 * libellés subsistent, séparés.
 */
function chips(el: HTMLElement, ctx: Context, prefix: string): string {
  const labels = el
    .querySelectorAll('span')
    .map((span) => trimOuter(inlineOf(span, ctx)))
    .filter((label) => label !== '')
  return labels.length === 0 ? '' : emphasise(prefix + labels.join(' · '), '*')
}

function list(el: HTMLElement, ctx: Context): string {
  const ordered = el.rawTagName === 'ol'
  return el
    .querySelectorAll('li')
    .filter((li) => li.parentNode === el)
    .map((li, i) => {
      const marker = ordered ? `${i + 1}. ` : '- '
      const indent = ' '.repeat(marker.length)
      const body = blocks(li, ctx).join('\n\n').split('\n').join(`\n${indent}`)
      return marker + body
    })
    .join('\n')
}

// ------------------------------------------------------------------- tableaux

function cellText(cell: HTMLElement, ctx: Context): string {
  const text = trimOuter(inlineOf(cell, ctx)).replace(/\n/g, '<br>')
  return text === '' ? ' ' : text
}

/** Une ligne, colspan développé : Markdown ne fusionne pas de cellules. */
function cells(row: HTMLElement, ctx: Context): string[] {
  const out: string[] = []
  for (const cell of row.querySelectorAll('th, td')) {
    out.push(cellText(cell, ctx))
    const span = Number.parseInt(cell.getAttribute('colspan') ?? '1', 10)
    for (let i = 1; i < span; i += 1) out.push(' ')
  }
  return out
}

function table(el: HTMLElement, ctx: Context): string {
  const headRow = el.querySelector('thead tr')
  const header = headRow ? cells(headRow, ctx) : []

  const body = el.querySelectorAll('tbody tr').map((row) => {
    const values = cells(row, ctx)
    // `tr.tot` est une ligne de total : sur le site, elle est en gras.
    return row.classList.contains('tot')
      ? values.map((v) => (trimOuter(v) === '' ? v : `**${v}**`))
      : values
  })

  const width = Math.max(header.length, ...body.map((r) => r.length), 1)
  const pad = (row: string[]) => [...row, ...Array(width - row.length).fill(' ')]

  const numeric = (headRow?.querySelectorAll('th') ?? []).map((th) => th.classList.contains('n'))
  const align = Array.from({ length: width }, (_, i) => (numeric[i] ? '--:' : '---'))

  const line = (row: string[]) => `| ${pad(row).join(' | ')} |`
  return [
    line(header.length > 0 ? header : Array(width).fill(' ')),
    `| ${align.join(' | ')} |`,
    ...body.map(line),
  ].join('\n')
}

/** Le tableau de valeurs replié sous une figure : `<details>` passe en Markdown. */
function details(el: HTMLElement, ctx: Context): string {
  const summary = el.querySelector('summary')
  const title = summary ? trimOuter(decode(collapse(summary.text))) : 'Détail'
  const inner = blocks(el, ctx, (child) => child.rawTagName === 'summary').join('\n\n')
  return `<details>\n<summary>${title}</summary>\n\n${inner}\n\n</details>`
}

// -------------------------------------------------------------------- figures

const CHART_CSS = (() => {
  const css = readFileSync(join(ROOT, 'src', 'styles', 'base.css'), 'utf8')
  const from = css.indexOf('svg.cv{')
  const to = css.indexOf('.keyrow{')
  if (from < 0 || to < from) {
    throw new Error('bloc CSS des graphiques introuvable dans base.css — attendu `svg.cv{` … `.keyrow{`')
  }
  return trimOuter(css.slice(from, to))
})()

const THEMES = (() => {
  const css = readFileSync(join(ROOT, 'src', 'styles', 'tokens.css'), 'utf8')
  const declarations = (marker: string): string => {
    const at = css.indexOf(marker)
    if (at < 0) throw new Error(`bloc \`${marker}\` introuvable dans tokens.css`)
    const open = css.indexOf('{', at)
    return trimOuter(css.slice(open + 1, css.indexOf('}', open)))
  }
  return { light: declarations(':root{'), dark: declarations(':root[data-theme="dark"]{') }
})()

const COHABITATION_PATTERN =
  '<defs><pattern id="coh" width="6" height="6" patternUnits="userSpaceOnUse" ' +
  'patternTransform="rotate(45)"><line class="cohl" x1="0" y1="0" x2="0" y2="6"/></pattern></defs>'

/**
 * Un SVG autonome, lisible hors du site.
 *
 * Le tracé est celui du site, inchangé. Ce qui est ajouté vient de la feuille
 * de style — jamais réécrit ici : les variables de thème et les règles
 * `svg.cv` sont lues dans `tokens.css` et `base.css`, variante sombre comprise,
 * si bien que la figure suit le thème du lecteur comme le fait le site.
 */
function standalone(svg: HTMLElement): string {
  const viewBox = svg.getAttribute('viewBox')
  if (!viewBox) throw new Error('figure sans `viewBox`')
  const [x, y, w, h] = viewBox.split(/ +/).map(Number)
  const box = [x - SVG_PADDING, y - SVG_PADDING, w + SVG_PADDING * 2, h + SVG_PADDING * 2]

  const attributes = { ...svg.attributes, viewBox: box.join(' ') }
  const opening = Object.entries({
    xmlns: 'http://www.w3.org/2000/svg',
    ...attributes,
    width: String(box[2]),
    height: String(box[3]),
  })
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ')

  const inner = svg.innerHTML
  // `.coh` peint les cohabitations avec un motif que le document d'origine
  // définit dans le SVG lui-même. La règle CSS `fill:url(#coh)` étant reprise
  // dans chaque fichier, le motif l'est aussi : pas de référence pendante.
  const pattern = inner.includes('<pattern id="coh"') ? '' : COHABITATION_PATTERN

  const style = [
    '<style>',
    `svg{${THEMES.light}}`,
    `@media (prefers-color-scheme:dark){svg{${THEMES.dark}}}`,
    CHART_CSS,
    '</style>',
  ].join('\n')

  const background = `<rect x="${box[0]}" y="${box[1]}" width="${box[2]}" height="${box[3]}" fill="var(--surface)"/>`

  return `<svg ${opening}>\n${style}\n${pattern}${background}\n${inner}\n</svg>\n`
}

function figure(el: HTMLElement, ctx: Context): string[] {
  const out: string[] = []
  const title = el.querySelector('p.fig-title')
  const subtitle = el.querySelector('p.fig-sub')
  const keyrow = el.querySelector('div.keyrow')
  const svg = el.querySelector('div.figscroll svg')
  const caption = el.querySelector('figcaption')
  const data = el.querySelector('details.figdata')

  const label = title ? trimOuter(inlineOf(title, ctx)) : ''
  if (label !== '') out.push(emphasise(label, '**'))
  if (subtitle) out.push(emphasise(inlineOf(subtitle, ctx), '*'))

  if (!svg) throw new Error(`figure sans SVG : ${label}`)
  const titleId = svg.getAttribute('aria-labelledby')
  if (!titleId) throw new Error(`figure sans \`aria-labelledby\` : ${label}`)
  const name = `${ctx.slug}-${titleId.replace(/-t$/, '')}.svg`
  if (ctx.figures.includes(name)) throw new Error(`deux figures nommées ${name}`)
  ctx.figures.push(name)
  writeFileSync(join(FIGURES, name), standalone(svg))

  const alt = trimOuter(decode(collapse(title?.text ?? svg.querySelector('title')?.text ?? 'Figure')))
  out.push(`![${alt.replace(/[[\]]/g, '')}](figures/${name})`)

  if (keyrow) out.push(chips(keyrow, ctx, 'Légende : '))
  if (caption) out.push(paragraph(inlineOf(caption, ctx)))
  for (const source of el.querySelectorAll('p.src')) {
    out.push(`**Source** — ${trimOuter(inlineOf(source, ctx))}`)
  }
  if (data) out.push(details(data, ctx))

  return out
}

// ------------------------------------------------------------------ chapitres

function navigation(index: number): string {
  const previous = index > 0 ? chapters[index - 1] : undefined
  const next = index < chapters.length - 1 ? chapters[index + 1] : undefined
  return [
    previous ? `[← ${previous.shortTitle}](${fileOf.get(previous.slug)})` : '',
    '[Sommaire](README.md)',
    next ? `[${next.shortTitle} →](${fileOf.get(next.slug)})` : '',
  ]
    .filter((link) => link !== '')
    .join(' · ')
}

function chapter(index: number): { markdown: string; figures: readonly string[] } {
  const entry = chapters[index]
  const root = built(entry.slug)
  const section = need(root, 'section.sec', entry.slug)
  const head = need(section, '.sec-head', entry.slug)

  const ctx: Context = { slug: entry.slug, figures: [] }
  const number = trimOuter(decode(collapse(need(head, '.sec-num', entry.slug).text)))
  const title = trimOuter(inlineOf(need(head, 'h2', entry.slug), ctx))
  const body = blocks(section, ctx, (child) => child === head)

  const markdown = [
    `# ${number} · ${title}`,
    navigation(index),
    ...body,
    '---',
    navigation(index),
  ].join('\n\n')

  return { markdown: `${markdown}\n`, figures: ctx.figures }
}

// ------------------------------------------------------------------- sommaire

function plural(count: number, singular: string, plural_: string): string {
  return `${count} ${count > 1 ? plural_ : singular}`
}

function readme(): string {
  const home = built('index')
  const mast = need(home, 'header.mast', 'index')
  const ctx: Context = { slug: 'index', figures: [] }

  const summary = chapters.map((c, i) => {
    const counts = [
      plural(c.counts.questions, 'question', 'questions'),
      plural(c.counts.tables, 'tableau', 'tableaux'),
      plural(c.counts.figures, 'figure', 'figures'),
    ].join(' · ')
    const line = `${i + 1}. **[${c.title}](${fileOf.get(c.slug)})** — ${counts}`
    return c.note ? `${line}\n   ${emphasise(inlineOf(parse(c.note), ctx), '*')}` : line
  })

  const total = chapters.reduce(
    (sum, c) => ({
      questions: sum.questions + c.counts.questions,
      tables: sum.tables + c.counts.tables,
      figures: sum.figures + c.counts.figures,
    }),
    { questions: 0, tables: 0, figures: 0 },
  )

  return `${[
    '# Chiffres pour 2027',
    emphasise(inlineOf(need(mast, 'p.kicker', 'index'), ctx), '*'),
    paragraph(inlineOf(need(mast, 'p.standfirst', 'index'), ctx)),
    ...blocks(need(mast, 'div.method', 'index'), ctx),
    '## Sommaire',
    ...summary,
    '- [Toutes les sources](sources.md)',
    '---',
    emphasise(
      `${chapters.length} chapitres · ${total.questions} questions · ${total.tables} tableaux · ` +
        `${total.figures} figures. Export Markdown du site, généré par \`npm run export:md\`.`,
      '*',
    ),
  ].join('\n\n')}\n`
}

function bibliography(): string {
  const root = built('sources')
  const section = need(root, 'section.sec', 'sources')
  const head = need(section, '.sec-head', 'sources')
  const ctx: Context = { slug: 'sources', figures: [] }

  return `${[
    `# ${trimOuter(inlineOf(need(head, 'h2', 'sources'), ctx))}`,
    '[Sommaire](README.md)',
    ...blocks(section, ctx, (child) => child === head),
  ].join('\n\n')}\n`
}

// ------------------------------------------------------------------------ main

rmSync(OUT, { recursive: true, force: true })
mkdirSync(FIGURES, { recursive: true })

let figures = 0
for (let index = 0; index < chapters.length; index += 1) {
  const { markdown, figures: written } = chapter(index)
  writeFileSync(join(OUT, fileOf.get(chapters[index].slug) as string), markdown)
  figures += written.length
}

writeFileSync(join(OUT, 'README.md'), readme())
writeFileSync(join(OUT, 'sources.md'), bibliography())

console.log(`écrit ${OUT}`)
console.log(`${chapters.length + 2} fichiers Markdown · ${figures} figures SVG`)
