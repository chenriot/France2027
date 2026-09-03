// Généré par `npm run extract` depuis Temp/chiffres2027 (3).html.
// Toutes les données chiffrées du chapitre vivent ici, chacune sous sa source
// et son millésime. Voir CLAUDE.md, règles 2 à 4.
import type { ChapterMeta, SeriesSet, SourceId, Tables } from '@/lib/types'

export const meta = {
  slug: 'securite-justice',
  num: 'Thème 12',
  title: 'Sécurité, police, justice et prisons',
  shortTitle: 'Sécurité, justice, prisons',
  note: 'Deux résultats changent la lecture habituelle : l\'écart France-Allemagne sur les homicides vient pour un tiers des outre-mer, et le vrai signal français n\'est pas l\'homicide mais la tentative d\'homicide.',
  status: 'complete',
  updated: '2026-08',
  legacyAnchor: 's12',
} satisfies ChapterMeta

export const tables = {
  pays: {
    vintage: '2023',
    sources: ['eurostat-onudc-via-banque-mondiale-serie-1990-20'],
    columns: [
      { key: 'pays', header: 'Pays', type: 'text', headerNumeric: false },
      { key: 'taux-100-000', header: 'Taux /100 000', type: 'number', headerNumeric: true },
      { key: 'nombre', header: 'Nombre', type: 'number', headerNumeric: true },
      { key: 'annee', header: 'Année', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'États-Unis' },
          { v: 5.76, d: 2 },
          { v: 19796, d: 0 },
          { v: 2023, d: 0, g: false },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'France (déf. SSMSI, France entière)' },
          { v: 1.43, d: 2 },
          { v: 975, d: 0 },
          { v: 2025, d: 0, g: false },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'France (déf. Eurostat/ICCS)' },
          { v: 1.28, d: 2 },
          { v: 882, d: 0 },
          { v: 2024, d: 0, g: false },
        ],
      },
      {
        cells: [
          { t: 'France métropolitaine seule' },
          { v: 1.23, d: 2 },
          { v: 817, d: 0 },
          { v: 2025, d: 0, g: false },
        ],
      },
      {
        cells: [
          { t: 'Royaume-Uni (Angl. + Galles)' },
          { v: 1.15, d: 2 },
          { v: 684, d: 0 },
          { v: 2021, d: 0, g: false },
        ],
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 0.83, d: 2 },
          { v: 694, d: 0 },
          { v: 2024, d: 0, g: false },
        ],
      },
      {
        cells: [
          { t: 'Espagne' },
          { v: 0.72, d: 2 },
          { v: 349, d: 0 },
          { v: 2024, d: 0, g: false },
        ],
      },
      {
        cells: [
          { t: 'Pays-Bas' },
          { v: 0.67, d: 2 },
          { v: 120, d: 0 },
          { v: 2024, d: 0, g: false },
        ],
      },
      {
        cells: [
          { t: 'Italie' },
          { v: 0.57, d: 2 },
          { v: 336, d: 0 },
          { v: 2024, d: 0, g: false },
        ],
      },
    ],
  },
  region: {
    vintage: 'à confirmer',
    sources: ['insee-ssmsi-bases-departementales-et-regional'],
    columns: [
      { key: 'region', header: 'Région', type: 'text', headerNumeric: false },
      { key: 'victimes', header: 'Victimes', type: 'number', headerNumeric: true },
      { key: 'population', header: 'Population', type: 'number', headerNumeric: true },
      { key: 'taux-100-000', header: 'Taux /100 000', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Guyane' },
          { v: 41, d: 0 },
          { v: 294000, d: 0 },
          { v: 13.95, d: 2 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Guadeloupe' },
          { v: 45, d: 0 },
          { v: 384000, d: 0 },
          { v: 11.71, d: 2 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Martinique' },
          { v: 39, d: 0 },
          { v: 361000, d: 0 },
          { v: 10.81, d: 2 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Mayotte' },
          { v: 18, d: 0 },
          { v: 257000, d: 0 },
          { v: 7.02, d: 2 },
        ],
      },
      {
        cells: [
          { t: 'Corse' },
          { v: 12, d: 0 },
          { v: 355000, d: 0 },
          { v: 3.38, d: 2 },
        ],
      },
      {
        cells: [
          { t: 'PACA' },
          { v: 101, d: 0 },
          { v: 5219000, d: 0 },
          { v: 1.94, d: 2 },
        ],
      },
      {
        cells: [
          { t: 'La Réunion' },
          { v: 15, d: 0 },
          { v: 890000, d: 0 },
          { v: 1.69, d: 2 },
        ],
      },
      {
        cells: [
          { t: 'Île-de-France' },
          { v: 139, d: 0 },
          { v: 12463000, d: 0 },
          { v: 1.12, d: 2 },
        ],
      },
      {
        cells: [
          { t: 'Auvergne-Rhône-Alpes' },
          { v: 89, d: 0 },
          { v: 8206000, d: 0 },
          { v: 1.08, d: 2 },
        ],
      },
      {
        cells: [
          { t: 'Pays de la Loire' },
          { v: 33, d: 0 },
          { v: 3907000, d: 0 },
          { v: 0.84, d: 2 },
        ],
      },
    ],
  },
  'agregat-2025': {
    vintage: '2025',
    sources: ['insee-ssmsi-bases-departementales-et-regional'],
    columns: [
      { key: 'agregat-2025', header: 'Agrégat 2025', type: 'text', headerNumeric: false },
      { key: 'victimes', header: 'Victimes', type: 'number', headerNumeric: true },
      { key: 'population', header: 'Population', type: 'number', headerNumeric: true },
      { key: 'taux-100-000', header: 'Taux /100 000', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'France entière' },
          { v: 975, d: 0 },
          { v: 68.35, d: 2, u: 'M' },
          { v: 1.43, d: 2 },
        ],
      },
      {
        cells: [
          { t: 'France métropolitaine' },
          { v: 817, d: 0 },
          { v: 66.17, d: 2, u: 'M' },
          { v: 1.23, d: 2 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'DROM' },
          { v: 158, d: 0 },
          { v: 2.18, d: 2, u: 'M' },
          { v: 7.23, d: 2 },
        ],
        emphasis: true,
      },
    ],
  },
  '2024-pour-100-000-habitants': {
    vintage: '2024',
    sources: ['eurostat-eurostat-crim-off-cat-iccs0101-et-iccs0'],
    columns: [
      {
        key: '2024-pour-100-000-habitants',
        header: '2024, pour 100 000 habitants',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'france', header: 'France', type: 'number', headerNumeric: true },
      { key: 'allemagne', header: 'Allemagne', type: 'number', headerNumeric: true },
      { key: 'rapport', header: 'Rapport', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Homicides consommés' },
          { v: 1.28, d: 2 },
          { v: 0.83, d: 2 },
          { v: 1.54, d: 2, u: '×' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Tentatives' },
          { v: 6.25, d: 2 },
          { v: 2.06, d: 2 },
          { v: 3.03, d: 2, u: '×' },
        ],
      },
      {
        cells: [
          { t: 'Homicides + tentatives, à convention identique' },
          { v: 7.53, d: 2 },
          { v: 2.89, d: 2 },
          { v: 2.61, d: 2, u: '×' },
        ],
      },
      {
        cells: [
          { t: '<b>Décès certifiés par agression</b> (causes de décès, 2023)' },
          { v: 0.81, d: 2, strong: true },
          { v: 0.41, d: 2, strong: true },
          { v: 1.98, d: 2, u: '×', strong: true },
        ],
        emphasis: true,
      },
    ],
  },
  'deces-par-agression-taux-standardise-100-000': {
    vintage: '2023',
    sources: ['eurostat-eurostat-crim-off-cat-iccs0101-et-iccs0'],
    columns: [
      {
        key: 'deces-par-agression-taux-standardise-100-000',
        header: 'Décès par agression, taux standardisé /100 000',
        type: 'text',
        headerNumeric: false,
      },
      { key: '2011', header: '2011', type: 'number', headerNumeric: true },
      { key: '2015', header: '2015', type: 'number', headerNumeric: true },
      { key: '2019', header: '2019', type: 'number', headerNumeric: true },
      { key: '2023', header: '2023', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Suède' },
          { v: 0.77, d: 2 },
          { v: 0.99, d: 2 },
          { v: 1.04, d: 2 },
          { v: 1.14, d: 2 },
        ],
      },
      {
        cells: [
          { t: '<b>France</b>' },
          { v: 0.69, d: 2 },
          { v: 0.51, d: 2 },
          { v: 0.73, d: 2 },
          { v: 0.81, d: 2, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Espagne' },
          { v: 0.68, d: 2 },
          { v: 0.58, d: 2 },
          { v: 0.58, d: 2 },
          { v: 0.63, d: 2 },
        ],
      },
      {
        cells: [
          { t: 'Pays-Bas' },
          { v: 0.85, d: 2 },
          { v: 0.65, d: 2 },
          { v: 0.64, d: 2 },
          { v: 0.61, d: 2 },
        ],
      },
      {
        cells: [
          { t: 'Pologne' },
          { v: 1.08, d: 2 },
          { v: 0.78, d: 2 },
          { v: 0.67, d: 2 },
          { v: 0.53, d: 2 },
        ],
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 0.54, d: 2 },
          { v: 0.53, d: 2 },
          { v: 0.4, d: 2 },
          { v: 0.41, d: 2, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Italie' },
          { v: 0.66, d: 2 },
          { v: 0.57, d: 2 },
          { v: 0.38, d: 2 },
          { v: 0.39, d: 2 },
        ],
      },
      {
        cells: [
          { t: '<b>États-Unis</b> <em>(taux brut, 2024)</em>' },
          null,
          null,
          null,
          { v: 5.9, d: 1, strong: true, after: '— dont 4,5 par arme à feu' },
        ],
        separator: true,
      },
    ],
  },
  'france-homicides-pour-100-000-habitants': {
    vintage: '2024',
    sources: ['eurostat-eurostat-crim-off-cat-iccs0101-et-iccs0'],
    columns: [
      {
        key: 'france-homicides-pour-100-000-habitants',
        header: 'France, homicides pour 100 000 habitants',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'taux', header: 'Taux', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { v: 1990, d: 0, g: false },
          { v: 2.38, d: 2 },
        ],
      },
      {
        cells: [
          { v: 1993, d: 0, u: '— maximum', strong: true, g: false },
          { v: 2.63, d: 2, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { v: 1997, d: 0, g: false },
          { v: 1.64, d: 2 },
        ],
      },
      {
        cells: [
          { v: 2002, d: 0, g: false },
          { v: 1.85, d: 2 },
        ],
      },
      {
        cells: [
          { v: 2008, d: 0, g: false },
          { v: 1.63, d: 2 },
        ],
      },
      {
        cells: [
          { v: 2012, d: 0, g: false },
          { v: 1.22, d: 2 },
        ],
      },
      {
        cells: [
          { t: '2015 <em>(inclut les victimes des attentats)</em>' },
          { v: 1.56, d: 2 },
        ],
      },
      {
        cells: [
          { v: 2018, d: 0, u: '— minimum', strong: true, g: false },
          { v: 1.06, d: 2, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { v: 2021, d: 0, g: false },
          { v: 1.11, d: 2 },
        ],
      },
      {
        cells: [
          { v: 2024, d: 0, g: false },
          { v: 1.35, d: 2 },
        ],
        emphasis: true,
      },
    ],
  },
  france: {
    vintage: '2024',
    sources: ['eurostat-france-ssmsi-bases-statistiques-de-la'],
    columns: [
      { key: 'france', header: 'France', type: 'text', headerNumeric: false },
      { key: 'tentatives', header: 'Tentatives', type: 'number', headerNumeric: true },
      { key: 'taux', header: 'Taux', type: 'number', headerNumeric: true },
      { key: 'homicides', header: 'Homicides', type: 'number', headerNumeric: true },
      { key: 'ratio-t-h', header: 'Ratio T/H', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { v: 2008, d: 0, g: false },
          { v: 1168, d: 0 },
          { v: 1.82, d: 2 },
          { v: 975, d: 0 },
          { v: 1.2, d: 2 },
        ],
      },
      {
        cells: [
          { v: 2014, d: 0, g: false },
          { v: 1678, d: 0 },
          { v: 2.54, d: 2 },
          { v: 765, d: 0 },
          { v: 2.19, d: 2 },
        ],
      },
      {
        cells: [
          { v: 2020, d: 0, g: false },
          { v: 3115, d: 0 },
          { v: 4.63, d: 2 },
          { v: 692, d: 0 },
          { v: 4.5, d: 2 },
        ],
      },
      {
        cells: [
          { v: 2024, d: 0, g: false },
          { v: 4290, d: 0 },
          { v: 6.25, d: 2 },
          { v: 882, d: 0 },
          { v: 4.86, d: 2 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { v: 2025, d: 0, u: '(SSMSI)', g: false },
          { v: 4477, d: 0 },
          { v: 6.55, d: 2 },
          { v: 975, d: 0 },
          { v: 4.59, d: 2 },
        ],
      },
    ],
  },
  'france-2': {
    vintage: '2024',
    sources: ['ssmsi-ssmsi-statistiques-des-homicides-mini'],
    columns: [
      { key: 'france', header: 'France', type: 'text', headerNumeric: false },
      { key: '2015', header: '2015', type: 'number', headerNumeric: true },
      { key: '2019', header: '2019', type: 'number', headerNumeric: true },
      { key: '2022', header: '2022', type: 'number', headerNumeric: true },
      { key: '2024', header: '2024', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Victimes d\'un partenaire intime' },
          { v: 102, d: 0 },
          { v: 130, d: 0 },
          { v: 128, d: 0 },
          { v: 126, d: 0 },
        ],
      },
      {
        cells: [
          { t: '<em>dont femmes</em>' },
          { v: 82, d: 0 },
          { v: 110, d: 0 },
          { v: 105, d: 0 },
          { v: 96, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Partenaire ou membre de la famille' },
          { v: 205, d: 0 },
          { v: 207, d: 0 },
          { v: 209, d: 0 },
          { v: 212, d: 0 },
        ],
        emphasis: true,
      },
    ],
  },
  'pays-2': {
    vintage: '2019',
    sources: ['basta-cilip-compilation-des-statistiques-offi'],
    columns: [
      { key: 'pays', header: 'Pays', type: 'text', headerNumeric: false },
      { key: 'nombre-annuel', header: 'Nombre annuel', type: 'number', headerNumeric: true },
      { key: 'annee', header: 'Année', type: 'number', headerNumeric: true },
      { key: 'taux-million', header: 'Taux /million', type: 'number', headerNumeric: true },
      { key: 'perimetre', header: 'Périmètre', type: 'text', headerNumeric: false },
    ],
    rows: [
      {
        cells: [
          { t: 'États-Unis' },
          { v: 1406, d: 0 },
          { v: 2024, d: 0, g: false },
          { v: 4.1, d: 1, approx: true },
          { t: 'Toutes causes (tir, taser, véhicule, asphyxie)' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'États-Unis' },
          { v: 1000, d: 0, approx: true },
          { t: '2015-2019' },
          { v: 3, d: 1, approx: true },
          { t: 'Tirs mortels uniquement' },
        ],
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 14, d: 0 },
          { v: 2020, d: 0, g: false },
          { v: 0.17, d: 2 },
          { t: 'Tués par arme à feu policière' },
        ],
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 9, d: 0 },
          { v: 2023, d: 0, g: false },
          { v: 0.11, d: 2 },
          { t: 'idem' },
        ],
      },
      {
        cells: [
          { t: 'Royaume-Uni' },
          { v: 9, d: 0, u: 'incidents de tir' },
          { t: '2025/26' },
          { t: '≤ 0,15' },
          { t: 'Incidents où une arme a été déchargée sur une personne' },
        ],
      },
      {
        cells: [
          { t: 'France' },
          { t: 'aucune statistique officielle' },
          null,
          null,
          null,
        ],
        emphasis: true,
      },
    ],
  },
  perimetre: {
    vintage: '2024',
    sources: ['basta-cilip-compilation-des-statistiques-offi'],
    columns: [
      { key: 'perimetre', header: 'Périmètre', type: 'text', headerNumeric: false },
      {
        key: 'ordre-de-grandeur-annuel',
        header: 'Ordre de grandeur annuel',
        type: 'number',
        headerNumeric: true,
      },
      { key: 'base', header: 'Base', type: 'text', headerNumeric: false },
    ],
    rows: [
      {
        cells: [
          { t: 'Décès par <b>tir</b> d\'un policier ou d\'un gendarme' },
          { v: 10, d: 0, u: 'à 20', approx: true },
          {
            v: 13,
            d: 0,
            u: 'décès lors de refus d\'obtempérer pour la seule année 2022 ; 14 et 15 décès recensés par l\'inspection générale de la police nationale en 2017 et 2018 ; 27 selon le recensement de presse pour 2024',
          },
        ],
        emphasis: true,
      },
      {
        cells: [
          {
            t: '<b>Ensemble</b> des décès survenus pendant ou après une intervention (tirs, garde à vue, poursuites, suicides provoqués)',
          },
          { v: 25, d: 0, u: 'à 40', approx: true },
          {
            t: '32 en 2020 et 37 en 2021 selon l\'inspection générale — <b>police nationale seule</b>, la gendarmerie s\'y ajoutant ; 52 selon le recensement de presse pour 2024',
          },
        ],
        emphasis: true,
      },
    ],
  },
  'agents-tues-en-service-2016-2018': {
    vintage: '2018',
    sources: [
      'fbi-fbi-programme-law-enforcement-officers',
      'ondrp-ondrp-observatoire-national-de-la-delin',
      'basta-basta-media-engage-pour-le-decompte-f',
    ],
    columns: [
      {
        key: 'agents-tues-en-service-2016-2018',
        header: 'Agents tués en service, 2016-2018',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'total', header: 'Total', type: 'number', headerNumeric: true },
      { key: 'dont-en-mission', header: 'Dont en mission', type: 'number', headerNumeric: true },
      { key: 'police-nationale', header: 'Police nationale', type: 'number', headerNumeric: true },
      { key: 'gendarmerie', header: 'Gendarmerie', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { v: 2016, d: 0, g: false },
          { v: 26, d: 0 },
          { v: 16, d: 0 },
          null,
          null,
        ],
      },
      {
        cells: [
          { v: 2017, d: 0, g: false },
          { v: 15, d: 0 },
          null,
          null,
          null,
        ],
      },
      {
        cells: [
          { v: 2018, d: 0, g: false },
          { v: 25, d: 0 },
          { v: 13, d: 0 },
          { v: 11, d: 0 },
          { v: 14, d: 0 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Depuis 2019' },
          null,
          null,
          null,
          null,
        ],
        missing: true,
      },
    ],
  },
  'agents-tues-du-fait-d-un-tiers-2024': {
    vintage: '2024',
    sources: [
      'fbi-fbi-programme-law-enforcement-officers',
      'ondrp-ondrp-observatoire-national-de-la-delin',
      'basta-basta-media-engage-pour-le-decompte-f',
    ],
    columns: [
      {
        key: 'agents-tues-du-fait-d-un-tiers-2024',
        header: 'Agents tués du fait d\'un tiers, 2024',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'nombre', header: 'Nombre', type: 'number', headerNumeric: true },
      {
        key: 'taux-par-million-d-habitants',
        header: 'Taux par million d\'habitants',
        type: 'number',
        headerNumeric: true,
      },
      {
        key: 'perimetre-et-producteur',
        header: 'Périmètre et producteur',
        type: 'text',
        headerNumeric: false,
      },
    ],
    rows: [
      {
        cells: [
          { t: 'États-Unis' },
          { v: 64, d: 0 },
          { v: 0.19, d: 2 },
          {
            t: 'FBI, programme <em>LEOKA</em> : agents tués par un acte criminel, dont 46 par arme à feu, sur 737 035 agents assermentés',
          },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 1, d: 0 },
          { v: 0.012, d: 3 },
          {
            t: 'BKA, <em>Bundeslagebild</em> : 34 faits d\'homicide visant des policiers, dont 33 restés au stade de la tentative',
          },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'France' },
          null,
          null,
          { t: 'aucune statistique publique depuis 2018' },
        ],
      },
    ],
  },
  'personnes-tuees-par-la-police-pour-un-agent-tue-2024': {
    vintage: '2024',
    sources: [
      'fbi-fbi-programme-law-enforcement-officers',
      'ondrp-ondrp-observatoire-national-de-la-delin',
      'basta-basta-media-engage-pour-le-decompte-f',
    ],
    columns: [
      {
        key: 'personnes-tuees-par-la-police-pour-un-agent-tue-2024',
        header: 'Personnes tuées par la police pour un agent tué, 2024',
        type: 'text',
        headerNumeric: false,
      },
      {
        key: 'personnes-tuees-par-la-police',
        header: 'Personnes tuées par la police',
        type: 'number',
        headerNumeric: true,
      },
      {
        key: 'agents-tues-du-fait-d-un-tiers',
        header: 'Agents tués du fait d\'un tiers',
        type: 'number',
        headerNumeric: true,
      },
      { key: 'ratio', header: 'Ratio', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'États-Unis' },
          { v: 1406, d: 0 },
          { v: 64, d: 0 },
          { v: 22, d: 0, approx: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 22, d: 0 },
          { v: 1, d: 0 },
          { v: 22, d: 0, approx: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'France' },
          { v: 52, d: 0 },
          null,
          null,
        ],
      },
    ],
  },
  'circonstance-2024': {
    vintage: '2024',
    sources: ['ssmsi-memes-sources-que-le-tableau-precedent'],
    columns: [
      { key: 'circonstance-2024', header: 'Circonstance, 2024', type: 'text', headerNumeric: false },
      { key: 'victimes', header: 'Victimes', type: 'number', headerNumeric: true },
      { key: 'part-des-976', header: 'Part des 976', type: 'number', headerNumeric: true },
      {
        key: 'qualite-de-la-source',
        header: 'Qualité de la source',
        type: 'text',
        headerNumeric: false,
      },
    ],
    rows: [
      {
        cells: [
          { t: '<b>Violences au sein du couple</b>' },
          { v: 138, d: 0 },
          { v: 14, d: 0, u: '%', approx: true },
          { t: 'Étude annuelle dédiée, solide' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<em>dont femmes tuées par conjoint ou ex-conjoint</em>' },
          { v: 107, d: 0 },
          { v: 11, d: 0, u: '%', approx: true },
          { t: 'idem' },
        ],
      },
      {
        cells: [
          { t: '<em>dont hommes tués par conjointe ou ex</em>' },
          { v: 31, d: 0 },
          { v: 3, d: 0, u: '%', approx: true },
          { t: 'idem' },
        ],
      },
      {
        cells: [
          { t: '<b>Narcotrafic, règlements de comptes</b>' },
          { v: 110, d: 0 },
          { v: 11, d: 0, u: '%', approx: true },
          { t: 'Décompte policier, <b>non labellisé</b>' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Intrafamilial élargi (couple + hors couple)' },
          { t: 'non publié pour 2024' },
          { t: '29 % <em>(réf. 2016-2021)</em>' },
          { t: 'Rétrospective seulement' },
        ],
      },
      {
        cells: [
          { t: 'Homicides commis lors d\'un vol' },
          { t: '<b>non publié</b>' },
          { t: 'inclus dans ≈ 10 % « crapuleux »' },
          { t: 'Non désagrégé' },
        ],
      },
      {
        cells: [
          { t: '<b>Rixes, disputes, différends de voisinage</b>' },
          { t: '<b>non publié</b>' },
          null,
          { t: 'N\'existe pas' },
        ],
        missing: true,
      },
      {
        cells: [
          { t: '<b>Mobile inconnu ou non élucidé</b>' },
          { t: '<b>non publié</b>' },
          null,
          { t: 'N\'existe pas' },
        ],
        missing: true,
      },
    ],
  },
  'delinquance-enregistree': {
    vintage: '2025',
    sources: ['ssmsi-deux-instruments-distincts-qu-il-ne-fau'],
    columns: [
      {
        key: 'delinquance-enregistree',
        header: 'Délinquance enregistrée',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'niveau-2024', header: 'Niveau 2024', type: 'number', headerNumeric: true },
      { key: 'unite', header: 'Unité', type: 'number', headerNumeric: true },
      { key: '2024', header: '2024', type: 'number', headerNumeric: true },
      {
        key: 'moyenne-annuelle-depuis-2016',
        header: 'Moyenne annuelle depuis 2016',
        type: 'number',
        headerNumeric: true,
      },
      { key: '2025', header: '2025', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Homicides' },
          { v: 976, d: 0 },
          { t: 'victimes' },
          { v: -2, d: 0, u: '%' },
          null,
          { t: '975, stable' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Tentatives d\'homicide' },
          null,
          { t: 'victimes' },
          { v: 7, d: 0, u: '%', sign: true },
          { v: 8, d: 0, u: '%/an', sign: true, strong: true },
          { v: 4, d: 0, u: '%', sign: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Violences sexuelles' },
          { v: 122400, d: 0 },
          { t: 'victimes' },
          { v: 7, d: 0, u: '%', sign: true },
          { v: 11, d: 0, u: '%/an', sign: true, strong: true },
          { v: 8, d: 0, u: '%', sign: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<em>dont viols et tentatives</em>' },
          { v: 46100, d: 0 },
          { t: 'victimes' },
          { v: 9, d: 0, u: '%', sign: true },
          { v: 15, d: 0, u: '%/an', sign: true },
          { v: 9, d: 0, u: '%', sign: true },
        ],
      },
      {
        cells: [
          { t: 'Violences physiques intrafamiliales' },
          null,
          { t: 'victimes' },
          { v: 3, d: 0, u: '%', sign: true },
          { v: 11, d: 0, u: '%/an', sign: true, strong: true, after: '(2016-23)' },
          { v: 6, d: 0, u: '%', sign: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Violences physiques hors cadre familial' },
          { v: 449800, d: 0 },
          { t: 'victimes' },
          { v: 3, d: 0, u: '%', sign: true },
          null,
          { v: 5, d: 0, u: '%', sign: true },
        ],
      },
      {
        cells: [
          { t: '<b>Vols violents sans arme</b>' },
          { v: 48300, d: 0 },
          { t: 'infractions' },
          { v: -11, d: 0, u: '%', strong: true },
          null,
          { v: 2, d: 0, u: '%', sign: true },
        ],
        separator: true,
      },
      {
        cells: [
          { t: 'Vols avec armes' },
          { v: 8600, d: 0 },
          { t: 'infractions' },
          { v: -1, d: 0, u: '%' },
          null,
          { v: -8, d: 0, u: '%', strong: true },
        ],
      },
      {
        cells: [
          { t: 'Vols sans violence contre des personnes' },
          { v: 607800, d: 0 },
          { t: 'victimes' },
          { v: -5, d: 0, u: '%' },
          null,
          { v: 2, d: 0, u: '%', sign: true },
        ],
      },
      {
        cells: [
          { t: 'Cambriolages de logement' },
          { v: 218200, d: 0 },
          { t: 'infractions' },
          { t: 'stable' },
          null,
          { v: -3, d: 0, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Vols de véhicules' },
          { v: 137600, d: 0 },
          { t: 'véhicules' },
          { v: -2, d: 0, u: '%' },
          null,
          { v: -9, d: 0, u: '%', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Vols dans les véhicules' },
          { v: 352100, d: 0 },
          { t: 'véhicules' },
          { v: 1, d: 0, u: '%', sign: true },
          null,
          { v: -9, d: 0, u: '%', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Destructions et dégradations' },
          { v: 528800, d: 0 },
          { t: 'infractions' },
          null,
          null,
          { v: 2, d: 0, u: '%', sign: true },
        ],
      },
      {
        cells: [
          { t: 'Stupéfiants — usage' },
          { v: 290600, d: 0 },
          { t: 'mis en cause' },
          { v: 10, d: 0, u: '%', sign: true },
          { v: 16, d: 0, u: '%/an', sign: true, strong: true },
          { v: 7, d: 0, u: '%', sign: true },
        ],
      },
      {
        cells: [
          { t: 'Stupéfiants — trafic' },
          { v: 52300, d: 0 },
          { t: 'mis en cause' },
          { v: 6, d: 0, u: '%', sign: true },
          { v: 6, d: 0, u: '%/an', sign: true },
          { v: 9, d: 0, u: '%', sign: true },
        ],
      },
    ],
  },
  atteinte: {
    vintage: 'à confirmer',
    sources: ['ssmsi-deux-instruments-distincts-qu-il-ne-fau'],
    columns: [
      { key: 'atteinte', header: 'Atteinte', type: 'text', headerNumeric: false },
      {
        key: 'taux-de-victimation',
        header: 'Taux de victimation',
        type: 'number',
        headerNumeric: true,
      },
      { key: 'victimes-estimees', header: 'Victimes estimées', type: 'number', headerNumeric: true },
      { key: 'taux-de-plainte', header: 'Taux de plainte', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Dégradations sur véhicule' },
          { v: 5.5, d: 1, u: '%' },
          { v: 2893000, d: 0 },
          null,
        ],
      },
      {
        cells: [
          { t: 'Violences sexuelles au sens large' },
          { v: 3.5, d: 1, u: '%' },
          { v: 1809000, d: 0 },
          { v: 3, d: 0, u: '%', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Menaces' },
          { v: 2.1, d: 1, u: '%' },
          { v: 1088000, d: 0 },
          null,
        ],
      },
      {
        cells: [
          { t: 'Cambriolage ou tentative' },
          { v: 1.9, d: 1, u: '%' },
          { v: 1013000, d: 0 },
          { v: 41, d: 0, u: 'à 56 %' },
        ],
      },
      {
        cells: [
          { t: 'Violences physiques hors vol' },
          { v: 1.2, d: 1, u: '%' },
          { v: 643000, d: 0 },
          { v: 21, d: 0, u: '%', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Vol ou tentative de vol de véhicule' },
          { v: 1, d: 1, u: '%' },
          { v: 549000, d: 0 },
          { v: 54, d: 0, u: 'à 57 %' },
        ],
      },
      {
        cells: [
          { t: 'Violences conjugales' },
          null,
          null,
          { v: 16, d: 0, u: '%', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Vols avec violence · vols sans violence' },
          null,
          null,
          { v: 20, d: 0, u: '% · 8 %' },
        ],
      },
    ],
  },
  'taux-d-elucidation-a-un-an-2025': {
    vintage: '2025',
    sources: ['eurostat-crim-just-job'],
    columns: [
      {
        key: 'taux-d-elucidation-a-un-an-2025',
        header: 'Taux d\'élucidation à un an (2025)',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'c2', header: '%', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Violences physiques intrafamiliales' },
          { v: 77, d: 0 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Homicides' },
          { v: 68, d: 0 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Tentatives d\'homicide' },
          { v: 59, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Violences sexuelles' },
          { v: 51, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Cambriolages, vols non violents, vols de véhicules' },
          { t: '≤ 8' },
        ],
      },
    ],
  },
  'effectifs-pour-100-000-habitants': {
    vintage: 'à confirmer',
    sources: ['eurostat-crim-just-job'],
    columns: [
      {
        key: 'effectifs-pour-100-000-habitants',
        header: 'Effectifs pour 100 000 habitants',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'france', header: 'France', type: 'number', headerNumeric: true },
      { key: 'allemagne', header: 'Allemagne', type: 'number', headerNumeric: true },
      { key: 'mediane-europeenne', header: 'Médiane européenne', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Policiers (police nationale + gendarmerie)' },
          { v: 361, d: 0 },
          { v: 311, d: 0 },
          null,
        ],
      },
      {
        cells: [
          { t: 'Juges professionnels' },
          { v: 11.3, d: 1 },
          { v: 24.7, d: 1 },
          { v: 17.6, d: 1 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Budget justice par habitant' },
          { v: 77, d: 0, u: '€' },
          { v: 136, d: 0, u: '€' },
          { v: 74.8, d: 1, u: '€' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Budget justice en % du PIB' },
          { v: 0.2, d: 2, u: '%' },
          { v: 0.3, d: 2, u: '%' },
          null,
        ],
      },
    ],
  },
  'delai-moyen-2025': {
    vintage: '2025',
    sources: ['eurostat-crim-just-job'],
    columns: [
      { key: 'delai-moyen-2025', header: 'Délai moyen (2025)', type: 'text', headerNumeric: false },
      { key: 'duree', header: 'Durée', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Faits → classement ou orientation' },
          { v: 17.6, d: 1, u: 'mois' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Arrivée au parquet → première orientation' },
          { v: 4, d: 1, u: 'mois' },
        ],
      },
      {
        cells: [
          { t: 'Arrivée au parquet → jugement correctionnel' },
          { v: 9.1, d: 1, u: 'mois' },
        ],
      },
    ],
  },
  'trois-elements-francais-2016-2022-rapportes-a-68-millions': {
    vintage: '2022',
    sources: ['eurostat-crim-just-job-2'],
    columns: [
      {
        key: 'trois-elements-francais-2016-2022-rapportes-a-68-millions',
        header: 'Trois éléments français, 2016-2022, rapportés à 68 millions d’habitants',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'effectif', header: 'Effectif', type: 'number', headerNumeric: true },
      { key: 'pour-100-000', header: 'Pour 100 000', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: '<b>Policiers municipaux (2022)</b>' },
          { v: 27131, d: 0 },
          { v: 40, d: 0, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'CRS et gendarmerie mobile (2022)' },
          { v: 23666, d: 0 },
          { v: 35, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Tâches indues, police et gendarmerie (2016)' },
          { v: 6000, d: 0 },
          { v: 9, d: 0 },
        ],
      },
      {
        cells: [
          { t: '<em>Rappel : l’écart France − Allemagne à expliquer</em>' },
          null,
          { v: 50, d: 0 },
        ],
        total: true,
      },
    ],
  },
} satisfies Tables

export const series = {
  'homicides-et-tentatives-d-homicide-france-et-allemagne': {
    svg: {
      viewBox: '0 0 720 350',
      titleId: 'ctent-t',
      title: 'Homicides et tentatives',
      preserveAspectRatio: 'xMidYMid meet',
    },
    title: 'Homicides et tentatives d\'homicide, France et Allemagne',
    subtitle: 'Taux pour 100 000 habitants, 2008-2024.',
    caption: 'En 2008, la France (1,82) était <b>en dessous</b> de l\'Allemagne (1,96) pour les tentatives. En 2024, elle est à <b>3,0 fois l\'Allemagne</b>, laquelle est rigoureusement stable sur dix-sept ans. <em>Source : Eurostat crim_off_cat, ICCS0101 et ICCS0102.</em>',
    sources: ['eurostat-france-ssmsi-bases-statistiques-de-la'],
    vintage: '2024',
    legend: [
      { color: 's2', label: 'Tentatives, France' },
      { color: 's4', label: 'Tentatives, Allemagne' },
      { color: 's1', label: 'Homicides, France' },
      { color: 's5', label: 'Homicides, Allemagne' },
    ],
    type: 'line',
    layout: {
      kind: 'line',
      tickLabelX: 43,
      tickLabelDy: 4,
      axisLabel: { x: 43, y: 14, text: 'pour 100 000 hab.', anchor: 'end' },
      axisLineY: 316,
      dotR: 4,
      endLabelDx: 8,
      endLabelDy: 4,
      xLabelY: 334,
    },
    xAxis: { min: 2008, max: 2024, ticks: [2008, 2012, 2016, 2020, 2024] },
    x: [2008, 2010, 2012, 2013, 2014, 2016, 2018, 2019, 2020, 2022, 2024],
    y: { min: 0, max: 6, ticks: [0, 2, 4, 6], label: 'pour 100 000 hab.' },
    series: [
      {
        key: 's2',
        color: 's2',
        label: 'Tentatives, France',
        values: [1.819, 1.869, 2.39, null, 2.54, 3.39, 3.719, null, 4.631, 5.281, 6.25],
      },
      {
        key: 's4',
        color: 's4',
        label: 'Tentatives, Allemagne',
        values: [1.96, 1.981, null, 1.981, null, 2.14, null, 2.181, null, 2.069, 2.06],
      },
      {
        key: 's1',
        color: 's1',
        label: 'Homicides, France',
        values: [1.519, 1.231, 1.25, null, 1.16, 1.169, 1.04, null, 1.031, 1.21, 1.281],
      },
      {
        key: 's5',
        color: 's5',
        label: 'Homicides, Allemagne',
        values: [0.8, 0.85, null, 0.769, null, 0.91, null, 0.71, null, 0.74, 0.831],
      },
    ],
    frame: { width: 720, height: 350, left: 52, right: 602, top: 64, bottom: 316 },
  },
} satisfies SeriesSet

/** Fiches du chapitre, dans l'ordre : alimente le rail et la recherche. */
export const questions = [
  { id: 's12-q1', title: 'Combien d\'homicides, États-Unis compris ?' },
  {
    id: 's12-q2',
    title: 'Pourquoi la France est-elle au-dessus de l\'Allemagne ? L\'effet outre-mer',
  },
  {
    id: 's12-q3',
    title: 'Deux corrections indispensables : les conventions de comptage, et la mesure indépendante de la police',
  },
  { id: 's12-q4', title: 'Les tentatives d\'homicide : la statistique vraiment révélatrice' },
  { id: 's12-q5', title: 'Répartition des homicides par circonstance' },
  {
    id: 's12-q6',
    title: 'Personnes tuées lors d\'interventions policières : la comparaison internationale',
  },
  {
    id: 's12-q15',
    title: 'Et les policiers tués en mission ? Le contrepoint, et ce que vaut le ratio',
  },
  { id: 's12-q7', title: 'De quoi les homicides français relèvent-ils ?' },
  {
    id: 's12-q8',
    title: 'La violence augmente-t-elle vraiment ? Ce que disent les deux instruments',
  },
  {
    id: 's12-q9',
    title: 'Les violences ont-elles augmenté, ou est-ce l\'enregistrement qui a changé ?',
  },
  { id: 's12-q10', title: 'Élucidation, effectifs, justice' },
  { id: 's12-q14', title: 'Pourquoi la France compte-t-elle plus de policiers que l’Allemagne ?' },
  { id: 's12-q11', title: 'Combien de détenus, et dans quelles conditions ?' },
  { id: 's12-q12', title: 'Construire des prisons réduit-il la criminalité ?' },
  { id: 's12-q13', title: 'Combien de contrôles d\'identité ?' },
] satisfies readonly { id: string; title: string }[]

/**
 * Sources citées dans le texte du chapitre, en plus de celles portées par les
 * tableaux et les figures. La bibliographie les recense aussi : une source
 * citée en prose reste une source du dossier.
 */
export const citedSources = [
  'basta-basta-media-engage-pour-le-decompte-f',
  'basta-cilip-compilation-des-statistiques-offi', 'eurostat-crim-just-job',
  'eurostat-crim-just-job-2', 'eurostat-eurostat-crim-off-cat-iccs0101-et-iccs0',
  'eurostat-onudc-via-banque-mondiale-serie-1990-20',
  'fbi-fbi-programme-law-enforcement-officers',
  'insee-ssmsi-bases-departementales-et-regional',
  'ondrp-ondrp-observatoire-national-de-la-delin',
  'ssmsi-deux-instruments-distincts-qu-il-ne-fau',
  'ssmsi-memes-sources-que-le-tableau-precedent',
  'ssmsi-ssmsi-statistiques-des-homicides-mini',
] satisfies readonly SourceId[]
