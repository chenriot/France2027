// Généré par `npm run extract` depuis Temp/chiffres2027 (3).html.
// Toutes les données chiffrées du chapitre vivent ici, chacune sous sa source
// et son millésime. Voir CLAUDE.md, règles 2 à 4.
import type { ChapterMeta, SeriesSet, SourceId, Tables } from '@/lib/types'

export const meta = {
  slug: 'ecologie-climat',
  num: 'Thème 08',
  title: 'Écologie et climat',
  shortTitle: 'Écologie et climat',
  note: 'Les émissions baissent, mais deux fois moins vite qu\'il ne faudrait. Et rapportées à la population — la bonne façon de lire —, l\'effort est bien plus important qu\'il n\'y paraît.',
  status: 'complete',
  updated: '2026-08',
  legacyAnchor: 's8',
} satisfies ChapterMeta

export const tables = {
  item: {
    vintage: '2024',
    sources: ['eurostat-sdg-13-10', 'eurostat-sdg-13-10-2'],
    columns: [
      { key: 'c1', header: '', type: 'text', headerNumeric: false },
      { key: '1990', header: '1990', type: 'number', headerNumeric: true },
      { key: '2024', header: '2024', type: 'number', headerNumeric: true },
      { key: 'variation', header: 'Variation', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Émissions totales' },
          { v: 546.9, d: 1, u: 'Mt' },
          { v: 367, d: 1, u: 'Mt' },
          { v: -32.9, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Population' },
          { v: 58.17, d: 2, u: 'M' },
          { v: 68.78, d: 2, u: 'M' },
          { v: 18.2, d: 1, u: '%', sign: true },
        ],
      },
      {
        cells: [
          { t: 'Émissions par habitant' },
          { v: 9.4, d: 1, u: 't' },
          { v: 5.3, d: 1, u: 't' },
          { v: -43.6, d: 1, u: '%' },
        ],
        emphasis: true,
      },
    ],
  },
  secteur: {
    vintage: '2024',
    sources: ['eurostat-env-air-gge'],
    columns: [
      { key: 'secteur', header: 'Secteur', type: 'text', headerNumeric: false },
      { key: '1990', header: '1990', type: 'number', headerNumeric: true },
      { key: '2024', header: '2024', type: 'number', headerNumeric: true },
      { key: 'absolu', header: 'Δ absolu', type: 'number', headerNumeric: true },
      { key: 'c5', header: 'Δ %', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Industrie manufacturière et construction' },
          { v: 140.1, d: 1 },
          { v: 61.6, d: 1 },
          { v: -78.5, d: 1 },
          { v: -56, d: 1, u: '%' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Industrie de l\'énergie' },
          { v: 78.9, d: 1 },
          { v: 31.2, d: 1 },
          { v: -47.7, d: 1 },
          { v: -60.5, d: 1, u: '%' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Bâtiments (résidentiel-tertiaire)' },
          { v: 92.9, d: 1 },
          { v: 56.1, d: 1 },
          { v: -36.8, d: 1 },
          { v: -39.6, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Agriculture et sylviculture' },
          { v: 92.9, d: 1 },
          { v: 77.5, d: 1 },
          { v: -15.4, d: 1 },
          { v: -16.6, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Traitement des déchets' },
          { v: 16.7, d: 1 },
          { v: 15.3, d: 1 },
          { v: -1.4, d: 1 },
          { v: -8.4, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Transports' },
          { v: 125.4, d: 1 },
          { v: 125.4, d: 1 },
          { v: 0, d: 1 },
          { v: 0, d: 1, u: '%' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Total' },
          { v: 546.9, d: 1 },
          { v: 367.1, d: 1 },
          { v: -179.8, d: 1 },
          { v: -32.9, d: 1, u: '%' },
        ],
        total: true,
      },
    ],
  },
  france: {
    vintage: '2024',
    sources: ['sdes-sdes-l-empreinte-carbone-de-la-france-d'],
    columns: [
      { key: 'france', header: 'France', type: 'text', headerNumeric: false },
      { key: '1990', header: '1990', type: 'number', headerNumeric: true },
      { key: '2024', header: '2024', type: 'number', headerNumeric: true },
      { key: 'evolution', header: 'Évolution', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Émissions territoriales, MtCO₂e' },
          { v: 546.5, d: 1 },
          { v: 367, d: 1 },
          { v: -34.3, d: 1, u: '%', strong: true },
        ],
      },
      {
        cells: [
          { t: 'Empreinte carbone, MtCO₂e' },
          { v: 703, d: 0, approx: true },
          { v: 563, d: 0 },
          { v: -20, d: 0, u: '%', strong: true },
        ],
      },
      {
        cells: [
          { t: 'Territoriales par habitant, t' },
          { v: 9.4, d: 1, approx: true },
          { v: 5.4, d: 1 },
          { v: -42, d: 0, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Empreinte par habitant, t' },
          { v: 12.1, d: 1 },
          { v: 8.2, d: 1 },
          { v: -32, d: 0, u: '%', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Écart empreinte / territorial' },
          { v: 29, d: 0, u: '%', sign: true },
          { v: 53, d: 0, u: '%', sign: true, strong: true },
          { t: 'l\'écart se creuse' },
        ],
        separator: true,
      },
    ],
  },
  'france-tco-par-habitant': {
    vintage: '2024',
    sources: [
      'eurostat-emissions-territoriales-citepa-euros',
      'our-world-in-data-our-world-in-data-d-apres-le-global-carb',
    ],
    columns: [
      {
        key: 'france-tco-par-habitant',
        header: 'France, tCO₂ par habitant',
        type: 'text',
        headerNumeric: false,
      },
      { key: '1990', header: '1990', type: 'number', headerNumeric: true },
      { key: '2000', header: '2000', type: 'number', headerNumeric: true },
      { key: '2010', header: '2010', type: 'number', headerNumeric: true },
      { key: '2019', header: '2019', type: 'number', headerNumeric: true },
      { key: '2023', header: '2023', type: 'number', headerNumeric: true },
      { key: '2024', header: '2024', type: 'number', headerNumeric: true },
      { key: '1990-2023', header: '1990 → 2023', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Émissions sur le territoire' },
          { v: 6.93, d: 2 },
          { v: 6.85, d: 2 },
          { v: 5.95, d: 2 },
          { v: 4.81, d: 2 },
          { v: 4.07, d: 2 },
          { v: 3.97, d: 2 },
          { v: -41, d: 0, u: '%', strong: true },
        ],
      },
      {
        cells: [
          { t: '<b>Empreinte, importations incluses</b>' },
          { v: 8.52, d: 2 },
          { v: 8.63, d: 2 },
          { v: 8.06, d: 2 },
          { v: 6.73, d: 2 },
          { v: 6.13, d: 2 },
          { t: 'n.d.' },
          { v: -28, d: 0, u: '%', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<em>Carbone importé net, en % du territorial</em>' },
          { v: 23, d: 0, u: '%', sign: true },
          { v: 26, d: 0, u: '%', sign: true },
          { v: 35, d: 0, u: '%', sign: true },
          { v: 40, d: 0, u: '%', sign: true },
          { v: 51, d: 0, u: '%', sign: true },
          { t: 'n.d.' },
          { t: 'a doublé' },
        ],
      },
    ],
  },
  '2023-tco-par-habitant': {
    vintage: '2023',
    sources: [
      'our-world-in-data-global-carbon-budget-emissions-territor',
      'our-world-in-data-global-carbon-budget-emissions-de-co-l',
      'our-world-in-data-our-world-in-data-d-apres-le-global-carb-2',
    ],
    columns: [
      {
        key: '2023-tco-par-habitant',
        header: '2023, tCO₂ par habitant',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'territorial', header: 'Territorial', type: 'number', headerNumeric: true },
      { key: 'rang', header: 'Rang', type: 'number', headerNumeric: true },
      { key: 'empreinte', header: 'Empreinte', type: 'number', headerNumeric: true },
      { key: 'rang', header: 'Rang', type: 'number', headerNumeric: true },
      { key: 'solde-net-importe', header: 'Solde net importé', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'États-Unis' },
          { v: 14.32, d: 2 },
          { v: 1, d: 0 },
          { v: 15.81, d: 2 },
          { v: 1, d: 0 },
          { v: 10.4, d: 1, u: '%', sign: true },
        ],
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 7.02, d: 2 },
          { v: 4, d: 0 },
          { v: 9.09, d: 2 },
          { v: 2, d: 0 },
          { v: 29.4, d: 1, u: '%', sign: true },
        ],
      },
      {
        cells: [
          { t: 'Pays-Bas' },
          { v: 6.47, d: 2 },
          { v: 5, d: 0 },
          { v: 8.3, d: 2 },
          { v: 3, d: 0 },
          { v: 28.3, d: 1, u: '%', sign: true },
        ],
      },
      {
        cells: [
          { t: 'Chine' },
          { v: 8.56, d: 2 },
          { v: 2, d: 0 },
          { v: 7.63, d: 2 },
          { v: 4, d: 0 },
          { v: -10.8, d: 1, u: '%', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'UE-27' },
          { v: 5.51, d: 2 },
          { v: 6, d: 0 },
          { v: 7.33, d: 2 },
          { v: 5, d: 0 },
          { v: 32.9, d: 1, u: '%', sign: true },
        ],
      },
      {
        cells: [
          { t: 'Italie' },
          { v: 5.25, d: 2 },
          { v: 7, d: 0 },
          { v: 7.21, d: 2 },
          { v: 6, d: 0 },
          { v: 37.4, d: 1, u: '%', sign: true },
        ],
      },
      {
        cells: [
          { t: 'Royaume-Uni' },
          { v: 4.48, d: 2 },
          { v: 10, d: 0 },
          { v: 7.09, d: 2 },
          { v: 7, d: 0 },
          { v: 58.2, d: 1, u: '%', sign: true, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Pologne' },
          { v: 7.31, d: 2 },
          { v: 3, d: 0 },
          { v: 7.06, d: 2 },
          { v: 8, d: 0 },
          { v: -3.3, d: 1, u: '%' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>France</b>' },
          { v: 4.07, d: 2, strong: true },
          { v: 11, d: 0 },
          { v: 6.13, d: 2, strong: true },
          { v: 9, d: 0 },
          { v: 50.7, d: 1, u: '%', sign: true, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Suède' },
          { v: 3.48, d: 2 },
          { v: 12, d: 0 },
          { v: 5.85, d: 2 },
          { v: 10, d: 0 },
          { v: 68.1, d: 1, u: '%', sign: true },
        ],
      },
      {
        cells: [
          { t: 'Espagne' },
          { v: 4.5, d: 2 },
          { v: 9, d: 0 },
          { v: 5.44, d: 2 },
          { v: 11, d: 0 },
          { v: 21, d: 1, u: '%', sign: true },
        ],
      },
      {
        cells: [
          { t: 'Inde' },
          { v: 2.13, d: 2 },
          { v: 13, d: 0 },
          { v: 1.77, d: 2 },
          { v: 13, d: 0 },
          { v: -17, d: 1, u: '%' },
        ],
      },
    ],
  },
  pays: {
    vintage: '2024',
    sources: ['eurostat-env-air-gge-2'],
    columns: [
      { key: 'pays', header: 'Pays', type: 'text', headerNumeric: false },
      { key: '1990-mt', header: '1990 (Mt)', type: 'number', headerNumeric: true },
      { key: '2024-mt', header: '2024 (Mt)', type: 'number', headerNumeric: true },
      { key: 'c4', header: 'Δ %', type: 'number', headerNumeric: true },
      { key: '1990-t-hab', header: '1990 (t/hab)', type: 'number', headerNumeric: true },
      { key: '2024-t-hab', header: '2024 (t/hab)', type: 'number', headerNumeric: true },
      { key: 'hab', header: 'Δ % /hab', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Royaume-Uni' },
          { v: 784, d: 0 },
          { v: 390, d: 0 },
          { v: -50.2, d: 1, u: '%' },
          { v: 13.67, d: 2 },
          { v: 5.64, d: 2 },
          { v: -58.7, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 1261, d: 0 },
          { v: 660, d: 0 },
          { v: -47.7, d: 1, u: '%' },
          { v: 15.82, d: 2 },
          { v: 7.8, d: 2 },
          { v: -50.7, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'France' },
          { v: 585, d: 0 },
          { v: 338, d: 0 },
          { v: -42.2, d: 1, u: '%' },
          { v: 10.26, d: 2 },
          { v: 5.08, d: 2 },
          { v: -50.5, d: 1, u: '%' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Italie' },
          { v: 501, d: 0 },
          { v: 356, d: 0 },
          { v: -29, d: 1, u: '%' },
          { v: 8.79, d: 2 },
          { v: 6, d: 2 },
          { v: -31.8, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'États-Unis' },
          { v: 6489, d: 0 },
          { v: 6054, d: 0 },
          { v: -6.7, d: 1, u: '%' },
          { v: 25.61, d: 2 },
          { v: 17.53, d: 2 },
          { v: -31.6, d: 1, u: '%' },
        ],
        emphasis: true,
      },
    ],
  },
  'empreinte-par-habitant-co-seul': {
    vintage: '2023',
    sources: ['eurostat-env-air-gge-2'],
    columns: [
      {
        key: 'empreinte-par-habitant-co-seul',
        header: 'Empreinte par habitant (CO₂ seul)',
        type: 'text',
        headerNumeric: false,
      },
      { key: '1990', header: '1990', type: 'number', headerNumeric: true },
      { key: '2023', header: '2023', type: 'number', headerNumeric: true },
      { key: 'c4', header: 'Δ %', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'États-Unis' },
          { v: 19.94, d: 2 },
          { v: 15.81, d: 2 },
          { v: -20.7, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 15.06, d: 2 },
          { v: 9.09, d: 2 },
          { v: -39.6, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Italie' },
          { v: 9.81, d: 2 },
          { v: 7.21, d: 2 },
          { v: -26.5, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Royaume-Uni' },
          { v: 11.61, d: 2 },
          { v: 7.09, d: 2 },
          { v: -38.9, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'France' },
          { v: 8.52, d: 2 },
          { v: 6.13, d: 2 },
          { v: -28, d: 1, u: '%' },
        ],
        emphasis: true,
      },
    ],
  },
  dispositif: {
    vintage: '2024',
    sources: ['cour-des-comptes-direction-generale-du-tresor-outil-co'],
    columns: [
      { key: 'dispositif', header: 'Dispositif', type: 'text', headerNumeric: false },
      { key: 'par-tonne-evitee', header: '€ par tonne évitée', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Bonus véhicule électrique, citadine légère, gros rouleur' },
          { v: -189, d: 0, u: '(rentable)' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Pompe à chaleur remplaçant une chaudière fioul (DPE F)' },
          { v: -129, d: 0, u: '(rentable)' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Utilitaire léger électrique, gros rouleur' },
          { v: -90, d: 0, u: '(rentable)' },
        ],
      },
      {
        cells: [
          { t: 'Efficacité énergétique dans la chimie' },
          { v: -26, d: 0, u: '(rentable)' },
        ],
      },
      {
        cells: [
          { t: 'Capture de carbone, cimenterie' },
          { v: 40, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Pompe à chaleur remplaçant une chaudière gaz' },
          { v: 60, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Acier bas-carbone' },
          { v: 70, d: 0 },
        ],
      },
      {
        cells: [
          { t: '<em>Repère : quota carbone européen (2026)</em>' },
          { t: '<em>≈ 83</em>' },
        ],
        total: true,
      },
      {
        cells: [
          { t: 'MaPrimeRénov\', rénovation globale (DPE F)' },
          { v: 135, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Bonus VE, citadine standard, rouleur moyen' },
          { v: 345, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'MaPrimeRénov\', mono-geste isolation' },
          { v: 719, d: 0 },
        ],
        emphasis: true,
      },
    ],
  },
  'dispositif-2': {
    vintage: '2025',
    sources: ['france-strategie-direction-generale-du-tresor-et-dgec-le'],
    columns: [
      { key: 'dispositif', header: 'Dispositif', type: 'text', headerNumeric: false },
      {
        key: 'cofinancement-public-par-tonne-evitee',
        header: 'Cofinancement public, € par tonne évitée',
        type: 'number',
        headerNumeric: true,
      },
    ],
    rows: [
      {
        cells: [
          { t: 'Efficacité énergétique dans la chimie' },
          { v: 17, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Pompe à chaleur remplaçant une chaudière fioul (DPE F)' },
          { v: 20, d: 0 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Capture et stockage de carbone, cimenterie' },
          { v: 24, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Pompe à chaleur remplaçant une chaudière fioul (DPE D)' },
          { v: 31, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Pompe à chaleur remplaçant une chaudière gaz' },
          { v: 84, d: 0, u: 'à 93' },
        ],
      },
      {
        cells: [
          { t: 'Rénovation globale' },
          { v: 129, d: 0, u: 'à 153' },
        ],
      },
      {
        cells: [
          { t: 'Isolation en mono-geste' },
          { v: 140, d: 0 },
        ],
      },
      {
        cells: [
          { t: '<b>Bonus écologique véhicule électrique</b>' },
          { t: '<b>≈ 600</b>, jusqu\'à 800 en tenant compte des pertes de recettes' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>Rénovation des bâtiments publics (plan de relance)</b>' },
          { v: 700, d: 0, approx: true, strong: true },
        ],
        emphasis: true,
      },
    ],
  },
} satisfies Tables

export const series = {
  'emissions-territoriales-de-gaz-a-effet-de-serre-france': {
    svg: {
      viewBox: '0 0 720 330',
      titleId: 'cges-t',
      title: 'Émissions territoriales',
      preserveAspectRatio: 'xMidYMid meet',
    },
    title: 'Émissions territoriales de gaz à effet de serre, France',
    subtitle: 'MtCO₂e, tous gaz, hors puits forestier (UTCATF). 1990-2025.',
    caption: 'De <b>546,9 MtCO₂e en 1990 à 359,5 en 2025</b>, soit <b>−34,3 %</b>. Le rythme s\'est accéléré depuis 2022 (−5,6 % en 2023) puis nettement ralenti : −2,9 % en 2024, −2,1 % en 2025. <em>Sources : Eurostat sdg_13_10 jusqu\'en 2024 ; Citepa Secten 2026 pour 2025.</em>',
    sources: ['eurostat-sdg-13-10'],
    vintage: '2025',
    type: 'line',
    layout: {
      kind: 'line',
      tickLabelX: 43,
      tickLabelDy: 4,
      axisLabel: { x: 43, y: 14, text: 'MtCO₂e', anchor: 'end' },
      axisLineY: 296,
      dotR: 4,
      endLabelDx: 8,
      endLabelDy: 4,
      xLabelY: 314,
    },
    xAxis: { min: 1990, max: 2025, ticks: [1990, 1995, 2000, 2005, 2010, 2015, 2020, 2025] },
    x: [
      1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004,
      2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
      2020, 2021, 2022, 2023, 2024, 2025,
    ],
    y: { min: 400, max: 500, ticks: [400, 500], label: 'MtCO₂e' },
    series: [
      {
        key: 's3',
        color: 's3',
        label: 'MtCO₂e',
        values: [
          546.869, 572.486, 561.48, 539.943, 531.689, 538.046, 556.357, 548.577, 562.429, 557.116,
          551.803, 556.926, 550.569, 554.649, 554.269, 555.503, 544.877, 535.104, 530.266, 509.108,
          513.093, 487.951, 490.702, 490.133, 457.4, 460.721, 463.662, 466.034, 446.49, 437.666,
          398.008, 422.391, 405.787, 378.178, 366.983, 359.488,
        ],
      },
    ],
    frame: { width: 720, height: 330, left: 52, right: 602, top: 116.8, bottom: 222.2 },
  },
  'les-memes-emissions-rapportees-a-la-population': {
    raw: true,
    title: 'Les mêmes émissions, rapportées à la population',
    subtitle: 'tCO₂e par habitant. C\'est la lecture qui neutralise la croissance démographique.',
    caption: 'De <b>9,4 t/habitant en 1990 à 5,21 en 2025</b>, soit <b>−44,6 %</b>. <em>Source : Eurostat sdg_13_10, unité T_HAB — série publiée directement, pas un calcul dérivé.</em>',
    svg: '<svg viewBox="0 0 720 330" class="cv" role="img" aria-labelledby="cgesh-t" preserveAspectRatio="xMidYMid meet">\r\n<title id="cgesh-t">Émissions par habitant</title>\r\n<line class="grid" x1="52" y1="223.9" x2="602" y2="223.9"></line>\r\n<text class="ax ar" x="43" y="227.9">6,0</text>\r\n<line class="grid" x1="52" y1="127.8" x2="602" y2="127.8"></line>\r\n<text class="ax ar" x="43" y="131.8">8,0</text>\r\n<line class="grid" x1="52" y1="31.6" x2="602" y2="31.6"></line>\r\n<text class="ax ar" x="43" y="35.6">10,0</text>\r\n<text class="ax" x="43" y="14" text-anchor="end">tCO₂e / habitant</text>\r\n<text class="ax" x="52.0" y="314" text-anchor="start">1990</text>\r\n<text class="ax" x="130.6" y="314" text-anchor="middle">1995</text>\r\n<text class="ax" x="209.1" y="314" text-anchor="middle">2000</text>\r\n<text class="ax" x="287.7" y="314" text-anchor="middle">2005</text>\r\n<text class="ax" x="366.3" y="314" text-anchor="middle">2010</text>\r\n<text class="ax" x="444.9" y="314" text-anchor="middle">2015</text>\r\n<text class="ax" x="523.4" y="314" text-anchor="middle">2020</text>\r\n<text class="ax" x="602.0" y="314" text-anchor="end">2025</text>\r\n<line class="axis" x1="52" y1="296" x2="602" y2="296"></line>\r\n<polyline class="ln s3" points="52.0,60.5 67.7,41.2 83.4,50.8 99.1,70.1 114.9,79.7 130.6,74.9 146.3,65.3 162.0,70.1 177.7,60.5 193.4,70.1 209.1,74.9 224.9,74.9 240.6,84.5 256.3,84.5 272.0,84.5 287.7,89.3 303.4,98.9 319.1,108.5 334.9,113.3 350.6,132.6 366.3,132.6 382.0,151.8 397.7,151.8 413.4,151.8 429.1,180.6 444.9,180.6 460.6,175.8 476.3,175.8 492.0,190.2 507.7,199.9 523.4,228.7 539.1,214.3 554.9,228.7 570.6,247.9 586.3,257.5 602.0,261.9"></polyline>\r\n<circle class="dot s3" cx="602.0" cy="261.9" r="4"></circle>\r\n<text class="lbl s3t" x="610.0" y="265.9">t/hab.</text>\r\n</svg>',
    sources: ['eurostat-sdg-13-10-2'],
    vintage: 'à confirmer',
    values: {
      svg: {
        viewBox: '0 0 720 330',
        titleId: 'cgesh-t',
        title: 'Émissions par habitant',
        preserveAspectRatio: 'xMidYMid meet',
      },
      title: 'Les mêmes émissions, rapportées à la population',
      subtitle: 'tCO₂e par habitant. C\'est la lecture qui neutralise la croissance démographique.',
      caption: 'De <b>9,4 t/habitant en 1990 à 5,21 en 2025</b>, soit <b>−44,6 %</b>. <em>Source : Eurostat sdg_13_10, unité T_HAB — série publiée directement, pas un calcul dérivé.</em>',
      sources: ['eurostat-sdg-13-10-2'],
      vintage: 'à confirmer',
      type: 'line',
      layout: {
        kind: 'line',
        tickLabelX: 43,
        tickLabelDy: 4,
        axisLabel: { x: 43, y: 14, text: 'tCO₂e / habitant', anchor: 'end' },
        axisLineY: 296,
        dotR: 4,
        endLabelDx: 8,
        endLabelDy: 4,
        xLabelY: 314,
      },
      xAxis: { min: 1990, max: 2025, ticks: [1990, 1995, 2000, 2005, 2010, 2015, 2020, 2025] },
      x: [
        1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004,
        2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
        2020, 2021, 2022, 2023, 2024, 2025,
      ],
      y: { min: 6, max: 10, ticks: [6, 8, 10], label: 'tCO₂e / habitant' },
      series: [
        {
          key: 's3',
          color: 's3',
          label: 't/hab.',
          values: [
            9.399, 9.801, 9.601, 9.2, 9, 9.1, 9.299, 9.2, 9.399, 9.2, 9.1, 9.1, 8.9, 8.9, 8.9, 8.8,
            8.6, 8.401, 8.301, 7.899, 7.899, 7.5, 7.5, 7.5, 6.901, 6.901, 7.001, 7.001, 6.701, 6.5,
            5.901, 6.2, 5.901, 5.501, 5.301, 5.21,
          ],
        },
      ],
      frame: {
        width: 720,
        height: 330,
        left: 52,
        right: 602,
        top: 31.61666666666666,
        bottom: 223.91666666666669,
      },
    },
  },
  'emissions-par-secteur-france-1990-contre-2024': {
    raw: true,
    title: 'Émissions par secteur, France : 1990 contre 2024',
    subtitle: 'MtCO₂e. Barre du haut : 1990. Barre du bas : 2024.',
    caption: '<b>Le transport n\'a strictement pas bougé en trente-quatre ans</b> : 125,4 Mt en 1990, 125,4 Mt en 2024. Il est passé de 23 % à 34 % du total et est aujourd\'hui le premier poste. <em>Source : Citepa, rapport Secten édition 2026.</em>',
    legend: [
      { color: 's4', label: '1990' },
      { color: 's1', label: '2024' },
    ],
    svg: '<svg viewBox="0 0 720 338" class="cv" role="img" aria-labelledby="cgess-t">\r\n<title id="cgess-t">MtCO2e</title>\r\n<line class="grid" x1="200.0" y1="16" x2="200.0" y2="290"></line>\r\n<text class="ax" x="200.0" y="312" text-anchor="middle">0</text>\r\n<line class="grid" x1="348.1" y1="16" x2="348.1" y2="290"></line>\r\n<text class="ax" x="348.1" y="312" text-anchor="middle">50</text>\r\n<line class="grid" x1="496.3" y1="16" x2="496.3" y2="290"></line>\r\n<text class="ax" x="496.3" y="312" text-anchor="middle">100</text>\r\n<text class="ax al" x="186" y="43">Transports</text>\r\n<rect class="bar s4f" x="200" y="24" width="371.5" height="13" rx="3"></rect>\r\n<rect class="bar s1f" x="200" y="41" width="371.5" height="13" rx="3"></rect>\r\n<text class="lbl mut" x="579.5" y="35">125,4</text>\r\n<text class="lbl s1t" x="579.5" y="52">125,4</text>\r\n<text class="ax al" x="186" y="89">Agriculture</text>\r\n<rect class="bar s4f" x="200" y="70" width="275.2" height="13" rx="3"></rect>\r\n<rect class="bar s1f" x="200" y="87" width="229.6" height="13" rx="3"></rect>\r\n<text class="lbl mut" x="483.2" y="81">92,9</text>\r\n<text class="lbl s1t" x="437.6" y="98">77,5</text>\r\n<text class="ax al" x="186" y="135">Industrie manufacturière</text>\r\n<rect class="bar s4f" x="200" y="116" width="415.1" height="13" rx="3"></rect>\r\n<rect class="bar s1f" x="200" y="133" width="182.5" height="13" rx="3"></rect>\r\n<text class="lbl mut" x="623.1" y="127">140,1</text>\r\n<text class="lbl s1t" x="390.5" y="144">61,6</text>\r\n<text class="ax al" x="186" y="181">Bâtiments</text>\r\n<rect class="bar s4f" x="200" y="162" width="275.2" height="13" rx="3"></rect>\r\n<rect class="bar s1f" x="200" y="179" width="166.2" height="13" rx="3"></rect>\r\n<text class="lbl mut" x="483.2" y="173">92,9</text>\r\n<text class="lbl s1t" x="374.2" y="190">56,1</text>\r\n<text class="ax al" x="186" y="227">Industrie de l\'énergie</text>\r\n<rect class="bar s4f" x="200" y="208" width="233.8" height="13" rx="3"></rect>\r\n<rect class="bar s1f" x="200" y="225" width="92.4" height="13" rx="3"></rect>\r\n<text class="lbl mut" x="441.8" y="219">78,9</text>\r\n<text class="lbl s1t" x="300.4" y="236">31,2</text>\r\n<text class="ax al" x="186" y="273">Déchets</text>\r\n<rect class="bar s4f" x="200" y="254" width="49.5" height="13" rx="3"></rect>\r\n<rect class="bar s1f" x="200" y="271" width="45.3" height="13" rx="3"></rect>\r\n<text class="lbl mut" x="257.5" y="265">16,7</text>\r\n<text class="lbl s1t" x="253.3" y="282">15,3</text>\r\n</svg>',
    sources: ['eurostat-env-air-gge'],
    vintage: '2024',
    values: {
      svg: { viewBox: '0 0 720 338', titleId: 'cgess-t', title: 'MtCO2e' },
      title: 'Émissions par secteur, France : 1990 contre 2024',
      subtitle: 'MtCO₂e. Barre du haut : 1990. Barre du bas : 2024.',
      caption: '<b>Le transport n\'a strictement pas bougé en trente-quatre ans</b> : 125,4 Mt en 1990, 125,4 Mt en 2024. Il est passé de 23 % à 34 % du total et est aujourd\'hui le premier poste. <em>Source : Citepa, rapport Secten édition 2026.</em>',
      sources: ['eurostat-env-air-gge'],
      vintage: '2024',
      legend: [
        { color: 's4', label: '1990' },
        { color: 's1', label: '2024' },
      ],
      type: 'bar',
      layout: {
        kind: 'bar',
        gridTop: 16,
        gridBottom: 290,
        tickLabelY: 312,
        catLabelX: 186,
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
      x: [
        'Transports', 'Agriculture', 'Industrie manufacturière', 'Bâtiments',
        'Industrie de l\'énergie', 'Déchets',
      ],
      y: { min: 0, max: 100, ticks: [0, 50, 100] },
      series: [
        {
          key: 'b1',
          color: 's4',
          label: '1990',
          values: [125.38, 92.879, 140.094, 92.879, 78.907, 16.706],
          decimals: 1,
        },
        {
          key: 'b2',
          color: 's1',
          label: '2024',
          values: [125.38, 77.489, 61.593, 56.092, 31.185, 15.289],
          decimals: 1,
        },
      ],
      frame: { width: 720, height: 338, left: 200, right: 496.3, top: 16, bottom: 290 },
    },
  },
  'france-emissions-sur-le-territoire-et-empreinte-par-habita': {
    raw: true,
    title: 'France : émissions sur le territoire et empreinte, par habitant',
    subtitle: 'Tonnes de CO₂ fossile par habitant, 1990-2024. L\'écart entre les deux courbes est le carbone importé net.',
    caption: '<b>Les deux courbes ne descendent pas au même rythme, et l\'écart se creuse.</b> Les émissions sur le territoire reculent de <b>43 %</b> entre 1990 et 2024 (6,93 → 3,97 tonnes par habitant) ; l\'empreinte ne recule que de <b>28 %</b> entre 1990 et 2023 (8,52 → 6,13). Surtout, le carbone importé net passe de <b>+23 % des émissions territoriales en 1990 à +51 % en 2023</b> : il a plus que doublé en part.',
    legend: [
      { color: 's2', label: 'Empreinte, importations incluses' },
      { color: 's1', label: 'Émissions sur le territoire' },
    ],
    svg: '<svg viewBox="0 0 720 340" class="cv" role="img" aria-labelledby="cemprfr-t" preserveAspectRatio="xMidYMid meet">\r\n<title id="cemprfr-t">France, deux périmètres</title>\r\n<line class="grid" x1="52" y1="265.4" x2="602" y2="265.4"></line>\r\n<text class="ax ar" x="43" y="269.4">4,0</text>\r\n<line class="grid" x1="52" y1="184.3" x2="602" y2="184.3"></line>\r\n<text class="ax ar" x="43" y="188.3">6,0</text>\r\n<line class="grid" x1="52" y1="103.1" x2="602" y2="103.1"></line>\r\n<text class="ax ar" x="43" y="107.1">8,0</text>\r\n<line class="grid" x1="52" y1="22.0" x2="602" y2="22.0"></line>\r\n<text class="ax ar" x="43" y="26.0">10,0</text>\r\n<text class="ax" x="43" y="14" text-anchor="end">tCO₂ par habitant</text>\r\n<text class="ax" x="52.0" y="324" text-anchor="start">1990</text>\r\n<text class="ax" x="213.8" y="324" text-anchor="middle">2000</text>\r\n<text class="ax" x="375.5" y="324" text-anchor="middle">2010</text>\r\n<text class="ax" x="537.3" y="324" text-anchor="middle">2020</text>\r\n<text class="ax" x="602.0" y="324" text-anchor="end">2024</text>\r\n<line class="axis" x1="52" y1="306" x2="602" y2="306"></line>\r\n<polyline class="ln s2" points="52.0,82.0 84.4,51.2 116.7,86.5 149.1,79.2 181.4,80.8 213.8,77.6 246.1,87.7 278.5,73.1 310.8,71.9 343.2,76.8 375.5,100.7 407.9,123.8 440.2,146.1 472.6,144.1 504.9,145.3 521.1,154.7 537.3,182.3 553.5,157.5 569.6,159.9 585.8,179.0"></polyline>\r\n<polyline class="ln s1" points="52.0,146.6 84.4,139.7 116.7,160.8 149.1,147.4 181.4,141.7 213.8,149.8 246.1,153.9 278.5,153.0 310.8,162.0 343.2,175.8 375.5,186.3 407.9,200.9 440.2,222.0 472.6,218.8 504.9,227.7 521.1,232.6 537.3,254.5 553.5,239.1 569.6,246.8 585.8,262.6 602.0,266.6"></polyline>\r\n<circle class="dot s2" cx="585.8" cy="179.0" r="4"></circle>\r\n<text class="lbl s2t" x="593.8" y="183.0">Empreinte, importations incluses</text>\r\n<circle class="dot s1" cx="602.0" cy="266.6" r="4"></circle>\r\n<text class="lbl s1t" x="610.0" y="270.6">Émissions sur le territoire</text>\r\n</svg>',
    sources: ['eurostat-emissions-territoriales-citepa-euros'],
    vintage: 'à confirmer',
    values: {
      svg: {
        viewBox: '0 0 720 340',
        titleId: 'cemprfr-t',
        title: 'France, deux périmètres',
        preserveAspectRatio: 'xMidYMid meet',
      },
      title: 'France : émissions sur le territoire et empreinte, par habitant',
      subtitle: 'Tonnes de CO₂ fossile par habitant, 1990-2024. L\'écart entre les deux courbes est le carbone importé net.',
      caption: '<b>Les deux courbes ne descendent pas au même rythme, et l\'écart se creuse.</b> Les émissions sur le territoire reculent de <b>43 %</b> entre 1990 et 2024 (6,93 → 3,97 tonnes par habitant) ; l\'empreinte ne recule que de <b>28 %</b> entre 1990 et 2023 (8,52 → 6,13). Surtout, le carbone importé net passe de <b>+23 % des émissions territoriales en 1990 à +51 % en 2023</b> : il a plus que doublé en part.',
      sources: ['eurostat-emissions-territoriales-citepa-euros'],
      vintage: '2024',
      legend: [
        { color: 's2', label: 'Empreinte, importations incluses' },
        { color: 's1', label: 'Émissions sur le territoire' },
      ],
      type: 'line',
      layout: {
        kind: 'line',
        tickLabelX: 43,
        tickLabelDy: 4,
        axisLabel: { x: 43, y: 14, text: 'tCO₂ par habitant', anchor: 'end' },
        axisLineY: 306,
        dotR: 4,
        endLabelDx: 8,
        endLabelDy: 4,
        xLabelY: 324,
      },
      xAxis: { min: 1990, max: 2024, ticks: [1990, 2000, 2010, 2020, 2024] },
      x: [
        1990, 1992, 1994, 1996, 1998, 2000, 2002, 2004, 2006, 2008, 2010, 2012, 2014, 2016, 2018,
        2019, 2020, 2021, 2022, 2023, 2024,
      ],
      y: { min: 4, max: 10, ticks: [4, 6, 8, 10], label: 'tCO₂ par habitant' },
      series: [
        {
          key: 's2',
          color: 's2',
          label: 'Empreinte, importations incluses',
          values: [
            8.521, 9.28, 8.41, 8.59, 8.55, 8.629, 8.38, 8.74, 8.77, 8.649, 8.06, 7.491, 6.941, 6.99,
            6.961, 6.729, 6.049, 6.66, 6.601, 6.13, null,
          ],
        },
        {
          key: 's1',
          color: 's1',
          label: 'Émissions sur le territoire',
          values: [
            6.929, 7.099, 6.579, 6.909, 7.049, 6.85, 6.749, 6.771, 6.549, 6.209, 5.95, 5.59, 5.07,
            5.149, 4.93, 4.809, 4.269, 4.649, 4.459, 4.069, 3.971,
          ],
        },
      ],
      frame: {
        width: 720,
        height: 340,
        left: 52,
        right: 602,
        top: 21.99000000000001,
        bottom: 265.40999999999997,
      },
    },
  },
  'emissions-territoriales-et-empreinte-carbone-par-habitant': {
    raw: true,
    title: 'Émissions territoriales et empreinte carbone par habitant, 2023',
    subtitle: 'En tonnes de CO₂ par habitant. Chaque pays porte deux barres : émissions sur le territoire au-dessus, empreinte importations incluses en dessous.',
    caption: '<b>Trois pays changent de camp.</b> La France passe du 11ᵉ au 9ᵉ rang et repasse devant l\'Espagne et la Suède ; le Royaume-Uni gagne trois places ; la Pologne, 3ᵉ en territorial, tombe au 8ᵉ rang en empreinte — son inventaire est gonflé par le charbon électrique mais elle importe peu d\'émissions. La Chine et l\'Inde sont <b>exportatrices nettes</b> d\'émissions : elles produisent pour la consommation des autres.',
    legend: [
      { color: 's4', label: 'Territoriales' },
      { color: 's1', label: 'Empreinte, importations incluses' },
    ],
    svg: '<svg viewBox="0 0 720 522" class="cv" role="img" aria-labelledby="ctvse-t">\r\n<title id="ctvse-t">tCO2 par habitant, 2023</title>\r\n<line class="grid" x1="170.0" y1="16" x2="170.0" y2="474"></line>\r\n<text class="ax" x="170.0" y="496" text-anchor="middle">0</text>\r\n<line class="grid" x1="310.2" y1="16" x2="310.2" y2="474"></line>\r\n<text class="ax" x="310.2" y="496" text-anchor="middle">5</text>\r\n<line class="grid" x1="450.5" y1="16" x2="450.5" y2="474"></line>\r\n<text class="ax" x="450.5" y="496" text-anchor="middle">10</text>\r\n<line class="grid" x1="590.7" y1="16" x2="590.7" y2="474"></line>\r\n<text class="ax" x="590.7" y="496" text-anchor="middle">15</text>\r\n<text class="ax al" x="156" y="43">États-Unis</text>\r\n<rect class="bar s4f" x="170" y="24" width="401.6" height="13" rx="3"></rect>\r\n<rect class="bar s1f" x="170" y="41" width="443.4" height="13" rx="3"></rect>\r\n<text class="lbl mut" x="579.6" y="35">14,3</text>\r\n<text class="lbl s1t" x="621.4" y="52">15,8</text>\r\n<text class="ax al" x="156" y="89">Allemagne</text>\r\n<rect class="bar s4f" x="170" y="70" width="196.9" height="13" rx="3"></rect>\r\n<rect class="bar s1f" x="170" y="87" width="254.9" height="13" rx="3"></rect>\r\n<text class="lbl mut" x="374.9" y="81">7,0</text>\r\n<text class="lbl s1t" x="432.9" y="98">9,1</text>\r\n<text class="ax al" x="156" y="135">Chine</text>\r\n<rect class="bar s4f" x="170" y="116" width="240.1" height="13" rx="3"></rect>\r\n<rect class="bar s1f" x="170" y="133" width="214.0" height="13" rx="3"></rect>\r\n<text class="lbl mut" x="418.1" y="127">8,6</text>\r\n<text class="lbl s1t" x="392.0" y="144">7,6</text>\r\n<text class="ax al" x="156" y="181">Pays-Bas</text>\r\n<rect class="bar s4f" x="170" y="162" width="181.5" height="13" rx="3"></rect>\r\n<rect class="bar s1f" x="170" y="179" width="232.8" height="13" rx="3"></rect>\r\n<text class="lbl mut" x="359.5" y="173">6,5</text>\r\n<text class="lbl s1t" x="410.8" y="190">8,3</text>\r\n<text class="ax al" x="156" y="227">Italie</text>\r\n<rect class="bar s4f" x="170" y="208" width="147.2" height="13" rx="3"></rect>\r\n<rect class="bar s1f" x="170" y="225" width="202.2" height="13" rx="3"></rect>\r\n<text class="lbl mut" x="325.2" y="219">5,2</text>\r\n<text class="lbl s1t" x="380.2" y="236">7,2</text>\r\n<text class="ax al" x="156" y="273">Pologne</text>\r\n<rect class="bar s4f" x="170" y="254" width="205.0" height="13" rx="3"></rect>\r\n<rect class="bar s1f" x="170" y="271" width="198.0" height="13" rx="3"></rect>\r\n<text class="lbl mut" x="383.0" y="265">7,3</text>\r\n<text class="lbl s1t" x="376.0" y="282">7,1</text>\r\n<text class="ax al" x="156" y="319">Royaume-Uni</text>\r\n<rect class="bar s4f" x="170" y="300" width="125.6" height="13" rx="3"></rect>\r\n<rect class="bar s1f" x="170" y="317" width="198.8" height="13" rx="3"></rect>\r\n<text class="lbl mut" x="303.6" y="311">4,5</text>\r\n<text class="lbl s1t" x="376.8" y="328">7,1</text>\r\n<text class="ax al" x="156" y="365">France</text>\r\n<rect class="bar s4f" x="170" y="346" width="114.1" height="13" rx="3"></rect>\r\n<rect class="bar s1f" x="170" y="363" width="171.9" height="13" rx="3"></rect>\r\n<text class="lbl mut" x="292.1" y="357">4,1</text>\r\n<text class="lbl s1t" x="349.9" y="374">6,1</text>\r\n<text class="ax al" x="156" y="411">Suède</text>\r\n<rect class="bar s4f" x="170" y="392" width="97.6" height="13" rx="3"></rect>\r\n<rect class="bar s1f" x="170" y="409" width="164.1" height="13" rx="3"></rect>\r\n<text class="lbl mut" x="275.6" y="403">3,5</text>\r\n<text class="lbl s1t" x="342.1" y="420">5,8</text>\r\n<text class="ax al" x="156" y="457">Inde</text>\r\n<rect class="bar s4f" x="170" y="438" width="59.7" height="13" rx="3"></rect>\r\n<rect class="bar s1f" x="170" y="455" width="49.6" height="13" rx="3"></rect>\r\n<text class="lbl mut" x="237.7" y="449">2,1</text>\r\n<text class="lbl s1t" x="227.6" y="466">1,8</text>\r\n</svg>',
    sources: ['our-world-in-data-global-carbon-budget-emissions-territor'],
    vintage: '2023',
  },
  'empreinte-carbone-par-habitant-1990-2023': {
    raw: true,
    title: 'Empreinte carbone par habitant, 1990-2023',
    subtitle: 'Émissions de CO₂ liées à la consommation, importations incluses.',
    caption: 'Sur cette mesure — la seule qui soit à périmètre de consommation constant — la France baisse de <b>28 % depuis 1990</b>, l\'Allemagne de 40 %, le Royaume-Uni de 39 %, les États-Unis de 21 %. La Chine, elle, a multiplié la sienne par 3,7 et <b>dépasse désormais l\'Union européenne par habitant</b> (7,63 contre 7,33 tonnes).',
    legend: [
      { color: 's2', label: 'États-Unis' },
      { color: 's4', label: 'Allemagne' },
      { color: 's5', label: 'Royaume-Uni' },
      { color: 's3', label: 'Chine' },
      { color: 's1', label: 'France' },
    ],
    svg: '<svg viewBox="0 0 720 350" class="cv" role="img" aria-labelledby="cempr-t" preserveAspectRatio="xMidYMid meet">\r\n<title id="cempr-t">Empreinte carbone par habitant</title>\r\n<line class="grid" x1="52" y1="316.0" x2="602" y2="316.0"></line>\r\n<text class="ax ar" x="43" y="320.0">0,0</text>\r\n<line class="grid" x1="52" y1="254.8" x2="602" y2="254.8"></line>\r\n<text class="ax ar" x="43" y="258.8">5,0</text>\r\n<line class="grid" x1="52" y1="193.5" x2="602" y2="193.5"></line>\r\n<text class="ax ar" x="43" y="197.5">10,0</text>\r\n<line class="grid" x1="52" y1="132.2" x2="602" y2="132.2"></line>\r\n<text class="ax ar" x="43" y="136.2">15,0</text>\r\n<line class="grid" x1="52" y1="71.0" x2="602" y2="71.0"></line>\r\n<text class="ax ar" x="43" y="75.0">20,0</text>\r\n<text class="ax" x="43" y="14" text-anchor="end">tCO2 par habitant, importations incluses</text>\r\n<text class="ax" x="52.0" y="334" text-anchor="start">1990</text>\r\n<text class="ax" x="218.7" y="334" text-anchor="middle">2000</text>\r\n<text class="ax" x="385.3" y="334" text-anchor="middle">2010</text>\r\n<text class="ax" x="602.0" y="334" text-anchor="end">2023</text>\r\n<line class="axis" x1="52" y1="316" x2="602" y2="316"></line>\r\n<polyline class="ln s2" points="52.0,71.7 135.3,70.0 218.7,44.9 302.0,40.3 385.3,84.1 468.7,102.1 535.3,113.6 568.7,118.3 602.0,122.3"></polyline>\r\n<polyline class="ln s4" points="52.0,131.5 135.3,143.9 218.7,151.1 302.0,159.9 385.3,160.3 468.7,181.7 535.3,191.9 568.7,193.9 602.0,204.6"></polyline>\r\n<polyline class="ln s5" points="52.0,173.8 135.3,179.5 218.7,162.8 302.0,161.2 385.3,182.5 468.7,204.2 535.3,220.2 568.7,222.3 602.0,229.1"></polyline>\r\n<polyline class="ln s3" points="52.0,290.9 135.3,285.5 218.7,284.8 302.0,272.5 385.3,250.2 468.7,238.8 535.3,232.0 568.7,229.4 602.0,222.5"></polyline>\r\n<polyline class="ln s1" points="52.0,211.6 135.3,210.8 218.7,210.3 302.0,207.6 385.3,217.3 468.7,233.9 535.3,233.6 568.7,234.4 602.0,240.9"></polyline>\r\n<circle class="dot s2" cx="602.0" cy="122.3" r="4"></circle>\r\n<text class="lbl s2t" x="610.0" y="126.3">États-Unis</text>\r\n<circle class="dot s4" cx="602.0" cy="204.6" r="4"></circle>\r\n<text class="lbl s4t" x="610.0" y="208.6">Allemagne</text>\r\n<circle class="dot s5" cx="602.0" cy="229.1" r="4"></circle>\r\n<text class="lbl s5t" x="610.0" y="233.1">Royaume-Uni</text>\r\n<circle class="dot s3" cx="602.0" cy="222.5" r="4"></circle>\r\n<text class="lbl s3t" x="610.0" y="226.5">Chine</text>\r\n<circle class="dot s1" cx="602.0" cy="240.9" r="4"></circle>\r\n<text class="lbl s1t" x="610.0" y="244.9">France</text>\r\n</svg>',
    sources: ['our-world-in-data-global-carbon-budget-emissions-de-co-l'],
    vintage: '2023',
    values: {
      svg: {
        viewBox: '0 0 720 350',
        titleId: 'cempr-t',
        title: 'Empreinte carbone par habitant',
        preserveAspectRatio: 'xMidYMid meet',
      },
      title: 'Empreinte carbone par habitant, 1990-2023',
      subtitle: 'Émissions de CO₂ liées à la consommation, importations incluses.',
      caption: 'Sur cette mesure — la seule qui soit à périmètre de consommation constant — la France baisse de <b>28 % depuis 1990</b>, l\'Allemagne de 40 %, le Royaume-Uni de 39 %, les États-Unis de 21 %. La Chine, elle, a multiplié la sienne par 3,7 et <b>dépasse désormais l\'Union européenne par habitant</b> (7,63 contre 7,33 tonnes).',
      sources: ['our-world-in-data-global-carbon-budget-emissions-de-co-l'],
      vintage: '2023',
      legend: [
        { color: 's2', label: 'États-Unis' },
        { color: 's4', label: 'Allemagne' },
        { color: 's5', label: 'Royaume-Uni' },
        { color: 's3', label: 'Chine' },
        { color: 's1', label: 'France' },
      ],
      type: 'line',
      layout: {
        kind: 'line',
        tickLabelX: 43,
        tickLabelDy: 4,
        axisLabel: { x: 43, y: 14, text: 'tCO2 par habitant, importations incluses', anchor: 'end' },
        axisLineY: 316,
        dotR: 4,
        endLabelDx: 8,
        endLabelDy: 4,
        xLabelY: 334,
      },
      xAxis: { min: 1990, max: 2023, ticks: [1990, 2000, 2010, 2023] },
      x: [1990, 1995, 2000, 2005, 2010, 2015, 2019, 2021, 2023],
      y: {
        min: 0,
        max: 20,
        ticks: [0, 5, 10, 15, 20],
        label: 'tCO2 par habitant, importations incluses',
      },
      series: [
        {
          key: 's2',
          color: 's2',
          label: 'États-Unis',
          values: [19.941, 20.08, 22.129, 22.504, 18.929, 17.46, 16.521, 16.138, 15.811],
        },
        {
          key: 's4',
          color: 's4',
          label: 'Allemagne',
          values: [15.06, 14.048, 13.461, 12.742, 12.71, 10.963, 10.131, 9.967, 9.094],
        },
        {
          key: 's5',
          color: 's5',
          label: 'Royaume-Uni',
          values: [11.608, 11.143, 12.506, 12.636, 10.898, 9.127, 7.821, 7.649, 7.094],
        },
        {
          key: 's3',
          color: 's3',
          label: 'Chine',
          values: [2.05, 2.491, 2.548, 3.552, 5.372, 6.303, 6.858, 7.07, 7.633],
        },
        {
          key: 's1',
          color: 's1',
          label: 'France',
          values: [8.523, 8.588, 8.629, 8.849, 8.057, 6.703, 6.727, 6.662, 6.131],
        },
      ],
      frame: { width: 720, height: 350, left: 52, right: 602, top: 70.97999999999999, bottom: 316.02 },
    },
  },
  'emissions-par-habitant-1990-contre-2024': {
    raw: true,
    title: 'Émissions par habitant : 1990 contre 2024',
    subtitle: 'tCO₂e par habitant, tous gaz, puits forestier inclus.',
    caption: '<em>Source : Our World in Data / Climate Watch.</em>',
    legend: [
      { color: 's4', label: '1990' },
      { color: 's1', label: '2024' },
    ],
    svg: '<svg viewBox="0 0 720 234" class="cv" role="img" aria-labelledby="cgesp-t">\r\n<title id="cgesp-t">tCO2e par habitant, 1990 puis 2024</title>\r\n<line class="grid" x1="132.0" y1="16" x2="132.0" y2="182"></line>\r\n<text class="ax" x="132.0" y="204" text-anchor="middle">0</text>\r\n<line class="grid" x1="319.3" y1="16" x2="319.3" y2="182"></line>\r\n<text class="ax" x="319.3" y="204" text-anchor="middle">10</text>\r\n<line class="grid" x1="506.6" y1="16" x2="506.6" y2="182"></line>\r\n<text class="ax" x="506.6" y="204" text-anchor="middle">20</text>\r\n<text class="ax al" x="118" y="34">États-Unis</text>\r\n<line class="db" x1="611.6" y1="30" x2="460.3" y2="30"></line>\r\n<circle class="dot s4" cx="611.6" cy="30" r="5"></circle>\r\n<circle class="dot s1" cx="460.3" cy="30" r="5"></circle>\r\n<text class="lbl s1t" x="660" y="34">17,5</text>\r\n<text class="ax al" x="118" y="68">Allemagne</text>\r\n<line class="db" x1="428.3" y1="64" x2="278.1" y2="64"></line>\r\n<circle class="dot s4" cx="428.3" cy="64" r="5"></circle>\r\n<circle class="dot s1" cx="278.1" cy="64" r="5"></circle>\r\n<text class="lbl s1t" x="660" y="68">7,8</text>\r\n<text class="ax al" x="118" y="102">Royaume-Uni</text>\r\n<line class="db" x1="388.0" y1="98" x2="237.6" y2="98"></line>\r\n<circle class="dot s4" cx="388.0" cy="98" r="5"></circle>\r\n<circle class="dot s1" cx="237.6" cy="98" r="5"></circle>\r\n<text class="lbl s1t" x="660" y="102">5,6</text>\r\n<text class="ax al" x="118" y="136">France</text>\r\n<line class="db" x1="324.2" y1="132" x2="227.1" y2="132"></line>\r\n<circle class="dot s4" cx="324.2" cy="132" r="5"></circle>\r\n<circle class="dot s1" cx="227.1" cy="132" r="5"></circle>\r\n<text class="lbl s1t" x="660" y="136">5,1</text>\r\n<text class="ax al" x="118" y="170">Italie</text>\r\n<line class="db" x1="296.6" y1="166" x2="244.4" y2="166"></line>\r\n<circle class="dot s4" cx="296.6" cy="166" r="5"></circle>\r\n<circle class="dot s1" cx="244.4" cy="166" r="5"></circle>\r\n<text class="lbl s1t" x="660" y="170">6,0</text>\r\n</svg>',
    sources: ['eurostat-env-air-gge-2'],
    vintage: '2024',
  },
} satisfies SeriesSet

/** Fiches du chapitre, dans l'ordre : alimente le rail et la recherche. */
export const questions = [
  { id: 's8-q1', title: 'Où en sont les émissions françaises depuis 1990 ?' },
  { id: 's8-q2', title: 'Quels secteurs ont progressé, lesquels n\'ont pas bougé ?' },
  { id: 's8-q3', title: 'Et si on compte le carbone importé ?' },
  { id: 's8-q4', title: 'La France seule : les deux périmètres, année par année' },
  { id: 's8-q5', title: 'À périmètre équivalent : le classement change-t-il ?' },
  { id: 's8-q6', title: 'Comment la France se compare-t-elle ?' },
  { id: 's8-q7', title: 'Quelles politiques réduisent une tonne de CO₂ au moindre coût ?' },
  {
    id: 's8-q8',
    title: 'Combien l\'argent public paie-t-il la tonne — et qu\'est-ce qu\'une « valeur de l\'action pour le climat » ?',
  },
  { id: 's8-q9', title: 'Combien coûterait la neutralité carbone en 2050 ?' },
  { id: 's8-q10', title: 'Les voitures électriques réduisent-elles vraiment les émissions ?' },
  { id: 's8-q11', title: 'À quoi bon agir si la France pèse 1 % des émissions ?' },
  { id: 's8-q12', title: 'L\'inaction coûte-t-elle plus cher que la transition ?' },
] satisfies readonly { id: string; title: string }[]

/**
 * Sources citées dans le texte du chapitre, en plus de celles portées par les
 * tableaux et les figures. La bibliographie les recense aussi : une source
 * citée en prose reste une source du dossier.
 */
export const citedSources = [
  'cour-des-comptes-direction-generale-du-tresor-outil-co',
  'france-strategie-direction-generale-du-tresor-et-dgec-le',
  'our-world-in-data-our-world-in-data-d-apres-le-global-carb',
  'our-world-in-data-our-world-in-data-d-apres-le-global-carb-2',
  'sdes-sdes-l-empreinte-carbone-de-la-france-d',
] satisfies readonly SourceId[]
