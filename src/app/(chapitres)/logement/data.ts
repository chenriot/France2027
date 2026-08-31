// Généré par `npm run extract` depuis Temp/chiffres2027 (3).html.
// Toutes les données chiffrées du chapitre vivent ici, chacune sous sa source
// et son millésime. Voir CLAUDE.md, règles 2 à 4.
import type { ChapterMeta, SeriesSet, SourceId, Tables } from '@/lib/types'

export const meta = {
  slug: 'logement',
  num: 'Thème 13',
  title: 'Logement',
  shortTitle: 'Logement',
  note: 'Point de méthode valable pour tout le thème : la vacance est concentrée là où la demande est faible, pas là où la crise est aiguë.',
  status: 'complete',
  updated: '2026-08',
  legacyAnchor: 's13',
} satisfies ChapterMeta

export const tables = {
  '2024': {
    vintage: '2024',
    sources: ['eurostat-ilc-mded01'],
    columns: [
      { key: '2024', header: '2024', type: 'text', headerNumeric: false },
      {
        key: 'part-mediane-du-revenu',
        header: 'Part médiane du revenu',
        type: 'number',
        headerNumeric: true,
      },
      {
        key: 'surcharge-40-ensemble',
        header: 'Surcharge (>40 %), ensemble',
        type: 'number',
        headerNumeric: true,
      },
      {
        key: 'surcharge-locataires-du-prive',
        header: 'Surcharge, locataires du privé',
        type: 'number',
        headerNumeric: true,
      },
      { key: 'proprietaires', header: 'Propriétaires', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'France' },
          { v: 18.5, d: 1, u: '%' },
          { v: 7, d: 1, u: '%' },
          { v: 20.2, d: 1, u: '%' },
          { v: 61.2, d: 1, u: '%' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 24.5, d: 1, u: '%' },
          { v: 12, d: 1, u: '%' },
          { v: 13.8, d: 1, u: '%' },
          { v: 47.2, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Pays-Bas' },
          { v: 20.5, d: 1, u: '%' },
          { v: 6.9, d: 1, u: '%' },
          { v: 43.9, d: 1, u: '%' },
          { v: 68.8, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Espagne' },
          { v: 16.7, d: 1, u: '%' },
          { v: 7.8, d: 1, u: '%' },
          { v: 28.1, d: 1, u: '%' },
          { v: 73.7, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Italie' },
          { v: 13.6, d: 1, u: '%' },
          { v: 5.1, d: 1, u: '%' },
          { v: 19.4, d: 1, u: '%' },
          { v: 75.9, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'UE-27' },
          { v: 19.2, d: 1, u: '%' },
          { v: 8.2, d: 1, u: '%' },
          { v: 19.2, d: 1, u: '%' },
          { v: 68.4, d: 1, u: '%' },
        ],
        total: true,
      },
    ],
  },
  'indice-prix-revenu-base-100-en-2015': {
    vintage: '2024',
    sources: [
      'ocde-ocde-base-des-prix-de-l-immobilier-rat',
      'eurostat-eurostat-ilc-lvho07c-et-ilc-mded01-2024',
    ],
    columns: [
      {
        key: 'indice-prix-revenu-base-100-en-2015',
        header: 'Indice prix / revenu, base 100 en 2015',
        type: 'text',
        headerNumeric: false,
      },
      { key: '2000', header: '2000', type: 'number', headerNumeric: true },
      { key: '2010', header: '2010', type: 'number', headerNumeric: true },
      { key: '2024', header: '2024', type: 'number', headerNumeric: true },
      { key: '2000-2024', header: '2000→2024', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Royaume-Uni' },
          { v: 71.1, d: 1 },
          { v: 99.7, d: 1 },
          { v: 105.9, d: 1 },
          { v: 48.9, d: 1, u: '%', sign: true },
        ],
      },
      {
        cells: [
          { t: 'Portugal' },
          { v: 134.8, d: 1 },
          { v: 106.9, d: 1 },
          { v: 147.3, d: 1 },
          { v: 9.2, d: 1, u: '%', sign: true },
        ],
      },
      {
        cells: [
          { t: 'Espagne' },
          { v: 80.6, d: 1 },
          { v: 134.7, d: 1 },
          { v: 115.7, d: 1 },
          { v: 43.6, d: 1, u: '%', sign: true },
        ],
      },
      {
        cells: [
          { t: '<b>France</b>' },
          { v: 67.5, d: 1 },
          { v: 103.7, d: 1 },
          { v: 93.6, d: 1 },
          { v: 38.6, d: 1, u: '%', sign: true, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Pays-Bas' },
          { v: 107.8, d: 1 },
          { v: 120.1, d: 1 },
          { v: 130.5, d: 1 },
          { v: 21.1, d: 1, u: '%', sign: true },
        ],
      },
      {
        cells: [
          { t: 'États-Unis' },
          { v: 106.3, d: 1 },
          { v: 99.6, d: 1 },
          { v: 128.1, d: 1 },
          { v: 20.5, d: 1, u: '%', sign: true },
        ],
      },
      {
        cells: [
          { t: 'Italie' },
          { v: 84.5, d: 1 },
          { v: 119, d: 1 },
          { v: 87, d: 1 },
          { v: 3, d: 1, u: '%', sign: true },
        ],
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 116.5, d: 1 },
          { v: 93.8, d: 1 },
          { v: 105, d: 1 },
          { v: -9.9, d: 1, u: '%' },
        ],
      },
    ],
  },
  'impot-2022': {
    vintage: '2022',
    sources: ['dgfip-cour-des-comptes-travaux-sur-la-fiscali'],
    columns: [
      { key: 'impot-2022', header: 'Impôt (2022)', type: 'text', headerNumeric: false },
      { key: 'md', header: 'Md€', type: 'number', headerNumeric: true },
      { key: 'bloc', header: 'Bloc', type: 'text', headerNumeric: false },
    ],
    rows: [
      {
        cells: [
          { t: 'Taxe foncière sur les propriétés bâties' },
          { v: 25.5, d: 1 },
          { t: 'Détention' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Droits de mutation à titre onéreux (« frais de notaire »)' },
          { v: 16.8, d: 1 },
          { t: 'Transaction' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Droits de succession et de donation' },
          { v: 11.2, d: 1 },
          { t: 'Transmission' },
        ],
      },
      {
        cells: [
          { t: 'Impôt sur le revenu foncier + prélèvements sociaux' },
          { v: 8.3, d: 1 },
          { t: 'Revenus' },
        ],
      },
      {
        cells: [
          { t: 'Taxe d\'habitation sur les résidences secondaires' },
          { v: 2.8, d: 1 },
          { t: 'Détention' },
        ],
      },
      {
        cells: [
          { t: 'Imposition des plus-values immobilières' },
          { v: 2.8, d: 1 },
          { t: 'Cession' },
        ],
      },
      {
        cells: [
          { t: 'Impôt sur la fortune immobilière' },
          { v: 2.1, d: 1 },
          { t: 'Détention' },
        ],
      },
      {
        cells: [
          { t: 'Taxe d\'aménagement' },
          { v: 1.1, d: 1, approx: true },
          { t: 'Production' },
        ],
      },
      {
        cells: [
          { t: 'TVA sur les terrains à bâtir' },
          { t: '< 1' },
          { t: 'Production' },
        ],
      },
      {
        cells: [
          { t: 'Taxe sur les logements vacants' },
          { v: 0.08, d: 2, approx: true },
          { t: 'Détention' },
        ],
      },
      {
        cells: [
          { t: 'Sous-total identifié' },
          { v: 71.7, d: 1, approx: true },
          { t: 'sur 92 Md€' },
        ],
        total: true,
      },
    ],
  },
  'par-bloc': {
    vintage: '2022',
    sources: ['dgfip-cour-des-comptes-travaux-sur-la-fiscali'],
    columns: [
      { key: 'par-bloc', header: 'Par bloc', type: 'text', headerNumeric: false },
      { key: 'md', header: 'Md€', type: 'number', headerNumeric: true },
      { key: 'part', header: 'Part', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Détention (foncier, THRS, IFI, TLV)' },
          { v: 30.6, d: 1, approx: true },
          { v: 43, d: 0, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Transactions et transmissions (DMTO, successions, plus-values)' },
          { v: 30.8, d: 1, approx: true },
          { v: 43, d: 0, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Revenus locatifs' },
          { v: 8.3, d: 1, approx: true },
          { v: 12, d: 0, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Production et construction' },
          { v: 2.1, d: 1, approx: true },
          { v: 3, d: 0, u: '%' },
        ],
      },
    ],
  },
  'aides-publiques-2024': {
    vintage: '2024',
    sources: ['sdes-sdes-compte-du-logement-ministere-de-l'],
    columns: [
      {
        key: 'aides-publiques-2024',
        header: 'Aides publiques (2024)',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'md', header: 'Md€', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Total' },
          { v: 43.1, d: 1 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '— APL' },
          { v: 15.9, d: 1 },
        ],
      },
      {
        cells: [
          { t: '— Avantages fiscaux' },
          { v: 13, d: 1 },
        ],
      },
      {
        cells: [
          { t: '— MaPrimeRénov\'' },
          { v: 1.9, d: 1 },
        ],
      },
      {
        cells: [
          { t: '— Prêt à taux zéro' },
          { v: 1.9, d: 1 },
        ],
      },
    ],
  },
} satisfies Tables

export const series = {
  'prix-des-logements-rapportes-au-revenu-disponible': {
    svg: {
      viewBox: '0 0 720 340',
      titleId: 'cpti-t',
      title: 'Prix des logements / revenu',
      preserveAspectRatio: 'xMidYMid meet',
    },
    title: 'Prix des logements rapportés au revenu disponible',
    subtitle: 'Indice, base 100 en 2015. Il s\'agit d\'une <em>évolution</em>, pas d\'un niveau : deux pays à 100 en 2015 peuvent avoir des niveaux d\'accessibilité très différents.',
    caption: '<b>La dégradation française est ancienne, pas récente.</b> Le ratio prix sur revenu passe de 67,5 en 2000 à 103,7 en 2010 — <b>+54 % en dix ans</b> — puis reflue continûment jusqu\'à 93,6 en 2024, soit 6 % en dessous de son niveau de 2015. La dégradation récente est portée par le Portugal (+38 % depuis 2010), les États-Unis (+29 %) et les Pays-Bas, pas par la France.',
    sources: ['ocde-ocde-base-des-prix-de-l-immobilier-rat'],
    vintage: '2015',
    legend: [
      { color: 's3', label: 'Portugal' },
      { color: 's4', label: 'Pays-Bas' },
      { color: 's2', label: 'États-Unis' },
      { color: 's5', label: 'Allemagne' },
      { color: 's1', label: 'France' },
    ],
    type: 'line',
    layout: {
      kind: 'line',
      tickLabelX: 43,
      tickLabelDy: 4,
      axisLabel: { x: 43, y: 14, text: 'indice, base 100 en 2015', anchor: 'end' },
      axisLineY: 306,
      dotR: 4,
      endLabelDx: 8,
      endLabelDy: 4,
      xLabelY: 324,
    },
    xAxis: { min: 2000, max: 2024, ticks: [2000, 2005, 2010, 2015, 2020, 2024] },
    x: [2000, 2005, 2010, 2015, 2020, 2024],
    y: { min: 60, max: 140, ticks: [60, 80, 100, 120, 140], label: 'indice, base 100 en 2015' },
    series: [
      {
        key: 's3',
        color: 's3',
        label: 'Portugal',
        values: [134.783, 114.983, 106.89, 100, 123.98, 147.291],
      },
      {
        key: 's4',
        color: 's4',
        label: 'Pays-Bas',
        values: [107.793, 115.987, 120.1, 100, 115.987, 130.502],
      },
      {
        key: 's2',
        color: 's2',
        label: 'États-Unis',
        values: [106.288, 123.98, 99.599, 100, 112.007, 128.094],
      },
      {
        key: 's5',
        color: 's5',
        label: 'Allemagne',
        values: [116.488, 102.007, 93.779, 100, 115.987, 104.983],
      },
      {
        key: 's1',
        color: 's1',
        label: 'France',
        values: [67.492, 94.983, 103.679, 100, 98.997, 93.579],
      },
    ],
    frame: { width: 720, height: 340, left: 52, right: 602, top: 66.8, bottom: 306 },
  },
  'prix-des-logements-quatre-pays': {
    svg: {
      viewBox: '0 0 720 330',
      titleId: 'cimm-t',
      title: 'Prix des logements',
      preserveAspectRatio: 'xMidYMid meet',
    },
    title: 'Prix des logements, quatre pays',
    subtitle: 'Indice, base 100 en 2015. Prix nominaux.',
    caption: '<b>Quatre trajectoires, quatre histoires.</b> Les Pays-Bas doublent (106 → 215). L\'Allemagne, atone jusqu\'en 2010, s\'envole ensuite avant de corriger nettement en 2023. L\'Espagne est la seule à avoir connu un krach complet (−35 % entre 2007 et 2013) puis une reprise qui la porte au-dessus de son pic de bulle. <b>La France est de loin la plus plate</b> : +50 % en vingt ans en nominal, avec une correction de 2022 à 2024. <em>Source : Eurostat prc_hpi_a.</em>',
    sources: ['eurostat-prc-hpi-a'],
    vintage: '2015',
    legend: [
      { color: 's1', label: 'France' },
      { color: 's5', label: 'Allemagne' },
      { color: 's2', label: 'Espagne' },
      { color: 's4', label: 'Pays-Bas' },
    ],
    type: 'line',
    layout: {
      kind: 'line',
      tickLabelX: 43,
      tickLabelDy: 4,
      axisLabel: { x: 43, y: 14, text: 'base 100 en 2015', anchor: 'end' },
      axisLineY: 296,
      dotR: 4,
      endLabelDx: 8,
      endLabelDy: 4,
      xLabelY: 314,
    },
    xAxis: { min: 2005, max: 2025, ticks: [2005, 2010, 2015, 2020, 2025] },
    x: [2005, 2006, 2007, 2008, 2009, 2011, 2013, 2015, 2018, 2020, 2022, 2023, 2024, 2025],
    y: { min: 100, max: 200, ticks: [100, 150, 200], label: 'base 100 en 2015' },
    series: [
      {
        key: 's4',
        color: 's4',
        label: 'Pays-Bas',
        values: [
          106.296, null, null, 118.677, null, 109.312, 95.82, 100, 124.392, 144.074, 186.772,
          183.28, 198.201, 215.185,
        ],
      },
      {
        key: 's2',
        color: 's2',
        label: 'Espagne',
        values: [
          null, 135.503, 148.783, null, 136.984, 124.286, 96.19, 100, 118.571, 127.513, 142.011,
          147.672, 160.265, 180.582,
        ],
      },
      {
        key: 's5',
        color: 's5',
        label: 'Allemagne',
        values: [
          83.28, null, null, 82.275, null, 86.772, 92.593, 100, 121.693, 138.677, 164.074, 150.265,
          147.989, 152.698,
        ],
      },
      {
        key: 's1',
        color: 's1',
        label: 'France',
        values: [
          84.709, null, 100.582, 101.481, null, 105.503, 102.91, 100, 107.302, 116.614, 131.799,
          131.27, 126.402, 127.302,
        ],
      },
    ],
    frame: { width: 720, height: 330, left: 52, right: 602, top: 69.19999999999999, bottom: 258.2 },
  },
} satisfies SeriesSet

/** Fiches du chapitre, dans l'ordre : alimente le rail et la recherche. */
export const questions = [
  { id: 's13-q1', title: 'Quelle part du revenu part dans le logement, ici et ailleurs ?' },
  {
    id: 's13-q2',
    title: '« Un parc locatif encadré » : de quel encadrement parle-t-on, et qu\'est-ce qui réduit vraiment le taux d\'effort ?',
  },
  { id: 's13-q3', title: 'Pourquoi les prix ont-ils décroché des revenus ?' },
  { id: 's13-q4', title: 'Construit-on assez ? Et où sont les logements vacants ?' },
  { id: 's13-q5', title: 'De quelle fiscalité du logement parle-t-on ?' },
  { id: 's13-q6', title: 'Combien coûte la politique du logement ?' },
  { id: 's13-q7', title: 'Les APL font-elles monter les loyers ?' },
  { id: 's13-q8', title: 'Encadrer les loyers, ça marche ?' },
  { id: 's13-q9', title: 'Comment faire baisser durablement les prix de 15 % ?' },
  { id: 's13-q10', title: 'Pourquoi les jeunes accèdent-ils moins à la propriété ?' },
] satisfies readonly { id: string; title: string }[]

/**
 * Sources citées dans le texte du chapitre, en plus de celles portées par les
 * tableaux et les figures. La bibliographie les recense aussi : une source
 * citée en prose reste une source du dossier.
 */
export const citedSources = [
  'dgfip-cour-des-comptes-travaux-sur-la-fiscali',
  'eurostat-eurostat-ilc-lvho07c-et-ilc-mded01-2024', 'eurostat-ilc-mded01',
  'sdes-sdes-compte-du-logement-ministere-de-l',
] satisfies readonly SourceId[]
