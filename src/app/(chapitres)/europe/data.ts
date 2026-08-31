// Généré par `npm run extract` depuis Temp/chiffres2027 (3).html.
// Toutes les données chiffrées du chapitre vivent ici, chacune sous sa source
// et son millésime. Voir CLAUDE.md, règles 2 à 4.
import type { ChapterMeta, SeriesSet, SourceId, Tables } from '@/lib/types'

export const meta = {
  slug: 'europe',
  num: 'Thème 10',
  title: 'Europe',
  shortTitle: 'Europe',
  status: 'complete',
  updated: '2026-08',
  legacyAnchor: 's10',
} satisfies ChapterMeta

export const tables = {
  'cumul-2014-2020-md': {
    vintage: '2020',
    sources: ['commission-europeenne-commission-europeenne-eu-spending-an'],
    columns: [
      {
        key: 'cumul-2014-2020-md',
        header: 'Cumul 2014-2020, Md€',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'contributions', header: 'Contributions', type: 'number', headerNumeric: true },
      { key: 'retours', header: 'Retours', type: 'number', headerNumeric: true },
      { key: 'solde-net', header: 'Solde net', type: 'number', headerNumeric: true },
      { key: 'moyenne-annuelle', header: 'Moyenne annuelle', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Allemagne' },
          { v: 197.5, d: 1 },
          { v: 80.3, d: 1 },
          { v: -117.2, d: 1 },
          { v: -16.7, d: 1 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'France' },
          { v: 152, d: 1 },
          { v: 98.7, d: 1 },
          { v: -53.3, d: 1 },
          { v: -7.6, d: 1 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Italie' },
          { v: 114.3, d: 1 },
          { v: 78, d: 1 },
          { v: -36.3, d: 1 },
          { v: -5.2, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Pays-Bas' },
          { v: 51.5, d: 1 },
          { v: 16.8, d: 1 },
          { v: -34.7, d: 1 },
          { v: -5, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Suède' },
          { v: 26.6, d: 1 },
          { v: 12.1, d: 1 },
          { v: -14.5, d: 1 },
          { v: -2.1, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Autriche' },
          { v: 22, d: 1 },
          { v: 13.1, d: 1 },
          { v: -8.9, d: 1 },
          { v: -1.3, d: 1 },
        ],
      },
      {
        cells: [
          { t: '<em>Royaume-Uni</em>' },
          { v: 119.1, d: 1 },
          { v: 48.9, d: 1 },
          { v: -70.2, d: 1 },
          { v: -10, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Espagne' },
          { v: 78.4, d: 1 },
          { v: 82.8, d: 1 },
          { v: 4.5, d: 1, sign: true },
          { v: 0.6, d: 1, sign: true },
        ],
      },
      {
        cells: [
          { t: 'Belgique *' },
          { v: 40.5, d: 1 },
          { v: 55, d: 1 },
          { v: 14.5, d: 1, sign: true },
          { v: 2.1, d: 1, sign: true },
        ],
      },
      {
        cells: [
          { t: 'Portugal' },
          { v: 12.7, d: 1 },
          { v: 29.6, d: 1 },
          { v: 16.9, d: 1, sign: true },
          { v: 2.4, d: 1, sign: true },
        ],
      },
      {
        cells: [
          { t: 'Tchéquie' },
          { v: 12.6, d: 1 },
          { v: 35, d: 1 },
          { v: 22.4, d: 1, sign: true },
          { v: 3.2, d: 1, sign: true },
        ],
      },
      {
        cells: [
          { t: 'Roumanie' },
          { v: 11.8, d: 1 },
          { v: 41.6, d: 1 },
          { v: 29.7, d: 1, sign: true },
          { v: 4.2, d: 1, sign: true },
        ],
      },
      {
        cells: [
          { t: 'Grèce' },
          { v: 11.7, d: 1 },
          { v: 41.8, d: 1 },
          { v: 30.1, d: 1, sign: true },
          { v: 4.3, d: 1, sign: true },
        ],
      },
      {
        cells: [
          { t: 'Hongrie' },
          { v: 8.2, d: 1 },
          { v: 39.5, d: 1 },
          { v: 31.3, d: 1, sign: true },
          { v: 4.5, d: 1, sign: true },
        ],
      },
      {
        cells: [
          { t: 'Pologne' },
          { v: 31.6, d: 1 },
          { v: 104.2, d: 1 },
          { v: 72.5, d: 1, sign: true },
          { v: 10.4, d: 1, sign: true },
        ],
        emphasis: true,
      },
    ],
  },
  'retours-pre-alloues-md': {
    vintage: '2027',
    sources: ['commission-europeenne-commission-europeenne-eu-spending-an'],
    columns: [
      {
        key: 'retours-pre-alloues-md',
        header: 'Retours pré-alloués, Md€',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'cohesion', header: 'Cohésion', type: 'number', headerNumeric: true },
      { key: 'pac-1-pilier', header: 'PAC (1ᵉʳ pilier)', type: 'number', headerNumeric: true },
      { key: 'plan-de-relance', header: 'Plan de relance', type: 'number', headerNumeric: true },
      { key: 'total', header: 'Total', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Espagne' },
          { v: 35.4, d: 1 },
          { v: 37.4, d: 1 },
          { v: 77.2, d: 1 },
          { v: 150, d: 1 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Italie' },
          { v: 42.1, d: 1 },
          { v: 27.9, d: 1 },
          { v: 69, d: 1 },
          { v: 139.1, d: 1 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Pologne' },
          { v: 75, d: 1 },
          { v: 21.7, d: 1 },
          { v: 22.5, d: 1 },
          { v: 119.2, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'France' },
          { v: 16.8, d: 1 },
          { v: 54.8, d: 1 },
          { v: 37.5, d: 1 },
          { v: 109.1, d: 1 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 18.4, d: 1 },
          { v: 34.7, d: 1 },
          { v: 28, d: 1 },
          { v: 81.2, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Roumanie' },
          { v: 30.3, d: 1 },
          { v: 14, d: 1 },
          { v: 12.1, d: 1 },
          { v: 56.4, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Grèce' },
          { v: 21.4, d: 1 },
          { v: 15, d: 1 },
          { v: 17.4, d: 1 },
          { v: 53.8, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Portugal' },
          { v: 23.6, d: 1 },
          { v: 5.5, d: 1 },
          { v: 15.5, d: 1 },
          { v: 44.6, d: 1 },
        ],
      },
    ],
  },
  'contribution-francaise-au-budget-de-l-ue': {
    vintage: '2027',
    sources: ['commission-europeenne-commission-europeenne-eu-spending-an'],
    columns: [
      {
        key: 'contribution-francaise-au-budget-de-l-ue',
        header: 'Contribution française au budget de l\'UE',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'md', header: 'Md€', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { v: 2017, d: 0, g: false },
          { v: 16.4, d: 1 },
        ],
      },
      {
        cells: [
          { v: 2019, d: 0, g: false },
          { v: 21, d: 1 },
        ],
      },
      {
        cells: [
          { v: 2021, d: 0, g: false },
          { v: 26.4, d: 1 },
        ],
      },
      {
        cells: [
          { v: 2023, d: 0, g: false },
          { v: 23.9, d: 1 },
        ],
      },
      {
        cells: [
          { v: 2025, d: 0, g: false },
          { v: 23.3, d: 1 },
        ],
      },
      {
        cells: [
          { t: '2026 <em>(projeté)</em>' },
          { v: 30.4, d: 1, strong: true, after: '— +30 % en un an' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '2027 <em>(projeté)</em>' },
          { v: 32.4, d: 1, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Moyenne annuelle sur le cadre 2014-2020' },
          { v: 20.1, d: 1 },
        ],
        separator: true,
      },
      {
        cells: [
          { t: 'Moyenne annuelle sur le cadre 2021-2027' },
          { t: '26,2 — <b>+30 %</b>' },
        ],
      },
    ],
  },
} satisfies Tables

export const series = {} satisfies SeriesSet

/** Fiches du chapitre, dans l'ordre : alimente le rail et la recherche. */
export const questions = [
  { id: 's10-q1', title: 'Combien la France verse-t-elle, combien récupère-t-elle ?' },
  {
    id: 's10-q2',
    title: 'Contributeurs et bénéficiaires nets, cadre financier par cadre financier',
  },
  { id: 's10-q3', title: 'Que rapporte le marché unique par rapport à ce qu\'il coûte ?' },
  { id: 's10-q4', title: 'Qui décide quoi ?' },
  { id: 's10-q5', title: 'Que peut réellement faire un président contre une règle européenne ?' },
  { id: 's10-q6', title: 'Que coûterait une sortie de l\'euro ?' },
  { id: 's10-q7', title: 'Quelle part des normes vient de l\'UE ?' },
] satisfies readonly { id: string; title: string }[]

/**
 * Sources citées dans le texte du chapitre, en plus de celles portées par les
 * tableaux et les figures. La bibliographie les recense aussi : une source
 * citée en prose reste une source du dossier.
 */
export const citedSources = ['commission-europeenne-commission-europeenne-eu-spending-an'] satisfies readonly SourceId[]
