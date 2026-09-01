import type { SourceId } from '@/data/sources'

export type { SourceId }

/** Au moins une source : un tableau ou une figure sans source ne compile pas. */
export type Sources = readonly [SourceId, ...SourceId[]]

// ---------------------------------------------------------------- chapitres

export type ChapterStatus = 'complete' | 'partiel'

export interface ChapterPart {
  readonly label: string
  readonly title: string
}

export interface ChapterMeta {
  readonly slug: string
  /** Libellé du bandeau de section : « 01 », « Synthèse », « Annexe »… */
  readonly num: string
  readonly title: string
  /** Libellé court du rail de navigation. */
  readonly shortTitle: string
  /** Le chapeau `.sec-note`, absent sur certains chapitres. */
  readonly note?: string
  readonly status: ChapterStatus
  /** Millésime de dernière révision du chapitre, au format AAAA-MM. */
  readonly updated: string
  readonly parts?: readonly ChapterPart[]
  /** Ancre de la section dans le document d'origine (`s1`, `synth`…). */
  readonly legacyAnchor: string
}

// ------------------------------------------------------------------ cellules

/**
 * Une valeur chiffrée. Le nombre est un nombre — jamais une chaîne formatée.
 * `lib/format.ts` recompose la chaîne affichée, à l'identique de l'original.
 */
export interface NumCell {
  /** La valeur, en unités de `u`. Toujours un nombre. */
  readonly v: number
  /** Nombre de décimales affichées. */
  readonly d: number
  /** Unité ou suffixe affiché après le nombre : `%`, `Md€`, `h`, `points`… */
  readonly u?: string
  /** Force le signe `+` sur une valeur positive. */
  readonly sign?: true
  /** Préfixe `≈`. */
  readonly approx?: true
  /** Rendu en gras, comme le `<b>` de l'original. */
  readonly strong?: true
  /** Désactive le groupement des milliers (années, codes, identifiants). */
  readonly g?: false
  /** Complément de phrase après la valeur : « pour l'Allemagne ». */
  readonly after?: string
  /** `colspan` de la cellule. */
  readonly cs?: number
  /** Alignement contraire à celui de la colonne. */
  readonly n?: boolean
}

/** Cellule dont le contenu n'est pas réductible à un nombre. */
export interface TextCell {
  readonly t: string
  readonly cs?: number
  readonly n?: boolean
}

/** `null` = donnée absente, rendue `—`. Ne jamais écrire `0` à sa place. */
export type Cell = null | NumCell | TextCell

// ------------------------------------------------------------------ tableaux

export type ColumnType = 'text' | 'number'

export interface Column {
  readonly key: string
  /** Libellé de l'en-tête, en HTML restreint : il porte parfois `<b>`, `<em>`. */
  readonly header: string
  /** Alignement des cellules de la colonne. */
  readonly type: ColumnType
  /** L'en-tête lui-même est aligné à droite. Ce n'est pas toujours le cas. */
  readonly headerNumeric?: boolean
}

export interface Row {
  readonly cells: readonly Cell[]
  /** `tr.hi` de l'original. */
  readonly emphasis?: true
  /** `tr.tot` de l'original. */
  readonly total?: true
  /** `tr.sep` de l'original. */
  readonly separator?: true
  /** `tr.hole-row` de l'original. */
  readonly missing?: true
  /**
   * Ligne ajoutée par la refonte, absente du document d'origine : rendue sur
   * la page de chapitre, omise de `/tout` pour que la comparaison élément par
   * élément reste valide. Voir `scripts/amendments.ts`.
   */
  readonly addition?: true
}

export interface Table {
  readonly title?: string
  readonly unit?: string
  /** Millésime de la donnée, pas de la publication. Obligatoire. */
  readonly vintage: string
  readonly sources: Sources
  readonly note?: string
  readonly columns: readonly Column[]
  readonly rows: readonly Row[]
  readonly footer?: Row
}

export type Tables = Readonly<Record<string, Table>>

// -------------------------------------------------------------------- séries

export type SeriesType = 'line' | 'bar' | 'stacked-bar' | 'grouped-bar' | 'slope' | 'dot'

export type SeriesColor = 's1' | 's2' | 's3' | 's4' | 's5'

export interface Axis {
  readonly label?: string
  readonly min: number
  readonly max: number
  /** Valeurs des graduations, dans l'ordre d'affichage. */
  readonly ticks: readonly number[]
}

export interface SeriesLine {
  readonly key: string
  readonly label?: string
  readonly color: SeriesColor
  /** Une valeur par entrée de `x`. `null` = point absent. */
  readonly values: readonly (number | null)[]
  /** Décimales de l'étiquette de valeur affichée à côté d'une barre. */
  readonly decimals?: number
}

