import type { BarLayout, LineLayout, Series } from './types'
import { formatMagnitude, MINUS, THOUSANDS_SVG } from './format'
import { coord, polylinePoints, px, roundHalfEven, xAt, xOfValue, yOf } from './scales'

/**
 * Description d'un graphique, sous forme de primitives SVG.
 *
 * Une seule fonction produit cette description ; elle sert à la fois au rendu
 * (les composants de `components/charts` la transforment en JSX) et à la
 * vérification de migration (le script d'extraction la sérialise et la compare,
 * élément par élément, au SVG du document d'origine). Composant et preuve
 * partagent donc exactement le même code.
 */
export interface SvgNode {
  readonly tag: 'line' | 'text' | 'polyline' | 'circle' | 'rect'
  readonly cls?: string
  readonly attrs: Readonly<Record<string, string | number>>
  readonly text?: string
}

/**
 * Nombre tel que l'écrivent les étiquettes des SVG d'origine.
 *
 * Les valeurs sont groupées par milliers avec l'espace fine insécable ; seules
 * les graduations d'abscisse ne le sont pas, parce que ce sont des années.
 */
export function svgNumber(v: number, decimals = 0, group = true): string {
  const sign = v < 0 ? MINUS : ''
  return sign + formatMagnitude(v, decimals, group, THOUSANDS_SVG)
}

/** Première, dernière et intermédiaires : l'ancrage de l'original. */
function anchorAt(i: number, n: number): string {
  return i === 0 ? 'start' : i === n - 1 ? 'end' : 'middle'
}

export function buildChart(f: Series): SvgNode[] {
  return f.layout.kind === 'line' ? buildLine(f, f.layout) : buildBars(f, f.layout)
}

function buildLine(f: Series, L: LineLayout): SvgNode[] {
  const nodes: SvgNode[] = []
  const { frame, y } = f

  for (const tick of y.ticks) {
    const raw = px(yOf(tick, y, frame))
    const ty = coord(raw)
    nodes.push({ tag: 'line', cls: 'grid', attrs: { x1: frame.left, y1: ty, x2: frame.right, y2: ty } })
    nodes.push({
      tag: 'text',
      cls: 'ax ar',
      attrs: { x: L.tickLabelX, y: coord(raw + L.tickLabelDy) },
      text: svgNumber(tick, decimalsOf(y.ticks)),
    })
  }

  if (L.axisLabel) {
    nodes.push({
      tag: 'text',
      cls: 'ax',
      attrs: { x: L.axisLabel.x, y: L.axisLabel.y, 'text-anchor': L.axisLabel.anchor },
      text: L.axisLabel.text,
    })
  }

  const xLabels = (): void => {
    if (L.xLabelY === undefined || !f.xAxis) return
    f.xAxis.ticks.forEach((tick, i, all) => {
      nodes.push({
        tag: 'text',
        cls: 'ax',
        attrs: {
          x: coord(xOfValue(tick, f.xAxis as NonNullable<typeof f.xAxis>, frame)),
          y: L.xLabelY as number,
          'text-anchor': anchorAt(i, all.length),
        },
        text: svgNumber(tick, 0, false),
      })
    })
  }

  if (!L.xLabelsLast) xLabels()

  nodes.push({
    tag: 'line',
    cls: 'axis',
    attrs: { x1: frame.left, y1: L.axisLineY, x2: frame.right, y2: L.axisLineY },
  })

  for (const s of f.series) {
    nodes.push({
      tag: 'polyline',
      cls: `ln ${s.color}`,
      attrs: { points: polylinePoints(s.values, y, frame, f.x, f.xAxis) },
    })
  }

  for (const s of f.series) {
    const lastIndex = lastDefined(s.values)
    if (lastIndex < 0 || !s.label) continue
    const cxRaw = px(xAt(lastIndex, f.x, frame, f.xAxis))
    const cyRaw = px(yOf(s.values[lastIndex] as number, y, frame))
    nodes.push({
      tag: 'circle',
      cls: `dot ${s.color}`,
      attrs: { cx: coord(cxRaw), cy: coord(cyRaw), r: L.dotR },
    })
    nodes.push({
      tag: 'text',
      cls: `lbl ${s.color}t`,
      attrs: { x: coord(cxRaw + L.endLabelDx), y: coord(cyRaw + L.endLabelDy) },
      text: s.label,
    })
  }

  const bands = L.bands
  const ann = f.annotations
  if (bands && ann) {
    for (const m of ann.mandates ?? []) {
      const a = xAt(m.from, f.x, frame, f.xAxis)
      const b = xAt(m.to, f.x, frame, f.xAxis)
      nodes.push({
        tag: 'rect',
        cls: `pr pr-${m.bloc}`,
        attrs: { x: coord(a), y: bands.y, width: coord(b - a), height: bands.height, rx: bands.rx },
      })
      nodes.push({
        tag: 'text',
        cls: 'prl',
        attrs: { x: coord((a + b) / 2), y: bands.y + bands.labelDy, 'text-anchor': 'middle' },
        text: m.label,
      })
    }
    for (const c of ann.cohabitations ?? []) {
      const x1 = px(xAt(c.from, f.x, frame, f.xAxis))
      const x2 = px(xAt(c.to, f.x, frame, f.xAxis))
      nodes.push({
        tag: 'rect',
        cls: 'coh',
        attrs: { x: coord(x1), y: bands.y, width: coord(x2 - x1), height: bands.height, rx: bands.rx },
      })
    }
  }

  if (L.xLabelsLast) xLabels()

  return nodes
}

