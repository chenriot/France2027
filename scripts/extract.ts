/**
 * Migration du document d'origine vers les 21 répertoires de chapitre.
 *
 *   npm run extract
 *
 * Lit `Temp/chiffres2027 (3).html` et écrit, pour chaque chapitre,
 * `page.tsx`, `content.tsx` et `data.ts`, plus le registre `src/data/sources.ts`
 * et le sommaire `src/data/chapters.ts`.
 *
 * Deux garanties, vérifiées par le script lui-même et reportées en fin
 * d'exécution :
 *
 *  1. Aucune cellule chiffrée n'est convertie en nombre si `formatNum` ne
 *     reproduit pas exactement la chaîne d'origine (sinon elle reste du texte).
 *  2. Aucune figure n'est convertie en valeurs si la reprojection de ces
 *     valeurs ne retombe pas sur les coordonnées d'origine à 0,6 px près.
 */
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { parse } from 'node-html-parser'
import type { HTMLElement } from 'node-html-parser'
import { NodeType } from 'node-html-parser'
import { lit, parseCell, slugify, stripTags, toJsx, unique, decodeEntities } from './lib-extract'
import { px, valueOfX, valueOfY, xAt, xOf, xOfValue, yOf } from '../src/lib/scales'
import { buildChart } from '../src/lib/chart'
import type { SvgNode } from '../src/lib/chart'
import type {
  Axis, BarLayout, Cell, ChapterMeta, Column, Figure, Frame, LineLayout, RawFigure, Row,
  Series, SeriesColor, SeriesLine, SvgShell, Table,
} from '../src/lib/types'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const SOURCE_HTML = join(ROOT, 'Temp', 'chiffres2027 (3).html')
const CHAPTERS_DIR = join(ROOT, 'src', 'app', '(chapitres)')

// ------------------------------------------------------- table des chapitres

interface ChapterSpec {
  readonly anchor: string
  readonly slug: string
  readonly kind: 'synthese' | 'theme' | 'annexe'
}

const CHAPTERS: readonly ChapterSpec[] = [
  { anchor: 'synth', slug: 'synthese', kind: 'synthese' },
  { anchor: 's1', slug: 'depenses-publiques', kind: 'theme' },
  { anchor: 's2', slug: 'dette-deficit', kind: 'theme' },
  { anchor: 's3', slug: 'retraites-travail', kind: 'theme' },
  { anchor: 's4', slug: 'emploi-chomage', kind: 'theme' },
  { anchor: 's5', slug: 'industrie', kind: 'theme' },
  { anchor: 's6', slug: 'commerce-exterieur', kind: 'theme' },
  { anchor: 's7', slug: 'immigration', kind: 'theme' },
  { anchor: 's8', slug: 'ecologie-climat', kind: 'theme' },
  { anchor: 's9', slug: 'energie', kind: 'theme' },
  { anchor: 's10', slug: 'europe', kind: 'theme' },
  { anchor: 's11', slug: 'sante', kind: 'theme' },
  { anchor: 's12', slug: 'securite-justice', kind: 'theme' },
  { anchor: 's13', slug: 'logement', kind: 'theme' },
  { anchor: 's14', slug: 'education', kind: 'theme' },
  { anchor: 's15', slug: 'niveau-de-vie', kind: 'theme' },
  { anchor: 's16', slug: 'efficacite-etat', kind: 'theme' },
  { anchor: 's17', slug: 'demographie', kind: 'theme' },
  { anchor: 's18', slug: 'perception-realite', kind: 'theme' },
  { anchor: 's19', slug: 'grille-promesses', kind: 'annexe' },
  { anchor: 's20', slug: 'explique-simplement', kind: 'annexe' },
]

/** Le document annonce lui-même ce chapitre comme partiel. */
const PARTIAL = new Set(['perception-realite'])
const UPDATED = '2026-08'

/** Producteurs engagés dans le débat, signalés comme tels par la méthodologie. */
const ENGAGED = [
  'IFRAP', 'Rexecode', 'Institut Montaigne', 'Terra Nova', 'Basta',
  'Observatoire de l’immigration', 'Observatoire de l\'immigration', 'Fondation Jean-Jaurès',
  'Contribuables associés', 'Institut économique Molinari',
]

/** Producteurs reconnus, dans l'ordre de priorité de détection. */
const PRODUCERS = [
  'Eurostat', 'Insee', 'INSEE', 'OCDE', 'DREES', 'DARES', 'SSMSI', 'SDES', 'DEPP', 'DGFiP',
  'DG Trésor', 'France Travail', 'Pôle emploi', 'Unédic', 'COR', 'Cour des comptes',
  'Banque de France', 'Banque mondiale', 'FMI', 'RTE', 'ADEME', 'Citepa', 'Ademe',
  'Our World in Data', 'Douanes', 'CEPEJ', 'Ministère de la Justice', 'Ministère de l\'Intérieur',
  'OFII', 'OFPRA', 'Eurostat/OCDE', 'ONU', 'AIE', 'IEA', 'GIEC', 'Santé publique France',
  'ANSES', 'CNAF', 'CNAV', 'Urssaf', 'ACOSS', 'HCFEA', 'France Stratégie', 'CAE',
  ...ENGAGED,
]

// -------------------------------------------------------------- diagnostics

const report = {
  tables: 0,
  cellsNumeric: 0,
  cellsText: 0,
  figures: 0,
  figuresOk: 0,
  figuresFallback: [] as string[],
  vintageMissing: [] as string[],
  axisInconsistent: [] as string[],
  svgMismatch: [] as string[],
  svgProven: 0,
  valuesOnly: 0,
  sourcesMissing: [] as string[],
  maxPixelDrift: 0,
}

// ----------------------------------------------------------------- sources

interface SourceEntry {
  producer: string
  kind: 'database' | 'report' | 'press' | 'other'
  datasets?: string[]
  text: string
  theme: string
  engaged?: true
  accessed: string
}

const sourceById = new Map<string, SourceEntry>()
const sourceIdByText = new Map<string, string>()
const takenSourceIds = new Set<string>()

