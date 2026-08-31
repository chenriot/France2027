// Généré par `npm run extract` depuis Temp/chiffres2027 (3).html.
// Toutes les données chiffrées du chapitre vivent ici, chacune sous sa source
// et son millésime. Voir CLAUDE.md, règles 2 à 4.
import type { ChapterMeta, SeriesSet, SourceId, Tables } from '@/lib/types'

export const meta = {
  slug: 'explique-simplement',
  num: 'Thème 20',
  title: 'Le dossier expliqué simplement',
  shortTitle: 'Le dossier expliqué simplement',
  note: 'Écrit pour être lu par quelqu\'un qui n\'a jamais ouvert un budget de l\'État. Tous les chiffres sont ceux du reste du dossier ; ce sont les mots qui changent, pas les faits.',
  status: 'complete',
  updated: '2026-08',
  legacyAnchor: 's20',
} satisfies ChapterMeta

export const tables = {
  'sur-100-de-depense-publique': {
    vintage: '2024',
    sources: ['eurostat-gov-10a-exp-2'],
    columns: [
      {
        key: 'sur-100-de-depense-publique',
        header: 'Sur 100 € de dépense publique',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'c2', header: '€', type: 'number', headerNumeric: true },
      {
        key: 'ce-que-c-est-concretement',
        header: 'Ce que c\'est concrètement',
        type: 'text',
        headerNumeric: false,
      },
    ],
    rows: [
      {
        cells: [
          { t: '<b>Protection sociale</b>' },
          { v: 42, d: 0, strong: true },
          { t: 'Surtout les retraites, plus le chômage, les allocations familiales, le RSA' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>Santé</b>' },
          { v: 16, d: 0, strong: true },
          { t: 'Hôpitaux, remboursement des médecins et des médicaments' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Enseignement' },
          { v: 9, d: 0 },
          { t: 'Ton collège, ton lycée, l\'université' },
        ],
      },
      {
        cells: [
          { t: 'Services généraux' },
          { v: 11, d: 0 },
          { t: 'Dont une partie qui ne sert à rien d\'autre qu\'à payer les intérêts de la dette' },
        ],
      },
      {
        cells: [
          { t: 'Affaires économiques' },
          { v: 10, d: 0 },
          { t: 'Trains, routes, aides aux entreprises, énergie' },
        ],
      },
      {
        cells: [
          { t: 'Ordre et sécurité' },
          { v: 3, d: 0 },
          { t: 'Police, gendarmerie, justice, pompiers' },
        ],
      },
      {
        cells: [
          { t: 'Défense' },
          { v: 3, d: 0 },
          { t: 'L\'armée' },
        ],
      },
      {
        cells: [
          { t: 'Le reste' },
          { v: 6, d: 0 },
          { t: 'Culture, sport, logement, environnement' },
        ],
        total: true,
      },
    ],
  },
} satisfies Tables

export const series = {} satisfies SeriesSet

/** Fiches du chapitre, dans l'ordre : alimente le rail et la recherche. */
export const questions = [
  { id: 's20-q1', title: 'De quoi on parle, en une page' },
  { id: 's20-q2', title: 'Pourquoi la France emprunte tous les ans' },
  { id: 's20-q3', title: 'Le vrai problème français : on produit moins que nos voisins' },
  { id: 's20-q4', title: 'Cinq idées reçues que les chiffres ne confirment pas' },
  { id: 's20-q5', title: 'Ce que ça veut dire pour ta génération' },
] satisfies readonly { id: string; title: string }[]

/**
 * Sources citées dans le texte du chapitre, en plus de celles portées par les
 * tableaux et les figures. La bibliographie les recense aussi : une source
 * citée en prose reste une source du dossier.
 */
export const citedSources = ['eurostat-gov-10a-exp-2'] satisfies readonly SourceId[]
