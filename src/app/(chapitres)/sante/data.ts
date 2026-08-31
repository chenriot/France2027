// Généré par `npm run extract` depuis Temp/chiffres2027 (3).html.
// Toutes les données chiffrées du chapitre vivent ici, chacune sous sa source
// et son millésime. Voir CLAUDE.md, règles 2 à 4.
import type { ChapterMeta, SeriesSet, SourceId, Tables } from '@/lib/types'

export const meta = {
  slug: 'sante',
  num: 'Thème 11',
  title: 'Santé',
  shortTitle: 'Santé',
  note: 'Le paradoxe français : le meilleur système de soins curatifs des pays comparés, et des signaux de dégradation en amont — mortalité infantile, prévention, accès.',
  status: 'complete',
  updated: '2026-08',
  legacyAnchor: 's11',
} satisfies ChapterMeta

export const tables = {
  moyens: {
    vintage: '2025',
    sources: ['eurostat-ocde-health-statistics-2025-depense-de'],
    columns: [
      { key: 'moyens', header: 'Moyens', type: 'text', headerNumeric: false },
      { key: 'france', header: 'France', type: 'number', headerNumeric: true },
      { key: 'allemagne', header: 'Allemagne', type: 'number', headerNumeric: true },
      { key: 'roy-uni', header: 'Roy.-Uni', type: 'number', headerNumeric: true },
      { key: 'etats-unis', header: 'États-Unis', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Dépense de santé, $ int. PPA / hab. (2024)' },
          { v: 6868, d: 0 },
          { v: 8826, d: 0 },
          { v: 6606, d: 0 },
          { v: 13473, d: 0 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Dépense de santé, % du PIB (2024)' },
          { v: 11.5, d: 1 },
          { v: 12.2, d: 1 },
          { v: 11, d: 0, approx: true },
          { v: 17.2, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Dépense <em>publique</em>, % du PIB (2025)' },
          { v: 9.4, d: 1 },
          { v: 11, d: 1 },
          { v: 9.2, d: 1 },
          { v: 14.6, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Reste à charge des ménages' },
          { v: 9.2, d: 1, u: '%' },
          { v: 10.7, d: 1, u: '%' },
          { v: 14.6, d: 1, u: '%' },
          { v: 10.9, d: 1, u: '%' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Médecins / 1 000 hab. (2023)' },
          { v: 3.28, d: 2 },
          { v: 4.53, d: 2 },
          { v: 3.3, d: 2 },
          { v: 3.68, d: 2 },
        ],
      },
      {
        cells: [
          { t: 'Infirmiers / 1 000 hab. (2023)' },
          { v: 9.42, d: 2 },
          { v: 12.25, d: 2 },
          { v: 9.55, d: 2 },
          { v: 13.38, d: 2 },
        ],
      },
      {
        cells: [
          { t: 'Lits d\'hôpital / 1 000 hab. (2023)' },
          { v: 5.65, d: 2 },
          { v: 7.55, d: 2 },
          { v: 2.42, d: 2 },
          { v: 2.68, d: 2 },
        ],
      },
    ],
  },
  resultats: {
    vintage: '2024',
    sources: ['eurostat-eurostat-hlth-cd-apr-hlth-silc-08-hlth'],
    columns: [
      { key: 'resultats', header: 'Résultats', type: 'text', headerNumeric: false },
      { key: 'france', header: 'France', type: 'number', headerNumeric: true },
      { key: 'allemagne', header: 'Allemagne', type: 'number', headerNumeric: true },
      { key: 'roy-uni', header: 'Roy.-Uni', type: 'number', headerNumeric: true },
      { key: 'etats-unis', header: 'États-Unis', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Espérance de vie (2023)' },
          { v: 83.3, d: 1 },
          { v: 81.4, d: 1 },
          { v: 81.3, d: 1 },
          { v: 79.3, d: 1 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Vie en bonne santé, HALE (2021)' },
          { v: 70.1, d: 1 },
          { v: 68.9, d: 1 },
          { v: 68.6, d: 1 },
          { v: 63.9, d: 1 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Gain d\'espérance de vie 2010-2019' },
          { v: 1.33, d: 2, u: 'an', sign: true },
          null,
          null,
          { v: 0.25, d: 2, u: 'an', sign: true },
        ],
      },
      {
        cells: [
          { t: 'Choc Covid 2019-2021' },
          { v: -0.41, d: 2, u: 'an' },
          null,
          null,
          { v: -2.53, d: 2, u: 'ans' },
        ],
      },
    ],
  },
  'pour-100-000-hab-2023': {
    vintage: '2023',
    sources: ['eurostat-eurostat-hlth-cd-apr-hlth-silc-08-hlth'],
    columns: [
      {
        key: 'pour-100-000-hab-2023',
        header: 'Pour 100 000 hab., 2023',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'france', header: 'France', type: 'number', headerNumeric: true },
      { key: 'allemagne', header: 'Allemagne', type: 'number', headerNumeric: true },
      { key: 'ue-27', header: 'UE-27', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Mortalité <em>traitable</em> (évitable par les soins)' },
          { v: 58.8, d: 1 },
          { v: 83.3, d: 1 },
          { v: 86.8, d: 1 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Mortalité <em>évitable par la prévention</em>' },
          { v: 127.2, d: 1 },
          { v: 157.1, d: 1 },
          { v: 150.9, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Ratio prévention / soins' },
          { v: 2.16, d: 2 },
          { v: 1.88, d: 2 },
          { v: 1.74, d: 2 },
        ],
        total: true,
      },
    ],
  },
  'besoins-de-soins-non-satisfaits': {
    vintage: '2024',
    sources: ['eurostat-eurostat-hlth-cd-apr-hlth-silc-08-hlth'],
    columns: [
      {
        key: 'besoins-de-soins-non-satisfaits',
        header: 'Besoins de soins non satisfaits, %',
        type: 'text',
        headerNumeric: false,
      },
      { key: '2019', header: '2019', type: 'number', headerNumeric: true },
      { key: '2022', header: '2022', type: 'number', headerNumeric: true },
      { key: '2023', header: '2023', type: 'number', headerNumeric: true },
      { key: '2024', header: '2024', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'France' },
          { v: 1.2, d: 1 },
          { v: 3.2, d: 1 },
          { v: 3.7, d: 1 },
          { v: 4.1, d: 1 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 0.3, d: 1 },
          { v: 0.3, d: 1 },
          { v: 0.2, d: 1 },
          { v: 0.8, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'UE-27' },
          { v: 2, d: 1 },
          { v: 2.5, d: 1 },
          { v: 2.4, d: 1 },
          { t: 'n.d.' },
        ],
      },
    ],
  },
  'pour-1-000-naissances-vivantes': {
    vintage: '2024',
    sources: ['eurostat-eurostat-demo-minfind-trinh-et-al-la'],
    columns: [
      {
        key: 'pour-1-000-naissances-vivantes',
        header: 'Pour 1 000 naissances vivantes',
        type: 'text',
        headerNumeric: false,
      },
      { key: '2000', header: '2000', type: 'number', headerNumeric: true },
      { key: '2010', header: '2010', type: 'number', headerNumeric: true },
      { key: '2012', header: '2012', type: 'number', headerNumeric: true },
      { key: '2019', header: '2019', type: 'number', headerNumeric: true },
      { key: '2024', header: '2024', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'France' },
          { v: 3.6, d: 1 },
          { v: 3.6, d: 1 },
          { v: 3.5, d: 1 },
          { v: 3.8, d: 1 },
          { v: 4.1, d: 1 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'UE-27' },
          { v: 6, d: 1 },
          { v: 4, d: 1 },
          { v: 3.8, d: 1 },
          { v: 3.4, d: 1 },
          { v: 3.5, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Allemagne' },
          null,
          { v: 3.4, d: 1 },
          null,
          { v: 3.2, d: 1 },
          { v: 3.3, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Italie' },
          null,
          { v: 3.8, d: 1 },
          null,
          { v: 2.4, d: 1 },
          { v: 2.5, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Suède' },
          null,
          { v: 2.5, d: 1 },
          null,
          { v: 2.1, d: 1 },
          { v: 2, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Finlande' },
          null,
          { v: 2.3, d: 1 },
          null,
          { v: 2.1, d: 1 },
          { v: 2.1, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Pologne' },
          null,
          { v: 5, d: 1 },
          null,
          { v: 3.8, d: 1 },
          { v: 3.6, d: 1 },
        ],
      },
    ],
  },
  composante: {
    vintage: '2024',
    sources: ['eurostat-eurostat-demo-minfind-trinh-et-al-la'],
    columns: [
      { key: 'composante', header: 'Composante', type: 'text', headerNumeric: false },
      { key: '2012', header: '2012', type: 'number', headerNumeric: true },
      { key: '2024', header: '2024', type: 'number', headerNumeric: true },
      { key: 'variation', header: 'Variation', type: 'number', headerNumeric: true },
      { key: 'part-de-la-hausse', header: 'Part de la hausse', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Mortalité infantile (0-1 an)' },
          { v: 3.5, d: 1 },
          { v: 4.1, d: 1 },
          { v: 0.6, d: 1, sign: true },
          { v: 100, d: 0, u: '%' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'dont néonatale (0-27 jours)' },
          { v: 2.4, d: 1 },
          { v: 2.9, d: 1 },
          { v: 0.5, d: 1, sign: true },
          { v: 83, d: 0, u: '%', approx: true },
        ],
      },
      {
        cells: [
          { t: 'dont néonatale <em>précoce</em> (0-6 jours)' },
          { v: 1.7, d: 1 },
          { v: 2, d: 1 },
          { v: 0.3, d: 1, sign: true },
          { v: 50, d: 0, u: '%', approx: true },
        ],
      },
      {
        cells: [
          { t: 'dont post-néonatale' },
          { v: 1.1, d: 1 },
          { v: 1.2, d: 1 },
          { v: 0.1, d: 1, sign: true },
          { v: 17, d: 0, u: '%', approx: true },
        ],
      },
    ],
  },
} satisfies Tables

export const series = {} satisfies SeriesSet

/** Fiches du chapitre, dans l'ordre : alimente le rail et la recherche. */
export const questions = [
  { id: 's11-q1', title: 'Combien dépense-t-on, et avec quels moyens ?' },
  { id: 's11-q2', title: 'Le système français donne-t-il de bons résultats ?' },
  { id: 's11-q3', title: 'Pourquoi des déserts médicaux malgré ce niveau de dépense ?' },
  { id: 's11-q4', title: 'La mortalité infantile : que se passe-t-il ?' },
  { id: 's11-q5', title: 'Pourquoi les urgences sont-elles saturées ?' },
] satisfies readonly { id: string; title: string }[]

/**
 * Sources citées dans le texte du chapitre, en plus de celles portées par les
 * tableaux et les figures. La bibliographie les recense aussi : une source
 * citée en prose reste une source du dossier.
 */
export const citedSources = [
  'drees-drees-cour-des-comptes-l-accueil-et',
  'eurostat-eurostat-demo-minfind-trinh-et-al-la',
  'eurostat-eurostat-hlth-cd-apr-hlth-silc-08-hlth',
  'eurostat-ocde-health-statistics-2025-depense-de',
] satisfies readonly SourceId[]
