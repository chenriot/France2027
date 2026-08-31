// Généré par `npm run extract` depuis Temp/chiffres2027 (3).html.
// Toutes les données chiffrées du chapitre vivent ici, chacune sous sa source
// et son millésime. Voir CLAUDE.md, règles 2 à 4.
import type { ChapterMeta, SeriesSet, SourceId, Tables } from '@/lib/types'

export const meta = {
  slug: 'grille-promesses',
  num: 'Thème 19',
  title: 'Grille de lecture des promesses électorales',
  shortTitle: 'Grille de lecture des promesses',
  status: 'complete',
  updated: '2026-08',
  legacyAnchor: 's19',
} satisfies ChapterMeta

export const tables = {} satisfies Tables

export const series = {} satisfies SeriesSet

/** Fiches du chapitre, dans l'ordre : alimente le rail et la recherche. */
export const questions = [
  { id: 's19-q1', title: 'Les treize questions' },
  { id: 's19-q2', title: 'Deux formulations réutilisables' },
  { id: 's19-q3', title: 'Le principe de lecture' },
] satisfies readonly { id: string; title: string }[]

/**
 * Sources citées dans le texte du chapitre, en plus de celles portées par les
 * tableaux et les figures. La bibliographie les recense aussi : une source
 * citée en prose reste une source du dossier.
 */
export const citedSources = [] satisfies readonly SourceId[]
