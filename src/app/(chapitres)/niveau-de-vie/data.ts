// Généré par `npm run extract` depuis Temp/chiffres2027 (3).html.
// Toutes les données chiffrées du chapitre vivent ici, chacune sous sa source
// et son millésime. Voir CLAUDE.md, règles 2 à 4.
import type { ChapterMeta, SeriesSet, SourceId, Tables } from '@/lib/types'

export const meta = {
  slug: 'niveau-de-vie',
  num: 'Thème 15',
  title: 'Niveau de vie, patrimoine et inégalités',
  shortTitle: 'Niveau de vie, patrimoine, inégalités',
  note: 'La question utile n\'est pas « le pouvoir d\'achat augmente-t-il ? » mais « lequel ? ». Moyen ou médian, par ménage ou par unité de consommation — les réponses divergent.',
  status: 'complete',
  updated: '2026-08',
  parts: [
    { label: 'Le patrimoine', title: 'Ce que possèdent les Français' },
  ],
  legacyAnchor: 's15',
} satisfies ChapterMeta

export const tables = {
  'depenses-pre-engagees-2011': {
    vintage: '2011',
    sources: ['insee-insee-et-drees-travaux-sur-les-depenses'],
    columns: [
      {
        key: 'depenses-pre-engagees-2011',
        header: 'Dépenses pré-engagées (2011)',
        type: 'text',
        headerNumeric: false,
      },
      {
        key: 'part-du-revenu-disponible',
        header: 'Part du revenu disponible',
        type: 'number',
        headerNumeric: true,
      },
    ],
    rows: [
      {
        cells: [
          { t: 'Ménages pauvres' },
          { v: 61, d: 0, u: '%' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Ménages modestes non pauvres' },
          { v: 39, d: 0, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Classes moyennes' },
          { v: 31, d: 0, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Ménages aisés' },
          { v: 23, d: 0, u: '%' },
        ],
      },
    ],
  },
  'indice-de-gini-2024-eurostat-echelle-0-100': {
    vintage: '2024',
    sources: ['eurostat-ilc-di12'],
    columns: [
      {
        key: 'indice-de-gini-2024-eurostat-echelle-0-100',
        header: 'Indice de Gini (2024, Eurostat, échelle 0-100)',
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
          { t: '<strong>Avant</strong> transferts, <em>pensions incluses dans les transferts</em>' },
          { v: 53.3, d: 1 },
          { v: 48.7, d: 1 },
          { t: 'n.d.' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<strong>Avant</strong> transferts, <em>pensions exclues</em>' },
          { v: 37, d: 1 },
          { v: 35.5, d: 1 },
          { v: 34.3, d: 1 },
        ],
      },
      {
        cells: [
          { t: '<strong>Après</strong> transferts et impôts' },
          { v: 30, d: 1 },
          { v: 29.5, d: 1 },
          { v: 29.4, d: 1 },
        ],
        emphasis: true,
      },
    ],
  },
  'indice-de-gini-2022': {
    vintage: '2022',
    sources: ['insee-ocde-income-distribution-database-2022'],
    columns: [
      {
        key: 'indice-de-gini-2022',
        header: 'Indice de Gini, 2022',
        type: 'text',
        headerNumeric: false,
      },
      {
        key: 'marche-population-totale',
        header: 'Marché — population totale',
        type: 'number',
        headerNumeric: true,
      },
      {
        key: 'marche-18-65-ans',
        header: 'Marché — <b>18-65 ans</b>',
        type: 'number',
        headerNumeric: true,
      },
      {
        key: 'effet-de-la-correction',
        header: 'Effet de la correction',
        type: 'number',
        headerNumeric: true,
      },
      {
        key: 'disponible-18-65-ans',
        header: 'Disponible — 18-65 ans',
        type: 'number',
        headerNumeric: true,
      },
      { key: 'reduction', header: 'Réduction', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'France' },
          { v: 0.524, d: 3 },
          { v: 0.438, d: 3 },
          { v: -0.086, d: 3 },
          { v: 0.299, d: 3 },
          { v: -31.7, d: 1, u: '%' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'États-Unis' },
          { v: 0.512, d: 3 },
          { v: 0.472, d: 3 },
          { v: -0.041, d: 3 },
          { v: 0.389, d: 3 },
          { v: -17.5, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Royaume-Uni' },
          { v: 0.512, d: 3 },
          { v: 0.462, d: 3 },
          { v: -0.05, d: 3 },
          { v: 0.363, d: 3 },
          { v: -21.3, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Italie' },
          { v: 0.508, d: 3 },
          { v: 0.423, d: 3 },
          { v: -0.085, d: 3 },
          { v: 0.317, d: 3 },
          { v: -25.1, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 0.505, d: 3 },
          { v: 0.418, d: 3 },
          { v: -0.087, d: 3 },
          { v: 0.312, d: 3 },
          { v: -25.4, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Espagne' },
          { v: 0.48, d: 3 },
          { v: 0.414, d: 3 },
          { v: -0.066, d: 3 },
          { v: 0.312, d: 3 },
          { v: -24.6, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Pays-Bas' },
          { v: 0.441, d: 3 },
          { v: 0.395, d: 3 },
          { v: -0.046, d: 3 },
          { v: 0.293, d: 3 },
          { v: -25.8, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Suède' },
          { v: 0.439, d: 3 },
          { v: 0.372, d: 3 },
          { v: -0.067, d: 3 },
          { v: 0.283, d: 3 },
          { v: -23.9, d: 1, u: '%' },
        ],
      },
    ],
  },
  france: {
    vintage: '2024',
    sources: ['insee-ocde-income-distribution-database-2022'],
    columns: [
      { key: 'france', header: 'France', type: 'text', headerNumeric: false },
      { key: '1996', header: '1996', type: 'number', headerNumeric: true },
      { key: '2020', header: '2020', type: 'number', headerNumeric: true },
      { key: '2022', header: '2022', type: 'number', headerNumeric: true },
      { key: '2023', header: '2023', type: 'number', headerNumeric: true },
      { key: '2024', header: '2024', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Gini du revenu disponible' },
          { v: 0.274, d: 3 },
          { v: 0.277, d: 3 },
          { v: 0.294, d: 3 },
          { v: 0.297, d: 3 },
          { v: 0.302, d: 3 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Rapport D9/D1' },
          null,
          { v: 3.3, d: 2 },
          { v: 3.38, d: 2 },
          { v: 3.49, d: 2 },
          { v: 3.48, d: 2 },
        ],
      },
      {
        cells: [
          { t: 'Rapport (100−S80)/S20' },
          null,
          { v: 4.07, d: 2 },
          { v: 4.4, d: 2 },
          { v: 4.53, d: 2 },
          { v: 4.62, d: 2 },
        ],
      },
      {
        cells: [
          { t: 'Taux de pauvreté à 60 % du médian' },
          null,
          null,
          { v: 14.4, d: 1, u: '%' },
          { v: 15.4, d: 1, u: '%' },
          null,
        ],
      },
    ],
  },
  'fin-2024': {
    vintage: '2024',
    sources: [
      'insee-insee-comptes-de-patrimoine-base-2020', 'insee-france-insee-fin-2024-allemagne-bu',
      'insee-france-insee-fin-2024-allemagne-bu-2',
      'insee-insee-enquete-histoire-de-vie-et-patrim',
    ],
    columns: [
      { key: 'fin-2024', header: 'Fin 2024', type: 'text', headerNumeric: false },
      { key: 'md', header: 'Md€', type: 'number', headerNumeric: true },
      {
        key: 'du-patrimoine-brut',
        header: '% du patrimoine brut',
        type: 'number',
        headerNumeric: true,
      },
      { key: 'ce-que-c-est', header: 'Ce que c\'est', type: 'text', headerNumeric: false },
    ],
    rows: [
      {
        cells: [
          { t: '<b>La pierre et les autres actifs réels</b>' },
          { v: 9967, d: 0, strong: true },
          { v: 58.4, d: 1, u: '%', strong: true },
          {
            t: 'Logements 4 807, <b>terrains bâtis 4 043</b>, autres 1 117. Près de la moitié de la valeur immobilière est du foncier, pas du bâti.',
          },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>L\'épargne liquide</b>' },
          { v: 2108, d: 0, strong: true },
          { v: 12.4, d: 1, u: '%', strong: true },
          {
            t: 'Numéraire, dépôts à vue, livrets. <b>86,9 % des ménages en détiennent</b>, mais cela ne pèse que 12 % du patrimoine.',
          },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>L\'assurance-vie et l\'épargne retraite</b>' },
          { v: 2090, d: 0, strong: true },
          { v: 12.2, d: 1, u: '%', strong: true },
          {
            t: 'Dont environ deux tiers en fonds euros, eux-mêmes investis à près de 58 % en obligations.',
          },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>Les actions et parts de fonds</b>' },
          { v: 2155, d: 0, strong: true },
          { v: 12.6, d: 1, u: '%', strong: true },
          {
            t: 'Dominées par les <b>actions non cotées</b> — le capital des entreprises familiales — bien plus que par la Bourse.',
          },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Autres créances et divers' },
          { v: 743, d: 0 },
          { v: 4.4, d: 1, u: '%' },
          { t: 'Résidu non ventilé par l\'Insee.' },
        ],
      },
      {
        cells: [
          { t: '<b>Patrimoine brut</b>' },
          { v: 17063, d: 0, strong: true },
          { v: 100, d: 0, u: '%' },
          null,
        ],
        total: true,
      },
      {
        cells: [
          { t: '<b>La dette</b>' },
          { v: -2112, d: 0, strong: true },
          { v: 12.4, d: 1, u: '% du brut', strong: true },
          { t: 'Dont 1 286 Md€ de crédits à l\'habitat et 221 Md€ de crédits à la consommation.' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>Patrimoine net</b>' },
          { v: 14953, d: 0, strong: true },
          null,
          { v: 76.5, d: 1, u: '% du patrimoine national net' },
        ],
        total: true,
      },
    ],
  },
  'structure-du-patrimoine-brut-des-menages': {
    vintage: '2026',
    sources: [
      'insee-insee-comptes-de-patrimoine-base-2020', 'insee-france-insee-fin-2024-allemagne-bu',
      'insee-france-insee-fin-2024-allemagne-bu-2',
      'insee-insee-enquete-histoire-de-vie-et-patrim',
    ],
    columns: [
      {
        key: 'structure-du-patrimoine-brut-des-menages',
        header: 'Structure du patrimoine brut des ménages',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'france', header: 'France', type: 'number', headerNumeric: true },
      { key: 'allemagne', header: 'Allemagne', type: 'number', headerNumeric: true },
      { key: 'italie', header: 'Italie', type: 'number', headerNumeric: true },
      { key: 'etats-unis', header: 'États-Unis', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: '<b>Immobilier et actifs réels</b>' },
          { v: 58.4, d: 1, u: '%', strong: true },
          { v: 58.5, d: 1, u: '%' },
          { v: 52.9, d: 1, u: '%' },
          { v: 30.2, d: 1, u: '%', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Dépôts et épargne liquide' },
          { v: 12.4, d: 1, u: '%' },
          { v: 15.3, d: 1, u: '%' },
          { v: 12.4, d: 1, u: '%' },
          { v: 7.7, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Assurance-vie, fonds de pension, droits à retraite' },
          { v: 12.2, d: 1, u: '%' },
          { v: 11.4, d: 1, u: '%' },
          null,
          { v: 18, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: '<b>Actions, fonds et titres</b>' },
          { v: 12.6, d: 1, u: '%', strong: true },
          { v: 14.8, d: 1, u: '%' },
          { v: 17.7, d: 1, u: '%' },
          { v: 40.2, d: 1, u: '%', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>Dette rapportée au patrimoine brut</b>' },
          { v: 12.4, d: 1, u: '%', strong: true },
          { v: 9.5, d: 1, u: '%' },
          { v: 8.2, d: 1, u: '%' },
          { v: 10.5, d: 1, u: '%' },
        ],
        total: true,
      },
    ],
  },
  'part-des-actions-et-parts-de-fonds-dans-le-patrimoine-fina': {
    vintage: '2026',
    sources: [
      'insee-insee-comptes-de-patrimoine-base-2020', 'insee-france-insee-fin-2024-allemagne-bu',
      'insee-france-insee-fin-2024-allemagne-bu-2',
      'insee-insee-enquete-histoire-de-vie-et-patrim',
    ],
    columns: [
      {
        key: 'part-des-actions-et-parts-de-fonds-dans-le-patrimoine-fina',
        header: 'Part des actions et parts de fonds dans le patrimoine financier',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'c2', header: '%', type: 'number', headerNumeric: true },
      { key: 'perimetre', header: 'Périmètre', type: 'text', headerNumeric: false },
    ],
    rows: [
      {
        cells: [
          { t: 'États-Unis' },
          { v: 53.3, d: 1, strong: true },
          { t: 'dont 11,4 points de parts d\'entreprises non cotées' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Belgique' },
          { v: 48.4, d: 1, strong: true },
          { t: 'dont 395,6 Md€ de non-coté contre <b>93,6 Md€ d\'actions cotées</b>' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 35.7, d: 1 },
          { t: 'bloc « titres » unique, titres de créance inclus' },
        ],
      },
      {
        cells: [
          { t: '<b>France</b>' },
          { v: 30.4, d: 1, strong: true },
          { t: 'actions et parts de fonds' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Italie' },
          { v: 29.3, d: 1 },
          { t: 'actions et participations seules' },
        ],
      },
    ],
  },
  'debut-2024': {
    vintage: '2024',
    sources: [
      'insee-insee-comptes-de-patrimoine-base-2020', 'insee-france-insee-fin-2024-allemagne-bu',
      'insee-france-insee-fin-2024-allemagne-bu-2',
      'insee-insee-enquete-histoire-de-vie-et-patrim',
    ],
    columns: [
      { key: 'debut-2024', header: 'Début 2024', type: 'text', headerNumeric: false },
      { key: 'patrimoine-brut', header: 'Patrimoine brut', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { v: 30, d: 0, u: '% des ménages possèdent moins de' },
          { v: 40100, d: 0, u: '€' },
        ],
      },
      {
        cells: [
          { t: '<b>Médiane</b>' },
          { v: 205100, d: 0, u: '€', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>Seuil des 10 % les mieux dotés</b>' },
          { v: 857700, d: 0, u: '€', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Seuil des 5 %' },
          { v: 1268200, d: 0, u: '€' },
        ],
      },
      {
        cells: [
          { t: '<b>Seuil du 1 %</b>' },
          { v: 3020900, d: 0, u: '€', strong: true },
        ],
        total: true,
      },
    ],
  },
  'encours-de-credit-aux-particuliers-juin-2026': {
    vintage: '2026',
    sources: ['eurostat-tec00104', 'insee-insee-insee-focus-n-354-enquete-histo'],
    columns: [
      {
        key: 'encours-de-credit-aux-particuliers-juin-2026',
        header: 'Encours de crédit aux particuliers, juin 2026',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'md', header: 'Md€', type: 'number', headerNumeric: true },
      { key: 'part', header: 'Part', type: 'number', headerNumeric: true },
      {
        key: 'croissance-annuelle',
        header: 'Croissance annuelle',
        type: 'number',
        headerNumeric: true,
      },
    ],
    rows: [
      {
        cells: [
          { t: '<b>Crédits à l\'habitat</b>' },
          { v: 1286, d: 0, strong: true },
          { v: 83, d: 0, u: '%', strong: true },
          { v: 0.2, d: 1, u: '%', sign: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Crédits à la consommation' },
          { v: 221, d: 0 },
          { v: 14, d: 0, u: '%' },
          { v: 2.4, d: 1, u: '%', sign: true },
        ],
      },
      {
        cells: [
          { t: 'Autres crédits' },
          { v: 36, d: 0 },
          { v: 2, d: 0, u: '%' },
          { v: 18.8, d: 1, u: '%', sign: true },
        ],
      },
      {
        cells: [
          { t: '<b>Total</b>' },
          { v: 1543, d: 0, strong: true },
          { v: 100, d: 0, u: '%' },
          { v: 0.9, d: 1, u: '%', sign: true },
        ],
        total: true,
      },
    ],
  },
  'france-2': {
    vintage: '2026',
    sources: ['eurostat-tec00104', 'insee-insee-insee-focus-n-354-enquete-histo'],
    columns: [
      { key: 'france', header: 'France', type: 'text', headerNumeric: false },
      { key: 'valeur', header: 'Valeur', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Ménages ayant un emprunt en cours' },
          { v: 45.6, d: 1, u: '%', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '— endettés pour l\'immobilier' },
          { v: 30, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: '— endettés pour la consommation' },
          { v: 24.5, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Montant moyen emprunté, 2025' },
          { v: 193948, d: 0, u: '€' },
        ],
        separator: true,
      },
      {
        cells: [
          { t: 'Durée moyenne à l\'octroi' },
          { v: 22.4, d: 1, u: 'ans' },
        ],
      },
      {
        cells: [
          { t: '<b>Taux d\'effort moyen à l\'octroi</b>' },
          { v: 30.4, d: 1, u: '%', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Endettement moyen, en années de revenu' },
          { v: 4.5, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Part de la production au-delà du seuil de 35 %' },
          { t: '16,3 % <i>(27,9 % en 2020)</i>' },
        ],
      },
      {
        cells: [
          { t: '<b>Part de la production à taux fixe</b>' },
          { v: 99.6, d: 1, u: '%', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Part de l\'encours cautionné ou garanti' },
          { v: 97.4, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Primo-accédants dans la production' },
          { v: 43.7, d: 1, u: '%' },
        ],
        total: true,
      },
    ],
  },
  'part-du-patrimoine-detenue-par': {
    vintage: '2021',
    sources: ['insee-insee-enquete-histoire-de-vie-et-patrim-2'],
    columns: [
      {
        key: 'part-du-patrimoine-detenue-par',
        header: 'Part du patrimoine détenue par',
        type: 'text',
        headerNumeric: false,
      },
      {
        key: 'insee-enquete-2021',
        header: 'Insee (enquête, 2021)',
        type: 'number',
        headerNumeric: true,
      },
      { key: 'wid-world', header: 'WID.world', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Le 1 % le mieux doté' },
          { v: 15, d: 0, u: '%', approx: true },
          { v: 25, d: 0, u: '%', approx: true },
        ],
      },
      {
        cells: [
          { t: 'Les 10 % les mieux dotés' },
          { v: 47, d: 0, u: '%', approx: true },
          { t: '≈ 55-60 %' },
        ],
      },
      {
        cells: [
          { t: 'La moitié la moins dotée' },
          { v: 5, d: 0, u: '%', approx: true },
          { v: 5, d: 0, u: '%', approx: true },
        ],
      },
    ],
  },
  'patrimoine-net-par-menage-enquete-bce-2023': {
    vintage: '2023',
    sources: ['eurostat-insee-premiere-n-2081-comptes-de-patri'],
    columns: [
      {
        key: 'patrimoine-net-par-menage-enquete-bce-2023',
        header: 'Patrimoine net par ménage, enquête BCE 2023',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'median', header: 'Médian', type: 'number', headerNumeric: true },
      { key: 'moyen', header: 'Moyen', type: 'number', headerNumeric: true },
      { key: 'moyen-median', header: 'Moyen / médian', type: 'number', headerNumeric: true },
      { key: 'proprietaires', header: 'Propriétaires', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Belgique' },
          { v: 254200, d: 0, u: '€' },
          { v: 411500, d: 0, u: '€' },
          { v: 1.62, d: 2 },
          { v: 66.7, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Italie' },
          { v: 162800, d: 0, u: '€' },
          { v: 307300, d: 0, u: '€' },
          { v: 1.89, d: 2 },
          { v: 74.5, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Espagne' },
          { v: 151600, d: 0, u: '€' },
          { v: 321800, d: 0, u: '€' },
          { v: 2.12, d: 2 },
          { v: 72.1, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'France' },
          { v: 149000, d: 0, u: '€' },
          { v: 330700, d: 0, u: '€' },
          { v: 2.22, d: 2 },
          { v: 57.2, d: 1, u: '%' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Pays-Bas' },
          { v: 143500, d: 0, u: '€' },
          { v: 257300, d: 0, u: '€' },
          { v: 1.79, d: 2 },
          { v: 56.6, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Zone euro' },
          { v: 140100, d: 0, u: '€' },
          { v: 312000, d: 0, u: '€' },
          { v: 2.23, d: 2 },
          { v: 60.1, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 103300, d: 0, u: '€' },
          { v: 324000, d: 0, u: '€' },
          { v: 3.14, d: 2, strong: true },
          { v: 41.8, d: 1, u: '%', strong: true },
        ],
        emphasis: true,
      },
    ],
  },
  placement: {
    vintage: '2025',
    sources: ['eurostat-insee-premiere-n-2081-comptes-de-patri'],
    columns: [
      { key: 'placement', header: 'Placement', type: 'text', headerNumeric: false },
      { key: 'md', header: 'Md€', type: 'number', headerNumeric: true },
      { key: 'part', header: 'Part', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: '<b>Produits de taux</b>' },
          { v: 3920.7, d: 1 },
          { v: 59.9, d: 1, u: '%' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'dont assurance-vie et retraite, supports en euros' },
          { v: 1573.7, d: 1 },
          { v: 24.1, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'dont dépôts rémunérés <em>(épargne réglementée 952 Md€)</em>' },
          { v: 1366.9, d: 1 },
          { v: 20.9, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'dont numéraire et dépôts à vue' },
          { v: 767.3, d: 1 },
          { v: 11.7, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: '<b>Produits de fonds propres</b>' },
          { v: 2517, d: 1 },
          { v: 38.5, d: 1, u: '%' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'dont actions non cotées et participations' },
          { v: 1452.6, d: 1 },
          { v: 22.2, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'dont unités de compte d\'assurance-vie' },
          { v: 579.8, d: 1 },
          { v: 8.9, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'dont actions cotées détenues en direct' },
          { v: 298.5, d: 1 },
          { v: 4.6, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'dont actions détenues via des fonds' },
          { v: 186.1, d: 1 },
          { v: 2.8, d: 1, u: '%' },
        ],
      },
    ],
  },
  'detention-par-les-non-residents': {
    vintage: '2025',
    sources: ['eurostat-insee-premiere-n-2081-comptes-de-patri'],
    columns: [
      {
        key: 'detention-par-les-non-residents',
        header: 'Détention par les non-résidents',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'part', header: 'Part', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Capital des sociétés françaises du CAC 40, fin 2024' },
          { v: 50, d: 1, u: '% — 1 083 Md€ sur 2 165' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Ensemble des actions cotées françaises, fin 2024' },
          { v: 46, d: 0, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Hors CAC 40' },
          { v: 30, d: 0, u: '%', approx: true },
        ],
      },
      {
        cells: [
          { t: 'Actions cotées, Allemagne' },
          { v: 56.9, d: 1, u: '%' },
        ],
        separator: true,
      },
      {
        cells: [
          { t: 'Actions cotées, Italie' },
          { v: 49.4, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Actions cotées, Espagne' },
          { v: 48.7, d: 1, u: '%' },
        ],
      },
    ],
  },
  'patrimoine-des-menages-fin-2024': {
    vintage: '2024',
    sources: [
      'insee-insee-comptes-de-patrimoine-base-2020-2',
      'banque-de-france-banque-de-france-stat-info-epargne-et',
      'insee-insee-enquete-histoire-de-vie-et-patrim-3',
      'acpr-acpr-analyses-syntheses-n-180-juin',
    ],
    columns: [
      {
        key: 'patrimoine-des-menages-fin-2024',
        header: 'Patrimoine des ménages, fin 2024',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'md', header: 'Md€', type: 'number', headerNumeric: true },
      { key: 'du-brut', header: '% du brut', type: 'number', headerNumeric: true },
      {
        key: 'evolution-sur-un-an',
        header: 'Évolution sur un an',
        type: 'number',
        headerNumeric: true,
      },
    ],
    rows: [
      {
        cells: [
          { t: '<b>Actifs non financiers</b>' },
          { v: 9967, d: 0, strong: true },
          { v: 58.4, d: 1, u: '%', strong: true },
          { v: -0.6, d: 1, u: '%' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '— logements, le bâti seul' },
          { v: 4807, d: 0 },
          { v: 28.2, d: 1, u: '%' },
          { v: 1.2, d: 1, u: '%', sign: true },
        ],
      },
      {
        cells: [
          { t: '— <b>terrains bâtis</b>' },
          { v: 4043, d: 0, strong: true },
          { v: 23.7, d: 1, u: '%' },
          { v: -3.2, d: 1, u: '%', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '— autres bâtiments, équipements, actifs divers' },
          { v: 1117, d: 0 },
          { v: 6.5, d: 1, u: '%' },
          null,
        ],
      },
      {
        cells: [
          { t: '<b>Actifs financiers</b>' },
          { v: 7096, d: 0, strong: true },
          { v: 41.6, d: 1, u: '%', strong: true },
          null,
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>Patrimoine brut</b>' },
          { v: 17063, d: 0, strong: true },
          { v: 100, d: 0, u: '%' },
          null,
        ],
        total: true,
      },
      {
        cells: [
          { t: 'Passif (crédits)' },
          { v: -2112, d: 0 },
          { v: 12.4, d: 1, u: '% du brut' },
          { v: 0, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: '<b>Patrimoine net</b>' },
          { v: 14953, d: 0, strong: true },
          null,
          { v: 0.7, d: 1, u: '%', sign: true },
        ],
        total: true,
      },
    ],
  },
  'taux-de-detention-par-les-menages-debut-2024': {
    vintage: '2024',
    sources: [
      'insee-insee-comptes-de-patrimoine-base-2020-2',
      'banque-de-france-banque-de-france-stat-info-epargne-et',
      'insee-insee-enquete-histoire-de-vie-et-patrim-3',
      'acpr-acpr-analyses-syntheses-n-180-juin',
    ],
    columns: [
      {
        key: 'taux-de-detention-par-les-menages-debut-2024',
        header: 'Taux de détention par les ménages, début 2024',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'c2', header: '%', type: 'number', headerNumeric: true },
      {
        key: 'evolution-depuis-1998',
        header: 'Évolution depuis 1998',
        type: 'number',
        headerNumeric: true,
      },
    ],
    rows: [
      {
        cells: [
          { t: 'Au moins un livret d\'épargne' },
          { v: 86.9, d: 1, strong: true },
          { t: 'stable' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '— dont Livret A' },
          { v: 78.1, d: 1 },
          null,
        ],
      },
      {
        cells: [
          { t: '— dont LEP' },
          { v: 21.5, d: 1 },
          null,
        ],
      },
      {
        cells: [
          { t: '<b>Assurance-vie</b>' },
          { v: 41.7, d: 1, strong: true },
          { v: 13, d: 0, u: 'points', sign: true, strong: true, after: '(28,9 % en 1998)' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Épargne logement (PEL, CEL)' },
          { v: 27, d: 1 },
          { v: -14, d: 0, u: 'points' },
        ],
      },
      {
        cells: [
          { t: 'Épargne retraite' },
          { v: 19.1, d: 1 },
          null,
        ],
      },
      {
        cells: [
          { t: '<b>Valeurs mobilières</b> (actions, obligations, fonds)' },
          { v: 17.4, d: 1, strong: true },
          { v: -7, d: 0, u: 'points', strong: true, after: 'depuis 2004 (24,2 %)' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Épargne salariale' },
          { v: 15.6, d: 1 },
          null,
        ],
      },
      {
        cells: [
          { t: '<b>Résidence principale</b>' },
          { v: 57.2, d: 1, strong: true },
          { t: '<b>stable depuis 25 ans</b>' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Au moins un bien immobilier' },
          { v: 61.2, d: 1 },
          null,
        ],
      },
      {
        cells: [
          { t: 'Patrimoine professionnel' },
          { v: 15.3, d: 1 },
          { v: -4, d: 0, u: 'points' },
        ],
      },
      {
        cells: [
          { t: 'Au moins un emprunt en cours' },
          { v: 45.6, d: 1 },
          null,
        ],
        total: true,
      },
    ],
  },
  'ce-que-cela-represente-en-dette-publique': {
    vintage: '2026',
    sources: [
      'insee-insee-comptes-de-patrimoine-base-2020-2',
      'banque-de-france-banque-de-france-stat-info-epargne-et',
      'insee-insee-enquete-histoire-de-vie-et-patrim-3',
      'acpr-acpr-analyses-syntheses-n-180-juin',
    ],
    columns: [
      {
        key: 'ce-que-cela-represente-en-dette-publique',
        header: 'Ce que cela représente en dette publique',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'montant', header: 'Montant', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Obligations souveraines françaises détenues par les assureurs, fin 2024' },
          { v: 336.4, d: 1, u: 'Md€' },
        ],
      },
      {
        cells: [
          { t: 'Dette publique au sens de Maastricht, fin 2024' },
          { v: 3305.3, d: 1, u: 'Md€' },
        ],
      },
      {
        cells: [
          { t: '<b>Part de la dette publique détenue par les assureurs</b>' },
          { v: 10.2, d: 1, u: '%', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Part adossée <i>in fine</i> à l\'épargne des ménages en assurance-vie' },
          { t: 'de l\'ordre de <b>8 %</b>' },
        ],
        total: true,
      },
    ],
  },
  'ce-que-rapporte-le-fonds-en-euros': {
    vintage: '2025',
    sources: [
      'insee-insee-comptes-de-patrimoine-base-2020-2',
      'banque-de-france-banque-de-france-stat-info-epargne-et',
      'insee-insee-enquete-histoire-de-vie-et-patrim-3',
      'acpr-acpr-analyses-syntheses-n-180-juin',
    ],
    columns: [
      {
        key: 'ce-que-rapporte-le-fonds-en-euros',
        header: 'Ce que rapporte le fonds en euros',
        type: 'text',
        headerNumeric: false,
      },
      { key: '2022', header: '2022', type: 'number', headerNumeric: true },
      { key: '2023', header: '2023', type: 'number', headerNumeric: true },
      { key: '2024', header: '2024', type: 'number', headerNumeric: true },
      { key: '2025', header: '2025', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Rendement moyen servi, contrats individuels' },
          { v: 2.26, d: 2, u: '%' },
          { v: 2.63, d: 2, u: '%' },
          { v: 2.63, d: 2, u: '%' },
          { v: 2.63, d: 2, u: '%', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Inflation' },
          null,
          null,
          { v: 2, d: 1, u: '%' },
          { v: 0.9, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Livret A, moyenne annuelle' },
          null,
          null,
          { v: 3.1, d: 1, u: '%' },
          { v: 2.2, d: 1, u: '%' },
        ],
        total: true,
      },
    ],
  },
  'seuil-de-patrimoine-debut-2024': {
    vintage: '2024',
    sources: [
      'insee-insee-enquete-histoire-de-vie-et-patrim-4',
      'insee-insee-enquete-histoire-de-vie-et-patrim-5',
      'insee-conseil-des-prelevements-obligatoires-et',
    ],
    columns: [
      {
        key: 'seuil-de-patrimoine-debut-2024',
        header: 'Seuil de patrimoine, début 2024',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'brut', header: 'Brut', type: 'number', headerNumeric: true },
      { key: 'net', header: 'Net', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { v: 10, d: 0, u: '% les moins dotés (D1)' },
          { v: 6200, d: 0, u: '€' },
          { v: 4600, d: 0, u: '€' },
        ],
      },
      {
        cells: [
          { t: 'D2' },
          { v: 16500, d: 0, u: '€' },
          { v: 13200, d: 0, u: '€' },
        ],
      },
      {
        cells: [
          { t: '<b>D3 — 30 % des ménages sont en dessous</b>' },
          { v: 40100, d: 0, u: '€', strong: true },
          { v: 34100, d: 0, u: '€' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'D4' },
          { v: 112100, d: 0, u: '€' },
          { v: 77900, d: 0, u: '€' },
        ],
      },
      {
        cells: [
          { t: '<b>Médiane</b>' },
          { v: 205100, d: 0, u: '€', strong: true },
          { v: 148100, d: 0, u: '€', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'D6' },
          { v: 283200, d: 0, u: '€' },
          { v: 224200, d: 0, u: '€' },
        ],
      },
      {
        cells: [
          { t: 'D7' },
          { v: 381800, d: 0, u: '€' },
          { v: 317400, d: 0, u: '€' },
        ],
      },
      {
        cells: [
          { t: 'D8' },
          { v: 530000, d: 0, u: '€' },
          { v: 457900, d: 0, u: '€' },
        ],
      },
      {
        cells: [
          { t: '<b>Seuil des 10 % les mieux dotés</b>' },
          { v: 857700, d: 0, u: '€', strong: true },
          { v: 750400, d: 0, u: '€' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>Seuil des 5 %</b>' },
          { v: 1268200, d: 0, u: '€', strong: true },
          null,
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>Seuil du 1 %</b>' },
          { v: 3020900, d: 0, u: '€', strong: true },
          null,
        ],
        total: true,
      },
    ],
  },
  'patrimoine-brut-selon-l-age-debut-2024': {
    vintage: '2024',
    sources: [
      'insee-insee-enquete-histoire-de-vie-et-patrim-4',
      'insee-insee-enquete-histoire-de-vie-et-patrim-5',
      'insee-conseil-des-prelevements-obligatoires-et',
    ],
    columns: [
      {
        key: 'patrimoine-brut-selon-l-age-debut-2024',
        header: 'Patrimoine brut selon l\'âge, début 2024',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'median', header: 'Médian', type: 'number', headerNumeric: true },
      { key: 'moyen', header: 'Moyen', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Moins de 30 ans' },
          { v: 26100, d: 0, u: '€', strong: true },
          { v: 104400, d: 0, u: '€' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { v: 30, d: 0, u: 'à 39 ans' },
          { v: 146200, d: 0, u: '€' },
          { v: 265000, d: 0, u: '€' },
        ],
      },
      {
        cells: [
          { v: 40, d: 0, u: 'à 49 ans' },
          { v: 215200, d: 0, u: '€' },
          { v: 367600, d: 0, u: '€' },
        ],
      },
      {
        cells: [
          { v: 50, d: 0, u: 'à 59 ans' },
          { v: 254100, d: 0, u: '€', strong: true },
          { v: 464800, d: 0, u: '€' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { v: 60, d: 0, u: 'à 69 ans' },
          { v: 245000, d: 0, u: '€' },
          { v: 462500, d: 0, u: '€' },
        ],
      },
      {
        cells: [
          { v: 70, d: 0, u: 'ans ou plus' },
          { v: 247600, d: 0, u: '€', strong: true },
          { v: 420300, d: 0, u: '€' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Ensemble' },
          { v: 205100, d: 0, u: '€' },
          { v: 374900, d: 0, u: '€' },
        ],
        total: true,
      },
    ],
  },
  item: {
    vintage: '2020',
    sources: [
      'insee-insee-enquete-histoire-de-vie-et-patrim-4',
      'insee-insee-enquete-histoire-de-vie-et-patrim-5',
      'insee-conseil-des-prelevements-obligatoires-et',
    ],
    columns: [
      { key: 'c1', header: '', type: 'text', headerNumeric: false },
      { key: '1970', header: '1970', type: 'number', headerNumeric: true },
      { key: '2020', header: '2020', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: '<b>Part du patrimoine total qui est héritée plutôt qu\'accumulée</b>' },
          { v: 35, d: 0, u: '%', strong: true },
          { v: 60, d: 0, u: '%', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Flux successoral annuel, en % du revenu national' },
          { t: '≈ 5 % <i>(1950)</i>' },
          { t: '> 15 %, soit ≈ 300 Md€/an' },
        ],
      },
      {
        cells: [
          { t: 'Âge moyen à l\'héritage' },
          { t: '≈ 30 ans <i>(début XX<sup>e</sup>)</i>' },
          { v: 50, d: 0, u: 'ans', approx: true },
        ],
        total: true,
      },
    ],
  },
  'heritage-recu-sur-la-vie-entiere': {
    vintage: '2026',
    sources: [
      'insee-insee-enquete-histoire-de-vie-et-patrim-4',
      'insee-insee-enquete-histoire-de-vie-et-patrim-5',
      'insee-conseil-des-prelevements-obligatoires-et',
    ],
    columns: [
      {
        key: 'heritage-recu-sur-la-vie-entiere',
        header: 'Héritage reçu sur la vie entière',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'montant', header: 'Montant', type: 'number', headerNumeric: true },
      {
        key: 'situation-du-menage',
        header: 'Situation du ménage',
        type: 'text',
        headerNumeric: false,
      },
    ],
    rows: [
      {
        cells: [
          { t: 'Médiane' },
          { v: 70000, d: 0, u: '€', approx: true },
          { v: 41, d: 0, u: '% des ménages ont déjà hérité' },
        ],
      },
      {
        cells: [
          { t: 'Top 10 %' },
          { t: '> 500 000 €' },
          null,
        ],
      },
      {
        cells: [
          { t: 'Top 1 %' },
          { v: 4.2, d: 1, u: 'M€', approx: true },
          null,
        ],
      },
      {
        cells: [
          { t: '<b>Top 0,1 %</b>' },
          { v: 13, d: 0, u: 'M€', approx: true, strong: true },
          { t: 'Rapport au médian : <b>≈ 180</b>' },
        ],
        emphasis: true,
      },
    ],
  },
  'la-fiscalite-du-patrimoine-2024': {
    vintage: '2024',
    sources: [
      'insee-insee-enquete-histoire-de-vie-et-patrim-4',
      'insee-insee-enquete-histoire-de-vie-et-patrim-5',
      'insee-conseil-des-prelevements-obligatoires-et',
    ],
    columns: [
      {
        key: 'la-fiscalite-du-patrimoine-2024',
        header: 'La fiscalité du patrimoine, 2024',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'montant-ou-taux', header: 'Montant ou taux', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Imposition totale du patrimoine' },
          { v: 113.2, d: 1, u: 'Md€' },
        ],
      },
      {
        cells: [
          { t: '— dont détention et transmission' },
          { v: 64.3, d: 1, u: 'Md€' },
        ],
      },
      {
        cells: [
          { t: '— dont revenus du patrimoine' },
          { v: 48.9, d: 1, u: 'Md€' },
        ],
      },
      {
        cells: [
          { t: 'Taxation de la détention, rapportée au patrimoine' },
          { v: 0.4, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: '<b>Taux effectif d\'une transmission optimisée</b> (pacte Dutreil et démembrement)' },
          { v: 2.1, d: 1, u: '%', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>Taux effectif d\'une transmission non optimisée</b>' },
          { v: 39.3, d: 1, u: '%', strong: true },
        ],
        emphasis: true,
      },
    ],
  },
  'patrimoine-net-des-menages-en-niveau-agrege': {
    vintage: '2025',
    sources: ['eurostat-france-insee-comptes-de-patrimoine-ba'],
    columns: [
      {
        key: 'patrimoine-net-des-menages-en-niveau-agrege',
        header: 'Patrimoine net des ménages, en niveau agrégé',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'montant', header: 'Montant', type: 'number', headerNumeric: true },
      {
        key: 'en-annees-de-revenu-disponible',
        header: 'En années de revenu disponible',
        type: 'number',
        headerNumeric: true,
      },
    ],
    rows: [
      {
        cells: [
          { t: '<b>France</b>, fin 2024' },
          { v: 14953, d: 0, u: 'Md€' },
          { v: 8.2, d: 1, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>Italie</b>, fin 2024' },
          { v: 11732, d: 0, u: 'Md€' },
          { v: 8.2, d: 1, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>États-Unis</b>, T4 2025' },
          { v: 184.1, d: 1, u: 'T$' },
          { v: 7.94, d: 2, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Pays-Bas, 2023' },
          { v: 5046, d: 0, u: 'Md€' },
          { t: 'voir ci-dessous' },
        ],
      },
      {
        cells: [
          { t: 'Royaume-Uni, 2024' },
          { v: 10.8, d: 1, u: 'T£' },
          null,
        ],
      },
      {
        cells: [
          { t: 'Allemagne, Espagne, Belgique' },
          { t: 'non obtenus' },
          null,
        ],
        missing: true,
      },
    ],
  },
  'part-des-actifs-non-financiers-dans-le-patrimoine-des-mena': {
    vintage: '2025',
    sources: ['eurostat-france-insee-comptes-de-patrimoine-ba'],
    columns: [
      {
        key: 'part-des-actifs-non-financiers-dans-le-patrimoine-des-mena',
        header: 'Part des actifs non financiers dans le patrimoine des ménages',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'c2', header: '%', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Royaume-Uni, 2024' },
          { v: 61, d: 0, approx: true },
        ],
      },
      {
        cells: [
          { t: '<b>France</b>, fin 2024' },
          { v: 58.4, d: 1, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Italie, fin 2024' },
          { v: 52.9, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Pays-Bas, 2023' },
          { v: 48.9, d: 1 },
        ],
      },
      {
        cells: [
          { t: '<b>États-Unis</b>, T4 2025' },
          { v: 30, d: 1, strong: true },
        ],
        total: true,
      },
    ],
  },
  source: {
    vintage: '2025',
    sources: ['eurostat-france-insee-comptes-de-patrimoine-ba'],
    columns: [
      { key: 'source', header: 'Source', type: 'text', headerNumeric: false },
      {
        key: 'traitement-des-droits-a-retraite',
        header: 'Traitement des droits à retraite',
        type: 'text',
        headerNumeric: false,
      },
      {
        key: 'resultat-pour-les-pays-bas',
        header: 'Résultat pour les Pays-Bas',
        type: 'number',
        headerNumeric: true,
      },
    ],
    rows: [
      {
        cells: [
          { t: 'Comptes nationaux (CBS, 2023)' },
          { t: '<b>Inclus</b>' },
          {
            t: 'Actifs financiers 3 120 Md€, <b>dont 1 620 Md€ de droits à pension</b> ; patrimoine net <b>5 046 Md€</b>',
          },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Enquête de la BCE (2023)' },
          { t: '<b>Exclus</b>' },
          { t: 'Patrimoine net médian <b>143 500 €</b>, sous la France, l\'Italie et l\'Espagne' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Comptes distributifs de la BCE (2024)' },
          { t: 'Exclus également' },
          { t: 'Couvre environ 90 % des actifs des comptes nationaux' },
        ],
      },
    ],
  },
  'engagements-implicites-du-systeme-de-retraite': {
    vintage: '2025',
    sources: ['eurostat-france-insee-comptes-de-patrimoine-ba'],
    columns: [
      {
        key: 'engagements-implicites-du-systeme-de-retraite',
        header: 'Engagements implicites du système de retraite',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'valeur', header: 'Valeur', type: 'number', headerNumeric: true },
      { key: 'hypothese', header: 'Hypothèse', type: 'text', headerNumeric: false },
    ],
    rows: [
      {
        cells: [
          { t: '<b>France, fin 2021</b>' },
          { t: '<b>≈ 400 % du PIB</b>, soit ≈ 10 000 Md€' },
          { t: 'Taux d\'actualisation 2 % réel, droits acquis à date' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Variante à 1 % réel' },
          { v: 417, d: 0, u: '% du PIB' },
          { t: 'Sensibilité au taux d\'actualisation' },
        ],
      },
      {
        cells: [
          { t: '— dont fonction publique d\'État' },
          { v: 1317, d: 0, u: 'Md€' },
          { t: 'Au 31 décembre 2021' },
        ],
      },
      {
        cells: [
          { t: 'Allemagne, fin 2015' },
          { v: 8.9, d: 1, u: 'T€, soit 291 % du PIB' },
          { t: 'Millésime ancien, comparaison fragile' },
        ],
        total: true,
      },
    ],
  },
} satisfies Tables

export const series = {
  'part-des-depots-et-de-l-epargne-liquide-dans-le-patrimoine': {
    svg: {
      viewBox: '0 0 720 254',
      titleId: 'cdepots-t',
      title: 'numéraire et dépôts, % du patrimoine financier des ménages',
    },
    title: 'Part des dépôts et de l\'épargne liquide dans le patrimoine financier',
    subtitle: 'Numéraire, dépôts à vue et livrets, en % des actifs financiers des ménages. Millésimes 2024-2025 selon les pays.',
    caption: '<b>Non — et c\'est le résultat le plus contre-intuitif du dossier.</b> La France est au milieu du peloton européen, <b>sept points en dessous de l\'Allemagne</b> et à parité avec la Belgique. Le vrai clivage n\'est pas franco-européen : il est entre l\'Europe continentale (26 à 37 %) et les États-Unis (11 %). Le cliché du Français qui dort sur son Livret A est un trait continental, et l\'Allemagne l\'incarne plus fortement que la France.',
    sources: ['insee-france-insee-fin-2024-allemagne-bu-2'],
    vintage: '2025',
    type: 'bar',
    layout: {
      kind: 'bar',
      gridTop: 16,
      gridBottom: 206,
      tickLabelY: 228,
      catLabelX: 126,
      catLabelDy: 10,
      barHeight: 12,
      barPitch: 15,
      groupPitch: 32,
      firstBarY: 22,
      valueLabelDx: 7,
      valueLabelDy: 10,
      valueClasses: ['lbl s4t'],
      rx: 3,
    },
    x: ['Allemagne', 'Espagne', 'Belgique', 'France', 'Italie', 'États-Unis'],
    y: { min: 0, max: 30, ticks: [0, 10, 20, 30] },
    series: [
      {
        key: 'b1',
        color: 's4',
        values: [36.896, 33.895, 29.802, 29.699, 26.302, 10.998],
        decimals: 1,
      },
    ],
    frame: { width: 720, height: 254, left: 140, right: 518.9029901119364, top: 16, bottom: 206 },
  },
  'l-endettement-des-menages-compare': {
    raw: true,
    title: 'L\'endettement des ménages, comparé',
    subtitle: 'Dette rapportée au revenu disponible brut, puis au PIB. Fin 2025.',
    caption: '<b>La France est en dessous du Royaume-Uni et des États-Unis, au-dessus de l\'Allemagne et de l\'Italie.</b> Et surtout : <b>le taux d\'endettement français baisse depuis 2021</b>. Il a culminé à 102,2 % du revenu disponible cette année-là, il est à 90,0 % fin 2025 — un repli de plus de douze points, qui ramène le niveau à celui de 2015-2016.',
    legend: [
      { color: 's4', label: '% du revenu disponible' },
      { color: 's1', label: '% du PIB' },
    ],
    svg: '<svg viewBox="0 0 720 384" class="cv" role="img" aria-labelledby="cdettmen-t">\n<title id="cdettmen-t">dette des ménages, % du revenu disponible puis % du PIB — fin 2025</title>\n<line class="grid" x1="150.0" y1="16" x2="150.0" y2="336"></line>\n<text class="ax" x="150.0" y="358" text-anchor="middle">0</text>\n<line class="grid" x1="339.1" y1="16" x2="339.1" y2="336"></line>\n<text class="ax" x="339.1" y="358" text-anchor="middle">50</text>\n<line class="grid" x1="528.3" y1="16" x2="528.3" y2="336"></line>\n<text class="ax" x="528.3" y="358" text-anchor="middle">100</text>\n<text class="ax al" x="136" y="43">États-Unis</text>\n<rect class="bar s4f" x="150" y="24" width="462.3" height="13" rx="3"></rect>\n<rect class="bar s1f" x="150" y="41" width="353.3" height="13" rx="3"></rect>\n<text class="lbl mut" x="620.3" y="35">122,2</text>\n<text class="lbl s1t" x="511.3" y="52">93,4</text>\n<text class="ax al" x="136" y="89">Royaume-Uni</text>\n<rect class="bar s4f" x="150" y="70" width="433.1" height="13" rx="3"></rect>\n<rect class="bar s1f" x="150" y="87" width="277.7" height="13" rx="3"></rect>\n<text class="lbl mut" x="591.1" y="81">114,5</text>\n<text class="lbl s1t" x="435.7" y="98">73,4</text>\n<text class="ax al" x="136" y="135">France</text>\n<rect class="bar s4f" x="150" y="116" width="340.5" height="13" rx="3"></rect>\n<rect class="bar s1f" x="150" y="133" width="223.6" height="13" rx="3"></rect>\n<text class="lbl mut" x="498.5" y="127">90,0</text>\n<text class="lbl s1t" x="381.6" y="144">59,1</text>\n<text class="ax al" x="136" y="181">Zone euro</text>\n<rect class="bar s4f" x="150" y="162" width="311.7" height="13" rx="3"></rect>\n<rect class="bar s1f" x="150" y="179" width="191.0" height="13" rx="3"></rect>\n<text class="lbl mut" x="469.7" y="173">82,4</text>\n<text class="lbl s1t" x="349.0" y="190">50,5</text>\n<text class="ax al" x="136" y="227">Allemagne</text>\n<rect class="bar s4f" x="150" y="208" width="287.5" height="13" rx="3"></rect>\n<rect class="bar s1f" x="150" y="225" width="185.4" height="13" rx="3"></rect>\n<text class="lbl mut" x="445.5" y="219">76,0</text>\n<text class="lbl s1t" x="343.4" y="236">49,0</text>\n<text class="ax al" x="136" y="273">Espagne</text>\n<rect class="bar s4f" x="150" y="254" width="256.9" height="13" rx="3"></rect>\n<rect class="bar s1f" x="150" y="271" width="161.9" height="13" rx="3"></rect>\n<text class="lbl mut" x="414.9" y="265">67,9</text>\n<text class="lbl s1t" x="319.9" y="282">42,8</text>\n<text class="ax al" x="136" y="319">Italie</text>\n<rect class="bar s4f" x="150" y="300" width="211.1" height="13" rx="3"></rect>\n<rect class="bar s1f" x="150" y="317" width="135.8" height="13" rx="3"></rect>\n<text class="lbl mut" x="369.1" y="311">55,8</text>\n<text class="lbl s1t" x="293.8" y="328">35,9</text>\n</svg>',
    sources: ['eurostat-tec00104'],
    vintage: 'à confirmer',
    values: {
      svg: {
        viewBox: '0 0 720 384',
        titleId: 'cdettmen-t',
        title: 'dette des ménages, % du revenu disponible puis % du PIB — fin 2025',
      },
      title: 'L\'endettement des ménages, comparé',
      subtitle: 'Dette rapportée au revenu disponible brut, puis au PIB. Fin 2025.',
      caption: '<b>La France est en dessous du Royaume-Uni et des États-Unis, au-dessus de l\'Allemagne et de l\'Italie.</b> Et surtout : <b>le taux d\'endettement français baisse depuis 2021</b>. Il a culminé à 102,2 % du revenu disponible cette année-là, il est à 90,0 % fin 2025 — un repli de plus de douze points, qui ramène le niveau à celui de 2015-2016.',
      sources: ['eurostat-tec00104'],
      vintage: '2025',
      legend: [
        { color: 's4', label: '% du revenu disponible' },
        { color: 's1', label: '% du PIB' },
      ],
      type: 'bar',
      layout: {
        kind: 'bar',
        gridTop: 16,
        gridBottom: 336,
        tickLabelY: 358,
        catLabelX: 136,
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
      x: ['États-Unis', 'Royaume-Uni', 'France', 'Zone euro', 'Allemagne', 'Espagne', 'Italie'],
      y: { min: 0, max: 100, ticks: [0, 50, 100] },
      series: [
        {
          key: 'b1',
          color: 's4',
          label: '% du revenu disponible',
          values: [122.205, 114.486, 90.008, 82.395, 75.998, 67.909, 55.802],
          decimals: 1,
        },
        {
          key: 'b2',
          color: 's1',
          label: '% du PIB',
          values: [93.391, 73.407, 59.107, 50.489, 49.009, 42.797, 35.897],
          decimals: 1,
        },
      ],
      frame: { width: 720, height: 384, left: 150, right: 528.3, top: 16, bottom: 336 },
    },
  },
  'ou-sont-places-les-6-590-md-de-patrimoine-financier-des-me': {
    svg: { viewBox: '0 0 720 342', titleId: 'cpatfin-t', title: 'milliards d\'euros, fin 2025' },
    title: 'Où sont placés les 6 590 Md€ de patrimoine financier des ménages',
    subtitle: 'Fin 2025, en milliards d\'euros. Périmètre « principaux placements financiers », légèrement plus étroit que celui des comptes de patrimoine.',
    caption: '<b>Deux postes dominent, et aucun des deux n\'est celui qu\'on imagine.</b> L\'assurance-vie en fonds euros (1 571 Md€) et les <b>actions non cotées</b> (1 507 Md€) — c\'est-à-dire le patrimoine professionnel des entrepreneurs — pèsent chacun près de six fois les actions cotées détenues en direct (263 Md€). Et les <b>obligations détenues en direct ne pèsent que 54,8 Md€, soit 0,8 %</b> — moins que le Livret jeune et le CEL réunis.',
    sources: ['banque-de-france-banque-de-france-stat-info-epargne-et'],
    vintage: '2025',
    type: 'bar',
    layout: {
      kind: 'bar',
      gridTop: 16,
      gridBottom: 294,
      tickLabelY: 316,
      catLabelX: 224,
      catLabelDy: 10,
      barHeight: 12,
      barPitch: 15,
      groupPitch: 28,
      firstBarY: 22,
      valueLabelDx: 7,
      valueLabelDy: 10,
      valueClasses: ['lbl s1t'],
      rx: 3,
    },
    x: [
      'Assurance-vie, fonds en euros', 'Actions non cotées et participations',
      'Livrets et comptes à terme', 'Numéraire et dépôts à vue',
      'Assurance-vie, unités de compte', 'Actions cotées, en direct', 'Actions via fonds',
      'Obligations via fonds', 'Obligations en direct', 'Fonds monétaires',
    ],
    y: { min: 0, max: 1500, ticks: [0, 500, 1000, 1500] },
    series: [
      {
        key: 'b1',
        color: 's1',
        values: [1570.628, 1507.4, 1363.3, 763.033, 606.7, 263.3, 198.6, 134, 54.8, 25.7],
        decimals: 1,
      },
    ],
    frame: { width: 720, height: 342, left: 238, right: 594.8115333692942, top: 16, bottom: 294 },
  },
  'trois-france-du-patrimoine': {
    raw: true,
    title: 'Trois France du patrimoine',
    subtitle: 'Composition du patrimoine brut selon la position dans la distribution, début 2024, en %.',
    caption: '<b>Les trois premiers déciles n\'ont pas de patrimoine au sens économique</b> : la voiture et l\'électroménager font 50 à 68 % de leur « patrimoine », le reste est un livret. <b>Les déciles 4 à 9 sont la France propriétaire</b> : les trois quarts de leur patrimoine sont un logement, souvent unique, occupé, non liquide et sans revenu. <b>Seul le dernier décile est diversifié</b>, et c\'est le seul où le patrimoine professionnel devient significatif.',
    legend: [
      { color: 's1', label: 'Immobilier' },
      { color: 's4', label: 'Financier' },
      { color: 's2', label: 'Professionnel' },
      { color: 's3', label: 'Biens durables' },
    ],
    svg: '<svg viewBox="0 0 720 404" class="cv" role="img" aria-labelledby="cpatdec-t">\n<title id="cpatdec-t">composition du patrimoine brut, %, début 2024</title>\n<line class="grid" x1="120.0" y1="16" x2="120.0" y2="354"></line>\n<text class="ax" x="120.0" y="378" text-anchor="middle">0</text>\n<line class="grid" x1="361.7" y1="16" x2="361.7" y2="354"></line>\n<text class="ax" x="361.7" y="378" text-anchor="middle">50</text>\n<line class="grid" x1="603.3" y1="16" x2="603.3" y2="354"></line>\n<text class="ax" x="603.3" y="378" text-anchor="middle">100</text>\n<text class="ax al" x="108" y="37">10 % du haut</text>\n<rect class="bar s1f" x="120.0" y="22" width="257.6" height="19" rx="2"></rect>\n<rect class="bar s4f" x="377.6" y="22" width="116.0" height="19" rx="2"></rect>\n<rect class="bar s2f" x="493.6" y="22" width="90.9" height="19" rx="2"></rect>\n<rect class="bar s3f" x="584.5" y="22" width="18.8" height="19" rx="2"></rect>\n<text class="ax al" x="108" y="71">D8 à D9</text>\n<rect class="bar s1f" x="120.0" y="56" width="334.9" height="19" rx="2"></rect>\n<rect class="bar s4f" x="454.9" y="56" width="95.7" height="19" rx="2"></rect>\n<rect class="bar s2f" x="550.6" y="56" width="23.7" height="19" rx="2"></rect>\n<rect class="bar s3f" x="574.3" y="56" width="28.5" height="19" rx="2"></rect>\n<text class="ax al" x="108" y="105">D7 à D8</text>\n<rect class="bar s1f" x="120.0" y="90" width="350.4" height="19" rx="2"></rect>\n<rect class="bar s4f" x="470.4" y="90" width="86.5" height="19" rx="2"></rect>\n<rect class="bar s2f" x="556.9" y="90" width="13.5" height="19" rx="2"></rect>\n<rect class="bar s3f" x="570.5" y="90" width="32.9" height="19" rx="2"></rect>\n<text class="ax al" x="108" y="139">D6 à D7</text>\n<rect class="bar s1f" x="120.0" y="124" width="363.0" height="19" rx="2"></rect>\n<rect class="bar s4f" x="483.0" y="124" width="74.9" height="19" rx="2"></rect>\n<rect class="bar s2f" x="557.9" y="124" width="8.7" height="19" rx="2"></rect>\n<rect class="bar s3f" x="566.6" y="124" width="37.2" height="19" rx="2"></rect>\n<text class="ax al" x="108" y="173">D5 à D6</text>\n<rect class="bar s1f" x="120.0" y="158" width="362.5" height="19" rx="2"></rect>\n<rect class="bar s4f" x="482.5" y="158" width="72.0" height="19" rx="2"></rect>\n<rect class="bar s2f" x="554.5" y="158" width="5.8" height="19" rx="2"></rect>\n<rect class="bar s3f" x="560.3" y="158" width="43.0" height="19" rx="2"></rect>\n<text class="ax al" x="108" y="207">D4 à D5</text>\n<rect class="bar s1f" x="120.0" y="192" width="323.8" height="19" rx="2"></rect>\n<rect class="bar s4f" x="443.8" y="192" width="100.5" height="19" rx="2"></rect>\n<rect class="bar s2f" x="544.4" y="192" width="8.7" height="19" rx="2"></rect>\n<rect class="bar s3f" x="553.1" y="192" width="50.3" height="19" rx="2"></rect>\n<text class="ax al" x="108" y="241">D3 à D4</text>\n<rect class="bar s1f" x="120.0" y="226" width="128.6" height="19" rx="2"></rect>\n<rect class="bar s4f" x="248.6" y="226" width="232.5" height="19" rx="2"></rect>\n<rect class="bar s2f" x="481.0" y="226" width="14.0" height="19" rx="2"></rect>\n<rect class="bar s3f" x="495.1" y="226" width="108.3" height="19" rx="2"></rect>\n<text class="ax al" x="108" y="275">D2 à D3</text>\n<rect class="bar s1f" x="120.0" y="260" width="9.2" height="19" rx="2"></rect>\n<rect class="bar s4f" x="129.2" y="260" width="229.1" height="19" rx="2"></rect>\n<rect class="bar s2f" x="358.3" y="260" width="7.7" height="19" rx="2"></rect>\n<rect class="bar s3f" x="366.0" y="260" width="237.3" height="19" rx="2"></rect>\n<text class="ax al" x="108" y="309">D1 à D2</text>\n<rect class="bar s1f" x="120.0" y="294" width="2.9" height="19" rx="2"></rect>\n<rect class="bar s4f" x="122.9" y="294" width="182.7" height="19" rx="2"></rect>\n<rect class="bar s2f" x="305.6" y="294" width="4.3" height="19" rx="2"></rect>\n<rect class="bar s3f" x="309.9" y="294" width="293.4" height="19" rx="2"></rect>\n<text class="ax al" x="108" y="343">10 % du bas</text>\n<rect class="bar s1f" x="120.0" y="328" width="0.6" height="19" rx="2"></rect>\n<rect class="bar s4f" x="120.0" y="328" width="154.7" height="19" rx="2"></rect>\n<rect class="bar s2f" x="274.7" y="328" width="1.4" height="19" rx="2"></rect>\n<rect class="bar s3f" x="276.1" y="328" width="327.2" height="19" rx="2"></rect>\n</svg>',
    sources: ['insee-insee-enquete-histoire-de-vie-et-patrim-5'],
    vintage: 'à confirmer',
  },
} satisfies SeriesSet

/** Fiches du chapitre, dans l'ordre : alimente le rail et la recherche. */
export const questions = [
  { id: 's15-q1', title: 'Le niveau de vie a-t-il augmenté ?' },
  { id: 's15-q2', title: 'Quelle part du budget est contrainte ?' },
  {
    id: 's15-q3',
    title: 'Les inégalités françaises sont-elles fortes ? Et pourquoi l\'écart avant impôts est-il si grand ?',
  },
  {
    id: 's15-q4',
    title: 'Peut-on évacuer le problème des retraites ? Oui — et voici ce que devient le classement',
  },
  { id: 's15-q5', title: 'Le patrimoine des Français en un tableau' },
  { id: 's15-q6', title: 'La dette des ménages : combien, pour quoi, et comment elle se compare' },
  { id: 's15-q7', title: 'Qui détient le patrimoine ?' },
  { id: 's15-q8', title: 'Patrimoine, épargne, et qui possède les entreprises françaises' },
  {
    id: 's15-q9',
    title: 'Que possèdent exactement les Français ? La composition, poste par poste',
  },
  {
    id: 's15-q10',
    title: 'Combien faut-il posséder pour être dans les 10 % ? Les seuils, en euros',
  },
  { id: 's15-q11', title: 'La comparaison européenne : ce que la mesure par ménage ne dit pas' },
  { id: 's15-q12', title: 'Que produit une hausse de la fiscalité sur les hauts revenus ?' },
] satisfies readonly { id: string; title: string }[]

/**
 * Sources citées dans le texte du chapitre, en plus de celles portées par les
 * tableaux et les figures. La bibliographie les recense aussi : une source
 * citée en prose reste une source du dossier.
 */
export const citedSources = [
  'acpr-acpr-analyses-syntheses-n-180-juin',
  'eurostat-france-insee-comptes-de-patrimoine-ba', 'eurostat-ilc-di12',
  'eurostat-insee-premiere-n-2081-comptes-de-patri',
  'insee-conseil-des-prelevements-obligatoires-et',
  'insee-france-insee-fin-2024-allemagne-bu', 'insee-insee-comptes-de-patrimoine-base-2020',
  'insee-insee-comptes-de-patrimoine-base-2020-2',
  'insee-insee-enquete-histoire-de-vie-et-patrim',
  'insee-insee-enquete-histoire-de-vie-et-patrim-2',
  'insee-insee-enquete-histoire-de-vie-et-patrim-3',
  'insee-insee-enquete-histoire-de-vie-et-patrim-4',
  'insee-insee-et-drees-travaux-sur-les-depenses',
  'insee-insee-insee-focus-n-354-enquete-histo',
  'insee-ocde-income-distribution-database-2022',
] satisfies readonly SourceId[]
