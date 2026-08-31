// Généré par `npm run extract` depuis Temp/chiffres2027 (3).html.
// Toutes les données chiffrées du chapitre vivent ici, chacune sous sa source
// et son millésime. Voir CLAUDE.md, règles 2 à 4.
import type { ChapterMeta, SeriesSet, SourceId, Tables } from '@/lib/types'

export const meta = {
  slug: 'dette-deficit',
  num: 'Thème 02',
  title: 'Dette et déficit',
  shortTitle: 'Dette et déficit',
  note: 'La quasi-totalité du déficit français est structurelle. Aucune reprise de croissance ne le résorbera.',
  status: 'complete',
  updated: '2026-08',
  legacyAnchor: 's2',
} satisfies ChapterMeta

export const tables = {
  poste: {
    vintage: '2024',
    sources: ['eurostat-gov-10a-main-2'],
    columns: [
      { key: 'poste', header: 'Poste', type: 'text', headerNumeric: false },
      { key: 'evolution', header: 'Évolution', type: 'number', headerNumeric: true },
      { key: 'commentaire', header: 'Commentaire', type: 'text', headerNumeric: false },
    ],
    rows: [
      {
        cells: [
          { t: 'Protection sociale et santé' },
          { t: '+ très fort' },
          {
            t: 'Les deux tiers de la hausse totale. Vieillissement, extension de la couverture maladie, montée du chômage indemnisé puis des minima sociaux.',
          },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Charge de la dette' },
          { v: 2, d: 1, u: '% du PIB en 2024' },
          {
            t: 'Quasi nulle avant 1980, elle culmine à plus de 3 % dans les années 1990, retombe avec la baisse des taux, et remonte depuis 2022 : 58,9 Md€ en 2024, ≈65 Md€ en 2025, ≈67 Md€ prévus en 2026.',
          },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Défense' },
          { v: 4, d: 0, u: '% → 1,9 %', approx: true },
          {
            t: 'Le poste qui a le plus reculé en part de PIB depuis les années 1960. Il remonte depuis 2022 (+5,3 Md€ dans le budget 2026).',
          },
        ],
      },
      {
        cells: [
          { t: 'Enseignement' },
          { v: 5.1, d: 1, u: '%' },
          {
            t: 'Stable en part de PIB sur longue période, malgré une démographie scolaire en baisse — donc en hausse par élève.',
          },
        ],
      },
      {
        cells: [
          { t: 'Administration générale (hors dette)' },
          { v: 4.2, d: 1, u: '%' },
          { t: 'Exactement la moyenne UE-27. Ce n\'est pas là que la dépense a dérivé.' },
        ],
      },
    ],
  },
  'du-pib': {
    vintage: '2024',
    sources: ['eurostat-nasa-10-nf-tr', 'eurostat-eurostat-gov-10a-main-1995-2025-et-nas'],
    columns: [
      { key: 'du-pib', header: '% du PIB', type: 'text', headerNumeric: false },
      { key: '1975', header: '1975', type: 'number', headerNumeric: true },
      { key: '1985', header: '1985', type: 'number', headerNumeric: true },
      { key: '1995', header: '1995', type: 'number', headerNumeric: true },
      { key: '2007', header: '2007', type: 'number', headerNumeric: true },
      { key: '2019', header: '2019', type: 'number', headerNumeric: true },
      { key: '2024', header: '2024', type: 'number', headerNumeric: true },
      { key: '1975-2024', header: '1975 → 2024', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: '<b>Prestations sociales</b>' },
          { v: 17.2, d: 1 },
          { v: 21, d: 1 },
          { v: 22.4, d: 1 },
          { v: 23, d: 1 },
          { v: 25.5, d: 1 },
          { v: 25.5, d: 1, strong: true },
          { v: 8.3, d: 1, sign: true, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<em>dont en espèces</em>' },
          { v: 14, d: 1 },
          { v: 17.2, d: 1 },
          { v: 17.7, d: 1 },
          { v: 17.4, d: 1 },
          { v: 19.3, d: 1 },
          { v: 19.2, d: 1 },
          { v: 5.2, d: 1, sign: true },
        ],
      },
      {
        cells: [
          { t: '<em>dont en nature (santé, éducation remboursées)</em>' },
          { v: 3.2, d: 1 },
          { v: 3.7, d: 1 },
          { v: 4.7, d: 1 },
          { v: 5.6, d: 1 },
          { v: 6.2, d: 1 },
          { v: 6.3, d: 1 },
          { v: 3.1, d: 1, sign: true },
        ],
      },
      {
        cells: [
          { t: 'Rémunération des agents publics' },
          { v: 11.7, d: 1 },
          { v: 13.5, d: 1 },
          { v: 13.5, d: 1 },
          { v: 12.5, d: 1 },
          { v: 12.4, d: 1 },
          { v: 12.4, d: 1 },
          { v: 0.7, d: 1, sign: true },
        ],
      },
      {
        cells: [
          { t: 'Consommations intermédiaires' },
          { v: 5.8, d: 1 },
          { v: 6.3, d: 1 },
          { v: 5.5, d: 1 },
          { v: 4.9, d: 1 },
          { v: 5.2, d: 1 },
          { v: 5.5, d: 1 },
          { v: -0.3, d: 1 },
        ],
      },
      {
        cells: [
          { t: '<b>Investissement public</b>' },
          { v: 5.3, d: 1 },
          { v: 4.9, d: 1 },
          { v: 4.6, d: 1 },
          { v: 4.4, d: 1 },
          { v: 4.2, d: 1 },
          { v: 4.3, d: 1, strong: true },
          { v: -1, d: 1, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Charge de la dette' },
          { v: 0.9, d: 1 },
          { v: 2.6, d: 1 },
          { v: 3.5, d: 1 },
          { v: 2.7, d: 1 },
          { v: 1.5, d: 1 },
          { v: 2, d: 1 },
          { v: 1.1, d: 1, sign: true },
        ],
      },
      {
        cells: [
          { t: 'Subventions' },
          { v: 2.1, d: 1 },
          { v: 2.5, d: 1 },
          { v: 1.5, d: 1 },
          { v: 1.5, d: 1 },
          { v: 1.7, d: 1 },
          { v: 2, d: 1 },
          { v: -0.1, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Autres transferts courants' },
          { v: 1.5, d: 1 },
          { v: 2.1, d: 1 },
          { v: 2.7, d: 1 },
          { v: 2.9, d: 1 },
          { v: 3.2, d: 1 },
          { v: 3.2, d: 1 },
          { v: 1.7, d: 1, sign: true },
        ],
      },
      {
        cells: [
          { t: '<b>Total</b>' },
          { v: 46.1, d: 1 },
          { v: 54.2, d: 1 },
          { v: 56.1, d: 1 },
          { v: 53.6, d: 1 },
          { v: 55.3, d: 1 },
          { v: 57, d: 1, strong: true },
          { v: 10.9, d: 1, sign: true, strong: true },
        ],
        total: true,
      },
    ],
  },
  'part-dans-la-depense-publique-totale': {
    vintage: '2024',
    sources: ['eurostat-nasa-10-nf-tr', 'eurostat-eurostat-gov-10a-main-1995-2025-et-nas'],
    columns: [
      {
        key: 'part-dans-la-depense-publique-totale',
        header: 'Part dans la dépense publique <em>totale</em>',
        type: 'text',
        headerNumeric: false,
      },
      { key: '1975', header: '1975', type: 'number', headerNumeric: true },
      { key: '2024', header: '2024', type: 'number', headerNumeric: true },
      { key: 'evolution', header: 'Évolution', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: '<b>Prestations sociales</b>' },
          { v: 37.3, d: 1, u: '%' },
          { v: 44.7, d: 1, u: '%', strong: true },
          { v: 7.4, d: 1, u: 'pts', sign: true, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Autres transferts courants' },
          { v: 3.2, d: 1, u: '%' },
          { v: 5.6, d: 1, u: '%' },
          { v: 2.4, d: 1, sign: true },
        ],
      },
      {
        cells: [
          { t: 'Charge de la dette' },
          { v: 2, d: 1, u: '%' },
          { v: 3.5, d: 1, u: '%' },
          { v: 1.5, d: 1, sign: true },
        ],
      },
      {
        cells: [
          { t: 'Subventions' },
          { v: 4.5, d: 1, u: '%' },
          { v: 3.5, d: 1, u: '%' },
          { v: -1, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Consommations intermédiaires' },
          { v: 12.5, d: 1, u: '%' },
          { v: 9.6, d: 1, u: '%' },
          { v: -2.9, d: 1 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>Rémunération des agents</b>' },
          { v: 25.4, d: 1, u: '%' },
          { v: 21.8, d: 1, u: '%', strong: true },
          { v: -3.6, d: 1, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>Investissement public</b>' },
          { v: 11.5, d: 1, u: '%' },
          { v: 7.5, d: 1, u: '%', strong: true },
          { v: -4, d: 1, strong: true },
        ],
        emphasis: true,
      },
    ],
  },
  periode: {
    vintage: '2025',
    sources: ['eurostat-nasa-10-nf-tr', 'eurostat-eurostat-gov-10a-main-1995-2025-et-nas'],
    columns: [
      { key: 'periode', header: 'Période', type: 'text', headerNumeric: false },
      { key: 'contexte', header: 'Contexte', type: 'text', headerNumeric: false },
      {
        key: 'depense-totale-points-de-pib',
        header: 'Dépense totale, points de PIB',
        type: 'number',
        headerNumeric: true,
      },
    ],
    rows: [
      {
        cells: [
          { v: 1975, d: 0, u: '— Giscard d\'Estaing', g: false },
          { t: 'Premier choc pétrolier' },
          { v: 4.6, d: 1, u: 'en une année', sign: true },
        ],
      },
      {
        cells: [
          { t: '1981-1985 — Mitterrand' },
          { t: 'Relance puis tournant de la rigueur' },
          { v: 6.2, d: 1, sign: true, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '1986-1989 — cohabitation Chirac, puis Rocard' },
          { t: 'Désinflation, privatisations' },
          { v: -3.2, d: 1, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '1990-1993 — Mitterrand, puis cohabitation Balladur' },
          { t: 'Récession de 1993' },
          { v: 5.2, d: 1, sign: true },
        ],
      },
      {
        cells: [
          { t: '1997-2000 — cohabitation Jospin' },
          { t: 'Forte croissance' },
          { v: -3, d: 1, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '2002-2008 — Chirac puis Sarkozy' },
          { t: 'Stabilité' },
          { v: 0.4, d: 1, sign: true },
        ],
      },
      {
        cells: [
          { v: 2009, d: 0, u: '— Sarkozy', g: false },
          { t: 'Crise financière' },
          { v: 3.7, d: 1, u: 'en une année', sign: true, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '2014-2019 — Hollande puis Macron' },
          { t: 'Consolidation' },
          { v: -3.1, d: 1, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { v: 2020, d: 0, u: '— Macron', g: false },
          { t: 'Crise sanitaire' },
          { v: 6.4, d: 1, u: 'en une année', sign: true, strong: true },
        ],
        emphasis: true,
      },
    ],
  },
  'titres-de-dette-publique': {
    vintage: 'à confirmer',
    sources: ['eurostat-gov-10dd-edpt1-2'],
    columns: [
      {
        key: 'titres-de-dette-publique',
        header: 'Titres de dette publique',
        type: 'text',
        headerNumeric: false,
      },
      {
        key: 'part-detenue-par-des-non-residents',
        header: 'Part détenue par des « non-résidents »',
        type: 'number',
        headerNumeric: true,
      },
      { key: 'perimetre', header: 'Périmètre', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'France, dette négociable de l\'État' },
          { v: 55.9, d: 1, u: '%' },
          { t: 'hors résidents <b>français</b>' },
        ],
      },
      {
        cells: [
          { t: 'France, dette publique toutes administrations' },
          { v: 52, d: 0, u: '%' },
          { t: 'hors résidents français' },
        ],
      },
      {
        cells: [
          { t: '<b>Zone euro consolidée</b>' },
          { v: 23, d: 0, u: '%', approx: true, strong: true },
          { t: 'hors résidents de la <b>zone euro</b>' },
        ],
        emphasis: true,
      },
    ],
  },
  'dette-federale-americaine-detenue-par-des-etrangers-decemb': {
    vintage: '2025',
    sources: ['banque-de-france-banque-centrale-europeenne-geopolitics'],
    columns: [
      {
        key: 'dette-federale-americaine-detenue-par-des-etrangers-decemb',
        header: 'Dette fédérale américaine détenue par des étrangers, décembre 2025',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'valeur', header: 'Valeur', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Montant' },
          { v: 9270, d: 0, u: 'Md$' },
        ],
      },
      {
        cells: [
          { t: 'Rapporté à la dette <b>détenue par le public</b> (30 100 Md$)' },
          { v: 31, d: 0, u: '%', approx: true, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Rapporté à la dette fédérale <b>brute</b> (38 514 Md$)' },
          { v: 24, d: 0, u: '%', approx: true, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'dont secteur officiel étranger' },
          { v: 3900, d: 0, u: 'Md$ — 41,9 %' },
        ],
      },
      {
        cells: [
          { t: 'dont investisseurs privés' },
          { v: 5400, d: 0, u: 'Md$ — 58,1 %' },
        ],
      },
      {
        cells: [
          { t: 'Intérêts versés à des détenteurs étrangers, 2025' },
          { v: 282, d: 0, u: 'Md$' },
        ],
      },
    ],
  },
  'principaux-detenteurs-de-titres-du-tresor-americain-juin-2': {
    vintage: '2026',
    sources: ['banque-de-france-banque-centrale-europeenne-geopolitics'],
    columns: [
      {
        key: 'principaux-detenteurs-de-titres-du-tresor-americain-juin-2',
        header: 'Principaux détenteurs de titres du Trésor américain, juin 2026',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'md', header: 'Md$', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Japon' },
          { v: 1116.7, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Royaume-Uni' },
          { v: 939.9, d: 1 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Chine continentale' },
          { v: 633.4, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Belgique' },
          { v: 482.5, d: 1 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Canada' },
          { v: 459.6, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Îles Caïmans' },
          { v: 453.1, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Luxembourg' },
          { v: 434.2, d: 1 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'France' },
          { v: 389.9, d: 1 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Irlande' },
          { v: 353.5, d: 1 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Taïwan' },
          { v: 302.5, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Suisse' },
          { v: 284.9, d: 1 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Singapour · Hong Kong · Inde' },
          { v: 284.4, d: 1, u: '· 255,8 · 186,4' },
        ],
      },
      {
        cells: [
          { t: 'Norvège' },
          { v: 203.2, d: 1 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>Total détenu par des étrangers</b>' },
          { v: 9299, d: 1, strong: true },
        ],
        total: true,
      },
    ],
  },
  'detention-croisee': {
    vintage: '2026',
    sources: ['banque-de-france-banque-centrale-europeenne-geopolitics'],
    columns: [
      { key: 'detention-croisee', header: 'Détention croisée', type: 'text', headerNumeric: false },
      { key: 'montant', header: 'Montant', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: '<b>Europe → titres du Trésor américain</b> (7 pays nommés)' },
          { t: '<b>≥ 3 088 Md$</b> <em>(juin 2026)</em>' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>États-Unis → dette publique étrangère, <em>monde entier</em></b>' },
          { t: '<b>693 Md$</b> <em>(déc. 2024)</em>' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'dont dette publique française' },
          { v: 42, d: 0, u: 'Md$' },
        ],
      },
      {
        cells: [
          { t: 'dont dette publique britannique' },
          { v: 51, d: 0, u: 'Md$' },
        ],
      },
      {
        cells: [
          { t: 'dont dette publique canadienne · japonaise' },
          { v: 75, d: 0, u: '· 74 Md$' },
        ],
      },
    ],
  },
  item: {
    vintage: '2026',
    sources: ['banque-de-france-banque-centrale-europeenne-geopolitics'],
    columns: [
      { key: 'c1', header: '', type: 'text', headerNumeric: false },
      { key: 'banque-centrale', header: 'Banque centrale', type: 'number', headerNumeric: true },
      { key: 'residents-prives', header: 'Résidents privés', type: 'number', headerNumeric: true },
      { key: 'non-residents', header: 'Non-résidents', type: 'number', headerNumeric: true },
      {
        key: 'non-residents-hors-banque-centrale',
        header: 'Non-résidents <b>hors banque centrale</b>',
        type: 'number',
        headerNumeric: true,
      },
    ],
    rows: [
      {
        cells: [
          { t: '<b>France</b> <em>(dette négociable)</em>' },
          { v: 25, d: 0, u: '%', approx: true },
          { v: 21, d: 0, u: '%', approx: true },
          { v: 55.9, d: 1, u: '%' },
          { v: 66, d: 0, u: '%', approx: true, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Espagne' },
          { v: 22.5, d: 1, u: '%', approx: true },
          { v: 28, d: 0, u: '%', approx: true },
          { v: 48.9, d: 1, u: '%' },
          { v: 63, d: 0, u: '%', approx: true },
        ],
      },
      {
        cells: [
          { t: 'Italie <em>(dette totale)</em>' },
          { v: 19, d: 0, u: '%' },
          { v: 47, d: 0, u: '%' },
          { v: 34, d: 0, u: '%' },
          { v: 42, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'États-Unis <em>(dette détenue par le public)</em>' },
          { v: 15, d: 1, u: '%' },
          { v: 54.2, d: 1, u: '%' },
          { v: 30.8, d: 1, u: '%' },
          { v: 36.2, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: '<b>Japon</b> <em>(obligations d\'État et bons)</em>' },
          { v: 42.2, d: 1, u: '%', strong: true },
          { v: 44.1, d: 1, u: '%' },
          { v: 13.7, d: 1, u: '%' },
          { v: 23.7, d: 1, u: '%' },
        ],
        emphasis: true,
      },
    ],
  },
  annee: {
    vintage: '2025',
    sources: ['haut-conseil-des-finances-publiques-haut-conseil-des-finan'],
    columns: [
      { key: 'annee', header: 'Année', type: 'text', headerNumeric: false },
      { key: 'solde-total', header: 'Solde total', type: 'number', headerNumeric: true },
      { key: 'solde-structurel', header: 'Solde structurel', type: 'number', headerNumeric: true },
      {
        key: 'part-conjoncturelle',
        header: 'Part conjoncturelle',
        type: 'number',
        headerNumeric: true,
      },
    ],
    rows: [
      {
        cells: [
          { v: 2024, d: 0, g: false },
          { v: -5.8, d: 1, u: '%' },
          { v: -5.7, d: 1, u: '%' },
          { v: -0.1, d: 1, u: 'pt', approx: true },
        ],
      },
      {
        cells: [
          { v: 2025, d: 0, g: false },
          { v: -5.1, d: 1, u: '%' },
          { v: -4.9, d: 1, u: '%' },
          { v: -0.4, d: 1, u: 'pt', approx: true },
        ],
        emphasis: true,
      },
    ],
  },
  'scenario-arithmetique': {
    vintage: '2025',
    sources: ['insee-calcul-par-nos-soins-a-partir-d-insee-i'],
    columns: [
      {
        key: 'scenario-arithmetique',
        header: 'Scénario arithmétique',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'effort-depenses', header: 'Effort dépenses', type: 'number', headerNumeric: true },
      { key: 'effort-recettes', header: 'Effort recettes', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Tout par la dépense' },
          { v: -63, d: 0, u: 'Md€ (≈ 3,6 % de la dépense)' },
          { v: 0, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Tout par l\'impôt' },
          { v: 0, d: 0 },
          { v: 63, d: 0, u: 'Md€ (≈ 4,3 % des PO)', sign: true },
        ],
      },
      {
        cells: [
          { t: 'Réparti à parts égales' },
          { v: -31.5, d: 1, u: 'Md€' },
          { v: 31.5, d: 1, u: 'Md€', sign: true },
        ],
      },
    ],
  },
} satisfies Tables

export const series = {
  'depense-publique-par-nature-1975-2024': {
    raw: true,
    title: 'Dépense publique par nature, 1975-2024',
    subtitle: 'En % du PIB, ensemble des administrations publiques. Sous l\'axe : les mandats présidentiels, hachurés pendant les cohabitations.',
    caption: '<b>Une seule courbe monte vraiment.</b> Les prestations sociales passent de <b>17,2 % à 25,5 % du PIB</b> — plus 8,3 points en cinquante ans. Sur la même période, la rémunération des agents publics est <b>quasiment plate</b> (11,7 → 12,4), les achats courants reculent légèrement (5,8 → 5,5) et l\'investissement public perd un point (5,3 → 4,3). La charge de la dette, elle, fait un aller-retour : 0,9 % en 1975, un pic à 3,6 % en 1996-1997, 2,0 % en 2024. <em>Sources : Eurostat gov_10a_main et nasa_10_nf_tr, comptes nationaux Insee base 2020, séries rétropolées.</em>',
    legend: [
      { color: 's1', label: 'Prestations sociales' },
      { color: 's4', label: 'Rémunération des agents' },
      { color: 's3', label: 'Consommations intermédiaires' },
      { color: 's5', label: 'Investissement' },
      { color: 's2', label: 'Charge de la dette' },
    ],
    svg: '<svg viewBox="0 0 720 452" class="cv" role="img" aria-labelledby="cnatur-t" preserveAspectRatio="xMidYMid meet">\n<title id="cnatur-t">Dépense publique par nature</title>\n<defs><pattern id="coh" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line class="cohl" x1="0" y1="0" x2="0" y2="6"></line></pattern></defs>\n<line class="grid" x1="52" y1="372.0" x2="602" y2="372.0"></line>\n<text class="ax ar" x="43" y="376.0">0</text>\n<line class="grid" x1="52" y1="313.7" x2="602" y2="313.7"></line>\n<text class="ax ar" x="43" y="317.7">5</text>\n<line class="grid" x1="52" y1="255.3" x2="602" y2="255.3"></line>\n<text class="ax ar" x="43" y="259.3">10</text>\n<line class="grid" x1="52" y1="197.0" x2="602" y2="197.0"></line>\n<text class="ax ar" x="43" y="201.0">15</text>\n<line class="grid" x1="52" y1="138.7" x2="602" y2="138.7"></line>\n<text class="ax ar" x="43" y="142.7">20</text>\n<line class="grid" x1="52" y1="80.3" x2="602" y2="80.3"></line>\n<text class="ax ar" x="43" y="84.3">25</text>\n<line class="grid" x1="52" y1="22.0" x2="602" y2="22.0"></line>\n<text class="ax ar" x="43" y="26.0">30</text>\n<text class="ax" x="43" y="14" text-anchor="end">% du PIB</text>\n<line class="axis" x1="52" y1="372" x2="602" y2="372"></line>\n<polyline class="ln s1" points="52.0,171.0 63.2,172.0 74.4,169.3 85.7,162.0 96.9,161.9 108.1,157.1 119.3,144.7 130.6,136.1 141.8,134.7 153.0,130.8 164.2,127.2 175.5,128.6 186.7,131.7 197.9,135.4 209.1,137.6 220.4,134.0 231.6,127.1 242.8,120.7 254.0,109.0 265.3,110.2 276.5,110.7 287.7,108.3 298.9,107.2 310.2,111.8 321.4,111.8 332.6,118.8 343.8,116.5 355.1,110.7 366.3,104.8 377.5,103.7 388.7,102.5 400.0,102.5 411.2,103.7 422.4,100.2 433.6,79.2 444.9,78.0 456.1,80.3 467.3,73.3 478.5,71.0 489.8,68.7 501.0,69.8 512.2,68.7 523.4,71.0 534.7,73.3 545.9,74.5 557.1,36.0 568.3,55.8 579.6,71.0 590.8,80.3 602.0,74.5"></polyline>\n<polyline class="ln s4" points="52.0,235.4 63.2,231.8 74.4,227.7 85.7,224.6 96.9,225.2 108.1,222.4 119.3,218.8 130.6,215.3 141.8,215.1 153.0,214.4 164.2,214.5 175.5,215.9 186.7,219.1 197.9,224.9 209.1,228.6 220.4,229.0 231.6,227.0 242.8,223.6 254.0,217.3 265.3,216.8 276.5,214.5 287.7,212.2 298.9,214.5 310.2,216.8 321.4,216.8 332.6,218.0 343.8,219.2 355.1,216.8 366.3,216.8 377.5,219.2 388.7,220.3 400.0,222.7 411.2,226.2 422.4,226.2 433.6,216.8 444.9,218.0 456.1,220.3 467.3,219.2 478.5,219.2 489.8,219.2 501.0,220.3 512.2,221.5 523.4,221.5 534.7,225.0 545.9,227.3 557.1,216.8 568.3,225.0 579.6,226.2 590.8,229.7 602.0,227.3"></polyline>\n<polyline class="ln s3" points="52.0,304.9 63.2,305.0 74.4,307.8 85.7,306.0 96.9,307.4 108.1,303.5 119.3,301.6 130.6,301.1 141.8,299.2 153.0,299.7 164.2,298.3 175.5,304.8 186.7,303.6 197.9,302.9 209.1,307.8 220.4,308.5 231.6,307.1 242.8,305.0 254.0,300.7 265.3,305.7 276.5,307.8 287.7,305.5 298.9,305.5 310.2,312.5 321.4,312.5 332.6,312.5 343.8,313.7 355.1,311.3 366.3,312.5 377.5,312.5 388.7,312.5 400.0,313.7 411.2,314.8 422.4,314.8 433.6,309.0 444.9,309.0 456.1,310.2 467.3,309.0 478.5,309.0 489.8,310.2 501.0,310.2 512.2,311.3 523.4,310.2 534.7,311.3 545.9,311.3 557.1,307.8 568.3,309.0 579.6,307.8 590.8,306.7 602.0,307.8"></polyline>\n<polyline class="ln s5" points="52.0,310.2 63.2,311.1 74.4,316.7 85.7,319.3 96.9,318.9 108.1,317.3 119.3,315.5 130.6,313.7 141.8,316.6 153.0,317.1 164.2,315.4 175.5,316.0 186.7,314.8 197.9,312.0 209.1,312.3 220.4,311.4 231.6,309.6 242.8,310.6 254.0,313.1 265.3,314.7 276.5,318.3 287.7,318.3 298.9,323.0 310.2,324.2 321.4,324.2 332.6,321.8 343.8,323.0 355.1,324.2 366.3,321.8 377.5,321.8 388.7,320.7 400.0,320.7 411.2,320.7 422.4,320.7 433.6,316.0 444.9,316.0 456.1,319.5 467.3,318.3 478.5,318.3 489.8,321.8 501.0,326.5 512.2,326.5 523.4,327.7 534.7,326.5 545.9,323.0 557.1,323.0 568.3,324.2 579.6,323.0 590.8,323.0 602.0,321.8"></polyline>\n<polyline class="ln s2" points="52.0,361.3 63.2,362.3 74.4,360.9 85.7,359.9 96.9,358.7 108.1,357.6 119.3,351.9 130.6,351.4 141.8,345.9 153.0,344.5 164.2,342.2 175.5,341.9 186.7,342.9 197.9,344.1 209.1,343.2 220.4,340.6 231.6,339.1 242.8,337.0 254.0,334.4 265.3,333.0 276.5,331.2 287.7,330.0 298.9,330.0 310.2,332.3 321.4,335.8 332.6,337.0 343.8,335.8 355.1,337.0 366.3,338.2 377.5,339.3 388.7,340.5 400.0,341.7 411.2,340.5 422.4,338.2 433.6,342.8 444.9,342.8 456.1,340.5 467.3,341.7 478.5,345.2 489.8,346.3 501.0,348.7 512.2,349.8 523.4,351.0 534.7,351.0 545.9,354.5 557.1,356.8 568.3,355.7 579.6,349.8 590.8,349.8 602.0,348.7"></polyline>\n<circle class="dot s1" cx="602.0" cy="74.5" r="4"></circle>\n<text class="lbl s1t" x="610.0" y="78.5">Prestations sociales</text>\n<circle class="dot s4" cx="602.0" cy="227.3" r="4"></circle>\n<text class="lbl s4t" x="610.0" y="231.3">Rémunération des agents</text>\n<circle class="dot s3" cx="602.0" cy="307.8" r="4"></circle>\n<text class="lbl s3t" x="610.0" y="311.8">Consommations intermédiaires</text>\n<circle class="dot s5" cx="602.0" cy="321.8" r="4"></circle>\n<text class="lbl s5t" x="610.0" y="325.8">Investissement</text>\n<circle class="dot s2" cx="602.0" cy="348.7" r="4"></circle>\n<text class="lbl s2t" x="610.0" y="352.7">Charge de la dette</text>\n<rect class="pr pr-d" x="52.0" y="388" width="71.8" height="30" rx="2"></rect>\n<text class="prl" x="87.9" y="400" text-anchor="middle">Giscard d\'Estaing</text>\n<rect class="pr pr-g" x="123.8" y="388" width="157.1" height="30" rx="2"></rect>\n<text class="prl" x="202.4" y="400" text-anchor="middle">Mitterrand</text>\n<rect class="pr pr-d" x="281.0" y="388" width="134.7" height="30" rx="2"></rect>\n<text class="prl" x="348.3" y="400" text-anchor="middle">Chirac</text>\n<rect class="pr pr-d" x="415.7" y="388" width="56.1" height="30" rx="2"></rect>\n<text class="prl" x="443.7" y="400" text-anchor="middle">Sarkozy</text>\n<rect class="pr pr-g" x="471.8" y="388" width="56.1" height="30" rx="2"></rect>\n<text class="prl" x="499.9" y="400" text-anchor="middle">Hollande</text>\n<rect class="pr pr-c" x="527.9" y="388" width="80.8" height="30" rx="2"></rect>\n<text class="prl" x="568.3" y="400" text-anchor="middle">Macron</text>\n<rect class="coh" x="177.7" y="404" width="24.7" height="12" rx="1"></rect>\n<rect class="coh" x="256.3" y="404" width="24.7" height="12" rx="1"></rect>\n<rect class="coh" x="304.6" y="404" width="55.0" height="12" rx="1"></rect>\n<text class="prl mutp" x="245.1" y="416" text-anchor="middle">cohabitations</text>\n<text class="ax" x="52.0" y="434" text-anchor="start">1975</text>\n<text class="ax" x="164.2" y="434" text-anchor="middle">1985</text>\n<text class="ax" x="276.5" y="434" text-anchor="middle">1995</text>\n<text class="ax" x="388.7" y="434" text-anchor="middle">2005</text>\n<text class="ax" x="501.0" y="434" text-anchor="middle">2015</text>\n<text class="ax" x="602.0" y="434" text-anchor="end">2024</text>\n</svg>',
    sources: ['eurostat-nasa-10-nf-tr'],
    vintage: '2024',
    values: {
      svg: {
        viewBox: '0 0 720 452',
        titleId: 'cnatur-t',
        title: 'Dépense publique par nature',
        preserveAspectRatio: 'xMidYMid meet',
      },
      title: 'Dépense publique par nature, 1975-2024',
      subtitle: 'En % du PIB, ensemble des administrations publiques. Sous l\'axe : les mandats présidentiels, hachurés pendant les cohabitations.',
      caption: '<b>Une seule courbe monte vraiment.</b> Les prestations sociales passent de <b>17,2 % à 25,5 % du PIB</b> — plus 8,3 points en cinquante ans. Sur la même période, la rémunération des agents publics est <b>quasiment plate</b> (11,7 → 12,4), les achats courants reculent légèrement (5,8 → 5,5) et l\'investissement public perd un point (5,3 → 4,3). La charge de la dette, elle, fait un aller-retour : 0,9 % en 1975, un pic à 3,6 % en 1996-1997, 2,0 % en 2024. <em>Sources : Eurostat gov_10a_main et nasa_10_nf_tr, comptes nationaux Insee base 2020, séries rétropolées.</em>',
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
        bands: { y: 388, height: 30, rx: 2, labelDy: 12, patternId: 'coh' },
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
  'dette-publique-francaise-1995-2025': {
    svg: {
      viewBox: '0 0 720 330',
      titleId: 'cdet-t',
      title: 'Dette publique',
      preserveAspectRatio: 'xMidYMid meet',
    },
    title: 'Dette publique française, 1995-2025',
    subtitle: 'En % du PIB, dette brute consolidée au sens de Maastricht.',
    caption: '<b>Deux marches d\'escalier, jamais redescendues.</b> +18,6 points lors de la crise financière (2008-2010) et <b>+16,7 points sur la seule année 2020</b>. Entre les deux, la décrue est nulle : le point bas post-crise est 98,2 % en 2019, contre 65,5 % en 2007. Depuis 2023, la trajectoire remonte de nouveau — <b>+6,1 points en deux ans, sans choc macroéconomique</b>. Cette fois, c\'est le déficit structurel qui alimente la hausse. <em>Source : Eurostat gov_10dd_edpt1.</em>',
    sources: ['eurostat-gov-10dd-edpt1'],
    vintage: '2025',
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
    xAxis: { min: 1995, max: 2025, ticks: [1995, 2000, 2005, 2010, 2015, 2020, 2025] },
    x: [
      1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
      2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024,
      2025,
    ],
    y: { min: 60, max: 120, ticks: [60, 80, 100, 120], label: '% du PIB' },
    series: [
      {
        key: 's5',
        color: 's5',
        label: 'Dette',
        values: [
          57.805, 60.597, 61.993, 62.102, 61.39, 59.693, 59.31, 61.308, 65.414, 66.892, 68.206,
          65.414, 65.496, 69.793, 84.108, 86.298, 88.707, 91.69, 94.591, 96.206, 97, 98.095, 98.807,
          98.506, 98.204, 114.901, 112.793, 111.397, 109.509, 112.602, 115.612,
        ],
      },
    ],
    frame: {
      width: 720,
      height: 330,
      left: 52,
      right: 602,
      top: 40.26999999999997,
      bottom: 259.47999999999996,
    },
  },
} satisfies SeriesSet

/** Fiches du chapitre, dans l'ordre : alimente le rail et la recherche. */
export const questions = [
  {
    id: 's2-q1',
    title: 'Pourquoi la France est-elle en déficit presque chaque année depuis 1974 ?',
  },
  { id: 's2-q2', title: 'Quels postes de dépense ont le plus varié depuis les années 1970 ?' },
  { id: 's2-q3', title: 'Depuis 1975, qu\'est-ce qui a gonflé dans la dépense publique ?' },
  { id: 's2-q4', title: 'Où en est la dette ?' },
  {
    id: 's2-q5',
    title: 'Consolidée au niveau européen, quelle part de la dette est vraiment détenue hors d\'Europe ?',
  },
  { id: 's2-q6', title: 'Détention croisée : l\'Europe finance l\'Amérique, l\'inverse est faux' },
  { id: 's2-q7', title: 'Quelle part du déficit est structurelle ?' },
  { id: 's2-q8', title: 'Que faudrait-il faire pour revenir à 3 % de déficit ?' },
  { id: 's2-q9', title: 'Et si on maintenait 5 % de déficit pendant dix ans ?' },
] satisfies readonly { id: string; title: string }[]

/**
 * Sources citées dans le texte du chapitre, en plus de celles portées par les
 * tableaux et les figures. La bibliographie les recense aussi : une source
 * citée en prose reste une source du dossier.
 */
export const citedSources = [
  'banque-de-france-banque-centrale-europeenne-geopolitics',
  'eurostat-eurostat-gov-10a-main-1995-2025-et-nas',
  'eurostat-eurostat-gov-10dd-edpt1-et-bop-iip6-q', 'eurostat-gov-10a-main-2',
  'eurostat-gov-10dd-edpt1-2', 'haut-conseil-des-finances-publiques-haut-conseil-des-finan',
  'insee-calcul-par-nos-soins-a-partir-d-insee-i',
] satisfies readonly SourceId[]
