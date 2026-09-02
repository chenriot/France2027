// Généré par `npm run extract` depuis Temp/chiffres2027 (3).html.
// Toutes les données chiffrées du chapitre vivent ici, chacune sous sa source
// et son millésime. Voir CLAUDE.md, règles 2 à 4.
import type { ChapterMeta, SeriesSet, SourceId, Tables } from '@/lib/types'

export const meta = {
  slug: 'industrie',
  num: 'Thème 05',
  title: 'Industrie et désindustrialisation',
  shortTitle: 'Industrie et désindustrialisation',
  note: 'Le fait le plus important de ce thème est récent et peu connu : depuis 2023, les coûts salariaux unitaires allemands progressent plus vite que les français. L\'avantage compétitif allemand des années 2000 s\'est inversé.',
  status: 'complete',
  updated: '2026-08',
  legacyAnchor: 's5',
} satisfies ChapterMeta

export const tables = {
  '2024': {
    vintage: '2024',
    sources: ['eurostat-eurostat-nasa-10-nf-tr-secteur-s11-dir'],
    columns: [
      { key: '2024', header: '2024', type: 'text', headerNumeric: false },
      {
        key: 'impots-de-production',
        header: 'Impôts de production',
        type: 'number',
        headerNumeric: true,
      },
      {
        key: 'impot-sur-les-societes',
        header: 'Impôt sur les sociétés',
        type: 'number',
        headerNumeric: true,
      },
      {
        key: 'cotisations-patronales',
        header: 'Cotisations patronales',
        type: 'number',
        headerNumeric: true,
      },
      { key: 'total', header: 'TOTAL', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'France' },
          { v: 5.04, d: 2, u: '%' },
          { v: 4.31, d: 2, u: '%' },
          { v: 15.87, d: 2, u: '%' },
          { v: 25.22, d: 2, u: '%' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Italie' },
          { v: 3.1, d: 2, u: '%' },
          { v: 4.19, d: 2, u: '%' },
          { v: 14.3, d: 2, u: '%' },
          { v: 21.59, d: 2, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Pays-Bas' },
          { v: 1.3, d: 2, u: '%' },
          { v: 6.26, d: 2, u: '%' },
          { v: 13.04, d: 2, u: '%' },
          { v: 20.6, d: 2, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Espagne' },
          { v: 1.66, d: 2, u: '%' },
          { v: 3.88, d: 2, u: '%' },
          { v: 13.84, d: 2, u: '%' },
          { v: 19.37, d: 2, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 1.14, d: 2, u: '%' },
          { v: 4.33, d: 2, u: '%' },
          { v: 10.32, d: 2, u: '%' },
          { v: 15.79, d: 2, u: '%' },
        ],
      },
    ],
  },
  '2025': {
    vintage: '2025',
    sources: [
      'dgfip-dgfip-statistiques-n-35-mai-2025-don', 'eurostat-nasa-10-nf-tr-2',
      'eurostat-nrg-pc-205', 'eurostat-nama-10-lp-ulc-4',
      'insee-insee-parts-de-marche-dans-les-export',
    ],
    columns: [
      { key: '2025', header: '2025', type: 'text', headerNumeric: false },
      { key: 'taux-legal-combine', header: 'Taux légal combiné', type: 'number', headerNumeric: true },
      {
        key: 'taux-effectif-marginal',
        header: 'Taux effectif marginal',
        type: 'number',
        headerNumeric: true,
      },
      {
        key: 'taux-effectif-moyen',
        header: 'Taux effectif moyen',
        type: 'number',
        headerNumeric: true,
      },
    ],
    rows: [
      {
        cells: [
          { t: '<b>France</b>' },
          { v: 36.13, d: 2, u: '%', strong: true },
          { v: 20.4, d: 1, u: '%' },
          { v: 24.1, d: 1, u: '%', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 30.06, d: 2, u: '%' },
          { v: 22.4, d: 1, u: '%' },
          { v: 27.5, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Pays-Bas' },
          { v: 25.8, d: 2, u: '%' },
          { v: 19.6, d: 1, u: '%' },
          { v: 23.9, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'États-Unis' },
          { v: 25.57, d: 2, u: '%' },
          { v: 27.2, d: 1, u: '%' },
          { v: 26.3, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Royaume-Uni' },
          { v: 25, d: 2, u: '%' },
          { v: 23.7, d: 1, u: '%' },
          { v: 24.6, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Chine' },
          { v: 25, d: 2, u: '%' },
          { t: 'non couverte' },
          { t: 'non couverte' },
        ],
      },
      {
        cells: [
          { t: 'Moyenne OCDE' },
          { v: 24.2, d: 2, u: '%' },
          { v: 21.4, d: 1, u: '%' },
          { v: 24.8, d: 1, u: '%' },
        ],
        total: true,
      },
    ],
  },
  'indicateur-2023': {
    vintage: '2023',
    sources: ['eurostat-nama-10-a10'],
    columns: [
      { key: 'indicateur-2023', header: 'Indicateur (2023)', type: 'text', headerNumeric: false },
      { key: 'france', header: 'France', type: 'number', headerNumeric: true },
      { key: 'allemagne', header: 'Allemagne', type: 'number', headerNumeric: true },
      { key: 'italie', header: 'Italie', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'VA industrie (NACE B-E) / PIB' },
          { v: 13.4, d: 1, u: '%' },
          { v: 21.9, d: 1, u: '%' },
          { v: 22, d: 0, u: '% (2021)', approx: true },
        ],
      },
      {
        cells: [
          { t: 'Emploi industriel / emploi total' },
          { v: 10.1, d: 1, u: '%' },
          { v: 17.7, d: 1, u: '%' },
          { t: 'n.d.' },
        ],
      },
    ],
  },
  pays: {
    vintage: '2025',
    sources: ['eurostat-nama-10-lp-ulc-3', 'eurostat-eurostat-lc-lci-lev-cout-horaire-et-na'],
    columns: [
      { key: 'pays', header: 'Pays', type: 'text', headerNumeric: false },
      {
        key: 'ensemble-de-l-economie',
        header: 'Ensemble de l\'économie',
        type: 'number',
        headerNumeric: true,
      },
      {
        key: 'industrie-manufacturiere',
        header: 'Industrie manufacturière',
        type: 'number',
        headerNumeric: true,
      },
    ],
    rows: [
      {
        cells: [
          { t: 'Pays-Bas' },
          { v: 45.2, d: 1 },
          { v: 47.3, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 43.5, d: 1 },
          { v: 48.5, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'France' },
          { v: 43.4, d: 1 },
          { v: 45.7, d: 1 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Italie' },
          { v: 31, d: 1 },
          { v: 31.7, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Espagne' },
          { v: 25.5, d: 1 },
          { v: 27.2, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Pologne' },
          { v: 17.3, d: 1 },
          { v: 15.5, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'UE-27' },
          { v: 33.5, d: 1 },
          { v: 33.8, d: 1 },
        ],
        total: true,
      },
    ],
  },
  facteur: {
    vintage: '2007',
    sources: ['dg-tresor-l-demmou-dg-tresor-document-de-travai'],
    columns: [
      { key: 'facteur', header: 'Facteur', type: 'text', headerNumeric: false },
      { key: 'part-1980-2007', header: 'Part 1980-2007', type: 'number', headerNumeric: true },
      { key: 'part-2000-2007', header: 'Part 2000-2007', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Gains de productivité + déformation de la demande' },
          { v: 29, d: 0, u: '%' },
          { v: 65, d: 0, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Externalisation vers les services (effet statistique)' },
          { t: '20-25 %' },
          { v: 5, d: 0, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Concurrence internationale' },
          { v: 13, d: 0, u: '%' },
          { v: 28, d: 0, u: '%' },
        ],
      },
    ],
  },
  'electricite-industrielle-kwh-hors-taxes': {
    vintage: '1999',
    sources: ['eurostat-eurostat-nrg-pc-205-electricite-bande'],
    columns: [
      {
        key: 'electricite-industrielle-kwh-hors-taxes',
        header: 'Électricité industrielle, €/kWh hors taxes',
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
          { t: '2020, 1ᵉʳ semestre' },
          { v: 0.075, d: 3 },
          { v: 0.085, d: 3 },
          { v: 0.088, d: 3 },
          { v: 0.088, d: 3 },
          { v: 0.082, d: 3 },
        ],
      },
      {
        cells: [
          { t: '2022, 2ᵉ semestre (pic)' },
          { v: 0.251, d: 3 },
          { v: 0.178, d: 3 },
          { v: 0.203, d: 3 },
          { v: 0.152, d: 3 },
          { v: 0.199, d: 3 },
        ],
      },
      {
        cells: [
          { t: '2025, 1ᵉʳ semestre' },
          { v: 0.13, d: 3 },
          { v: 0.183, d: 3 },
          { v: 0.168, d: 3 },
          { v: 0.116, d: 3 },
          { v: 0.157, d: 3 },
        ],
        emphasis: true,
      },
    ],
  },
  'france-trendeo': {
    vintage: '2025',
    sources: ['trendeo-trendeo-observatoire-de-l-investissemen'],
    columns: [
      { key: 'france-trendeo', header: 'France (Trendeo)', type: 'text', headerNumeric: false },
      { key: '2024', header: '2024', type: 'number', headerNumeric: true },
      { key: '2025', header: '2025', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Solde d\'usines (ouvertures − fermetures)' },
          { t: 'négatif' },
          { t: '−63, pire depuis 2014' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Fermetures d\'usines' },
          { t: 'réf.' },
          { v: 32, d: 0, u: '%', sign: true },
        ],
      },
      {
        cells: [
          { t: 'Création nette d\'emplois' },
          { v: 9500, d: 0, sign: true },
          { v: 310, d: 0, sign: true },
        ],
      },
      {
        cells: [
          { t: 'Investissements annoncés' },
          { v: 99, d: 0, u: 'Md€', approx: true },
          { v: 160, d: 0, u: 'Md€ (+61 %)' },
        ],
      },
      {
        cells: [
          { t: '<em>dont data centers</em>' },
          null,
          { v: 67, d: 0, u: 'Md€ (42 %), 2 800 emplois' },
        ],
      },
    ],
  },
  'impots-de-production-d29-2024': {
    vintage: '2024',
    sources: ['eurostat-gov-10a-taxag'],
    columns: [
      {
        key: 'impots-de-production-d29-2024',
        header: 'Impôts de production (D29), 2024',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'du-pib', header: '% du PIB', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Suède *' },
          { v: 10.2, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'France' },
          { v: 4.4, d: 1, u: '%' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Italie' },
          { v: 3, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Moyenne UE-27' },
          { v: 2.4, d: 1, u: '%' },
        ],
        total: true,
      },
      {
        cells: [
          { t: 'Espagne' },
          { v: 1.7, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Pays-Bas' },
          { v: 1.2, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 1, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Irlande' },
          { v: 0.8, d: 1, u: '%' },
        ],
      },
    ],
  },
  poste: {
    vintage: '2026',
    sources: ['eurostat-eurostat-lc-lci-lev-nrg-pc-205-nrg-pc'],
    columns: [
      { key: 'poste', header: 'Poste', type: 'text', headerNumeric: false },
      { key: 'france', header: 'France', type: 'number', headerNumeric: true },
      { key: 'allemagne', header: 'Allemagne', type: 'number', headerNumeric: true },
      { key: 'etats-unis', header: 'États-Unis', type: 'number', headerNumeric: true },
      { key: 'chine', header: 'Chine', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Coût horaire du travail, industrie manufacturière' },
          { v: 45.7, d: 2, u: '€' },
          { v: 48.5, d: 2, u: '€' },
          { t: '≈ 44 € <em>(48,3 $)</em>' },
          { t: '≈ 6 € <em>(fourchette 5-9 $)</em>' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'dont salaire direct' },
          { v: 31.3, d: 2, u: '€' },
          { v: 37, d: 2, u: '€' },
          { v: 29, d: 0, u: '€', approx: true },
          { t: 'n.d.' },
        ],
      },
      {
        cells: [
          { t: 'dont charges non salariales' },
          { t: '14,40 € — <b>31,5 %</b>' },
          { v: 11.5, d: 2, u: '€ — 23,7 %' },
          { v: 15, d: 0, u: '€ — 33,3 %', approx: true },
          { t: 'n.d.' },
        ],
      },
      {
        cells: [
          { t: 'Productivité horaire, économie totale' },
          { v: 87.5, d: 1, u: '$' },
          { v: 93.4, d: 1, u: '$' },
          { v: 98.3, d: 1, u: '$' },
          { t: 'n.d.' },
        ],
      },
      {
        cells: [
          { t: 'Électricité industrielle, bande 20-70 GWh/an' },
          { v: 85.3, d: 1, u: '€/MWh' },
          { v: 159.5, d: 1, u: '€/MWh' },
          { v: 75, d: 0, u: '€/MWh', approx: true },
          { t: '≈ 82-107 €/MWh' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Gaz industriel' },
          { v: 44.8, d: 1, u: '€/MWh' },
          { v: 54.6, d: 1, u: '€/MWh' },
          { t: 'nettement moins cher' },
          { t: 'n.d.' },
        ],
      },
      {
        cells: [
          { t: 'Impôt sur les sociétés, taux combiné' },
          { t: '25,8 % <em>(36,1 % avec la surtaxe si CA > 1,5 Md€)</em>' },
          { v: 30.1, d: 1, u: '%' },
          { v: 25.6, d: 1, u: '%' },
          { t: '25 % <em>(15 % si haute technologie)</em>' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Taux effectif moyen d\'imposition (2023)' },
          { v: 24.1, d: 1, u: '%' },
          { v: 27.5, d: 1, u: '%' },
          { v: 26.3, d: 1, u: '%' },
          { t: 'non couvert' },
        ],
      },
      {
        cells: [
          { t: 'Taux effectif marginal' },
          { v: 20.4, d: 1, u: '%' },
          { v: 22.4, d: 1, u: '%' },
          { v: 27.2, d: 1, u: '%' },
          { t: 'non couvert' },
        ],
      },
      {
        cells: [
          { t: '<b>Impôts de production</b> (« autres impôts sur la production », % du PIB)' },
          { v: 4.4, d: 1, u: '%', strong: true, after: '— 129 Md€' },
          { v: 1, d: 1, u: '%', strong: true },
          { t: 'catégorie sans équivalent direct' },
          { t: 'n.d.' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Soutien à la R&D' },
          { t: 'Crédit d\'impôt recherche, 30 % jusqu\'à 100 M€ puis 5 % — 7,8 Md€ de créance' },
          { t: '<em>Forschungszulage</em>, jusqu\'à 3,5 M€/an par entreprise' },
          { t: 'Déduction immédiate rétablie en 2025 + crédit de recherche' },
          { t: '<b>Super-déduction : 200 %</b> des dépenses de R&D' },
        ],
      },
      {
        cells: [
          { t: 'Aide à l\'investissement décarboné' },
          { t: 'Crédit d\'impôt industrie verte : 15 à 55 %, plafond 150 à 350 M€ par projet' },
          null,
          {
            t: 'Crédits de production sans plafond de volume : 35 $/kWh de batterie, 10 % des coûts pour les minéraux critiques',
          },
          { t: 'Subventions directes et crédit bonifié' },
        ],
      },
      {
        cells: [
          { t: 'Délai d\'implantation' },
          { t: '≈ 17 mois — <b>8 mois d\'écart entre délai théorique et délai réel</b>' },
          { t: 'écart théorie/pratique <b>nul</b>' },
          { t: 'n.d.' },
          { t: 'n.d.' },
        ],
      },
      {
        cells: [
          { t: 'Loyer logistique de référence' },
          { v: 89, d: 0, u: '€/m²/an en Île-de-France ; 55-71 € en régions' },
          { t: 'moyenne européenne ≈ 88 €/m²/an' },
          { t: 'n.d.' },
          { t: 'n.d.' },
        ],
      },
    ],
  },
  'usine-type-resultat-annuel-en-m': {
    vintage: '2026',
    sources: ['eurostat-eurostat-lc-lci-lev-nrg-pc-205-nrg-pc'],
    columns: [
      {
        key: 'usine-type-resultat-annuel-en-m',
        header: 'Usine type, résultat annuel en M€',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'france', header: 'France', type: 'number', headerNumeric: true },
      { key: 'allemagne', header: 'Allemagne', type: 'number', headerNumeric: true },
      { key: 'etats-unis', header: 'États-Unis', type: 'number', headerNumeric: true },
      { key: 'chine', header: 'Chine', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Coût du travail — 200 × 1 600 h' },
          { v: -14.6, d: 1 },
          { v: -15.5, d: 1 },
          { v: -14.1, d: 1 },
          { v: -1.9, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Énergie — 50 GWh' },
          { v: -4.3, d: 1 },
          { v: -8, d: 1 },
          { v: -3.8, d: 1 },
          { v: -4.7, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Impôts de production <em>(≈ 3,5 % de la valeur ajoutée en France)</em>' },
          { v: -1.6, d: 1 },
          { v: -0.4, d: 1 },
          { v: -0.4, d: 1 },
          { v: -0.4, d: 1 },
        ],
      },
      {
        cells: [
          { t: '= résultat avant impôt sur les sociétés' },
          { v: 15.5, d: 1 },
          { v: 12.1, d: 1 },
          { v: 17.7, d: 1 },
          { v: 29, d: 1 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '− impôt sur les sociétés' },
          { v: -4, d: 1 },
          { v: -3.6, d: 1 },
          { v: -4.5, d: 1 },
          { v: -7.3, d: 1 },
        ],
      },
      {
        cells: [
          { t: '= résultat net — <b>rentabilité de l\'investissement</b>' },
          { t: '11,5 — <b>11,5 %</b>' },
          { t: '8,5 — <b>8,5 %</b>' },
          { t: '13,2 — <b>13,2 %</b>' },
          { t: '21,7 — <b>21,7 %</b>' },
        ],
        total: true,
      },
    ],
  },
  'type-d-usine': {
    vintage: '2026',
    sources: ['eurostat-eurostat-lc-lci-lev-nrg-pc-205-nrg-pc'],
    columns: [
      { key: 'type-d-usine', header: 'Type d\'usine', type: 'text', headerNumeric: false },
      { key: 'ce-qui-domine', header: 'Ce qui domine', type: 'text', headerNumeric: false },
      { key: 'ou-elle-va', header: 'Où elle va', type: 'text', headerNumeric: false },
    ],
    rows: [
      {
        cells: [
          {
            t: '<b>Intensive en main-d\'œuvre</b> — textile, assemblage, électronique grand public. Le travail dépasse 40 % de la valeur ajoutée',
          },
          { t: 'Coût horaire' },
          {
            t: 'Rien ne rattrape un rapport de 1 à 7 sur le travail. <b>Aucun aménagement fiscal européen ne compense.</b> La question n\'est pas « France ou Allemagne » mais « Europe ou Asie »',
          },
        ],
      },
      {
        cells: [
          {
            t: '<b>Électro-intensive</b> — aluminium, chimie de base, verre, acier électrique. L\'électricité dépasse 10 % de la valeur ajoutée',
          },
          { t: 'Prix de l\'électricité' },
          {
            t: '<b>C\'est le seul segment où la France a un avantage européen décisif</b> : 85 €/MWh contre 159 en Allemagne, et un contenu carbone de 40 g/kWh contre 336. Sur une usine consommant 500 GWh, l\'écart franco-allemand atteint 37 M€ par an',
          },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>Intensive en capital et en R&D</b> — pharmacie, semi-conducteurs, aéronautique' },
          { t: 'Fiscalité de l\'assiette et subventions' },
          {
            t: 'Le crédit d\'impôt recherche et le crédit industrie verte deviennent structurants. Mais les crédits américains de la loi sur la réduction de l\'inflation sont <b>sans plafond de volume</b>, quand les dispositifs français sont plafonnés par projet',
          },
        ],
      },
      {
        cells: [
          { t: '<b>Faible marge, forte valeur ajoutée locale</b>' },
          { t: 'Impôts de production' },
          {
            t: 'C\'est le seul cas où les impôts de production sont réellement décisifs — parce qu\'ils sont <b>dus même en l\'absence de bénéfice</b>',
          },
        ],
      },
    ],
  },
  'depenses-fiscales-france': {
    vintage: '2026',
    sources: ['eurostat-eurostat-lc-lci-lev-nrg-pc-205-nrg-pc'],
    columns: [
      {
        key: 'depenses-fiscales-france',
        header: 'Dépenses fiscales, France',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'montant', header: 'Montant', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Total, prévision 2026' },
          { v: 88.3, d: 1, u: 'Md€ — ≈ 3,0 % du PIB' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { v: 2025, d: 0, u: '/ 2024', g: false },
          { v: 91.8, d: 1, u: '/ 89,4 Md€' },
        ],
      },
      {
        cells: [
          { t: 'Nombre de dispositifs' },
          { t: '465, dont 82 en extinction' },
        ],
      },
      {
        cells: [
          { t: '1. Crédit d\'impôt recherche' },
          { v: 8041, d: 0, u: 'M€' },
        ],
        separator: true,
      },
      {
        cells: [
          { t: '2. Crédit d\'impôt emploi à domicile' },
          { v: 7208, d: 0, u: 'M€' },
        ],
      },
      {
        cells: [
          { t: '3. Abattement de 10 % sur les pensions' },
          { v: 4665, d: 0, u: 'M€' },
        ],
      },
      {
        cells: [
          { t: '4. Exonération Dutreil sur la transmission d\'entreprises' },
          { v: 4000, d: 0, u: 'M€' },
        ],
      },
      {
        cells: [
          { t: '5. Exonération de l\'épargne salariale' },
          { v: 2890, d: 0, u: 'M€' },
        ],
      },
      {
        cells: [
          { t: '6-10. TVA travaux, TVA restauration, heures supplémentaires, dons, travaux fonciers' },
          { v: 11184, d: 0, u: 'M€' },
        ],
      },
      {
        cells: [
          { t: 'Les dix premières' },
          { t: '37 988 M€ — <b>43 % du total</b>' },
        ],
        total: true,
      },
    ],
  },
  texte: {
    vintage: '2026',
    sources: ['eurostat-eurostat-lc-lci-lev-nrg-pc-205-nrg-pc'],
    columns: [
      { key: 'texte', header: 'Texte', type: 'text', headerNumeric: false },
      {
        key: 'decision-sur-la-suppression-de-la-cvae',
        header: 'Décision sur la suppression de la CVAE',
        type: 'text',
        headerNumeric: false,
      },
    ],
    rows: [
      {
        cells: [
          { t: 'Loi de finances 2021' },
          { t: 'Division par deux (suppression de la part régionale)' },
        ],
      },
      {
        cells: [
          { t: 'Loi de finances 2023' },
          { t: 'Réduction de moitié, <b>suppression annoncée pour 2024</b>' },
        ],
      },
      {
        cells: [
          { t: 'Loi de finances 2024' },
          { t: '<b>Report</b> : suppression étalée jusqu\'en 2027' },
        ],
      },
      {
        cells: [
          { t: 'Loi de finances 2025' },
          { t: '<b>Nouveau report</b> : gel 2025-2027, extinction 2028-2030' },
        ],
      },
      {
        cells: [
          { t: 'Projet de loi de finances 2026' },
          { t: 'Proposition d\'accélération à 2028…' },
        ],
      },
      {
        cells: [
          { t: 'Loi de finances 2026' },
          { t: '…<b>article supprimé</b>. Taux gelé à 0,28 %, suppression au 1ᵉʳ janvier <b>2030</b>' },
        ],
        emphasis: true,
      },
    ],
  },
  etude: {
    vintage: '2026',
    sources: ['eurostat-eurostat-lc-lci-lev-nrg-pc-205-nrg-pc'],
    columns: [
      { key: 'etude', header: 'Étude', type: 'text', headerNumeric: false },
      { key: 'population', header: 'Population', type: 'text', headerNumeric: false },
      {
        key: 'elasticite-au-taux-net-d-impot',
        header: 'Élasticité au taux net d\'impôt',
        type: 'number',
        headerNumeric: true,
      },
    ],
    rows: [
      {
        cells: [
          { t: 'Kleven, Landais, Saez (2013)' },
          { t: 'Footballeurs <b>étrangers</b> en Europe' },
          { v: 1.06, d: 2 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'idem' },
          { t: 'Footballeurs <b>nationaux</b>' },
          { v: 0.12, d: 2 },
        ],
      },
      {
        cells: [
          { t: 'Akcigit, Baslandze, Stantcheva (2016)' },
          { t: 'Inventeurs <b>étrangers</b> du centile supérieur' },
          { v: 0.63, d: 2, u: 'à 1,04' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'idem' },
          { t: 'Inventeurs <b>nationaux</b> du centile supérieur' },
          { v: 0.02, d: 2, u: 'à 0,03' },
        ],
      },
      {
        cells: [
          { t: 'Moretti, Wilson (2017)' },
          { t: 'Scientifiques de premier plan, entre États américains' },
          { v: 0.4, d: 2, u: 'en stock, ≈ 1,8 en flux' },
        ],
      },
    ],
  },
  'barometre-ey-decisions-d-investissement-etranger-2025': {
    vintage: '2025',
    sources: ['eurostat-eurostat-lc-lci-lev-nrg-pc-205-nrg-pc'],
    columns: [
      {
        key: 'barometre-ey-decisions-d-investissement-etranger-2025',
        header: 'Baromètre EY, décisions d\'investissement étranger, 2025',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'nombre', header: 'Nombre', type: 'number', headerNumeric: true },
      { key: 'evolution', header: 'Évolution', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'France — 1ʳᵉ place européenne pour la 7ᵉ année' },
          { v: 852, d: 0 },
          { v: -17, d: 0, u: '%' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Royaume-Uni' },
          { v: 730, d: 0 },
          { v: -14, d: 0, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 548, d: 0 },
          { v: -10, d: 0, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'dont projets industriels français' },
          { v: 354, d: 0 },
          { v: -15, d: 0, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'dont projets de R&D français' },
          null,
          { v: -47, d: 0, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Emplois créés en France' },
          { v: 28000, d: 0, approx: true },
          { t: '−4 % <em>(moyenne européenne −25 %)</em>' },
        ],
      },
    ],
  },
  canal: {
    vintage: '2020',
    sources: ['rexecode-flaaen-pierce-feds-2019-086-russ'],
    columns: [
      { key: 'canal', header: 'Canal', type: 'text', headerNumeric: false },
      {
        key: 'effet-sur-l-emploi-manufacturier',
        header: 'Effet sur l\'emploi manufacturier',
        type: 'number',
        headerNumeric: true,
      },
    ],
    rows: [
      {
        cells: [
          { t: 'Protection à l\'importation (effet recherché)' },
          { v: 0.3, d: 1, u: '%', sign: true },
        ],
      },
      {
        cells: [
          { t: 'Hausse du coût des intrants' },
          { v: -1.1, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Représailles commerciales étrangères' },
          { v: -0.7, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Effet net' },
          { v: -1.4, d: 1, u: '%' },
        ],
        total: true,
      },
    ],
  },
  'impots-de-production-en-france-perimetre-dgfip': {
    vintage: '2023',
    sources: [
      'dgfip-dgfip-statistiques-n-35-mai-2025-don', 'eurostat-nasa-10-nf-tr-2',
      'eurostat-nrg-pc-205', 'eurostat-nama-10-lp-ulc-4',
      'insee-insee-parts-de-marche-dans-les-export',
    ],
    columns: [
      {
        key: 'impots-de-production-en-france-perimetre-dgfip',
        header: 'Impôts de production en France, périmètre DGFiP',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'assiette-reelle', header: 'Assiette réelle', type: 'text', headerNumeric: false },
      { key: '2019', header: '2019', type: 'number', headerNumeric: true },
      { key: '2023', header: '2023', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Taxe foncière bâtie, part entreprises' },
          { t: 'Valeur locative des locaux' },
          { v: 16.3, d: 1 },
          { v: 17.3, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Taxe sur les salaires' },
          { t: 'Masse salariale des secteurs non assujettis à la TVA' },
          { v: 13.8, d: 1 },
          { v: 16.6, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Versement mobilité' },
          { t: 'Masse salariale (11 salariés et plus)' },
          { v: 9.2, d: 1 },
          { v: 11.3, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'CFE' },
          { t: 'Valeur locative foncière' },
          { v: 8.6, d: 1 },
          { v: 8.2, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'C3S' },
          { t: '<b>Chiffre d\'affaires</b>' },
          { v: 3.9, d: 1 },
          { v: 4.8, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'CVAE' },
          { t: 'Valeur ajoutée' },
          { v: 14, d: 1 },
          { t: '<b>4,0</b> <i>(−71,8 %)</i>' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'IFER' },
          { t: 'Équipements de réseau' },
          { v: 1.7, d: 1 },
          { v: 2, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'TASCOM' },
          { t: 'Surface commerciale' },
          { v: 1, d: 1 },
          { v: 1.2, d: 1 },
        ],
      },
      {
        cells: [
          { t: '<b>Total, périmètre DGFiP</b>' },
          null,
          null,
          { v: 92.7, d: 1, u: 'Md€', strong: true },
        ],
        total: true,
      },
    ],
  },
  'impots-de-production-en-de-la-valeur-ajoutee-par-secteur': {
    vintage: '2023',
    sources: [
      'dgfip-dgfip-statistiques-n-35-mai-2025-don', 'eurostat-nasa-10-nf-tr-2',
      'eurostat-nrg-pc-205', 'eurostat-nama-10-lp-ulc-4',
      'insee-insee-parts-de-marche-dans-les-export',
    ],
    columns: [
      {
        key: 'impots-de-production-en-de-la-valeur-ajoutee-par-secteur',
        header: 'Impôts de production en % de la valeur ajoutée, par secteur',
        type: 'text',
        headerNumeric: false,
      },
      { key: '2019', header: '2019', type: 'number', headerNumeric: true },
      { key: '2023', header: '2023', type: 'number', headerNumeric: true },
      { key: 'ecart', header: 'Écart', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: '<b>Industrie</b>' },
          { v: 5.6, d: 1, u: '%' },
          { v: 4.2, d: 1, u: '%', strong: true },
          { v: -1.4, d: 1, u: 'pt' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Commerce, transport, hébergement-restauration' },
          { v: 4.6, d: 1, u: '%' },
          { v: 3.5, d: 1, u: '%' },
          { v: -1.1, d: 1, u: 'pt' },
        ],
      },
      {
        cells: [
          { t: 'Services spécialisés' },
          { v: 4.4, d: 1, u: '%' },
          { v: 3.4, d: 1, u: '%' },
          { v: -1, d: 1, u: 'pt' },
        ],
      },
      {
        cells: [
          { t: 'Finance et assurance' },
          { v: 3.1, d: 1, u: '%' },
          { v: 1.7, d: 1, u: '%' },
          { v: -1.4, d: 1, u: 'pt' },
        ],
      },
      {
        cells: [
          { t: '<b>Immobilier</b>' },
          { v: 15.5, d: 1, u: '%' },
          { v: 17.5, d: 1, u: '%', strong: true },
          { v: 2, d: 1, u: 'pt', sign: true, strong: true },
        ],
        emphasis: true,
      },
    ],
  },
  'societes-non-financieres-2024': {
    vintage: '2024',
    sources: [
      'dgfip-dgfip-statistiques-n-35-mai-2025-don', 'eurostat-nasa-10-nf-tr-2',
      'eurostat-nrg-pc-205', 'eurostat-nama-10-lp-ulc-4',
      'insee-insee-parts-de-marche-dans-les-export',
    ],
    columns: [
      {
        key: 'societes-non-financieres-2024',
        header: 'Sociétés non financières, 2024',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'france', header: 'France', type: 'number', headerNumeric: true },
      { key: 'allemagne', header: 'Allemagne', type: 'number', headerNumeric: true },
      { key: 'pays-bas', header: 'Pays-Bas', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: '<b>Impôts de production versés</b>' },
          { v: 76.3, d: 1, u: 'Md€', strong: true },
          { v: 28.9, d: 1, u: 'Md€', strong: true },
          { v: 8.5, d: 1, u: 'Md€' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>Impôts sur les bénéfices versés</b>' },
          { v: 65.2, d: 1, u: 'Md€', strong: true },
          { v: 109.5, d: 1, u: 'Md€', strong: true },
          null,
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Impôts de production / valeur ajoutée' },
          { v: 5.04, d: 2, u: '%' },
          { v: 1.14, d: 2, u: '%' },
          { v: 1.3, d: 2, u: '%' },
        ],
        separator: true,
      },
      {
        cells: [
          { t: 'Impôts sur les bénéfices / valeur ajoutée' },
          { v: 4.31, d: 2, u: '%' },
          { v: 4.33, d: 2, u: '%' },
          null,
        ],
      },
      {
        cells: [
          { t: 'Impôts de production / EBE' },
          { v: 15.7, d: 1, u: '%', strong: true },
          { v: 3.1, d: 1, u: '%', strong: true },
          { v: 3.1, d: 1, u: '%' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Impôts sur les bénéfices / EBE' },
          { v: 13.4, d: 1, u: '%' },
          { v: 11.7, d: 1, u: '%' },
          null,
        ],
      },
      {
        cells: [
          { t: '<b>Taux de marge (EBE / valeur ajoutée)</b>' },
          { v: 32.2, d: 1, u: '%', strong: true },
          { v: 37.2, d: 1, u: '%', strong: true },
          { v: 41.9, d: 1, u: '%' },
        ],
        total: true,
      },
    ],
  },
  'du-pib': {
    vintage: '2026',
    sources: [
      'dgfip-dgfip-statistiques-n-35-mai-2025-don', 'eurostat-nasa-10-nf-tr-2',
      'eurostat-nrg-pc-205', 'eurostat-nama-10-lp-ulc-4',
      'insee-insee-parts-de-marche-dans-les-export',
    ],
    columns: [
      { key: 'du-pib', header: '% du PIB', type: 'text', headerNumeric: false },
      { key: 'france', header: 'France', type: 'number', headerNumeric: true },
      { key: 'allemagne', header: 'Allemagne', type: 'number', headerNumeric: true },
      { key: 'pays-bas', header: 'Pays-Bas', type: 'number', headerNumeric: true },
      { key: 'royaume-uni', header: 'Royaume-Uni', type: 'number', headerNumeric: true },
      { key: 'etats-unis', header: 'États-Unis', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Impôts de production (D29, tous secteurs), 2024' },
          { v: 4.4, d: 1, u: '%', strong: true },
          { v: 1, d: 1, u: '%' },
          { v: 1.2, d: 1, u: '%' },
          { t: '≈ 1,0 % <i>(business rates)</i>' },
          { t: 'n.d.' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Cotisations employeurs (D611), 2024' },
          { v: 10, d: 1, u: '%', strong: true },
          { v: 7, d: 1, u: '%' },
          { v: 5.2, d: 1, u: '%' },
          { t: 'n.d. <i>(NIC total 6,7 %)</i>' },
          { t: 'n.d. <i>(payroll total 5,9 %)</i>' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Impôt sur les sociétés, recettes' },
          null,
          null,
          null,
          { v: 3.4, d: 1, u: '%' },
          { t: '1,8 % <i>(fédéral)</i>' },
        ],
      },
      {
        cells: [
          { t: 'Prix de l\'électricité industrielle, €/MWh, S1 2025' },
          { v: 129.6, d: 1, strong: true },
          { v: 193.2, d: 1 },
          { v: 187.8, d: 1 },
          { t: 'n.d.' },
          { t: '≈ moitié du niveau UE' },
        ],
        total: true,
      },
    ],
  },
  'cout-horaire-du-travail-industrie-manufacturiere-2024': {
    vintage: '2024',
    sources: [
      'dgfip-dgfip-statistiques-n-35-mai-2025-don', 'eurostat-nasa-10-nf-tr-2',
      'eurostat-nrg-pc-205', 'eurostat-nama-10-lp-ulc-4',
      'insee-insee-parts-de-marche-dans-les-export',
    ],
    columns: [
      {
        key: 'cout-horaire-du-travail-industrie-manufacturiere-2024',
        header: 'Coût horaire du travail, industrie manufacturière, 2024',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'heure', header: '€ / heure', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Allemagne' },
          { v: 48.5, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Pays-Bas' },
          { v: 47.3, d: 1 },
        ],
      },
      {
        cells: [
          { t: '<b>France</b>' },
          { v: 45.7, d: 1, strong: true },
        ],
        emphasis: true,
      },
    ],
  },
  'part-dans-les-exportations-mondiales-de-marchandises': {
    vintage: '2025',
    sources: [
      'dgfip-dgfip-statistiques-n-35-mai-2025-don', 'eurostat-nasa-10-nf-tr-2',
      'eurostat-nrg-pc-205', 'eurostat-nama-10-lp-ulc-4',
      'insee-insee-parts-de-marche-dans-les-export',
    ],
    columns: [
      {
        key: 'part-dans-les-exportations-mondiales-de-marchandises',
        header: 'Part dans les exportations mondiales de marchandises',
        type: 'text',
        headerNumeric: false,
      },
      { key: '2014', header: '2014', type: 'number', headerNumeric: true },
      { key: '2025', header: '2025', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Chine' },
          { v: 12.3, d: 1, u: '%' },
          { v: 14.4, d: 1, u: '%', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'États-Unis' },
          null,
          { v: 8.3, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 7.9, d: 1, u: '%' },
          { v: 6.7, d: 1, u: '%', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Italie' },
          null,
          { v: 2.8, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Japon' },
          null,
          { v: 2.8, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: '<b>France</b>' },
          null,
          { v: 2.6, d: 1, u: '%', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Royaume-Uni' },
          null,
          { v: 2.1, d: 1, u: '%' },
        ],
      },
    ],
  },
  mesure: {
    vintage: '2026',
    sources: [
      'dgfip-dgfip-statistiques-n-35-mai-2025-don', 'eurostat-nasa-10-nf-tr-2',
      'eurostat-nrg-pc-205', 'eurostat-nama-10-lp-ulc-4',
      'insee-insee-parts-de-marche-dans-les-export',
    ],
    columns: [
      { key: 'mesure', header: 'Mesure', type: 'text', headerNumeric: false },
      { key: 'cout', header: 'Coût', type: 'number', headerNumeric: true },
      {
        key: 'evaluation-d-impact',
        header: 'Évaluation d\'impact',
        type: 'text',
        headerNumeric: false,
      },
    ],
    rows: [
      {
        cells: [
          { t: '<b>CICE</b> (2013-2018), transformé en allègement pérenne en 2019' },
          { v: 18, d: 0, u: 'Md€/an', approx: true },
          {
            t: '≈ <b>100 000 emplois</b> (micro-économétrique TEPP) à 200 000-400 000 (macro-sectoriel OFCE). <b>≈ 180 000 € par emploi.</b> Effet positif substantiel sur les <b>salaires</b> dans les services. <b>Investissement : non concluant. R&D : non concluant.</b>',
          },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>Baisse de l\'IS</b> de 33,3 % à 25 % (2017-2022)' },
          { t: 'non chiffré ex post' },
          {
            t: '<b>Aucune évaluation causale ex post</b> de l\'effet sur l\'investissement, l\'emploi ou la localisation',
          },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>Baisse des impôts de production</b> (2021)' },
          { v: 22.3, d: 1, u: 'Md€ bruts sur 2021-2022, ≈ 20 Md€ nets après retour d\'IS' },
          {
            t: '« Les analyses statistiques menées jusqu\'ici <b>ne permettent pas d\'identifier l\'effet causal</b> de la réforme sur l\'activité économique » — France Stratégie, janvier 2024',
          },
        ],
        emphasis: true,
      },
    ],
  },
  chine: {
    vintage: '2026',
    sources: [
      'dgfip-dgfip-statistiques-n-35-mai-2025-don', 'eurostat-nasa-10-nf-tr-2',
      'eurostat-nrg-pc-205', 'eurostat-nama-10-lp-ulc-4',
      'insee-insee-parts-de-marche-dans-les-export',
    ],
    columns: [
      { key: 'chine', header: 'Chine', type: 'text', headerNumeric: false },
      { key: 'valeur', header: 'Valeur', type: 'number', headerNumeric: true },
      { key: 'statut', header: 'Statut', type: 'text', headerNumeric: false },
    ],
    rows: [
      {
        cells: [
          { t: 'Taux légal d\'IS' },
          { v: 25, d: 0, u: '%' },
          {
            t: 'Mesuré — mais 15 % pour la haute technologie, 10 % pour les semi-conducteurs encouragés, 5 % pour les petites entreprises, 15 % dans plusieurs régimes régionaux. <b>Aucun impôt local sur les sociétés.</b>',
          },
        ],
      },
      {
        cells: [
          { t: 'Cotisations employeurs, taux nominal' },
          { v: 32, d: 0, u: 'à 36 %', approx: true },
          { t: 'Source de praticien, non statistique officielle' },
        ],
      },
      {
        cells: [
          { t: '<b>Soutien de politique industrielle, 2019</b>' },
          { v: 1.73, d: 2, u: '% du PIB', strong: true },
          {
            t: 'CSIS (financé par le Département d\'État américain, <b>partie prenante d\'un différend commercial</b>) ; confirmé indépendamment par le Kiel Institute — 221 Md€, même ratio',
          },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'France, même mesure' },
          { v: 0.55, d: 2, u: '%' },
          { t: 'Allemagne 0,41 %, États-Unis 0,39 %, Corée du Sud 0,67 %' },
        ],
      },
      {
        cells: [
          { t: 'Part de la Chine dans la production manufacturière mondiale' },
          { v: 28, d: 0, u: '% en 2023' },
          { t: 'Contre moins de 9 % en 2004' },
        ],
        total: true,
      },
    ],
  },
} satisfies Tables

export const series = {
  'couts-salariaux-unitaires-nominaux-france-et-allemagne': {
    svg: {
      viewBox: '0 0 720 330',
      titleId: 'culc-t',
      title: 'Coûts salariaux unitaires',
      preserveAspectRatio: 'xMidYMid meet',
    },
    title: 'Coûts salariaux unitaires nominaux, France et Allemagne',
    subtitle: 'Base 100 en 2000. Au-dessus de l\'autre courbe = perte de compétitivité relative.',
    caption: '<b>Trois périodes.</b> De 2000 à 2011, l\'écart se creuse au détriment de la France, jusqu\'à <b>+14 points en 2007</b> — c\'est l\'effet des réformes Hartz et de la modération salariale allemande, le socle du récit sur la compétitivité perdue. De 2013 à 2019, l\'écart se referme presque entièrement. Et <b>depuis 2023, il s\'inverse</b> : les coûts salariaux unitaires allemands progressent plus vite, l\'écart atteignant −11,5 points en faveur de la France en 2025. Sur 2000-2025 : +55 % en France contre +67 % en Allemagne. <em>Source : Eurostat nama_10_lp_ulc.</em>',
    sources: ['eurostat-nama-10-lp-ulc-3'],
    vintage: '2000',
    legend: [
      { color: 's1', label: 'France' },
      { color: 's5', label: 'Allemagne' },
    ],
    type: 'line',
    layout: {
      kind: 'line',
      tickLabelX: 43,
      tickLabelDy: 4,
      axisLabel: { x: 43, y: 14, text: 'base 100 en 2000', anchor: 'end' },
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
    y: { min: 100, max: 160, ticks: [100, 120, 140, 160], label: 'base 100 en 2000' },
    series: [
      {
        key: 's5',
        color: 's5',
        label: 'Allemagne',
        values: [
          100, 100, 101.109, 102.394, 102.015, 101.314, 99.416, 99.212, 102.015, 108.613, 107.504,
          107.912, 111.62, 114.219, 116.204, 118.599, 120.321, 122.015, 126.015, 130.102, 135.095,
          134.394, 139.504, 150.511, 159.212, 166.599,
        ],
      },
      {
        key: 's1',
        color: 's1',
        label: 'France',
        values: [
          100, 102.219, 105.197, 107.212, 108, 110.015, 111.62, 113.109, 116.204, 120, 121.109,
          122.219, 125.197, 126.92, 128, 128.409, 129.606, 131.007, 132.117, 131.007, 136.496,
          137.518, 143.708, 149.314, 152.701, 155.095,
        ],
      },
    ],
    frame: { width: 720, height: 330, left: 52, right: 602, top: 73.39999999999999, bottom: 278.9 },
  },
  'impots-de-production-des-societes-non-financieres': {
    raw: true,
    title: 'Impôts de production des sociétés non financières',
    subtitle: '2024, rapportés à la valeur ajoutée puis à l\'excédent brut d\'exploitation.',
    caption: '<b>15,7 % de l\'excédent brut d\'exploitation en France, contre 3,1 % en Allemagne et aux Pays-Bas.</b> C\'est le seul écart véritablement massif du dossier fiscal, et il porte sur une charge <b>due même à perte</b>.',
    legend: [
      { color: 's4', label: '% de la valeur ajoutée' },
      { color: 's1', label: '% de l\'excédent brut d\'exploitation' },
    ],
    svg: '<svg viewBox="0 0 720 200" class="cv" role="img" aria-labelledby="cprodva-t">\n<title id="cprodva-t">% de la valeur ajoutée, puis % de l\'EBE — 2024</title>\n<line class="grid" x1="150.0" y1="16" x2="150.0" y2="152"></line>\n<text class="ax" x="150.0" y="174" text-anchor="middle">0</text>\n<line class="grid" x1="297.2" y1="16" x2="297.2" y2="152"></line>\n<text class="ax" x="297.2" y="174" text-anchor="middle">5</text>\n<line class="grid" x1="444.4" y1="16" x2="444.4" y2="152"></line>\n<text class="ax" x="444.4" y="174" text-anchor="middle">10</text>\n<line class="grid" x1="591.7" y1="16" x2="591.7" y2="152"></line>\n<text class="ax" x="591.7" y="174" text-anchor="middle">15</text>\n<text class="ax al" x="136" y="43">France</text>\n<rect class="bar s4f" x="150" y="24" width="148.4" height="13" rx="3"></rect>\n<rect class="bar s1f" x="150" y="41" width="462.3" height="13" rx="3"></rect>\n<text class="lbl mut" x="306.4" y="35">5,04</text>\n<text class="lbl s1t" x="620.3" y="52">15,70</text>\n<text class="ax al" x="136" y="89">Pays-Bas</text>\n<rect class="bar s4f" x="150" y="70" width="38.3" height="13" rx="3"></rect>\n<rect class="bar s1f" x="150" y="87" width="91.3" height="13" rx="3"></rect>\n<text class="lbl mut" x="196.3" y="81">1,30</text>\n<text class="lbl s1t" x="249.3" y="98">3,10</text>\n<text class="ax al" x="136" y="135">Allemagne</text>\n<rect class="bar s4f" x="150" y="116" width="33.6" height="13" rx="3"></rect>\n<rect class="bar s1f" x="150" y="133" width="91.3" height="13" rx="3"></rect>\n<text class="lbl mut" x="191.6" y="127">1,14</text>\n<text class="lbl s1t" x="249.3" y="144">3,10</text>\n</svg>',
    sources: ['eurostat-nasa-10-nf-tr-2'],
    vintage: 'à confirmer',
    values: {
      svg: {
        viewBox: '0 0 720 200',
        titleId: 'cprodva-t',
        title: '% de la valeur ajoutée, puis % de l\'EBE — 2024',
      },
      title: 'Impôts de production des sociétés non financières',
      subtitle: '2024, rapportés à la valeur ajoutée puis à l\'excédent brut d\'exploitation.',
      caption: '<b>15,7 % de l\'excédent brut d\'exploitation en France, contre 3,1 % en Allemagne et aux Pays-Bas.</b> C\'est le seul écart véritablement massif du dossier fiscal, et il porte sur une charge <b>due même à perte</b>.',
      sources: ['eurostat-nasa-10-nf-tr-2'],
      vintage: '2024',
      legend: [
        { color: 's4', label: '% de la valeur ajoutée' },
        { color: 's1', label: '% de l\'excédent brut d\'exploitation' },
      ],
      type: 'bar',
      layout: {
        kind: 'bar',
        gridTop: 16,
        gridBottom: 152,
        tickLabelY: 174,
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
      x: ['France', 'Pays-Bas', 'Allemagne'],
      y: { min: 0, max: 15, ticks: [0, 5, 10, 15] },
      series: [
        {
          key: 'b1',
          color: 's4',
          label: '% de la valeur ajoutée',
          values: [5.04, 1.301, 1.141],
          decimals: 2,
        },
        {
          key: 'b2',
          color: 's1',
          label: '% de l\'excédent brut d\'exploitation',
          values: [15.7, 3.101, 3.101],
          decimals: 2,
        },
      ],
      frame: { width: 720, height: 200, left: 150, right: 591.681922649921, top: 16, bottom: 152 },
    },
  },
  'prix-de-l-electricite-pour-l-industrie': {
    svg: {
      viewBox: '0 0 720 182',
      titleId: 'celec-t',
      title: 'euros par MWh, industrie, 1er semestre 2025',
    },
    title: 'Prix de l\'électricité pour l\'industrie',
    subtitle: 'Premier semestre 2025, bande de consommation 2 000 à 19 999 MWh par an, hors taxes récupérables.',
    caption: '<b>La France est 33 % moins chère que l\'Allemagne.</b> Et l\'industrie manufacturière allemande acquitte <b>6 276 M€ de taxes sur l\'énergie contre 1 148 M€ en France</b> — 5,5 fois plus en valeur absolue, pour une valeur ajoutée manufacturière environ deux fois supérieure. Le « handicap énergétique » est un handicap <b>européen</b>, pas français : l\'AIE estime que les prix pour l\'industrie électro-intensive dans l\'UE sont environ le double des prix américains et plus de 50 % supérieurs à ceux de la Chine et de l\'Inde.',
    sources: ['eurostat-nrg-pc-205'],
    vintage: '2025',
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
      valueClasses: ['lbl s2t'],
      rx: 3,
    },
    x: ['Allemagne', 'Pays-Bas', 'UE-27', 'France'],
    y: { min: 0, max: 200, ticks: [0, 100, 200] },
    series: [
      { key: 'b1', color: 's2', values: [193.214, 187.81, 163.998, 129.581], decimals: 1 },
    ],
    frame: { width: 720, height: 182, left: 130, right: 622.2005008829851, top: 16, bottom: 134 },
  },
  'cout-salarial-unitaire-nominal-ensemble-de-l-economie': {
    svg: {
      viewBox: '0 0 720 330',
      titleId: 'culc00-t',
      title: 'Coût salarial unitaire nominal',
      preserveAspectRatio: 'xMidYMid meet',
    },
    title: 'Coût salarial unitaire nominal, ensemble de l\'économie',
    subtitle: 'Base 100 en 2000. Le coût salarial unitaire incorpore la productivité par construction.',
    caption: '<b>Tout le décrochage français s\'est produit entre 2000 et 2008</b> — +15,5 % en France contre +1,2 % en Allemagne, soit 14 points d\'écart cumulé, période de la modération salariale allemande. <b>Depuis 2015 le mouvement s\'est inversé complètement</b> : +18,0 % en France contre +30,6 % en Allemagne. Sur l\'ensemble 2000-2024, <b>l\'écart est refermé</b> : +50,5 % contre +52,0 %. La France est aujourd\'hui marginalement mieux placée qu\'en 2000 par rapport à l\'Allemagne. Les Pays-Bas ont, eux, nettement dérivé (+67,9 %).',
    sources: ['eurostat-nama-10-lp-ulc-4'],
    vintage: '2000',
    type: 'line',
    layout: {
      kind: 'line',
      tickLabelX: 43,
      tickLabelDy: 4,
      axisLabel: { x: 43, y: 14, text: 'indice, base 100 en 2000', anchor: 'end' },
      axisLineY: 296,
      dotR: 4,
      endLabelDx: 8,
      endLabelDy: 4,
      xLabelY: 314,
    },
    xAxis: { min: 2000, max: 2024, ticks: [2000, 2008, 2015, 2024] },
    x: [2000, 2008, 2015, 2020, 2024],
    y: { min: 100, max: 160, ticks: [100, 120, 140, 160], label: 'indice, base 100 en 2000' },
    series: [
      { key: 's4', color: 's4', label: 'Allemagne', values: [100, 101.186, 116.394, 130.202, 152.1] },
      { key: 's1', color: 's1', label: 'France', values: [100, 115.587, 127.592, 135.208, 150.51] },
    ],
    frame: { width: 720, height: 330, left: 52, right: 602, top: 22, bottom: 274.9 },
  },
} satisfies SeriesSet

/** Fiches du chapitre, dans l'ordre : alimente le rail et la recherche. */
export const questions = [
  { id: 's5-q1', title: 'Quel poids l\'industrie pesait-elle, et pèse-t-elle ?' },
  { id: 's5-q2', title: 'Coûts du travail : la comparaison qui compte' },
  {
    id: 's5-q3',
    title: 'Pourquoi la France s\'est-elle plus désindustrialisée que l\'Allemagne ?',
  },
  {
    id: 's5-q4',
    title: 'Quelle part vient de quoi ? La décomposition, et pourquoi la question est mal posée',
  },
  { id: 's5-q5', title: 'Et l\'énergie ?' },
  { id: 's5-q6', title: 'Combien d\'usines ouvrent et ferment ?' },
  { id: 's5-q7', title: 'Pourquoi délocalise-t-on ? Les motifs invoqués' },
  { id: 's5-q8', title: 'Qu\'est-ce qu\'un impôt de production, et la France en a-t-elle trop ?' },
  { id: 's5-q9', title: 'Mais ce qui compte, c\'est la charge fiscale totale sur l\'industrie' },
  { id: 's5-q10', title: 'Baisser les impôts de production réindustrialiserait-il la France ?' },
  {
    id: 's5-q11',
    title: 'Un dossier d\'investissement type : où implanter une usine, France, Allemagne, États-Unis ou Chine ?',
  },
  {
    id: 's5-q12',
    title: 'Le protectionnisme marcherait-il ? Ce que dit vraiment l\'étude américaine',
  },
  {
    id: 's5-q13',
    title: 'Comment sont imposées les entreprises françaises, et avec quel effet réel sur la compétitivité',
  },
] satisfies readonly { id: string; title: string }[]

/**
 * Sources citées dans le texte du chapitre, en plus de celles portées par les
 * tableaux et les figures. La bibliographie les recense aussi : une source
 * citée en prose reste une source du dossier.
 */
export const citedSources = [
  'dg-tresor-l-demmou-dg-tresor-document-de-travai',
  'dgfip-dgfip-statistiques-n-35-mai-2025-don',
  'eurostat-eurostat-lc-lci-lev-cout-horaire-et-na',
  'eurostat-eurostat-lc-lci-lev-nrg-pc-205-nrg-pc',
  'eurostat-eurostat-nasa-10-nf-tr-secteur-s11-dir',
  'eurostat-eurostat-nrg-pc-205-electricite-bande', 'eurostat-gov-10a-taxag',
  'eurostat-nama-10-a10', 'insee-insee-parts-de-marche-dans-les-export',
  'rexecode-flaaen-pierce-feds-2019-086-russ',
  'trendeo-trendeo-observatoire-de-l-investissemen',
] satisfies readonly SourceId[]
