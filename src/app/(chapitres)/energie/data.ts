// Généré par `npm run extract` depuis Temp/chiffres2027 (3).html.
// Toutes les données chiffrées du chapitre vivent ici, chacune sous sa source
// et son millésime. Voir CLAUDE.md, règles 2 à 4.
import type { ChapterMeta, SeriesSet, SourceId, Tables } from '@/lib/types'

export const meta = {
  slug: 'energie',
  num: 'Thème 09',
  title: 'Énergie',
  shortTitle: 'Énergie',
  status: 'complete',
  updated: '2026-08',
  legacyAnchor: 's9',
} satisfies ChapterMeta

export const tables = {
  'source-2025': {
    vintage: '2025',
    sources: ['rte-rte-bilan-electrique-2025-ember-via-o'],
    columns: [
      { key: 'source-2025', header: 'Source (2025)', type: 'text', headerNumeric: false },
      { key: 'part', header: 'Part', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Nucléaire' },
          { v: 68, d: 0, u: '%', approx: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Hydraulique' },
          { v: 11, d: 0, u: '%', approx: true },
        ],
      },
      {
        cells: [
          { t: 'Solaire' },
          { v: 8, d: 0, u: '%', approx: true },
        ],
      },
      {
        cells: [
          { t: 'Éolien' },
          { v: 5, d: 0, u: '%', approx: true },
        ],
      },
      {
        cells: [
          { t: 'Thermique fossile' },
          { t: '< 3 %' },
        ],
      },
    ],
  },
  'intensite-carbone-de-l-electricite': {
    vintage: '2025',
    sources: ['rte-rte-bilan-electrique-2025-ember-via-o'],
    columns: [
      {
        key: 'intensite-carbone-de-l-electricite',
        header: 'Intensité carbone de l\'électricité',
        type: 'text',
        headerNumeric: false,
      },
      { key: '2015', header: '2015', type: 'number', headerNumeric: true },
      { key: '2025', header: '2025', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'France' },
          { v: 59.2, d: 1 },
          { v: 41.4, d: 1 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Royaume-Uni' },
          { v: 397.8, d: 1 },
          { v: 217.4, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Italie' },
          { v: 398.7, d: 1 },
          { v: 284.8, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 503.6, d: 1 },
          { v: 329.7, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'États-Unis' },
          { v: 504.9, d: 1 },
          { v: 384.4, d: 1 },
        ],
      },
    ],
  },
  filiere: {
    vintage: '2020',
    sources: ['cour-des-comptes-cour-des-comptes-rapports-sur-les-couts'],
    columns: [
      { key: 'filiere', header: 'Filière', type: 'text', headerNumeric: false },
      { key: 'mwh', header: '€/MWh', type: 'number', headerNumeric: true },
      { key: 'methode', header: 'Méthode', type: 'text', headerNumeric: false },
    ],
    rows: [
      {
        cells: [
          { t: 'Nucléaire existant (comptable)' },
          { v: 42, d: 0, approx: true },
          { t: 'Cour des comptes, coûts 2011-2020' },
        ],
      },
      {
        cells: [
          { t: 'Nucléaire existant (coût courant économique)' },
          { t: '≈ 60-65' },
          { t: 'Cour des comptes' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Solaire au sol' },
          { t: '74-79' },
          { t: 'Appels d\'offres CRE 2025' },
        ],
      },
      {
        cells: [
          { t: '<em>Repère : quota carbone européen</em>' },
          { t: '<em>≈ 83</em>' },
          { t: '<em>marché, 2026</em>' },
        ],
        total: true,
      },
      {
        cells: [
          { t: 'Éolien terrestre' },
          { v: 87.6, d: 1 },
          { t: 'Appel d\'offres CRE 2025' },
        ],
      },
      {
        cells: [
          { t: 'Solaire sur bâtiment' },
          { v: 98.2, d: 1 },
          { t: 'Appel d\'offres CRE 2025' },
        ],
      },
      {
        cells: [
          { t: 'Nouveau nucléaire EPR2' },
          { t: 'non communiqué' },
          { t: 'Opacité dénoncée par la Cour des comptes' },
        ],
        emphasis: true,
      },
    ],
  },
  'intensite-carbone-de-l-electricite-gco-kwh': {
    vintage: '2024',
    sources: ['insee-our-world-in-data-d-apres-ember-et-l-ene'],
    columns: [
      {
        key: 'intensite-carbone-de-l-electricite-gco-kwh',
        header: 'Intensité carbone de l\'électricité, gCO₂/kWh',
        type: 'text',
        headerNumeric: false,
      },
      { key: '1990', header: '1990', type: 'number', headerNumeric: true },
      { key: '2010', header: '2010', type: 'number', headerNumeric: true },
      { key: '2019', header: '2019', type: 'number', headerNumeric: true },
      { key: '2024', header: '2024', type: 'number', headerNumeric: true },
      {
        key: 'rapport-a-la-france',
        header: 'Rapport à la France',
        type: 'number',
        headerNumeric: true,
      },
    ],
    rows: [
      {
        cells: [
          { t: 'Suède' },
          { v: 33, d: 0 },
          { v: 64, d: 0 },
          { v: 42, d: 0 },
          { v: 35, d: 0 },
          { v: 0.86, d: 2, u: '×' },
        ],
      },
      {
        cells: [
          { t: '<b>France</b>' },
          { v: 104, d: 0 },
          { v: 79, d: 0 },
          { v: 60, d: 0 },
          { v: 40, d: 0, strong: true },
          { t: 'référence' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Espagne' },
          { v: 437, d: 0 },
          { v: 288, d: 0 },
          { v: 247, d: 0 },
          { v: 146, d: 0 },
          { v: 3.6, d: 1, u: '×' },
        ],
      },
      {
        cells: [
          { t: 'UE-27' },
          null,
          { v: 369, d: 0 },
          { v: 287, d: 0 },
          { v: 211, d: 0 },
          { v: 5.2, d: 1, u: '×' },
        ],
      },
      {
        cells: [
          { t: 'Royaume-Uni' },
          { v: 705, d: 0 },
          { v: 517, d: 0 },
          { v: 268, d: 0 },
          { v: 217, d: 0 },
          { v: 5.3, d: 1, u: '×' },
        ],
      },
      {
        cells: [
          { t: 'Italie' },
          { v: 564, d: 0 },
          { v: 447, d: 0 },
          { v: 351, d: 0 },
          { v: 281, d: 0 },
          { v: 7, d: 1, u: '×' },
        ],
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 622, d: 0 },
          { v: 517, d: 0 },
          { v: 393, d: 0 },
          { v: 336, d: 0 },
          { v: 8.3, d: 1, u: '×', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'États-Unis' },
          null,
          { v: 571, d: 0 },
          { v: 440, d: 0 },
          { v: 384, d: 0 },
          { v: 9.5, d: 1, u: '×', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Monde' },
          null,
          { v: 544, d: 0 },
          { v: 506, d: 0 },
          { v: 471, d: 0 },
          { v: 11.6, d: 1, u: '×' },
        ],
      },
      {
        cells: [
          { t: 'Chine' },
          null,
          { v: 741, d: 0 },
          { v: 620, d: 0 },
          { v: 555, d: 0 },
          { v: 13.7, d: 1, u: '×', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Pologne' },
          { v: 967, d: 0 },
          { v: 893, d: 0 },
          { v: 772, d: 0 },
          { v: 608, d: 0 },
          { v: 15, d: 1, u: '×' },
        ],
      },
      {
        cells: [
          { t: 'Inde' },
          null,
          { v: 739, d: 0 },
          { v: 723, d: 0 },
          { v: 705, d: 0 },
          { v: 17.4, d: 1, u: '×', strong: true },
        ],
        emphasis: true,
      },
    ],
  },
  'energie-consommee-par-unite-de-pib-kwh-par-dollar-ppa': {
    vintage: '2022',
    sources: ['insee-our-world-in-data-d-apres-ember-et-l-ene'],
    columns: [
      {
        key: 'energie-consommee-par-unite-de-pib-kwh-par-dollar-ppa',
        header: 'Énergie consommée par unité de PIB, kWh par dollar PPA',
        type: 'text',
        headerNumeric: false,
      },
      { key: '1990', header: '1990', type: 'number', headerNumeric: true },
      { key: '2022', header: '2022', type: 'number', headerNumeric: true },
      { key: 'evolution', header: 'Évolution', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Royaume-Uni' },
          { v: 1.67, d: 2 },
          { v: 0.713, d: 3 },
          { v: -57, d: 0, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Italie' },
          { v: 1.21, d: 2 },
          { v: 0.77, d: 3 },
          { v: -36, d: 0, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 2.08, d: 2 },
          { v: 0.804, d: 3 },
          { v: -61, d: 0, u: '%' },
        ],
      },
      {
        cells: [
          { t: '<b>France</b>' },
          { v: 1.59, d: 2 },
          { v: 0.859, d: 3, strong: true },
          { v: -46, d: 0, u: '%', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Espagne' },
          { v: 1.36, d: 2 },
          { v: 0.883, d: 3 },
          { v: -35, d: 0, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Pologne' },
          { v: 3.81, d: 2 },
          { v: 0.92, d: 3 },
          { v: -76, d: 0, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Monde' },
          { v: 2.14, d: 2 },
          { v: 1.214, d: 3 },
          { v: -43, d: 0, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'États-Unis' },
          { v: 2.41, d: 2 },
          { v: 1.314, d: 3 },
          { v: -45, d: 0, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Chine' },
          { v: 2.27, d: 2 },
          { v: 1.495, d: 3 },
          { v: -34, d: 0, u: '%' },
        ],
      },
    ],
  },
  repere: {
    vintage: '2038',
    sources: ['insee-our-world-in-data-d-apres-ember-et-l-ene'],
    columns: [
      { key: 'repere', header: 'Repère', type: 'text', headerNumeric: false },
      { key: 'valeur', header: 'Valeur', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Facture énergétique de l\'industrie française, 2023' },
          { t: '22,7 Md€ — soit <b>7 à 8 % de la valeur ajoutée manufacturière</b>' },
        ],
      },
      {
        cells: [
          { t: 'Coût moyen de l\'énergie pour l\'industrie' },
          { t: '954 €/tep en 2023 contre <b>419 € en 2019</b> — ×2,3' },
        ],
      },
      {
        cells: [
          { t: 'Électro-intensité de la <b>chimie</b>' },
          { t: '0,88 kWh par euro de valeur ajoutée — soit ≈ <b>11 % de la valeur ajoutée</b>' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Électro-intensité de l\'<b>agroalimentaire</b>' },
          { t: '0,38 kWh par euro — soit ≈ <b>5 %</b>' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Seuil réglementaire allemand d\'électro-intensité' },
          { v: 20, d: 0, u: '% de la valeur ajoutée brute', strong: true },
        ],
      },
    ],
  },
} satisfies Tables

export const series = {} satisfies SeriesSet

/** Fiches du chapitre, dans l'ordre : alimente le rail et la recherche. */
export const questions = [
  { id: 's9-q1', title: 'Pourquoi l\'électricité française est-elle décarbonée ?' },
  { id: 's9-q2', title: 'Combien coûte réellement un MWh ?' },
  { id: 's9-q3', title: 'Pourquoi les prix ont-ils augmenté malgré le nucléaire ?' },
  {
    id: 's9-q4',
    title: 'Quel mix serait le moins coûteux ? Et qu\'est-ce qu\'un taux d\'actualisation ?',
  },
  { id: 's9-q5', title: 'Comment la France se situe hors d\'Europe : États-Unis, Chine, Inde' },
  { id: 's9-q6', title: 'Quelle est la dépendance énergétique réelle ?' },
] satisfies readonly { id: string; title: string }[]

/**
 * Sources citées dans le texte du chapitre, en plus de celles portées par les
 * tableaux et les figures. La bibliographie les recense aussi : une source
 * citée en prose reste une source du dossier.
 */
export const citedSources = [
  'cour-des-comptes-cour-des-comptes-rapports-sur-les-couts',
  'insee-our-world-in-data-d-apres-ember-et-l-ene',
  'rte-rte-bilan-electrique-2025-ember-via-o',
] satisfies readonly SourceId[]
