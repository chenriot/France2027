// Généré par `npm run extract` depuis Temp/chiffres2027 (3).html.
// Toutes les données chiffrées du chapitre vivent ici, chacune sous sa source
// et son millésime. Voir CLAUDE.md, règles 2 à 4.
import type { ChapterMeta, SeriesSet, SourceId, Tables } from '@/lib/types'

export const meta = {
  slug: 'depenses-publiques',
  num: 'Thème 01',
  title: 'Dépenses publiques, impôts et redistribution',
  shortTitle: 'Dépenses publiques, impôts, redistribution',
  note: 'La France est 2ᵉ d\'Europe pour la dépense en % du PIB, mais 8ᵉ par habitant. Et une fois les intérêts de la dette retirés, son administration générale est exactement dans la moyenne européenne.',
  status: 'complete',
  updated: '2026-08',
  legacyAnchor: 's1',
} satisfies ChapterMeta

export const tables = {
  '2023': {
    vintage: '2023',
    sources: [
      'insee-calcul-par-nos-soins-a-partir-de-l-insee',
      'insee-memes-sources-et-meme-perimetre-que-le-g',
      'insee-insee-analyses-n-118-et-119-revenus-de',
    ],
    columns: [
      { key: '2023', header: '2023', type: 'text', headerNumeric: false },
      { key: 'd1', header: 'D1', type: 'number', headerNumeric: true },
      { key: 'd2', header: 'D2', type: 'number', headerNumeric: true },
      { key: 'd3', header: 'D3', type: 'number', headerNumeric: true },
      { key: 'd4', header: 'D4', type: 'number', headerNumeric: true },
      { key: 'd5', header: 'D5', type: 'number', headerNumeric: true },
      { key: 'd6', header: 'D6', type: 'number', headerNumeric: true },
      { key: 'd7', header: 'D7', type: 'number', headerNumeric: true },
      { key: 'd8', header: 'D8', type: 'number', headerNumeric: true },
      { key: 'd9', header: 'D9', type: 'number', headerNumeric: true },
      { key: 'd10', header: 'D10', type: 'number', headerNumeric: true },
      { key: 'total', header: 'Total', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Revenu primaire élargi, Md€' },
          { v: 27, d: 0 },
          { v: 58, d: 0 },
          { v: 88, d: 0 },
          { v: 118, d: 0 },
          { v: 142, d: 0 },
          { v: 167, d: 0 },
          { v: 201, d: 0 },
          { v: 249, d: 0 },
          { v: 317, d: 0 },
          { v: 718, d: 0 },
          { v: 2083, d: 0 },
        ],
      },
      {
        cells: [
          { t: '<b>Prélèvements, Md€</b>' },
          { v: 29, d: 0 },
          { v: 41, d: 0 },
          { v: 56, d: 0 },
          { v: 72, d: 0 },
          { v: 86, d: 0 },
          { v: 101, d: 0 },
          { v: 121, d: 0 },
          { v: 149, d: 0 },
          { v: 191, d: 0 },
          { v: 423, d: 0, strong: true },
          { v: 1271, d: 0, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Prestations monétaires, Md€' },
          { v: 37, d: 0 },
          { v: 50, d: 0 },
          { v: 55, d: 0 },
          { v: 55, d: 0 },
          { v: 57, d: 0 },
          { v: 59, d: 0 },
          { v: 60, d: 0 },
          { v: 63, d: 0 },
          { v: 68, d: 0 },
          { v: 87, d: 0 },
          { v: 592, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Transferts en nature, Md€' },
          { v: 89, d: 0 },
          { v: 96, d: 0 },
          { v: 83, d: 0 },
          { v: 83, d: 0 },
          { v: 72, d: 0 },
          { v: 72, d: 0 },
          { v: 71, d: 0 },
          { v: 63, d: 0 },
          { v: 65, d: 0 },
          { v: 52, d: 0 },
          { v: 745, d: 0 },
        ],
      },
      {
        cells: [
          { t: '<b>Solde net</b>' },
          { v: 97, d: 0, sign: true, strong: true },
          { v: 105, d: 0, sign: true },
          { v: 82, d: 0, sign: true },
          { v: 66, d: 0, sign: true },
          { v: 43, d: 0, sign: true },
          { v: 30, d: 0, sign: true },
          { v: 10, d: 0, sign: true },
          { v: -23, d: 0 },
          { v: -58, d: 0 },
          { v: -284, d: 0, strong: true },
          { v: 66, d: 0, sign: true },
        ],
        total: true,
      },
      {
        cells: [
          { t: 'Prélèvements par unité de consommation, €' },
          { v: 6400, d: 0 },
          { v: 8800, d: 0 },
          { v: 11900, d: 0 },
          { v: 15100, d: 0 },
          { v: 18200, d: 0 },
          { v: 21500, d: 0 },
          { v: 25700, d: 0 },
          { v: 31700, d: 0 },
          { v: 41100, d: 0 },
          { v: 89800, d: 0 },
          { v: 27000, d: 0 },
        ],
      },
    ],
  },
  '2024': {
    vintage: '2024',
    sources: [
      'eurostat-nama-10-lp-ulc', 'eurostat-nama-10-lp-ulc-2',
      'eurostat-eurostat-nama-10-pc-nama-10-lp-ulc-nlp',
    ],
    columns: [
      { key: '2024', header: '2024', type: 'text', headerNumeric: false },
      { key: 'pib-heure-spa', header: 'PIB/heure (SPA)', type: 'number', headerNumeric: true },
      {
        key: 'heures-par-personne-en-emploi',
        header: 'Heures par personne en emploi',
        type: 'number',
        headerNumeric: true,
      },
      {
        key: 'pib-par-personne-en-emploi',
        header: '= <b>PIB par personne en emploi</b>',
        type: 'number',
        headerNumeric: true,
      },
      {
        key: 'taux-d-emploi-15-64',
        header: 'Taux d\'emploi 15-64',
        type: 'number',
        headerNumeric: true,
      },
      { key: 'part-des-15-64', header: 'Part des 15-64', type: 'number', headerNumeric: true },
      { key: 'pib-hab-spa', header: 'PIB/hab (SPA)', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: '<b>France</b>' },
          { v: 58.4, d: 1 },
          { v: 1512, d: 0, strong: true },
          { v: 88340, d: 0, strong: true },
          { v: 68.8, d: 1, u: '%', strong: true },
          { v: 61.6, d: 1, u: '%', strong: true },
          { v: 39294, d: 0 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 63.5, d: 1 },
          { v: 1345, d: 0 },
          { v: 85422, d: 0 },
          { v: 77.2, d: 1, u: '%' },
          { v: 63.7, d: 1, u: '%' },
          { v: 46387, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Italie' },
          { v: 50.6, d: 1 },
          { v: 1715, d: 0 },
          { v: 86774, d: 0 },
          { v: 62.2, d: 1, u: '%' },
          { v: 63.5, d: 1, u: '%' },
          { v: 39068, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Espagne' },
          { v: 49.2, d: 1 },
          { v: 1644, d: 0 },
          { v: 80859, d: 0 },
          { v: 66.1, d: 1, u: '%' },
          { v: 66.4, d: 1, u: '%' },
          { v: 36413, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Pays-Bas' },
          { v: 64, d: 1 },
          { v: 1453, d: 0 },
          { v: 92996, d: 0 },
          { v: 82.3, d: 1, u: '%' },
          { v: 64.4, d: 1, u: '%' },
          { v: 53449, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Suède' },
          { v: 55.3, d: 1 },
          { v: 1579, d: 0 },
          { v: 87313, d: 0 },
          { v: 76.7, d: 1, u: '%' },
          { v: 62.3, d: 1, u: '%' },
          { v: 44772, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Pologne' },
          { v: 33.9, d: 1 },
          { v: 2001, d: 0 },
          { v: 67777, d: 0 },
          { v: 72.5, d: 1, u: '%' },
          { v: 64.4, d: 1, u: '%' },
          { v: 31463, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'UE-27' },
          { v: 51.1, d: 1 },
          { v: 1610, d: 0 },
          { v: 82231, d: 0 },
          { v: 70.7, d: 1, u: '%' },
          { v: 63.8, d: 1, u: '%' },
          { v: 39985, d: 0 },
        ],
        total: true,
      },
    ],
  },
  '2025': {
    vintage: '2025',
    sources: ['eurostat-eurostat-gov-10a-main-et-nama-10-pc-202'],
    columns: [
      { key: '2025', header: '2025', type: 'text', headerNumeric: false },
      { key: 'depense-pib', header: 'Dépense / PIB', type: 'number', headerNumeric: true },
      { key: 'rang', header: 'Rang', type: 'number', headerNumeric: true },
      { key: 'depense-hab-spa', header: 'Dépense / hab. (SPA)', type: 'number', headerNumeric: true },
      { key: 'rang', header: 'Rang', type: 'number', headerNumeric: true },
      { key: 'pib-hab-spa', header: 'PIB / hab. (SPA)', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Luxembourg' },
          { v: 49.1, d: 1, u: '%' },
          { v: 11, d: 0 },
          { v: 48914, d: 0 },
          { v: 1, d: 0 },
          { v: 99621, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Autriche' },
          { v: 55.2, d: 1, u: '%' },
          { v: 3, d: 0 },
          { v: 27060, d: 0 },
          { v: 2, d: 0 },
          { v: 49022, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Danemark' },
          { v: 48.1, d: 1, u: '%' },
          { v: 13, d: 0 },
          { v: 25945, d: 0 },
          { v: 3, d: 0 },
          { v: 53941, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Belgique' },
          { v: 54.2, d: 1, u: '%' },
          { v: 4, d: 0 },
          { v: 25841, d: 0 },
          { v: 4, d: 0 },
          { v: 47676, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Pays-Bas' },
          { v: 44.9, d: 1, u: '%' },
          { v: 19, d: 0 },
          { v: 24763, d: 0 },
          { v: 5, d: 0 },
          { v: 55152, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Finlande' },
          { v: 57.7, d: 1, u: '%' },
          { v: 1, d: 0 },
          { v: 24275, d: 0 },
          { v: 6, d: 0 },
          { v: 42070, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 50.5, d: 1, u: '%' },
          { v: 7, d: 0 },
          { v: 24230, d: 0 },
          { v: 7, d: 0 },
          { v: 47979, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'France' },
          { v: 57.2, d: 1, u: '%' },
          { v: 2, d: 0 },
          { v: 23290, d: 0 },
          { v: 8, d: 0 },
          { v: 40716, d: 0 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Suède' },
          { v: 49.9, d: 1, u: '%' },
          { v: 9, d: 0 },
          { v: 23158, d: 0 },
          { v: 9, d: 0 },
          { v: 46408, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Italie' },
          { v: 51.2, d: 1, u: '%' },
          { v: 5, d: 0 },
          { v: 20454, d: 0 },
          { v: 10, d: 0 },
          { v: 39949, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Espagne' },
          { v: 45.3, d: 1, u: '%' },
          { v: 18, d: 0 },
          { v: 17275, d: 0 },
          { v: 13, d: 0 },
          { v: 38136, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Pologne' },
          { v: 50.9, d: 1, u: '%' },
          { v: 6, d: 0 },
          { v: 17213, d: 0 },
          { v: 14, d: 0 },
          { v: 33817, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'UE-27' },
          { v: 49.5, d: 1, u: '%' },
          null,
          { v: 20575, d: 0 },
          null,
          { v: 41566, d: 0 },
        ],
        total: true,
      },
    ],
  },
  'fonction-cofog-2024': {
    vintage: '2024',
    sources: ['eurostat-gov-10a-exp', 'eurostat-eurostat-gov-10a-exp-sector-s13-na-ite'],
    columns: [
      {
        key: 'fonction-cofog-2024',
        header: 'Fonction (COFOG), 2024',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'france-md', header: 'France Md€', type: 'number', headerNumeric: true },
      { key: 'sur-100', header: 'Sur 100 €', type: 'number', headerNumeric: true },
      { key: 'france-hab', header: 'France €/hab', type: 'number', headerNumeric: true },
      { key: 'allem', header: 'Allem.', type: 'number', headerNumeric: true },
      { key: 'italie', header: 'Italie', type: 'number', headerNumeric: true },
      { key: 'espagne', header: 'Espagne', type: 'number', headerNumeric: true },
      { key: 'p-bas', header: 'P.-Bas', type: 'number', headerNumeric: true },
      { key: 'ue-27', header: 'UE-27', type: 'number', headerNumeric: true },
      { key: 'fr-pib', header: 'FR, % PIB', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Protection sociale' },
          { v: 693, d: 1 },
          { v: 41, d: 0, u: '€' },
          { v: 10077, d: 0 },
          { v: 10575, d: 0 },
          { v: 7940, d: 0 },
          { v: 6088, d: 0 },
          { v: 10339, d: 0 },
          { v: 7865, d: 0 },
          { v: 23.7, d: 1 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Santé' },
          { v: 261.2, d: 1 },
          { v: 16, d: 0, u: '€' },
          { v: 3797, d: 0 },
          { v: 3942, d: 0 },
          { v: 2478, d: 0 },
          { v: 2106, d: 0 },
          { v: 4529, d: 0 },
          { v: 2957, d: 0 },
          { v: 8.9, d: 1 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Affaires économiques' },
          { v: 166.1, d: 1 },
          { v: 10, d: 0, u: '€' },
          { v: 2415, d: 0 },
          { v: 2808, d: 0 },
          { v: 1906, d: 0 },
          { v: 1655, d: 0 },
          { v: 2750, d: 0 },
          { v: 2119, d: 0 },
          { v: 5.7, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Enseignement' },
          { v: 148.6, d: 1 },
          { v: 9, d: 0, u: '€' },
          { v: 2161, d: 0 },
          { v: 2330, d: 0 },
          { v: 1513, d: 0 },
          { v: 1348, d: 0 },
          { v: 3176, d: 0 },
          { v: 1910, d: 0 },
          { v: 5.1, d: 1 },
        ],
      },
      {
        cells: [
          { t: '<b>Charge de la dette</b> <em>(COFOG 01.7)</em>' },
          { v: 58.9, d: 1 },
          { v: 4, d: 0, u: '€' },
          { v: 856, d: 0 },
          { v: 590, d: 0 },
          { v: 1489, d: 0 },
          { v: 811, d: 0 },
          { v: 445, d: 0 },
          { v: 773, d: 0 },
          { v: 2, d: 1 },
        ],
        separator: true,
      },
      {
        cells: [
          { t: '<b>Administration générale</b> <em>(01.1, hors dette)</em>' },
          { v: 42.8, d: 1 },
          { v: 3, d: 0, u: '€' },
          { v: 623, d: 0 },
          { v: 1070, d: 0 },
          { v: 735, d: 0 },
          { v: 439, d: 0 },
          { v: 1268, d: 0 },
          { v: 759, d: 0 },
          { v: 1.5, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Autres services généraux <em>(01.3, 01.4…)</em>' },
          { v: 79.4, d: 1 },
          { v: 5, d: 0, u: '€' },
          { v: 1154, d: 0 },
          { v: 1667, d: 0 },
          { v: 666, d: 0 },
          { v: 644, d: 0 },
          { v: 854, d: 0 },
          { v: 902, d: 0 },
          { v: 2.7, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Défense' },
          { v: 54.2, d: 1 },
          { v: 3, d: 0, u: '€' },
          { v: 788, d: 0 },
          { v: 701, d: 0 },
          { v: 480, d: 0 },
          { v: 291, d: 0 },
          { v: 1016, d: 0 },
          { v: 592, d: 0 },
          { v: 1.9, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Ordre et sécurité' },
          { v: 52.1, d: 1 },
          { v: 3, d: 0, u: '€' },
          { v: 758, d: 0 },
          { v: 846, d: 0 },
          { v: 663, d: 0 },
          { v: 586, d: 0 },
          { v: 1200, d: 0 },
          { v: 697, d: 0 },
          { v: 1.8, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Loisirs, culture' },
          { v: 43.1, d: 1 },
          { v: 3, d: 0, u: '€' },
          { v: 626, d: 0 },
          { v: 551, d: 0 },
          { v: 318, d: 0 },
          { v: 393, d: 0 },
          { v: 746, d: 0 },
          { v: 473, d: 0 },
          { v: 1.5, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Logement' },
          { v: 42.1, d: 1 },
          { v: 3, d: 0, u: '€' },
          { v: 613, d: 0 },
          { v: 245, d: 0 },
          { v: 288, d: 0 },
          { v: 156, d: 0 },
          { v: 384, d: 0 },
          { v: 296, d: 0 },
          { v: 1.4, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Environnement' },
          { v: 30.3, d: 1 },
          { v: 2, d: 0, u: '€' },
          { v: 440, d: 0 },
          { v: 294, d: 0 },
          { v: 336, d: 0 },
          { v: 318, d: 0 },
          { v: 997, d: 0 },
          { v: 330, d: 0 },
          { v: 1, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Total' },
          { v: 1671.8, d: 1 },
          { v: 100, d: 0, u: '€' },
          { v: 24308, d: 0 },
          { v: 25620, d: 0 },
          { v: 18813, d: 0 },
          { v: 14834, d: 0 },
          { v: 27705, d: 0 },
          { v: 19674, d: 0 },
          { v: 57.3, d: 1 },
        ],
        total: true,
      },
    ],
  },
  'protection-sociale-cofog-10-2024': {
    vintage: '2024',
    sources: ['eurostat-eurostat-gov-10a-exp-s13-te-mio-eur'],
    columns: [
      {
        key: 'protection-sociale-cofog-10-2024',
        header: 'Protection sociale (COFOG 10), 2024',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'france', header: 'France', type: 'number', headerNumeric: true },
      { key: 'allemagne', header: 'Allemagne', type: 'number', headerNumeric: true },
      { key: 'ecart', header: 'Écart', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Montant' },
          { v: 693, d: 1, u: 'Md€' },
          { v: 883.2, d: 1, u: 'Md€' },
          { v: 27.4, d: 1, u: '%', sign: true, strong: true, after: 'pour l\'Allemagne' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Par habitant' },
          { v: 10077, d: 0, u: '€' },
          { v: 10575, d: 0, u: '€' },
          { v: 4.9, d: 1, u: '%', sign: true, strong: true, after: 'pour l\'Allemagne' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'En % du PIB' },
          { v: 23.6, d: 1, u: '%' },
          { v: 20.4, d: 1, u: '%' },
          { v: 3.2, d: 1, u: 'points', sign: true, strong: true, after: 'pour la France' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<em>Population moyenne</em>' },
          { v: 68.78, d: 2, u: 'M' },
          { v: 83.52, d: 2, u: 'M' },
          { v: 21.4, d: 1, u: '%', sign: true },
        ],
        separator: true,
      },
      {
        cells: [
          { t: '<em>PIB</em>' },
          { v: 2935, d: 0, u: 'Md€' },
          { v: 4329, d: 0, u: 'Md€' },
          { v: 47.5, d: 1, u: '%', sign: true },
        ],
      },
      {
        cells: [
          { t: '<em>PIB par habitant</em>' },
          { v: 42678, d: 0, u: '€' },
          { v: 51834, d: 0, u: '€' },
          { v: 21.5, d: 1, u: '%', sign: true, strong: true },
        ],
        emphasis: true,
      },
    ],
  },
  'sous-fonction-par-habitant-2024': {
    vintage: '2024',
    sources: ['eurostat-eurostat-gov-10a-exp-s13-te-mio-eur'],
    columns: [
      {
        key: 'sous-fonction-par-habitant-2024',
        header: 'Sous-fonction, € par habitant, 2024',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'france', header: 'France', type: 'number', headerNumeric: true },
      { key: 'allemagne', header: 'Allemagne', type: 'number', headerNumeric: true },
      { key: 'ecart', header: 'Écart', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: '10.2 Vieillesse' },
          { v: 5699, d: 0, strong: true },
          { v: 5115, d: 0 },
          { v: -584, d: 0, strong: true, after: '— la France dépense plus' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '10.7 Exclusion sociale non classée ailleurs' },
          { v: 530, d: 0, strong: true },
          { v: 321, d: 0 },
          { v: -209, d: 0, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '10.4 Famille et enfants' },
          { v: 970, d: 0 },
          { v: 1003, d: 0 },
          { v: 33, d: 0, sign: true },
        ],
      },
      {
        cells: [
          { t: '10.5 Chômage' },
          { v: 705, d: 0 },
          { v: 859, d: 0 },
          { v: 153, d: 0, sign: true },
        ],
      },
      {
        cells: [
          { t: '10.6 Logement, R&D et autres' },
          { v: 362, d: 0 },
          { v: 585, d: 0 },
          { v: 223, d: 0, sign: true },
        ],
      },
      {
        cells: [
          { t: '10.3 Survie (pensions de réversion)' },
          { v: 590, d: 0 },
          { v: 968, d: 0, strong: true },
          { v: 378, d: 0, sign: true, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '10.1 Maladie et invalidité' },
          { v: 1220, d: 0 },
          { v: 1723, d: 0, strong: true },
          { v: 503, d: 0, sign: true, strong: true, after: '— l\'Allemagne dépense plus' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Total protection sociale' },
          { v: 10077, d: 0 },
          { v: 10575, d: 0 },
          { v: 498, d: 0, sign: true },
        ],
        total: true,
      },
    ],
  },
  'par-habitant-2024': {
    vintage: '2024',
    sources: ['eurostat-eurostat-gov-10a-exp-s13-te-mio-eur'],
    columns: [
      { key: 'par-habitant-2024', header: '€ par habitant, 2024', type: 'text', headerNumeric: false },
      { key: 'france', header: 'France', type: 'number', headerNumeric: true },
      { key: 'allemagne', header: 'Allemagne', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Santé (COFOG 07)' },
          { v: 3798, d: 0 },
          { v: 3942, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Protection sociale (COFOG 10)' },
          { v: 10077, d: 0 },
          { v: 10575, d: 0 },
        ],
      },
      {
        cells: [
          { t: '<b>Total social au sens large</b>' },
          { v: 13875, d: 0, strong: true },
          { t: '<b>14 517</b> — <b>+4,6 %</b>' },
        ],
        total: true,
      },
    ],
  },
  'sous-secteur': {
    vintage: '2024',
    sources: ['eurostat-eurostat-gov-10a-main-par-sous-secteur'],
    columns: [
      { key: 'sous-secteur', header: 'Sous-secteur', type: 'text', headerNumeric: false },
      { key: 'depense-2024-md', header: 'Dépense 2024, Md€', type: 'number', headerNumeric: true },
      { key: 'du-s13-consolide', header: '% du S13 consolidé', type: 'number', headerNumeric: true },
      { key: 'du-pib', header: '% du PIB', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'S1311 — État et organismes divers d\'administration centrale' },
          { v: 671.3, d: 1 },
          { v: 40.1, d: 1, u: '%' },
          { v: 22.9, d: 1 },
        ],
      },
      {
        cells: [
          {
            t: 'S1313 — <b>administrations publiques locales</b> (communes, départements, régions, intercommunalités)',
          },
          { v: 330.5, d: 1 },
          { v: 19.8, d: 1, u: '%' },
          { v: 11.3, d: 1 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'S1314 — administrations de sécurité sociale (dont hôpitaux publics)' },
          { v: 777.3, d: 1 },
          { v: 46.5, d: 1, u: '%' },
          { v: 26.5, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'S1312 — administrations d\'États fédérés' },
          null,
          null,
          { t: 'sans objet en France' },
        ],
      },
      {
        cells: [
          { t: '<em>Somme brute des trois</em>' },
          { v: 1779, d: 1 },
          { v: 106.4, d: 1, u: '%' },
          { v: 60.6, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Transferts entre administrations, éliminés' },
          { v: -106.3, d: 1 },
          { v: -6.4, d: 1, u: '%' },
          { v: -3.6, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'S13 consolidé' },
          { v: 1672.7, d: 1 },
          { v: 100, d: 0, u: '%' },
          { v: 57, d: 1 },
        ],
        total: true,
      },
    ],
  },
  'mesure-de-la-depense-de-sante-du-pib': {
    vintage: '2025',
    sources: ['eurostat-eurostat-hlth-sha11-hf-et-hlth-sha11-hc'],
    columns: [
      {
        key: 'mesure-de-la-depense-de-sante-du-pib',
        header: 'Mesure de la dépense de santé, % du PIB',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'france', header: 'France', type: 'number', headerNumeric: true },
      { key: 'allemagne', header: 'Allemagne', type: 'number', headerNumeric: true },
      { key: 'italie', header: 'Italie', type: 'number', headerNumeric: true },
      { key: 'espagne', header: 'Espagne', type: 'number', headerNumeric: true },
      { key: 'ru', header: 'RU', type: 'number', headerNumeric: true },
      { key: 'etats-unis', header: 'États-Unis', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'COFOG 07 « santé » (dépense publique)' },
          { v: 8.9, d: 1 },
          { v: 7.6, d: 1 },
          { v: 6.6, d: 1 },
          { v: 6.5, d: 1 },
          null,
          null,
        ],
      },
      {
        cells: [
          { t: 'Comptes de la santé SHA, dépense publique et obligatoire' },
          { v: 9.4, d: 1 },
          { v: 10, d: 1 },
          { v: 6.1, d: 1 },
          { v: 6.8, d: 1 },
          { v: 9, d: 1 },
          { v: 9, d: 1 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Comptes de la santé SHA, dépense totale' },
          { v: 11.3, d: 1 },
          { v: 11.7, d: 1 },
          { v: 8.4, d: 1 },
          { v: 9.2, d: 1 },
          { v: 11, d: 1 },
          { v: 16.7, d: 1 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'dont soins de longue durée, volet santé' },
          { v: 1.8, d: 1 },
          { v: 2.5, d: 1 },
          null,
          null,
          null,
          null,
        ],
      },
      {
        cells: [
          { t: 'dont soins de longue durée, volet social' },
          { v: 0.7, d: 1 },
          { t: 'non déclaré' },
          null,
          null,
          null,
          null,
        ],
      },
    ],
  },
  'sous-fonction': {
    vintage: '2024',
    sources: ['eurostat-eurostat-gov-10a-exp-sous-fonctions-cof'],
    columns: [
      { key: 'sous-fonction', header: 'Sous-fonction', type: 'text', headerNumeric: false },
      { key: 'md', header: 'Md€', type: 'number', headerNumeric: true },
      { key: 'france', header: 'France', type: 'number', headerNumeric: true },
      { key: 'allem', header: 'Allem.', type: 'number', headerNumeric: true },
      { key: 'italie', header: 'Italie', type: 'number', headerNumeric: true },
      { key: 'ue-27', header: 'UE-27', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: '04.5 Transports' },
          { v: 60.7, d: 1 },
          { v: 2.1, d: 1 },
          { v: 2.7, d: 1 },
          { v: 2.4, d: 1 },
          { v: 2.5, d: 1 },
        ],
      },
      {
        cells: [
          { t: '04.1 Tutelle de l\'économie et de l\'emploi' },
          { v: 45.3, d: 1 },
          { v: 1.5, d: 1 },
          { v: 0.8, d: 1 },
          { v: 0.8, d: 1 },
          { v: 1, d: 1 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '04.8 R&D affaires économiques' },
          { v: 21.4, d: 1 },
          { v: 0.7, d: 1 },
          { v: 0.3, d: 1 },
          { v: 0.3, d: 1 },
          { v: 0.4, d: 1 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '04.3 Combustibles et énergie' },
          { v: 15.5, d: 1 },
          { v: 0.5, d: 1 },
          { v: 0.7, d: 1 },
          { v: 0.6, d: 1 },
          { v: 0.6, d: 1 },
        ],
      },
      {
        cells: [
          { t: '04.7 Autres branches' },
          { v: 11.2, d: 1 },
          { v: 0.4, d: 1 },
          { v: 0.2, d: 1 },
          { v: 0.1, d: 1 },
          { v: 0.2, d: 1 },
        ],
      },
      {
        cells: [
          { t: '04.2 Agriculture, pêche' },
          { v: 6.2, d: 1 },
          { v: 0.2, d: 1 },
          { v: 0.2, d: 1 },
          { v: 0.3, d: 1 },
          { v: 0.3, d: 1 },
        ],
      },
      {
        cells: [
          { t: '04.9 Non classées ailleurs' },
          { v: 2.6, d: 1 },
          { v: 0.1, d: 1 },
          { v: 0.2, d: 1 },
          { v: 0.1, d: 1 },
          { v: 0.1, d: 1 },
        ],
      },
      {
        cells: [
          { t: '04.4 Industries, construction' },
          { v: 1.6, d: 1 },
          { v: 0.1, d: 1 },
          { v: 0.2, d: 1 },
          { v: 0.5, d: 1 },
          { v: 0.2, d: 1 },
        ],
      },
      {
        cells: [
          { t: '04.6 Communications' },
          { v: 1.6, d: 1 },
          { v: 0.1, d: 1 },
          { v: 0, d: 1 },
          { v: 0.1, d: 1 },
          { v: 0.1, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Total' },
          { v: 166.1, d: 1 },
          { v: 5.7, d: 1 },
          { v: 5.4, d: 1 },
          { v: 5.1, d: 1 },
          { v: 5.3, d: 1 },
        ],
        total: true,
      },
    ],
  },
  '2024-du-pib': {
    vintage: '2024',
    sources: ['eurostat-eurostat-gov-10a-exp-sous-fonction-cofo'],
    columns: [
      { key: '2024-du-pib', header: '2024, % du PIB', type: 'text', headerNumeric: false },
      {
        key: 'services-generaux-brut',
        header: 'Services généraux (brut)',
        type: 'number',
        headerNumeric: true,
      },
      { key: 'dont-interets', header: 'dont intérêts', type: 'number', headerNumeric: true },
      {
        key: 'administration-au-sens-strict',
        header: 'Administration au sens strict',
        type: 'number',
        headerNumeric: true,
      },
    ],
    rows: [
      {
        cells: [
          { t: 'Italie' },
          { v: 7.7, d: 1 },
          { v: 4, d: 1 },
          { v: 3.7, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 6.4, d: 1 },
          { v: 1.1, d: 1 },
          { v: 5.3, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'France' },
          { v: 6.2, d: 1 },
          { v: 2, d: 1 },
          { v: 4.2, d: 1 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'UE-27' },
          { v: 6.1, d: 1 },
          { v: 1.9, d: 1 },
          { v: 4.2, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Espagne' },
          { v: 5.8, d: 1 },
          { v: 2.5, d: 1 },
          { v: 3.3, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Pays-Bas' },
          { v: 4.1, d: 1 },
          { v: 0.7, d: 1 },
          { v: 3.4, d: 1 },
        ],
      },
    ],
  },
  'croissance-cumulee-du-pib-par-habitant-2007-2024': {
    vintage: '2024',
    sources: [
      'our-world-in-data-maddison-project-database-via-our-world',
      'eurostat-eurostat-pib-par-habitant-en-standards',
      'eurostat-maddison-project-database-via-our-world',
    ],
    columns: [
      {
        key: 'croissance-cumulee-du-pib-par-habitant-2007-2024',
        header: 'Croissance cumulée du PIB par habitant, 2007-2024',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'c2', header: '%', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Irlande' },
          { v: 80.9, d: 1, sign: true },
        ],
      },
      {
        cells: [
          { t: 'Pologne' },
          { v: 79.9, d: 1, sign: true },
        ],
      },
      {
        cells: [
          { t: 'États-Unis' },
          { v: 23.5, d: 1, sign: true },
        ],
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 13.7, d: 1, sign: true },
        ],
      },
      {
        cells: [
          { t: 'Portugal' },
          { v: 13.5, d: 1, sign: true },
        ],
      },
      {
        cells: [
          { t: 'Pays-Bas' },
          { v: 12.6, d: 1, sign: true },
        ],
      },
      {
        cells: [
          { t: 'Suède' },
          { v: 10.6, d: 1, sign: true },
        ],
      },
      {
        cells: [
          { t: 'France' },
          { v: 9, d: 1, sign: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Espagne' },
          { v: 7, d: 1, sign: true },
        ],
      },
      {
        cells: [
          { t: 'Royaume-Uni' },
          { v: 6.7, d: 1, sign: true },
        ],
      },
      {
        cells: [
          { t: 'Italie' },
          { v: 1, d: 1, sign: true },
        ],
      },
      {
        cells: [
          { t: 'Grèce' },
          { v: -11.4, d: 1 },
        ],
      },
    ],
  },
  'france-allemagne-pib-par-heure': {
    vintage: '2024',
    sources: [
      'eurostat-nama-10-lp-ulc', 'eurostat-nama-10-lp-ulc-2',
      'eurostat-eurostat-nama-10-pc-nama-10-lp-ulc-nlp',
    ],
    columns: [
      {
        key: 'france-allemagne-pib-par-heure',
        header: 'France / Allemagne, PIB par heure',
        type: 'text',
        headerNumeric: false,
      },
      { key: '1995', header: '1995', type: 'number', headerNumeric: true },
      { key: '2000', header: '2000', type: 'number', headerNumeric: true },
      { key: '2008', header: '2008', type: 'number', headerNumeric: true },
      { key: '2015', header: '2015', type: 'number', headerNumeric: true },
      { key: '2019', header: '2019', type: 'number', headerNumeric: true },
      { key: '2022', header: '2022', type: 'number', headerNumeric: true },
      { key: '2024', header: '2024', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Rapport' },
          { v: 99.3, d: 1, u: '%' },
          { v: 103.8, d: 1, u: '%' },
          { v: 101.4, d: 1, u: '%' },
          { v: 100, d: 1, u: '%' },
          { v: 100.2, d: 1, u: '%', strong: true },
          { v: 91.1, d: 1, u: '%', strong: true },
          { v: 92, d: 1, u: '%' },
        ],
        emphasis: true,
      },
    ],
  },
  'contribution-a-l-ecart-france-allemagne': {
    vintage: '2026',
    sources: [
      'eurostat-nama-10-lp-ulc', 'eurostat-nama-10-lp-ulc-2',
      'eurostat-eurostat-nama-10-pc-nama-10-lp-ulc-nlp',
    ],
    columns: [
      {
        key: 'contribution-a-l-ecart-france-allemagne',
        header: 'Contribution à l\'écart France/Allemagne',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'pib-hab', header: 'PIB/hab', type: 'number', headerNumeric: true },
      {
        key: 'productivite-horaire',
        header: 'Productivité horaire',
        type: 'number',
        headerNumeric: true,
      },
      { key: 'heures-par-emploi', header: 'Heures par emploi', type: 'number', headerNumeric: true },
      { key: 'taux-d-emploi', header: 'Taux d\'emploi', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { v: 1995, d: 0, u: '→ 2008', strong: true, g: false },
          { v: 3, d: 1, sign: true },
          { v: 2.2, d: 1, sign: true },
          { v: 2.5, d: 1, sign: true },
          { v: 0.5, d: 1, sign: true },
        ],
      },
      {
        cells: [
          { v: 2008, d: 0, u: '→ 2019', strong: true, g: false },
          { v: -5.5, d: 1 },
          { v: -1.2, d: 1 },
          { v: 3.5, d: 1, sign: true },
          { v: -7.9, d: 1, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { v: 2019, d: 0, u: '→ 2024', strong: true, g: false },
          { v: -0.7, d: 1 },
          { v: -8.6, d: 1, strong: true },
          { v: 2.5, d: 1, sign: true },
          { v: 4.1, d: 1, sign: true },
        ],
        emphasis: true,
      },
    ],
  },
  'croissance-annuelle-moyenne-de-la-productivite-horaire-en': {
    vintage: '2026',
    sources: [
      'eurostat-nama-10-lp-ulc', 'eurostat-nama-10-lp-ulc-2',
      'eurostat-eurostat-nama-10-pc-nama-10-lp-ulc-nlp',
    ],
    columns: [
      {
        key: 'croissance-annuelle-moyenne-de-la-productivite-horaire-en',
        header: 'Croissance annuelle moyenne de la productivité horaire, en volume',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'france', header: 'France', type: 'number', headerNumeric: true },
      { key: 'allemagne', header: 'Allemagne', type: 'number', headerNumeric: true },
      { key: 'italie', header: 'Italie', type: 'number', headerNumeric: true },
      { key: 'espagne', header: 'Espagne', type: 'number', headerNumeric: true },
      { key: 'ue-27', header: 'UE-27', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: '1975-1995' },
          { v: 2.8, d: 2, u: '%', sign: true },
          null,
          null,
          null,
          null,
        ],
      },
      {
        cells: [
          { t: '1995-2008' },
          { v: 1.4, d: 2, u: '%', sign: true },
          { v: 1.45, d: 2, u: '%', sign: true },
          { v: 0.42, d: 2, u: '%', sign: true },
          { v: 0.21, d: 2, u: '%', sign: true },
          { v: 1.58, d: 2, u: '%', sign: true },
        ],
      },
      {
        cells: [
          { t: '2008-2019' },
          { v: 0.71, d: 2, u: '%', sign: true },
          { v: 0.8, d: 2, u: '%', sign: true },
          { v: 0.13, d: 2, u: '%', sign: true },
          { v: 1.14, d: 2, u: '%', sign: true },
          { v: 0.97, d: 2, u: '%', sign: true },
        ],
      },
      {
        cells: [
          { t: '<b>2019-2024</b>' },
          { v: -0.47, d: 2, u: '%', strong: true },
          { v: 0.26, d: 2, u: '%', sign: true },
          { v: -0.2, d: 2, u: '%' },
          { v: 0.35, d: 2, u: '%', sign: true },
          { v: 0.36, d: 2, u: '%', sign: true },
        ],
        emphasis: true,
      },
    ],
  },
  'banque-de-france-2024-perte-de-8-5-par-rapport-a-la-tendan': {
    vintage: '2024',
    sources: [
      'eurostat-nama-10-lp-ulc', 'eurostat-nama-10-lp-ulc-2',
      'eurostat-eurostat-nama-10-pc-nama-10-lp-ulc-nlp',
    ],
    columns: [
      {
        key: 'banque-de-france-2024-perte-de-8-5-par-rapport-a-la-tendan',
        header: 'Banque de France (2024) — perte de 8,5 % par rapport à la tendance, fin 2019 à mi-2023',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'contribution', header: 'Contribution', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Apprentissage et alternance' },
          { v: 1.2, d: 1, u: 'pt' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Composition de la main-d\'œuvre (emploi peu qualifié)' },
          { v: 1.4, d: 1, u: 'pt' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Effets longs de la crise sanitaire' },
          { v: 0.4, d: 1, u: 'pt' },
        ],
      },
      {
        cells: [
          { t: 'Rétention de main-d\'œuvre par les entreprises' },
          { v: 1.7, d: 1, u: 'pt' },
        ],
      },
      {
        cells: [
          { t: 'Chômage partiel, arrêts maladie, travail détaché' },
          { v: 0.2, d: 1, u: 'pt' },
        ],
      },
      {
        cells: [
          { t: '<b>Résidu inexpliqué</b>' },
          { v: 3.6, d: 1, u: 'pts', strong: true },
        ],
        total: true,
      },
    ],
  },
  'pib-par-heure-travaillee-2024-dollars-a-parite-de-pouvoir': {
    vintage: '2024',
    sources: [
      'eurostat-nama-10-lp-ulc', 'eurostat-nama-10-lp-ulc-2',
      'eurostat-eurostat-nama-10-pc-nama-10-lp-ulc-nlp',
    ],
    columns: [
      {
        key: 'pib-par-heure-travaillee-2024-dollars-a-parite-de-pouvoir',
        header: 'PIB par heure travaillée, 2024, dollars à parité de pouvoir d\'achat',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'niveau', header: 'Niveau', type: 'number', headerNumeric: true },
      { key: 'france-100', header: 'France = 100', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'États-Unis' },
          { v: 98.3, d: 1 },
          { v: 112.3, d: 1 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 93.4, d: 1 },
          { v: 106.7, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Suède' },
          { v: 92.3, d: 1 },
          { v: 105.5, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Pays-Bas' },
          { v: 91.5, d: 1 },
          { v: 104.6, d: 1 },
        ],
      },
      {
        cells: [
          { t: '<b>France</b>' },
          { v: 87.5, d: 1, strong: true },
          { v: 100, d: 1 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Royaume-Uni' },
          { v: 78.7, d: 1 },
          { v: 89.9, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Italie' },
          { v: 74.8, d: 1 },
          { v: 85.5, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Espagne' },
          { v: 72.5, d: 1 },
          { v: 82.9, d: 1 },
        ],
      },
    ],
  },
  '2024-2': {
    vintage: '2024',
    sources: ['eurostat-demo-pjangroup', 'banque-mondiale-banque-mondiale-ny-gdp-pcap-pp-kd-doll'],
    columns: [
      { key: '2024', header: '2024', type: 'text', headerNumeric: false },
      { key: 'pib-habitant', header: 'PIB/habitant', type: 'number', headerNumeric: true },
      { key: 'part-des-15-64-ans', header: 'Part des 15-64 ans', type: 'number', headerNumeric: true },
      {
        key: 'pib-par-personne-d-age-actif',
        header: '= PIB par personne d\'âge actif',
        type: 'number',
        headerNumeric: true,
      },
      {
        key: 'ecart-brut-avec-la-france',
        header: 'Écart brut avec la France',
        type: 'number',
        headerNumeric: true,
      },
      { key: 'ecart-corrige', header: 'Écart corrigé', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'États-Unis' },
          { v: 75698, d: 0 },
          { v: 64.8, d: 1, u: '%' },
          { v: 116914, d: 0 },
          { v: -27.6, d: 1, u: '%' },
          { v: -23.6, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Pays-Bas' },
          { v: 70494, d: 0 },
          { v: 64.5, d: 1, u: '%' },
          { v: 109330, d: 0 },
          { v: -22.3, d: 1, u: '%' },
          { v: -18.3, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 62655, d: 0 },
          { v: 62.9, d: 1, u: '%' },
          { v: 99619, d: 0 },
          { v: -12.5, d: 1, u: '%' },
          { v: -10.3, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: '<b>France</b>' },
          { v: 54799, d: 0 },
          { v: 61.3, d: 1, u: '%', strong: true },
          { v: 89325, d: 0 },
          null,
          null,
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Royaume-Uni' },
          { v: 53412, d: 0 },
          { v: 63.3, d: 1, u: '%' },
          { v: 84359, d: 0 },
          { v: 2.6, d: 1, u: '%', sign: true },
          { v: 5.9, d: 1, u: '%', sign: true },
        ],
      },
    ],
  },
  'part-de-la-population-2024': {
    vintage: '2024',
    sources: ['eurostat-demo-pjangroup', 'banque-mondiale-banque-mondiale-ny-gdp-pcap-pp-kd-doll'],
    columns: [
      {
        key: 'part-de-la-population-2024',
        header: 'Part de la population, 2024',
        type: 'text',
        headerNumeric: false,
      },
      { key: '0-14-ans', header: '0-14 ans', type: 'number', headerNumeric: true },
      { key: '15-64-ans', header: '15-64 ans', type: 'number', headerNumeric: true },
      { key: '65-ans-et-plus', header: '65 ans et plus', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'États-Unis' },
          { v: 17.3, d: 1, u: '%' },
          { v: 64.7, d: 1, u: '%' },
          { v: 17.9, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Royaume-Uni' },
          { v: 17.2, d: 1, u: '%' },
          { v: 63.3, d: 1, u: '%' },
          { v: 19.5, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: '<b>France</b>' },
          { v: 16.5, d: 1, u: '%', strong: true },
          { v: 61.3, d: 1, u: '%' },
          { v: 22.1, d: 1, u: '%', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Pays-Bas' },
          { v: 15, d: 1, u: '%' },
          { v: 64.5, d: 1, u: '%' },
          { v: 20.5, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 13.9, d: 1, u: '%' },
          { v: 62.9, d: 1, u: '%' },
          { v: 23.2, d: 1, u: '%' },
        ],
      },
    ],
  },
  '2024-3': {
    vintage: '2024',
    sources: [
      'eurostat-lfsi-emp-a-2', 'eurostat-lfsi-emp-a',
      'eurostat-ocde-panorama-des-pensions-2025-via-l',
    ],
    columns: [
      { key: '2024', header: '2024', type: 'text', headerNumeric: false },
      { key: 'age-legal-actuel', header: 'Âge légal actuel', type: 'number', headerNumeric: true },
      { key: 'age-legal-cible', header: 'Âge légal cible', type: 'number', headerNumeric: true },
      {
        key: 'age-effectif-de-sortie',
        header: 'Âge <b>effectif</b> de sortie',
        type: 'number',
        headerNumeric: true,
      },
    ],
    rows: [
      {
        cells: [
          { t: '<b>France</b>' },
          { v: 64.3, d: 1 },
          { v: 65, d: 1 },
          { v: 62.2, d: 1, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Royaume-Uni' },
          { v: 66, d: 1 },
          { v: 68, d: 1 },
          { v: 63.5, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Italie' },
          { v: 64.8, d: 1, u: '/ 63,8' },
          { v: 70, d: 1 },
          { v: 63.3, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 66.2, d: 1 },
          { v: 67, d: 1 },
          { v: 64.1, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Pays-Bas' },
          { v: 67, d: 1 },
          { v: 70, d: 1 },
          { v: 64.9, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Suède' },
          { v: 66, d: 1 },
          { v: 70, d: 1 },
          { v: 65.1, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'États-Unis' },
          { v: 66.7, d: 1 },
          { v: 67, d: 1 },
          { v: 67, d: 1, strong: true },
        ],
        emphasis: true,
      },
    ],
  },
  'ecart-de-la-france-2024': {
    vintage: '2024',
    sources: [
      'eurostat-lfsi-emp-a-2', 'eurostat-lfsi-emp-a',
      'eurostat-ocde-panorama-des-pensions-2025-via-l',
    ],
    columns: [
      {
        key: 'ecart-de-la-france-2024',
        header: 'Écart de la France, 2024',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'vs-allemagne', header: 'vs Allemagne', type: 'number', headerNumeric: true },
      { key: 'vs-pays-bas', header: 'vs Pays-Bas', type: 'number', headerNumeric: true },
      { key: 'vs-royaume-uni', header: 'vs Royaume-Uni', type: 'number', headerNumeric: true },
      { key: 'vs-etats-unis', header: 'vs États-Unis', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'PIB par habitant' },
          { v: -12.5, d: 1, u: '%' },
          { v: -22.3, d: 1, u: '%' },
          { v: 2.6, d: 1, u: '%', sign: true },
          { v: -27.6, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'PIB par personne de 15 à 64 ans' },
          { v: -9.8, d: 1, u: '%' },
          { v: -19.1, d: 1, u: '%' },
          { v: 5.3, d: 1, u: '%', sign: true },
          { v: -24, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: '<b>PIB par personne de 15 ans à l\'âge de sortie</b>' },
          { v: -6.3, d: 1, u: '%', strong: true },
          { v: -14.7, d: 1, u: '%', strong: true },
          { v: 8.2, d: 1, u: '%', sign: true },
          { v: -16.9, d: 1, u: '%', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'PIB par actif <em>(emploi + chômage)</em>' },
          { v: -1.3, d: 1, u: '%' },
          { v: -4.1, d: 1, u: '%' },
          { v: 12.5, d: 1, u: '%', sign: true },
          { v: -20.2, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: '<b>PIB par personne en emploi</b>' },
          { v: 3, d: 1, u: '%', sign: true, strong: true },
          { v: -0.3, d: 1, u: '%' },
          { v: 16.2, d: 1, u: '%', sign: true },
          { v: -17.3, d: 1, u: '%' },
        ],
        emphasis: true,
      },
    ],
  },
  'passage-du-denominateur-15-64-au-denominateur-national': {
    vintage: '2025',
    sources: [
      'eurostat-lfsi-emp-a-2', 'eurostat-lfsi-emp-a',
      'eurostat-ocde-panorama-des-pensions-2025-via-l',
    ],
    columns: [
      {
        key: 'passage-du-denominateur-15-64-au-denominateur-national',
        header: 'Passage du dénominateur 15-64 au dénominateur national',
        type: 'text',
        headerNumeric: false,
      },
      {
        key: 'variation-du-denominateur',
        header: 'Variation du dénominateur',
        type: 'number',
        headerNumeric: true,
      },
      { key: 'variation-du-ratio', header: 'Variation du ratio', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: '<b>France</b>' },
          { v: -3.7, d: 1, u: '%', strong: true },
          { v: 3.9, d: 1, u: '%', sign: true, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Royaume-Uni' },
          { v: -1.1, d: 1, u: '%' },
          { v: 1.1, d: 1, u: '%', sign: true },
        ],
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 0.1, d: 1, u: '%', sign: true },
          { v: -0.1, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Pays-Bas' },
          { v: 1.5, d: 1, u: '%', sign: true },
          { v: -1.5, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: '<b>États-Unis</b>' },
          { v: 5.3, d: 1, u: '%', sign: true, strong: true },
          { v: -5, d: 1, u: '%', strong: true },
        ],
        emphasis: true,
      },
    ],
  },
  '2025-du-pib': {
    vintage: '2025',
    sources: ['eurostat-gov-10a-main', 'eurostat-eurostat-gov-10a-main-2025'],
    columns: [
      { key: '2025-du-pib', header: '2025, % du PIB', type: 'text', headerNumeric: false },
      { key: 'recettes', header: 'Recettes', type: 'number', headerNumeric: true },
      { key: 'depenses', header: 'Dépenses', type: 'number', headerNumeric: true },
      { key: 'solde', header: 'Solde', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Danemark' },
          { v: 51.1, d: 1 },
          { v: 48.1, d: 1 },
          { v: 3, d: 1, sign: true },
        ],
      },
      {
        cells: [
          { t: 'Finlande' },
          { v: 53.9, d: 1 },
          { v: 57.7, d: 1 },
          { v: -3.8, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'France' },
          { v: 52.1, d: 1 },
          { v: 57.2, d: 1 },
          { v: -5.1, d: 1 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Belgique' },
          { v: 49, d: 1 },
          { v: 54.2, d: 1 },
          { v: -5.2, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Italie' },
          { v: 48.1, d: 1 },
          { v: 51.2, d: 1 },
          { v: -3.1, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 47.9, d: 1 },
          { v: 50.5, d: 1 },
          { v: -2.6, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Espagne' },
          { v: 42.9, d: 1 },
          { v: 45.3, d: 1 },
          { v: -2.4, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Pays-Bas' },
          { v: 43.3, d: 1 },
          { v: 44.9, d: 1 },
          { v: -1.6, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'UE-27' },
          { v: 46.4, d: 1 },
          { v: 49.5, d: 1 },
          { v: -3.1, d: 1 },
        ],
        total: true,
      },
    ],
  },
  'france-du-pib': {
    vintage: '2024',
    sources: ['eurostat-eurostat-gov-10a-main-et-gov-10a-exp-i'],
    columns: [
      { key: 'france-du-pib', header: 'France, % du PIB', type: 'text', headerNumeric: false },
      { key: '2007', header: '2007', type: 'number', headerNumeric: true },
      { key: '2009', header: '2009', type: 'number', headerNumeric: true },
      { key: '2019', header: '2019', type: 'number', headerNumeric: true },
      { key: '2024', header: '2024', type: 'number', headerNumeric: true },
      { key: '07-09', header: 'Δ 07→09', type: 'number', headerNumeric: true },
      { key: '07-24', header: 'Δ 07→24', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Protection sociale' },
          { v: 21.9, d: 1 },
          { v: 23.8, d: 1 },
          { v: 23.9, d: 1 },
          { v: 23.6, d: 1 },
          { v: 1.9, d: 2, sign: true },
          { v: 1.72, d: 2, sign: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Santé' },
          { v: 7.6, d: 1 },
          { v: 8.1, d: 1 },
          { v: 8.2, d: 1 },
          { v: 8.9, d: 1 },
          { v: 0.53, d: 2, sign: true },
          { v: 1.3, d: 2, sign: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Enseignement' },
          { v: 5.2, d: 1 },
          { v: 5.6, d: 1 },
          { v: 5, d: 1 },
          { v: 5.1, d: 1 },
          { v: 0.39, d: 2, sign: true },
          { v: -0.18, d: 2 },
        ],
      },
      {
        cells: [
          { t: 'Affaires économiques' },
          { v: 5, d: 1 },
          { v: 5.3, d: 1 },
          { v: 5.3, d: 1 },
          { v: 5.7, d: 1 },
          { v: 0.28, d: 2, sign: true },
          { v: 0.64, d: 2, sign: true },
        ],
      },
      {
        cells: [
          { t: 'Logement' },
          { v: 1.3, d: 1 },
          { v: 1.5, d: 1 },
          { v: 1.1, d: 1 },
          { v: 1.4, d: 1 },
          { v: 0.26, d: 2, sign: true },
          { v: 0.17, d: 2, sign: true },
        ],
      },
      {
        cells: [
          { t: 'Ordre et sécurité' },
          { v: 1.5, d: 1 },
          { v: 1.7, d: 1 },
          { v: 1.7, d: 1 },
          { v: 1.8, d: 1 },
          { v: 0.2, d: 2, sign: true },
          { v: 0.31, d: 2, sign: true },
        ],
      },
      {
        cells: [
          { t: 'Défense' },
          { v: 1.8, d: 1 },
          { v: 1.9, d: 1 },
          { v: 1.7, d: 1 },
          { v: 1.9, d: 1 },
          { v: 0.17, d: 2, sign: true },
          { v: 0.09, d: 2, sign: true },
        ],
      },
      {
        cells: [
          { t: 'Services généraux <em>(dont dette)</em>' },
          { v: 7.1, d: 1 },
          { v: 7.5, d: 1 },
          { v: 6, d: 1 },
          { v: 6.2, d: 1 },
          { v: 0.4, d: 2, sign: true },
          { v: -0.92, d: 2 },
        ],
      },
      {
        cells: [
          { t: 'Total' },
          { v: 53.6, d: 1 },
          { v: 58, d: 1 },
          { v: 55.3, d: 1 },
          { v: 57, d: 1 },
          { v: 4.36, d: 2, sign: true },
          { v: 3.33, d: 2, sign: true },
        ],
        total: true,
      },
    ],
  },
  'depense-publique-du-pib': {
    vintage: '2019',
    sources: ['eurostat-eurostat-gov-10a-main-et-gov-10a-exp-i'],
    columns: [
      {
        key: 'depense-publique-du-pib',
        header: 'Dépense publique, % du PIB',
        type: 'text',
        headerNumeric: false,
      },
      { key: '2007', header: '2007', type: 'number', headerNumeric: true },
      { key: '2009', header: '2009', type: 'number', headerNumeric: true },
      { key: '2011', header: '2011', type: 'number', headerNumeric: true },
      { key: '2014', header: '2014', type: 'number', headerNumeric: true },
      { key: '2019', header: '2019', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Allemagne' },
          { v: 43.5, d: 1 },
          { v: 48.3, d: 1 },
          { v: 45.3, d: 1 },
          { v: 44.5, d: 1 },
          { v: 45.5, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'France' },
          { v: 53.6, d: 1 },
          { v: 58, d: 1 },
          { v: 57, d: 1 },
          { v: 58.4, d: 1 },
          { v: 55.3, d: 1 },
        ],
        emphasis: true,
      },
    ],
  },
  prelevement: {
    vintage: '2024',
    sources: ['eurostat-eurostat-gov-10a-taxag-secteurs-s13-s1'],
    columns: [
      { key: 'prelevement', header: 'Prélèvement', type: 'text', headerNumeric: false },
      { key: 'md', header: 'Md€', type: 'number', headerNumeric: true },
      { key: 'part', header: 'Part', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Cotisations sociales nettes' },
          { v: 482.3, d: 1 },
          { v: 36.4, d: 1, u: '%' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<em>dont cotisations employeurs</em>' },
          { v: 293.1, d: 1 },
          { v: 22.1, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: '<em>dont cotisations ménages</em>' },
          { v: 137.9, d: 1 },
          { v: 10.4, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Impôts sur le revenu des ménages (IR + CSG + CRDS)' },
          { v: 275.1, d: 1 },
          { v: 20.8, d: 1, u: '%' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'TVA' },
          { v: 206.3, d: 1 },
          { v: 15.6, d: 1, u: '%' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Autres impôts sur la production' },
          { v: 129, d: 1 },
          { v: 9.7, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Impôt sur les sociétés' },
          { v: 83.8, d: 1 },
          { v: 6.3, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Accises et taxes de consommation (dont TICPE)' },
          { v: 59.1, d: 1 },
          { v: 4.5, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Impôts en capital (successions, donations)' },
          { v: 21.5, d: 1 },
          { v: 1.6, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Autres' },
          { v: 66.4, d: 1 },
          { v: 5, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Total' },
          { v: 1323.5, d: 1 },
          { v: 100, d: 0, u: '%' },
        ],
        total: true,
      },
    ],
  },
  impot: {
    vintage: '2024',
    sources: ['eurostat-eurostat-gov-10a-taxag-secteurs-s13-s1'],
    columns: [
      { key: 'impot', header: 'Impôt', type: 'text', headerNumeric: false },
      { key: 'md', header: 'Md€', type: 'number', headerNumeric: true },
      { key: 'part', header: 'Part', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Impôts sur le revenu des ménages' },
          { v: 111.9, d: 1 },
          { v: 30, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'TVA (part revenant à l\'État)' },
          { v: 96.5, d: 1 },
          { v: 25.8, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Impôt sur les sociétés' },
          { v: 73.9, d: 1 },
          { v: 19.8, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Accises (dont TICPE)' },
          { v: 24.9, d: 1 },
          { v: 6.7, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Autres impôts sur la production' },
          { v: 24.4, d: 1 },
          { v: 6.5, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Impôts en capital' },
          { v: 21.5, d: 1 },
          { v: 5.8, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Autres' },
          { v: 20.2, d: 1 },
          { v: 5.4, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Total' },
          { v: 373.3, d: 1 },
          { v: 100, d: 0, u: '%' },
        ],
        total: true,
      },
    ],
  },
  composante: {
    vintage: '2024',
    sources: ['eurostat-insee-definition-des-cotisations-social'],
    columns: [
      { key: 'composante', header: 'Composante', type: 'text', headerNumeric: false },
      { key: 'ce-que-c-est', header: 'Ce que c\'est', type: 'text', headerNumeric: false },
      { key: '2024-md', header: '2024, Md€', type: 'number', headerNumeric: true },
      { key: 'part', header: 'Part', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'D.611 — cotisations effectives des employeurs' },
          {
            t: 'Ce que l\'employeur verse réellement aux régimes : Urssaf, Agirc-Arrco, Unédic, CNRACL, régimes spéciaux',
          },
          { v: 293.1, d: 1 },
          { v: 60.8, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'D.612 — cotisations <b>imputées</b> des employeurs' },
          {
            t: 'Écriture purement conventionnelle. L\'État n\'a pas de caisse de retraite pour ses fonctionnaires : il paie les pensions sur son budget, et la comptabilité nationale « impute » une cotisation employeur fictive pour équilibrer. <b>Ce ne sont pas des prélèvements obligatoires</b> — il n\'y a aucun flux réel entre deux agents distincts, et ils sont exclus du taux de prélèvements',
          },
          { v: 51.2, d: 1 },
          { v: 10.6, d: 1, u: '%' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'D.613 — cotisations effectives des ménages' },
          {
            t: 'La part salariale (vieillesse 7,30 %, Agirc-Arrco, CEG, CET, APEC) <b>plus la totalité des cotisations des indépendants</b>',
          },
          { v: 137.9, d: 1 },
          { v: 28.6, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'D.61 — total' },
          { t: '' },
          { v: 482.3, d: 1 },
          { v: 100, d: 0, u: '%' },
        ],
        total: true,
      },
    ],
  },
  'pour-100-de-cout-employeur-2025': {
    vintage: '2025',
    sources: ['eurostat-eurostat-earn-nt-net-chaine-complete-en'],
    columns: [
      {
        key: 'pour-100-de-cout-employeur-2025',
        header: 'Pour 100 € de coût employeur (2025)',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'france', header: 'France', type: 'number', headerNumeric: true },
      { key: 'allemagne', header: 'Allemagne', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Coût employeur' },
          { v: 100, d: 2, u: '€' },
          { v: 100, d: 2, u: '€' },
        ],
      },
      {
        cells: [
          { t: '− cotisations patronales' },
          { v: -25.04, d: 2 },
          { v: -18.08, d: 2 },
        ],
      },
      {
        cells: [
          { t: '= salaire brut' },
          { v: 74.96, d: 2, u: '€' },
          { v: 81.92, d: 2, u: '€' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '− cotisations salariales' },
          { v: -8.58, d: 2 },
          { v: -17.65, d: 2 },
        ],
      },
      {
        cells: [
          { t: '− impôt sur le revenu (CSG-CRDS incluse)' },
          { v: -11.04, d: 2 },
          { v: -10.82, d: 2 },
        ],
      },
      {
        cells: [
          { t: '= salaire net disponible' },
          { v: 55.34, d: 2, u: '€' },
          { v: 53.45, d: 2, u: '€' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '− TVA acquittée à la consommation (13,5 % du TTC)' },
          { v: -7.47, d: 2 },
          { v: -7.19, d: 2 },
        ],
      },
      {
        cells: [
          { t: '= pouvoir d\'achat réel' },
          { v: 47.9, d: 1, u: '€', approx: true },
          { v: 46.3, d: 1, u: '€', approx: true },
        ],
        total: true,
      },
    ],
  },
  'sur-100-de-cout-employeur': {
    vintage: '2026',
    sources: [
      'urssaf-bareme-calcule-par-nos-soins-a-partir-de',
      'eurostat-ocde-taxing-wages-2026-donnees-2025',
    ],
    columns: [
      {
        key: 'sur-100-de-cout-employeur',
        header: 'Sur 100 € de coût employeur',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'france-smic', header: 'France, SMIC', type: 'number', headerNumeric: true },
      {
        key: 'france-salaire-moyen',
        header: 'France, salaire moyen',
        type: 'number',
        headerNumeric: true,
      },
      {
        key: 'france-haut-revenu-marginal',
        header: 'France, haut revenu <em>(marginal)</em>',
        type: 'number',
        headerNumeric: true,
      },
      { key: 'e-u-bas-salaire', header: 'É.-U., bas salaire', type: 'number', headerNumeric: true },
      {
        key: 'e-u-salaire-moyen',
        header: 'É.-U., salaire moyen',
        type: 'number',
        headerNumeric: true,
      },
      {
        key: 'e-u-haut-revenu-californie-texas',
        header: 'É.-U., haut revenu <em>(Californie / Texas)</em>',
        type: 'number',
        headerNumeric: true,
      },
    ],
    rows: [
      {
        cells: [
          { t: '− cotisations patronales' },
          { v: -3.4, d: 1 },
          { v: -26.7, d: 1 },
          { v: -23.2, d: 1 },
          { v: -7.4, d: 1 },
          { v: -7.4, d: 1 },
          { v: -1.4, d: 1 },
        ],
      },
      {
        cells: [
          { t: '= salaire brut' },
          { v: 96.6, d: 1 },
          { v: 73.3, d: 1 },
          { v: 81.2, d: 1 },
          { v: 92.6, d: 1 },
          { v: 92.6, d: 1 },
          { v: 98.6, d: 1 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '− cotisations salariales' },
          { v: -10.9, d: 1 },
          { v: -8.3, d: 1 },
          { v: -0.3, d: 1 },
          { v: -7.1, d: 1 },
          { v: -7.1, d: 1 },
          { v: -2.3, d: 1 },
        ],
      },
      {
        cells: [
          { t: '− CSG-CRDS' },
          { v: -9.2, d: 1 },
          { v: -7, d: 1 },
          { v: -7.9, d: 1 },
          null,
          null,
          null,
        ],
      },
      {
        cells: [
          { t: '− impôt sur le revenu' },
          { v: -0.6, d: 1 },
          { v: -5.3, d: 1 },
          { v: -33.9, d: 1 },
          { v: -1.9, d: 1 },
          { v: -15.5, d: 1 },
          { v: -36.5, d: 1 },
        ],
      },
      {
        cells: [
          { t: '− contribution exceptionnelle sur les hauts revenus' },
          null,
          null,
          { v: -3, d: 1 },
          null,
          null,
          null,
        ],
      },
      {
        cells: [
          { t: '− impôt d\'État' },
          null,
          null,
          null,
          { t: 'incl.' },
          { t: 'incl.' },
          { v: -13.1, d: 1, u: '/ 0' },
        ],
      },
      {
        cells: [
          { t: '= net après impôt' },
          { v: 75.9, d: 1 },
          { v: 52.8, d: 1 },
          { v: 36.1, d: 1 },
          { v: 83.7, d: 1 },
          { v: 70, d: 1 },
          { v: 46.7, d: 1, u: '/ 59,8' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>coin fiscalo-social</b>' },
          { v: 24.1, d: 1, u: '%' },
          { v: 47.2, d: 1, u: '%' },
          { v: 63.9, d: 1, u: '%' },
          { v: 16.3, d: 1, u: '%' },
          { v: 30, d: 1, u: '%' },
          { v: 53.3, d: 1, u: '/ 40,2 %' },
        ],
      },
      {
        cells: [
          { t: '− TVA ou <em>sales tax</em>' },
          { v: -10.2, d: 1 },
          { v: -7.1, d: 1 },
          { v: -4.9, d: 1 },
          { v: -3.8, d: 1 },
          { v: -3.2, d: 1 },
          { v: -2.1, d: 1, u: '/ −2,7' },
        ],
      },
      {
        cells: [
          { t: '= pouvoir d\'achat réel' },
          { v: 65.6, d: 1, u: '€', approx: true },
          { v: 45.7, d: 1, u: '€', approx: true },
          { v: 31.2, d: 1, u: '€', approx: true },
          { v: 79.9, d: 1, u: '€', approx: true },
          { v: 66.9, d: 1, u: '€', approx: true },
          { v: 44.6, d: 1, u: '/ 57,1 €', approx: true },
        ],
        total: true,
      },
    ],
  },
  'taux-global-de-prelevement-tous-prelevements-confondus': {
    vintage: '2025',
    sources: [
      'eurostat-ipp-quels-impots-les-milliardaires-pa',
      'dgfip-dgfip-statistiques-n-41-novembre-2025',
    ],
    columns: [
      {
        key: 'taux-global-de-prelevement-tous-prelevements-confondus',
        header: 'Taux global de prélèvement, tous prélèvements confondus',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'c2', header: '%', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Premier décile' },
          { v: 43, d: 0, approx: true },
        ],
      },
      {
        cells: [
          { t: 'Médiane' },
          { v: 46, d: 0, approx: true },
        ],
      },
      {
        cells: [
          { t: 'P90-P95 <em>(maximum de la courbe)</em>' },
          { v: 47, d: 0, approx: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Centile supérieur' },
          { v: 45, d: 0, approx: true },
        ],
      },
      {
        cells: [
          { t: 'Millile supérieur' },
          { v: 42, d: 0, approx: true },
        ],
      },
    ],
  },
  'revenus-de-2024-imposition-en-2025': {
    vintage: '2025',
    sources: [
      'eurostat-ipp-quels-impots-les-milliardaires-pa',
      'dgfip-dgfip-statistiques-n-41-novembre-2025',
    ],
    columns: [
      {
        key: 'revenus-de-2024-imposition-en-2025',
        header: 'Revenus de 2024, imposition en 2025',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'valeur', header: 'Valeur', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Foyers fiscaux' },
          { v: 41.5, d: 1, u: 'millions' },
        ],
      },
      {
        cells: [
          { t: 'Foyers imposables' },
          { v: 19.6, d: 1, u: 'M — 47 %' },
        ],
      },
      {
        cells: [
          { t: 'Foyers non imposables' },
          { v: 21.9, d: 1, u: 'M — 53 %' },
        ],
      },
      {
        cells: [
          { t: 'Impôt sur le revenu net' },
          { v: 92, d: 0, u: 'Md€ (+9,9 %)' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Part acquittée par le dernier décile' },
          { v: 74, d: 0, u: '%', approx: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Impôt moyen, dernier décile' },
          { t: '16 395 € <em>(revenu fiscal moyen 65 532 €)</em>' },
        ],
      },
      {
        cells: [
          { t: 'Impôt moyen, centile supérieur' },
          { t: '73 078 € <em>(213 672 €)</em>' },
        ],
      },
      {
        cells: [
          { t: 'Impôt moyen, millile supérieur' },
          { t: '312 098 € <em>(916 590 €)</em>' },
        ],
      },
      {
        cells: [
          { t: 'Impôt moyen, premier décile' },
          { t: '−31 € <em>(crédit d\'impôt net)</em>' },
        ],
      },
      {
        cells: [
          { v: 481, d: 0, u: 'foyers déclarant plus de 9 M€' },
          { t: '1,94 Md€ au total, soit ≈ 4 M€ chacun — <b>taux effectif 18 %</b>' },
        ],
        separator: true,
      },
    ],
  },
  'tva-acquittee-rapportee-a': {
    vintage: '2015',
    sources: ['b-boutchenik-b-boutchenik-les-effets-redistributifs'],
    columns: [
      {
        key: 'tva-acquittee-rapportee-a',
        header: 'TVA acquittée, rapportée à…',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'd1', header: 'D1', type: 'number', headerNumeric: true },
      { key: 'd10', header: 'D10', type: 'number', headerNumeric: true },
      { key: 'verdict', header: 'Verdict', type: 'text', headerNumeric: false },
    ],
    rows: [
      {
        cells: [
          { t: '…au <b>revenu disponible</b> (taux d\'effort)' },
          { v: 12.5, d: 1, u: '%' },
          { v: 4.7, d: 1, u: '%' },
          { t: '<b>Nettement régressive</b> — rapport de 2,7 à 1' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '…à la <b>consommation</b> hors loyers (taux apparent)' },
          { v: 12.6, d: 1, u: '%' },
          { v: 13.4, d: 1, u: '%' },
          { t: '<b>Légèrement progressive</b>' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '…à la consommation, loyers inclus' },
          { v: 9.3, d: 1, u: '%' },
          { v: 10.6, d: 1, u: '%' },
          { t: 'Légèrement progressive' },
        ],
      },
    ],
  },
  voie: {
    vintage: '2026',
    sources: ['code-de-commerce-code-de-commerce-art-l-241-3-et-l-24'],
    columns: [
      { key: 'voie', header: 'Voie', type: 'text', headerNumeric: false },
      { key: 'mecanisme', header: 'Mécanisme', type: 'text', headerNumeric: false },
      { key: 'cout-fiscal', header: 'Coût fiscal', type: 'number', headerNumeric: false },
    ],
    rows: [
      {
        cells: [
          { t: 'Régime mère-fille' },
          {
            t: 'Détention d\'au moins 5 % pendant 2 ans : les dividendes remontent à la holding exonérés d\'impôt sur les sociétés, hors quote-part de frais et charges de 5 %',
          },
          { v: 1.25, d: 2, u: '% du dividende', approx: true },
        ],
      },
      {
        cells: [
          { t: 'Intégration fiscale' },
          { t: 'Détention d\'au moins 95 % : consolidation des résultats, quote-part ramenée à 1 %' },
          { v: 0.25, d: 2, u: '%', approx: true },
        ],
      },
      {
        cells: [
          { t: 'Cession de titres' },
          { t: 'Vente, plus-value taxée au prélèvement forfaitaire unique' },
          { v: 30, d: 0, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Apport-cession <em>(art. 150-0 B ter)</em>' },
          {
            t: 'Apport des titres à une holding contrôlée : report d\'imposition de la plus-value. La holding revend ensuite quasiment sans plus-value',
          },
          { t: 'report, potentiellement définitif' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Donation avant cession' },
          {
            t: 'La donation <b>purge la plus-value latente</b> : le donataire reprend comme prix de revient la valeur retenue pour les droits de mutation et revend sans plus-value taxable',
          },
          { t: 'droits de donation seuls' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Emprunt garanti par les titres' },
          {
            t: 'Nantissement et emprunt : de la liquidité sans fait générateur fiscal, un emprunt n\'étant pas un revenu',
          },
          { t: 'aucun impôt personnel' },
        ],
      },
    ],
  },
  fractile: {
    vintage: '2026',
    sources: ['code-de-commerce-code-de-commerce-art-l-241-3-et-l-24'],
    columns: [
      { key: 'fractile', header: 'Fractile', type: 'text', headerNumeric: false },
      {
        key: 'taux-effectif-rapporte-au-revenu-economique',
        header: 'Taux effectif rapporté au revenu économique',
        type: 'number',
        headerNumeric: true,
      },
    ],
    rows: [
      {
        cells: [
          { t: 'P99 – P99,9' },
          { t: '≈ 46 % <em>(maximum de la courbe)</em>' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Millile supérieur' },
          { v: 40, d: 0, u: '%', approx: true },
        ],
      },
      {
        cells: [
          { t: 'Top 0,01 % — 3 780 foyers' },
          { t: '≈ 32-33 %' },
        ],
      },
      {
        cells: [
          { t: 'Top 0,001 % — 378 foyers' },
          { t: '≈ 28-30 %' },
        ],
      },
      {
        cells: [
          { t: 'Les 75 foyers les plus riches' },
          { v: 26, d: 0, u: '%', approx: true },
        ],
        emphasis: true,
      },
    ],
  },
  '2024-4': {
    vintage: '2024',
    sources: ['insee-insee-france-portrait-social-2025-fic'],
    columns: [
      { key: '2024', header: '2024', type: 'text', headerNumeric: false },
      {
        key: 'avant-redistribution',
        header: 'Avant redistribution',
        type: 'number',
        headerNumeric: true,
      },
      {
        key: 'apres-redistribution',
        header: 'Après redistribution',
        type: 'number',
        headerNumeric: true,
      },
    ],
    rows: [
      {
        cells: [
          { v: 10, d: 0, u: '% les plus modestes (D1)' },
          { v: 4710, d: 0, u: '€' },
          { v: 11960, d: 0, u: '€' },
        ],
      },
      {
        cells: [
          { v: 20, d: 0, u: '% les plus modestes (Q1)' },
          { v: 9090, d: 0, u: '€' },
          { v: 14100, d: 0, u: '€' },
        ],
      },
      {
        cells: [
          { v: 20, d: 0, u: '% les plus aisés (Q5)' },
          { v: 74980, d: 0, u: '€' },
          { v: 58690, d: 0, u: '€' },
        ],
      },
      {
        cells: [
          { v: 10, d: 0, u: '% les plus aisés (D10)' },
          { v: 99300, d: 0, u: '€' },
          { v: 74410, d: 0, u: '€' },
        ],
      },
      {
        cells: [
          { t: 'Rapport interdécile D10/D1' },
          { v: 21.1, d: 1 },
          { v: 6.2, d: 1 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Rapport interquintile Q5/Q1' },
          { v: 8.3, d: 1 },
          { v: 4.2, d: 1 },
        ],
      },
    ],
  },
  '2024-5': {
    vintage: '2024',
    sources: [
      'drees-drees-la-protection-sociale-en-france-e',
      'drees-drees-comptes-de-la-protection-sociale',
      'eurostat-drees-eurostat-base-sespros-donnees',
      'eurostat-drees-eurostat-base-sespros-donnees-2',
    ],
    columns: [
      { key: '2024', header: '2024', type: 'text', headerNumeric: false },
      { key: 'montant', header: 'Montant', type: 'number', headerNumeric: true },
      { key: 'du-pib', header: '% du PIB', type: 'number', headerNumeric: true },
      { key: 'producteur', header: 'Producteur', type: 'text', headerNumeric: false },
    ],
    rows: [
      {
        cells: [
          { t: '<b>Prestations sociales, comptes de la protection sociale</b>' },
          { v: 932.5, d: 1, u: 'Md€', strong: true },
          { v: 31.9, d: 1, u: '%', strong: true },
          { t: 'DREES, CPS édition 2025' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Dépenses totales de protection sociale (prestations + gestion + divers)' },
          { v: 982.2, d: 1, u: 'Md€' },
          { v: 33.6, d: 1, u: '%' },
          { t: 'DREES, CPS 2025' },
        ],
      },
      {
        cells: [
          { t: '<b>Prestations sociales des administrations publiques</b>' },
          { v: 747.6, d: 1, u: 'Md€', strong: true },
          { v: 25.6, d: 1, u: '%', approx: true, strong: true },
          { t: 'Insee, comptes nationaux' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Dépenses publiques totales' },
          { v: 1670.2, d: 1, u: 'Md€' },
          { v: 57.1, d: 1, u: '%' },
          { t: 'Insee, 2024' },
        ],
        total: true,
      },
    ],
  },
  risque: {
    vintage: '2024',
    sources: [
      'drees-drees-la-protection-sociale-en-france-e',
      'drees-drees-comptes-de-la-protection-sociale',
      'eurostat-drees-eurostat-base-sespros-donnees',
      'eurostat-drees-eurostat-base-sespros-donnees-2',
    ],
    columns: [
      { key: 'risque', header: 'Risque', type: 'text', headerNumeric: false },
      { key: 'montant-2024', header: 'Montant 2024', type: 'number', headerNumeric: true },
      { key: 'du-total', header: '% du total', type: 'number', headerNumeric: true },
      { key: 'du-pib', header: '% du PIB', type: 'number', headerNumeric: true },
      { key: 'habitant', header: '€ / habitant', type: 'number', headerNumeric: true },
      {
        key: 'evolution-2024-2023',
        header: 'Évolution 2024/2023',
        type: 'number',
        headerNumeric: true,
      },
    ],
    rows: [
      {
        cells: [
          { t: '<b>Vieillesse et survie</b>' },
          { v: 426.7, d: 1, u: 'Md€', strong: true },
          { v: 45.8, d: 1, u: '%' },
          { v: 14.6, d: 1, u: '%', strong: true },
          { v: 6250, d: 0, u: '€' },
          { v: 6.5, d: 1, u: '%', sign: true, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>Santé</b>' },
          { v: 338.9, d: 1, u: 'Md€', strong: true },
          { v: 36.3, d: 1, u: '%' },
          { v: 11.6, d: 1, u: '%', strong: true },
          { v: 4950, d: 0, u: '€' },
          { v: 4, d: 1, u: '%', sign: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '— dont maladie' },
          { v: 277.9, d: 1, u: 'Md€' },
          { v: 29.8, d: 1, u: '%' },
          { v: 9.5, d: 1, u: '%' },
          null,
          { v: 3.8, d: 1, u: '%', sign: true },
        ],
      },
      {
        cells: [
          { t: '— dont invalidité' },
          { v: 53.8, d: 1, u: 'Md€' },
          { v: 5.8, d: 1, u: '%' },
          { v: 1.8, d: 1, u: '%', approx: true },
          null,
          { v: 5.2, d: 1, u: '%', sign: true },
        ],
      },
      {
        cells: [
          { t: '— dont accidents du travail et maladies professionnelles' },
          { v: 7.2, d: 1, u: 'Md€' },
          { v: 0.8, d: 1, u: '%' },
          { v: 0.25, d: 2, u: '%', approx: true },
          null,
          { v: 4.2, d: 1, u: '%', sign: true },
        ],
      },
      {
        cells: [
          { t: 'Famille' },
          { v: 65.8, d: 1, u: 'Md€' },
          { v: 7.1, d: 1, u: '%' },
          { v: 2.3, d: 1, u: '%' },
          { v: 950, d: 0, u: '€' },
          { v: 4.7, d: 1, u: '%', sign: true },
        ],
      },
      {
        cells: [
          { t: 'Emploi et chômage' },
          { v: 51.1, d: 1, u: 'Md€' },
          { v: 5.5, d: 1, u: '%' },
          { v: 1.8, d: 1, u: '%' },
          { v: 750, d: 0, u: '€' },
          { v: 3.8, d: 1, u: '%', sign: true },
        ],
      },
      {
        cells: [
          { t: 'Pauvreté et exclusion' },
          { v: 34, d: 1, u: 'Md€' },
          { v: 3.6, d: 1, u: '%' },
          { v: 1.2, d: 1, u: '%' },
          { v: 500, d: 0, u: '€' },
          { v: -3.3, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Logement' },
          { v: 16.1, d: 1, u: 'Md€' },
          { v: 1.7, d: 1, u: '%' },
          { v: 0.5, d: 1, u: '%' },
          { v: 250, d: 0, u: '€' },
          { v: 1.9, d: 1, u: '%', sign: true },
        ],
      },
      {
        cells: [
          { t: '<b>Total</b>' },
          { v: 932.5, d: 1, u: 'Md€', strong: true },
          { v: 100, d: 0, u: '%' },
          { v: 31.9, d: 1, u: '%', strong: true },
          { v: 13650, d: 0, u: '€' },
          { v: 4.8, d: 1, u: '%', sign: true },
        ],
        total: true,
      },
    ],
  },
  'vieillesse-et-survie-426-7-md': {
    vintage: '2025',
    sources: [
      'drees-drees-la-protection-sociale-en-france-e',
      'drees-drees-comptes-de-la-protection-sociale',
      'eurostat-drees-eurostat-base-sespros-donnees',
      'eurostat-drees-eurostat-base-sespros-donnees-2',
    ],
    columns: [
      {
        key: 'vieillesse-et-survie-426-7-md',
        header: 'Vieillesse et survie — 426,7 Md€',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'montant', header: 'Montant', type: 'number', headerNumeric: true },
      { key: 'part-du-risque', header: 'Part du risque', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Droits directs (pensions de retraite)' },
          { v: 352.2, d: 1, u: 'Md€' },
          { v: 82.6, d: 1, u: '%' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Droits dérivés (réversion)' },
          { v: 40.9, d: 1, u: 'Md€' },
          { v: 9.6, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Dépendance et perte d\'autonomie' },
          { v: 11.2, d: 1, u: 'Md€' },
          { v: 2.6, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Minimum vieillesse et ASPA' },
          { v: 4.9, d: 1, u: 'Md€' },
          { t: '1,2 % <i>(+9,3 %)</i>' },
        ],
      },
    ],
  },
  'sante-338-9-md': {
    vintage: '2025',
    sources: [
      'drees-drees-la-protection-sociale-en-france-e',
      'drees-drees-comptes-de-la-protection-sociale',
      'eurostat-drees-eurostat-base-sespros-donnees',
      'eurostat-drees-eurostat-base-sespros-donnees-2',
    ],
    columns: [
      { key: 'sante-338-9-md', header: 'Santé — 338,9 Md€', type: 'text', headerNumeric: false },
      { key: 'montant', header: 'Montant', type: 'number', headerNumeric: true },
      { key: 'evolution', header: 'Évolution', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Soins de santé <i>(prestation en nature)</i>' },
          { v: 211.5, d: 1, u: 'Md€' },
          { v: 3.3, d: 1, u: '%', sign: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Indemnités journalières <i>(en espèces)</i>' },
          { v: 16.8, d: 1, u: 'Md€' },
          { v: 7.5, d: 1, u: '%', sign: true, strong: true, after: '— le poste le plus dynamique' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Médico-social personnes âgées' },
          { v: 16.2, d: 1, u: 'Md€' },
          { v: 5, d: 1, u: '%', sign: true },
        ],
      },
      {
        cells: [
          { t: 'Accueil, accompagnement et hébergement du handicap' },
          { v: 19.2, d: 1, u: 'Md€' },
          null,
        ],
        separator: true,
      },
      {
        cells: [
          { t: '<b>AAH</b>' },
          { v: 13.8, d: 1, u: 'Md€', strong: true },
          { v: 8.8, d: 1, u: '%', sign: true, strong: true, after: '— effet de la déconjugalisation' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Pensions et rentes d\'invalidité' },
          { v: 9.7, d: 1, u: 'Md€' },
          null,
        ],
      },
      {
        cells: [
          { t: 'Prestation de compensation du handicap' },
          { v: 2.4, d: 1, u: 'Md€' },
          null,
        ],
      },
      {
        cells: [
          { t: 'Pensions et rentes accidents du travail' },
          { v: 5.9, d: 1, u: 'Md€' },
          null,
        ],
        total: true,
      },
    ],
  },
  'famille-65-8-md': {
    vintage: '2025',
    sources: [
      'drees-drees-la-protection-sociale-en-france-e',
      'drees-drees-comptes-de-la-protection-sociale',
      'eurostat-drees-eurostat-base-sespros-donnees',
      'eurostat-drees-eurostat-base-sespros-donnees-2',
    ],
    columns: [
      { key: 'famille-65-8-md', header: 'Famille — 65,8 Md€', type: 'text', headerNumeric: false },
      { key: 'montant', header: 'Montant', type: 'number', headerNumeric: true },
      { key: 'beneficiaires', header: 'Bénéficiaires', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Allocations familiales' },
          { v: 13.8, d: 1, u: 'Md€' },
          { v: 4955000, d: 0, u: 'foyers' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Aide sociale à l\'enfance' },
          { v: 11.1, d: 1, u: 'Md€' },
          null,
        ],
      },
      {
        cells: [
          { t: 'Crèches et modes d\'accueil <i>(en nature)</i>' },
          { v: 7.5, d: 1, u: 'Md€' },
          null,
        ],
      },
      {
        cells: [
          { t: 'Accueil du jeune enfant (PAJE)' },
          { v: 7.3, d: 1, u: 'Md€' },
          { v: 1837000, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Maternité' },
          { v: 4.5, d: 1, u: 'Md€' },
          null,
        ],
      },
      {
        cells: [
          { t: 'Allocation de rentrée scolaire' },
          { v: 2.2, d: 1, u: 'Md€' },
          { v: 2951000, d: 0 },
        ],
      },
    ],
  },
  'emploi-et-chomage-51-1-md': {
    vintage: '2025',
    sources: [
      'drees-drees-la-protection-sociale-en-france-e',
      'drees-drees-comptes-de-la-protection-sociale',
      'eurostat-drees-eurostat-base-sespros-donnees',
      'eurostat-drees-eurostat-base-sespros-donnees-2',
    ],
    columns: [
      {
        key: 'emploi-et-chomage-51-1-md',
        header: 'Emploi et chômage — 51,1 Md€',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'montant', header: 'Montant', type: 'number', headerNumeric: true },
      {
        key: 'effectif-mensuel-moyen',
        header: 'Effectif mensuel moyen',
        type: 'number',
        headerNumeric: true,
      },
    ],
    rows: [
      {
        cells: [
          { t: '<b>Indemnisation du chômage</b>' },
          { t: '<b>45,6 Md€</b> <i>(89,1 %)</i>' },
          null,
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '— allocation de retour à l\'emploi (ARE)' },
          { v: 32.9, d: 1, u: 'Md€' },
          { v: 2455000, d: 0 },
        ],
      },
      {
        cells: [
          { t: '— allocation de solidarité spécifique (ASS) et prestations d\'État' },
          { v: 1.8, d: 1, u: 'Md€' },
          { v: 254000, d: 0 },
        ],
      },
      {
        cells: [
          { t: '— allocation de sécurisation professionnelle' },
          { t: '1,7 Md€ <i>(+34,0 %)</i>' },
          { v: 62000, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Insertion et réinsertion professionnelle' },
          { t: '5,6 Md€ <i>(<b>−6,2 %</b>)</i>' },
          null,
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '— aides à la formation de France Travail' },
          { t: '0,9 Md€ <i>(<b>−29,0 %</b>)</i>' },
          null,
        ],
      },
    ],
  },
  'pauvrete-exclusion-et-logement-50-1-md': {
    vintage: '2025',
    sources: [
      'drees-drees-la-protection-sociale-en-france-e',
      'drees-drees-comptes-de-la-protection-sociale',
      'eurostat-drees-eurostat-base-sespros-donnees',
      'eurostat-drees-eurostat-base-sespros-donnees-2',
    ],
    columns: [
      {
        key: 'pauvrete-exclusion-et-logement-50-1-md',
        header: 'Pauvreté, exclusion et logement — 50,1 Md€',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'montant', header: 'Montant', type: 'number', headerNumeric: true },
      { key: 'beneficiaires', header: 'Bénéficiaires', type: 'number', headerNumeric: true },
      { key: 'montant-moyen', header: 'Montant moyen', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: '<b>RSA</b>' },
          { v: 12, d: 1, u: 'Md€', strong: true },
          { v: 1835000, d: 0, u: 'foyers' },
          { v: 563, d: 0, u: '€/mois', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>Prime d\'activité</b>' },
          { v: 10.6, d: 1, u: 'Md€', strong: true },
          { v: 4652000, d: 0, u: 'foyers' },
          { v: 190, d: 0, u: '€/mois', approx: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Bourses de l\'enseignement supérieur' },
          { v: 2.6, d: 1, u: 'Md€' },
          null,
          null,
        ],
      },
      {
        cells: [
          { t: 'Prestations des CCAS et CIAS' },
          { v: 2.5, d: 1, u: 'Md€' },
          null,
          null,
        ],
      },
      {
        cells: [
          { t: 'Chèque énergie' },
          { t: '0,8 Md€ <i>(−51,7 %)</i>' },
          null,
          null,
        ],
      },
      {
        cells: [
          { t: 'APL' },
          { v: 7.1, d: 1, u: 'Md€' },
          { v: 2676000, d: 0 },
          null,
        ],
        separator: true,
      },
      {
        cells: [
          { t: 'ALS' },
          { v: 5.5, d: 1, u: 'Md€' },
          { v: 2303000, d: 0 },
          null,
        ],
      },
      {
        cells: [
          { t: 'ALF' },
          { v: 3.3, d: 1, u: 'Md€' },
          { v: 836000, d: 0 },
          null,
        ],
      },
      {
        cells: [
          { t: 'Total aides au logement' },
          { v: 16.1, d: 1, u: 'Md€' },
          { v: 5815000, d: 0 },
          { v: 231, d: 0, u: '€/mois', approx: true },
        ],
        total: true,
      },
    ],
  },
  'structure-des-prestations-2024': {
    vintage: '2024',
    sources: [
      'drees-drees-la-protection-sociale-en-france-e',
      'drees-drees-comptes-de-la-protection-sociale',
      'eurostat-drees-eurostat-base-sespros-donnees',
      'eurostat-drees-eurostat-base-sespros-donnees-2',
    ],
    columns: [
      {
        key: 'structure-des-prestations-2024',
        header: 'Structure des prestations, 2024',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'france', header: 'France', type: 'number', headerNumeric: true },
      { key: 'allemagne', header: 'Allemagne', type: 'number', headerNumeric: true },
      { key: 'italie', header: 'Italie', type: 'number', headerNumeric: true },
      { key: 'ue-27', header: 'UE-27', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Vieillesse et survie' },
          { v: 46, d: 0, u: '%' },
          { v: 51, d: 0, u: '%' },
          { t: '> 50 %' },
          { v: 47, d: 0, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Maladie' },
          { v: 30, d: 0, u: '%' },
          { v: 27, d: 0, u: '%' },
          { v: 22, d: 0, u: '%' },
          { v: 30, d: 0, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Autres risques' },
          { v: 24, d: 0, u: '%' },
          { v: 22, d: 0, u: '%', approx: true },
          { v: 28, d: 0, u: '%', approx: true },
          { v: 23, d: 0, u: '%' },
        ],
      },
    ],
  },
  'taxe-zucman-estimations-de-rendement': {
    vintage: '2025',
    sources: [
      'zucman-impot-plancher-ultra-riches', 'tribune-sept-economistes-le-monde-taxe-zucman',
      'bercy-pre-rapport-juin-2025-impot-plancher', 'collectif-trop-c-est-trop-taxe-zucman',
    ],
    columns: [
      { key: 'auteur', header: 'Qui chiffre', type: 'text' },
      { key: 'rendement', header: 'Rendement annuel', type: 'number', headerNumeric: true },
      { key: 'deficit', header: 'Part des 152,5 Md€ de déficit', type: 'number', headerNumeric: true },
      { key: 'hypothese', header: 'Hypothèse déterminante', type: 'text' },
    ],
    rows: [
      {
        cells: [
          { t: 'Gabriel Zucman, fourchette haute' },
          { v: 25, d: 0, u: 'Md€' },
          { v: 16.4, d: 1, u: '%' },
          { t: 'Assiette pleine, réaction des contribuables supposée faible' },
        ],
      },
      {
        cells: [
          { t: 'Gabriel Zucman, chiffre le plus cité' },
          { v: 20, d: 0, u: 'Md€', strong: true },
          { v: 13.1, d: 1, u: '%', strong: true },
          { t: '2 % sur le patrimoine au-delà de 100 M€, environ 1 800 foyers' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Gabriel Zucman, fourchette basse' },
          { v: 15, d: 0, u: 'Md€' },
          { v: 9.8, d: 1, u: '%' },
          { t: 'Même assiette, évitement partiel' },
        ],
      },
      {
        cells: [
          { t: 'Sept économistes, tribune <em>Le Monde</em>' },
          { v: 5, d: 0, u: 'Md€', approx: true },
          { v: 3.3, d: 1, u: '%' },
          { t: '« Pour 1 € prélevé mécaniquement, seul 0,25 € se traduit en recettes »' },
        ],
        separator: true,
      },
      {
        cells: [
          { t: 'Ministère de l’Économie, pré-rapport de juin 2025' },
          { v: 4, d: 0, u: 'Md€', approx: true },
          { v: 2.6, d: 1, u: '%' },
          { t: 'Assiette resserrée, comportements intégrés' },
        ],
      },
      {
        cells: [
          { t: 'Variante gouvernementale : 0,5 % hors actifs professionnels' },
          { v: 2, d: 0, u: 'Md€', approx: true },
          { v: 1.3, d: 1, u: '%' },
          { t: 'Taux quatre fois plus bas, outil de travail exclu' },
        ],
      },
      {
        cells: [
          { t: 'Collectif « Trop c’est trop » <em>(acteur engagé)</em>' },
          { t: '−10 à −20 Md€', n: true },
          { t: 'perte nette', n: true },
          { t: 'Exil fiscal coûtant 1,3 à 1,8 point de PIB' },
        ],
        missing: true,
      },
    ],
    footer: {
      cells: [
        { t: 'Pour mémoire, charge annuelle de la dette' },
        { v: 65, d: 0, u: 'Md€', approx: true },
        { v: 42.6, d: 1, u: '%' },
        { t: 'Le repère qui situe l’ordre de grandeur' },
      ],
      total: true,
    },
  },
  'france-et-allemagne-meme-niveau-assiettes-opposees': {
    vintage: '2024',
    sources: ['eurostat-structure-des-prelevements-france-allemagne'],
    columns: [
      { key: 'preleve', header: 'Prélèvement, et sur quoi il est assis', type: 'text' },
      { key: 'fr', header: 'France', type: 'number', headerNumeric: true },
      { key: 'de', header: 'Allemagne', type: 'number', headerNumeric: true },
      { key: 'ecart', header: 'Lecture', type: 'text' },
    ],
    rows: [
      {
        cells: [
          { t: '<b>Cotisations employeurs</b> <em>(% du PIB)</em>' },
          { v: 10, d: 1, u: '%', strong: true },
          { v: 7, d: 1, u: '%' },
          { t: 'La France prélève <b>43 % de plus</b> sur les salaires' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>Impôts de production</b> <em>(% du PIB)</em>' },
          { v: 4.4, d: 1, u: '%', strong: true },
          { v: 1, d: 1, u: '%' },
          { t: '<b>Rapport de 1 à 4,4</b> — et dus même à perte' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'TVA <em>(% du PIB)</em>' },
          { v: 7.1, d: 1, u: '%' },
          { v: 9.4, d: 1, u: '%', strong: true },
          { t: 'La France prélève <b>2,3 points de moins</b> sur la consommation' },
        ],
      },
      {
        cells: [
          { t: 'Impôts sur les bénéfices <em>(% de la valeur ajoutée des sociétés)</em>' },
          { v: 4.31, d: 2, u: '%' },
          { v: 4.33, d: 2, u: '%' },
          { t: '<b>Quasiment identique</b>' },
        ],
      },
      {
        cells: [
          { t: 'Total prélevé sur 100 € de coût employeur <em>(un salarié type)</em>' },
          { v: 47.2, d: 1, u: '€' },
          { v: 49.3, d: 1, u: '€', strong: true },
          { t: 'L’Allemagne prélève <b>plus</b> au total' },
        ],
        separator: true,
      },
    ],
  },
} satisfies Tables

export const series = {
  'depense-publique-par-fonction-france-et-moyenne-europeenne': {
    svg: { viewBox: '0 0 720 692', titleId: 'ccofhab3-t', title: 'euros par habitant, 2024' },
    title: 'Dépense publique par fonction, France et moyenne européenne',
    subtitle: 'En euros par habitant, 2024. Trois barres par fonction, dans l\'ordre : moyenne européenne, Allemagne, France.',
    caption: '<b>L\'Allemagne dépense plus que la France sur huit fonctions sur dix.</b> Les seules exceptions sont le <b>logement</b> (613 € contre 245, soit 2,5 fois plus) et les <b>loisirs et la culture</b> (626 contre 551), auxquelles s\'ajoute la défense (788 contre 701) depuis le réarmement français. Sur la protection sociale, la santé, l\'enseignement, les affaires économiques, l\'ordre et la sécurité et les services généraux, l\'Allemagne est devant. <b>Le basculement de dénominateur change le classement.</b> En % du PIB, la France est première du panel (57,3 %). <b>En euros par habitant, elle est cinquième sur sept</b> (24 308 €), derrière le Danemark (31 073), les Pays-Bas (27 705), la Suède (26 697) et l\'Allemagne (25 620). L\'écart avec l\'UE-27 tombe de +8,2 points de PIB à +23,6 % par habitant.',
    sources: ['eurostat-gov-10a-exp'],
    vintage: '2024',
    legend: [
      { color: 's4', label: 'UE-27' },
      { color: 's5', label: 'Allemagne' },
      { color: 's1', label: 'France' },
    ],
    type: 'bar',
    layout: {
      kind: 'bar',
      gridTop: 16,
      gridBottom: 644,
      tickLabelY: 666,
      catLabelX: 182,
      catLabelDy: 25,
      barHeight: 12,
      barPitch: 15,
      groupPitch: 63,
      firstBarY: 22,
      valueLabelDx: 7,
      valueLabelDy: 10.5,
      valueClasses: ['lbl mut', 'lbl mut', 'lbl s1t'],
      rx: 3,
    },
    x: [
      'Protection sociale', 'Santé', 'Services généraux', 'Affaires économiques',
      'Enseignement', 'Défense', 'Ordre et sécurité', 'Loisirs, culture', 'Logement',
      'Environnement',
    ],
    y: { min: 0, max: 10000, ticks: [0, 5000, 10000] },
    series: [
      {
        key: 'b1',
        color: 's4',
        label: 'UE-27',
        values: [7865.37, 2957, 2434.093, 2119.273, 1910, 592, 697, 473, 296, 330.177],
        decimals: 0,
      },
      {
        key: 'b2',
        color: 's5',
        label: 'Allemagne',
        values: [10575, 3941.643, 3327.361, 2807.781, 2330, 701.305, 846, 551, 245, 294.343],
        decimals: 0,
      },
      {
        key: 'b3',
        color: 's1',
        label: 'France',
        values: [10076.785, 3797, 2633, 2415, 2161, 788.329, 757.615, 626, 613, 440.235],
        decimals: 0,
      },
    ],
    frame: { width: 720, height: 692, left: 196, right: 586.7144202583637, top: 16, bottom: 644 },
  },
  'pib-par-habitant-1975-2022': {
    svg: {
      viewBox: '0 0 720 350',
      titleId: 'cpib50-t',
      title: 'PIB par habitant, PPA',
      preserveAspectRatio: 'xMidYMid meet',
    },
    title: 'PIB par habitant, 1975-2022',
    subtitle: 'En dollars internationaux constants de 2011, à parité de pouvoir d\'achat.',
    caption: '<b>Le décrochage est ancien et continu.</b> En 1975, le PIB par habitant français valait <b>80 % du niveau américain</b> et dépassait de 8 % le niveau allemand. En 2022, il ne vaut plus que <b>67 % du niveau américain</b> et <b>84 % du niveau allemand</b>. La France n\'a pas reculé en valeur absolue — elle a progressé de 89 % en 47 ans — mais moins vite que ses comparables.',
    sources: ['our-world-in-data-maddison-project-database-via-our-world'],
    vintage: '2022',
    legend: [
      { color: 's2', label: 'États-Unis' },
      { color: 's4', label: 'Allemagne' },
      { color: 's1', label: 'France' },
      { color: 's5', label: 'Royaume-Uni' },
    ],
    type: 'line',
    layout: {
      kind: 'line',
      tickLabelX: 43,
      tickLabelDy: 4,
      axisLabel: { x: 43, y: 14, text: '$ internationaux constants 2011', anchor: 'end' },
      axisLineY: 316,
      dotR: 4,
      endLabelDx: 8,
      endLabelDy: 4,
      xLabelY: 334,
    },
    xAxis: { min: 1975, max: 2022, ticks: [1975, 1985, 1995, 2005, 2015, 2022] },
    x: [1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2020, 2022],
    y: {
      min: 20000,
      max: 60000,
      ticks: [20000, 30000, 40000, 50000, 60000],
      label: '$ internationaux constants 2011',
    },
    series: [
      {
        key: 's2',
        color: 's2',
        label: 'États-Unis',
        values: [
          25950.44, 29611.511, 33016.787, 36981.615, 39395.683, 45886.491, 49659.472, 49275.779,
          52808.953, 54375.699, 58484.412,
        ],
      },
      {
        key: 's4',
        color: 's4',
        label: 'Allemagne',
        values: [
          19187.85, 22497.202, 24127.898, 25390.887, 28876.099, 33368.505, 36214.229, 41106.315,
          44399.68, 44991.207, 46653.877,
        ],
      },
      {
        key: 's1',
        color: 's1',
        label: 'France',
        values: [
          20658.673, 23536.371, 24751.399, 28124.7, 29419.664, 33416.467, 35494.804, 36086.331,
          37077.538, 35910.472, 39059.952,
        ],
      },
      {
        key: 's5',
        color: 's5',
        label: 'Royaume-Uni',
        values: [
          18884.093, 20610.711, 22577.138, 26190.248, 27852.918, 31945.643, 35622.702, 34759.392,
          37093.525, 34647.482, 38404.476,
        ],
      },
    ],
    frame: { width: 720, height: 350, left: 52, right: 602, top: 34.519999999999996, bottom: 284.72 },
  },
  'pib-par-habitant-en-pouvoir-d-achat-indice-ue-27-100': {
    svg: {
      viewBox: '0 0 720 350',
      titleId: 'cpibeu-t',
      title: 'PIB/hab. en SPA, UE-27 = 100',
      preserveAspectRatio: 'xMidYMid meet',
    },
    title: 'PIB par habitant en pouvoir d\'achat, indice UE-27 = 100',
    subtitle: '2005-2024. Au-dessus de 100 : plus riche que la moyenne européenne.',
    caption: '<b>La France est passée sous la moyenne européenne en 2022</b>, pour la première fois depuis le début de la série. L\'indice passe de <b>113 en 2005 à 99 en 2024</b>, soit −14 points ; l\'Allemagne perd 6 points (121 → 115) et l\'écart franco-allemand se creuse de 8 à 16 points. Une partie de cette baisse est mécanique — le rattrapage des pays d\'Europe centrale relève la moyenne, la Pologne passant de 52 à 79 — mais pas la divergence avec l\'Allemagne.',
    sources: ['eurostat-eurostat-pib-par-habitant-en-standards'],
    vintage: '2024',
    legend: [
      { color: 's4', label: 'Pays-Bas' },
      { color: 's5', label: 'Allemagne' },
      { color: 's1', label: 'France' },
      { color: 's2', label: 'Italie' },
      { color: 's3', label: 'Espagne' },
    ],
    type: 'line',
    layout: {
      kind: 'line',
      tickLabelX: 43,
      tickLabelDy: 4,
      axisLabel: { x: 43, y: 14, text: 'indice, UE-27 = 100', anchor: 'end' },
      axisLineY: 316,
      dotR: 4,
      endLabelDx: 8,
      endLabelDy: 4,
      xLabelY: 334,
    },
    xAxis: { min: 2005, max: 2024, ticks: [2005, 2010, 2015, 2020, 2024] },
    x: [2005, 2008, 2011, 2014, 2017, 2020, 2022, 2024],
    y: { min: 80, max: 140, ticks: [80, 100, 120, 140], label: 'indice, UE-27 = 100' },
    series: [
      {
        key: 's4',
        color: 's4',
        label: 'Pays-Bas',
        values: [140.005, 142.99, 134.991, 132.986, 130.001, 131.004, 133.989, 135.994],
      },
      {
        key: 's5',
        color: 's5',
        label: 'Allemagne',
        values: [121, 118.995, 124.988, 127.996, 125.991, 123.006, 117.992, 115.007],
      },
      {
        key: 's1',
        color: 's1',
        label: 'France',
        values: [113.002, 107.989, 107.989, 107.989, 102.999, 104.001, 98.008, 98.988],
      },
      {
        key: 's2',
        color: 's2',
        label: 'Italie',
        values: [112, 107.989, 105.004, 98.008, 98.008, 92.995, 98.008, 98.008],
      },
      {
        key: 's3',
        color: 's3',
        label: 'Espagne',
        values: [101.996, 101.996, 91.993, 90.01, 92.995, 82.992, 88.005, 91.993],
      },
    ],
    frame: { width: 720, height: 350, left: 52, right: 602, top: 43.920000000000016, bottom: 307.23 },
  },
  'les-trois-mesures-indice-ue-27-100': {
    svg: {
      viewBox: '0 0 720 340',
      titleId: 'cpibfr-t',
      title: 'France, UE-27 = 100',
      preserveAspectRatio: 'xMidYMid meet',
    },
    title: 'Les trois mesures, indice UE-27 = 100',
    subtitle: 'France, 1995-2024. L\'écart entre les courbes mesure ce que coûtent la durée du travail et le taux d\'emploi.',
    caption: '<b>Les trois courbes descendent, mais pas au même rythme ni pour les mêmes raisons.</b> Jusqu\'en 2019 la productivité horaire se maintient (135 en 2000, 125 en 2019) et suit exactement la trajectoire allemande — c\'est un effet de rattrapage de l\'Europe centrale, pas un problème français. Le PIB par habitant, lui, perd 13 points sur la même période : l\'écart entre les deux courbes, c\'est le taux d\'emploi. Puis, entre 2019 et 2022, <b>la courbe de productivité s\'effondre de 11 points</b> — une rupture qui n\'a pas d\'équivalent dans les vingt-cinq années précédentes.',
    sources: ['eurostat-nama-10-lp-ulc'],
    vintage: '2024',
    legend: [
      { color: 's2', label: 'PIB par heure travaillée' },
      { color: 's4', label: 'PIB par personne en emploi' },
      { color: 's1', label: 'PIB par habitant' },
    ],
    type: 'line',
    layout: {
      kind: 'line',
      tickLabelX: 43,
      tickLabelDy: 4,
      axisLabel: { x: 43, y: 14, text: 'indice, UE-27 = 100', anchor: 'end' },
      axisLineY: 306,
      dotR: 4,
      endLabelDx: 8,
      endLabelDy: 4,
      xLabelY: 324,
    },
    xAxis: { min: 1995, max: 2024, ticks: [1995, 2005, 2015, 2024] },
    x: [1995, 2000, 2005, 2008, 2010, 2015, 2019, 2022, 2024],
    y: { min: 90, max: 140, ticks: [90, 100, 110, 120, 130, 140], label: 'indice, UE-27 = 100' },
    series: [
      {
        key: 's2',
        color: 's2',
        label: 'PIB par heure travaillée',
        values: [133.996, 135, 131.901, 127.694, 126.197, 124.507, 125.299, 113.908, 114.296],
      },
      {
        key: 's4',
        color: 's4',
        label: 'PIB par personne en emploi',
        values: [122.394, 121.796, 119.208, 116.408, 116.408, 114.701, 116.197, 106.092, 107.394],
      },
      {
        key: 's1',
        color: 's1',
        label: 'PIB par habitant',
        values: [116.496, 117.606, 113.099, 111.004, 108.803, 106.197, 104.894, 97.306, 98.292],
      },
    ],
    frame: { width: 720, height: 340, left: 52, right: 602, top: 22, bottom: 306 },
  },
  'productivite-horaire-en-volume-base-100-en-2000': {
    svg: {
      viewBox: '0 0 720 350',
      titleId: 'cprodvol-t',
      title: 'Productivité horaire, volume',
      preserveAspectRatio: 'xMidYMid meet',
    },
    title: 'Productivité horaire en volume, base 100 en 2000',
    subtitle: 'La seule mesure qui neutralise les effets de prix et de change.',
    caption: '<b>La France suit l\'Allemagne pendant vingt ans, puis décroche en 2020.</b> Les deux courbes sont indiscernables de 1995 à 2019 (118,3 contre 120,0). En 2024, la France est à <b>115,5 contre 121,6</b>, et son niveau de 2024 est <b>inférieur de 2,3 % à celui de 2019</b> — le seul grand pays européen dans ce cas avec l\'Italie, et la France y fait pire que l\'Italie. La Pologne, elle, a doublé sa productivité horaire en vingt-quatre ans.',
    sources: ['eurostat-nama-10-lp-ulc-2'],
    vintage: '2000',
    legend: [
      { color: 's3', label: 'Pologne' },
      { color: 's5', label: 'UE-27' },
      { color: 's4', label: 'Allemagne' },
      { color: 's1', label: 'France' },
      { color: 's2', label: 'Italie' },
    ],
    type: 'line',
    layout: {
      kind: 'line',
      tickLabelX: 43,
      tickLabelDy: 4,
      axisLabel: { x: 43, y: 14, text: 'indice de volume, base 100 en 2000', anchor: 'end' },
      axisLineY: 316,
      dotR: 4,
      endLabelDx: 8,
      endLabelDy: 4,
      xLabelY: 334,
    },
    xAxis: { min: 1995, max: 2024, ticks: [1995, 2000, 2010, 2019, 2024] },
    x: [1995, 2000, 2005, 2008, 2010, 2015, 2019, 2022, 2024],
    y: { min: 100, max: 200, ticks: [100, 150, 200], label: 'indice de volume, base 100 en 2000' },
    series: [
      {
        key: 's3',
        color: 's3',
        label: 'Pologne',
        values: [75.905, 100, 119.81, 127.286, 139.286, 156.619, 182.381, 190.619, 201.905],
      },
      {
        key: 's5',
        color: 's5',
        label: 'UE-27',
        values: [90.19, 100, 108.095, 110.619, 112.476, 118.714, 123.095, 126, 125.286],
      },
      {
        key: 's4',
        color: 's4',
        label: 'Allemagne',
        values: [91.19, 100, 107, 109.905, 109.095, 114.905, 120, 123.381, 121.619],
      },
      {
        key: 's1',
        color: 's1',
        label: 'France',
        values: [91.381, 100, 107.619, 109.381, 109.905, 115.381, 118.286, 115.095, 115.524],
      },
      {
        key: 's2',
        color: 's2',
        label: 'Italie',
        values: [94.476, 100, 100.81, 99.81, 100, 101, 101.286, 103.905, 100.286],
      },
    ],
    frame: { width: 720, height: 350, left: 52, right: 602, top: 43, bottom: 253 },
  },
  'pib-par-personne-agee-de-15-a-64-ans': {
    svg: {
      viewBox: '0 0 720 350',
      titleId: 'cpibactif-t',
      title: 'PIB par personne de 15 à 64 ans',
      preserveAspectRatio: 'xMidYMid meet',
    },
    title: 'PIB par personne âgée de 15 à 64 ans',
    subtitle: 'En dollars internationaux constants de 2021, à parité de pouvoir d\'achat.',
    caption: '<b>La correction joue en faveur de la France, mais elle est faible.</b> Le retard sur l\'Allemagne passe de −12,5 % à <b>−10,3 %</b>, celui sur les États-Unis de −27,6 % à <b>−23,6 %</b>. L\'avance sur le Royaume-Uni passe de +2,6 % à +5,9 %. <b>La structure d\'âge explique 15 à 20 % de l\'écart ; 80 à 85 % subsistent.</b>',
    sources: ['eurostat-demo-pjangroup'],
    vintage: '2021',
    legend: [
      { color: 's2', label: 'États-Unis' },
      { color: 's3', label: 'Pays-Bas' },
      { color: 's4', label: 'Allemagne' },
      { color: 's1', label: 'France' },
      { color: 's5', label: 'Royaume-Uni' },
    ],
    type: 'line',
    layout: {
      kind: 'line',
      tickLabelX: 43,
      tickLabelDy: 4,
      axisLabel: { x: 43, y: 14, text: '$ int. constants 2021', anchor: 'end' },
      axisLineY: 316,
      dotR: 4,
      endLabelDx: 8,
      endLabelDy: 4,
      xLabelY: 334,
    },
    xAxis: { min: 1995, max: 2024, ticks: [1995, 2005, 2015, 2024] },
    x: [1995, 2000, 2005, 2010, 2015, 2019, 2022, 2024],
    y: {
      min: 60000,
      max: 120000,
      ticks: [60000, 80000, 100000, 120000],
      label: '$ int. constants 2021',
    },
    series: [
      {
        key: 's2',
        color: 's2',
        label: 'États-Unis',
        values: [71776.233, 82599.977, 88273.898, 88638.487, 96796.172, 105181.725, 111698.758, 116916.942],
      },
      {
        key: 's3',
        color: 's3',
        label: 'Pays-Bas',
        values: [68449.356, 82691.125, 86564.885, 91623.562, 96158.141, 104156.318, 110149.254, 109328.928],
      },
      {
        key: 's4',
        color: 's4',
        label: 'Allemagne',
        values: [66649.197, 73599.18, 76926.057, 83397.516, 90780.449, 97274.695, 100236.983, 99621.739],
      },
      {
        key: 's1',
        color: 's1',
        label: 'France',
        values: [62069.044, 70591.318, 74168.85, 75946.223, 80571.949, 86245.87, 87157.343, 89322.092],
      },
      {
        key: 's5',
        color: 's5',
        label: 'Royaume-Uni',
        values: [57671.186, 67241.654, 73348.525, 72345.904, 78429.987, 84035.547, 85083.742, 84354.563],
      },
    ],
    frame: {
      width: 720,
      height: 350,
      left: 52,
      right: 602,
      top: 30.77000000000001,
      bottom: 294.08000000000004,
    },
  },
  'le-pib-rapporte-a-trois-denominateurs-differents': {
    svg: { viewBox: '0 0 720 377', titleId: 'cpibmes-t', title: 'milliers de $ int. constants 2021' },
    title: 'Le PIB rapporté à trois dénominateurs différents',
    subtitle: '2024, en milliers de dollars internationaux constants de 2021. Trois barres par pays.',
    caption: '<b>Plus le dénominateur se rapproche de ceux qui produisent réellement, plus l\'écart français se referme.</b> Sur la population de 15 à 64 ans, la France est 5ᵉ sur 7 et 9,8 % derrière l\'Allemagne. Rapportée aux seules personnes en emploi, elle passe <b>devant l\'Allemagne (+3,0 %)</b> et à égalité avec les Pays-Bas. Seul l\'écart avec les États-Unis résiste : −17,3 %.',
    sources: ['eurostat-lfsi-emp-a-2'],
    vintage: '2024',
    legend: [
      { color: 's4', label: 'par personne de 15 à 64 ans' },
      { color: 's3', label: 'par personne de 15 ans à l\'âge de sortie du pays' },
      { color: 's1', label: 'par personne en emploi' },
    ],
    type: 'bar',
    layout: {
      kind: 'bar',
      gridTop: 16,
      gridBottom: 329,
      tickLabelY: 351,
      catLabelX: 136,
      catLabelDy: 25,
      barHeight: 12,
      barPitch: 15,
      groupPitch: 63,
      firstBarY: 22,
      valueLabelDx: 7,
      valueLabelDy: 10.5,
      valueClasses: ['lbl mut', 'lbl mut', 'lbl s1t'],
      rx: 3,
    },
    x: ['États-Unis', 'Pays-Bas', 'Allemagne', 'France', 'Royaume-Uni'],
    y: { min: 0, max: 150, ticks: [0, 50, 100, 150] },
    series: [
      {
        key: 'b1',
        color: 's4',
        label: 'par personne de 15 à 64 ans',
        values: [116.91, 109.827, 98.493, 88.813, 84.394],
        decimals: 1,
      },
      {
        key: 'b2',
        color: 's3',
        label: 'par personne de 15 ans à l\'âge de sortie du pays',
        values: [111.007, 108.107, 98.426, 92.321, 85.305],
        decimals: 1,
      },
      {
        key: 'b3',
        color: 's1',
        label: 'par personne en emploi',
        values: [154.014, 127.704, 123.724, 127.299, 109.624],
        decimals: 1,
      },
    ],
    frame: { width: 720, height: 377, left: 150, right: 594.7000729088873, top: 16, bottom: 329 },
  },
  'pib-par-personne-en-emploi-1995-2024': {
    svg: {
      viewBox: '0 0 720 340',
      titleId: 'cpibemp-t',
      title: 'PIB par personne en emploi',
      preserveAspectRatio: 'xMidYMid meet',
    },
    title: 'PIB par personne en emploi, 1995-2024',
    subtitle: 'En milliers de dollars internationaux constants de 2021.',
    caption: '<b>Le fait saillant de trente ans n\'est pas européen.</b> La France tient son rang face à l\'Allemagne et aux Pays-Bas sur toute la période — elle était devant en 1995, elle l\'est encore aujourd\'hui. Mais face aux États-Unis, elle passe de <b>+6,5 % en 1995 à −17,3 % en 2024</b> : près de 24 points perdus, dont l\'essentiel après 2000 et une accélération après 2019.',
    sources: ['eurostat-lfsi-emp-a'],
    vintage: '2024',
    legend: [
      { color: 's2', label: 'États-Unis' },
      { color: 's3', label: 'Pays-Bas' },
      { color: 's1', label: 'France' },
      { color: 's4', label: 'Allemagne' },
      { color: 's5', label: 'Royaume-Uni' },
    ],
    type: 'line',
    layout: {
      kind: 'line',
      tickLabelX: 43,
      tickLabelDy: 4,
      axisLabel: { x: 43, y: 14, text: 'milliers de $ int. constants 2021', anchor: 'end' },
      axisLineY: 306,
      dotR: 4,
      endLabelDx: 8,
      endLabelDy: 4,
      xLabelY: 324,
    },
    xAxis: { min: 1995, max: 2024, ticks: [1995, 2000, 2010, 2019, 2024] },
    x: [1995, 2000, 2010, 2019, 2024],
    y: {
      min: 80,
      max: 160,
      ticks: [80, 100, 120, 140, 160],
      label: 'milliers de $ int. constants 2021',
    },
    series: [
      { key: 's2', color: 's2', label: 'États-Unis', values: [97.606, 109.887, 129.296, 140.31, 154] },
      {
        key: 's3',
        color: 's3',
        label: 'Pays-Bas',
        values: [92.507, 104.592, 118.113, 125.014, 127.69],
      },
      {
        key: 's1',
        color: 's1',
        label: 'France',
        values: [103.887, 114.113, 118.197, 128.901, 127.296],
      },
      {
        key: 's4',
        color: 's4',
        label: 'Allemagne',
        values: [101.69, 110.901, 115.211, 122.789, 123.69],
      },
      {
        key: 's5',
        color: 's5',
        label: 'Royaume-Uni',
        values: [83.493, 93.296, 101.887, 107.887, 109.606],
      },
    ],
    frame: { width: 720, height: 340, left: 52, right: 602, top: 22, bottom: 306 },
  },
  'recettes-et-depenses-publiques-francaises-2000-2025': {
    raw: true,
    title: 'Recettes et dépenses publiques françaises, 2000-2025',
    subtitle: 'En % du PIB. L\'écart entre les deux courbes est le déficit.',
    caption: '<b>Les traits verticaux marquent les changements de mandat présidentiel</b> (mai 2007, mai 2012, mai 2017 ; les budgets de l\'année de passation ont été votés par le gouvernement précédent). <b>Trois enseignements.</b> Les dépenses n\'ont jamais retrouvé leur niveau d\'avant-crise : 52,6 % en 2000, 57,2 % en 2025, soit +4,5 points en vingt-cinq ans, chaque crise produisant un cliquet jamais complètement rattrapé. L\'assainissement 2010-2019 s\'est fait <b>aux deux tiers par les recettes</b> (+3,7 points) et pour un tiers par les dépenses (−2,7 points). Et la dégradation 2022-2024 vient d\'une chute des recettes (−2,5 points en deux ans), pas d\'une hausse des dépenses, qui reculaient sur la même période. <em>Source : Eurostat gov_10a_main.</em>',
    legend: [
      { color: 's2', label: 'Dépenses' },
      { color: 's1', label: 'Recettes' },
    ],
    svg: '<svg viewBox="0 0 720 330" class="cv" role="img" aria-labelledby="cbud2-t" preserveAspectRatio="xMidYMid meet">\n<title id="cbud2-t">% du PIB</title>\n<line class="mark" x1="206.0" y1="24" x2="206.0" y2="296"></line>\n<text class="mk" x="210.0" y="33">Sarkozy</text>\n<line class="mark" x1="316.0" y1="24" x2="316.0" y2="296"></line>\n<text class="mk" x="320.0" y="33">Hollande</text>\n<line class="mark" x1="426.0" y1="24" x2="426.0" y2="296"></line>\n<text class="mk" x="430.0" y="33">Macron</text>\n<line class="grid" x1="52" y1="259.5" x2="602" y2="259.5"></line>\n<text class="ax ar" x="43" y="263.5">50,0</text>\n<line class="grid" x1="52" y1="168.1" x2="602" y2="168.1"></line>\n<text class="ax ar" x="43" y="172.1">55,0</text>\n<line class="grid" x1="52" y1="76.8" x2="602" y2="76.8"></line>\n<text class="ax ar" x="43" y="80.8">60,0</text>\n<text class="ax" x="43" y="14" text-anchor="end">% du PIB</text>\n<text class="ax" x="52.0" y="314" text-anchor="start">2000</text>\n<text class="ax" x="162.0" y="314" text-anchor="middle">2005</text>\n<text class="ax" x="272.0" y="314" text-anchor="middle">2010</text>\n<text class="ax" x="382.0" y="314" text-anchor="middle">2015</text>\n<text class="ax" x="492.0" y="314" text-anchor="middle">2020</text>\n<text class="ax" x="602.0" y="314" text-anchor="end">2025</text>\n<line class="axis" x1="52" y1="296" x2="602" y2="296"></line>\n<polyline class="ln s2" points="52.0,212.0 74.0,208.3 96.0,188.2 118.0,179.1 140.0,186.4 162.0,180.9 184.0,190.1 206.0,193.7 228.0,180.9 250.0,113.3 272.0,118.8 294.0,131.6 316.0,115.2 338.0,102.4 360.0,106.0 382.0,120.6 404.0,124.3 426.0,118.8 448.0,142.6 470.0,162.7 492.0,45.7 514.0,85.9 536.0,106.0 558.0,135.3 580.0,131.6 602.0,127.9"></polyline>\n<polyline class="ln s1" points="52.0,235.7 74.0,233.9 96.0,246.7 118.0,254.0 140.0,252.2 162.0,244.9 184.0,239.4 206.0,248.5 228.0,244.9 250.0,248.5 272.0,248.5 294.0,228.4 316.0,210.1 338.0,191.9 360.0,190.1 382.0,191.9 404.0,193.7 426.0,180.9 448.0,186.4 470.0,204.7 492.0,213.8 514.0,212.0 536.0,191.9 558.0,241.2 580.0,237.5 602.0,221.1"></polyline>\n<circle class="dot s2" cx="602.0" cy="127.9" r="4"></circle>\n<text class="lbl s2t" x="610.0" y="131.9">Dépenses</text>\n<circle class="dot s1" cx="602.0" cy="221.1" r="4"></circle>\n<text class="lbl s1t" x="610.0" y="225.1">Recettes</text>\n</svg>',
    sources: ['eurostat-gov-10a-main'],
    vintage: '2025',
    values: {
      svg: {
        viewBox: '0 0 720 330',
        titleId: 'cbud2-t',
        title: '% du PIB',
        preserveAspectRatio: 'xMidYMid meet',
      },
      title: 'Recettes et dépenses publiques françaises, 2000-2025',
      subtitle: 'En % du PIB. L\'écart entre les deux courbes est le déficit.',
      caption: '<b>Les traits verticaux marquent les changements de mandat présidentiel</b> (mai 2007, mai 2012, mai 2017 ; les budgets de l\'année de passation ont été votés par le gouvernement précédent). <b>Trois enseignements.</b> Les dépenses n\'ont jamais retrouvé leur niveau d\'avant-crise : 52,6 % en 2000, 57,2 % en 2025, soit +4,5 points en vingt-cinq ans, chaque crise produisant un cliquet jamais complètement rattrapé. L\'assainissement 2010-2019 s\'est fait <b>aux deux tiers par les recettes</b> (+3,7 points) et pour un tiers par les dépenses (−2,7 points). Et la dégradation 2022-2024 vient d\'une chute des recettes (−2,5 points en deux ans), pas d\'une hausse des dépenses, qui reculaient sur la même période. <em>Source : Eurostat gov_10a_main.</em>',
      sources: ['eurostat-gov-10a-main'],
      vintage: '2025',
      legend: [
        { color: 's2', label: 'Dépenses' },
        { color: 's1', label: 'Recettes' },
      ],
      type: 'line',
      layout: {
        kind: 'line',
        tickLabelX: 43,
        tickLabelDy: 4,
        axisLabel: { x: 43, y: 14, text: '% du PIB', anchor: 'end' },
        axisLineY: 296,
        dotR: 4,
        endLabelDx: 8,
        endLabelDy: 4,
        xLabelY: 314,
      },
      xAxis: { min: 2000, max: 2025, ticks: [2000, 2005, 2010, 2015, 2020, 2025] },
      x: [
        2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014,
        2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025,
      ],
      y: { min: 50, max: 60, ticks: [50, 55, 60], label: '% du PIB' },
      series: [
        {
          key: 's2',
          color: 's2',
          label: 'Dépenses',
          values: [
            52.599, 52.801, 53.902, 54.4, 54, 54.301, 53.798, 53.601, 54.301, 58.001, 57.7, 57,
            57.897, 58.598, 58.401, 57.602, 57.399, 57.7, 56.398, 55.297, 61.701, 59.501, 58.401,
            56.797, 57, 57.202,
          ],
        },
        {
          key: 's1',
          color: 's1',
          label: 'Recettes',
          values: [
            51.302, 51.4, 50.7, 50.3, 50.399, 50.798, 51.099, 50.601, 50.798, 50.601, 50.601, 51.701,
            52.703, 53.699, 53.798, 53.699, 53.601, 54.301, 54, 52.999, 52.5, 52.599, 53.699, 51.001,
            51.203, 52.101,
          ],
        },
      ],
      frame: {
        width: 720,
        height: 330,
        left: 52,
        right: 602,
        top: 76.78333333333336,
        bottom: 259.48333333333335,
      },
    },
  },
  'taux-effectif-de-cotisations-patronales-selon-le-salaire': {
    raw: true,
    title: 'Taux effectif de cotisations patronales selon le salaire',
    subtitle: 'En % du salaire brut, barème 2026. Axe horizontal en multiples du SMIC.',
    caption: '<b>La courbe est en cloche.</b> Environ 3,5 % au SMIC, elle bondit de 29 points entre 1 et 1,6 SMIC sous l\'effet de la dégressivité des allègements, plafonne à 42 % vers 3,5 SMIC, retombe à 38 % au-delà de 4 plafonds de la Sécurité sociale (fin du chômage) puis à <b>23 % au-delà de 8 plafonds</b> (fin de l\'Agirc-Arrco). Et elle tombe à zéro pour un revenu de dividendes ou de plus-values, qui n\'est pas un salaire.',
    svg: '<svg viewBox="0 0 720 300" class="cv" role="img" aria-labelledby="ccotpat-t" preserveAspectRatio="xMidYMid meet">\n<title id="ccotpat-t">Cotisations patronales effectives</title>\n<line class="grid" x1="52" y1="266.0" x2="602" y2="266.0"></line>\n<text class="ax ar" x="43" y="270.0">0,0</text>\n<line class="grid" x1="52" y1="215.2" x2="602" y2="215.2"></line>\n<text class="ax ar" x="43" y="219.2">10,0</text>\n<line class="grid" x1="52" y1="164.3" x2="602" y2="164.3"></line>\n<text class="ax ar" x="43" y="168.3">20,0</text>\n<line class="grid" x1="52" y1="113.5" x2="602" y2="113.5"></line>\n<text class="ax ar" x="43" y="117.5">30,0</text>\n<line class="grid" x1="52" y1="62.7" x2="602" y2="62.7"></line>\n<text class="ax ar" x="43" y="66.7">40,0</text>\n<text class="ax" x="43" y="14" text-anchor="end">% du salaire brut</text>\n<text class="ax" x="52.0" y="284" text-anchor="start">1</text>\n<text class="ax" x="156.8" y="284" text-anchor="middle">5</text>\n<text class="ax" x="287.7" y="284" text-anchor="middle">10</text>\n<text class="ax" x="418.7" y="284" text-anchor="middle">15</text>\n<text class="ax" x="549.6" y="284" text-anchor="middle">20</text>\n<line class="axis" x1="52" y1="266" x2="602" y2="266"></line>\n<polyline class="ln s2" points="52.0,248.2 57.2,162.3 65.1,111.5 67.7,100.3 78.2,75.9 91.3,57.6 104.4,54.0 117.5,51.0 183.0,51.0 256.0,51.0 256.3,72.8 484.1,72.8 486.8,148.1 602.0,148.1"></polyline>\n<circle class="dot s2" cx="602.0" cy="148.1" r="4"></circle>\n<text class="lbl s2t" x="610.0" y="152.1">Taux patronal effectif</text>\n</svg>',
    sources: ['urssaf-bareme-calcule-par-nos-soins-a-partir-de'],
    vintage: 'à confirmer',
    values: {
      svg: {
        viewBox: '0 0 720 300',
        titleId: 'ccotpat-t',
        title: 'Cotisations patronales effectives',
        preserveAspectRatio: 'xMidYMid meet',
      },
      title: 'Taux effectif de cotisations patronales selon le salaire',
      subtitle: 'En % du salaire brut, barème 2026. Axe horizontal en multiples du SMIC.',
      caption: '<b>La courbe est en cloche.</b> Environ 3,5 % au SMIC, elle bondit de 29 points entre 1 et 1,6 SMIC sous l\'effet de la dégressivité des allègements, plafonne à 42 % vers 3,5 SMIC, retombe à 38 % au-delà de 4 plafonds de la Sécurité sociale (fin du chômage) puis à <b>23 % au-delà de 8 plafonds</b> (fin de l\'Agirc-Arrco). Et elle tombe à zéro pour un revenu de dividendes ou de plus-values, qui n\'est pas un salaire.',
      sources: ['urssaf-bareme-calcule-par-nos-soins-a-partir-de'],
      vintage: '2026',
      type: 'line',
      layout: {
        kind: 'line',
        tickLabelX: 43,
        tickLabelDy: 4,
        axisLabel: { x: 43, y: 14, text: '% du salaire brut', anchor: 'end' },
        axisLineY: 266,
        dotR: 4,
        endLabelDx: 8,
        endLabelDy: 4,
        xLabelY: 284,
      },
      xAxis: { min: 1, max: 22.001, ticks: [1, 5, 10, 15, 20] },
      x: [1, 1.199, 1.5, 1.599, 2, 2.501, 3.001, 3.501, 6.002, 8.789, 8.801, 17.499, 17.602, 22.001],
      y: { min: 0, max: 40, ticks: [0, 10, 20, 30, 40], label: '% du salaire brut' },
      series: [
        {
          key: 's2',
          color: 's2',
          label: 'Taux patronal effectif',
          values: [
            3.502, 20.401, 30.395, 32.599, 37.399, 40.999, 41.708, 42.298, 42.298, 42.298, 38.009,
            38.009, 23.195, 23.195,
          ],
        },
      ],
      frame: { width: 720, height: 300, left: 52, right: 602, top: 62.68000000000001, bottom: 266 },
    },
  },
  'masse-prelevee-par-decile-de-niveau-de-vie': {
    raw: true,
    title: 'Masse prélevée par décile de niveau de vie',
    subtitle: 'En milliards d\'euros, 2023. Tous prélèvements confondus, cotisations et impôts indirects inclus.',
    caption: '<b>Le dernier décile acquitte 423 Md€ sur 1 271, soit un tiers du total — davantage que les cinq premiers déciles réunis (285 Md€).</b> Mais la composition bascule complètement : chez les 10 % les plus aisés, les impôts sur le revenu et le patrimoine (186 Md€) dépassent les cotisations (164 Md€), alors qu\'au premier décile ils pèsent 5 Md€ contre 18 Md€ d\'impôts indirects. <b>Les 20 % les plus aisés paient 48 % de tous les prélèvements ; les 20 % les plus modestes, 5,6 %.</b>',
    legend: [
      { color: 's1', label: 'Cotisations sociales' },
      { color: 's2', label: 'Impôts sur le revenu et le patrimoine' },
      { color: 's4', label: 'Impôts sur la production et la consommation' },
    ],
    svg: '<svg viewBox="0 0 720 404" class="cv" role="img" aria-labelledby="cmasse-t">\n<title id="cmasse-t">milliards d\'euros prélevés, 2023</title>\n<line class="grid" x1="88.0" y1="16" x2="88.0" y2="354"></line>\n<text class="ax" x="88.0" y="378" text-anchor="middle">0</text>\n<line class="grid" x1="331.3" y1="16" x2="331.3" y2="354"></line>\n<text class="ax" x="331.3" y="378" text-anchor="middle">200</text>\n<line class="grid" x1="574.7" y1="16" x2="574.7" y2="354"></line>\n<text class="ax" x="574.7" y="378" text-anchor="middle">400</text>\n<text class="ax al" x="76" y="37">D1</text>\n<rect class="bar s1f" x="88.0" y="22" width="7.2" height="19" rx="2"></rect>\n<rect class="bar s2f" x="95.2" y="22" width="6.3" height="19" rx="2"></rect>\n<rect class="bar s4f" x="101.5" y="22" width="22.3" height="19" rx="2"></rect>\n<text class="lbl" x="131.8" y="37">29</text>\n<text class="ax al" x="76" y="71">D2</text>\n<rect class="bar s1f" x="88.0" y="56" width="18.1" height="19" rx="2"></rect>\n<rect class="bar s2f" x="106.1" y="56" width="5.7" height="19" rx="2"></rect>\n<rect class="bar s4f" x="111.8" y="56" width="25.9" height="19" rx="2"></rect>\n<text class="lbl" x="145.8" y="71">41</text>\n<text class="ax al" x="76" y="105">D3</text>\n<rect class="bar s1f" x="88.0" y="90" width="27.1" height="19" rx="2"></rect>\n<rect class="bar s2f" x="115.1" y="90" width="9.9" height="19" rx="2"></rect>\n<rect class="bar s4f" x="125.0" y="90" width="31.6" height="19" rx="2"></rect>\n<text class="lbl" x="164.6" y="105">56</text>\n<text class="ax al" x="76" y="139">D4</text>\n<rect class="bar s1f" x="88.0" y="124" width="37.7" height="19" rx="2"></rect>\n<rect class="bar s2f" x="125.7" y="124" width="13.7" height="19" rx="2"></rect>\n<rect class="bar s4f" x="139.5" y="124" width="36.3" height="19" rx="2"></rect>\n<text class="lbl" x="183.7" y="139">72</text>\n<text class="ax al" x="76" y="173">D5</text>\n<rect class="bar s1f" x="88.0" y="158" width="47.7" height="19" rx="2"></rect>\n<rect class="bar s2f" x="135.7" y="158" width="17.4" height="19" rx="2"></rect>\n<rect class="bar s4f" x="153.1" y="158" width="39.7" height="19" rx="2"></rect>\n<text class="lbl" x="200.8" y="173">86</text>\n<text class="ax al" x="76" y="207">D6</text>\n<rect class="bar s1f" x="88.0" y="192" width="55.1" height="19" rx="2"></rect>\n<rect class="bar s2f" x="143.1" y="192" width="22.6" height="19" rx="2"></rect>\n<rect class="bar s4f" x="165.7" y="192" width="45.0" height="19" rx="2"></rect>\n<text class="lbl" x="218.8" y="207">101</text>\n<text class="ax al" x="76" y="241">D7</text>\n<rect class="bar s1f" x="88.0" y="226" width="69.6" height="19" rx="2"></rect>\n<rect class="bar s2f" x="157.6" y="226" width="28.6" height="19" rx="2"></rect>\n<rect class="bar s4f" x="186.2" y="226" width="49.5" height="19" rx="2"></rect>\n<text class="lbl" x="243.7" y="241">121</text>\n<text class="ax al" x="76" y="275">D8</text>\n<rect class="bar s1f" x="88.0" y="260" width="86.5" height="19" rx="2"></rect>\n<rect class="bar s2f" x="174.5" y="260" width="39.5" height="19" rx="2"></rect>\n<rect class="bar s4f" x="214.0" y="260" width="55.7" height="19" rx="2"></rect>\n<text class="lbl" x="277.8" y="275">149</text>\n<text class="ax al" x="76" y="309">D9</text>\n<rect class="bar s1f" x="88.0" y="294" width="111.8" height="19" rx="2"></rect>\n<rect class="bar s2f" x="199.8" y="294" width="57.4" height="19" rx="2"></rect>\n<rect class="bar s4f" x="257.2" y="294" width="63.5" height="19" rx="2"></rect>\n<text class="lbl" x="328.7" y="309">191</text>\n<text class="ax al" x="76" y="343">D10</text>\n<rect class="bar s1f" x="88.0" y="328" width="199.8" height="19" rx="2"></rect>\n<rect class="bar s2f" x="287.8" y="328" width="225.9" height="19" rx="2"></rect>\n<rect class="bar s4f" x="513.7" y="328" width="88.6" height="19" rx="2"></rect>\n<text class="lbl" x="610.3" y="343">423</text>\n</svg>',
    sources: ['insee-calcul-par-nos-soins-a-partir-de-l-insee'],
    vintage: 'à confirmer',
    values: {
      svg: { viewBox: '0 0 720 404', titleId: 'cmasse-t', title: 'milliards d\'euros prélevés, 2023' },
      title: 'Masse prélevée par décile de niveau de vie',
      subtitle: 'En milliards d\'euros, 2023. Tous prélèvements confondus, cotisations et impôts indirects inclus.',
      caption: '<b>Le dernier décile acquitte 423 Md€ sur 1 271, soit un tiers du total — davantage que les cinq premiers déciles réunis (285 Md€).</b> Mais la composition bascule complètement : chez les 10 % les plus aisés, les impôts sur le revenu et le patrimoine (186 Md€) dépassent les cotisations (164 Md€), alors qu\'au premier décile ils pèsent 5 Md€ contre 18 Md€ d\'impôts indirects. <b>Les 20 % les plus aisés paient 48 % de tous les prélèvements ; les 20 % les plus modestes, 5,6 %.</b>',
      sources: ['insee-calcul-par-nos-soins-a-partir-de-l-insee'],
      vintage: '2023',
      legend: [
        { color: 's1', label: 'Cotisations sociales' },
        { color: 's2', label: 'Impôts sur le revenu et le patrimoine' },
        { color: 's4', label: 'Impôts sur la production et la consommation' },
      ],
      type: 'stacked-bar',
      layout: {
        kind: 'bar',
        gridTop: 16,
        gridBottom: 354,
        tickLabelY: 378,
        catLabelX: 76,
        catLabelDy: 15,
        barHeight: 19,
        barPitch: 22,
        groupPitch: 34,
        firstBarY: 22,
        valueLabelDx: 36.6,
        valueLabelDy: 15,
        valueClasses: ['lbl', 'lbl', 'lbl'],
        rx: 2,
        stacked: true,
      },
      x: ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10'],
      y: { min: 0, max: 400, ticks: [0, 200, 400] },
      series: [
        {
          key: 'b1',
          color: 's1',
          label: 'Cotisations sociales',
          values: [5.917, 14.876, 22.272, 30.984, 39.203, 45.285, 57.202, 71.091, 91.884, 164.208],
        },
        {
          key: 'b2',
          color: 's2',
          label: 'Impôts sur le revenu et le patrimoine',
          values: [5.178, 4.685, 8.136, 11.26, 14.3, 18.574, 23.505, 32.464, 47.175, 185.659],
        },
        {
          key: 'b3',
          color: 's4',
          label: 'Impôts sur la production et la consommation',
          values: [18.328, 21.286, 25.971, 29.834, 32.628, 36.984, 40.682, 45.778, 52.188, 72.817],
        },
      ],
      frame: { width: 720, height: 404, left: 88, right: 574.7, top: 16, bottom: 354 },
    },
  },
  'le-taux-de-prelevement-decompose': {
    raw: true,
    title: 'Le taux de prélèvement, décomposé',
    subtitle: 'En % du revenu primaire élargi du décile, 2023.',
    caption: '<b>Voilà pourquoi le système paraît plat.</b> Les cotisations forment un plateau presque parfait entre 22 % et 29 % du revenu, avec un décrochage au dernier décile (22,9 %) dû au déplafonnement incomplet. Et les impôts sur la production et la consommation sont <b>massivement régressifs</b> : 67,8 % du revenu primaire au premier décile contre 10,1 % au dernier — un rapport de 1 à 7 en sens inverse du revenu.',
    legend: [
      { color: 's4', label: 'Cotisations sociales' },
      { color: 's1', label: 'Impôts sur la production et la consommation' },
    ],
    svg: '<svg viewBox="0 0 720 522" class="cv" role="img" aria-labelledby="ctauxdec-t">\n<title id="ctauxdec-t">% du revenu primaire élargi, 2023</title>\n<line class="grid" x1="84.0" y1="16" x2="84.0" y2="474"></line>\n<text class="ax" x="84.0" y="496" text-anchor="middle">0</text>\n<line class="grid" x1="238.7" y1="16" x2="238.7" y2="474"></line>\n<text class="ax" x="238.7" y="496" text-anchor="middle">20</text>\n<line class="grid" x1="393.5" y1="16" x2="393.5" y2="474"></line>\n<text class="ax" x="393.5" y="496" text-anchor="middle">40</text>\n<line class="grid" x1="548.2" y1="16" x2="548.2" y2="474"></line>\n<text class="ax" x="548.2" y="496" text-anchor="middle">60</text>\n<text class="ax al" x="70" y="43">D1</text>\n<rect class="bar s4f" x="84" y="24" width="169.4" height="13" rx="3"></rect>\n<rect class="bar s1f" x="84" y="41" width="524.5" height="13" rx="3"></rect>\n<text class="lbl mut" x="261.4" y="35">21,9</text>\n<text class="lbl s1t" x="616.5" y="52">67,8</text>\n<text class="ax al" x="70" y="89">D2</text>\n<rect class="bar s4f" x="84" y="70" width="199.6" height="13" rx="3"></rect>\n<rect class="bar s1f" x="84" y="87" width="285.5" height="13" rx="3"></rect>\n<text class="lbl mut" x="291.6" y="81">25,8</text>\n<text class="lbl s1t" x="377.5" y="98">36,9</text>\n<text class="ax al" x="70" y="135">D3</text>\n<rect class="bar s4f" x="84" y="116" width="197.3" height="13" rx="3"></rect>\n<rect class="bar s1f" x="84" y="133" width="229.8" height="13" rx="3"></rect>\n<text class="lbl mut" x="289.3" y="127">25,5</text>\n<text class="lbl s1t" x="321.8" y="144">29,7</text>\n<text class="ax al" x="70" y="181">D4</text>\n<rect class="bar s4f" x="84" y="162" width="203.5" height="13" rx="3"></rect>\n<rect class="bar s1f" x="84" y="179" width="195.7" height="13" rx="3"></rect>\n<text class="lbl mut" x="295.5" y="173">26,3</text>\n<text class="lbl s1t" x="287.7" y="190">25,3</text>\n<text class="ax al" x="70" y="227">D5</text>\n<rect class="bar s4f" x="84" y="208" width="213.5" height="13" rx="3"></rect>\n<rect class="bar s1f" x="84" y="225" width="177.2" height="13" rx="3"></rect>\n<text class="lbl mut" x="305.5" y="219">27,6</text>\n<text class="lbl s1t" x="269.2" y="236">22,9</text>\n<text class="ax al" x="70" y="273">D6</text>\n<rect class="bar s4f" x="84" y="254" width="210.4" height="13" rx="3"></rect>\n<rect class="bar s1f" x="84" y="271" width="171.7" height="13" rx="3"></rect>\n<text class="lbl mut" x="302.4" y="265">27,2</text>\n<text class="lbl s1t" x="263.7" y="282">22,2</text>\n<text class="ax al" x="70" y="319">D7</text>\n<rect class="bar s4f" x="84" y="300" width="219.7" height="13" rx="3"></rect>\n<rect class="bar s1f" x="84" y="317" width="156.3" height="13" rx="3"></rect>\n<text class="lbl mut" x="311.7" y="311">28,4</text>\n<text class="lbl s1t" x="248.3" y="328">20,2</text>\n<text class="ax al" x="70" y="365">D8</text>\n<rect class="bar s4f" x="84" y="346" width="221.3" height="13" rx="3"></rect>\n<rect class="bar s1f" x="84" y="363" width="142.3" height="13" rx="3"></rect>\n<text class="lbl mut" x="313.3" y="357">28,6</text>\n<text class="lbl s1t" x="234.3" y="374">18,4</text>\n<text class="ax al" x="70" y="411">D9</text>\n<rect class="bar s4f" x="84" y="392" width="224.4" height="13" rx="3"></rect>\n<rect class="bar s1f" x="84" y="409" width="127.7" height="13" rx="3"></rect>\n<text class="lbl mut" x="316.4" y="403">29,0</text>\n<text class="lbl s1t" x="219.7" y="420">16,5</text>\n<text class="ax al" x="70" y="457">D10</text>\n<rect class="bar s4f" x="84" y="438" width="177.2" height="13" rx="3"></rect>\n<rect class="bar s1f" x="84" y="455" width="78.1" height="13" rx="3"></rect>\n<text class="lbl mut" x="269.2" y="449">22,9</text>\n<text class="lbl s1t" x="170.1" y="466">10,1</text>\n</svg>',
    sources: ['insee-memes-sources-et-meme-perimetre-que-le-g'],
    vintage: 'à confirmer',
    values: {
      svg: { viewBox: '0 0 720 522', titleId: 'ctauxdec-t', title: '% du revenu primaire élargi, 2023' },
      title: 'Le taux de prélèvement, décomposé',
      subtitle: 'En % du revenu primaire élargi du décile, 2023.',
      caption: '<b>Voilà pourquoi le système paraît plat.</b> Les cotisations forment un plateau presque parfait entre 22 % et 29 % du revenu, avec un décrochage au dernier décile (22,9 %) dû au déplafonnement incomplet. Et les impôts sur la production et la consommation sont <b>massivement régressifs</b> : 67,8 % du revenu primaire au premier décile contre 10,1 % au dernier — un rapport de 1 à 7 en sens inverse du revenu.',
      sources: ['insee-memes-sources-et-meme-perimetre-que-le-g'],
      vintage: '2023',
      legend: [
        { color: 's4', label: 'Cotisations sociales' },
        { color: 's1', label: 'Impôts sur la production et la consommation' },
      ],
      type: 'bar',
      layout: {
        kind: 'bar',
        gridTop: 16,
        gridBottom: 474,
        tickLabelY: 496,
        catLabelX: 70,
        catLabelDy: 19,
        barHeight: 13,
        barPitch: 17,
        groupPitch: 46,
        firstBarY: 24,
        valueLabelDx: 8,
        valueLabelDy: 11,
        valueClasses: ['lbl mut', 'lbl s1t'],
        rx: 3,
      },
      x: ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10'],
      y: { min: 0, max: 60, ticks: [0, 20, 40, 60] },
      series: [
        {
          key: 'b1',
          color: 's4',
          label: 'Cotisations sociales',
          values: [21.896, 25.799, 25.502, 26.303, 27.596, 27.195, 28.397, 28.604, 29.005, 22.904],
          decimals: 1,
        },
        {
          key: 'b2',
          color: 's1',
          label: 'Impôts sur la production et la consommation',
          values: [67.794, 36.902, 29.703, 25.295, 22.904, 22.193, 20.202, 18.393, 16.506, 10.095],
          decimals: 1,
        },
      ],
      frame: { width: 720, height: 522, left: 84, right: 548.2004145336175, top: 16, bottom: 474 },
    },
  },
  'les-prestations-sociales-par-risque': {
    svg: { viewBox: '0 0 720 242', titleId: 'cpresta-t', title: 'milliards d\'euros, 2024' },
    title: 'Les prestations sociales par risque',
    subtitle: 'France, 2024, en milliards d\'euros. Deux risques font 82 % du total.',
    caption: '<b>Vieillesse et santé pèsent 765,6 Md€ sur 932,5.</b> Les postes qui occupent le débat public — RSA, chômage, logement — représentent ensemble <b>101,2 Md€, soit 10,9 % du total</b>. Toute économie substantielle sur la protection sociale passe nécessairement par les retraites ou par la santé.',
    sources: ['drees-drees-la-protection-sociale-en-france-e'],
    vintage: '2024',
    type: 'bar',
    layout: {
      kind: 'bar',
      gridTop: 16,
      gridBottom: 194,
      tickLabelY: 216,
      catLabelX: 218,
      catLabelDy: 10,
      barHeight: 12,
      barPitch: 15,
      groupPitch: 30,
      firstBarY: 22,
      valueLabelDx: 7,
      valueLabelDy: 10,
      valueClasses: ['lbl s1t'],
      rx: 3,
    },
    x: [
      'Vieillesse et survie', 'Santé (maladie, invalidité, AT-MP)', 'Famille',
      'Emploi et chômage', 'Pauvreté et exclusion', 'Logement',
    ],
    y: { min: 0, max: 400, ticks: [0, 200, 400] },
    series: [
      {
        key: 'b1',
        color: 's1',
        values: [426.667, 338.903, 65.823, 51.083, 33.98, 16.09],
        decimals: 1,
      },
    ],
    frame: { width: 720, height: 242, left: 232, right: 587.5, top: 16, bottom: 194 },
  },
  'prestations-sociales-rapportees-au-pib': {
    svg: {
      viewBox: '0 0 720 212',
      titleId: 'cprestapib-t',
      title: 'prestations sociales, % du PIB, 2024',
    },
    title: 'Prestations sociales rapportées au PIB',
    subtitle: '2024. La France est deuxième de l\'Union.',
    sources: ['eurostat-drees-eurostat-base-sespros-donnees'],
    vintage: '2024',
    type: 'bar',
    layout: {
      kind: 'bar',
      gridTop: 16,
      gridBottom: 164,
      tickLabelY: 186,
      catLabelX: 116,
      catLabelDy: 10,
      barHeight: 12,
      barPitch: 15,
      groupPitch: 30,
      firstBarY: 22,
      valueLabelDx: 7,
      valueLabelDy: 10,
      valueClasses: ['lbl s1t'],
      rx: 3,
    },
    x: ['Finlande', 'France', 'Allemagne', 'Italie', 'UE-27'],
    y: { min: 0, max: 30, ticks: [0, 10, 20, 30] },
    series: [
      { key: 'b1', color: 's1', values: [32.502, 31.9, 29.802, 28.298, 27.3], decimals: 1 },
    ],
    frame: { width: 720, height: 212, left: 130, right: 568.8992995750888, top: 16, bottom: 164 },
  },
  'les-memes-prestations-par-habitant-en-parite-de-pouvoir-d': {
    raw: true,
    title: 'Les mêmes prestations, par habitant en parité de pouvoir d\'achat',
    subtitle: '2024. Le classement s\'inverse.',
    caption: '<b>La France est 2<sup>e</sup> de l\'UE en part du PIB mais derrière l\'Allemagne par habitant</b> — 13 620 € contre 16 000 €, soit 15 % de moins. L\'Allemagne dépense <b>moins en part de richesse</b> et <b>nettement plus par personne</b>, parce que son PIB par habitant est plus élevé. Dire « la France est championne des dépenses sociales » est vrai en % du PIB et faux en niveau de protection servi par habitant. <b>Le % du PIB mesure autant la faiblesse du dénominateur que la générosité du numérateur.</b>',
    svg: '<svg viewBox="0 0 720 182" class="cv" role="img" aria-labelledby="cprestahab-t">\n<title id="cprestahab-t">prestations sociales, euros PPA par habitant, 2024</title>\n<line class="grid" x1="130.0" y1="16" x2="130.0" y2="134"></line>\n<text class="ax" x="130.0" y="156" text-anchor="middle">0</text>\n<line class="grid" x1="278.6" y1="16" x2="278.6" y2="134"></line>\n<text class="ax" x="278.6" y="156" text-anchor="middle">5 000</text>\n<line class="grid" x1="427.2" y1="16" x2="427.2" y2="134"></line>\n<text class="ax" x="427.2" y="156" text-anchor="middle">10 000</text>\n<line class="grid" x1="575.8" y1="16" x2="575.8" y2="134"></line>\n<text class="ax" x="575.8" y="156" text-anchor="middle">15 000</text>\n<text class="ax al" x="116" y="32">Allemagne</text>\n<rect class="bar s4f" x="130" y="22" width="475.5" height="12" rx="3"></rect>\n<text class="lbl s4t" x="612.5" y="32">16 000</text>\n<text class="ax al" x="116" y="62">France</text>\n<rect class="bar s4f" x="130" y="52" width="404.7" height="12" rx="3"></rect>\n<text class="lbl s4t" x="541.7" y="62">13 620</text>\n<text class="ax al" x="116" y="92">UE-27</text>\n<rect class="bar s4f" x="130" y="82" width="362.2" height="12" rx="3"></rect>\n<text class="lbl s4t" x="499.2" y="92">12 190</text>\n<text class="ax al" x="116" y="122">Italie</text>\n<rect class="bar s4f" x="130" y="112" width="358.3" height="12" rx="3"></rect>\n<text class="lbl s4t" x="495.3" y="122">12 056</text>\n</svg>',
    sources: ['eurostat-drees-eurostat-base-sespros-donnees-2'],
    vintage: 'à confirmer',
    values: {
      svg: {
        viewBox: '0 0 720 182',
        titleId: 'cprestahab-t',
        title: 'prestations sociales, euros PPA par habitant, 2024',
      },
      title: 'Les mêmes prestations, par habitant en parité de pouvoir d\'achat',
      subtitle: '2024. Le classement s\'inverse.',
      caption: '<b>La France est 2<sup>e</sup> de l\'UE en part du PIB mais derrière l\'Allemagne par habitant</b> — 13 620 € contre 16 000 €, soit 15 % de moins. L\'Allemagne dépense <b>moins en part de richesse</b> et <b>nettement plus par personne</b>, parce que son PIB par habitant est plus élevé. Dire « la France est championne des dépenses sociales » est vrai en % du PIB et faux en niveau de protection servi par habitant. <b>Le % du PIB mesure autant la faiblesse du dénominateur que la générosité du numérateur.</b>',
      sources: ['eurostat-drees-eurostat-base-sespros-donnees-2'],
      vintage: '2024',
      type: 'bar',
      layout: {
        kind: 'bar',
        gridTop: 16,
        gridBottom: 134,
        tickLabelY: 156,
        catLabelX: 116,
        catLabelDy: 10,
        barHeight: 12,
        barPitch: 15,
        groupPitch: 30,
        firstBarY: 22,
        valueLabelDx: 7,
        valueLabelDy: 10,
        valueClasses: ['lbl s4t'],
        rx: 3,
      },
      x: ['Allemagne', 'France', 'UE-27', 'Italie'],
      y: { min: 0, max: 15000, ticks: [0, 5000, 10000, 15000] },
      series: [
        { key: 'b1', color: 's4', values: [16000, 13620, 12190, 12055.855], decimals: 0 },
      ],
      frame: { width: 720, height: 182, left: 130, right: 575.8, top: 16, bottom: 134 },
    },
  },
  'd-ou-viennent-les-1-323-md-de-prelevements': {
    svg: { viewBox: '0 0 720 360', titleId: 'cassiette-t', title: 'prélèvements par assiette, 2024' },
    title: 'D’où viennent les 1 323 Md€ de prélèvements',
    subtitle: 'En milliards d’euros, 2024. Les lignes publiées par Eurostat, regroupées par ce qu’elles taxent. Ce sont des masses nationales : ni par habitant, ni par ménage, ni par foyer fiscal.',
    caption: '<b>Le premier bloc est le travail, et de loin.</b> Les cotisations sociales pèsent à elles seules <b>482,3 Md€, soit 36 % de tout ce que prélève la France</b> — davantage que la TVA et l’impôt sur les sociétés réunis. Et le bloc « revenus des ménages » en contient une part supplémentaire : il agrège l’impôt sur le revenu au barème et la <b>CSG</b>, prélevée à la source sur les salaires. <b>L’impôt sur le revenu au barème — celui qui a des tranches, un formulaire et un quotient familial — ne représente que 92 Md€, soit 7 % du total.</b> Le premier impôt sur le revenu du pays est celui dont personne ne parle.',
    sources: ['eurostat-eurostat-gov-10a-taxag-secteurs-s13-s1'],
    vintage: '2024',
    caveat: 'Le regroupement par assiette est notre reconstruction : Eurostat publie les huit lignes, pas les sept blocs. La CSG n’est pas isolable en source primaire — elle reste ici dans « revenus des ménages », alors qu’elle est très majoritairement assise sur des salaires : la part réellement portée par le travail est donc supérieure aux 36 % du premier bloc.',
    type: 'bar',
    layout: {
      kind: 'bar',
      gridTop: 16,
      gridBottom: 300,
      tickLabelY: 322,
      catLabelX: 236,
      catLabelDy: 13,
      barHeight: 18,
      barPitch: 0,
      groupPitch: 38,
      firstBarY: 26,
      valueLabelDx: 7,
      valueLabelDy: 13,
      valueClasses: ['lbl s1t'],
      rx: 3,
    },
    x: [
      'Travail (cotisations)', 'Revenus des ménages', 'Consommation (TVA, accises)',
      'Production', 'Bénéfices des sociétés', 'Autres', 'Transmission du patrimoine',
    ],
    y: { min: 0, max: 500, ticks: [0, 100, 200, 300, 400, 500] },
    series: [
      {
        key: 'assiette',
        color: 's1',
        values: [482.3, 275.1, 265.4, 129, 83.8, 66.4, 21.5],
        decimals: 1,
      },
    ],
    frame: { width: 720, height: 360, left: 250, right: 660, top: 16, bottom: 300 },
  },
  'sur-100-de-cout-employeur-ce-qui-est-preleve': {
    svg: { viewBox: '0 0 720 330', titleId: 'ccoin-t', title: 'coin fiscalo-social, 2025' },
    title: 'Sur 100 € de coût employeur, ce qui est prélevé',
    subtitle: 'Célibataire sans enfant au salaire moyen, 2025. La longueur totale est le prélèvement ; les couleurs disent sur quoi il est assis. Unité de compte : <b>un salarié</b>, pas un ménage ni un foyer fiscal.',
    caption: '<b>Le total français n’est pas le plus élevé — sa composition, oui.</b> La France prélève 47,2 € sur 100, moins que la Belgique et l’Allemagne. Mais <b>26,7 € passent par les cotisations patronales, le taux le plus élevé de l’OCDE et le double de la moyenne (13,5 €)</b>, quand l’impôt sur le revenu n’en prend que 12,2 — avant-dernier rang du panel de comparaison. <b>Le Danemark est le contre-exemple qui tranche</b> : 0,7 € de cotisations patronales, aucune cotisation salariale, 35,1 € d’impôt sur le revenu, pour un prélèvement total inférieur de 11 points au français et une protection sociale d’ampleur comparable. <b>Il n’existe donc aucun lien nécessaire entre le niveau de protection sociale et le niveau des charges assises sur les salaires : c’est un choix de plomberie, pas une contrainte.</b>',
    sources: ['eurostat-ocde-taxing-wages-2026-donnees-2025'],
    vintage: '2025',
    caveat: 'La moyenne OCDE se reconstitue à 35,0 quand l’indicateur publié vaut 35,1 : l’écart est un arrondi des trois composantes, pas une divergence de mesure. Le coin fiscalo-social s’arrête au revenu net disponible — il n’inclut ni la TVA, ni les impôts sur le patrimoine, ni l’impôt sur les sociétés.',
    legend: [
      { color: 's1', label: 'Cotisations patronales' },
      { color: 's4', label: 'Cotisations salariales' },
      { color: 's5', label: 'Impôt sur le revenu' },
    ],
    type: 'stacked-bar',
    layout: {
      kind: 'bar',
      gridTop: 16,
      gridBottom: 270,
      tickLabelY: 292,
      catLabelX: 196,
      catLabelDy: 15,
      barHeight: 22,
      barPitch: 0,
      groupPitch: 40,
      firstBarY: 28,
      valueLabelDx: 7,
      valueLabelDy: 15,
      valueClasses: ['lbl', 'lbl', 'lbl'],
      rx: 2,
      stacked: true,
    },
    x: ['Belgique', 'Allemagne', 'France', 'Danemark', 'Moyenne OCDE', 'États-Unis'],
    y: { min: 0, max: 60, ticks: [0, 10, 20, 30, 40, 50, 60] },
    series: [
      {
        key: 'patronales',
        color: 's1',
        label: 'Cotisations patronales',
        values: [21.4, 17.3, 26.7, 0.7, 13.5, 7.5],
        decimals: 1,
      },
      {
        key: 'salariales',
        color: 's4',
        label: 'Cotisations salariales',
        values: [11, 17.8, 8.3, 0, 8.1, 7.1],
        decimals: 1,
      },
      {
        key: 'impot',
        color: 's5',
        label: 'Impôt sur le revenu',
        values: [20.1, 14.2, 12.2, 35.1, 13.4, 15.4],
        decimals: 1,
      },
    ],
    frame: { width: 720, height: 330, left: 210, right: 650, top: 16, bottom: 270 },
  },
  'ce-que-chaque-pays-preleve-en-part-de-sa-richesse': {
    svg: { viewBox: '0 0 720 380', titleId: 'cpo-t', title: 'prélèvements obligatoires, 2025' },
    title: 'Ce que chaque pays prélève, en part de sa richesse',
    subtitle: 'Impôts et cotisations sociales, toutes administrations confondues, en % du PIB, 2025. Le dénominateur est la richesse produite : ce n’est ni un montant par habitant, ni par ménage.',
    caption: '<b>La France est deuxième de l’Union, à un demi-point du Danemark.</b> Mais le classement dit seulement <em>combien</em>, pas <em>sur quoi</em> — et c’est là que les modèles divergent radicalement. Le Danemark prélève presque autant que la France en n’ayant quasiment <b>aucune cotisation sociale</b> : il finance sa protection sociale par l’impôt sur le revenu. L’Allemagne prélève 4,4 points de moins au total, mais <b>davantage sur un salaire</b> — 49,3 € contre 47,2 € sur 100 € de coût employeur. <b>Deux pays au même niveau de prélèvement peuvent donc taxer des choses entièrement différentes</b>, et c’est ce que le seul taux de prélèvements obligatoires ne dit jamais.',
    sources: ['eurostat-taux-de-prelevements-obligatoires-2025'],
    vintage: '2025',
    caveat: 'Deux mesures coexistent pour la France et il ne faut jamais les mélanger : <b>43,6 %</b> en méthodologie française, <b>45,3 %</b> en méthodologie européenne — c’est cette dernière qui figure ici, la seule comparable entre pays. L’écart tient au traitement des crédits d’impôt et des cotisations imputées.',
    legend: [
      { color: 's1', label: 'France' },
      { color: 's4', label: 'Autres pays et moyenne européenne' },
    ],
    type: 'bar',
    layout: {
      kind: 'bar',
      gridTop: 16,
      gridBottom: 320,
      tickLabelY: 342,
      catLabelX: 176,
      catLabelDy: 13,
      barHeight: 18,
      barPitch: 0,
      groupPitch: 37,
      firstBarY: 26,
      valueLabelDx: 7,
      valueLabelDy: 13,
      valueClasses: ['lbl mut', 'lbl s1t'],
      rx: 3,
    },
    x: ['Danemark', 'France', 'Belgique', 'Autriche', 'Italie', 'Allemagne', 'UE-27', 'Espagne'],
    y: { min: 0, max: 50, ticks: [0, 10, 20, 30, 40, 50] },
    series: [
      {
        key: 'autres',
        color: 's4',
        label: 'Autres pays et moyenne européenne',
        values: [45.8, null, 45.1, 43.8, 42.6, 40.9, 40.4, 37.3],
        decimals: 1,
      },
      {
        key: 'france',
        color: 's1',
        label: 'France',
        values: [null, 45.3, null, null, null, null, null, null],
        decimals: 1,
      },
    ],
    frame: { width: 720, height: 380, left: 190, right: 660, top: 16, bottom: 320 },
  },
} satisfies SeriesSet

/** Fiches du chapitre, dans l'ordre : alimente le rail et la recherche. */
export const questions = [
  {
    id: 's1-q1',
    title: 'Sur 100 € dépensés par les administrations publiques, où va l\'argent — et comment se compare-t-on ?',
  },
  {
    id: 's1-q2',
    title: 'Le paradoxe le plus déroutant du tableau : l\'Allemagne dépense-t-elle plus que la France pour sa protection sociale ?',
  },
  { id: 's1-q3', title: 'Ces 1 672 Md€ incluent-ils la fonction publique territoriale ?' },
  { id: 's1-q4', title: 'Santé, éducation : deux écarts qui ne mesurent pas ce qu\'on croit' },
  { id: 's1-q5', title: 'Que recouvre exactement la fonction « affaires économiques » ?' },
  { id: 's1-q6', title: 'Que se passe-t-il si on isole la charge de la dette ?' },
  { id: 's1-q7', title: 'Quels pays dépensent le plus — en % du PIB, puis par habitant ?' },
  { id: 's1-q8', title: 'Le dénominateur : où en est le PIB par habitant français ?' },
  { id: 's1-q9', title: 'Pourquoi le PIB par habitant français décroche-t-il ? La décomposition' },
  { id: 's1-q10', title: 'Et si on rapportait le PIB aux seules personnes d\'âge actif ?' },
  {
    id: 's1-q11',
    title: 'Et si on utilisait l\'âge de départ à la retraite propre à chaque pays ?',
  },
  {
    id: 's1-q12',
    title: 'Recettes contre dépenses : le déficit vient-il d\'un sous-prélèvement ?',
  },
  {
    id: 's1-q13',
    title: 'Pourquoi les dépenses ont-elles bondi en 2008-2009, et pourquoi ne sont-elles jamais redescendues ?',
  },
  { id: 's1-q14', title: 'Combien la France prélève-t-elle ?' },
  {
    id: 's1-q15',
    title: 'Quelle différence entre impôts, cotisations sociales, CSG et cotisations patronales ?',
  },
  {
    id: 's1-q16',
    title: 'D\'où vient l\'argent public ? Budget de l\'État et prélèvements obligatoires',
  },
  { id: 's1-q17', title: 'Que sont exactement les « cotisations sociales nettes » ?' },
  { id: 's1-q18', title: 'Pour 100 € de coût employeur, que reste-t-il vraiment au salarié ?' },
  {
    id: 's1-q19',
    title: 'Le même calcul avec les États-Unis, au SMIC et au sommet — et les hypothèses en clair',
  },
  {
    id: 's1-q20',
    title: 'La consommation : quels taux de TVA, et quel taux réellement supporté ?',
  },
  { id: 's1-q21', title: 'Qui paie réellement les prélèvements ?' },
  { id: 's1-q22', title: 'Combien chaque décile paie-t-il, en taux et en milliards ?' },
  { id: 's1-q23', title: 'La TVA est-elle régressive ?' },
  {
    id: 's1-q24',
    title: '« Les bénéfices d\'une société n\'appartiennent pas à ses actionnaires » — l\'objection est juste, et elle ne clôt pas le débat',
  },
  { id: 's1-q25', title: 'Qui bénéficie de la redistribution, et de combien ?' },
  {
    id: 's1-q26',
    title: 'Les prestations sociales, poste par poste : retraites, santé, chômage, RSA',
  },
  {
    id: 's1-q27',
    title: 'Que rapporterait la « taxe Zucman », et qu’est-ce que ça couvre du déficit ?',
  },
] satisfies readonly { id: string; title: string }[]

/**
 * Sources citées dans le texte du chapitre, en plus de celles portées par les
 * tableaux et les figures. La bibliographie les recense aussi : une source
 * citée en prose reste une source du dossier.
 */
export const citedSources = [
  'b-boutchenik-b-boutchenik-les-effets-redistributifs',
  'banque-mondiale-banque-mondiale-ny-gdp-pcap-pp-kd-doll',
  'bercy-pre-rapport-juin-2025-impot-plancher',
  'code-de-commerce-code-de-commerce-art-l-241-3-et-l-24',
  'collectif-trop-c-est-trop-taxe-zucman', 'dgfip-dgfip-statistiques-n-41-novembre-2025',
  'drees-drees-comptes-de-la-protection-sociale',
  'eurostat-eurostat-earn-nt-net-chaine-complete-en',
  'eurostat-eurostat-gov-10a-exp-s13-te-mio-eur',
  'eurostat-eurostat-gov-10a-exp-sector-s13-na-ite',
  'eurostat-eurostat-gov-10a-exp-sous-fonction-cofo',
  'eurostat-eurostat-gov-10a-exp-sous-fonctions-cof', 'eurostat-eurostat-gov-10a-main-2025',
  'eurostat-eurostat-gov-10a-main-et-gov-10a-exp-i',
  'eurostat-eurostat-gov-10a-main-et-nama-10-pc-202',
  'eurostat-eurostat-gov-10a-main-par-sous-secteur',
  'eurostat-eurostat-gov-10a-taxag-d211-et-nama-10',
  'eurostat-eurostat-gov-10a-taxag-secteurs-s13-s1',
  'eurostat-eurostat-hlth-sha11-hf-et-hlth-sha11-hc',
  'eurostat-eurostat-nama-10-pc-nama-10-lp-ulc-nlp',
  'eurostat-insee-definition-des-cotisations-social',
  'eurostat-ipp-quels-impots-les-milliardaires-pa',
  'eurostat-maddison-project-database-via-our-world',
  'eurostat-ocde-panorama-des-pensions-2025-via-l',
  'eurostat-ocde-taxing-wages-2026-donnees-2025',
  'eurostat-structure-des-prelevements-france-allemagne',
  'insee-insee-analyses-n-118-et-119-revenus-de',
  'insee-insee-france-portrait-social-2025-fic', 'parlement-taxe-zucman-votes-2025-2026',
  'tribune-sept-economistes-le-monde-taxe-zucman', 'zucman-impot-plancher-ultra-riches',
] satisfies readonly SourceId[]