function registerSource(el: HTMLElement, theme: string): string {
  const html = el.innerHTML.trim()
  const existing = sourceIdByText.get(html)
  if (existing) return existing

  const text = decodeEntities(stripTags(html))
  const producer = PRODUCERS.find((p) => text.includes(p)) ?? text.split(/[:,(]/)[0].trim().slice(0, 40)
  const datasets = el.querySelectorAll('span.num').map((n) => decodeEntities(n.text.trim()))
  const engaged = ENGAGED.some((p) => text.includes(p))
  const base = slugify(`${producer} ${datasets[0] ?? text.slice(0, 40)}`) || slugify(text.slice(0, 40))
  const id = unique(base, takenSourceIds)

  sourceIdByText.set(html, id)
  sourceById.set(id, {
    producer,
    kind: datasets.length > 0 ? 'database' : /rapport|étude|note|avis/i.test(text) ? 'report' : 'other',
    ...(datasets.length > 0 ? { datasets } : {}),
    text: html,
    theme,
    ...(engaged ? { engaged: true as const } : {}),
    accessed: UPDATED,
  })
  return id
}

/** Millésime : première année plausible citée dans le texte fourni. */
function guessVintage(...texts: readonly string[]): string | undefined {
  for (const t of texts) {
    const years = [...t.matchAll(/\b(19[5-9]\d|20[0-4]\d)\b/g)].map((m) => Number(m[1]))
    if (years.length > 0) return String(Math.max(...years))
  }
  return undefined
}

// ---------------------------------------------------------------- tableaux

function extractTable(
  wrapper: HTMLElement,
  sources: readonly string[],
  vintageHints: readonly string[],
): Table {
  const table = wrapper.querySelector('table')
  if (!table) throw new Error('div.tw sans <table>')

  const headCells = table.querySelectorAll('thead th')
  const bodyTrs = table.querySelectorAll('tbody tr')

  // L'alignement d'une colonne se lit dans son corps, pas dans son en-tête :
  // plusieurs tableaux du document portent `class="n"` sur les cellules sans
  // le porter sur le titre. Le corps est la source qui décrit le rendu réel.
  const numericColumn = (i: number): boolean => {
    const cells = bodyTrs
      .map((tr) => tr.querySelectorAll('td, th')[i])
      .filter((td): td is HTMLElement => td !== undefined)
    if (cells.length === 0) return headCells[i]?.classList.contains('n') ?? false
    const numeric = cells.filter((td) => td.classList.contains('n')).length
    return numeric * 2 > cells.length
  }

  const columns: Column[] = headCells.map((th, i) => ({
    key: slugify(th.text) || `c${i + 1}`,
    header: decodeEntities(th.innerHTML.trim()),
    type: numericColumn(i) ? 'number' : 'text',
    headerNumeric: th.classList.contains('n'),
  }))

  const readRow = (tr: HTMLElement): Row => {
    const cells = tr.querySelectorAll('td, th').map((td, i) => {
      const colSpan = Number(td.getAttribute('colspan') ?? '1')
      const numeric = td.classList.contains('n')
      const cell = parseCell(decodeEntities(td.innerHTML), {
        ...(colSpan > 1 ? { cs: colSpan } : {}),
        ...(numeric !== (columns[i]?.type === 'number') ? { n: numeric } : {}),
      })
      if (cell !== null && 'v' in cell) report.cellsNumeric++
      else if (cell !== null) report.cellsText++
      return cell
    })
    return {
      cells,
      ...(tr.classList.contains('hi') ? { emphasis: true as const } : {}),
      ...(tr.classList.contains('tot') ? { total: true as const } : {}),
      ...(tr.classList.contains('sep') ? { separator: true as const } : {}),
      ...(tr.classList.contains('hole-row') ? { missing: true as const } : {}),
    }
  }

  const bodyRows = table.querySelectorAll('tbody tr').map(readRow)
  const looseRows = table.querySelectorAll('tr').filter(
    (tr) => !tr.closest('thead') && !tr.closest('tbody'),
  )
  const rows = bodyRows.length > 0 ? bodyRows : looseRows.map(readRow)

  const headerText = columns.map((c) => c.header).join(' ')
  const vintage = guessVintage(headerText, ...vintageHints) ?? 'à confirmer'

  return {
    vintage,
    sources: sources as unknown as Table['sources'],
    columns,
    rows,
  }
}

// ----------------------------------------------------------------- figures

const COLOR_OF: Record<string, SeriesColor> = {
  s1: 's1', s2: 's2', s3: 's3', s4: 's4', s5: 's5',
  s1f: 's1', s2f: 's2', s3f: 's3', s4f: 's4', s5f: 's5',
  s1t: 's1', s2t: 's2', s3t: 's3', s4t: 's4', s5t: 's5',
  k1: 's1', k2: 's2', k3: 's3', k4: 's4', k5: 's5',
}

/** Régression linéaire : renvoie la fonction valeur → position ajustée. */
function fitLine(xs: readonly number[], ys: readonly number[]): (v: number) => number {
  const n = xs.length
  if (n < 2) return () => ys[0] ?? 0
  const mx = xs.reduce((a, b) => a + b, 0) / n
  const my = ys.reduce((a, b) => a + b, 0) / n
  const den = xs.reduce((a, x) => a + (x - mx) ** 2, 0)
  const slope = den === 0 ? 0 : xs.reduce((a, x, i) => a + (x - mx) * (ys[i] - my), 0) / den
  return (v) => my + slope * (v - mx)
}

/**
 * Échelle qui minimise l'écart aux largeurs observées, contrainte à rester dans
 * l'incertitude d'arrondi de la grille.
 */
function fitScale(pairs: readonly { v: number; w: number }[], fallback: number): number {
  const usable = pairs.filter((p) => p.v !== 0 && p.w > 1)
  if (usable.length === 0) return fallback
  const num = usable.reduce((acc, p) => acc + p.v * p.w, 0)
  const den = usable.reduce((acc, p) => acc + p.v * p.v, 0)
  const fitted = den === 0 ? fallback : num / den
  return Math.abs(fitted - fallback) / fallback < 0.001 ? fitted : fallback
}

/**
 * Décalage constant d'une série de mesures. Un décalage qui alterne entre `d`
 * et `d+1` trahit un arrondi au pair le plus proche sur `d + 0,5` : c'est ce
 * demi-pixel qu'il faut retenir pour régénérer les mêmes coordonnées.
 */
function offsetOf(offsets: readonly (number | null)[], fallback: number): number {
  const set = [...new Set(offsets.filter((o): o is number => o !== null))].sort((a, b) => a - b)
  if (set.length === 0) return fallback
  if (set.length === 1) return set[0]
  if (set.length === 2 && Math.abs(set[1] - set[0] - 1) < 1e-9) return set[0] + 0.5
  return set[0]
}

/** Décimales affichées par une étiquette : « 2,31 » → 2, « 29 » → 0. */
function decimalsOf(text: string): number {
  const m = /,(\d+)/.exec(decodeEntities(text))
  return m ? m[1].length : 0
}

/**
 * Vérifie qu'un axe est bien linéaire : des graduations régulièrement espacées
 * en pixels doivent porter des valeurs régulièrement espacées. Le contraire est
 * une anomalie du document d'origine, pas une échelle à reproduire.
 */
function isLinear(xs: readonly number[], vs: readonly number[]): boolean {
  if (xs.length < 3) return true
  const perPx = (vs[vs.length - 1] - vs[0]) / (xs[xs.length - 1] - xs[0])
  // Les positions du document d'origine sont arrondies au dixième de pixel :
  // la tolérance est exprimée en pixels, pas en valeur absolue.
  const tolerance = Math.abs(perPx) * 0.6
  return xs.every((x, i) => Math.abs(vs[0] + (x - xs[0]) * perPx - vs[i]) <= tolerance)
}

function num(el: HTMLElement, attr: string): number {
  return Number(el.getAttribute(attr) ?? '0')
}

/** Toutes les espaces utilisées comme séparateur de milliers dans l'original. */
const SPACES = /[\s\u00a0\u202f\u2009]/g

function parseAxisValue(text: string): number | null {
  const t = decodeEntities(text).replace(/−/g, '-').replace(SPACES, '').replace(',', '.')
  const m = /^-?\d+(?:\.\d+)?/.exec(t)
  return m ? Number(m[0]) : null
}

interface FigureResult {
  readonly series: Series
  readonly drift: number
}

function extractFigure(fig: HTMLElement, sources: readonly string[], vintageHints: readonly string[]): FigureResult | null {
  const svg = fig.querySelector('svg')
  if (!svg) return null
  const viewBox = svg.getAttribute('viewBox') ?? '0 0 720 300'
  const [, , vbW, vbH] = viewBox.split(/\s+/).map(Number)
  const shell: SvgShell = {
    viewBox,
    titleId: svg.getAttribute('aria-labelledby') ?? '',
    title: decodeEntities(svg.querySelector('title')?.text.trim() ?? ''),
    preserveAspectRatio: svg.getAttribute('preserveAspectRatio') ?? undefined,
  }

  // Titres et sous-titres portent parfois `<sup>`, `<em>`, `<i>` : on garde le
  // balisage, `.text` l'effacerait silencieusement.
  const title = decodeEntities(fig.querySelector('.fig-title')?.innerHTML.trim() ?? 'Figure')
  const subtitle = decodeEntities(fig.querySelector('.fig-sub')?.innerHTML.trim() ?? '') || undefined
  // La légende porte du balisage (`<b>`, `<em>`) qu'il faut conserver :
  // `.text` l'effacerait silencieusement.
  const caption = decodeEntities(fig.querySelector('figcaption')?.innerHTML.trim() ?? '') || undefined
  const caveat = undefined

  const legend = fig.querySelectorAll('.keyrow span').map((sp) => {
    const marker = sp.querySelector('i')
    const cls = marker?.classList.value.find((c) => c in COLOR_OF)
    return { color: COLOR_OF[cls ?? 'k1'] ?? 's1', label: decodeEntities(sp.text.trim()) }
  })

  const grids = svg.querySelectorAll('line.grid')
  const axisTexts = svg.querySelectorAll('text.ax')
  const polylines = svg.querySelectorAll('polyline.ln')
  const isLine = polylines.length > 0

  const vintage = guessVintage(title, subtitle ?? '', ...vintageHints) ?? 'à confirmer'
  const common = {
    svg: shell,
    title,
    subtitle,
    caption,
    caveat,
    sources: sources as unknown as Series['sources'],
    vintage,
    legend: legend.length > 0 ? legend : undefined,
  }

  if (isLine) return extractLine(svg, grids, axisTexts, polylines, vbW, vbH, common)
  return extractBars(svg, grids, axisTexts, vbW, vbH, common)
}

type CommonFields = Omit<Series, 'type' | 'x' | 'xAxis' | 'y' | 'series' | 'frame' | 'annotations' | 'layout'>

function extractLine(
  svg: HTMLElement,
  grids: readonly HTMLElement[],
  axisTexts: readonly HTMLElement[],
  polylines: readonly HTMLElement[],
  vbW: number,
  vbH: number,
  common: CommonFields,
): FigureResult | null {
  // Graduations horizontales : chaque ligne de grille porte une valeur à gauche.
  const ticks: { y: number; value: number }[] = []
  for (const g of grids) {
    const y1 = num(g, 'y1')
    if (Math.abs(y1 - num(g, 'y2')) > 0.01) continue
    const label = axisTexts.find(
      (t) => t.classList.contains('ar') && Math.abs(num(t, 'y') - y1) <= 5,
    )
    const value = label ? parseAxisValue(label.text) : null
    if (value !== null) ticks.push({ y: y1, value })
  }
  if (ticks.length < 2) return null

  ticks.sort((a, b) => b.y - a.y)
  // Les ordonnées de grille sont arrondies au dixième de pixel : prendre les
  // deux extrêmes laisse une ambiguïté qui décale les graduations
  // intermédiaires. Une régression sur l'ensemble des graduations retrouve
  // l'échelle exacte.
  const fit = fitLine(ticks.map((t) => t.value), ticks.map((t) => t.y))
  const frame: Frame = {
    width: vbW,
    height: vbH,
    left: num(grids[0], 'x1'),
    right: num(grids[0], 'x2'),
    top: fit(ticks[ticks.length - 1].value),
    bottom: fit(ticks[0].value),
  }
  const y: Axis = {
    min: ticks[0].value,
    max: ticks[ticks.length - 1].value,
    ticks: ticks.map((t) => t.value),
    label: axisTexts.find((t) => !t.classList.contains('ar') && !t.classList.contains('al'))?.text.trim(),
  }

  let drift = 0
  const rawPoints: { pts: number[][]; values: number[]; index: number }[] = []
  const series: SeriesLine[] = []
  for (const pl of polylines) {
    const cls = pl.classList.value.find((c) => c in COLOR_OF) ?? 's1'
    const pts = (pl.getAttribute('points') ?? '')
      .trim()
      .split(/\s+/)
      .map((p) => p.split(',').map(Number))
    const values = pts.map(([, py]) => Math.round(valueOfY(py, y, frame) * 1000) / 1000)
    rawPoints.push({ pts, values, index: series.length })
    const dot = svg.querySelectorAll('circle.dot').find((d) => d.classList.contains(cls))
    const label = dot
      ? svg.querySelectorAll('text.lbl').find(
          (t) => t.classList.contains(`${cls}t`) && Math.abs(num(t, 'y') - num(dot, 'cy')) <= 6,
        )
      : undefined
    series.push({
      key: cls,
      color: COLOR_OF[cls],
      label: label ? decodeEntities(label.text.trim()) : undefined,
      values,
    })
  }

  // Axe des abscisses : deux étiquettes numériques sous le repère suffisent à
  // reconstituer l'échelle, et donc la valeur de x de chaque point. Sans elles,
  // les points sont réputés régulièrement espacés.
  const xTicks = axisTexts
    .filter(
      (t) =>
        !t.classList.contains('ar') &&
        !t.classList.contains('al') &&
        t.getAttribute('text-anchor') !== undefined &&
        num(t, 'y') > frame.bottom,
    )
    .map((t) => ({ x: num(t, 'x'), value: parseAxisValue(t.text) }))
    .filter((t): t is { x: number; value: number } => t.value !== null)
    .sort((a, b) => a.x - b.x)

  const xTickY = xTicks.length > 0
    ? num(
        axisTexts.filter(
          (t) => !t.classList.contains('ar') && !t.classList.contains('al') && num(t, 'y') > frame.bottom,
        )[0],
        'y',
      )
    : 0
  let xAxis: Axis | undefined
  let x: (string | number)[]

  if (xTicks.length >= 2) {
    const [a, b] = [xTicks[0], xTicks[xTicks.length - 1]]
    const perPx = (b.value - a.value) / (b.x - a.x)
    const raw = (pxv: number) => a.value + (pxv - a.x) * perPx
    // On n'arrondit aux entiers que si toutes les abscisses en sont proches :
    // une échelle en multiples du SMIC, par exemple, a des points fractionnaires
    // qu'un arrondi confondrait.
    const allX = rawPoints.flatMap((r) => r.pts.map(([pxv]) => raw(pxv)))
    const integral = allX.every((v) => Math.abs(v - Math.round(v)) < 0.02)
    const at = (pxv: number) =>
      integral ? Math.round(raw(pxv)) : Math.round(raw(pxv) * 1000) / 1000
    xAxis = { min: at(frame.left), max: at(frame.right), ticks: xTicks.map((t) => t.value) }

    // Les séries n'ont pas toutes les mêmes points : on prend l'union des
    // abscisses et on complète par `null`, plutôt que d'aligner à l'aveugle.
    const union = [...new Set(rawPoints.flatMap((r) => r.pts.map(([pxv]) => at(pxv))))].sort(
      (p, q) => p - q,
    )
    x = union
    for (const r of rawPoints) {
      const byX = new Map(r.pts.map(([pxv], i) => [at(pxv), r.values[i]]))
      series[r.index] = { ...series[r.index], values: union.map((v) => byX.get(v) ?? null) }
    }
  } else {
    const count = Math.max(...rawPoints.map((r) => r.values.length), 0)
    x = Array.from({ length: count }, () => '')
  }

  const count = x.length
  const mandates = svg.querySelectorAll('rect.pr').map((r) => {
    const bloc = r.classList.contains('pr-g') ? 'g' : r.classList.contains('pr-c') ? 'c' : 'd'
    const from = (num(r, 'x') - frame.left) / (frame.right - frame.left)
    const to = (num(r, 'x') + num(r, 'width') - frame.left) / (frame.right - frame.left)
    const label = svg
      .querySelectorAll('text.prl')
      .find((t) => Math.abs(num(t, 'x') - (num(r, 'x') + num(r, 'width') / 2)) <= 1)
    return {
      label: label ? decodeEntities(label.text.trim()) : '',
      from: Math.round(from * (count - 1) * 10000) / 10000,
      to: Math.round(to * (count - 1) * 10000) / 10000,
      bloc: bloc as 'd' | 'g' | 'c',
    }
  })
  const cohabitations = svg.querySelectorAll('rect.coh').map((r) => {
    const from = ((num(r, 'x') - frame.left) / (frame.right - frame.left)) * (count - 1)
    const to = ((num(r, 'x') + num(r, 'width') - frame.left) / (frame.right - frame.left)) * (count - 1)
    return { from: Math.round(from * 10000) / 10000, to: Math.round(to * 10000) / 10000 }
  })

  for (const r of rawPoints) {
    const vals = series[r.index].values
    let k = 0
    for (const [origX, origY] of r.pts) {
      while (k < vals.length && vals[k] === null) k++
      if (k >= vals.length) break
      drift = Math.max(
        drift,
        Math.abs(px(xAt(k, x, frame, xAxis)) - origX),
        Math.abs(px(yOf(vals[k] as number, y, frame)) - origY),
      )
      k++
    }
  }

  const firstTickLabel = axisTexts.find((t) => t.classList.contains('ar'))
  const axisLabelEl = axisTexts.find((t) => t.getAttribute('text-anchor') === 'end')
  const axisLine = svg.querySelector('line.axis')
  const dot0 = svg.querySelector('circle.dot')
  const dotLabel0 = dot0
    ? svg.querySelectorAll('text.lbl').find((t) => Math.abs(num(t, 'y') - num(dot0, 'cy')) <= 6)
    : undefined
  const bandRect = svg.querySelector('rect.pr')
  const bandLabel = svg.querySelector('text.prl')
  const layout: LineLayout = {
    kind: 'line',
    tickLabelX: firstTickLabel ? num(firstTickLabel, 'x') : frame.left - 9,
    tickLabelDy: firstTickLabel ? Math.round((num(firstTickLabel, 'y') - frame.bottom) * 10) / 10 : 4,
    axisLabel: axisLabelEl
      ? {
          x: num(axisLabelEl, 'x'),
          y: num(axisLabelEl, 'y'),
          text: decodeEntities(axisLabelEl.text.trim()),
          anchor: 'end',
        }
      : undefined,
    axisLineY: axisLine ? num(axisLine, 'y1') : frame.bottom,
    dotR: dot0 ? num(dot0, 'r') : 4,
    endLabelDx: dot0 && dotLabel0 ? Math.round((num(dotLabel0, 'x') - num(dot0, 'cx')) * 10) / 10 : 8,
    endLabelDy: dot0 && dotLabel0 ? Math.round((num(dotLabel0, 'y') - num(dot0, 'cy')) * 10) / 10 : 4,
    xLabelY: xTicks.length >= 2 ? xTickY : undefined,
    ...(bandRect && xTicks.length >= 2 ? { xLabelsLast: true as const } : {}),
    bands: bandRect
      ? {
          y: num(bandRect, 'y'),
          height: num(bandRect, 'height'),
          rx: num(bandRect, 'rx'),
          labelDy: bandLabel ? num(bandLabel, 'y') - num(bandRect, 'y') : 12,
          patternId: svg.querySelector('pattern')?.getAttribute('id') ?? '',
        }
      : undefined,
  }

  return {
    drift,
    series: {
      ...common,
      type: 'line',
      layout,
      xAxis,
      x,
      y,
      series,
      frame,
      annotations:
        mandates.length > 0 || cohabitations.length > 0
          ? {
              ...(mandates.length > 0 ? { mandates } : {}),
              ...(cohabitations.length > 0 ? { cohabitations } : {}),
            }
          : undefined,
    },
  }
}

function extractBars(
  svg: HTMLElement,
  grids: readonly HTMLElement[],
  axisTexts: readonly HTMLElement[],
  vbW: number,
  vbH: number,
  common: CommonFields,
): FigureResult | null {
  // Grille verticale : chaque ligne porte une valeur sous l'axe.
  const ticks: { x: number; value: number }[] = []
  for (const g of grids) {
    const x1 = num(g, 'x1')
    if (Math.abs(x1 - num(g, 'x2')) > 0.01) continue
    const label = axisTexts.find(
      (t) => t.getAttribute('text-anchor') === 'middle' && Math.abs(num(t, 'x') - x1) <= 6,
    )
    const value = label ? parseAxisValue(label.text) : null
    if (value !== null) ticks.push({ x: x1, value })
  }
  if (ticks.length < 2) return null
  ticks.sort((a, b) => a.x - b.x)
  if (!isLinear(ticks.map((t) => t.x), ticks.map((t) => t.value))) {
    report.axisInconsistent.push(common.title)
    return null
  }

  const rects = svg.querySelectorAll('rect.bar')
  if (rects.length === 0) return null

  const frame: Frame = {
    width: vbW,
    height: vbH,
    left: ticks[0].x,
    right: ticks[ticks.length - 1].x,
    top: num(grids[0], 'y1'),
    bottom: num(grids[0], 'y2'),
  }
  const y: Axis = {
    min: ticks[0].value,
    max: ticks[ticks.length - 1].value,
    ticks: ticks.map((t) => t.value),
  }
  const scale = (frame.right - frame.left) / (y.max - y.min)

  const catLabels = axisTexts
    .filter((t) => t.classList.contains('al'))
    .map((t) => ({ y: num(t, 'y'), text: decodeEntities(t.text.trim()) }))
    .sort((a, b) => a.y - b.y)
  if (catLabels.length === 0) return null

  const labels = svg.querySelectorAll('text.lbl')
  const bars = rects
    .map((r) => {
      const cls = r.classList.value.find((c) => c in COLOR_OF) ?? 's1f'
      const width = num(r, 'width')
      const label = labels.find(
        (t) =>
          Math.abs(num(t, 'y') - (num(r, 'y') + num(r, 'height') - 2)) <= 3 &&
          num(t, 'x') >= num(r, 'x') + width,
      )
      const fromLabel = label ? parseAxisValue(label.text) : null
      const decimals = label ? decimalsOf(label.text) : undefined
      // La largeur porte plus de précision que l'étiquette, qui est arrondie
      // à l'affichage : on retient la valeur exacte et on note les décimales
      // à afficher. L'étiquette ne l'emporte que si la largeur la contredit.
      const fromWidth = Math.round((width / scale) * 1000) / 1000
      const consistent =
        fromLabel !== null && decimals !== undefined
          ? Math.abs(Number(fromWidth.toFixed(decimals)) - fromLabel) < 1e-9
          : false
      return {
        color: COLOR_OF[cls],
        y: num(r, 'y'),
        x: num(r, 'x'),
        width,
        value: consistent || fromLabel === null ? fromWidth : fromLabel,
        decimals,
      }
    })
    .sort((a, b) => a.y - b.y || a.x - b.x)

  // Deux dispositions : empilée (plusieurs barres sur la même ligne) ou
  // groupée (une barre par ligne, plusieurs lignes par catégorie).
  const byRow = new Map<number, typeof bars>()
  for (const b of bars) {
    const row = byRow.get(b.y) ?? []
    row.push(b)
    byRow.set(b.y, row)
  }
  const rows = [...byRow.entries()].sort(([a], [b]) => a - b).map(([, v]) => v)
  const stacked = rows.some((r) => r.length > 1)

  let groups: (typeof bars)[]
  let type: 'bar' | 'stacked-bar'
  if (stacked) {
    if (rows.length !== catLabels.length) return null
    // Dans une pile, l'étiquette affichée est le total de la ligne : chaque
    // segment tire donc sa valeur de sa seule largeur.
    groups = rows.map((row) =>
      row.map((b) => ({ ...b, value: Math.round((b.width / scale) * 1000) / 1000, decimals: undefined })),
    )
    type = 'stacked-bar'
  } else {
    const perCat = Math.round(bars.length / catLabels.length)
    if (perCat < 1 || bars.length !== perCat * catLabels.length) return null
    groups = []
    for (let i = 0; i < bars.length; i += perCat) groups.push(bars.slice(i, i + perCat))
    type = 'bar'
  }

  const depth = Math.max(...groups.map((g) => g.length))
  if (groups.some((g) => g.length !== depth)) return null

  const series: SeriesLine[] = Array.from({ length: depth }, (_, k) => ({
    key: `b${k + 1}`,
    color: groups[0][k].color,
    label: common.legend?.[k]?.label,
    values: groups.map((g) => g[k].value),
    decimals: groups[0][k].decimals,
  }))

  // Les positions de grille sont arrondies au dixième de pixel : elles ne
  // déterminent l'échelle qu'à 2 pour 10 000 près, ce qui suffit à faire basculer
  // une largeur de 148,3 à 148,4. On recalibre donc l'échelle par moindres
  // carrés sur les largeurs, puis on vérifie que la grille retombe bien juste.
  const fitted = fitScale(groups.flat().map((b) => ({ v: b.value, w: b.width })), scale)
  const calibrated: Frame = { ...frame, right: frame.left + fitted * (y.max - y.min) }
  if (y.ticks.every((t) => px(calibrated.left + (t - y.min) * fitted) === px(frame.left + (t - y.min) * scale))) {
    Object.assign(frame, calibrated)
  }
  const finalScale = (frame.right - frame.left) / (y.max - y.min)

  // Vérification : reprojeter les valeurs doit redonner les largeurs d'origine.
  // Une barre de valeur nulle est tracée 1 px de large dans le document source.
  let drift = 0
  for (const g of groups) {
    let cursor = frame.left
    for (const b of g) {
      const expectedWidth = Math.max(px(b.value * finalScale), 1)
      drift = Math.max(drift, Math.abs(expectedWidth - Math.max(b.width, 1)))
      if (type === 'stacked-bar') {
        drift = Math.max(drift, Math.abs(px(cursor) - b.x))
        // Les segments s'enchaînent sur les largeurs rendues, pas sur les
        // largeurs exactes : c'est ce que fait le document d'origine.
        cursor += expectedWidth
      }
    }
  }

  const firstBar = groups[0][0]
  const valueLabelRef = labels.find(
    (t) =>
      Math.abs(num(t, 'y') - (firstBar.y + Number(rects[0].getAttribute('height') ?? 12) - 2)) <= 3 &&
      num(t, 'x') >= firstBar.x + firstBar.width,
  )
  const barHeight = Number(rects[0].getAttribute('height') ?? 12)
  const layout: BarLayout = {
    kind: 'bar',
    gridTop: num(grids[0], 'y1'),
    gridBottom: num(grids[0], 'y2'),
    tickLabelY: num(
      axisTexts.filter((t) => t.getAttribute('text-anchor') === 'middle')[0],
      'y',
    ),
    catLabelX: num(axisTexts.filter((t) => t.classList.contains('al'))[0], 'x'),
    catLabelDy: offsetOf(catLabels.map((c, i) => c.y - groups[i][0].y), 25),
    barHeight,
    barPitch: groups[0].length > 1 && !stacked ? groups[0][1].y - groups[0][0].y : barHeight + 3,
    groupPitch: groups.length > 1 ? groups[1][0].y - groups[0][0].y : barHeight + 3,
    firstBarY: groups[0][0].y,
    valueLabelDx: valueLabelRef ? Math.round((num(valueLabelRef, 'x') - (firstBar.x + firstBar.width)) * 10) / 10 : 7,
    valueLabelDy: offsetOf(
      bars.map((b) => {
        const lab = labels.find(
          (t) => Math.abs(num(t, 'y') - (b.y + barHeight - 2)) <= 3 && num(t, 'x') >= b.x + b.width,
        )
        return lab ? num(lab, 'y') - b.y : null
      }),
      10,
    ),
    valueClasses: groups[0].map((b) => {
      const lab = labels.find(
        (t) => Math.abs(num(t, 'y') - (b.y + barHeight - 2)) <= 3 && num(t, 'x') >= b.x + b.width,
      )
      return lab ? lab.classList.value.join(' ') : 'lbl mut'
    }),
    rx: Number(rects[0].getAttribute('rx') ?? 3),
    ...(stacked ? { stacked: true as const } : {}),
  }

  return {
    drift,
    series: {
      ...common,
      type,
      layout,
      x: catLabels.map((c) => c.text),
      y,
      series,
      frame,
    },
  }
}

/**
 * Sérialise une primitive de graphique comme le fait le document d'origine,
 * pour pouvoir comparer les deux caractère par caractère.
 */
function serialise(n: SvgNode): string {
  const attrs = Object.entries(n.attrs)
    .map(([k, v]) => `${k}="${normaliseNumber(String(v))}"`)
    .join(' ')
  const cls = n.cls ? ` class="${n.cls}"` : ''
  return n.text !== undefined
    ? `<${n.tag}${cls} ${attrs}>${n.text}</${n.tag}>`
    : `<${n.tag}${cls} ${attrs}/>`
}

/** Les mêmes primitives, lues dans le SVG du document d'origine. */
function originalNodes(svg: HTMLElement): string[] {
  const out: string[] = []
  for (const el of svg.childNodes) {
    if (el.nodeType !== NodeType.ELEMENT_NODE) continue
    const e = el as HTMLElement
    const tag = e.rawTagName.toLowerCase()
    if (tag === 'title' || tag === 'defs') continue
    const cls = e.getAttribute('class')
    const attrs = Object.entries(e.attributes)
      .filter(([k]) => k !== 'class')
      .map(([k, v]) => `${k}="${normaliseNumber(v)}"`)
      .join(' ')
    const inner = e.innerHTML
    out.push(
      inner
        ? `<${tag}${cls ? ` class="${cls}"` : ''} ${attrs}>${decodeEntities(inner)}</${tag}>`
        : `<${tag}${cls ? ` class="${cls}"` : ''} ${attrs}/>`,
    )
  }
  return out
}

/** « 372.0 » et « 372 » désignent la même coordonnée : on compare des nombres. */
function normaliseNumber(v: string): string {
  if (/^-?\d+(?:\.\d+)?$/.test(v)) return String(Number(v))
  if (/^[-\d.,\s]+$/.test(v)) {
    return v
      .trim()
      .split(/\s+/)
      .map((p) => p.split(',').map((n) => String(Number(n))).join(','))
      .join(' ')
  }
  return v
}

/** Figure non convertie : le SVG d'origine, conservé dans les données. */
function rawFigure(fig: HTMLElement, sources: readonly string[], slug: string): RawFigure {
  const svg = fig.querySelector('svg')
  const legend = fig.querySelectorAll('.keyrow span').map((sp) => {
    const cls = sp.querySelector('i')?.classList.value.find((c) => c in COLOR_OF)
    return { color: COLOR_OF[cls ?? 'k1'] ?? 's1', label: decodeEntities(sp.text.trim()) }
  })
  const title = decodeEntities(fig.querySelector('.fig-title')?.innerHTML.trim() ?? 'Figure')
  return {
    raw: true,
    title,
    subtitle: decodeEntities(fig.querySelector('.fig-sub')?.innerHTML.trim() ?? '') || undefined,
    caption: decodeEntities(fig.querySelector('figcaption')?.innerHTML.trim() ?? '') || undefined,
    legend: legend.length > 0 ? legend : undefined,
    svg: svg ? svg.outerHTML : '',
    sources: sources as unknown as RawFigure['sources'],
    vintage: guessVintage(title) ?? 'à confirmer',
  }
}

/** Première différence entre deux listes de primitives, s'il y en a une. */
function firstDifference(
  a: readonly string[],
  b: readonly string[],
): { a: string; b: string } | null {
  const n = Math.max(a.length, b.length)
  for (let i = 0; i < n; i++) {
    if (a[i] !== b[i]) return { a: a[i] ?? '(absent)', b: b[i] ?? '(absent)' }
  }
  return null
}

// ---------------------------------------------------------------- chapitres

const html = readFileSync(SOURCE_HTML, 'utf8')
const doc = parse(html, { blockTextElements: { script: false, style: false } })

const tocTitles = new Map<string, string>()
for (const a of doc.querySelectorAll('#toc a, .rail .extra a')) {
  tocTitles.set((a.getAttribute('href') ?? '').replace('#', ''), decodeEntities(a.text.trim()))
}

interface ChapterCounts {
  readonly questions: number
  readonly tables: number
  readonly figures: number
}
const metas: (ChapterMeta & { kind: ChapterSpec['kind']; counts: ChapterCounts })[] = []
const searchIndex: { id: string; title: string; text: string; slug: string; chapter: string }[] = []

rmSync(CHAPTERS_DIR, { recursive: true, force: true })

for (const spec of CHAPTERS) {
  const section = doc.querySelector(`section#${spec.anchor}`)
  if (!section) throw new Error(`section ${spec.anchor} introuvable`)

  const meta: ChapterMeta = {
    slug: spec.slug,
    num: decodeEntities(section.querySelector('.sec-num')?.text.trim() ?? ''),
    title: decodeEntities(section.querySelector('.sec-head h2')?.text.trim() ?? ''),
    shortTitle: tocTitles.get(spec.anchor) ?? decodeEntities(section.querySelector('.sec-head h2')?.text.trim() ?? ''),
    note: decodeEntities(section.querySelector('.sec-note')?.innerHTML.trim() ?? '') || undefined,
    status: PARTIAL.has(spec.slug) ? 'partiel' : 'complete',
    updated: UPDATED,
    parts: section.querySelectorAll('.part').map((p) => ({
      label: decodeEntities(p.querySelector('span')?.text.trim() ?? ''),
      title: decodeEntities(p.querySelector('h3')?.text.trim() ?? ''),
    })),
    legacyAnchor: spec.anchor,
  }
  const cleanMeta: ChapterMeta = { ...meta, parts: meta.parts && meta.parts.length > 0 ? meta.parts : undefined }

  const tables: Record<string, Table> = {}
  const series: Record<string, Figure> = {}
  const questions: { id: string; title: string; text: string }[] = []
  const citedInProse = new Set<string>()
  const takenIds = new Set<string>()

  /** Sources déclarées par une fiche, dans l'ordre du document. */
  function sourcesIn(scope: HTMLElement): string[] {
    return scope.querySelectorAll('p.src').map((p) => registerSource(p, spec.slug))
  }

  const body: string[] = []

  for (const node of section.childNodes) {
    if (node.nodeType !== NodeType.ELEMENT_NODE) continue
    const el = node as HTMLElement
    if (el.classList.contains('sec-head') || el.classList.contains('sec-note')) continue

    if (el.classList.contains('q')) {
      body.push(renderQuestion(el))
      continue
    }
    body.push(convert(el))
  }

  function renderQuestion(q: HTMLElement): string {
    const id = q.getAttribute('id') ?? unique(slugify(q.text.slice(0, 40)), takenIds)
    const h3 = q.querySelector('h3')
    const title = decodeEntities(h3?.text.trim() ?? '')
    questions.push({ id, title, text: decodeEntities(q.text.replace(/\s+/g, ' ').trim()) })
    if (h3) h3.remove()
    const inner = toJsx(q.childNodes, { replace })
    return `\n<Question id=${JSON.stringify(id)} title=${JSON.stringify(title)}>${inner}</Question>\n`
  }

  function convert(el: HTMLElement): string {
    const out = replace(el)
    if (out !== undefined) return out ?? ''
    return toJsx([el], { replace })
  }

  function replace(el: HTMLElement): string | null | undefined {
    const cls = el.classList

    if (cls.contains('tw')) {
      const question = (el.closest('.q') ?? section) as HTMLElement
      const srcIds = sourcesIn(question)
      const id = unique(slugify(el.querySelector('th')?.text ?? 'tableau'), takenIds)
      if (srcIds.length === 0) report.sourcesMissing.push(`${spec.slug}/${id}`)
      const table = extractTable(el, srcIds, [
        question.querySelectorAll('p.src').map((p) => p.text).join(' '),
        el.text,
      ])
      if (table.vintage === 'à confirmer') report.vintageMissing.push(`${spec.slug}/tables/${id}`)
      tables[id] = table
      report.tables++
      return `<DataTable id=${JSON.stringify(id)} />`
    }

    if (el.rawTagName === 'figure' && cls.contains('fig')) {
      report.figures++
      const srcIds = sourcesIn(el)
      const id = unique(slugify(el.querySelector('.fig-title')?.text ?? 'figure'), takenIds)
      const result = extractFigure(el, srcIds, [el.querySelectorAll('p.src').map((p) => p.text).join(' ')])
      if (result && result.drift <= 0.6) {
        const generated = buildChart(result.series).map(serialise)
        const original = originalNodes(el.querySelector('svg') as HTMLElement)
        const diff = firstDifference(generated, original)
        if (diff) {
          report.svgMismatch.push(`${spec.slug}/${id} — ${diff.b}`)
          report.valuesOnly++
          series[id] = { ...rawFigure(el, srcIds, spec.slug), values: result.series }
          return `<Figure id=${JSON.stringify(id)} />`
        }
        report.svgProven++
      }
      if (!result || result.drift > 0.6) {
        // Le SVG d'origine est conservé, mais dans les données : le contenu
        // reste exempt de chiffres, et l'audit recense la figure comme dette.
        report.figuresFallback.push(
          `${spec.slug}/${id}${result ? ` (dérive ${result.drift.toFixed(2)} px)` : ' (forme non reconnue)'}`,
        )
        series[id] = rawFigure(el, srcIds, spec.slug)
        return `<Figure id=${JSON.stringify(id)} />`
      }
      report.figuresOk++
      report.maxPixelDrift = Math.max(report.maxPixelDrift, result.drift)
      if (result.series.vintage === 'à confirmer') report.vintageMissing.push(`${spec.slug}/series/${id}`)
      if (srcIds.length === 0) report.sourcesMissing.push(`${spec.slug}/${id}`)
      series[id] = result.series
      return `<Figure id=${JSON.stringify(id)} />`
    }

    if (el.rawTagName === 'p' && cls.contains('src')) {
      const id = registerSource(el, spec.slug)
      citedInProse.add(id)
      return `<Source ids={[${JSON.stringify(id)}]} />`
    }

    for (const [klass, component] of [
      ['defn', 'Definition'], ['lim', 'Limit'], ['hole', 'MissingData'], ['take', 'Takeaway'],
    ] as const) {
      if (!cls.contains(klass)) continue
      const first = el.childNodes.find((n) => n.nodeType === NodeType.ELEMENT_NODE) as HTMLElement | undefined
      let title = ''
      if (first && first.rawTagName === 'b' && el.childNodes.indexOf(first) <= 1) {
        // Le titre d'un encadré porte parfois `<sup>` ou `<em>` : on garde le
        // balisage, sans quoi « 1ᵉʳ janvier » se rendrait « 1er janvier ».
        title = decodeEntities(first.innerHTML.trim())
        first.remove()
      }
      const inner = toJsx(el.childNodes, { replace })
      return `<${component} title={${JSON.stringify(title)}}>${inner}</${component}>`
    }

    if (cls.contains('verdict')) {
      const kind = cls.contains('v-ok') ? 'ok' : cls.contains('v-nu') ? 'nuance' : 'faux'
      return `<Verdict kind=${JSON.stringify(kind)}>${toJsx(el.childNodes, { replace })}</Verdict>`
    }

    return undefined
  }

  metas.push({
    ...cleanMeta,
    kind: spec.kind,
    counts: {
      questions: questions.length,
      tables: Object.keys(tables).length,
      figures: Object.keys(series).length,
    },
  })
  searchIndex.push(
    ...questions.map((q) => ({ ...q, slug: spec.slug, chapter: cleanMeta.shortTitle })),
  )
  writeChapter(
    spec.slug,
    cleanMeta,
    tables,
    series,
    questions.map(({ id, title }) => ({ id, title })),
    [...citedInProse].sort(),
    body.join('\n'),
  )
}

// ------------------------------------------------------------------ écriture

function writeChapter(
  slug: string,
  meta: ChapterMeta,
  tables: Record<string, Table>,
  series: Record<string, Figure>,
  questions: readonly { id: string; title: string }[],
  citedInProse: readonly string[],
  content: string,
): void {
  const dir = join(CHAPTERS_DIR, slug)
  mkdirSync(dir, { recursive: true })

  const dataFile = `// Généré par \`npm run extract\` depuis Temp/chiffres2027 (3).html.
// Toutes les données chiffrées du chapitre vivent ici, chacune sous sa source
// et son millésime. Voir CLAUDE.md, règles 2 à 4.
import type { ChapterMeta, SeriesSet, SourceId, Tables } from '@/lib/types'

export const meta = ${lit(meta)} satisfies ChapterMeta

export const tables = ${lit(tables)} satisfies Tables

export const series = ${lit(series)} satisfies SeriesSet

/** Fiches du chapitre, dans l'ordre : alimente le rail et la recherche. */
export const questions = ${lit(questions)} satisfies readonly { id: string; title: string }[]

/**
 * Sources citées dans le texte du chapitre, en plus de celles portées par les
 * tableaux et les figures. La bibliographie les recense aussi : une source
 * citée en prose reste une source du dossier.
 */
export const citedSources = ${lit(citedInProse)} satisfies readonly SourceId[]
`
  writeFileSync(join(dir, 'data.ts'), dataFile)

  const used = new Set<string>()
  for (const m of content.matchAll(/<(?:DataTable|Figure|Source|Question|Verdict|Definition|Limit|MissingData|Takeaway)\b/g)) {
    used.add(m[0].slice(1))
  }
  const imports = [...used].sort()
  const shared = imports.filter((i) => i !== 'DataTable' && i !== 'Figure')
  const bound = imports.filter((i) => i === 'DataTable' || i === 'Figure')
  const contentFile = `// Contenu rédactionnel du chapitre. Aucun chiffre tabulé ou tracé ici :
// tout vient de ./data.ts. Voir CLAUDE.md, règle 2.
import { chapterComponents${shared.length > 0 ? `, ${shared.join(', ')}` : ''} } from '@/components'
import type { RenderMode } from '@/components'
import { series, tables } from './data'

export default function Content({ mode = 'page' }: { mode?: RenderMode }) {
${bound.length > 0 ? `  const { ${bound.join(', ')} } = chapterComponents({ tables, series, mode })\n` : ''}
  return (
    <>
${content}
    </>
  )
}
`
  writeFileSync(join(dir, 'content.tsx'), contentFile)

  writeFileSync(
    join(dir, 'page.tsx'),
    `import { ChapterPage } from '@/components/ChapterPage'
import { chapterMetadata } from '@/lib/metadata'
import Content from './content'
import { meta, questions } from './data'

export const metadata = chapterMetadata(meta)

export default function Page() {
  return (
    <ChapterPage meta={meta} questions={questions}>
      <Content />
    </ChapterPage>
  )
}
`,
  )
}

// registre des sources
const sortedSources = [...sourceById.entries()].sort(([a], [b]) => a.localeCompare(b))
writeFileSync(
  join(ROOT, 'src', 'data', 'sources.ts'),
  `// Généré par \`npm run extract\`. Registre unique des sources du dossier.
//
// \`SourceId\` étant dérivé de cet objet, citer une source absente d'ici est une
// erreur de compilation. \`text\` conserve la formulation exacte du document
// d'origine, ce qui garantit un rendu identique tout en supprimant les doublons.

export interface Source {
  readonly producer: string
  readonly kind: 'database' | 'report' | 'press' | 'other'
  readonly datasets?: readonly string[]
  /** Formulation d'origine du bloc source, en HTML restreint. */
  readonly text: string
  /** Chapitre de première citation, utilisé pour grouper la bibliographie. */
  readonly theme: string
  /** Producteur engagé dans le débat public : signalé comme tel au rendu. */
  readonly engaged?: true
  readonly accessed: string
  readonly url?: string
}

const registry = ${lit(Object.fromEntries(sortedSources))} as const

/** Union des identifiants : citer une source absente ne compile pas. */
export type SourceId = keyof typeof registry

/** Le même objet, typé uniformément pour la lecture des propriétés. */
export const sources: Readonly<Record<SourceId, Source>> = registry
`,
)

// sommaire
writeFileSync(
  join(ROOT, 'src', 'data', 'chapters.ts'),
  `// Généré par \`npm run extract\`. Seule source de vérité pour l'ordre et les
// intitulés des chapitres : les noms de répertoires ne portent pas de numéro.
import type { ChapterMeta } from '@/lib/types'

export type ChapterKind = 'synthese' | 'theme' | 'annexe'

export interface ChapterEntry extends ChapterMeta {
  readonly kind: ChapterKind
  /** Volumétrie du chapitre, pour le sommaire. */
  readonly counts: {
    readonly questions: number
    readonly tables: number
    readonly figures: number
  }
}

export const chapters: readonly ChapterEntry[] = ${lit(metas)}

export const themes = chapters.filter((c) => c.kind === 'theme')

export function chapterBySlug(slug: string): ChapterEntry | undefined {
  return chapters.find((c) => c.slug === slug)
}
`,
)

// -------------------------------------------------------------- diagnostics

const pct = (n: number, d: number) => `${Math.round((100 * n) / d)} %`
console.log(`chapitres          : ${CHAPTERS.length}`)
console.log(`tableaux           : ${report.tables}`)
console.log(`cellules chiffrées : ${report.cellsNumeric} nombres, ${report.cellsText} en texte (${pct(report.cellsNumeric, report.cellsNumeric + report.cellsText)} typées)`)
console.log(
  `figures            : ${report.svgProven} régénérées et prouvées identiques · ` +
    `${report.valuesOnly} valeurs lues, tracé d'origine conservé · ` +
    `${report.figures - report.svgProven - report.valuesOnly} non converties (sur ${report.figures})`,
)
console.log(`sources            : ${sourceById.size} entrées distinctes`)
if (report.figuresFallback.length > 0) {
  console.log(`\nfigures non converties (${report.figuresFallback.length}) :`)
  for (const f of report.figuresFallback) console.log(`  - ${f}`)
}
if (report.sourcesMissing.length > 0) {
  console.log(`\nsans source (${report.sourcesMissing.length}) : ${report.sourcesMissing.slice(0, 12).join(', ')}${report.sourcesMissing.length > 12 ? '…' : ''}`)
}
if (report.svgMismatch.length > 0) {
  console.log(`\néléments hors modèle, tracé d'origine conservé (${report.svgMismatch.length}) :`)
  for (const m of report.svgMismatch.slice(0, 6)) console.log(`  - ${m}`)
}
if (report.axisInconsistent.length > 0) {
  console.log(`\naxe incohérent dans le document d'origine (${report.axisInconsistent.length}) :`)
  for (const t of report.axisInconsistent) console.log(`  - ${t}`)
}
console.log(`\nmillésime à confirmer : ${report.vintageMissing.length}`)

// index de recherche, chargé à la demande côté client
mkdirSync(join(ROOT, 'public'), { recursive: true })
writeFileSync(
  join(ROOT, 'public', 'search-index.json'),
  JSON.stringify(
    searchIndex.map((q) => ({
      i: q.id,
      t: q.title,
      s: q.slug,
      c: q.chapter,
      n: q.text.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').slice(0, 1200),
    })),
  ),
)
console.log(`index de recherche : ${searchIndex.length} fiches`)
