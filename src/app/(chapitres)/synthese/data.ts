// Généré par `npm run extract` depuis Temp/chiffres2027 (3).html.
// Toutes les données chiffrées du chapitre vivent ici, chacune sous sa source
// et son millésime. Voir CLAUDE.md, règles 2 à 4.
import type { ChapterMeta, SeriesSet, SourceId, Tables } from '@/lib/types'

export const meta = {
  slug: 'synthese',
  num: 'Synthèse',
  title: 'Ce que l\'ensemble de ces chiffres établit',
  shortTitle: 'Synthèse',
  note: 'Dix constats qui s\'enchaînent, chacun avec le chiffre qui le tranche, écrits pour être lus sans connaissance préalable en économie. Les dix-huit thèmes du dossier portent le détail et les sources.',
  status: 'complete',
  updated: '2026-08',
  legacyAnchor: 'synth',
} satisfies ChapterMeta

export const tables = {
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

export const series = {} satisfies SeriesSet

/** Fiches du chapitre, dans l'ordre : alimente le rail et la recherche. */
export const questions = [
  { id: 'synth-q5', title: 'Dix constats, dix chiffres : la chaîne, expliquée simplement' },
] satisfies readonly { id: string; title: string }[]

/**
 * Sources citées dans le texte du chapitre, en plus de celles portées par les
 * tableaux et les figures. La bibliographie les recense aussi : une source
 * citée en prose reste une source du dossier.
 */
export const citedSources = ['eurostat-gdpvd-cap'] satisfies readonly SourceId[]
