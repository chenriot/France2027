// Généré par `npm run extract` depuis Temp/chiffres2027 (3).html.
// Toutes les données chiffrées du chapitre vivent ici, chacune sous sa source
// et son millésime. Voir CLAUDE.md, règles 2 à 4.
import type { ChapterMeta, SeriesSet, SourceId, Tables } from '@/lib/types'

export const meta = {
  slug: 'synthese',
  num: 'Synthèse',
  title: 'Ce que l\'ensemble de ces chiffres établit',
  shortTitle: 'Synthèse et commentaire',
  note: 'Sept propositions confrontées aux données, un résumé par thème, puis un commentaire clairement séparé des faits. Deux des sept propositions demandent une correction — elles sont signalées.',
  status: 'complete',
  updated: '2026-08',
  legacyAnchor: 'synth',
} satisfies ChapterMeta

export const tables = {
  'pour-100-000-habitants': {
    vintage: '2025',
    sources: [
      'eurostat-nasa-10-nf-tr', 'eurostat-nama-10-lp-ulc', 'eurostat-gov-10a-exp',
      'ocde-ocde-regards-sur-l-education-2025-tabl',
    ],
    columns: [
      {
        key: 'pour-100-000-habitants',
        header: 'Pour 100 000 habitants',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'france', header: 'France', type: 'number', headerNumeric: true },
      { key: 'allemagne', header: 'Allemagne', type: 'number', headerNumeric: true },
      { key: 'mediane-europeenne', header: 'Médiane européenne', type: 'number', headerNumeric: true },
      { key: 'ecart', header: 'Écart', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: '<b>Juges professionnels</b>' },
          { v: 11.3, d: 1, strong: true },
          { v: 24.7, d: 1 },
          { v: 17.6, d: 1 },
          { v: -54, d: 0, u: '% vs Allemagne', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Budget de la justice par habitant' },
          { v: 77, d: 0, u: '€' },
          { v: 136, d: 0, u: '€' },
          { v: 75, d: 0, u: '€' },
          { v: -43, d: 0, u: '% vs Allemagne' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Médecins' },
          { v: 328, d: 0 },
          { v: 453, d: 0 },
          null,
          { v: -28, d: 0, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Infirmiers et sages-femmes' },
          { v: 942, d: 0 },
          { v: 1225, d: 0 },
          null,
          { v: -23, d: 0, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Enseignants' },
          { v: 1194, d: 0 },
          { v: 1550, d: 0 },
          null,
          { v: -23, d: 0, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Policiers' },
          { v: 361, d: 0 },
          { v: 311, d: 0 },
          null,
          { v: 16, d: 0, u: '%', sign: true, strong: true },
        ],
      },
    ],
  },
  'richesse-produite-par-habitant': {
    vintage: '2025',
    sources: ['eurostat-gdpvd-cap'],
    columns: [
      {
        key: 'richesse-produite-par-habitant',
        header: 'Richesse produite par habitant',
        type: 'text',
        headerNumeric: false,
      },
      { key: '2005', header: '2005', type: 'number', headerNumeric: true },
      { key: '2025', header: '2025', type: 'number', headerNumeric: true },
      { key: 'evolution', header: 'Évolution', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'États-Unis' },
          { v: 59501, d: 0, u: '$' },
          { v: 76834, d: 0, u: '$' },
          { v: 29, d: 0, u: '%', sign: true },
        ],
      },
      {
        cells: [
          { t: 'Pays-Bas' },
          { v: 58352, d: 0, u: '$' },
          { v: 71271, d: 0, u: '$' },
          { v: 22, d: 0, u: '%', sign: true },
        ],
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 51901, d: 0, u: '$' },
          { v: 62888, d: 0, u: '$' },
          { v: 21, d: 0, u: '%', sign: true },
        ],
      },
      {
        cells: [
          { t: '<b>France</b>' },
          { v: 48376, d: 0, u: '$', strong: true },
          { v: 55197, d: 0, u: '$', strong: true },
          { v: 14, d: 0, u: '%', sign: true, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Royaume-Uni' },
          { v: 48291, d: 0, u: '$' },
          { v: 53832, d: 0, u: '$' },
          { v: 11, d: 0, u: '%', sign: true },
        ],
      },
      {
        cells: [
          { t: 'Moyenne OCDE' },
          { v: 43474, d: 0, u: '$' },
          { v: 54450, d: 0, u: '$' },
          { v: 25, d: 0, u: '%', sign: true },
        ],
      },
    ],
  },
  'travail-et-production-2024': {
    vintage: '2024',
    sources: ['eurostat-gdpvd-cap'],
    columns: [
      {
        key: 'travail-et-production-2024',
        header: 'Travail et production, 2024',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'produit-par-heure', header: 'Produit par heure', type: 'number', headerNumeric: true },
      {
        key: 'heures-par-habitant-15-74-ans',
        header: 'Heures par habitant, 15-74 ans',
        type: 'number',
        headerNumeric: true,
      },
    ],
    rows: [
      {
        cells: [
          { t: 'États-Unis' },
          { v: 84.1, d: 1, u: '$' },
          { v: 1145, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 83, d: 1, u: '$' },
          { v: 983, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Pays-Bas' },
          { v: 82.1, d: 1, u: '$' },
          { v: 1097, d: 0 },
        ],
      },
      {
        cells: [
          { t: '<b>France</b>' },
          { v: 81.6, d: 1, u: '$', strong: true },
          { v: 927, d: 0, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Royaume-Uni' },
          { v: 74, d: 1, u: '$' },
          { v: 1002, d: 0 },
        ],
      },
    ],
  },
  'part-des-personnes-en-emploi-2024': {
    vintage: '2024',
    sources: ['eurostat-gdpvd-cap'],
    columns: [
      {
        key: 'part-des-personnes-en-emploi-2024',
        header: 'Part des personnes en emploi, 2024',
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
          { t: '<b>15-24 ans</b>' },
          { v: 34.4, d: 1, u: '%', strong: true },
          { v: 51, d: 1, u: '%', strong: true },
          { v: -16.6, d: 1, u: 'pts', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '25-54 ans' },
          { v: 82.9, d: 1, u: '%' },
          { v: 85, d: 1, u: '%' },
          { v: -2.1, d: 1, u: 'pts' },
        ],
      },
      {
        cells: [
          { t: '55-64 ans' },
          { v: 60.3, d: 1, u: '%' },
          { v: 75, d: 1, u: '%' },
          { v: -14.7, d: 1, u: 'pts' },
        ],
      },
      {
        cells: [
          { t: '<b>60-64 ans</b>' },
          { v: 42.4, d: 1, u: '%', strong: true },
          { v: 66.6, d: 1, u: '%', strong: true },
          { v: -24.2, d: 1, u: 'pts', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '65-69 ans' },
          { v: 11.1, d: 1, u: '%' },
          { v: 21.2, d: 1, u: '%' },
          { v: -10.1, d: 1, u: 'pts' },
        ],
      },
    ],
  },
  'france-2025': {
    vintage: '2025',
    sources: ['eurostat-gdpvd-cap'],
    columns: [
      { key: 'france-2025', header: 'France 2025', type: 'text', headerNumeric: false },
      {
        key: 'heures-par-habitant',
        header: 'Heures par habitant',
        type: 'number',
        headerNumeric: true,
      },
      { key: 'pib-en-md', header: 'PIB, en Md€', type: 'number', headerNumeric: true },
      { key: 'solde-public', header: 'Solde public', type: 'number', headerNumeric: true },
      { key: 'deficit-comble', header: 'Déficit comblé', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Aujourd\'hui' },
          { v: 674, d: 0 },
          { v: 2984, d: 0 },
          { v: -153, d: 0, u: 'Md€' },
          null,
        ],
      },
      {
        cells: [
          { t: '+ 30 h par an et par personne en emploi' },
          { v: 687, d: 0 },
          { v: 3044, d: 0 },
          { v: -121, d: 0, u: 'Md€' },
          { v: 20, d: 0, u: '%' },
        ],
      },
      {
        cells: [
          { t: '<b>+ 30 h par an et par habitant</b>' },
          { v: 704, d: 0 },
          { v: 3117, d: 0 },
          { v: -83, d: 0, u: 'Md€', strong: true },
          { v: 46, d: 0, u: '%', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Volume horaire allemand' },
          { v: 735, d: 0 },
          { v: 3252, d: 0 },
          { v: -12, d: 0, u: 'Md€' },
          { v: 92, d: 0, u: '%' },
        ],
      },
      {
        cells: [
          { t: '<b>Équilibre du budget</b>' },
          { v: 740, d: 0, strong: true },
          { v: 3276, d: 0, strong: true },
          { v: 0, d: 0, u: 'Md€', strong: true },
          { v: 100, d: 0, u: '%', strong: true },
        ],
        total: true,
      },
    ],
  },
  'les-deux-chemins-vers-l-equilibre-2025': {
    vintage: '2025',
    sources: ['eurostat-gdpvd-cap'],
    columns: [
      {
        key: 'les-deux-chemins-vers-l-equilibre-2025',
        header: 'Les deux chemins vers l\'équilibre, 2025',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'ce-qu-il-faudrait', header: 'Ce qu\'il faudrait', type: 'number', headerNumeric: true },
      { key: 'repere', header: 'Repère', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: '<b>Par la durée du travail</b>, à taux d\'emploi inchangé' },
          { v: 147, d: 0, u: 'heures par an et par personne en emploi', sign: true, strong: true },
          { v: 39, d: 0, u: 'min par jour ouvré' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>Par le taux d\'emploi</b>, à durée du travail inchangée' },
          { v: 3, d: 1, u: 'millions de personnes en emploi', sign: true, strong: true },
          { v: 49, d: 1, u: '% de la population au lieu de 44,7 %' },
        ],
        emphasis: true,
      },
    ],
  },
  'prelevements-obligatoires-2025': {
    vintage: '2025',
    sources: ['eurostat-gdpvd-cap'],
    columns: [
      {
        key: 'prelevements-obligatoires-2025',
        header: 'Prélèvements obligatoires, 2025',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'en-du-pib', header: 'En % du PIB', type: 'number', headerNumeric: true },
      {
        key: 'dollars-par-habitant',
        header: 'Dollars par habitant',
        type: 'number',
        headerNumeric: true,
      },
    ],
    rows: [
      {
        cells: [
          { t: 'Pays-Bas' },
          { v: 38.8, d: 1, u: '%' },
          { v: 27355, d: 0, u: '$' },
        ],
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 40.5, d: 1, u: '%' },
          { v: 25369, d: 0, u: '$' },
        ],
      },
      {
        cells: [
          { t: '<b>France</b>' },
          { v: 44.7, d: 1, u: '%', strong: true },
          { v: 24498, d: 0, u: '$', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'États-Unis' },
          { v: 25.9, d: 1, u: '%' },
          { v: 19561, d: 0, u: '$' },
        ],
      },
      {
        cells: [
          { t: 'Royaume-Uni' },
          { v: 36, d: 1, u: '%' },
          { v: 19227, d: 0, u: '$' },
        ],
      },
    ],
  },
  'depense-publique-par-nature-en-du-pib': {
    vintage: '2024',
    sources: ['eurostat-gdpvd-cap'],
    columns: [
      {
        key: 'depense-publique-par-nature-en-du-pib',
        header: 'Dépense publique par nature, en % du PIB',
        type: 'text',
        headerNumeric: false,
      },
      { key: '1975', header: '1975', type: 'number', headerNumeric: true },
      { key: '2024', header: '2024', type: 'number', headerNumeric: true },
      { key: 'ecart', header: 'Écart', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: '<b>Prestations sociales</b>' },
          { v: 17.2, d: 1, u: '%', strong: true },
          { v: 25.5, d: 1, u: '%', strong: true },
          { v: 8.3, d: 1, u: 'pts', sign: true, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Charge de la dette' },
          { v: 0.9, d: 1, u: '%' },
          { v: 2, d: 1, u: '%' },
          { v: 1.1, d: 1, u: 'pt', sign: true },
        ],
      },
      {
        cells: [
          { t: 'Rémunération des agents publics' },
          { v: 11.7, d: 1, u: '%' },
          { v: 12.4, d: 1, u: '%' },
          { v: 0.7, d: 1, u: 'pt', sign: true },
        ],
      },
      {
        cells: [
          { t: 'Consommations intermédiaires' },
          { v: 5.8, d: 1, u: '%' },
          { v: 5.5, d: 1, u: '%' },
          { v: -0.3, d: 1, u: 'pt' },
        ],
      },
      {
        cells: [
          { t: 'Investissement public' },
          { v: 5.3, d: 1, u: '%' },
          { v: 4.3, d: 1, u: '%' },
          { v: -1, d: 1, u: 'pt' },
        ],
      },
    ],
  },
  'depense-sociale-par-habitant-2021': {
    vintage: '2021',
    sources: ['eurostat-gdpvd-cap'],
    columns: [
      {
        key: 'depense-sociale-par-habitant-2021',
        header: 'Dépense sociale par habitant, 2021',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'publique', header: 'Publique', type: 'number', headerNumeric: true },
      { key: 'privee', header: 'Privée', type: 'number', headerNumeric: true },
      { key: 'total', header: 'Total', type: 'number', headerNumeric: true },
      { key: 'en-du-pib', header: 'En % du PIB', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Pays-Bas' },
          { v: 13694, d: 0, u: '$' },
          { v: 7929, d: 0, u: '$' },
          { v: 21623, d: 0, u: '$' },
          { v: 19.8, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'États-Unis' },
          { v: 13377, d: 0, u: '$' },
          { v: 7935, d: 0, u: '$' },
          { v: 21312, d: 0, u: '$' },
          { v: 21.6, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 18172, d: 0, u: '$' },
          { v: 2268, d: 0, u: '$' },
          { v: 20440, d: 0, u: '$' },
          { v: 28.9, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: '<b>France</b>' },
          { v: 17628, d: 0, u: '$', strong: true },
          { v: 1950, d: 0, u: '$', strong: true },
          { v: 19578, d: 0, u: '$', strong: true },
          { v: 32.7, d: 1, u: '%', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Royaume-Uni' },
          { v: 13188, d: 0, u: '$' },
          { v: 2200, d: 0, u: '$' },
          { v: 15388, d: 0, u: '$' },
          { v: 24.4, d: 1, u: '%' },
        ],
      },
    ],
  },
  'les-prestations-sociales-par-risque-2024': {
    vintage: '2024',
    sources: ['eurostat-gdpvd-cap'],
    columns: [
      {
        key: 'les-prestations-sociales-par-risque-2024',
        header: 'Les prestations sociales par risque, 2024',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'montant', header: 'Montant', type: 'number', headerNumeric: true },
      { key: 'part-du-total', header: 'Part du total', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: '<b>Vieillesse et survie</b> <em>(retraites, pensions de réversion)</em>' },
          { v: 426.7, d: 1, u: 'Md€', strong: true },
          { v: 45.8, d: 1, u: '%', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>Santé, invalidité, accidents du travail</b>' },
          { v: 338.9, d: 1, u: 'Md€', strong: true },
          { v: 36.3, d: 1, u: '%', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Famille' },
          { v: 65.8, d: 1, u: 'Md€' },
          { v: 7.1, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Emploi et chômage' },
          { v: 51.1, d: 1, u: 'Md€' },
          { v: 5.5, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Pauvreté et exclusion' },
          { v: 34, d: 1, u: 'Md€' },
          { v: 3.6, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Logement' },
          { v: 16.1, d: 1, u: 'Md€' },
          { v: 1.7, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: '<b>Ensemble</b>' },
          { v: 932.5, d: 1, u: 'Md€', strong: true },
          { v: 100, d: 0, u: '%', strong: true },
        ],
        total: true,
      },
    ],
  },
  'niveau-de-vie-2024': {
    vintage: '2024',
    sources: ['eurostat-gdpvd-cap'],
    columns: [
      { key: 'niveau-de-vie-2024', header: 'Niveau de vie, 2024', type: 'text', headerNumeric: false },
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
      { key: 'ecart-par-an', header: 'Écart, par an', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: '<b>Les 10 % les plus modestes</b>' },
          { v: 4710, d: 0, strong: true },
          { v: 11960, d: 0, strong: true },
          { v: 7250, d: 0, sign: true, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Les 20 % les plus modestes' },
          { v: 9090, d: 0 },
          { v: 14100, d: 0 },
          { v: 5010, d: 0, sign: true },
        ],
      },
      {
        cells: [
          { t: 'Les 20 % les plus aisés' },
          { v: 74980, d: 0 },
          { v: 58690, d: 0 },
          { v: -16290, d: 0 },
        ],
      },
      {
        cells: [
          { t: '<b>Les 10 % les plus aisés</b>' },
          { v: 99300, d: 0, strong: true },
          { v: 74410, d: 0, strong: true },
          { v: -24890, d: 0, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>Rapport entre les 10 % du haut et les 10 % du bas</b>' },
          { t: '<b>×21,1</b>' },
          { t: '<b>×6,2</b>' },
          null,
        ],
        total: true,
      },
    ],
  },
  'masse-prelevee-en-md-2023': {
    vintage: '2023',
    sources: ['eurostat-gdpvd-cap'],
    columns: [
      {
        key: 'masse-prelevee-en-md-2023',
        header: 'Masse prélevée, en Md€, 2023',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'cotisations', header: 'Cotisations', type: 'number', headerNumeric: true },
      {
        key: 'revenu-et-patrimoine',
        header: 'Revenu et patrimoine',
        type: 'number',
        headerNumeric: true,
      },
      { key: 'indirects', header: 'Indirects', type: 'number', headerNumeric: true },
      { key: 'total', header: 'Total', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'D1 — les 10 % les plus modestes' },
          { v: 5.9, d: 1 },
          { v: 5.2, d: 1 },
          { v: 18.3, d: 1 },
          { v: 29, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'D2' },
          { v: 14.9, d: 1 },
          { v: 4.7, d: 1 },
          { v: 21.3, d: 1 },
          { v: 41, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'D3' },
          { v: 22.3, d: 1 },
          { v: 8.1, d: 1 },
          { v: 26, d: 1 },
          { v: 56, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'D4' },
          { v: 31, d: 1 },
          { v: 11.3, d: 1 },
          { v: 29.8, d: 1 },
          { v: 72, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'D5' },
          { v: 39.2, d: 1 },
          { v: 14.3, d: 1 },
          { v: 32.6, d: 1 },
          { v: 86, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'D6' },
          { v: 45.3, d: 1 },
          { v: 18.6, d: 1 },
          { v: 37, d: 1 },
          { v: 101, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'D7' },
          { v: 57.2, d: 1 },
          { v: 23.5, d: 1 },
          { v: 40.7, d: 1 },
          { v: 121, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'D8' },
          { v: 71.1, d: 1 },
          { v: 32.5, d: 1 },
          { v: 45.8, d: 1 },
          { v: 149, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'D9' },
          { v: 91.9, d: 1 },
          { v: 47.2, d: 1 },
          { v: 52.2, d: 1 },
          { v: 191, d: 0 },
        ],
      },
      {
        cells: [
          { t: '<b>D10 — les 10 % les plus aisés</b>' },
          { v: 164.2, d: 1, strong: true },
          { v: 185.7, d: 1, strong: true },
          { v: 72.8, d: 1, strong: true },
          { v: 423, d: 0, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>Ensemble</b>' },
          { v: 543, d: 1, strong: true },
          { v: 351.1, d: 1, strong: true },
          { v: 376.5, d: 1, strong: true },
          { v: 1271, d: 0, strong: true },
        ],
        total: true,
      },
    ],
  },
  'moyens-des-services-publics-2021-2024': {
    vintage: '2024',
    sources: ['eurostat-gdpvd-cap'],
    columns: [
      {
        key: 'moyens-des-services-publics-2021-2024',
        header: 'Moyens des services publics, 2021-2024',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'france', header: 'France', type: 'number', headerNumeric: true },
      { key: 'allemagne', header: 'Allemagne', type: 'number', headerNumeric: true },
      { key: 'repere', header: 'Repère', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: '<b>Coût de l\'administration générale, par habitant</b>' },
          { v: 623, d: 0, u: '€', strong: true },
          { v: 1070, d: 0, u: '€', strong: true },
          { v: 759, d: 0, u: '€ en moyenne européenne' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Infirmiers pour 1 000 habitants' },
          { v: 9.42, d: 2 },
          { v: 12.25, d: 2 },
          { v: 13.38, d: 2, u: 'aux États-Unis' },
        ],
      },
      {
        cells: [
          { t: 'Juges pour 100 000 habitants' },
          { v: 11.3, d: 1 },
          { v: 24.7, d: 1 },
          null,
        ],
      },
      {
        cells: [
          { t: 'Enseignants pour 100 élèves, primaire' },
          { v: 5.6, d: 1 },
          { v: 6.6, d: 1 },
          { v: 7.1, d: 1, u: 'en moyenne OCDE' },
        ],
      },
    ],
  },
  'theme-du-dossier-2023-2025': {
    vintage: '2025',
    sources: ['eurostat-gdpvd-cap'],
    columns: [
      {
        key: 'theme-du-dossier-2023-2025',
        header: 'Thème du dossier, 2023-2025',
        type: 'text',
        headerNumeric: false,
      },
      {
        key: 'le-chiffre-qui-le-resume',
        header: 'Le chiffre qui le résume',
        type: 'number',
        headerNumeric: true,
      },
      {
        key: 'ce-qu-il-faut-en-retenir',
        header: 'Ce qu\'il faut en retenir',
        type: 'text',
        headerNumeric: false,
      },
    ],
    rows: [
      {
        cells: [
          { t: '<b>04.</b> Emploi, chômage et coût du travail' },
          { v: 47.2, d: 1, u: '% de coin fiscalo-social, dont 26,7 points côté employeur' },
          {
            t: 'La France a le prélèvement employeur le plus élevé de l\'OCDE, mais un salaire net moins taxé que l\'allemand : l\'essentiel est prélevé <em>avant</em> la fiche de paie, là où on ne le voit pas. Le taux de cotisations patronales est en cloche — 3,5 % au SMIC, 42 % à 3,5 SMIC, 23 % très au-dessus — et nul sur les dividendes.',
          },
        ],
      },
      {
        cells: [
          { t: '<b>05.</b> Industrie et désindustrialisation' },
          { v: 4.4, d: 1, u: '% du PIB d\'impôts de production contre 1,0 % en Allemagne' },
          {
            t: 'Sur une usine modèle, la France bat l\'Allemagne — et ce qui les départage n\'est ni l\'impôt ni le travail, c\'est l\'énergie : 85 €/MWh contre 159. Face à la Chine, l\'écart est uniquement salarial, et aucun aménagement fiscal ne le comble. Le vrai handicap documenté est l\'instabilité : quatre calendriers de suppression de la CVAE en cinq lois de finances.',
          },
        ],
      },
      {
        cells: [
          { t: '<b>06.</b> Commerce extérieur' },
          { v: -58, d: 0, u: 'Md€ sur les biens, +48,9 Md€ sur les services' },
          {
            t: 'Une fois les services comptés, la relation avec les États-Unis change de signe : d\'un déficit à un excédent d\'environ +12 Md€. Seul le déficit chinois résiste (−41 Md€). La position extérieure négative vient entièrement du financement de la dette publique par l\'étranger : le privé français, lui, est créditeur net de +568 Md€.',
          },
        ],
      },
      {
        cells: [
          { t: '<b>07.</b> Immigration et intégration' },
          {
            v: 6,
            d: 1,
            u: 'M d\'étrangers · 8,8 % de la population · 18 % des mis en cause pour homicide',
          },
          {
            t: 'La surreprésentation est un fait mesuré, et son ordre de grandeur (×2 pour les homicides) est exact. Mais le rapport augmente quand la gravité baisse — ×2 pour l\'homicide, ×9 pour le vol sans violence — et le numérateur et le dénominateur ne portent pas sur la même population. Aucune étude française n\'isole l\'effet propre, à âge, sexe et milieu social identiques.',
          },
        ],
      },
      {
        cells: [
          { t: '<b>08.</b> Écologie et climat' },
          { v: -34, d: 0, u: '% d\'émissions sur le territoire, mais −28 % seulement pour l\'empreinte' },
          {
            t: 'Le carbone importé passe de 23 % à 51 % des émissions du territoire entre 1990 et 2023. De 1990 à 2005, l\'empreinte réelle ne baisse pas du tout : la baisse affichée est un déplacement de la production à l\'étranger. L\'indicateur officiel surestime le progrès d\'environ moitié.',
          },
        ],
      },
      {
        cells: [
          { t: '<b>09.</b> Énergie' },
          { v: 40, d: 0, u: 'g de CO₂ par kWh contre 336 en Allemagne et 384 aux États-Unis' },
          {
            t: 'C\'est l\'avantage français le plus incontestable du dossier. Mais l\'économie française consomme <em>plus</em> d\'énergie par euro produit que l\'Allemagne, l\'Italie ou le Royaume-Uni : le faible niveau d\'émissions vient de l\'électricité nucléaire, pas d\'une moindre consommation.',
          },
        ],
      },
      {
        cells: [
          { t: '<b>10.</b> Europe' },
          { v: 23.3, d: 1, u: 'Md€ versés en 2025 · solde net −9,3 Md€' },
          {
            t: 'Deuxième contributeur net derrière l\'Allemagne, deuxième bénéficiaire en volume derrière la Pologne — dont 58 % au titre de l\'agriculture. La contribution baisse de 2021 à 2024, puis remonte fortement avec le remboursement du plan de relance européen.',
          },
        ],
      },
      {
        cells: [
          { t: '<b>11.</b> Santé' },
          { v: 11.3, d: 1, u: '% du PIB · le reste à charge le plus faible des quatre pays comparés' },
          {
            t: 'Un système très protecteur financièrement, et moins cher que l\'américain. Mais la densité de médecins recule depuis 2010 — seul pays des quatre — et 30 % de la population vit dans un désert médical. Les besoins de soins non satisfaits ont triplé depuis 2019.',
          },
        ],
      },
      {
        cells: [
          { t: '<b>12.</b> Sécurité, justice et prisons' },
          { v: 976, d: 0, u: 'homicides · 11,3 juges pour 100 000 habitants contre 24,7 en Allemagne' },
          {
            t: 'Le taux d\'homicide français est 1,5 à 2 fois l\'allemand. Les atteintes aux biens baissent réellement — deux mesures indépendantes le confirment. En revanche, la hausse enregistrée des violences sexuelles est surtout un effet de plainte : le taux de plainte a doublé, et n\'atteint encore que 3 %.',
          },
        ],
      },
      {
        cells: [
          { t: '<b>13.</b> Logement' },
          { t: 'Taux d\'effort médian 18,5 % · prix rapportés au revenu 6 % sous leur niveau de 2015' },
          {
            t: 'Contre-intuitif : la dégradation est ancienne, pas récente. Le rapport prix/revenu bondit de 54 % entre 2000 et 2010, puis reflue sans interruption. Et le faible taux d\'effort des locataires ne vient pas de l\'encadrement des loyers — inappliqué dans 28 à 33 % des cas — mais des APL et du parc social.',
          },
        ],
      },
      {
        cells: [
          { t: '<b>14.</b> Éducation et mobilité sociale' },
          { v: 8151, d: 0, u: '€ par élève contre 10 363 en Allemagne · 17,9 élèves par enseignant' },
          {
            t: 'Plus en part de richesse pour une raison démographique, moins par élève, moins d\'enseignants, des classes plus chargées, et un déséquilibre primaire/lycée qu\'aucun pays comparable ne connaît. Une fois les retraites des enseignants retraitées, la dépense française passe sous la moyenne européenne.',
          },
        ],
      },
      {
        cells: [
          { t: '<b>15.</b> Niveau de vie, patrimoine et inégalités' },
          { t: 'Indice de Gini 0,302 en 2024, le plus haut depuis 1996' },
          {
            t: 'Si l\'on se limite aux 18-65 ans — ce qui neutralise l\'effet des retraites —, la France n\'est plus le pays le plus inégalitaire avant redistribution mais le 3ᵉ, tout en gardant la redistribution la plus forte des huit pays comparés. Le patrimoine médian français dépasse l\'allemand de 44 %, effet du taux de propriétaires.',
          },
        ],
      },
      {
        cells: [
          { t: '<b>17.</b> Démographie et avenir' },
          { v: 1.62, d: 2, u: 'enfant par femme · 22,1 % de 65 ans et plus' },
          {
            t: 'La France fait moins d\'enfants que les États-Unis et le Royaume-Uni. Son déficit de population en âge de travailler vient du haut de la pyramide, pas du bas. La part des 15-64 ans recule de 65,3 % en 1995 à 61,3 % en 2024 — et le mouvement n\'est pas terminé.',
          },
        ],
      },
    ],
  },
} satisfies Tables