export interface Mandate {
  readonly label: string
  readonly from: number
  readonly to: number
  /** `d` droite, `g` gauche, `c` centre — reprend `pr-d` / `pr-g` / `pr-c`. */
  readonly bloc: 'd' | 'g' | 'c'
}

export interface Cohabitation {
  readonly from: number
  readonly to: number
}

/**
 * Géométrie du SVG d'origine, conservée pour garantir un rendu au pixel près.
 * Les valeurs, elles, vivent dans `series` : `lib/scales.ts` fait la projection.
 */
export interface Frame {
  readonly width: number
  readonly height: number
  readonly left: number
  readonly right: number
  readonly top: number
  readonly bottom: number
}

/** Attributs de la balise `<svg>` du document d'origine. */
export interface SvgShell {
  readonly viewBox: string
  readonly titleId: string
  readonly title: string
  readonly preserveAspectRatio?: string
}

/**
 * Constantes de mise en page du graphique — épaisseurs, décalages, pas des
 * barres. Ce sont des réglages de composant, pas des coordonnées de données :
 * aucune valeur chiffrée du dossier n'y figure.
 */
export interface LineLayout {
  readonly kind: 'line'
  readonly tickLabelX: number
  readonly tickLabelDy: number
  readonly axisLabel?: { readonly x: number; readonly y: number; readonly text: string; readonly anchor: string }
  readonly axisLineY: number
  readonly dotR: number
  readonly endLabelDx: number
  readonly endLabelDy: number
  readonly xLabelY?: number
  /** Les étiquettes d'abscisse sont tracées après les bandes de mandat. */
  readonly xLabelsLast?: true
  readonly bands?: {
    readonly y: number
    readonly height: number
    readonly rx: number
    readonly labelDy: number
    readonly patternId: string
  }
}

export interface BarLayout {
  readonly kind: 'bar'
  readonly gridTop: number
  readonly gridBottom: number
  readonly tickLabelY: number
  readonly catLabelX: number
  readonly catLabelDy: number
  readonly barHeight: number
  readonly barPitch: number
  readonly groupPitch: number
  readonly firstBarY: number
  readonly valueLabelDx: number
  readonly valueLabelDy: number
  readonly valueClasses: readonly string[]
  readonly rx: number
  readonly stacked?: true
}

export type ChartLayout = LineLayout | BarLayout

export interface Series {
  readonly type: SeriesType
  readonly svg: SvgShell
  readonly layout: ChartLayout
  readonly title: string
  readonly subtitle?: string
  readonly caption?: string
  /** Une entrée par point : valeur d'abscisse, ou libellé de catégorie. */
  readonly x: readonly (string | number)[]
  /**
   * Axe des abscisses à valeurs. Présent quand les points ne sont pas
   * régulièrement espacés — une série annuelle à trous, par exemple. Absent,
   * les points sont répartis uniformément sur la largeur du repère.
   */
  readonly xAxis?: Axis
  readonly y: Axis
  readonly series: readonly SeriesLine[]
  readonly legend?: readonly { readonly color: SeriesColor; readonly label: string }[]
  readonly annotations?: {
    readonly mandates?: readonly Mandate[]
    readonly cohabitations?: readonly Cohabitation[]
  }
  readonly frame: Frame
  readonly sources: Sources
  readonly caveat?: string
  readonly vintage: string
}

/**
 * Figure dont le SVG n'a pas pu être **régénéré à l'identique** depuis ses
 * valeurs. Le SVG d'origine est alors conservé tel quel — mais dans les
 * données, jamais dans le contenu.
 *
 * `values` porte quand même les valeurs reconstituées quand la lecture a
 * réussi : la figure reste auditable et expose son tableau de données, même si
 * c'est encore le tracé d'origine qui est affiché. `check-data.ts` recense les
 * deux cas séparément.
 */
export interface RawFigure {
  readonly raw: true
  readonly title: string
  readonly subtitle?: string
  readonly caption?: string
  readonly legend?: readonly { readonly color: SeriesColor; readonly label: string }[]
  /** Le SVG d'origine, inchangé. */
  readonly svg: string
  /** Valeurs reconstituées, si la lecture du tracé a abouti. */
  readonly values?: Series
  readonly sources: Sources
  readonly vintage: string
}

export type Figure = Series | RawFigure

export function isRawFigure(f: Figure): f is RawFigure {
  return 'raw' in f
}

export type SeriesSet = Readonly<Record<string, Figure>>

// ------------------------------------------------------------------ chapitre

export interface ChapterData {
  readonly meta: ChapterMeta
  readonly tables: Tables
  readonly series: SeriesSet
}
