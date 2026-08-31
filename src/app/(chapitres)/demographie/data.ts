// Généré par `npm run extract` depuis Temp/chiffres2027 (3).html.
// Toutes les données chiffrées du chapitre vivent ici, chacune sous sa source
// et son millésime. Voir CLAUDE.md, règles 2 à 4.
import type { ChapterMeta, SeriesSet, SourceId, Tables } from '@/lib/types'

export const meta = {
  slug: 'demographie',
  num: 'Thème 17',
  title: 'Démographie et avenir à 20 ans',
  shortTitle: 'Démographie et avenir',
  status: 'complete',
  updated: '2026-08',
  legacyAnchor: 's17',
} satisfies ChapterMeta

export const tables = {} satisfies Tables

export const series = {} satisfies SeriesSet

/** Fiches du chapitre, dans l'ordre : alimente le rail et la recherche. */
export const questions = [
  { id: 's17-q1', title: 'Où en est la natalité ?' },
  { id: 's17-q2', title: 'Combien d\'actifs et de très âgés demain ?' },
  { id: 's17-q3', title: 'L\'immigration ou la natalité peuvent-elles régler le problème ?' },
] satisfies readonly { id: string; title: string }[]

/**
 * Sources citées dans le texte du chapitre, en plus de celles portées par les
 * tableaux et les figures. La bibliographie les recense aussi : une source
 * citée en prose reste une source du dossier.
 */
export const citedSources = [] satisfies readonly SourceId[]
