import type { Cell, NumCell } from './types'

/** Signe moins typographique. Jamais le trait d'union ASCII. */
export const MINUS = '−'
/** Donnée absente. */
export const EMDASH = '—'
/**
 * Séparateurs de milliers du document d'origine. Le corps de texte et les
 * tableaux utilisent une espace ordinaire ; les étiquettes des SVG utilisent
 * l'espace fine insécable. La distinction est dans l'original : on la conserve.
 */
export const THOUSANDS = ' '
export const THOUSANDS_SVG = '\u202f'

/** Groupe les milliers : 10077 → « 10 077 ». */
export function groupThousands(digits: string, sep: string = THOUSANDS): string {
  const [int, frac] = digits.split('.')
  let out = ''
  for (let i = int.length; i > 0; i -= 3) {
    out = int.slice(Math.max(0, i - 3), i) + (out ? sep + out : '')
  }
  return frac === undefined ? out : `${out},${frac}`
}

/** Formate la magnitude d'une valeur, sans signe ni unité. */
export function formatMagnitude(
  v: number,
  decimals: number,
  group = true,
  sep: string = THOUSANDS,
): string {
  const fixed = Math.abs(v).toFixed(decimals)
  const withComma = decimals > 0 ? fixed.replace('.', ',') : fixed
  return group ? groupThousands(fixed, sep).replace('.', ',') : withComma
}

/**
 * Recompose la chaîne affichée d'une valeur chiffrée.
 *
 * C'est la seule fonction autorisée à produire du texte à partir d'un nombre.
 * L'extracteur vérifie que sa sortie est identique, caractère pour caractère,
 * à la chaîne du document d'origine ; toute cellule qui échoue à ce test est
 * conservée en texte plutôt que rendue approximativement.
 */
export function formatNum(c: NumCell, sep: string = THOUSANDS): string {
  const sign = c.v < 0 ? MINUS : c.sign ? '+' : ''
  const body = formatMagnitude(c.v, c.d, c.g !== false, sep)
  const parts = [c.approx ? '≈ ' : '', sign, body]
  if (c.u) parts.push(' ', c.u)
  if (c.after) parts.push(' ', c.after)
  return parts.join('')
}

/**
 * La valeur seule, sans son complément de phrase.
 *
 * Dans le document d'origine, « <b>+27,4 %</b> pour l'Allemagne » met en gras
 * la valeur, pas la phrase : la distinction se rend au balisage, pas au texte.
 */
export function formatValue(c: NumCell, sep: string = THOUSANDS): string {
  return formatNum({ ...c, after: undefined }, sep)
}

export function isNumCell(c: Cell): c is NumCell {
  return c !== null && 'v' in c
}

/** Texte brut d'une cellule, pour la recherche et les tableaux alternatifs. */
export function cellText(c: Cell): string {
  if (c === null) return EMDASH
  if (isNumCell(c)) return formatNum(c)
  return c.t.replace(/<[^>]+>/g, '')
}

/** Normalisation de recherche — reprise telle quelle du document d'origine. */
export function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
}
