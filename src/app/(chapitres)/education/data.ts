// Généré par `npm run extract` depuis Temp/chiffres2027 (3).html.
// Toutes les données chiffrées du chapitre vivent ici, chacune sous sa source
// et son millésime. Voir CLAUDE.md, règles 2 à 4.
import type { ChapterMeta, SeriesSet, SourceId, Tables } from '@/lib/types'

export const meta = {
  slug: 'education',
  num: 'Thème 14',
  title: 'Éducation et mobilité sociale',
  shortTitle: 'Éducation et mobilité sociale',
  note: 'Le problème n\'est pas le montant dépensé mais sa répartition. Et sur les enseignants, rapporter le salaire au temps de travail n\'atténue pas l\'écart : il l\'aggrave.',
  status: 'complete',
  updated: '2026-08',
  legacyAnchor: 's14',
} satisfies ChapterMeta

export const tables = {
  '2021': {
    vintage: '2021',
    sources: ['ocde-ocde-education-at-a-glance-indicateurs'],
    columns: [
      { key: '2021', header: '2021', type: 'text', headerNumeric: false },
      { key: 'france', header: 'France', type: 'number', headerNumeric: true },
      { key: 'allemagne', header: 'Allemagne', type: 'number', headerNumeric: true },
      { key: 'moyenne-ocde', header: 'Moyenne OCDE', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Temps de travail statutaire total' },
          { v: 1607, d: 0, u: 'h' },
          { v: 1795, d: 0, u: 'h' },
          { v: 1543, d: 0, u: 'h' },
        ],
      },
      {
        cells: [
          { t: 'Présence obligatoire dans l\'établissement' },
          { v: 954, d: 0, u: 'h' },
          null,
          null,
        ],
      },
      {
        cells: [
          { t: 'Heures d\'enseignement' },
          { v: 900, d: 0, u: 'h' },
          { v: 691, d: 0, u: 'h' },
          { v: 784, d: 0, u: 'h' },
        ],
        emphasis: true,
      },
    ],
  },
  '2022': {
    vintage: '2022',
    sources: ['ocde-ocde-base-uoe-fin-structure-dsd-eag-uo'],
    columns: [
      { key: '2022', header: '2022', type: 'text', headerNumeric: false },
      {
        key: 'part-des-pensions-dans-la-masse-salariale-educative',
        header: 'Part des pensions dans la masse salariale éducative',
        type: 'number',
        headerNumeric: true,
      },
    ],
    rows: [
      {
        cells: [
          { t: 'Royaume-Uni' },
          { v: 33, d: 1, u: '%' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 15.3, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Finlande' },
          { v: 15, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Estonie' },
          { v: 15, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Pologne' },
          { v: 13.2, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Corée du Sud' },
          { v: 10.1, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'France' },
          { t: 'non isolable' },
        ],
        emphasis: true,
      },
    ],
  },
  '2022-ppa-par-eleve': {
    vintage: '2022',
    sources: ['ocde-ocde-regards-sur-l-education-2025-depe'],
    columns: [
      {
        key: '2022-ppa-par-eleve',
        header: '2022, $ PPA par élève',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'primaire', header: 'Primaire', type: 'number', headerNumeric: true },
      { key: 'secondaire', header: 'Secondaire', type: 'number', headerNumeric: true },
      { key: 'superieur', header: 'Supérieur', type: 'number', headerNumeric: true },
      { key: 'tous-niveaux', header: 'Tous niveaux', type: 'number', headerNumeric: true },
      { key: 'du-pib', header: '% du PIB', type: 'number', headerNumeric: true },
      {
        key: 'ratio-secondaire-primaire',
        header: 'Ratio secondaire/primaire',
        type: 'number',
        headerNumeric: true,
      },
    ],
    rows: [
      {
        cells: [
          { t: 'France' },
          { v: 11326, d: 0 },
          { v: 15796, d: 0 },
          { v: 21745, d: 0 },
          { v: 15691, d: 0 },
          { v: 5.37, d: 2 },
          { v: 1.39, d: 2 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 13190, d: 0 },
          { v: 18214, d: 0 },
          { v: 23596, d: 0 },
          { v: 18212, d: 0 },
          { v: 4.34, d: 2 },
          { v: 1.38, d: 2 },
        ],
      },
      {
        cells: [
          { t: 'Royaume-Uni' },
          { v: 15036, d: 0 },
          { v: 15972, d: 0 },
          { v: 35638, d: 0 },
          { v: 19228, d: 0 },
          { v: 6.01, d: 2 },
          { v: 1.06, d: 2 },
        ],
      },
      {
        cells: [
          { t: 'Finlande' },
          { v: 12586, d: 0 },
          { v: 14395, d: 0 },
          { v: 20718, d: 0 },
          { v: 15193, d: 0 },
          { v: 5.2, d: 2 },
          { v: 1.14, d: 2 },
        ],
      },
      {
        cells: [
          { t: 'Estonie' },
          { v: 11811, d: 0 },
          { v: 10181, d: 0 },
          { v: 19176, d: 0 },
          { v: 12470, d: 0 },
          { v: 4.47, d: 2 },
          { v: 0.86, d: 2 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Lettonie' },
          { v: 7873, d: 0 },
          { v: 8979, d: 0 },
          { v: 12602, d: 0 },
          { v: 9342, d: 0 },
          { v: 3.78, d: 2 },
          { v: 1.14, d: 2 },
        ],
      },
      {
        cells: [
          { t: 'Pologne' },
          { v: 12116, d: 0 },
          { v: 10098, d: 0 },
          { v: 16139, d: 0 },
          { v: 11663, d: 0 },
          { v: 4.11, d: 2 },
          { v: 0.83, d: 2 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Corée du Sud' },
          { v: 19906, d: 0 },
          { v: 25469, d: 0 },
          { v: 14812, d: 0 },
          { v: 19963, d: 0 },
          { v: 5.63, d: 2 },
          { v: 1.28, d: 2 },
        ],
      },
      {
        cells: [
          { t: 'Japon' },
          { v: 10524, d: 0 },
          { v: 13034, d: 0 },
          { v: 21742, d: 0 },
          { v: 14069, d: 0 },
          { v: 3.74, d: 2 },
          { v: 1.24, d: 2 },
        ],
      },
    ],
  },
  item: {
    vintage: '2024',
    sources: ['eurostat-eurostat-educ-uoe-fine09-depense-publiq'],
    columns: [
      { key: 'c1', header: '', type: 'text', headerNumeric: false },
      {
        key: 'depense-par-eleve-spa-2022',
        header: 'Dépense par élève (SPA, 2022)',
        type: 'number',
        headerNumeric: true,
      },
      {
        key: 'pib-hab-spa-2024',
        header: 'PIB / hab. (SPA, 2024)',
        type: 'number',
        headerNumeric: true,
      },
      {
        key: 'effort-relatif-par-eleve',
        header: '= effort relatif par élève',
        type: 'number',
        headerNumeric: true,
      },
      {
        key: 'part-des-moins-de-20-ans',
        header: '× part des moins de 20 ans',
        type: 'number',
        headerNumeric: true,
      },
      {
        key: 'depense-pib-reconstituee',
        header: '= dépense / PIB reconstituée',
        type: 'number',
        headerNumeric: true,
      },
      { key: 'constatee', header: 'Constatée', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: '<b>France</b>' },
          { v: 8151, d: 0 },
          { v: 39294, d: 0 },
          { v: 0.207, d: 3 },
          { v: 23.1, d: 1, u: '%', strong: true },
          { v: 4.79, d: 2, u: '%' },
          { v: 5.1, d: 1, u: '%', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 10363, d: 0 },
          { v: 46387, d: 0 },
          { v: 0.223, d: 3 },
          { v: 18.7, d: 1, u: '%' },
          { v: 4.18, d: 2, u: '%' },
          { v: 4.5, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Italie' },
          null,
          { v: 39069, d: 0 },
          null,
          { v: 17.1, d: 1, u: '%' },
          null,
          { v: 4, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'UE-27' },
          null,
          { v: 39982, d: 0 },
          null,
          { v: 20, d: 1, u: '%' },
          null,
          null,
        ],
      },
    ],
  },
  hypothese: {
    vintage: '2025',
    sources: ['eurostat-eurostat-educ-uoe-fine09-depense-publiq'],
    columns: [
      { key: 'hypothese', header: 'Hypothèse', type: 'text', headerNumeric: false },
      { key: 'verdict', header: 'Verdict', type: 'text', headerNumeric: false },
      { key: 'ampleur', header: 'Ampleur', type: 'number', headerNumeric: false },
    ],
    rows: [
      {
        cells: [
          { t: '<b>a. La France a plus d\'élèves</b>' },
          { t: 'Confirmé — c\'est le facteur dominant' },
          {
            v: 23.1,
            d: 1,
            u: '% de moins de 20 ans contre 18,7 % en Allemagne, 18,7 % en Espagne, 17,1 % en Italie, 20,0 % dans l\'UE-27',
          },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>b. L\'effort porte sur le secondaire plus que sur le primaire</b>' },
          { t: 'Confirmé — le ratio le plus déséquilibré des pays mesurés' },
          {
            t: 'Rapport secondaire supérieur / primaire : <b>France 1,47</b>, Espagne 1,36, Allemagne 1,24, Pays-Bas 1,14, Finlande 0,97, <b>Italie 0,92</b>',
          },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>c. Les comptes intègrent les retraites</b>' },
          { t: 'Confirmé, et la collecte internationale les inclut aussi' },
          {
            t: '<b>Retraitement ≈ 10 %</b> — 9,4 % sur le primaire, 9,5 % sur le secondaire, 6,5 % sur le supérieur',
          },
        ],
        emphasis: true,
      },
    ],
  },
  grandeur: {
    vintage: '2025',
    sources: ['eurostat-eurostat-educ-uoe-fine09-depense-publiq'],
    columns: [
      { key: 'grandeur', header: 'Grandeur', type: 'text', headerNumeric: false },
      { key: 'publie', header: 'Publié', type: 'number', headerNumeric: true },
      { key: 'corrige', header: 'Corrigé', type: 'number', headerNumeric: true },
      { key: 'ecart', header: 'Écart', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Taux de cotisation employeur, fonctionnaires civils d\'État' },
          { v: 74.3, d: 1, u: '%' },
          { t: '34,7 % <em>(taux d\'équilibre)</em>' },
          { v: -39.6, d: 1, u: 'points' },
        ],
      },
      {
        cells: [
          { t: 'Mission « Enseignement scolaire », 2023' },
          { v: 81.3, d: 1, u: 'Md€' },
          { v: 70.7, d: 1, u: 'Md€' },
          { v: -13, d: 1, u: '%', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Dépense par élève du primaire, 2023' },
          { v: 8450, d: 0, u: '€' },
          { v: 7726, d: 0, u: '€' },
          { v: -8.6, d: 1, u: '%', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Dépense d\'éducation, % du PIB, 2023' },
          { v: 5, d: 1, u: '%' },
          { v: 4.6, d: 1, u: '%' },
          { v: -0.4, d: 1, u: 'point', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<em>Moyenne européenne, pour repère</em>' },
          null,
          { v: 4.7, d: 1, u: '%' },
          { t: 'la France passe <b>en dessous</b>' },
        ],
      },
    ],
  },
  'france-2022-etablissements-publics': {
    vintage: '2022',
    sources: ['ocde-ocde-base-uoe-fin-structure-dsd-eag-uo'],
    columns: [
      {
        key: 'france-2022-etablissements-publics',
        header: 'France 2022, établissements publics',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'm', header: 'M€', type: 'number', headerNumeric: true },
      { key: 'statut-ocde', header: 'Statut OCDE', type: 'text', headerNumeric: false },
    ],
    rows: [
      {
        cells: [
          { t: 'Compensation totale du personnel' },
          { v: 85202, d: 0 },
          { t: 'valeur normale' },
        ],
      },
      {
        cells: [
          { t: 'dont compensation des enseignants' },
          { v: 56773, d: 0 },
          { t: 'valeur normale' },
        ],
      },
      {
        cells: [
          { t: 'dont salaires' },
          { t: 'non déclaré' },
          { t: '<strong>K — incluse dans une autre catégorie</strong>' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'dont pensions de retraite' },
          { t: 'non déclaré' },
          { t: '<strong>K — incluse dans une autre catégorie</strong>' },
        ],
        emphasis: true,
      },
    ],
  },
  'eleves-par-enseignant-public-et-prive': {
    vintage: '2025',
    sources: [
      'ocde-ocde-regards-sur-l-education-2025-tabl',
      'ocde-calcul-a-partir-de-ocde-regards-sur-l-e',
      'ocde-effectifs-depp-reperes-et-references',
      'eurostat-eurostat-educ-uoe-perp04-ratio-eleves-e',
    ],
    columns: [
      {
        key: 'eleves-par-enseignant-public-et-prive',
        header: 'Élèves par enseignant, public et privé',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'preprimaire', header: 'Préprimaire', type: 'number', headerNumeric: true },
      { key: 'primaire', header: 'Primaire', type: 'number', headerNumeric: true },
      { key: 'college', header: 'Collège', type: 'number', headerNumeric: true },
      { key: 'lycee', header: 'Lycée', type: 'number', headerNumeric: true },
      { key: 'superieur', header: 'Supérieur', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: '<b>France</b>' },
          { v: 21.6, d: 1 },
          { v: 17.9, d: 1, strong: true },
          { v: 14.7, d: 1, strong: true },
          { v: 11.5, d: 1 },
          { v: 14.7, d: 1 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 7.1, d: 1 },
          { v: 15.2, d: 1 },
          { v: 12.9, d: 1 },
          { v: 11.9, d: 1 },
          { v: 10.9, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'États-Unis' },
          { v: 16, d: 1 },
          { v: 13.7, d: 1 },
          { v: 14.3, d: 1 },
          { v: 15.2, d: 1 },
          { v: 13, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Royaume-Uni' },
          { v: 33.2, d: 1 },
          { v: 19.5, d: 1 },
          { v: 17, d: 1 },
          null,
          { v: 13.6, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Singapour' },
          null,
          { v: 15, d: 0, approx: true },
          { v: 12, d: 0, approx: true },
          null,
          null,
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Corée du Sud' },
          { v: 11.6, d: 1 },
          { v: 16.1, d: 1 },
          { v: 13.8, d: 1 },
          { v: 11.5, d: 1 },
          null,
        ],
      },
      {
        cells: [
          { t: 'Japon' },
          { v: 10.6, d: 1 },
          { v: 14.7, d: 1 },
          { v: 12.5, d: 1 },
          { v: 11.2, d: 1 },
          null,
        ],
      },
      {
        cells: [
          { t: 'Italie' },
          { v: 11.1, d: 1 },
          { v: 10.5, d: 1 },
          { v: 10.4, d: 1 },
          { v: 10.6, d: 1 },
          { v: 19.5, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Espagne' },
          { v: 10.6, d: 1 },
          { v: 11.9, d: 1 },
          { v: 10.7, d: 1 },
          { v: 9.6, d: 1 },
          { v: 12.1, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Pays-Bas' },
          { v: 16, d: 1 },
          { v: 16.3, d: 1 },
          { v: 15.6, d: 1 },
          { v: 16.4, d: 1 },
          { v: 13, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Finlande' },
          null,
          { v: 12, d: 1 },
          { v: 9.2, d: 1 },
          { v: 17.4, d: 1 },
          { v: 16.3, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Estonie' },
          { v: 8.3, d: 1 },
          { v: 11.9, d: 1 },
          { v: 10.3, d: 1 },
          { v: 16.2, d: 1 },
          { v: 9.7, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Pologne' },
          { v: 12.9, d: 1 },
          { v: 13, d: 1 },
          { v: 9.5, d: 1 },
          { v: 11.9, d: 1 },
          { v: 12.8, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Moyenne OCDE' },
          { v: 13.2, d: 1 },
          { v: 14, d: 1 },
          { v: 12.9, d: 1 },
          { v: 12.7, d: 1 },
          { v: 15.3, d: 1 },
        ],
        total: true,
      },
      {
        cells: [
          { t: 'Moyenne UE-27' },
          null,
          { v: 13.3, d: 1 },
          { v: 11.7, d: 1 },
          { v: 11.3, d: 1 },
          null,
        ],
        total: true,
      },
    ],
  },
  'primaire-2023-2024': {
    vintage: '2024',
    sources: [
      'ocde-ocde-regards-sur-l-education-2025-tabl',
      'ocde-calcul-a-partir-de-ocde-regards-sur-l-e',
      'ocde-effectifs-depp-reperes-et-references',
      'eurostat-eurostat-educ-uoe-perp04-ratio-eleves-e',
    ],
    columns: [
      { key: 'primaire-2023-2024', header: 'Primaire, 2023-2024', type: 'text', headerNumeric: false },
      { key: 'eleves-enseignant', header: 'Élèves / enseignant', type: 'number', headerNumeric: true },
      { key: 'eleves-classe', header: 'Élèves / classe', type: 'number', headerNumeric: true },
      {
        key: 'enseignants-par-groupe-classe',
        header: 'Enseignants par groupe-classe',
        type: 'number',
        headerNumeric: true,
      },
    ],
    rows: [
      {
        cells: [
          { t: 'Singapour' },
          { v: 15, d: 0, approx: true },
          { v: 33.6, d: 1 },
          { v: 2.27, d: 2, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Japon' },
          { v: 14.7, d: 1 },
          { v: 26.4, d: 1 },
          { v: 1.8, d: 2, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Espagne' },
          { v: 11.9, d: 1 },
          { v: 20.9, d: 1 },
          { v: 1.76, d: 2 },
        ],
      },
      {
        cells: [
          { t: 'Italie' },
          { v: 10.5, d: 1 },
          { v: 17.9, d: 1 },
          { v: 1.7, d: 2 },
        ],
      },
      {
        cells: [
          { t: 'Finlande' },
          { v: 12, d: 1 },
          { v: 18.7, d: 1 },
          { v: 1.56, d: 2 },
        ],
      },
      {
        cells: [
          { t: 'États-Unis' },
          { v: 13.7, d: 1 },
          { v: 20.1, d: 1 },
          { v: 1.47, d: 2 },
        ],
      },
      {
        cells: [
          { t: 'Moyenne OCDE' },
          { v: 14, d: 1 },
          { v: 20, d: 1 },
          { v: 1.43, d: 2 },
        ],
        total: true,
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 15.2, d: 1 },
          { v: 21.1, d: 1 },
          { v: 1.39, d: 2 },
        ],
      },
      {
        cells: [
          { t: 'Pologne' },
          { v: 13, d: 1 },
          { v: 18, d: 1 },
          { v: 1.38, d: 2 },
        ],
      },
      {
        cells: [
          { t: 'Pays-Bas' },
          { v: 16.3, d: 1 },
          { v: 22.5, d: 1 },
          { v: 1.38, d: 2 },
        ],
      },
      {
        cells: [
          { t: 'Royaume-Uni' },
          { v: 19.5, d: 1 },
          { v: 26, d: 1 },
          { v: 1.33, d: 2 },
        ],
      },
      {
        cells: [
          { t: 'Corée du Sud' },
          { v: 16.1, d: 1 },
          { v: 20.9, d: 1 },
          { v: 1.3, d: 2 },
        ],
      },
      {
        cells: [
          { t: '<b>France</b>' },
          { v: 17.9, d: 1 },
          { v: 21.6, d: 1 },
          { v: 1.2, d: 2, strong: true },
        ],
        emphasis: true,
      },
    ],
  },
  'primaire-heures-annuelles': {
    vintage: '2025',
    sources: [
      'ocde-ocde-regards-sur-l-education-2025-tabl',
      'ocde-calcul-a-partir-de-ocde-regards-sur-l-e',
      'ocde-effectifs-depp-reperes-et-references',
      'eurostat-eurostat-educ-uoe-perp04-ratio-eleves-e',
    ],
    columns: [
      {
        key: 'primaire-heures-annuelles',
        header: 'Primaire, heures annuelles',
        type: 'text',
        headerNumeric: false,
      },
      {
        key: 'instruction-recue-par-l-eleve',
        header: 'Instruction reçue par l\'élève',
        type: 'number',
        headerNumeric: true,
      },
      {
        key: 'enseignement-du-par-l-enseignant',
        header: 'Enseignement dû par l\'enseignant',
        type: 'number',
        headerNumeric: true,
      },
      { key: 'rapport', header: 'Rapport', type: 'number', headerNumeric: true },
      {
        key: 'enseignants-par-classe-observe',
        header: 'Enseignants par classe observé',
        type: 'number',
        headerNumeric: true,
      },
    ],
    rows: [
      {
        cells: [
          { t: 'Japon' },
          { v: 768, d: 0 },
          { v: 742, d: 0 },
          { v: 1.04, d: 2 },
          { v: 1.8, d: 2, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'France' },
          { v: 864, d: 0 },
          { v: 900, d: 0 },
          { v: 0.96, d: 2 },
          { v: 1.2, d: 2, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Moyenne OCDE' },
          { v: 804, d: 0 },
          { v: 784, d: 0 },
          { v: 1.03, d: 2 },
          { v: 1.43, d: 2 },
        ],
        total: true,
      },
    ],
  },
  'japon-primaire-enseignants-par-groupe-classe-ordinaire': {
    vintage: '2025',
    sources: [
      'ocde-ocde-regards-sur-l-education-2025-tabl',
      'ocde-calcul-a-partir-de-ocde-regards-sur-l-e',
      'ocde-effectifs-depp-reperes-et-references',
      'eurostat-eurostat-educ-uoe-perp04-ratio-eleves-e',
    ],
    columns: [
      {
        key: 'japon-primaire-enseignants-par-groupe-classe-ordinaire',
        header: 'Japon, primaire — enseignants par groupe-classe ordinaire',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'contribution', header: 'Contribution', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Enseignant titulaire du groupe-classe' },
          { v: 1, d: 2 },
        ],
      },
      {
        cells: [
          {
            t: 'Classes d\'enseignement spécialisé <i>(特別支援学級)</i> : ~56 000 classes, 265 700 élèves, plafond légal de 8, moyenne réelle 4,7 — comptées dans le ratio, exclues de la moyenne de taille de classe',
          },
          { t: '<b>+ 0,26</b>' },
        ],
        emphasis: true,
      },
      {
        cells: [
          {
            t: 'Direction : un principal et un adjoint par école, ~19 000 écoles, statut d\'enseignant sans classe',
          },
          { t: '+ 0,18' },
        ],
      },
      {
        cells: [
          {
            t: 'Postes surnuméraires <i>(加配)</i> : ~53 000 postes, dont ~33 000 « amélioration des méthodes pédagogiques » — dédoublement, co-intervention ponctuelle, soutien',
          },
          { t: '+ 0,10 à 0,15' },
        ],
      },
      {
        cells: [
          { t: 'Infirmières scolaires et diététiciennes, statutairement classées <i>教員</i> — estimation' },
          { t: '+ 0,11' },
        ],
      },
      {
        cells: [
          { t: 'Dispositifs de soutien à temps partagé <i>(通級指導)</i>' },
          { t: '+ 0,05' },
        ],
      },
      {
        cells: [
          { t: 'Total reconstitué' },
          { v: 1.7, d: 2, u: 'à 1,75', strong: true },
        ],
        total: true,
      },
    ],
  },
  'france-premier-degre-enseignants-par-groupe-classe-ordinai': {
    vintage: '2025',
    sources: [
      'ocde-ocde-regards-sur-l-education-2025-tabl',
      'ocde-calcul-a-partir-de-ocde-regards-sur-l-e',
      'ocde-effectifs-depp-reperes-et-references',
      'eurostat-eurostat-educ-uoe-perp04-ratio-eleves-e',
    ],
    columns: [
      {
        key: 'france-premier-degre-enseignants-par-groupe-classe-ordinai',
        header: 'France, premier degré — enseignants par groupe-classe ordinaire',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'contribution', header: 'Contribution', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Enseignant titulaire du groupe-classe' },
          { v: 1, d: 2 },
        ],
      },
      {
        cells: [
          { t: 'Brigades de remplacement : 10,9 % des enseignants du premier degré' },
          { t: '+ 0,13' },
        ],
      },
      {
        cells: [
          { t: 'Décharges de direction, RASED, ULIS, conseillers pédagogiques — non décomposable' },
          { t: '+ 0,08' },
        ],
      },
      {
        cells: [
          { t: 'Total, 4 054 300 élèves et ~187 700 classes' },
          { v: 1.21, d: 2, strong: true },
        ],
        total: true,
      },
    ],
  },
  'item-2': {
    vintage: '2025',
    sources: [
      'ocde-ocde-regards-sur-l-education-2025-tabl',
      'ocde-calcul-a-partir-de-ocde-regards-sur-l-e',
      'ocde-effectifs-depp-reperes-et-references',
      'eurostat-eurostat-educ-uoe-perp04-ratio-eleves-e',
    ],
    columns: [
      { key: 'c1', header: '', type: 'text', headerNumeric: false },
      { key: 'france', header: 'France', type: 'number', headerNumeric: true },
      { key: 'moyenne-ocde', header: 'Moyenne OCDE', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Heures d\'instruction reçues par élève, primaire' },
          { v: 864, d: 0, u: 'h', strong: true },
          { v: 804, d: 0, u: 'h' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Heures d\'instruction reçues, collège' },
          { v: 973, d: 0, u: 'h', strong: true },
          { v: 909, d: 0, u: 'h' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Jours d\'école par an' },
          { v: 180, d: 0, strong: true },
          { v: 186, d: 0 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Semaines de classe' },
          { v: 36, d: 0 },
          { v: 38, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Semaines de vacances' },
          { v: 16, d: 0 },
          { v: 13.5, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Heures d\'enseignement statutaires, primaire' },
          { v: 900, d: 0, u: 'h', strong: true },
          { v: 738, d: 0, u: 'à 783 h' },
        ],
        separator: true,
      },
      {
        cells: [
          { t: 'Heures d\'enseignement statutaires, collège' },
          { v: 684, d: 0, u: 'à 720 h' },
          { v: 660, d: 0, u: 'à 709 h' },
        ],
      },
      {
        cells: [
          { t: 'Heures d\'enseignement statutaires, lycée' },
          { v: 684, d: 0, u: 'à 720 h' },
          { v: 607, d: 0, u: 'à 643 h' },
        ],
      },
    ],
  },
  'france-2024-2025': {
    vintage: '2025',
    sources: [
      'ocde-ocde-regards-sur-l-education-2025-tabl',
      'ocde-calcul-a-partir-de-ocde-regards-sur-l-e',
      'ocde-effectifs-depp-reperes-et-references',
      'eurostat-eurostat-educ-uoe-perp04-ratio-eleves-e',
    ],
    columns: [
      { key: 'france-2024-2025', header: 'France, 2024-2025', type: 'text', headerNumeric: false },
      { key: 'public', header: 'Public', type: 'number', headerNumeric: true },
      { key: 'prive-sous-contrat', header: 'Privé sous contrat', type: 'number', headerNumeric: true },
      { key: 'total', header: 'Total', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Enseignants du premier degré' },
          { v: 323800, d: 0 },
          { v: 43700, d: 0 },
          { v: 367500, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Enseignants du second degré' },
          { v: 389000, d: 0 },
          { v: 96300, d: 0 },
          { v: 485300, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Total enseignants' },
          { v: 712800, d: 0 },
          { v: 140000, d: 0 },
          { v: 852800, d: 0 },
        ],
        total: true,
      },
      {
        cells: [
          { t: 'Élèves du premier degré <em>(2023-24)</em>' },
          { v: 5486450, d: 0 },
          { v: 853450, d: 0, u: '— 13,5 %' },
          { v: 6339900, d: 0 },
        ],
        separator: true,
      },
      {
        cells: [
          { t: 'Élèves du second degré' },
          { v: 4465200, d: 0 },
          { v: 1191400, d: 0, u: '— 21,1 %' },
          { v: 5656600, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Total élèves' },
          { v: 9951650, d: 0 },
          { t: '2 044 850 — <b>17,0 %</b>' },
          { v: 11996500, d: 0 },
        ],
        total: true,
      },
    ],
  },
  'france-eleves-par-enseignant': {
    vintage: '2024',
    sources: [
      'ocde-ocde-regards-sur-l-education-2025-tabl',
      'ocde-calcul-a-partir-de-ocde-regards-sur-l-e',
      'ocde-effectifs-depp-reperes-et-references',
      'eurostat-eurostat-educ-uoe-perp04-ratio-eleves-e',
    ],
    columns: [
      {
        key: 'france-eleves-par-enseignant',
        header: 'France, élèves par enseignant',
        type: 'text',
        headerNumeric: false,
      },
      { key: '2015', header: '2015', type: 'number', headerNumeric: true },
      { key: '2019', header: '2019', type: 'number', headerNumeric: true },
      { key: '2023', header: '2023', type: 'number', headerNumeric: true },
      { key: '2024', header: '2024', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Primaire' },
          { v: 19.7, d: 1 },
          { v: 18.7, d: 1 },
          { v: 18.1, d: 1 },
          { v: 17.9, d: 1, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Collège' },
          { v: 14.4, d: 1 },
          { v: 14.5, d: 1 },
          { v: 14.7, d: 1 },
          { v: 14.7, d: 1 },
        ],
      },
    ],
  },
  'annee-scolaire': {
    vintage: '2023',
    sources: ['depp-reponse-du-ministere-de-l-education-nati'],
    columns: [
      { key: 'annee-scolaire', header: 'Année scolaire', type: 'text', headerNumeric: false },
      { key: 'total', header: 'Total', type: 'number', headerNumeric: true },
      { key: 'premier-degre', header: 'Premier degré', type: 'number', headerNumeric: true },
      { key: 'college', header: 'Collège', type: 'number', headerNumeric: true },
      { key: 'lycee', header: 'Lycée', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: '2020-2021' },
          { v: 64564, d: 0 },
          null,
          null,
          null,
        ],
      },
      {
        cells: [
          { t: '2021-2022' },
          { t: '77 435 <em>(+20 %)</em>' },
          { v: 35374, d: 0 },
          { v: 31826, d: 0 },
          { v: 10235, d: 0 },
        ],
      },
      {
        cells: [
          { t: '2022-2023' },
          { v: 89500, d: 0 },
          { v: 41000, d: 0 },
          { v: 36300, d: 0 },
          { v: 12200, d: 0 },
        ],
      },
      {
        cells: [
          { t: '<b>2023-2024</b>' },
          { v: 88500, d: 0, strong: true },
          null,
          null,
          null,
        ],
        emphasis: true,
      },
    ],
  },
  'comprehension-de-l-ecrit': {
    vintage: '2022',
    sources: ['ocde-ocde-enquete-pisa-score-moyen-en-mathe'],
    columns: [
      {
        key: 'comprehension-de-l-ecrit',
        header: 'Compréhension de l\'écrit',
        type: 'text',
        headerNumeric: false,
      },
      { key: '2000', header: '2000', type: 'number', headerNumeric: true },
      { key: '2009', header: '2009', type: 'number', headerNumeric: true },
      { key: '2018', header: '2018', type: 'number', headerNumeric: true },
      { key: '2022', header: '2022', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'France' },
          { v: 504.7, d: 1 },
          { v: 495.6, d: 1 },
          { v: 492.6, d: 1 },
          { v: 473.9, d: 1 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 484, d: 1 },
          { v: 497.3, d: 1 },
          { v: 498.3, d: 1 },
          { v: 479.8, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Royaume-Uni' },
          { v: 523.4, d: 1 },
          { v: 494.2, d: 1 },
          { v: 503.9, d: 1 },
          { v: 494.4, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Estonie' },
          null,
          { v: 501, d: 1 },
          { v: 523, d: 1 },
          { v: 511, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Finlande' },
          { v: 546.5, d: 1 },
          { v: 535.9, d: 1 },
          { v: 520.1, d: 1 },
          { v: 490.2, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Pologne' },
          { v: 479.1, d: 1 },
          { v: 500.5, d: 1 },
          { v: 511.9, d: 1 },
          { v: 488.7, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Singapour' },
          null,
          { v: 525.9, d: 1 },
          { v: 549.5, d: 1 },
          { v: 542.6, d: 1 },
        ],
      },
    ],
  },
  sciences: {
    vintage: '2022',
    sources: ['ocde-ocde-enquete-pisa-score-moyen-en-mathe'],
    columns: [
      { key: 'sciences', header: 'Sciences', type: 'text', headerNumeric: false },
      { key: '2006', header: '2006', type: 'number', headerNumeric: true },
      { key: '2012', header: '2012', type: 'number', headerNumeric: true },
      { key: '2018', header: '2018', type: 'number', headerNumeric: true },
      { key: '2022', header: '2022', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'France' },
          { v: 495.2, d: 1 },
          { v: 499, d: 1 },
          { v: 493, d: 1 },
          { v: 487.2, d: 1 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 515.6, d: 1 },
          { v: 524.1, d: 1 },
          { v: 503, d: 1 },
          { v: 492.4, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Estonie' },
          { v: 531.4, d: 1 },
          { v: 541.4, d: 1 },
          { v: 530.1, d: 1 },
          { v: 525.8, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Finlande' },
          { v: 563.3, d: 1 },
          { v: 545.4, d: 1 },
          { v: 521.9, d: 1 },
          { v: 511, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Singapour' },
          null,
          { v: 551.5, d: 1 },
          { v: 550.9, d: 1 },
          { v: 561.4, d: 1 },
        ],
      },
    ],
  },
  'salaire-statutaire-ppa-2022-college': {
    vintage: '2022',
    sources: ['ocde-ocde-education-at-a-glance-indicateurs'],
    columns: [
      {
        key: 'salaire-statutaire-ppa-2022-college',
        header: 'Salaire statutaire, $ PPA, 2022, collège',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'debut', header: 'Début', type: 'number', headerNumeric: true },
      { key: 'apres-15-ans', header: 'Après 15 ans', type: 'number', headerNumeric: true },
      { key: 'fin-de-carriere', header: 'Fin de carrière', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'France' },
          { v: 37720, d: 0 },
          { v: 43792, d: 0 },
          { v: 62169, d: 0 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 77905, d: 0 },
          { v: 93085, d: 0 },
          { v: 101510, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Angleterre' },
          { v: 34732, d: 0 },
          { v: 55726, d: 0 },
          { v: 55726, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Moyenne OCDE' },
          { v: 37628, d: 0 },
          { v: 51613, d: 0 },
          { v: 63332, d: 0 },
        ],
        total: true,
      },
      {
        cells: [
          { t: '<em>France / OCDE</em>' },
          { t: '<em>100 %</em>' },
          { t: '<em>85 %</em>' },
          { t: '<em>98 %</em>' },
        ],
      },
    ],
  },
  'heures-d-enseignement-annuelles-2021': {
    vintage: '2021',
    sources: ['ocde-ocde-education-at-a-glance-indicateurs'],
    columns: [
      {
        key: 'heures-d-enseignement-annuelles-2021',
        header: 'Heures d\'enseignement annuelles, 2021',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'primaire', header: 'Primaire', type: 'number', headerNumeric: true },
      { key: 'college', header: 'Collège', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'France' },
          { v: 900, d: 0 },
          { v: 720, d: 0 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Moyenne OCDE' },
          { v: 784, d: 0 },
          { v: 711, d: 0 },
        ],
        total: true,
      },
      {
        cells: [
          { t: 'Japon' },
          { v: 750, d: 0 },
          { v: 609, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 691, d: 0 },
          { v: 641, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Finlande' },
          { v: 680, d: 0 },
          { v: 595, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Corée du Sud' },
          { v: 672, d: 0 },
          { v: 517, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Pologne' },
          { v: 611, d: 0 },
          { v: 489, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Estonie' },
          { v: 592, d: 0 },
          { v: 609, d: 0 },
        ],
      },
    ],
  },
  'salaire-a-15-ans-heure-enseignee': {
    vintage: '2022',
    sources: ['ocde-ocde-education-at-a-glance-indicateurs'],
    columns: [
      {
        key: 'salaire-a-15-ans-heure-enseignee',
        header: 'Salaire à 15 ans / heure enseignée',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'primaire', header: 'Primaire', type: 'number', headerNumeric: true },
      { key: 'college', header: 'Collège', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'France' },
          { v: 45.2, d: 1, u: '$/h' },
          { v: 60.8, d: 1, u: '$/h' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Moyenne OCDE' },
          { v: 63.7, d: 1, u: '$/h' },
          { v: 72.6, d: 1, u: '$/h' },
        ],
        total: true,
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 124, d: 1, u: '$/h' },
          { v: 145.3, d: 1, u: '$/h' },
        ],
      },
      {
        cells: [
          { t: '<em>France / OCDE</em>' },
          { t: '<em>71 %</em>' },
          { t: '<em>84 %</em>' },
        ],
      },
    ],
  },
  'salaire-enseignant-gains-des-diplomes-du-superieur-2022': {
    vintage: '2022',
    sources: ['ocde-ocde-education-at-a-glance-indicateurs'],
    columns: [
      {
        key: 'salaire-enseignant-gains-des-diplomes-du-superieur-2022',
        header: 'Salaire enseignant / gains des diplômés du supérieur, 2022',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'ratio', header: 'Ratio', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'France, primaire' },
          { v: 0.64, d: 2 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'France, collège' },
          { v: 0.69, d: 2 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Angleterre, collège' },
          { v: 0.92, d: 2 },
        ],
      },
      {
        cells: [
          { t: 'Moyenne OCDE, collège' },
          { v: 0.93, d: 2 },
        ],
        total: true,
      },
      {
        cells: [
          { t: 'Allemagne, collège' },
          { v: 1.04, d: 2 },
        ],
      },
    ],
  },
  'cycle-pisa': {
    vintage: '2024',
    sources: ['insee-insee-dgfip-cnaf-cnav-ccmsa-enquetes-re', 'ocde-ocde-enquete-pisa-score-moyen-en-mathe'],
    columns: [
      { key: 'cycle-pisa', header: 'Cycle PISA', type: 'text', headerNumeric: false },
      {
        key: 'score-mathematiques',
        header: 'Score, mathématiques',
        type: 'number',
        headerNumeric: true,
      },
      {
        key: 'pauvrete-des-moins-de-18-ans',
        header: 'Pauvreté des moins de 18 ans',
        type: 'number',
        headerNumeric: true,
      },
      {
        key: 'ensemble-de-la-population',
        header: 'Ensemble de la population',
        type: 'number',
        headerNumeric: true,
      },
    ],
    rows: [
      {
        cells: [
          { v: 2003, d: 0, g: false },
          { v: 510.8, d: 1 },
          { v: 17.7, d: 1, u: '%' },
          { v: 13, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { v: 2006, d: 0, g: false },
          { v: 495.5, d: 1 },
          { v: 17.7, d: 1, u: '%' },
          { v: 13.1, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { v: 2009, d: 0, g: false },
          { v: 496.8, d: 1 },
          { v: 17.7, d: 1, u: '%' },
          { v: 13.5, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { v: 2012, d: 0, g: false },
          { v: 495, d: 1 },
          { v: 19.6, d: 1, u: '%' },
          { v: 13.9, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { v: 2015, d: 0, g: false },
          { v: 492.9, d: 1 },
          { v: 19.9, d: 1, u: '%' },
          { v: 14.2, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { v: 2018, d: 0, g: false },
          { v: 495.4, d: 1 },
          { v: 21, d: 1, u: '%' },
          { v: 14.8, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { v: 2022, d: 0, strong: true, g: false },
          { v: 473.9, d: 1, strong: true },
          { v: 20.4, d: 1, u: '%', strong: true },
          { v: 14.4, d: 1, u: '%', strong: true },
        ],
        emphasis: true,
      },
    ],
  },
  periode: {
    vintage: '2024',
    sources: ['insee-insee-dgfip-cnaf-cnav-ccmsa-enquetes-re', 'ocde-ocde-enquete-pisa-score-moyen-en-mathe'],
    columns: [
      { key: 'periode', header: 'Période', type: 'text', headerNumeric: false },
      { key: 'score-pisa', header: 'Score PISA', type: 'number', headerNumeric: true },
      {
        key: 'pauvrete-des-moins-de-18-ans',
        header: 'Pauvreté des moins de 18 ans',
        type: 'number',
        headerNumeric: true,
      },
    ],
    rows: [
      {
        cells: [
          { v: 2003, d: 0, u: '→ 2006', g: false },
          { v: -15.3, d: 1, strong: true },
          { v: 0, d: 1, u: 'pt', sign: true, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { v: 2006, d: 0, u: '→ 2018', g: false },
          { v: -0.1, d: 1, strong: true },
          { v: 3.3, d: 1, u: 'pt', sign: true, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { v: 2018, d: 0, u: '→ 2022', g: false },
          { v: -21.5, d: 1, strong: true },
          { v: -0.6, d: 1, u: 'pt', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { v: 2003, d: 0, u: '→ 2022', strong: true, g: false },
          { v: -36.9, d: 1, strong: true },
          { v: 2.7, d: 1, u: 'pt', sign: true, strong: true },
        ],
        total: true,
      },
    ],
  },
  'configuration-familiale-2021': {
    vintage: '2021',
    sources: ['insee-insee-dgfip-cnaf-cnav-ccmsa-enquetes-re', 'ocde-ocde-enquete-pisa-score-moyen-en-mathe'],
    columns: [
      {
        key: 'configuration-familiale-2021',
        header: 'Configuration familiale, 2021',
        type: 'text',
        headerNumeric: false,
      },
      {
        key: 'taux-de-pauvrete-des-enfants',
        header: 'Taux de pauvreté des enfants',
        type: 'number',
        headerNumeric: true,
      },
      { key: 'enfants-pauvres', header: 'Enfants pauvres', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Deux adultes en emploi' },
          { v: 4.3, d: 1, u: '%', strong: true },
          { v: 303000, d: 0 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Un adulte en emploi, un au chômage ou inactif' },
          { v: 32, d: 1, u: '%' },
          { v: 886000, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Aucun adulte en emploi' },
          { v: 70.5, d: 1, u: '%' },
          { v: 458000, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Adulte isolé en emploi' },
          { v: 21.1, d: 1, u: '%' },
          { v: 368000, d: 0 },
        ],
        separator: true,
      },
      {
        cells: [
          { t: 'Adulte isolé au chômage ou inactif' },
          { v: 80.2, d: 1, u: '%', strong: true },
          { v: 600000, d: 0 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Autres types de ménage' },
          { v: 29.1, d: 1, u: '%' },
          { v: 144000, d: 0 },
        ],
      },
      {
        cells: [
          { t: '<b>Ensemble</b>' },
          { v: 20.6, d: 1, u: '%', strong: true },
          { v: 2759000, d: 0 },
        ],
        total: true,
      },
    ],
  },
  annee: {
    vintage: '2024',
    sources: ['insee-insee-dgfip-cnaf-cnav-ccmsa-enquetes-re', 'ocde-ocde-enquete-pisa-score-moyen-en-mathe'],
    columns: [
      { key: 'annee', header: 'Année', type: 'text', headerNumeric: false },
      { key: 'moins-de-18-ans', header: 'Moins de 18 ans', type: 'number', headerNumeric: true },
      {
        key: 'ensemble-de-la-population',
        header: 'Ensemble de la population',
        type: 'number',
        headerNumeric: true,
      },
    ],
    rows: [
      {
        cells: [
          { v: 2021, d: 0, g: false },
          { v: 20.6, d: 1, u: '%' },
          { v: 14.5, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { v: 2022, d: 0, g: false },
          { v: 20.4, d: 1, u: '%' },
          { v: 14.4, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { v: 2023, d: 0, g: false },
          { v: 21.9, d: 1, u: '%' },
          { v: 15.4, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { v: 2024, d: 0, strong: true, g: false },
          { v: 22.4, d: 1, u: '%', strong: true },
          { v: 15.4, d: 1, u: '%', strong: true },
        ],
        emphasis: true,
      },
    ],
  },
  'france-pisa-mathematiques': {
    vintage: '2022',
    sources: [
      'ocde-depp-note-d-information-n-23-48-decem',
      'depp-depp-note-d-information-n-24-47-decem',
      'ocde-ocde-resultats-du-pisa-2022-volume-ii', 'ocde-ocde-resultats-du-pisa-2022-volume-i',
    ],
    columns: [
      {
        key: 'france-pisa-mathematiques',
        header: 'France, PISA mathématiques',
        type: 'text',
        headerNumeric: false,
      },
      { key: '2012', header: '2012', type: 'number', headerNumeric: true },
      { key: '2022', header: '2022', type: 'number', headerNumeric: true },
      { key: 'evolution', header: 'Évolution', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Élèves très défavorisés' },
          { v: 440.4, d: 1 },
          { v: 421.9, d: 1 },
          { v: -18.5, d: 1 },
        ],
      },
      {
        cells: [
          { t: '<b>Élèves très favorisés</b>' },
          { v: 561.3, d: 1, strong: true },
          { v: 534.5, d: 1, strong: true },
          { v: -26.8, d: 1, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Écart d\'équité' },
          { v: 120.9, d: 1 },
          { v: 112.5, d: 1 },
          { v: -7.4, d: 1 },
        ],
        total: true,
      },
    ],
  },
  'repartition-des-eleves-france': {
    vintage: '2025',
    sources: [
      'ocde-depp-note-d-information-n-23-48-decem',
      'depp-depp-note-d-information-n-24-47-decem',
      'ocde-ocde-resultats-du-pisa-2022-volume-ii', 'ocde-ocde-resultats-du-pisa-2022-volume-i',
    ],
    columns: [
      {
        key: 'repartition-des-eleves-france',
        header: 'Répartition des élèves, France',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'en-difficulte', header: 'En difficulté', type: 'number', headerNumeric: true },
      {
        key: 'les-plus-performants',
        header: 'Les plus performants',
        type: 'number',
        headerNumeric: true,
      },
    ],
    rows: [
      {
        cells: [
          { v: 2003, d: 0, g: false },
          { v: 17, d: 0, u: '%' },
          { v: 15, d: 0, u: '%' },
        ],
      },
      {
        cells: [
          { v: 2012, d: 0, g: false },
          { v: 22, d: 0, u: '%' },
          { v: 13, d: 0, u: '%' },
        ],
      },
      {
        cells: [
          { v: 2018, d: 0, g: false },
          { v: 21, d: 0, u: '%' },
          { v: 11, d: 0, u: '%' },
        ],
      },
      {
        cells: [
          { v: 2022, d: 0, strong: true, g: false },
          { v: 29, d: 0, u: '%', strong: true },
          { v: 7, d: 0, u: '%', strong: true },
        ],
        emphasis: true,
      },
    ],
  },
  'quartile-social-pisa-2022': {
    vintage: '2022',
    sources: [
      'ocde-depp-note-d-information-n-23-48-decem',
      'depp-depp-note-d-information-n-24-47-decem',
      'ocde-ocde-resultats-du-pisa-2022-volume-ii', 'ocde-ocde-resultats-du-pisa-2022-volume-i',
    ],
    columns: [
      {
        key: 'quartile-social-pisa-2022',
        header: 'Quartile social, PISA 2022',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'france', header: 'France', type: 'number', headerNumeric: true },
      { key: 'moyenne-ue', header: 'Moyenne UE', type: 'number', headerNumeric: true },
      { key: 'ecart', header: 'Écart', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Très défavorisés' },
          { v: 421.9, d: 1 },
          { v: 428.4, d: 1 },
          { v: -6.5, d: 1, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Défavorisés' },
          { v: 456.7, d: 1 },
          { v: 459.4, d: 1 },
          { v: -2.7, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Favorisés' },
          { v: 489.2, d: 1 },
          { v: 488, d: 1 },
          { v: 1.2, d: 1, sign: true },
        ],
      },
      {
        cells: [
          { t: 'Très favorisés' },
          { v: 534.5, d: 1 },
          { v: 526, d: 1 },
          { v: 8.5, d: 1, sign: true, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>Ensemble</b>' },
          { v: 473.9, d: 1, strong: true },
          { v: 474, d: 1, strong: true },
          { v: -0.1, d: 1 },
        ],
        total: true,
      },
    ],
  },
  'timss-cm1-mathematiques': {
    vintage: '2025',
    sources: [
      'ocde-depp-note-d-information-n-23-48-decem',
      'depp-depp-note-d-information-n-24-47-decem',
      'ocde-ocde-resultats-du-pisa-2022-volume-ii', 'ocde-ocde-resultats-du-pisa-2022-volume-i',
    ],
    columns: [
      {
        key: 'timss-cm1-mathematiques',
        header: 'Timss CM1, mathématiques',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'france', header: 'France', type: 'number', headerNumeric: true },
      { key: 'moyenne-ue', header: 'Moyenne UE', type: 'number', headerNumeric: true },
      { key: 'ecart', header: 'Écart', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { v: 2015, d: 0, g: false },
          { v: 488.2, d: 1 },
          { v: 525.1, d: 1 },
          { v: -36.9, d: 1 },
        ],
      },
      {
        cells: [
          { v: 2019, d: 0, g: false },
          { v: 484.8, d: 1 },
          { v: 523.3, d: 1 },
          { v: -38.5, d: 1 },
        ],
      },
      {
        cells: [
          { v: 2023, d: 0, strong: true, g: false },
          { v: 484.1, d: 1, strong: true },
          { v: 524.5, d: 1, strong: true },
          { v: -40.4, d: 1, strong: true },
        ],
        emphasis: true,
      },
    ],
  },
  'quartile-social-timss-cm1-2023': {
    vintage: '2023',
    sources: [
      'ocde-depp-note-d-information-n-23-48-decem',
      'depp-depp-note-d-information-n-24-47-decem',
      'ocde-ocde-resultats-du-pisa-2022-volume-ii', 'ocde-ocde-resultats-du-pisa-2022-volume-i',
    ],
    columns: [
      {
        key: 'quartile-social-timss-cm1-2023',
        header: 'Quartile social, Timss CM1 2023',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'france', header: 'France', type: 'number', headerNumeric: true },
      { key: 'moyenne-ue', header: 'Moyenne UE', type: 'number', headerNumeric: true },
      { key: 'ecart', header: 'Écart', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Très défavorisés' },
          { v: 450.5, d: 1 },
          { v: 491.5, d: 1 },
          { v: -41, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Défavorisés' },
          { v: 479.3, d: 1 },
          { v: 527.3, d: 1 },
          { v: -48, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Favorisés' },
          { v: 508.7, d: 1 },
          { v: 547.2, d: 1 },
          { v: -38.5, d: 1 },
        ],
      },
      {
        cells: [
          { t: '<b>Très favorisés</b>' },
          { v: 531.6, d: 1, strong: true },
          { v: 563.8, d: 1, strong: true },
          { v: -32.2, d: 1, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>Ensemble</b>' },
          { v: 484.1, d: 1, strong: true },
          { v: 523.7, d: 1, strong: true },
          { v: -39.6, d: 1, strong: true },
        ],
        total: true,
      },
    ],
  },
  'statut-au-regard-de-l-immigration-pisa-2022': {
    vintage: '2022',
    sources: [
      'ocde-depp-note-d-information-n-23-48-decem',
      'depp-depp-note-d-information-n-24-47-decem',
      'ocde-ocde-resultats-du-pisa-2022-volume-ii', 'ocde-ocde-resultats-du-pisa-2022-volume-i',
    ],
    columns: [
      {
        key: 'statut-au-regard-de-l-immigration-pisa-2022',
        header: 'Statut au regard de l\'immigration, PISA 2022',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'france', header: 'France', type: 'number', headerNumeric: true },
      { key: 'moyenne-ocde', header: 'Moyenne OCDE', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Part d\'élèves issus de l\'immigration' },
          { v: 16.5, d: 1, u: '%' },
          { v: 12.9, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Élèves autochtones' },
          { v: 485, d: 0 },
          { v: 479, d: 0 },
        ],
        separator: true,
      },
      {
        cells: [
          { t: 'Immigrés de <b>deuxième</b> génération' },
          { v: 438, d: 0, strong: true },
          { v: 459, d: 0, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Immigrés de première génération' },
          { v: 425, d: 0 },
          { v: 435, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Écart après contrôle du milieu socio-économique' },
          { v: -17, d: 0 },
          { v: -15, d: 0 },
        ],
        separator: true,
      },
      {
        cells: [
          { t: '<b>Écart après contrôle du milieu et de la langue parlée en famille</b>' },
          { v: -9, d: 0, strong: true },
          { v: -5, d: 0, strong: true },
        ],
        total: true,
      },
    ],
  },
  'pays-dont-les-eleves-autochtones-depassent-les-francais': {
    vintage: '2025',
    sources: [
      'ocde-depp-note-d-information-n-23-48-decem',
      'depp-depp-note-d-information-n-24-47-decem',
      'ocde-ocde-resultats-du-pisa-2022-volume-ii', 'ocde-ocde-resultats-du-pisa-2022-volume-i',
    ],
    columns: [
      {
        key: 'pays-dont-les-eleves-autochtones-depassent-les-francais',
        header: 'Pays dont les élèves autochtones dépassent les français',
        type: 'text',
        headerNumeric: false,
      },
      {
        key: 'part-d-eleves-issus-de-l-immigration',
        header: 'Part d\'élèves issus de l\'immigration',
        type: 'number',
        headerNumeric: true,
      },
      { key: 'eleves-autochtones', header: 'Élèves autochtones', type: 'number', headerNumeric: true },
      { key: '2-generation', header: '2ᵉ génération', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Singapour' },
          { v: 28.6, d: 1, u: '%' },
          { v: 568, d: 0 },
          { v: 608, d: 0 },
        ],
      },
      {
        cells: [
          { t: '<b>Suisse</b>' },
          { v: 34.9, d: 1, u: '%', strong: true },
          { v: 528, d: 0, strong: true },
          { v: 477, d: 0 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Estonie' },
          { v: 8.7, d: 1, u: '%' },
          { v: 514, d: 0 },
          { v: 492, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Pays-Bas' },
          { v: 13.6, d: 1, u: '%' },
          { v: 508, d: 0 },
          { v: 460, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Autriche' },
          { v: 26.6, d: 1, u: '%' },
          { v: 505, d: 0 },
          { v: 451, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Belgique' },
          { v: 20.5, d: 1, u: '%' },
          { v: 504, d: 0 },
          { v: 452, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Suède' },
          { v: 21.3, d: 1, u: '%' },
          { v: 499, d: 0 },
          { v: 449, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Canada' },
          { v: 34.4, d: 1, u: '%' },
          { v: 497, d: 0 },
          { v: 517, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Danemark' },
          { v: 10.7, d: 1, u: '%' },
          { v: 497, d: 0 },
          { v: 445, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 25.8, d: 1, u: '%' },
          { v: 495, d: 0 },
          { v: 457, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Irlande' },
          { v: 17.4, d: 1, u: '%' },
          { v: 495, d: 0 },
          { v: 489, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Royaume-Uni' },
          { v: 20.1, d: 1, u: '%' },
          { v: 494, d: 0 },
          { v: 507, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Slovénie' },
          { v: 9.8, d: 1, u: '%' },
          { v: 492, d: 0 },
          { v: 447, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Finlande' },
          { v: 6.8, d: 1, u: '%' },
          { v: 491, d: 0 },
          { v: 442, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Tchéquie' },
          { v: 4.1, d: 1, u: '%' },
          { v: 489, d: 0 },
          { v: 484, d: 0 },
        ],
      },
      {
        cells: [
          { t: '<b>France</b>' },
          { v: 16.5, d: 1, u: '%', strong: true },
          { v: 485, d: 0, strong: true },
          { v: 438, d: 0, strong: true },
        ],
        total: true,
      },
      {
        cells: [
          { t: 'Moyenne OCDE' },
          { v: 12.9, d: 1, u: '%' },
          { v: 479, d: 0 },
          { v: 459, d: 0 },
        ],
        separator: true,
      },
    ],
  },
  'contexte-scolaire-pisa-2022': {
    vintage: '2022',
    sources: ['ocde-depp-note-d-information-n-23-48-decem', 'ocde-ocde-resultats-du-pisa-2022-volume-ii'],
    columns: [
      {
        key: 'contexte-scolaire-pisa-2022',
        header: 'Contexte scolaire, PISA 2022',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'france', header: 'France', type: 'number', headerNumeric: true },
      { key: 'moyenne-ocde', header: 'Moyenne OCDE', type: 'number', headerNumeric: true },
      { key: 'ecart', header: 'Écart', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          {
            t: 'Élèves dont le chef d\'établissement juge l\'enseignement affecté par le manque d\'enseignants',
          },
          { v: 67, d: 1, u: '%' },
          { v: 46.7, d: 1, u: '%' },
          { v: 20.3, d: 1, sign: true },
        ],
      },
      {
        cells: [
          { t: '— par des enseignants inadéquats ou peu qualifiés' },
          { v: 30.4, d: 1, u: '%' },
          { v: 25.4, d: 1, u: '%' },
          { v: 5, d: 1, sign: true },
        ],
      },
      {
        cells: [
          { t: '<b>Indice de climat de discipline en cours de mathématiques</b>' },
          { v: -0.23, d: 2, strong: true },
          { v: 0.02, d: 2, sign: true },
          { v: -0.25, d: 2, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Établissements interdisant le téléphone portable' },
          { v: 23.4, d: 1, u: '%' },
          { v: 33.6, d: 1, u: '%' },
          { v: -10.2, d: 1 },
        ],
        separator: true,
      },
      {
        cells: [
          { t: 'Usage pédagogique du numérique, par jour' },
          { v: 1.3, d: 1, u: 'h' },
          { v: 2, d: 1, u: 'h' },
          { v: -0.7, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Élèves admis selon leurs résultats scolaires antérieurs' },
          { v: 55.7, d: 1, u: '%' },
          null,
          null,
        ],
      },
      {
        cells: [
          { t: 'Élèves dont l\'établissement a fermé au plus trois mois pendant la pandémie' },
          { v: 64.2, d: 1, u: '%' },
          { v: 49.5, d: 1, u: '%' },
          { v: 14.7, d: 1, sign: true },
        ],
      },
      {
        cells: [
          { t: 'Indice d\'anxiété en mathématiques' },
          { v: 0.13, d: 2 },
          { v: 0.17, d: 2 },
          { v: -0.04, d: 2 },
        ],
        total: true,
      },
    ],
  },
  'pays-declarant-plus-de-manque-d-enseignants-que-la-france': {
    vintage: '2025',
    sources: ['ocde-depp-note-d-information-n-23-48-decem', 'ocde-ocde-resultats-du-pisa-2022-volume-ii'],
    columns: [
      {
        key: 'pays-declarant-plus-de-manque-d-enseignants-que-la-france',
        header: 'Pays déclarant plus de manque d\'enseignants que la France',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'eleves-concernes', header: 'Élèves concernés', type: 'number', headerNumeric: true },
      { key: 'score-pisa-maths', header: 'Score PISA maths', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Belgique' },
          { v: 80.1, d: 1, u: '%' },
          { v: 489.5, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 73.2, d: 1, u: '%' },
          { v: 474.8, d: 1 },
        ],
      },
      {
        cells: [
          { t: '<b>Estonie</b>' },
          { v: 72.9, d: 1, u: '%', strong: true },
          { v: 510, d: 1, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Pays-Bas' },
          { v: 71.8, d: 1, u: '%' },
          { v: 492.7, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Irlande' },
          { v: 67.8, d: 1, u: '%' },
          { v: 491.6, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Lettonie' },
          { v: 67.7, d: 1, u: '%' },
          { v: 483.2, d: 1 },
        ],
      },
      {
        cells: [
          { t: '<b>France</b>' },
          { v: 67, d: 1, u: '%', strong: true },
          { v: 473.9, d: 1, strong: true },
        ],
        total: true,
      },
      {
        cells: [
          { t: 'Moyenne OCDE' },
          { v: 46.7, d: 1, u: '%' },
          { v: 472.4, d: 1 },
        ],
        separator: true,
      },
    ],
  },
  'ce-que-declarent-les-eleves-cours-de-mathematiques': {
    vintage: '2025',
    sources: ['ocde-depp-note-d-information-n-23-48-decem', 'ocde-ocde-resultats-du-pisa-2022-volume-ii'],
    columns: [
      {
        key: 'ce-que-declarent-les-eleves-cours-de-mathematiques',
        header: 'Ce que déclarent les élèves, cours de mathématiques',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'france', header: 'France', type: 'number', headerNumeric: true },
      { key: 'moyenne-ocde', header: 'Moyenne OCDE', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Les élèves ne commencent à travailler que bien après le début du cours' },
          { v: 21.9, d: 1, u: '%', strong: true },
          { v: 10.6, d: 1, u: '%' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Les élèves sont distraits par leur propre usage du numérique' },
          { v: 27.8, d: 1, u: '%' },
          { v: 19.7, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Les élèves n\'écoutent pas ce que dit le professeur' },
          { v: 16.5, d: 1, u: '%' },
          { v: 10.5, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Il y a du bruit et de l\'agitation' },
          { v: 26, d: 1, u: '%' },
          { v: 19.9, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Le professeur doit attendre longtemps que les élèves se calment' },
          { v: 44.2, d: 1, u: '%' },
          { v: 47.6, d: 1, u: '%' },
        ],
        separator: true,
      },
      {
        cells: [
          { t: 'Les élèves ne peuvent pas bien travailler' },
          { v: 13.3, d: 1, u: '%' },
          { v: 22.1, d: 1, u: '%' },
        ],
      },
    ],
  },
  'dispersion-des-scores-pisa-2022': {
    vintage: '2022',
    sources: ['ocde-depp-note-d-information-n-23-48-decem', 'ocde-ocde-resultats-du-pisa-2022-volume-ii'],
    columns: [
      {
        key: 'dispersion-des-scores-pisa-2022',
        header: 'Dispersion des scores, PISA 2022',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'france', header: 'France', type: 'number', headerNumeric: true },
      { key: 'moyenne-ocde', header: 'Moyenne OCDE', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: '1<sup>er</sup> décile' },
          { v: 353.5, d: 1 },
          { v: 354.7, d: 1 },
        ],
      },
      {
        cells: [
          { t: '9<sup>e</sup> décile' },
          { v: 592.6, d: 1 },
          { v: 590, d: 1 },
        ],
      },
      {
        cells: [
          { t: '<b>Écart interdécile</b>' },
          { v: 239.2, d: 1, strong: true },
          { v: 235.3, d: 1 },
        ],
        total: true,
      },
      {
        cells: [
          { t: 'Élèves sous le niveau 2 de compétence' },
          { v: 28.9, d: 1, u: '%' },
          { v: 31.1, d: 1, u: '%' },
        ],
        separator: true,
      },
      {
        cells: [
          { t: '<b>Élèves au niveau 6, le plus élevé</b>' },
          { v: 1.1, d: 1, u: '%', strong: true },
          { v: 2, d: 1, u: '%' },
        ],
        emphasis: true,
      },
    ],
  },
} satisfies Tables

export const series = {
  'eleves-par-enseignant-et-taille-moyenne-des-classes-primai': {
    svg: { viewBox: '0 0 720 518', titleId: 'cencadre-t', title: 'primaire, 2023-2024' },
    title: 'Élèves par enseignant et taille moyenne des classes, primaire',
    subtitle: '2023-2024, public et privé confondus. Dans les deux cas, plus la barre est courte, mieux c\'est.',
    caption: '<b>La France est au-dessus de la moyenne de l\'OCDE sur les deux mesures à la fois.</b> Elle n\'a pas « un bon taux d\'encadrement et des classes chargées » : elle a <b>17,9 élèves par enseignant contre 14,0 en moyenne OCDE et 15,2 en Allemagne</b>, et <b>21,6 élèves par classe contre 20,0 et 21,1</b>. Des deux mesures, la taille de classe est la plus fiable, et c\'est celle où l\'écart est le plus faible. Les pays qui illustrent le décalage entre les deux indicateurs sont le Japon et Singapour — le bloc ci-dessous explique pourquoi.',
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
  'pisa-mathematiques-2003-2022': {
    svg: {
      viewBox: '0 0 720 330',
      titleId: 'cpisa-t',
      title: 'PISA mathématiques',
      preserveAspectRatio: 'xMidYMid meet',
    },
    title: 'PISA mathématiques, 2003-2022',
    subtitle: 'Score moyen. Les séries ne commencent pas toutes en 2003 : l\'Estonie entre dans PISA en 2006, Singapour en 2009.',
    caption: '<b>La France perd 36,9 points en dix-neuf ans</b> — de 510,8 en 2003 à 473,9 en 2022, soit près d\'une année de scolarité. Le décrochage de 2022 est le plus brutal de la série (−21,5 points en un cycle), du même ordre que le choc allemand (−25,2), mais la France partait déjà plus bas. Japon et Singapour sont les seuls du panel à <b>progresser</b> en 2022. <em>Source : OCDE PISA via Our World in Data.</em>',
    sources: ['ocde-ocde-enquete-pisa-score-moyen-en-mathe'],
    vintage: '2022',
    legend: [
      { color: 's1', label: 'France' },
      { color: 's5', label: 'Allemagne' },
      { color: 's2', label: 'Estonie' },
      { color: 's3', label: 'Japon' },
      { color: 's4', label: 'Singapour' },
    ],
    type: 'line',
    layout: {
      kind: 'line',
      tickLabelX: 43,
      tickLabelDy: 4,
      axisLabel: { x: 43, y: 14, text: 'score PISA', anchor: 'end' },
      axisLineY: 296,
      dotR: 4,
      endLabelDx: 8,
      endLabelDy: 4,
      xLabelY: 314,
    },
    xAxis: { min: 2003, max: 2022, ticks: [2003, 2006, 2009, 2012, 2015, 2018, 2022] },
    x: [2003, 2006, 2009, 2012, 2015, 2018, 2022],
    y: { min: 500, max: 550, ticks: [500, 550], label: 'score PISA' },
    series: [
      {
        key: 's4',
        color: 's4',
        label: 'Singapour',
        values: [null, null, 562.002, 573.482, 564.184, 568.975, 574.715],
      },
      {
        key: 's3',
        color: 's3',
        label: 'Japon',
        values: [534.108, 523.102, 528.985, 536.385, 532.4, 526.992, 535.579],
      },
      {
        key: 's2',
        color: 's2',
        label: 'Estonie',
        values: [null, 514.611, 512.097, 520.493, 519.497, 523.387, 509.915],
      },
      {
        key: 's5',
        color: 's5',
        label: 'Allemagne',
        values: [502.989, 503.795, 512.808, 513.52, 506.025, 500, 474.81],
      },
      {
        key: 's1',
        color: 's1',
        label: 'France',
        values: [510.816, 495.493, 496.822, 495.019, 492.884, 495.398, 473.909],
      },
    ],
    frame: { width: 720, height: 330, left: 52, right: 602, top: 106.3, bottom: 211.7 },
  },
} satisfies SeriesSet

/** Fiches du chapitre, dans l'ordre : alimente le rail et la recherche. */
export const questions = [
  { id: 's14-q1', title: 'Combien dépense-t-on par élève, et à quel niveau ?' },
  {
    id: 's14-q2',
    title: 'La contradiction apparente : on dépense moins par élève et plus en part du PIB. Comment est-ce possible ?',
  },
  {
    id: 's14-q3',
    title: 'Les dépenses d\'éducation incluent-elles les retraites des enseignants ?',
  },
  {
    id: 's14-q4',
    title: 'Combien d\'enseignants pour combien d\'élèves ? La mesure physique, indépendante des prix',
  },
  { id: 's14-q5', title: 'Les élèves étrangers pèsent-ils sur la dépense par élève ?' },
  { id: 's14-q6', title: 'Les résultats se sont-ils dégradés ? La série longue, par pays' },
  {
    id: 's14-q7',
    title: 'Les enseignants sont-ils bien payés ? Et par rapport à quel temps de travail ?',
  },
  { id: 's14-q8', title: 'Quel poids a l\'origine sociale ?' },
  { id: 's14-q8b', title: 'La pauvreté des élèves explique-t-elle la baisse des résultats ?' },
  {
    id: 's14-q8c',
    title: 'Le niveau baisse-t-il parce que les élèves ont changé ? Le test par le haut de la distribution',
  },
  {
    id: 's14-q8d',
    title: 'Alors d\'où vient le niveau français ? Ce que le rapport permet d\'écarter, et ce qu\'il désigne',
  },
  { id: 's14-q9', title: 'Taille des classes, décrochage, insertion' },
] satisfies readonly { id: string; title: string }[]

/**
 * Sources citées dans le texte du chapitre, en plus de celles portées par les
 * tableaux et les figures. La bibliographie les recense aussi : une source
 * citée en prose reste une source du dossier.
 */
export const citedSources = [
  'depp-depp-note-d-information-n-24-47-decem',
  'depp-reponse-du-ministere-de-l-education-nati',
  'eurostat-eurostat-educ-uoe-fine09-depense-publiq',
  'eurostat-eurostat-educ-uoe-perp04-ratio-eleves-e',
  'insee-insee-dgfip-cnaf-cnav-ccmsa-enquetes-re',
  'ocde-calcul-a-partir-de-ocde-regards-sur-l-e',
  'ocde-depp-note-d-information-n-23-48-decem', 'ocde-effectifs-depp-reperes-et-references',
  'ocde-ocde-base-uoe-fin-structure-dsd-eag-uo',
  'ocde-ocde-education-at-a-glance-indicateurs',
  'ocde-ocde-enquete-pisa-score-moyen-en-mathe',
  'ocde-ocde-regards-sur-l-education-2025-depe',
  'ocde-ocde-resultats-du-pisa-2022-volume-i', 'ocde-ocde-resultats-du-pisa-2022-volume-ii',
] satisfies readonly SourceId[]