function buildBars(f: Series, L: BarLayout): SvgNode[] {
  const nodes: SvgNode[] = []
  const { frame, y } = f
  const scale = (frame.right - frame.left) / (y.max - y.min)

  for (const tick of y.ticks) {
    const tx = coord(frame.left + (tick - y.min) * scale)
    nodes.push({ tag: 'line', cls: 'grid', attrs: { x1: tx, y1: L.gridTop, x2: tx, y2: L.gridBottom } })
    nodes.push({
      tag: 'text',
      cls: 'ax',
      attrs: { x: tx, y: L.tickLabelY, 'text-anchor': 'middle' },
      text: svgNumber(tick, decimalsOf(y.ticks)),
    })
  }

  f.x.forEach((category, g) => {
    const groupY = L.firstBarY + g * L.groupPitch
    nodes.push({
      tag: 'text',
      cls: 'ax al',
      attrs: { x: L.catLabelX, y: roundHalfEven(groupY + L.catLabelDy) },
      text: String(category),
    })
    let cursor = frame.left
    f.series.forEach((s, k) => {
      const value = s.values[g]
      if (value === null) return
      const width = Math.max(px(value * scale), 1)
      const barY = L.stacked ? groupY : groupY + k * L.barPitch
      const barX = L.stacked ? px(cursor) : frame.left
      nodes.push({
        tag: 'rect',
        cls: `bar ${s.color}f`,
        attrs: {
          x: L.stacked ? coord(barX) : barX,
          y: barY,
          width: coord(width),
          height: L.barHeight,
          rx: L.rx,
        },
      })
      if (!L.stacked) {
        nodes.push({
          tag: 'text',
          cls: L.valueClasses[k] ?? 'lbl mut',
          attrs: {
            x: coord(barX + width + L.valueLabelDx),
            y: roundHalfEven(barY + L.valueLabelDy),
          },
          text: svgNumber(value, s.decimals ?? 0),
        })
      }
      cursor += width
    })
  })

  return nodes
}

function lastDefined(values: readonly (number | null)[]): number {
  for (let i = values.length - 1; i >= 0; i--) if (values[i] !== null) return i
  return -1
}

function decimalsOf(ticks: readonly number[]): number {
  return Math.max(...ticks.map((t) => (String(t).split('.')[1] ?? '').length))
}