export const series = {
  'depense-publique-par-nature-1975-2024': {
    raw: true,
    title: 'Dépense publique par nature, 1975-2024',
    subtitle: 'En % du PIB. Sous l\'axe, les mandats présidentiels ; hachures pendant les cohabitations.',
    caption: 'Une seule courbe monte. Et la corrélation avec la couleur politique est faible : les trois plus fortes baisses du ratio surviennent sous une cohabitation de droite, une cohabitation de gauche et une présidence de gauche puis centriste ; les trois plus fortes hausses annuelles sont trois chocs — 1975, 2009, 2020 — sous trois présidents différents.',
    legend: [
      { color: 's1', label: 'Prestations sociales' },
      { color: 's4', label: 'Rémunération des agents' },
      { color: 's3', label: 'Consommations intermédiaires' },
      { color: 's5', label: 'Investissement' },
      { color: 's2', label: 'Charge de la dette' },
    ],
    svg: '<svg viewBox="0 0 720 452" class="cv" role="img" aria-labelledby="cnatur-y-t" preserveAspectRatio="xMidYMid meet">\n<title id="cnatur-y-t">Dépense publique par nature</title>\n<defs><pattern id="coh-y" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line class="cohl" x1="0" y1="0" x2="0" y2="6"></line></pattern></defs>\n<line class="grid" x1="52" y1="372.0" x2="602" y2="372.0"></line>\n<text class="ax ar" x="43" y="376.0">0</text>\n<line class="grid" x1="52" y1="313.7" x2="602" y2="313.7"></line>\n<text class="ax ar" x="43" y="317.7">5</text>\n<line class="grid" x1="52" y1="255.3" x2="602" y2="255.3"></line>\n<text class="ax ar" x="43" y="259.3">10</text>\n<line class="grid" x1="52" y1="197.0" x2="602" y2="197.0"></line>\n<text class="ax ar" x="43" y="201.0">15</text>\n<line class="grid" x1="52" y1="138.7" x2="602" y2="138.7"></line>\n<text class="ax ar" x="43" y="142.7">20</text>\n<line class="grid" x1="52" y1="80.3" x2="602" y2="80.3"></line>\n<text class="ax ar" x="43" y="84.3">25</text>\n<line class="grid" x1="52" y1="22.0" x2="602" y2="22.0"></line>\n<text class="ax ar" x="43" y="26.0">30</text>\n<text class="ax" x="43" y="14" text-anchor="end">% du PIB</text>\n<line class="axis" x1="52" y1="372" x2="602" y2="372"></line>\n<polyline class="ln s1" points="52.0,171.0 63.2,172.0 74.4,169.3 85.7,162.0 96.9,161.9 108.1,157.1 119.3,144.7 130.6,136.1 141.8,134.7 153.0,130.8 164.2,127.2 175.5,128.6 186.7,131.7 197.9,135.4 209.1,137.6 220.4,134.0 231.6,127.1 242.8,120.7 254.0,109.0 265.3,110.2 276.5,110.7 287.7,108.3 298.9,107.2 310.2,111.8 321.4,111.8 332.6,118.8 343.8,116.5 355.1,110.7 366.3,104.8 377.5,103.7 388.7,102.5 400.0,102.5 411.2,103.7 422.4,100.2 433.6,79.2 444.9,78.0 456.1,80.3 467.3,73.3 478.5,71.0 489.8,68.7 501.0,69.8 512.2,68.7 523.4,71.0 534.7,73.3 545.9,74.5 557.1,36.0 568.3,55.8 579.6,71.0 590.8,80.3 602.0,74.5"></polyline>\n<polyline class="ln s4" points="52.0,235.4 63.2,231.8 74.4,227.7 85.7,224.6 96.9,225.2 108.1,222.4 119.3,218.8 130.6,215.3 141.8,215.1 153.0,214.4 164.2,214.5 175.5,215.9 186.7,219.1 197.9,224.9 209.1,228.6 220.4,229.0 231.6,227.0 242.8,223.6 254.0,217.3 265.3,216.8 276.5,214.5 287.7,212.2 298.9,214.5 310.2,216.8 321.4,216.8 332.6,218.0 343.8,219.2 355.1,216.8 366.3,216.8 377.5,219.2 388.7,220.3 400.0,222.7 411.2,226.2 422.4,226.2 433.6,216.8 444.9,218.0 456.1,220.3 467.3,219.2 478.5,219.2 489.8,219.2 501.0,220.3 512.2,221.5 523.4,221.5 534.7,225.0 545.9,227.3 557.1,216.8 568.3,225.0 579.6,226.2 590.8,229.7 602.0,227.3"></polyline>\n<polyline class="ln s3" points="52.0,304.9 63.2,305.0 74.4,307.8 85.7,306.0 96.9,307.4 108.1,303.5 119.3,301.6 130.6,301.1 141.8,299.2 153.0,299.7 164.2,298.3 175.5,304.8 186.7,303.6 197.9,302.9 209.1,307.8 220.4,308.5 231.6,307.1 242.8,305.0 254.0,300.7 265.3,305.7 276.5,307.8 287.7,305.5 298.9,305.5 310.2,312.5 321.4,312.5 332.6,312.5 343.8,313.7 355.1,311.3 366.3,312.5 377.5,312.5 388.7,312.5 400.0,313.7 411.2,314.8 422.4,314.8 433.6,309.0 444.9,309.0 456.1,310.2 467.3,309.0 478.5,309.0 489.8,310.2 501.0,310.2 512.2,311.3 523.4,310.2 534.7,311.3 545.9,311.3 557.1,307.8 568.3,309.0 579.6,307.8 590.8,306.7 602.0,307.8"></polyline>\n<polyline class="ln s5" points="52.0,310.2 63.2,311.1 74.4,316.7 85.7,319.3 96.9,318.9 108.1,317.3 119.3,315.5 130.6,313.7 141.8,316.6 153.0,317.1 164.2,315.4 175.5,316.0 186.7,314.8 197.9,312.0 209.1,312.3 220.4,311.4 231.6,309.6 242.8,310.6 254.0,313.1 265.3,314.7 276.5,318.3 287.7,318.3 298.9,323.0 310.2,324.2 321.4,324.2 332.6,321.8 343.8,323.0 355.1,324.2 366.3,321.8 377.5,321.8 388.7,320.7 400.0,320.7 411.2,320.7 422.4,320.7 433.6,316.0 444.9,316.0 456.1,319.5 467.3,318.3 478.5,318.3 489.8,321.8 501.0,326.5 512.2,326.5 523.4,327.7 534.7,326.5 545.9,323.0 557.1,323.0 568.3,324.2 579.6,323.0 590.8,323.0 602.0,321.8"></polyline>\n<polyline class="ln s2" points="52.0,361.3 63.2,362.3 74.4,360.9 85.7,359.9 96.9,358.7 108.1,357.6 119.3,351.9 130.6,351.4 141.8,345.9 153.0,344.5 164.2,342.2 175.5,341.9 186.7,342.9 197.9,344.1 209.1,343.2 220.4,340.6 231.6,339.1 242.8,337.0 254.0,334.4 265.3,333.0 276.5,331.2 287.7,330.0 298.9,330.0 310.2,332.3 321.4,335.8 332.6,337.0 343.8,335.8 355.1,337.0 366.3,338.2 377.5,339.3 388.7,340.5 400.0,341.7 411.2,340.5 422.4,338.2 433.6,342.8 444.9,342.8 456.1,340.5 467.3,341.7 478.5,345.2 489.8,346.3 501.0,348.7 512.2,349.8 523.4,351.0 534.7,351.0 545.9,354.5 557.1,356.8 568.3,355.7 579.6,349.8 590.8,349.8 602.0,348.7"></polyline>\n<circle class="dot s1" cx="602.0" cy="74.5" r="4"></circle>\n<text class="lbl s1t" x="610.0" y="78.5">Prestations sociales</text>\n<circle class="dot s4" cx="602.0" cy="227.3" r="4"></circle>\n<text class="lbl s4t" x="610.0" y="231.3">Rémunération des agents</text>\n<circle class="dot s3" cx="602.0" cy="307.8" r="4"></circle>\n<text class="lbl s3t" x="610.0" y="311.8">Consommations intermédiaires</text>\n<circle class="dot s5" cx="602.0" cy="321.8" r="4"></circle>\n<text class="lbl s5t" x="610.0" y="325.8">Investissement</text>\n<circle class="dot s2" cx="602.0" cy="348.7" r="4"></circle>\n<text class="lbl s2t" x="610.0" y="352.7">Charge de la dette</text>\n<rect class="pr pr-d" x="52.0" y="388" width="71.8" height="30" rx="2"></rect>\n<text class="prl" x="87.9" y="400" text-anchor="middle">Giscard d\'Estaing</text>\n<rect class="pr pr-g" x="123.8" y="388" width="157.1" height="30" rx="2"></rect>\n<text class="prl" x="202.4" y="400" text-anchor="middle">Mitterrand</text>\n<rect class="pr pr-d" x="281.0" y="388" width="134.7" height="30" rx="2"></rect>\n<text class="prl" x="348.3" y="400" text-anchor="middle">Chirac</text>\n<rect class="pr pr-d" x="415.7" y="388" width="56.1" height="30" rx="2"></rect>\n<text class="prl" x="443.7" y="400" text-anchor="middle">Sarkozy</text>\n<rect class="pr pr-g" x="471.8" y="388" width="56.1" height="30" rx="2"></rect>\n<text class="prl" x="499.9" y="400" text-anchor="middle">Hollande</text>\n<rect class="pr pr-c" x="527.9" y="388" width="80.8" height="30" rx="2"></rect>\n<text class="prl" x="568.3" y="400" text-anchor="middle">Macron</text>\n<rect class="coh" x="177.7" y="404" width="24.7" height="12" rx="1"></rect>\n<rect class="coh" x="256.3" y="404" width="24.7" height="12" rx="1"></rect>\n<rect class="coh" x="304.6" y="404" width="55.0" height="12" rx="1"></rect>\n<text class="prl mutp" x="245.1" y="416" text-anchor="middle">cohabitations</text>\n<text class="ax" x="52.0" y="434" text-anchor="start">1975</text>\n<text class="ax" x="164.2" y="434" text-anchor="middle">1985</text>\n<text class="ax" x="276.5" y="434" text-anchor="middle">1995</text>\n<text class="ax" x="388.7" y="434" text-anchor="middle">2005</text>\n<text class="ax" x="501.0" y="434" text-anchor="middle">2015</text>\n<text class="ax" x="602.0" y="434" text-anchor="end">2024</text>\n</svg>',
    sources: ['eurostat-nasa-10-nf-tr'],
    vintage: '2024',
    values: {
      svg: {
        viewBox: '0 0 720 452',
        titleId: 'cnatur-y-t',
        title: 'Dépense publique par nature',
        preserveAspectRatio: 'xMidYMid meet',
      },
      title: 'Dépense publique par nature, 1975-2024',
      subtitle: 'En % du PIB. Sous l\'axe, les mandats présidentiels ; hachures pendant les cohabitations.',
      caption: 'Une seule courbe monte. Et la corrélation avec la couleur politique est faible : les trois plus fortes baisses du ratio surviennent sous une cohabitation de droite, une cohabitation de gauche et une présidence de gauche puis centriste ; les trois plus fortes hausses annuelles sont trois chocs — 1975, 2009, 2020 — sous trois présidents différents.',
      sources: ['eurostat-nasa-10-nf-tr'],
      vintage: '2024',
      legend: [
        { color: 's1', label: 'Prestations sociales' },
        { color: 's4', label: 'Rémunération des agents' },
        { color: 's3', label: 'Consommations intermédiaires' },
        { color: 's5', label: 'Investissement' },
        { color: 's2', label: 'Charge de la dette' },
      ],
      type: 'line',
      layout: {
        kind: 'line',
        tickLabelX: 43,
        tickLabelDy: 4,
        axisLabel: { x: 43, y: 14, text: '% du PIB', anchor: 'end' },
        axisLineY: 372,
        dotR: 4,
        endLabelDx: 8,
        endLabelDy: 4,
        xLabelY: 434,
        xLabelsLast: true,
        bands: { y: 388, height: 30, rx: 2, labelDy: 12, patternId: 'coh-y' },
      },
      xAxis: { min: 1975, max: 2024, ticks: [1975, 1985, 1995, 2005, 2015, 2024] },
      x: [
        1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989,
        1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004,
        2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
        2020, 2021, 2022, 2023, 2024,
      ],
      y: { min: 0, max: 30, ticks: [0, 5, 10, 15, 20, 25, 30], label: '% du PIB' },
      series: [
        {
          key: 's1',
          color: 's1',
          label: 'Prestations sociales',
          values: [
            17.228, 17.143, 17.374, 18, 18.008, 18.42, 19.483, 20.22, 20.34, 20.674, 20.983, 20.863,
            20.597, 20.28, 20.091, 20.4, 20.991, 21.54, 22.543, 22.44, 22.397, 22.603, 22.697, 22.303,
            22.303, 21.703, 21.9, 22.397, 22.903, 22.997, 23.1, 23.1, 22.997, 23.297, 25.097, 25.2,
            25.002, 25.602, 25.8, 25.997, 25.902, 25.997, 25.8, 25.602, 25.5, 28.799, 27.102, 25.8,
            25.002, 25.5,
          ],
        },
        {
          key: 's4',
          color: 's4',
          label: 'Rémunération des agents',
          values: [
            11.709, 12.017, 12.369, 12.634, 12.583, 12.823, 13.132, 13.431, 13.449, 13.509, 13.5,
            13.38, 13.106, 12.609, 12.292, 12.257, 12.429, 12.72, 13.26, 13.303, 13.5, 13.697, 13.5,
            13.303, 13.303, 13.2, 13.097, 13.303, 13.303, 13.097, 13.003, 12.797, 12.497, 12.497,
            13.303, 13.2, 13.003, 13.097, 13.097, 13.097, 13.003, 12.9, 12.9, 12.6, 12.403, 13.303,
            12.6, 12.497, 12.197, 12.403,
          ],
        },
        {
          key: 's3',
          color: 's3',
          label: 'Consommations intermédiaires',
          values: [
            5.752, 5.743, 5.503, 5.658, 5.538, 5.872, 6.035, 6.078, 6.24, 6.198, 6.317, 5.76, 5.863,
            5.923, 5.503, 5.443, 5.563, 5.743, 6.112, 5.683, 5.503, 5.7, 5.7, 5.1, 5.1, 5.1, 4.998,
            5.203, 5.1, 5.1, 5.1, 4.998, 4.903, 4.903, 5.4, 5.4, 5.298, 5.4, 5.4, 5.298, 5.298, 5.203,
            5.298, 5.203, 5.203, 5.503, 5.4, 5.503, 5.598, 5.503,
          ],
        },
        {
          key: 's5',
          color: 's5',
          label: 'Investissement',
          values: [
            5.298, 5.22, 4.74, 4.518, 4.552, 4.689, 4.843, 4.998, 4.749, 4.706, 4.852, 4.8, 4.903,
            5.143, 5.118, 5.195, 5.349, 5.263, 5.049, 4.912, 4.603, 4.603, 4.2, 4.098, 4.098, 4.303,
            4.2, 4.098, 4.303, 4.303, 4.398, 4.398, 4.398, 4.398, 4.8, 4.8, 4.5, 4.603, 4.603, 4.303,
            3.9, 3.9, 3.798, 3.9, 4.2, 4.2, 4.098, 4.2, 4.2, 4.303,
          ],
        },
        {
          key: 's2',
          color: 's2',
          label: 'Charge de la dette',
          values: [
            0.918, 0.832, 0.952, 1.038, 1.141, 1.235, 1.723, 1.766, 2.238, 2.358, 2.555, 2.581, 2.495,
            2.392, 2.469, 2.692, 2.82, 3, 3.223, 3.343, 3.498, 3.6, 3.6, 3.403, 3.103, 3, 3.103, 3,
            2.898, 2.803, 2.701, 2.598, 2.701, 2.898, 2.503, 2.503, 2.701, 2.598, 2.298, 2.203, 1.998,
            1.903, 1.801, 1.801, 1.501, 1.303, 1.398, 1.903, 1.903, 1.998,
          ],
        },
      ],
      frame: {
        width: 720,
        height: 452,
        left: 52,
        right: 602,
        top: 21.99285714285716,
        bottom: 372.00714285714287,
      },
      annotations: {
        mandates: [
          { label: 'Giscard d\'Estaing', from: 0, to: 6.3967, bloc: 'd' },
          { label: 'Mitterrand', from: 6.3967, to: 20.3929, bloc: 'g' },
          { label: 'Chirac', from: 20.4018, to: 32.4024, bloc: 'd' },
          { label: 'Sarkozy', from: 32.4024, to: 37.4004, bloc: 'd' },
          { label: 'Hollande', from: 37.4004, to: 42.3984, bloc: 'g' },
          { label: 'Macron', from: 42.3984, to: 49.5969, bloc: 'c' },
        ],
        cohabitations: [
          { from: 11.1987, to: 13.3993 },
          { from: 18.2013, to: 20.4018 },
          { from: 22.5044, to: 27.4044 },
        ],
      },
    },
  },
  'france-trois-mesures-du-pib-indice-ue-27-100': {
    svg: {
      viewBox: '0 0 720 340',
      titleId: 'cpibfr-y-t',
      title: 'France, UE-27 = 100',
      preserveAspectRatio: 'xMidYMid meet',
    },
    title: 'France : trois mesures du PIB, indice UE-27 = 100',
    subtitle: '1995-2024. L\'écart entre les courbes mesure ce que coûtent la durée du travail et le taux d\'emploi.',
    caption: 'Jusqu\'en 2019 la productivité horaire française suit exactement la trajectoire allemande ; c\'est le PIB par habitant qui décroche, et l\'écart entre les deux courbes est le taux d\'emploi. Puis, entre 2019 et 2022, la productivité s\'effondre de 11 points — une rupture sans équivalent dans les vingt-cinq années précédentes.',
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
  'depense-publique-par-fonction-en-euros-par-habitant': {
    svg: { viewBox: '0 0 720 692', titleId: 'ccofhab3-y-t', title: 'euros par habitant, 2024' },
    title: 'Dépense publique par fonction, en euros par habitant',
    subtitle: '2024. Trois barres par fonction : moyenne européenne, Allemagne, France.',
    caption: 'L\'Allemagne dépense plus que la France sur huit fonctions sur dix. Les seules exceptions sont le logement (613 € contre 245) et les loisirs et la culture, plus la défense depuis le réarmement français.',
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
  'eleves-par-enseignant-et-par-classe-primaire': {
    svg: { viewBox: '0 0 720 518', titleId: 'cencadre-y-t', title: 'primaire, 2023-2024' },
    title: 'Élèves par enseignant et par classe, primaire',
    subtitle: '2023-2024, public et privé. Dans les deux cas, plus la barre est courte, mieux c\'est.',
    caption: 'La France n\'a pas « un bon taux d\'encadrement et des classes chargées » : elle est au-dessus de la moyenne de l\'OCDE sur les deux mesures. Son fait distinctif est ailleurs — 864 heures d\'instruction au primaire contre 804, concentrées sur 180 jours contre 186.',
    sources: ['ocde-ocde-regards-sur-l-education-2025-tabl'],
    vintage: '2024',
    legend: [
      { color: 's4', label: 'Élèves par enseignant' },
      { color: 's1', label: 'Élèves par classe' },
    ],
    type: 'bar',
    layout: {
      kind: 'bar',
      gridTop: 16,
      gridBottom: 470,
      tickLabelY: 492,
      catLabelX: 156,
      catLabelDy: 18,
      barHeight: 12,
      barPitch: 15,
      groupPitch: 38,
      firstBarY: 22,
      valueLabelDx: 7,
      valueLabelDy: 10.5,
      valueClasses: ['lbl mut', 'lbl s1t'],
      rx: 3,
    },
    x: [
      'Japon', 'France', 'Royaume-Uni', 'Pays-Bas', 'Allemagne', 'Moyenne OCDE', 'Corée du Sud',
      'États-Unis', 'Espagne', 'Finlande', 'Pologne', 'Italie',
    ],
    y: { min: 0, max: 20, ticks: [0, 10, 20] },
    series: [
      {
        key: 'b1',
        color: 's4',
        label: 'Élèves par enseignant',
        values: [14.698, 17.901, 19.499, 16.303, 15.199, 13.999, 16.104, 13.703, 11.9, 12.002, 13.004, 10.501],
        decimals: 1,
      },
      {
        key: 'b2',
        color: 's1',
        label: 'Élèves par classe',
        values: [26.399, 21.598, 26.001, 22.503, 21.104, 20, 20.899, 20.103, 20.899, 18.703, 18.004, 17.901],
        decimals: 1,
      },
    ],
    frame: { width: 720, height: 518, left: 170, right: 501.59975229746584, top: 16, bottom: 470 },
  },
  'pib-par-personne-en-emploi-1995-2024': {
    svg: {
      viewBox: '0 0 720 340',
      titleId: 'cpibemp-y-t',
      title: 'PIB par personne en emploi',
      preserveAspectRatio: 'xMidYMid meet',
    },
    title: 'PIB par personne en emploi, 1995-2024',
    subtitle: 'En milliers de dollars internationaux constants de 2021.',
    caption: 'Rapporté à ceux qui produisent effectivement, le PIB français dépasse l\'allemand de 3,0 % et égale le néerlandais — et c\'est stable depuis trente ans. Le seul décrochage qui résiste à tous les changements de dénominateur est l\'américain : de +6,5 % en 1995 à −17,3 % en 2024.',
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
} satisfies SeriesSet

/** Fiches du chapitre, dans l'ordre : alimente le rail et la recherche. */
export const questions = [
  { id: 'synth-q1', title: 'La thèse centrale, mise à l\'épreuve' },
  { id: 'synth-q2', title: 'Le contrepoint qu\'il faut garder en tête' },
  { id: 'synth-q3', title: 'Résumé par thème' },
  { id: 'synth-q4', title: 'Commentaire' },
  { id: 'synth-q5', title: 'Dix constats, dix chiffres : la chaîne, expliquée simplement' },
] satisfies readonly { id: string; title: string }[]

/**
 * Sources citées dans le texte du chapitre, en plus de celles portées par les
 * tableaux et les figures. La bibliographie les recense aussi : une source
 * citée en prose reste une source du dossier.
 */
export const citedSources = ['eurostat-gdpvd-cap'] satisfies readonly SourceId[]
