// Généré par `npm run extract` depuis Temp/chiffres2027 (3).html.
// Toutes les données chiffrées du chapitre vivent ici, chacune sous sa source
// et son millésime. Voir CLAUDE.md, règles 2 à 4.
import type { ChapterMeta, SeriesSet, SourceId, Tables } from '@/lib/types'

export const meta = {
  slug: 'commerce-exterieur',
  num: 'Thème 06',
  title: 'Commerce extérieur et flux financiers',
  shortTitle: 'Commerce extérieur et flux financiers',
  note: 'La France a un déficit de biens de 61 Md€ et un solde courant de seulement −9 Md€. Comprendre cet écart de 52 milliards, c\'est comprendre l\'essentiel du sujet.',
  status: 'complete',
  updated: '2026-08',
  legacyAnchor: 's6',
} satisfies ChapterMeta

export const tables = {
  '2023': {
    vintage: '2023',
    sources: ['insee-banque-de-france-la-balance-des-paiemen'],
    columns: [
      { key: '2023', header: '2023', type: 'text', headerNumeric: false },
      {
        key: 'groupes-francais-a-l-etranger',
        header: 'Groupes français à l\'étranger',
        type: 'number',
        headerNumeric: true,
      },
      {
        key: 'groupes-etrangers-en-france',
        header: 'Groupes étrangers en France',
        type: 'number',
        headerNumeric: true,
      },
    ],
    rows: [
      {
        cells: [
          { t: 'Salariés' },
          { v: 7, d: 1, u: 'millions', strong: true, after: '— 56 % de leurs effectifs' },
          { v: 2.3, d: 1, u: 'millions', strong: true, after: '— 13 % de l\'emploi marchand' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Entreprises concernées' },
          { v: 6800, d: 0, u: 'groupes, 55 200 filiales dans 190 pays' },
          { v: 19100, d: 0, u: 'entreprises, 1 % du total' },
        ],
      },
      {
        cells: [
          { t: 'Chiffre d\'affaires' },
          { v: 1708, d: 0, u: 'Md€ — 50 % du consolidé' },
          { v: 21, d: 0, u: '% du chiffre d\'affaires français' },
        ],
      },
      {
        cells: [
          { t: 'Part de la valeur ajoutée française' },
          null,
          { v: 17, d: 0, u: '%' },
        ],
      },
    ],
  },
  md: {
    vintage: '2025',
    sources: ['eurostat-eurostat-bop-c6-a-confirme-par-la-banqu'],
    columns: [
      { key: 'md', header: 'Md€', type: 'text', headerNumeric: false },
      { key: 'biens', header: 'Biens', type: 'number', headerNumeric: true },
      { key: 'services', header: 'Services', type: 'number', headerNumeric: true },
      { key: 'rev-primaires', header: 'Rev. primaires', type: 'number', headerNumeric: true },
      { key: 'rev-secondaires', header: 'Rev. secondaires', type: 'number', headerNumeric: true },
      { key: 'solde-courant', header: 'Solde courant', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { v: 2019, d: 0, g: false },
          { v: -36.5, d: 1 },
          { v: 22.8, d: 1, sign: true },
          { v: 73.7, d: 1, sign: true },
          { v: -45.4, d: 1 },
          { v: 14.5, d: 1, sign: true },
        ],
      },
      {
        cells: [
          { v: 2021, d: 0, g: false },
          { v: -65.4, d: 1 },
          { v: 40, d: 1, sign: true },
          { v: 80.1, d: 1, sign: true },
          { v: -47.7, d: 1 },
          { v: 6.9, d: 1, sign: true },
        ],
      },
      {
        cells: [
          { v: 2022, d: 0, g: false },
          { v: -134.9, d: 1 },
          { v: 68.1, d: 1, sign: true },
          { v: 79.7, d: 1, sign: true },
          { v: -50.6, d: 1 },
          { v: -37.7, d: 1 },
        ],
      },
      {
        cells: [
          { v: 2023, d: 0, g: false },
          { v: -79.5, d: 1 },
          { v: 40.5, d: 1, sign: true },
          { v: 61.7, d: 1, sign: true },
          { v: -49, d: 1 },
          { v: -26.3, d: 1 },
        ],
      },
      {
        cells: [
          { v: 2024, d: 0, g: false },
          { v: -61.4, d: 1 },
          { v: 50.8, d: 1, sign: true },
          { v: 49, d: 1, sign: true },
          { v: -47.5, d: 1 },
          { v: -9.3, d: 1 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { v: 2025, d: 0, g: false },
          { v: -58, d: 1 },
          { v: 45.4, d: 1, sign: true },
          { v: 51, d: 1, sign: true },
          { v: -50, d: 1 },
          { v: -11.6, d: 1 },
        ],
      },
    ],
  },
  'poste-voyages-md': {
    vintage: 'à confirmer',
    sources: ['eurostat-eurostat-bop-its6-det-fonds-monetaire'],
    columns: [
      {
        key: 'poste-voyages-md',
        header: 'Poste « voyages », Md€',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'recettes', header: 'Recettes', type: 'number', headerNumeric: true },
      { key: 'depenses', header: 'Dépenses', type: 'number', headerNumeric: true },
      { key: 'solde', header: 'Solde', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { v: 2019, d: 0, g: false },
          { v: 56.7, d: 1 },
          { v: 45.1, d: 1 },
          { v: 11.6, d: 1, sign: true },
        ],
      },
      {
        cells: [
          { v: 2020, d: 0, g: false },
          { v: 28.5, d: 1 },
          { v: 25.2, d: 1 },
          { v: 3.4, d: 1, sign: true },
        ],
      },
      {
        cells: [
          { v: 2022, d: 0, g: false },
          { v: 56.7, d: 1 },
          { v: 44.2, d: 1 },
          { v: 12.5, d: 1, sign: true },
        ],
      },
      {
        cells: [
          { v: 2024, d: 0, g: false },
          { v: 71.1, d: 1 },
          { v: 55.2, d: 1 },
          { v: 15.9, d: 1, sign: true },
        ],
      },
      {
        cells: [
          { v: 2025, d: 0, g: false },
          { v: 77.5, d: 1 },
          { v: 57.4, d: 1 },
          { v: 20.1, d: 1, sign: true },
        ],
        emphasis: true,
      },
    ],
  },
  operation: {
    vintage: 'à confirmer',
    sources: ['eurostat-eurostat-bop-its6-det-fonds-monetaire'],
    columns: [
      { key: 'operation', header: 'Opération', type: 'text', headerNumeric: false },
      {
        key: 'enregistrement-pour-la-france',
        header: 'Enregistrement pour la France',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'poste', header: 'Poste', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Un Japonais dîne à Lyon' },
          { t: 'Exportation de services' },
          { t: 'Voyages' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Un Japonais achète un sac dans une boutique parisienne' },
          { t: 'Exportation de <b>services</b>, pas de biens' },
          { t: 'Voyages' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Le même sac expédié par colis au Japon' },
          { t: 'Exportation de <b>biens</b>' },
          { t: 'Marchandises' },
        ],
      },
      {
        cells: [
          { t: 'Un Japonais prend un vol Air France Tokyo-Paris' },
          { t: 'Exportation de services' },
          { t: '<b>Transports</b>, pas voyages' },
        ],
      },
      {
        cells: [
          { t: 'Un Français dîne à Barcelone' },
          { t: 'Importation de services' },
          { t: 'Voyages' },
        ],
      },
      {
        cells: [
          { t: 'Un touriste étranger se fait rembourser la TVA à l\'aéroport' },
          { t: 'L\'exportation reste comptée <b>hors taxe</b>' },
          { t: 'Voyages' },
        ],
      },
    ],
  },
  'mesure-du-solde-des-biens-2025': {
    vintage: '2025',
    sources: ['insee-douanes-analyse-annuelle-2025-insee'],
    columns: [
      {
        key: 'mesure-du-solde-des-biens-2025',
        header: 'Mesure du solde des biens, 2025',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'md', header: 'Md€', type: 'number', headerNumeric: true },
      {
        key: 'qui-la-publie-et-pourquoi-elle-differe',
        header: 'Qui la publie, et pourquoi elle diffère',
        type: 'text',
        headerNumeric: false,
      },
    ],
    rows: [
      {
        cells: [
          { t: 'Douanes, importations valorisées coût-assurance-fret' },
          { v: -88.9, d: 1 },
          {
            t: 'Le chiffre de la presse. Les importations incluent le fret et l\'assurance, qui sont pourtant des <em>services</em>',
          },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Douanes, tout à bord du navire' },
          { v: -69.2, d: 1 },
          { t: 'Même périmètre, valorisation homogène' },
        ],
      },
      {
        cells: [
          { t: 'Insee, révisé en mai 2026' },
          { v: -64.9, d: 1 },
          { t: 'Même définition que la ligne précédente, millésime plus récent' },
        ],
      },
      {
        cells: [
          { t: '<b>Balance des paiements</b> (Banque de France)' },
          { v: -58, d: 1, strong: true },
          { t: 'La mesure macroéconomiquement pertinente, celle qui entre dans le solde courant' },
        ],
        emphasis: true,
      },
    ],
  },
  etape: {
    vintage: '2025',
    sources: ['insee-douanes-analyse-annuelle-2025-insee'],
    columns: [
      { key: 'etape', header: 'Étape', type: 'text', headerNumeric: false },
      { key: 'md', header: 'Md€', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Solde douanier, importations coût-assurance-fret' },
          { v: -100, d: 1 },
        ],
      },
      {
        cells: [
          { t: '+ correction de valorisation des importations <em>(le fret devient un service)</em>' },
          { v: 9.4, d: 1, sign: true },
        ],
      },
      {
        cells: [
          {
            t: '+ négoce international — marchandises achetées et revendues à l\'étranger sans franchir la frontière',
          },
          { v: 16.8, d: 1, sign: true },
        ],
      },
      {
        cells: [
          { t: '− soutage et avitaillement des navires et aéronefs' },
          { v: -5.3, d: 1 },
        ],
      },
      {
        cells: [
          { t: '= solde de la balance des paiements' },
          { v: -60, d: 1 },
        ],
        total: true,
      },
    ],
  },
  'md-2': {
    vintage: '2025',
    sources: ['eurostat-eurostat-ext-lt-intratrd-base-douaniere'],
    columns: [
      { key: 'md', header: 'Md€', type: 'text', headerNumeric: false },
      { key: 'solde-energie', header: 'Solde énergie', type: 'number', headerNumeric: true },
      {
        key: 'solde-des-biens-douanes',
        header: 'Solde des biens (douanes)',
        type: 'number',
        headerNumeric: true,
      },
      { key: 'part-de-l-energie', header: 'Part de l\'énergie', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { v: 2019, d: 0, g: false },
          { v: -43.3, d: 1 },
          { v: -74.7, d: 1 },
          { v: 58, d: 0, u: '%' },
        ],
      },
      {
        cells: [
          { v: 2021, d: 0, g: false },
          { v: -44.5, d: 1 },
          { v: -110.3, d: 1 },
          { v: 40, d: 0, u: '%' },
        ],
      },
      {
        cells: [
          { v: 2022, d: 0, g: false },
          { v: -115.6, d: 1 },
          { v: -193.1, d: 1 },
          { v: 60, d: 0, u: '%' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { v: 2023, d: 0, g: false },
          { v: -67.9, d: 1 },
          { v: -126.8, d: 1 },
          { v: 54, d: 0, u: '%' },
        ],
      },
      {
        cells: [
          { v: 2024, d: 0, g: false },
          { v: -54.8, d: 1 },
          { v: -102.6, d: 1 },
          { v: 53, d: 0, u: '%' },
        ],
      },
      {
        cells: [
          { v: 2025, d: 0, g: false },
          { v: -44.2, d: 1 },
          { v: -88.9, d: 1 },
          { v: 50, d: 0, u: '%' },
        ],
      },
    ],
  },
  'secteur-2025-base-douaniere': {
    vintage: '2025',
    sources: ['insee-douanes-analyse-annuelle-2025-et-les-op'],
    columns: [
      {
        key: 'secteur-2025-base-douaniere',
        header: 'Secteur, 2025 (base douanière)',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'exportations-md', header: 'Exportations Md€', type: 'number', headerNumeric: true },
      { key: 'importations-md', header: 'Importations Md€', type: 'number', headerNumeric: true },
      { key: 'solde-md', header: 'Solde Md€', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Aéronautique et spatial' },
          { v: 67.9, d: 1 },
          { v: 35.2, d: 1 },
          { v: 32.7, d: 1, sign: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Matériel militaire' },
          null,
          null,
          { v: 6.7, d: 1, sign: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Pharmacie' },
          { v: 41, d: 1 },
          { v: 38.4, d: 1 },
          { v: 2.6, d: 1, sign: true },
        ],
      },
      {
        cells: [
          { t: 'Agroalimentaire' },
          { v: 64.9, d: 1 },
          { v: 64.4, d: 1 },
          { v: 0.5, d: 1, sign: true },
        ],
      },
      {
        cells: [
          { t: 'Chimie' },
          { v: 48.3, d: 1 },
          { v: 47.9, d: 1 },
          { v: 0.4, d: 1, sign: true },
        ],
      },
      {
        cells: [
          { t: 'Produits agricoles' },
          { v: 19.3, d: 1 },
          { v: 19.7, d: 1 },
          { v: -0.4, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Textile, habillement, cuir' },
          { v: 39.1, d: 1 },
          { v: 45.4, d: 1 },
          { v: -6.3, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Machines et équipements' },
          { v: 46.9, d: 1 },
          { v: 53.7, d: 1 },
          { v: -6.8, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Métallurgie et produits métalliques' },
          { v: 40.3, d: 1 },
          { v: 51.9, d: 1 },
          { v: -11.6, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Automobile' },
          { v: 51, d: 1 },
          { v: 70.9, d: 1 },
          { v: -19.9, d: 1 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Informatique, électronique, optique' },
          { v: 34.6, d: 1 },
          { v: 55.6, d: 1 },
          { v: -21, d: 1 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>Énergie</b>' },
          null,
          null,
          { v: -44.2, d: 1, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<em>dont électricité</em>' },
          null,
          null,
          { t: '+5,4 <em>(record)</em>' },
        ],
      },
    ],
  },
  'part-de-la-france-dans-les-exportations-mondiales-de-march': {
    vintage: '2025',
    sources: ['insee-douanes-analyse-annuelle-2025-et-les-op'],
    columns: [
      {
        key: 'part-de-la-france-dans-les-exportations-mondiales-de-march',
        header: 'Part de la France dans les exportations mondiales de marchandises',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'c2', header: '%', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { v: 2000, d: 0, g: false },
          { v: 5.1, d: 1 },
        ],
      },
      {
        cells: [
          { v: 2015, d: 0, g: false },
          { v: 3.1, d: 1 },
        ],
      },
      {
        cells: [
          { v: 2025, d: 0, g: false },
          { v: 2.6, d: 1 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<em>Pour comparaison 2025 : Chine 14,4 · États-Unis 8,3 · Allemagne 6,7</em>' },
          { t: '' },
        ],
        separator: true,
      },
    ],
  },
  'partenaire-2025': {
    vintage: '2025',
    sources: ['eurostat-ext-lt-maineu'],
    columns: [
      { key: 'partenaire-2025', header: 'Partenaire, 2025', type: 'text', headerNumeric: false },
      { key: 'exportations', header: 'Exportations', type: 'number', headerNumeric: true },
      { key: 'importations', header: 'Importations', type: 'number', headerNumeric: true },
      { key: 'solde', header: 'Solde', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Pays-Bas' },
          { v: 23.8, d: 1 },
          { v: 62.8, d: 1 },
          { v: -39, d: 1 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 80.2, d: 1 },
          { v: 108.1, d: 1 },
          { v: -27.9, d: 1 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Chine' },
          { v: 23.5, d: 1 },
          { v: 46, d: 1 },
          { v: -22.5, d: 1 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Belgique' },
          { v: 45.2, d: 1 },
          { v: 64.1, d: 1 },
          { v: -18.9, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Italie' },
          { v: 47.9, d: 1 },
          { v: 58.2, d: 1 },
          { v: -10.3, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Espagne' },
          { v: 45.2, d: 1 },
          { v: 52.7, d: 1 },
          { v: -7.5, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'États-Unis' },
          { v: 46.7, d: 1 },
          { v: 47.9, d: 1 },
          { v: -1.2, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Royaume-Uni' },
          { v: 38.2, d: 1 },
          { v: 24.9, d: 1 },
          { v: 13.4, d: 1, sign: true },
        ],
      },
      {
        cells: [
          { t: '<em>Reste du monde</em>' },
          { v: 255.4, d: 1 },
          { v: 235.4, d: 1 },
          { v: 20, d: 1, sign: true },
        ],
      },
      {
        cells: [
          { t: 'Monde' },
          { v: 606, d: 1 },
          { v: 700, d: 1 },
          { v: -94, d: 1 },
        ],
        total: true,
      },
    ],
  },
  'solde-extra-ue-md': {
    vintage: '2025',
    sources: ['eurostat-eurostat-ext-lt-maineu-extraction-aout'],
    columns: [
      { key: 'solde-extra-ue-md', header: 'Solde extra-UE, Md€', type: 'text', headerNumeric: false },
      { key: '2019', header: '2019', type: 'number', headerNumeric: true },
      { key: '2022', header: '2022', type: 'number', headerNumeric: true },
      { key: '2024', header: '2024', type: 'number', headerNumeric: true },
      { key: '2025', header: '2025', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Chine' },
          { v: -165, d: 1 },
          { v: -397.8, d: 1 },
          { v: -317.9, d: 1 },
          { v: -371.9, d: 1 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'États-Unis' },
          { v: 149.4, d: 1, sign: true },
          { v: 150.7, d: 1, sign: true },
          { v: 198.2, d: 1, sign: true },
          { v: 198, d: 1, sign: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Royaume-Uni' },
          { v: 126, d: 1, sign: true },
          { v: 112.4, d: 1, sign: true },
          { v: 178.8, d: 1, sign: true },
          { v: 185.7, d: 1, sign: true },
        ],
      },
      {
        cells: [
          { t: '<em>Reste du monde</em>' },
          null,
          null,
          { v: 74.1, d: 1, sign: true },
          { v: 102.4, d: 1, sign: true },
        ],
      },
      {
        cells: [
          { t: 'Total extra-UE' },
          { v: 191.7, d: 1, sign: true },
          { v: -432, d: 1 },
          { v: 133.1, d: 1, sign: true },
          { v: 114.2, d: 1, sign: true },
        ],
        total: true,
      },
    ],
  },
  'echanges-ue-etats-unis-2025': {
    vintage: '2025',
    sources: ['eurostat-eurostat-ext-lt-maineu-extraction-aout'],
    columns: [
      {
        key: 'echanges-ue-etats-unis-2025',
        header: 'Échanges UE — États-Unis, 2025',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'md', header: 'Md€', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Exportations UE de biens vers les États-Unis' },
          { v: 554.5, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Importations UE de biens' },
          { v: 356.7, d: 1 },
        ],
      },
      {
        cells: [
          { t: '= solde des biens' },
          { v: 197.9, d: 1, sign: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Solde des services <em>(déficit européen)</em>' },
          { v: -178, d: 0 },
        ],
      },
      {
        cells: [
          { t: '= <b>solde global biens et services</b>' },
          { v: 20, d: 0, sign: true, strong: true },
        ],
        total: true,
      },
    ],
  },
  'exposition-europeenne-aux-etats-unis': {
    vintage: '2026',
    sources: ['eurostat-eurostat-ext-lt-maineu-extraction-aout'],
    columns: [
      {
        key: 'exposition-europeenne-aux-etats-unis',
        header: 'Exposition européenne aux États-Unis',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'valeur', header: 'Valeur', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Part des exportations UE de biens allant aux États-Unis' },
          { v: 21, d: 1, u: '%' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Exportations de biens vers les États-Unis / PIB de l\'UE' },
          { v: 3, d: 1, u: '%', approx: true },
        ],
      },
      {
        cells: [
          { t: 'Exportations de biens <b>et services</b> / PIB de l\'UE' },
          { v: 4.8, d: 1, u: '%', approx: true },
        ],
      },
    ],
  },
  famille: {
    vintage: '2024',
    sources: ['douanes-douanes-analyses-annuelles-2024-et-2025'],
    columns: [
      { key: 'famille', header: 'Famille', type: 'text', headerNumeric: false },
      {
        key: 'poste-ou-elle-se-loge',
        header: 'Poste où elle se loge',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'exportations-2024', header: 'Exportations 2024', type: 'number', headerNumeric: true },
      { key: 'solde', header: 'Solde', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Parfums et cosmétiques' },
          { t: 'Chimie' },
          { v: 24.9, d: 1, u: 'Md€' },
          { v: 17.3, d: 1, u: 'Md€', sign: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Vins et spiritueux' },
          { t: 'Agroalimentaire' },
          { v: 15.6, d: 1, u: 'Md€' },
          { v: 14.3, d: 1, u: 'Md€', sign: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Maroquinerie, cuir, chaussures' },
          { t: 'Textile-cuir' },
          { v: 19.2, d: 1, u: 'Md€' },
          { v: 5.5, d: 1, u: 'Md€', sign: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Horlogerie-bijouterie' },
          { t: '« Autres produits industriels »' },
          { v: 9, d: 1, u: 'Md€' },
          { v: 1.4, d: 1, u: 'Md€', sign: true },
        ],
      },
      {
        cells: [
          { t: 'Habillement haut de gamme' },
          { t: 'Textile' },
          { t: 'non isolable' },
          null,
        ],
      },
    ],
  },
  groupe: {
    vintage: '2025',
    sources: ['douanes-douanes-analyses-annuelles-2024-et-2025'],
    columns: [
      { key: 'groupe', header: 'Groupe', type: 'text', headerNumeric: false },
      {
        key: 'ancrage-productif-en-france',
        header: 'Ancrage productif en France',
        type: 'text',
        headerNumeric: false,
      },
    ],
    rows: [
      {
        cells: [
          { t: '<b>Hermès</b>' },
          {
            t: '63 sites en France, <b>16 349 salariés français sur 26 494 (62 %)</b>, 10 % des ventes en France. Production française, ventes mondiales — <b>génère de vraies exportations françaises</b>',
          },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>L\'Oréal</b>' },
          {
            t: '11 usines, 7 centres de recherche, 15 500 salariés ; <b>un quart de la production mondiale</b> réalisé en France',
          },
        ],
      },
      {
        cells: [
          { t: '<b>LVMH</b>' },
          {
            t: '215 000 salariés dont environ <b>40 000 en France (19 %)</b> ; Louis Vuitton a 28 ateliers, dont 4 en Espagne, 3 aux États-Unis, 2 en Italie',
          },
        ],
      },
      {
        cells: [
          { t: '<b>Kering</b>' },
          {
            t: 'Activités italiennes : <b>57 % du chiffre d\'affaires consolidé</b>, 10,5 Md€ exportés <em>depuis l\'Italie</em>, 13 500 salariés sur 49 sites italiens',
          },
        ],
        emphasis: true,
      },
    ],
  },
  'solde-bilateral-des-biens-france': {
    vintage: '2025',
    sources: ['eurostat-douanes-francaises-et-eurostat-comext-s'],
    columns: [
      {
        key: 'solde-bilateral-des-biens-france',
        header: 'Solde bilatéral des biens, France',
        type: 'text',
        headerNumeric: false,
      },
      { key: '2024', header: '2024', type: 'number', headerNumeric: true },
      { key: '2025', header: '2025', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Chine' },
          { v: -47, d: 1, u: 'Md€' },
          { v: -50, d: 1, u: 'Md€', strong: true, after: '— 1ᵉʳ déficit' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: -8.7, d: 1, u: 'Md€' },
          { v: -5.7, d: 1, u: 'Md€', approx: true },
        ],
      },
      {
        cells: [
          { t: 'États-Unis' },
          { v: -5, d: 0, u: 'Md€', approx: true },
          { v: -7.4, d: 1, u: 'Md€' },
        ],
      },
      {
        cells: [
          { t: 'Italie' },
          null,
          { v: -5.8, d: 1, u: 'Md€' },
        ],
      },
      {
        cells: [
          { t: 'Pays-Bas' },
          null,
          { v: -5.4, d: 1, u: 'Md€' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Belgique' },
          { v: -7.2, d: 1, u: 'Md€' },
          { v: 0.3, d: 1, u: 'Md€', sign: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Espagne' },
          { v: -3.3, d: 1, u: 'Md€' },
          { v: -0.1, d: 1, u: 'Md€', approx: true },
        ],
      },
      {
        cells: [
          { t: 'Royaume-Uni' },
          { v: 10.9, d: 1, u: 'Md€', sign: true },
          { v: 13.7, d: 1, u: 'Md€', sign: true, approx: true },
        ],
      },
    ],
  },
  'france-2024': {
    vintage: '2024',
    sources: ['eurostat-eurostat-bop-its6-det-services-base-ba'],
    columns: [
      { key: 'france-2024', header: 'France, 2024', type: 'text', headerNumeric: false },
      { key: 'solde-des-biens', header: 'Solde des biens', type: 'number', headerNumeric: true },
      { key: 'solde-des-services', header: 'Solde des services', type: 'number', headerNumeric: true },
      { key: 'total-indicatif', header: 'Total indicatif', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: '<b>États-Unis</b>' },
          { v: -5, d: 0, u: 'Md€', approx: true },
          { v: 17.2, d: 1, u: 'Md€', sign: true, strong: true },
          { v: 12, d: 0, u: 'Md€', sign: true, approx: true, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>Royaume-Uni</b>' },
          { v: 10.9, d: 1, u: 'Md€', sign: true },
          { v: 8.8, d: 1, u: 'Md€', sign: true, strong: true },
          { v: 19.7, d: 1, u: 'Md€', sign: true, approx: true, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Belgique' },
          { v: -7.2, d: 1, u: 'Md€' },
          { v: 8.8, d: 1, u: 'Md€', sign: true },
          { v: 1.6, d: 1, u: 'Md€', sign: true, approx: true },
        ],
      },
      {
        cells: [
          { t: 'Suisse' },
          null,
          { v: 5.4, d: 1, u: 'Md€', sign: true },
          null,
        ],
      },
      {
        cells: [
          { t: '<b>Chine</b>' },
          { v: -47, d: 1, u: 'Md€' },
          { v: 6.2, d: 1, u: 'Md€', sign: true },
          { v: -40.8, d: 1, u: 'Md€', approx: true, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: -8.7, d: 1, u: 'Md€' },
          { v: 2.7, d: 1, u: 'Md€', sign: true },
          { v: -6, d: 1, u: 'Md€', approx: true },
        ],
      },
      {
        cells: [
          { t: 'Pays-Bas' },
          { t: '−5,4 Md€ <em>(2025)</em>' },
          { v: 2.2, d: 1, u: 'Md€', sign: true },
          { v: -3.2, d: 1, u: 'Md€', approx: true },
        ],
      },
      {
        cells: [
          { t: 'Italie' },
          { t: '−5,8 Md€ <em>(2025)</em>' },
          { v: 0.1, d: 1, u: 'Md€', sign: true },
          { v: -5.8, d: 1, u: 'Md€', approx: true },
        ],
      },
      {
        cells: [
          { t: 'Espagne' },
          { v: -3.3, d: 1, u: 'Md€' },
          { v: -1.9, d: 1, u: 'Md€' },
          { v: -5.2, d: 1, u: 'Md€', approx: true },
        ],
      },
    ],
  },
  'stock-d-investissements-directs-fin-2024': {
    vintage: '2024',
    sources: ['insee-banque-de-france-la-balance-des-paiemen'],
    columns: [
      {
        key: 'stock-d-investissements-directs-fin-2024',
        header: 'Stock d\'investissements directs, fin 2024',
        type: 'text',
        headerNumeric: false,
      },
      {
        key: 'francais-a-l-etranger',
        header: 'Français à l\'étranger',
        type: 'number',
        headerNumeric: true,
      },
      {
        key: 'etrangers-en-france',
        header: 'Étrangers en France',
        type: 'number',
        headerNumeric: true,
      },
    ],
    rows: [
      {
        cells: [
          { t: 'États-Unis' },
          { v: 240.2, d: 1, u: 'Md€' },
          { v: 57.9, d: 1, u: 'Md€' },
        ],
      },
      {
        cells: [
          { t: 'Royaume-Uni' },
          { v: 148.4, d: 1, u: 'Md€' },
          { v: 103.7, d: 1, u: 'Md€' },
        ],
      },
      {
        cells: [
          { t: 'Belgique' },
          { v: 126.4, d: 1, u: 'Md€' },
          { v: 66, d: 1, u: 'Md€' },
        ],
      },
      {
        cells: [
          { t: 'Italie' },
          { t: '86,6 Md€ <em>(3ᵉ investisseur en Italie)</em>' },
          { v: 23.9, d: 1, u: 'Md€' },
        ],
      },
      {
        cells: [
          { t: 'Chine' },
          { v: 33.7, d: 1, u: 'Md€' },
          { v: 3.7, d: 1, u: 'Md€' },
        ],
      },
      {
        cells: [
          { t: 'Pays-Bas' },
          { t: 'non publié' },
          { v: 128.3, d: 1, u: 'Md€ — 2ᵉ investisseur en France', strong: true },
        ],
        emphasis: true,
      },
    ],
  },
  'md-3': {
    vintage: '2024',
    sources: ['eurostat-eurostat-bop-fdi6-flow-bop-fdi6-pos-ti'],
    columns: [
      { key: 'md', header: 'Md€', type: 'text', headerNumeric: false },
      { key: '2021', header: '2021', type: 'number', headerNumeric: true },
      { key: '2022', header: '2022', type: 'number', headerNumeric: true },
      { key: '2023', header: '2023', type: 'number', headerNumeric: true },
      { key: '2024', header: '2024', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'IDE français à l\'étranger (flux)' },
          { v: 45.4, d: 1 },
          { v: 68.1, d: 1 },
          { v: 82.8, d: 1 },
          { v: 15, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'IDE étrangers en France (flux)' },
          { v: 27.6, d: 1 },
          { v: 78.1, d: 1 },
          { v: 34.9, d: 1 },
          { v: 25, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Stock français à l\'étranger' },
          { v: 1382, d: 0 },
          { v: 1443, d: 0 },
          { v: 1477, d: 0 },
          { v: 1499, d: 0 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Stock étranger en France' },
          { v: 836, d: 0 },
          { v: 902, d: 0 },
          { v: 928, d: 0 },
          { v: 931, d: 0 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Position nette' },
          { v: 547, d: 0, sign: true },
          { v: 541, d: 0, sign: true },
          { v: 550, d: 0, sign: true },
          { v: 568, d: 0, sign: true },
        ],
        total: true,
      },
    ],
  },
  'du-pib': {
    vintage: '2025',
    sources: ['eurostat-eurostat-bop-fdi6-flow-bop-fdi6-pos-ti'],
    columns: [
      { key: 'du-pib', header: '% du PIB', type: 'text', headerNumeric: false },
      { key: '2019', header: '2019', type: 'number', headerNumeric: true },
      { key: '2022', header: '2022', type: 'number', headerNumeric: true },
      { key: '2024', header: '2024', type: 'number', headerNumeric: true },
      { key: '2025', header: '2025', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'France' },
          { v: -28.2, d: 1 },
          { v: -27.4, d: 1 },
          { v: -24, d: 1 },
          { v: -29.6, d: 1 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 58.7, d: 1, sign: true },
          { v: 70, d: 1, sign: true },
          { v: 80.2, d: 1, sign: true },
          { v: 82.3, d: 1, sign: true },
        ],
      },
      {
        cells: [
          { t: 'Italie' },
          { v: -3.1, d: 1 },
          { v: 5.5, d: 1, sign: true },
          { v: 14.9, d: 1, sign: true },
          { v: 15.4, d: 1, sign: true },
        ],
      },
      {
        cells: [
          { t: 'Espagne' },
          { v: -72, d: 1 },
          { v: -56.2, d: 1 },
          { v: -41, d: 1 },
          { v: -44.7, d: 1 },
        ],
      },
    ],
  },
  'detenteurs-de-la-dette-negociable-de-l-etat-t2-2025': {
    vintage: '2025',
    sources: ['eurostat-eurostat-bop-fdi6-flow-bop-fdi6-pos-ti'],
    columns: [
      {
        key: 'detenteurs-de-la-dette-negociable-de-l-etat-t2-2025',
        header: 'Détenteurs de la dette négociable de l\'État, T2 2025',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'part', header: 'Part', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Non-résidents' },
          { v: 55.4, d: 1, u: '%' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Autres détenteurs français (fonds, particuliers, institutions)' },
          { v: 23.1, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Banques françaises' },
          { v: 10.3, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Assureurs français' },
          { v: 9.8, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Fonds français' },
          { v: 1.7, d: 1, u: '%' },
        ],
      },
    ],
  },
  'pays-declarant-2023': {
    vintage: '2023',
    sources: ['eurostat-eurostat-bop-fdi6-flow-bop-fdi6-pos-ti'],
    columns: [
      {
        key: 'pays-declarant-2023',
        header: 'Pays déclarant, 2023',
        type: 'text',
        headerNumeric: false,
      },
      {
        key: 'part-de-la-dette-publique-francaise',
        header: 'Part de la dette publique française',
        type: 'number',
        headerNumeric: true,
      },
    ],
    rows: [
      {
        cells: [
          { t: 'Allemagne' },
          { v: 7, d: 0, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Luxembourg' },
          { v: 7, d: 0, u: '%' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Irlande' },
          { v: 5, d: 0, u: '%' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'États-Unis' },
          { v: 4, d: 0, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Japon' },
          { v: 4, d: 0, u: '%' },
        ],
      },
    ],
  },
  'part-de-la-dette-publique-detenue-par-des-non-residents': {
    vintage: '2025',
    sources: ['eurostat-eurostat-bop-fdi6-flow-bop-fdi6-pos-ti'],
    columns: [
      {
        key: 'part-de-la-dette-publique-detenue-par-des-non-residents',
        header: 'Part de la dette publique détenue par des non-résidents',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'c2', header: '%', type: 'number', headerNumeric: true },
      { key: 'annee', header: 'Année', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Autriche' },
          { v: 67, d: 0 },
          { v: 2024, d: 0, g: false },
        ],
      },
      {
        cells: [
          { t: 'Belgique' },
          { v: 62, d: 0 },
          { v: 2024, d: 0, g: false },
        ],
      },
      {
        cells: [
          { t: '<b>France</b>' },
          { v: 53, d: 0, u: 'à 55', strong: true },
          { t: '2024-2025' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 47, d: 0 },
          { v: 2024, d: 0, g: false },
        ],
      },
      {
        cells: [
          { t: 'Espagne' },
          { v: 42, d: 0 },
          { v: 2023, d: 0, g: false },
        ],
      },
      {
        cells: [
          { t: 'Royaume-Uni' },
          { v: 32, d: 0 },
          { v: 2023, d: 0, g: false },
        ],
      },
      {
        cells: [
          { t: '<em>Moyenne des économies avancées du G20</em>' },
          { v: 30, d: 0 },
          { v: 2024, d: 0, g: false },
        ],
      },
      {
        cells: [
          { t: 'Italie' },
          { v: 27, d: 0 },
          { v: 2023, d: 0, g: false },
        ],
      },
      {
        cells: [
          { t: 'États-Unis' },
          { v: 23, d: 0 },
          { v: 2023, d: 0, g: false },
        ],
      },
      {
        cells: [
          { t: 'Japon' },
          { v: 13, d: 0 },
          { v: 2024, d: 0, g: false },
        ],
        emphasis: true,
      },
    ],
  },
} satisfies Tables

export const series = {} satisfies SeriesSet

/** Fiches du chapitre, dans l'ordre : alimente le rail et la recherche. */
export const questions = [
  { id: 's6-q1', title: 'Que contient exactement le solde des transactions courantes ?' },
  { id: 's6-q2', title: 'Quel est l\'impact du tourisme ?' },
  { id: 's6-q3', title: 'Les trois chiffres du solde des biens, réconciliés' },
  { id: 's6-q4', title: 'Pourquoi la balance commerciale s\'est-elle dégradée ?' },
  { id: 's6-q5', title: 'Que vend et qu\'achète la France, industrie par industrie ?' },
  { id: 's6-q6', title: 'Avec qui la France est-elle en déficit ?' },
  { id: 's6-q7', title: 'Et la balance commerciale de l\'Union européenne ?' },
  { id: 's6-q8', title: 'Où est le luxe dans les exportations françaises ?' },
  {
    id: 's6-q9',
    title: 'L\'effet Rotterdam : de combien le déficit avec la Chine est-il sous-estimé ?',
  },
  { id: 's6-q10', title: 'Avec les services, le signe change — notamment avec les États-Unis' },
  {
    id: 's6-q11',
    title: 'Le stock d\'investissements français à l\'étranger : de quoi parle-t-on exactement ?',
  },
  {
    id: 's6-q12',
    title: 'Les autres flux : investissements, position extérieure, détention de la dette',
  },
] satisfies readonly { id: string; title: string }[]

/**
 * Sources citées dans le texte du chapitre, en plus de celles portées par les
 * tableaux et les figures. La bibliographie les recense aussi : une source
 * citée en prose reste une source du dossier.
 */
export const citedSources = [
  'douanes-douanes-analyses-annuelles-2024-et-2025',
  'eurostat-douanes-francaises-et-eurostat-comext-s',
  'eurostat-eurostat-bop-c6-a-confirme-par-la-banqu',
  'eurostat-eurostat-bop-fdi6-flow-bop-fdi6-pos-ti',
  'eurostat-eurostat-bop-its6-det-fonds-monetaire',
  'eurostat-eurostat-bop-its6-det-services-base-ba',
  'eurostat-eurostat-ext-lt-intratrd-base-douaniere',
  'eurostat-eurostat-ext-lt-maineu-extraction-aout', 'eurostat-ext-lt-maineu',
  'insee-banque-de-france-la-balance-des-paiemen',
  'insee-douanes-analyse-annuelle-2025-et-les-op',
  'insee-douanes-analyse-annuelle-2025-insee',
] satisfies readonly SourceId[]
