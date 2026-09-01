// Le lien entre la page d'accueil et le dossier.
//
// **Aucune valeur n'est recopiée ici ni dans `data.ts`.** Les indicateurs
// désignent une série ou une cellule de tableau d'un chapitre, et ce module
// va la chercher dans `src/data/all.ts`. Corriger un chiffre dans son
// chapitre le corrige donc sur l'accueil, sans autre geste.
//
// Les recherches se font **par libellé**, pas par indice : `npm run extract`
// peut réordonner les lignes d'un tableau, il ne renomme pas ses intitulés.
// Une origine devenue introuvable jette au build plutôt que d'afficher un
// chiffre faux — c'est le comportement voulu.
import { allChapters } from '@/data/all'
import { sources } from '@/data/sources'
import { isNumCell } from '@/lib/format'
import { isRawFigure } from '@/lib/types'
import type { NumCell, Series, Sources } from '@/lib/types'

/** Désigne un tableau ou une figure d'un chapitre. */
export interface Origine {
  readonly chapitre: string
  readonly cle: string
}

const chapitre = (slug: string) => {
  const c = allChapters.find((x) => x.meta.slug === slug)
  if (!c) throw new Error(`Chapitre inconnu : ${slug}`)
  return c
}

const tableau = (o: Origine) => {
  const t = chapitre(o.chapitre).tables[o.cle]
  if (!t) throw new Error(`Tableau inconnu : ${o.chapitre}/${o.cle}`)
  return t
}

/**
 * Une figure dont les valeurs sont exploitables. Les figures `raw` — celles
 * dont l'extraction n'a pas su relire le tracé — portent parfois leurs
 * valeurs reconstituées ; sinon elles ne peuvent pas servir d'origine, et
 * mieux vaut le dire au build que d'afficher un chiffre inventé.
 */
const figure = (o: Origine): Series => {
  const f = chapitre(o.chapitre).series[o.cle]
  if (!f) throw new Error(`Figure inconnue : ${o.chapitre}/${o.cle}`)
  if (!isRawFigure(f)) return f
  if (f.values) return f.values
  throw new Error(`Figure sans valeurs exploitables : ${o.chapitre}/${o.cle}`)
}

/** Le texte d'une cellule ou d'un en-tête, balises retirées. */
const nu = (s: string) => s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()

// ------------------------------------------------------------------ tableaux

function indexLigne(o: Origine, libelle: string): number {
  const i = tableau(o).rows.findIndex((r) => {
    const c = r.cells[0]
    return c !== null && !isNumCell(c) && nu(c.t) === libelle
  })
  if (i < 0) throw new Error(`Ligne « ${libelle} » absente de ${o.chapitre}/${o.cle}`)
  return i
}

function indexColonne(o: Origine, header: string): number {
  const i = tableau(o).columns.findIndex((c) => nu(c.header) === header)
  if (i < 0) throw new Error(`Colonne « ${header} » absente de ${o.chapitre}/${o.cle}`)
  return i
}

/** Une valeur chiffrée, désignée par l'intitulé de sa ligne et de sa colonne. */
export function cellule(o: Origine, libelle: string, header: string): NumCell {
  const c = tableau(o).rows[indexLigne(o, libelle)].cells[indexColonne(o, header)]
  if (c === null || !isNumCell(c)) {
    throw new Error(`${o.chapitre}/${o.cle} « ${libelle} » × « ${header} » n'est pas un nombre`)
  }
  return c
}

/** La valeur seule. */
export const valeur = (o: Origine, libelle: string, header: string): number =>
  cellule(o, libelle, header).v

/** Une ligne entière, sur les colonnes demandées. */
export const ligne = (o: Origine, libelle: string, headers: readonly string[]): number[] =>
  headers.map((h) => valeur(o, libelle, h))

// ------------------------------------------------------------------ figures

/** Les abscisses d'une figure : années ou catégories. */
export function abscisses(o: Origine): readonly (number | string)[] {
  const x = figure(o).x
  if (!x) throw new Error(`Figure sans abscisses : ${o.chapitre}/${o.cle}`)
  return x
}

/** Les abscisses d'une figure temporelle. */
export function annees(o: Origine): readonly number[] {
  return abscisses(o).map((v) => {
    if (typeof v !== 'number') throw new Error(`${o.chapitre}/${o.cle} : abscisse « ${v} » non numérique`)
    return v
  })
}

/** Une courbe ou un jeu de barres, désigné par son libellé de légende. */
export function courbe(o: Origine, label: string): readonly (number | null)[] {
  const s = figure(o).series.find((x) => x.label === label)
  if (!s) throw new Error(`Série « ${label} » absente de ${o.chapitre}/${o.cle}`)
  return s.values
}

/** La courbe unique d'une figure qui n'en porte qu'une. */
export function courbeUnique(o: Origine): readonly number[] {
  const all = figure(o).series
  if (all.length !== 1) {
    throw new Error(`${o.chapitre}/${o.cle} porte ${all.length} séries, pas une`)
  }
  return all[0].values.map((v: number | null, i: number) => {
    if (v === null) throw new Error(`${o.chapitre}/${o.cle} : trou en position ${i}`)
    return v
  })
}

/** La valeur d'une barre, désignée par sa série et sa catégorie. */
export function barre(o: Origine, label: string, categorie: string): number {
  const i = (abscisses(o) as string[]).indexOf(categorie)
  if (i < 0) throw new Error(`Catégorie « ${categorie} » absente de ${o.chapitre}/${o.cle}`)
  const v = courbe(o, label)[i]
  if (v === null) throw new Error(`${o.chapitre}/${o.cle} « ${label} » × « ${categorie} » est vide`)
  return v
}

/** Le dernier point renseigné d'une courbe. */
export function dernier(values: readonly (number | null)[]): number {
  for (let i = values.length - 1; i >= 0; i--) if (values[i] !== null) return values[i] as number
  throw new Error('Courbe entièrement vide')
}

/** Le premier point renseigné d'une courbe. */
export function premier(values: readonly (number | null)[]): number {
  for (const v of values) if (v !== null) return v
  throw new Error('Courbe entièrement vide')
}

// ------------------------------------------------------- sources et millésime

const meta = (o: Origine): { sources: Sources; vintage: string } => {
  const t = chapitre(o.chapitre).tables[o.cle] ?? chapitre(o.chapitre).series[o.cle]
  if (!t) throw new Error(`Origine inconnue : ${o.chapitre}/${o.cle}`)
  return { sources: t.sources, vintage: t.vintage }
}

export const sourcesDe = (o: Origine): Sources => meta(o).sources
export const millesimeDe = (o: Origine): string => meta(o).vintage

/**
 * La ligne de source affichée sous un indicateur, reconstituée depuis le
 * registre : producteur, jeu de données, millésime. Elle n'est donc écrite
 * nulle part — pas même en tant que libellé.
 */
export function credit(o: Origine): string {
  const { sources: ids, vintage } = meta(o)
  const s = sources[ids[0]]
  const jeu = s.datasets?.[0]
  return [s.producer, jeu, vintage].filter(Boolean).join(' · ')
}
