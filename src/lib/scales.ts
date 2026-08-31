import type { Axis, Frame } from './types'

/**
 * Projection valeur → coordonnée SVG.
 *
 * C'est le cœur de la refonte : le document d'origine stockait des pixels
 * (`points="52.0,171.0 63.2,172.0 …"`), donc des valeurs illisibles et
 * invérifiables. Ici les données portent des valeurs, et la position est
 * calculée. Un point mal placé devient visible dans le diff.
 */

/** Ordonnée d'une valeur, dans le repère SVG (y croît vers le bas). */
export function yOf(value: number, axis: Axis, frame: Frame): number {
  const span = axis.max - axis.min
  if (span === 0) return frame.bottom
  const ratio = (value - axis.min) / span
  return frame.bottom - ratio * (frame.bottom - frame.top)
}

/** Abscisse du point d'indice `i` parmi `count` points régulièrement espacés. */
export function xOf(i: number, count: number, frame: Frame): number {
  if (count <= 1) return frame.left
  return frame.left + (i * (frame.right - frame.left)) / (count - 1)
}

/** Abscisse du centre de la `i`-ième bande sur `count` bandes. */
export function xBand(i: number, count: number, frame: Frame): number {
  if (count <= 0) return frame.left
  const w = (frame.right - frame.left) / count
  return frame.left + w * (i + 0.5)
}

/** Largeur d'une bande. */
export function bandWidth(count: number, frame: Frame): number {
  return count <= 0 ? 0 : (frame.right - frame.left) / count
}

/**
 * Arrondi au pair le plus proche.
 *
 * C'est celui du générateur du document d'origine : une position à 32,5 y
 * devient 32 et 47,5 devient 48. Reproduire ce détail est ce qui permet au
 * SVG régénéré d'être identique au caractère près, et non « à un pixel près ».
 */
export function roundHalfEven(n: number): number {
  const floor = Math.floor(n)
  const diff = n - floor
  if (diff > 0.5) return floor + 1
  if (diff < 0.5) return floor
  return floor % 2 === 0 ? floor : floor + 1
}

/** Arrondi d'affichage : une décimale, comme les coordonnées d'origine. */
export function px(n: number): number {
  return roundHalfEven(n * 10) / 10
}

/**
 * Coordonnée telle que l'écrit le document d'origine : toujours une décimale.
 * Les constantes de mise en page, elles, restent des entiers — c'est la
 * distinction que fait le générateur d'origine, et la reproduire évite 3 000
 * différences cosmétiques dans la comparaison de non-régression.
 */
export function coord(n: number): string {
  return px(n).toFixed(1)
}

/** Chaîne `points` d'une polyline, les valeurs `null` coupant la ligne. */
export function polylinePoints(
  values: readonly (number | null)[],
  axis: Axis,
  frame: Frame,
  xs?: readonly (string | number)[],
  xAxis?: Axis,
): string {
  const abscissae = xs ?? values.map((_, i) => i)
  return values
    .map((v, i) =>
      v === null
        ? null
        : `${coord(xAt(i, abscissae, frame, xAxis))},${coord(yOf(v, axis, frame))}`,
    )
    .filter((p): p is string => p !== null)
    .join(' ')
}

/**
 * Inverse de `yOf` : retrouve une valeur à partir d'une ordonnée.
 * Utilisé par le script de migration pour reconstituer les données des 55
 * figures à partir des coordonnées du document d'origine.
 */
export function valueOfY(y: number, axis: Axis, frame: Frame): number {
  const height = frame.bottom - frame.top
  if (height === 0) return axis.min
  return axis.min + ((frame.bottom - y) / height) * (axis.max - axis.min)
}

/** Abscisse d'une valeur, quand l'axe des abscisses est à valeurs. */
export function xOfValue(value: number, axis: Axis, frame: Frame): number {
  const span = axis.max - axis.min
  if (span === 0) return frame.left
  return frame.left + ((value - axis.min) / span) * (frame.right - frame.left)
}

/** Inverse de `xOfValue`, utilisé par la migration. */
export function valueOfX(x: number, axis: Axis, frame: Frame): number {
  const width = frame.right - frame.left
  if (width === 0) return axis.min
  return axis.min + ((x - frame.left) / width) * (axis.max - axis.min)
}

/** Abscisse du point `i`, selon que l'axe porte des valeurs ou des index. */
export function xAt(
  i: number,
  xs: readonly (string | number)[],
  frame: Frame,
  axis?: Axis,
): number {
  if (axis && typeof xs[i] === 'number') return xOfValue(xs[i] as number, axis, frame)
  return xOf(i, xs.length, frame)
}
