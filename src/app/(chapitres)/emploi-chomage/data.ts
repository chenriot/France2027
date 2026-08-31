// Généré par `npm run extract` depuis Temp/chiffres2027 (3).html.
// Toutes les données chiffrées du chapitre vivent ici, chacune sous sa source
// et son millésime. Voir CLAUDE.md, règles 2 à 4.
import type { ChapterMeta, SeriesSet, SourceId, Tables } from '@/lib/types'

export const meta = {
  slug: 'emploi-chomage',
  num: 'Thème 04',
  title: 'Emploi, chômage et coût du travail',
  shortTitle: 'Emploi, chômage et coût du travail',
  note: 'Deux questions, traitées séparément. <b>Pourquoi si peu de Français travaillent-ils</b> par rapport aux Allemands et aux Néerlandais — et l\'écart est-il aussi grand qu\'il en a l\'air ? Puis : <b>que peut-on faire</b> pour faire baisser le chômage et fluidifier le marché du travail, et que vaut la preuve derrière chaque levier proposé ?',
  status: 'complete',
  updated: '2026-08',
  parts: [
    { label: 'Partie 1', title: 'Pourquoi si peu de Français travaillent' },
    { label: 'Partie 2', title: 'Le chômage : ce que les chiffres mesurent réellement' },
    {
      label: 'Partie 3',
      title: 'Les leviers : ce qui marche, ce qui ne marche pas, ce qui n\'est pas prouvé',
    },
    { label: 'Partie 4', title: 'Le coût du travail et le salaire' },
  ],
  legacyAnchor: 's4',
} satisfies ChapterMeta

export const tables = {
  '2024': {
    vintage: '2024',
    sources: [
      'insee-insee-informations-rapides-n-192-aout',
      'eurostat-eurostat-enquete-forces-de-travail-202',
    ],
    columns: [
      { key: '2024', header: '2024', type: 'text', headerNumeric: false },
      {
        key: 'taux-d-emploi-15-64',
        header: 'Taux d\'emploi 15-64',
        type: 'number',
        headerNumeric: true,
      },
      { key: '15-24-ans', header: '15-24 ans', type: 'number', headerNumeric: true },
      { key: '55-64-ans', header: '55-64 ans', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Pays-Bas' },
          { v: 82.3, d: 1, u: '%' },
          { v: 76, d: 1, u: '%' },
          null,
        ],
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 77.2, d: 1, u: '%' },
          { v: 51, d: 1, u: '%' },
          { v: 75, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'UE-27' },
          { v: 70.8, d: 1, u: '%' },
          { v: 35, d: 1, u: '%' },
          { v: 65.2, d: 1, u: '%' },
        ],
        total: true,
      },
      {
        cells: [
          { t: '<b>France</b>' },
          { v: 68.8, d: 1, u: '%', strong: true },
          { v: 34.4, d: 1, u: '%', strong: true },
          { v: 60.3, d: 1, u: '%', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Italie' },
          { v: 62.2, d: 1, u: '%' },
          null,
          null,
        ],
      },
    ],
  },
  'taux-d-emploi-par-tranche-d-age-2025': {
    vintage: '2025',
    sources: ['eurostat-lfsa-ergan'],
    columns: [
      {
        key: 'taux-d-emploi-par-tranche-d-age-2025',
        header: 'Taux d\'emploi par tranche d\'âge, 2025',
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
          { t: '15-24 ans' },
          { v: 34.5, d: 1, strong: true },
          { v: 50.8, d: 1 },
          { v: 76, d: 1 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '25-54 ans' },
          { v: 83, d: 1 },
          { v: 84.9, d: 1 },
          { v: 86.7, d: 1 },
        ],
      },
      {
        cells: [
          { t: '55-59 ans' },
          { v: 78.8, d: 1 },
          { v: 83.1, d: 1 },
          { v: 81.9, d: 1 },
        ],
      },
      {
        cells: [
          { t: '60-64 ans' },
          { v: 44.4, d: 1, strong: true },
          { v: 67.6, d: 1 },
          { v: 69.5, d: 1 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '65-69 ans' },
          { v: 10.8, d: 1 },
          { v: 23.2, d: 1 },
          { v: 29.5, d: 1 },
        ],
      },
      {
        cells: [
          { t: '<b>15-64 ans</b>' },
          { v: 69.3, d: 1, strong: true },
          { v: 77.2, d: 1, strong: true },
          { v: 82.3, d: 1, strong: true },
        ],
        total: true,
      },
    ],
  },
  'taux-d-emploi-des-15-64-ans-par-sexe-2025': {
    vintage: '2025',
    sources: ['eurostat-lfsa-ergan'],
    columns: [
      {
        key: 'taux-d-emploi-des-15-64-ans-par-sexe-2025',
        header: 'Taux d\'emploi des 15-64 ans par sexe, 2025',
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
          { t: 'Hommes' },
          { v: 71.9, d: 1 },
          { v: 80.2, d: 1 },
          { v: 85.7, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Femmes' },
          { v: 66.7, d: 1 },
          { v: 74.1, d: 1 },
          { v: 78.9, d: 1 },
        ],
      },
      {
        cells: [
          { t: '<b>Écart hommes − femmes</b>' },
          { v: 5.2, d: 1, strong: true },
          { v: 6.1, d: 1 },
          { v: 6.8, d: 1 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Contribution à l\'écart total : hommes / femmes' },
          null,
          { v: 51.5, d: 1, u: '% / 47,3 %' },
          { v: 52.1, d: 1, u: '% / 47,4 %' },
        ],
        total: true,
      },
    ],
  },
  '2025-15-64-ans': {
    vintage: '2025',
    sources: ['eurostat-lfsi-emp-a-4', 'eurostat-nama-10-a10-e'],
    columns: [
      { key: '2025-15-64-ans', header: '2025, 15-64 ans', type: 'text', headerNumeric: false },
      { key: 'france', header: 'France', type: 'number', headerNumeric: true },
      { key: 'allemagne', header: 'Allemagne', type: 'number', headerNumeric: true },
      { key: 'pays-bas', header: 'Pays-Bas', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Part du temps partiel dans l\'emploi' },
          { v: 16.9, d: 1, u: '%', strong: true },
          { v: 29.4, d: 1, u: '%' },
          { v: 42.7, d: 1, u: '%', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '— femmes' },
          { v: 25.9, d: 1, u: '%' },
          { v: 48.6, d: 1, u: '%' },
          { v: 63.3, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: '— hommes' },
          { v: 8.4, d: 1, u: '%' },
          { v: 12.2, d: 1, u: '%' },
          { v: 23.9, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Durée hebdomadaire habituelle, emploi principal' },
          { v: 37, d: 1, u: 'h', strong: true },
          { v: 34.8, d: 1, u: 'h' },
          { v: 31.5, d: 1, u: 'h', strong: true },
        ],
        separator: true,
      },
      {
        cells: [
          { t: '— femmes' },
          { v: 34.8, d: 1, u: 'h' },
          { v: 31, d: 1, u: 'h' },
          { v: 27.4, d: 1, u: 'h' },
        ],
      },
      {
        cells: [
          { t: '— hommes' },
          { v: 39.1, d: 1, u: 'h' },
          { v: 38.3, d: 1, u: 'h' },
          { v: 35.3, d: 1, u: 'h' },
        ],
      },
    ],
  },
  item: {
    vintage: '2025',
    sources: ['eurostat-lfsi-emp-a-4', 'eurostat-nama-10-a10-e'],
    columns: [
      { key: 'c1', header: '', type: 'text', headerNumeric: false },
      { key: 'france', header: 'France', type: 'number', headerNumeric: true },
      { key: 'allemagne', header: 'Allemagne', type: 'number', headerNumeric: true },
      { key: 'pays-bas', header: 'Pays-Bas', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: '<b>Mesure A — comptabilité nationale, 2024</b>' },
          { t: '' },
          { t: '' },
          { t: '' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Heures par personne en emploi' },
          { v: 1512, d: 0 },
          { v: 1345, d: 0 },
          { v: 1453, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Heures par habitant de 15 à 64 ans' },
          { v: 1120, d: 0, strong: true },
          { v: 1170, d: 0, strong: true },
          { v: 1307, d: 0, strong: true },
        ],
      },
      {
        cells: [
          { t: 'Indice, France = 100' },
          { v: 100, d: 0 },
          { v: 104.4, d: 1 },
          { v: 116.7, d: 1 },
        ],
      },
      {
        cells: [
          { t: '<b>Mesure B — enquêtes forces de travail, 2024</b>' },
          { t: '' },
          { t: '' },
          { t: '' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Heures par personne en emploi' },
          { v: 1595, d: 0 },
          { v: 1539, d: 0 },
          { v: 1354, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Heures par habitant de 15 à 64 ans' },
          { v: 1105, d: 0, strong: true },
          { v: 1212, d: 0, strong: true },
          { v: 1132, d: 0, strong: true },
        ],
      },
      {
        cells: [
          { t: 'Indice, France = 100' },
          { v: 100, d: 0 },
          { v: 109.7, d: 1 },
          { v: 102.4, d: 1 },
        ],
        total: true,
      },
    ],
  },
  'temps-partiel-involontaire-2025': {
    vintage: '2025',
    sources: ['eurostat-lfsi-emp-a-4', 'eurostat-nama-10-a10-e'],
    columns: [
      {
        key: 'temps-partiel-involontaire-2025',
        header: 'Temps partiel involontaire, 2025',
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
          { t: 'En % de l\'emploi à temps partiel' },
          { v: 21.2, d: 1, u: '%', strong: true },
          { v: 5.3, d: 1, u: '%' },
          { v: 2.2, d: 1, u: '%' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Rapporté à la population de 15-64 ans' },
          { v: 2.48, d: 2, u: '%', strong: true },
          { v: 1.2, d: 2, u: '%' },
          { v: 0.77, d: 2, u: '%' },
        ],
        total: true,
      },
    ],
  },
  'taux-d-emploi-de-fin-de-carriere-2025': {
    vintage: '2025',
    sources: ['drees-drees-les-retraites-et-les-retraites-e'],
    columns: [
      {
        key: 'taux-d-emploi-de-fin-de-carriere-2025',
        header: 'Taux d\'emploi de fin de carrière, 2025',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'france', header: 'France', type: 'number', headerNumeric: true },
      { key: 'allemagne', header: 'Allemagne', type: 'number', headerNumeric: true },
      { key: 'pays-bas', header: 'Pays-Bas', type: 'number', headerNumeric: true },
      { key: 'ecart-fr-de', header: 'Écart FR/DE', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: '55-59 ans' },
          { v: 78.8, d: 1 },
          { v: 83.1, d: 1 },
          { v: 81.9, d: 1 },
          { v: -4.3, d: 1 },
        ],
      },
      {
        cells: [
          { t: '<b>60-64 ans</b>' },
          { v: 44.4, d: 1, strong: true },
          { v: 67.6, d: 1 },
          { v: 69.5, d: 1 },
          { v: -23.2, d: 1, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '65-69 ans' },
          { v: 10.8, d: 1 },
          { v: 23.2, d: 1 },
          { v: 29.5, d: 1 },
          { v: -12.4, d: 1 },
        ],
      },
      {
        cells: [
          { t: '55-64 ans' },
          { v: 61.7, d: 1 },
          { v: 75.3, d: 1 },
          { v: 75.8, d: 1 },
          { v: -13.6, d: 1 },
        ],
        total: true,
      },
    ],
  },
  'situation-des-60-64-ans-2025': {
    vintage: '2025',
    sources: ['drees-drees-les-retraites-et-les-retraites-e'],
    columns: [
      {
        key: 'situation-des-60-64-ans-2025',
        header: 'Situation des 60-64 ans, 2025',
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
          { t: 'En emploi' },
          { v: 44.4, d: 1, u: '%' },
          { v: 67.6, d: 1, u: '%' },
          { v: 69.5, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Au chômage, rapporté à la population de la tranche' },
          { v: 2.6, d: 1, u: '%' },
          { v: 2, d: 1, u: '%' },
          { v: 1.7, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: '<b>Inactifs</b>' },
          { v: 53, d: 1, u: '%', strong: true },
          { v: 30.4, d: 1, u: '%' },
          { v: 28.7, d: 1, u: '%' },
        ],
        emphasis: true,
      },
    ],
  },
  'situation-l-annee-precedant-la-liquidation-de-la-pension': {
    vintage: '2025',
    sources: ['drees-drees-les-retraites-et-les-retraites-e'],
    columns: [
      {
        key: 'situation-l-annee-precedant-la-liquidation-de-la-pension',
        header: 'Situation l\'année précédant la liquidation de la pension',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'ensemble', header: 'Ensemble', type: 'number', headerNumeric: true },
      { key: 'femmes', header: 'Femmes', type: 'number', headerNumeric: true },
      { key: 'hommes', header: 'Hommes', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'En emploi' },
          { v: 68, d: 0, u: '%' },
          { v: 63, d: 0, u: '%' },
          { v: 72, d: 0, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Chômage' },
          { v: 13, d: 0, u: '%' },
          { v: 14, d: 0, u: '%' },
          { v: 12, d: 0, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Maladie ou invalidité' },
          { v: 7, d: 0, u: '%' },
          null,
          null,
        ],
      },
      {
        cells: [
          { t: 'Hors de tout dispositif public identifié' },
          { v: 12, d: 0, u: '%' },
          null,
          null,
        ],
      },
      {
        cells: [
          { t: '<b>Non en emploi</b>' },
          { v: 32, d: 0, u: '%', strong: true },
          { v: 37, d: 0, u: '%', strong: true },
          { v: 28, d: 0, u: '%', strong: true },
        ],
        emphasis: true,
      },
    ],
  },
  'dispositif-de-cessation-anticipee': {
    vintage: '2025',
    sources: ['drees-drees-les-retraites-et-les-retraites-e'],
    columns: [
      {
        key: 'dispositif-de-cessation-anticipee',
        header: 'Dispositif de cessation anticipée',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'effectifs', header: 'Effectifs', type: 'number', headerNumeric: true },
      { key: 'fermeture', header: 'Fermeture', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Garantie de ressources (1972, 1977) — 60-64 ans, 70 % du brut' },
          { v: 418000, d: 0, u: 'au pic en 1984', strong: true },
          { v: 1983, d: 0, g: false },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Contrats de solidarité (1982)' },
          { v: 200000, d: 0, u: 'en 18 mois', approx: true },
          { t: 'fin 1983' },
        ],
      },
      {
        cells: [
          { t: 'Préretraite progressive (1982)' },
          { v: 26800, d: 0, u: 'entrées en 1995' },
          { t: 'réforme de 2003' },
        ],
      },
      {
        cells: [
          { t: 'ARPE (1995)' },
          { v: 43000, d: 0, u: 'entrées en 1998' },
          { t: 'début des années 2000' },
        ],
      },
      {
        cells: [
          { t: 'ASFNE / FNE — dès 56 ans, 65 % du brut' },
          { v: 23000, d: 0, u: 'en 1997', approx: true },
          { t: 'supprimée en décembre 2011' },
        ],
      },
      {
        cells: [
          {
            t: '<b>Dispense de recherche d\'emploi</b> — chômeurs seniors dispensés de rechercher, <b>hors statistiques du chômage</b>',
          },
          { v: 6, d: 0, u: '% des 55-64 ans', approx: true, strong: true },
          { t: '<b>1<sup>er</sup> janvier 2012</b>' },
        ],
        emphasis: true,
      },
    ],
  },
  etape: {
    vintage: '2025',
    sources: ['eurostat-lfsa-ergan-2', 'unedic-ofce-revue-de-l-ofce-n-184-2024-ma'],
    columns: [
      { key: 'etape', header: 'Étape', type: 'text', headerNumeric: false },
      { key: 'contenu', header: 'Contenu', type: 'text', headerNumeric: false },
      {
        key: 'effet-sur-le-taux-d-emploi-des-60-64',
        header: 'Effet sur le taux d\'emploi des 60-64',
        type: 'number',
        headerNumeric: true,
      },
    ],
    rows: [
      {
        cells: [
          { t: '<b>1997-1999 — Neutralisation actuarielle</b>' },
          {
            t: 'Conversion, secteur par secteur, des régimes de sortie anticipée par répartition (VUT) en prépensions <b>capitalisées et actuariellement neutres</b> : l\'accès reste possible mais <b>le report est récompensé</b>. Bascule du fonds des fonctionnaires au 1<sup>er</sup> avril 1997, de la santé au 1<sup>er</sup> janvier 1999.',
          },
          null,
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>1<sup>er</sup> janvier 2006 — Fin de l\'avantage fiscal</b>' },
          {
            t: 'La loi VPL met fin à la <b>déductibilité fiscale</b> des cotisations de sortie anticipée pour les générations nées à partir de 1950. C\'est la mesure qui rend ces dispositifs inintéressants pour l\'employeur comme pour le salarié.',
          },
          { t: '<b>+20,4 pts</b> <i>entre 2005 et 2012</i>' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>2013-2025 — Relèvement de l\'âge légal</b>' },
          {
            t: 'Âge de l\'AOW porté de 65 à <b>67 ans</b> en 2024, puis <b>indexé sur l\'espérance de vie</b> : depuis l\'accord de 2019, +3 mois pour 4,5 mois d\'espérance de vie gagnée.',
          },
          { t: '<b>+26,7 pts</b> <i>entre 2012 et 2025</i>' },
        ],
        emphasis: true,
      },
    ],
  },
  facteur: {
    vintage: '2025',
    sources: ['eurostat-lfsa-ergan-2', 'unedic-ofce-revue-de-l-ofce-n-184-2024-ma'],
    columns: [
      { key: 'facteur', header: 'Facteur', type: 'text', headerNumeric: false },
      { key: 'mesure', header: 'Mesure', type: 'number', headerNumeric: true },
      { key: 'ce-qu-il-explique', header: 'Ce qu\'il explique', type: 'text', headerNumeric: false },
    ],
    rows: [
      {
        cells: [
          { t: '<b>Formation continue après 50 ans</b>' },
          { t: 'France <b>35,5 %</b> · Allemagne 58,9 % · Pays-Bas 55,1 %' },
          {
            t: 'Le plus grand écart institutionnel identifié. <b>Mais corrélation transversale, pas causalité.</b>',
          },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Profil de rémunération' },
          { t: 'non chiffré' },
          {
            t: 'La France a une croissance continue du salaire à tous les âges pour les emplois non manuels, l\'Allemagne des salaires plats après 40-49 ans (OFCE). Le décrochage salaire/productivité peut freiner l\'embauche.',
          },
        ],
      },
      {
        cells: [
          { t: 'Discrimination à l\'embauche mesurée par testing' },
          { v: -4.6, d: 1, u: 'pts', strong: true, after: 'de taux de rappel à 51-52 ans' },
          {
            t: 'Réelle et significative pour les responsables administratifs du privé, <b>non significative</b> pour les aides-soignants. <b>Trop faible d\'un ordre de grandeur</b> pour expliquer 23 points d\'écart d\'emploi.',
          },
        ],
      },
      {
        cells: [
          { t: 'Licenciements pour inaptitude' },
          { v: 1, d: 0, u: 'licenciement sur 4 chez les 55 ans et plus' },
          { t: 'Indice d\'usure professionnelle, non chiffrée par ailleurs sur source primaire.' },
        ],
      },
    ],
  },
  'les-15-24-ans-2025-en-de-la-classe-d-age': {
    vintage: '2025',
    sources: ['eurostat-lfsa-ergan-3'],
    columns: [
      {
        key: 'les-15-24-ans-2025-en-de-la-classe-d-age',
        header: 'Les 15-24 ans, 2025, en % de la classe d\'âge',
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
          { t: 'En formation' },
          { v: 72.2, d: 1 },
          { v: 70.5, d: 1 },
          { v: 77.9, d: 1 },
        ],
      },
      {
        cells: [
          { t: '— dont <b>en emploi</b>' },
          { v: 17.8, d: 1, strong: true },
          { v: 29.4, d: 1, strong: true },
          { v: 57.8, d: 1, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '— dont hors emploi' },
          { v: 54.4, d: 1 },
          { v: 41, d: 1 },
          { v: 20.1, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Hors formation' },
          { v: 27.4, d: 1 },
          { v: 29.5, d: 1 },
          { v: 22.1, d: 1 },
        ],
      },
      {
        cells: [
          { t: '— dont en emploi' },
          { v: 16.4, d: 1 },
          { v: 21.3, d: 1 },
          { v: 18.2, d: 1 },
        ],
      },
      {
        cells: [
          { t: '— dont <b>ni en emploi ni en formation (NEET)</b>' },
          { v: 11, d: 1, strong: true },
          { v: 8.2, d: 1, strong: true },
          { v: 3.9, d: 1, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>Total en emploi</b>' },
          { v: 34.2, d: 1, strong: true },
          { v: 50.7, d: 1, strong: true },
          { v: 76, d: 1, strong: true },
        ],
        total: true,
      },
    ],
  },
  '2025-15-24-ans': {
    vintage: '2025',
    sources: [
      'eurostat-lfsi-emp-a-5', 'eurostat-eurostat-memes-jeux-que-le-tableau-ci-d',
      'depp-dg-tresor-tresor-eco-n-376-novembre-2',
      'dg-tresor-dg-tresor-tresor-eco-n-376-novembre-2',
    ],
    columns: [
      { key: '2025-15-24-ans', header: '2025, 15-24 ans', type: 'text', headerNumeric: false },
      { key: 'france', header: 'France', type: 'number', headerNumeric: true },
      { key: 'allemagne', header: 'Allemagne', type: 'number', headerNumeric: true },
      { key: 'pays-bas', header: 'Pays-Bas', type: 'number', headerNumeric: true },
      { key: 'ue-27', header: 'UE-27', type: 'number', headerNumeric: true },
      { key: 'etats-unis', header: 'États-Unis *', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Taux d\'emploi' },
          { v: 34.5, d: 1, u: '%', strong: true },
          { v: 50.8, d: 1, u: '%', strong: true },
          { v: 76, d: 1, u: '%' },
          { v: 34.5, d: 1, u: '%' },
          { v: 50, d: 1, u: '%' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Taux d\'activité' },
          { v: 43, d: 1, u: '%' },
          { v: 54.7, d: 1, u: '%' },
          { v: 83.3, d: 1, u: '%' },
          { v: 40.7, d: 1, u: '%' },
          { v: 55.6, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Taux de chômage <i>(% des actifs)</i>' },
          { v: 19.8, d: 1, u: '%' },
          { v: 7.1, d: 1, u: '%' },
          { v: 8.8, d: 1, u: '%' },
          { v: 15.2, d: 1, u: '%' },
          { v: 10, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: '<b>Ratio chômage / population</b>' },
          { v: 8.5, d: 1, u: '%', strong: true },
          { v: 3.9, d: 1, u: '%', strong: true },
          { v: 7.4, d: 1, u: '%' },
          { v: 6.2, d: 1, u: '%' },
          { v: 5.5, d: 1, u: '%' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Part en études ou formation' },
          { v: 72.2, d: 1, u: '%' },
          { v: 70.5, d: 1, u: '%' },
          { v: 77.9, d: 1, u: '%' },
          { v: 73.9, d: 1, u: '%' },
          null,
        ],
      },
      {
        cells: [
          { t: '<b>NEET 15-24</b>' },
          { v: 11, d: 1, u: '%', strong: true },
          { v: 8.2, d: 1, u: '%', strong: true },
          { v: 3.9, d: 1, u: '%' },
          { v: 9, d: 1, u: '%' },
          null,
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>NEET 20-24</b>' },
          { v: 16.2, d: 1, u: '%', strong: true },
          { v: 10, d: 1, u: '%', strong: true },
          { v: 5.6, d: 1, u: '%' },
          { v: 12.9, d: 1, u: '%' },
          null,
        ],
        emphasis: true,
      },
    ],
  },
  'recalcul-hors-apprentis-2024': {
    vintage: '2024',
    sources: [
      'eurostat-lfsi-emp-a-5', 'eurostat-eurostat-memes-jeux-que-le-tableau-ci-d',
      'depp-dg-tresor-tresor-eco-n-376-novembre-2',
      'dg-tresor-dg-tresor-tresor-eco-n-376-novembre-2',
    ],
    columns: [
      {
        key: 'recalcul-hors-apprentis-2024',
        header: 'Recalcul hors apprentis, 2024',
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
          { t: 'Taux d\'emploi 15-24' },
          { v: 34.4, d: 1, u: '%' },
          { v: 51, d: 1, u: '%' },
          { v: 16.6, d: 1, u: 'pts' },
        ],
      },
      {
        cells: [
          { t: 'dont apprentis et alternants' },
          { v: 10, d: 1, u: 'pts' },
          { v: 12.4, d: 1, u: 'pts' },
          { v: 2.4, d: 1, u: 'pts' },
        ],
      },
      {
        cells: [
          { t: '<b>Taux d\'emploi hors apprentis</b>' },
          { v: 24.4, d: 1, u: '%', strong: true },
          { v: 38.6, d: 1, u: '%', strong: true },
          { v: 14.2, d: 1, u: 'pts', strong: true },
        ],
        emphasis: true,
      },
    ],
  },
  'le-test-decisif': {
    vintage: '2024',
    sources: [
      'eurostat-lfsi-emp-a-5', 'eurostat-eurostat-memes-jeux-que-le-tableau-ci-d',
      'depp-dg-tresor-tresor-eco-n-376-novembre-2',
      'dg-tresor-dg-tresor-tresor-eco-n-376-novembre-2',
    ],
    columns: [
      { key: 'le-test-decisif', header: 'Le test décisif', type: 'text', headerNumeric: false },
      { key: '2017', header: '2017', type: 'number', headerNumeric: true },
      { key: '2024', header: '2024', type: 'number', headerNumeric: true },
      { key: 'variation', header: 'Variation', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Taux d\'emploi 15-24, France' },
          { v: 29.2, d: 1, u: '%' },
          { v: 34.4, d: 1, u: '%' },
          { v: 5.2, d: 1, u: 'pts', sign: true },
        ],
      },
      {
        cells: [
          { t: 'Taux d\'emploi 15-24, Allemagne' },
          { v: 45.9, d: 1, u: '%' },
          { v: 51, d: 1, u: '%' },
          { v: 5.1, d: 1, u: 'pts', sign: true },
        ],
      },
      {
        cells: [
          { t: '<b>Écart France / Allemagne</b>' },
          { v: 16.7, d: 1, u: 'pts', strong: true },
          { v: 16.6, d: 1, u: 'pts', strong: true },
          { v: -0.1, d: 1, u: 'pt', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Apprentis, part de la classe d\'âge, France' },
          { v: 5.4, d: 1, u: 'pts', approx: true },
          { v: 10, d: 1, u: 'à 11,2 pts' },
          { v: 4.6, d: 1, u: 'à +5,8 pts', sign: true },
        ],
      },
    ],
  },
  'le-controle-par-le-neet-immunise-contre-l-artefact': {
    vintage: '2025',
    sources: [
      'eurostat-lfsi-emp-a-5', 'eurostat-eurostat-memes-jeux-que-le-tableau-ci-d',
      'depp-dg-tresor-tresor-eco-n-376-novembre-2',
      'dg-tresor-dg-tresor-tresor-eco-n-376-novembre-2',
    ],
    columns: [
      {
        key: 'le-controle-par-le-neet-immunise-contre-l-artefact',
        header: 'Le contrôle par le NEET, immunisé contre l\'artefact',
        type: 'text',
        headerNumeric: false,
      },
      { key: '2017', header: '2017', type: 'number', headerNumeric: true },
      { key: '2025', header: '2025', type: 'number', headerNumeric: true },
      { key: 'variation', header: 'Variation', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'NEET 15-24, France' },
          { v: 11.4, d: 1, u: '%' },
          { v: 11, d: 1, u: '%' },
          { v: -0.4, d: 1, u: 'pt', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'NEET 15-24, Allemagne' },
          { v: 6.3, d: 1, u: '%' },
          { v: 8.2, d: 1, u: '%' },
          { v: 1.9, d: 1, u: 'pt', sign: true },
        ],
      },
      {
        cells: [
          { t: 'NEET 20-24, France' },
          { v: 17.5, d: 1, u: '%' },
          { v: 16.2, d: 1, u: '%' },
          { v: -1.3, d: 1, u: 'pt', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'NEET 20-24, Allemagne' },
          { v: 9.1, d: 1, u: '%' },
          { v: 10, d: 1, u: '%' },
          { v: 0.9, d: 1, u: 'pt', sign: true },
        ],
      },
    ],
  },
  'stock-d-apprentis-france-31-decembre-2024': {
    vintage: '2024',
    sources: [
      'eurostat-lfsi-emp-a-5', 'eurostat-eurostat-memes-jeux-que-le-tableau-ci-d',
      'depp-dg-tresor-tresor-eco-n-376-novembre-2',
      'dg-tresor-dg-tresor-tresor-eco-n-376-novembre-2',
    ],
    columns: [
      {
        key: 'stock-d-apprentis-france-31-decembre-2024',
        header: 'Stock d\'apprentis, France, 31 décembre 2024',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'effectif', header: 'Effectif', type: 'number', headerNumeric: true },
      { key: 'part', header: 'Part', type: 'number', headerNumeric: true },
      {
        key: 'evolution-2023-2024',
        header: 'Évolution 2023-2024',
        type: 'number',
        headerNumeric: true,
      },
    ],
    rows: [
      {
        cells: [
          { t: '<b>Secondaire</b>' },
          { v: 392035, d: 0, strong: true },
          { v: 37.3, d: 1, u: '%', strong: true },
          { v: 1.7, d: 1, u: '%', sign: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '— dont CAP' },
          { v: 182804, d: 0 },
          { v: 17.4, d: 1, u: '%' },
          { v: -2.6, d: 1, u: '%', strong: true },
        ],
      },
      {
        cells: [
          { t: '— dont baccalauréat professionnel' },
          { v: 71408, d: 0 },
          { v: 6.8, d: 1, u: '%' },
          { v: -1.1, d: 1, u: '%', strong: true },
        ],
      },
      {
        cells: [
          { t: '— dont brevet professionnel' },
          { v: 40409, d: 0 },
          { v: 3.8, d: 1, u: '%' },
          { v: -2.9, d: 1, u: '%', strong: true },
        ],
      },
      {
        cells: [
          { t: '<b>Supérieur (bac+2 et plus)</b>' },
          { v: 657930, d: 0, strong: true },
          { v: 62.7, d: 1, u: '%', strong: true },
          { v: 3.5, d: 1, u: '%', sign: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '— dont BTS' },
          { v: 187500, d: 0 },
          { v: 17.9, d: 1, u: '%' },
          { v: -1.2, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: '— dont niveaux master et ingénieur' },
          { v: 253262, d: 0 },
          { v: 24.1, d: 1, u: '%' },
          { v: 5.8, d: 1, u: '%', sign: true, strong: true },
        ],
      },
      {
        cells: [
          { t: 'Total' },
          { v: 1049965, d: 0 },
          { v: 100, d: 0, u: '%' },
          { v: 2.8, d: 1, u: '%', sign: true },
        ],
        total: true,
      },
    ],
  },
  'le-cout-de-l-apprentissage-2023': {
    vintage: '2023',
    sources: [
      'eurostat-lfsi-emp-a-5', 'eurostat-eurostat-memes-jeux-que-le-tableau-ci-d',
      'depp-dg-tresor-tresor-eco-n-376-novembre-2',
      'dg-tresor-dg-tresor-tresor-eco-n-376-novembre-2',
    ],
    columns: [
      {
        key: 'le-cout-de-l-apprentissage-2023',
        header: 'Le coût de l\'apprentissage, 2023',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'france', header: 'France', type: 'number', headerNumeric: true },
      { key: 'allemagne', header: 'Allemagne', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: '<b>Coût public par apprenti et par an</b>' },
          { v: 14700, d: 0, u: '€', strong: true },
          { v: 4700, d: 0, u: '€', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '— dont subvention à l\'employeur' },
          { v: 4200, d: 0, u: '€' },
          { v: 76, d: 0, u: '€' },
        ],
      },
      {
        cells: [
          { t: '— dont coût de formation' },
          { v: 8381, d: 0, u: '€' },
          { v: 4350, d: 0, u: '€' },
        ],
      },
      {
        cells: [
          { t: 'Dépense publique totale, apprentissage' },
          { v: 14.9, d: 1, u: 'Md€ (6,1 Md€ en 2018)' },
          null,
        ],
        separator: true,
      },
      {
        cells: [
          { t: '— dont financement des CFA' },
          { v: 8.5, d: 1, u: 'Md€' },
          null,
        ],
      },
      {
        cells: [
          { t: '— dont aides aux employeurs' },
          { v: 4.3, d: 1, u: 'Md€' },
          null,
        ],
      },
      {
        cells: [
          { t: 'Dépenses de tous les dispositifs d\'emploi des jeunes, 2023' },
          { v: 7.3, d: 1, u: 'Md€, soit 2 × le niveau de 2017' },
          null,
        ],
        total: true,
      },
    ],
  },
  'allemagne-formation-duale': {
    vintage: '2026',
    sources: [
      'eurostat-lfsi-emp-a-5', 'eurostat-eurostat-memes-jeux-que-le-tableau-ci-d',
      'depp-dg-tresor-tresor-eco-n-376-novembre-2',
      'dg-tresor-dg-tresor-tresor-eco-n-376-novembre-2',
    ],
    columns: [
      {
        key: 'allemagne-formation-duale',
        header: 'Allemagne, formation duale',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'valeur', header: 'Valeur', type: 'number', headerNumeric: true },
      { key: 'annee', header: 'Année', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Taux de reprise en emploi après l\'apprentissage <i>(Übernahmequote)</i>' },
          { v: 79, d: 0, u: '%', strong: true, after: '(61 % en 2010)' },
          { v: 2024, d: 0, g: false },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Part d\'une classe d\'âge entrant en apprentissage, jeunes de nationalité allemande' },
          { v: 52.8, d: 1, u: '% (54,8 % en 2023)' },
          { v: 2024, d: 0, g: false },
        ],
      },
      {
        cells: [
          { t: '<b>Offre de places d\'apprentissage</b>' },
          { v: 530300, d: 0, u: '(−4,6 %)', strong: true },
          { v: 2025, d: 0, g: false },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>Demande des jeunes</b>' },
          { v: 560300, d: 0, u: '(+0,7 %)', strong: true },
          { v: 2025, d: 0, g: false },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Candidats non placés' },
          { v: 84400, d: 0, u: '(+19,9 %)' },
          { v: 2025, d: 0, g: false },
        ],
      },
      {
        cells: [
          { t: 'Nouveaux contrats, évolution depuis 2010' },
          { v: -14, d: 0, u: '%' },
          { t: '2010-2024' },
        ],
      },
      {
        cells: [
          { t: 'Entrants dans le secteur de transition <i>(Übergangsbereich)</i>' },
          { t: '262 210, 4<sup>e</sup> hausse consécutive' },
          { v: 2025, d: 0, g: false },
        ],
      },
      {
        cells: [
          { t: 'Rémunération conventionnelle moyenne de l\'apprenti' },
          { v: 1209, d: 0, u: '€ brut/mois' },
          { v: 2025, d: 0, g: false },
        ],
        separator: true,
      },
      {
        cells: [
          { t: 'Rémunération minimale légale, 1<sup>re</sup> année' },
          { v: 724, d: 0, u: '€/mois' },
          { v: 2026, d: 0, g: false },
        ],
      },
    ],
  },
  'salaire-minimum-rapporte-au-salaire-median-des-temps-plein': {
    vintage: '2025',
    sources: [
      'eurostat-lfsi-emp-a-5', 'eurostat-eurostat-memes-jeux-que-le-tableau-ci-d',
      'depp-dg-tresor-tresor-eco-n-376-novembre-2',
      'dg-tresor-dg-tresor-tresor-eco-n-376-novembre-2',
    ],
    columns: [
      {
        key: 'salaire-minimum-rapporte-au-salaire-median-des-temps-plein',
        header: 'Salaire minimum rapporté au salaire médian des temps pleins',
        type: 'text',
        headerNumeric: false,
      },
      { key: '2024', header: '2024', type: 'number', headerNumeric: true },
      { key: '2025', header: '2025', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: '<b>France</b>' },
          { v: 50.1, d: 1, u: '%' },
          { v: 50.8, d: 1, u: '%', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>Allemagne</b>' },
          { v: 49.9, d: 1, u: '%' },
          { v: 49.2, d: 1, u: '%', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Pays-Bas' },
          { v: 60.8, d: 1, u: '%' },
          { v: 58.5, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'États-Unis' },
          { v: 25, d: 1, u: '%' },
          { v: 24.1, d: 1, u: '%' },
        ],
      },
    ],
  },
  'statut-des-15-24-ans-en-emploi-france-2024': {
    vintage: '2024',
    sources: [
      'eurostat-lfsi-emp-a-5', 'eurostat-eurostat-memes-jeux-que-le-tableau-ci-d',
      'depp-dg-tresor-tresor-eco-n-376-novembre-2',
      'dg-tresor-dg-tresor-tresor-eco-n-376-novembre-2',
    ],
    columns: [
      {
        key: 'statut-des-15-24-ans-en-emploi-france-2024',
        header: 'Statut des 15-24 ans en emploi, France 2024',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'part', header: 'Part', type: 'number', headerNumeric: true },
      { key: '25-ans-et-plus', header: '25 ans et plus', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'CDI' },
          { v: 41.6, d: 1, u: '%' },
          null,
        ],
      },
      {
        cells: [
          { t: 'CDD' },
          { v: 18.6, d: 1, u: '%', strong: true },
          { v: 6.5, d: 1, u: '%' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Intérim' },
          { v: 5.2, d: 1, u: '%', strong: true },
          { v: 1.6, d: 1, u: '%' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Apprentissage et alternance' },
          { v: 29.2, d: 1, u: '%' },
          null,
        ],
      },
      {
        cells: [
          { t: 'Total CDD + intérim' },
          { v: 23.8, d: 1, u: '%' },
          { v: 8.1, d: 1, u: '%' },
        ],
        total: true,
      },
    ],
  },
  dispositif: {
    vintage: '2026',
    sources: ['euwals-euwals-van-vuuren-wolthoff-de-econom'],
    columns: [
      { key: 'dispositif', header: 'Dispositif', type: 'text', headerNumeric: false },
      { key: 'pays', header: 'Pays', type: 'text', headerNumeric: false },
      { key: 'ce-qu-il-fait', header: 'Ce qu\'il fait', type: 'text', headerNumeric: false },
      { key: 'ce-qui-est-mesure', header: 'Ce qui est mesuré', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: '<b>Neutralité actuarielle des sorties anticipées</b>' },
          { t: 'Pays-Bas, 1997-1999' },
          { t: 'Le report du départ est <b>récompensé</b> ; rester un an de plus rapporte' },
          {
            t: '<b>Évaluation causale</b> par différences de différences entre secteurs. L\'effet-prix domine l\'effet-revenu',
          },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>Fin de la déductibilité fiscale des préretraites</b>' },
          { t: 'Pays-Bas, 2006' },
          { t: 'Rend les dispositifs de sortie inintéressants pour l\'employeur comme pour le salarié' },
          {
            t: '<b>+20,4 pts</b> d\'emploi des 60-64 entre 2005 et 2012, <b>avant</b> tout relèvement de l\'âge légal <i>(lecture de série, non causale)</i>',
          },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>Indexation de l\'âge légal sur l\'espérance de vie</b>' },
          { t: 'Pays-Bas, 2013 →' },
          {
            v: 3,
            d: 0,
            u: 'mois d\'âge légal pour 4,5 mois d\'espérance de vie gagnée. Retire la question du calendrier politique',
            sign: true,
          },
          { t: '+26,7 pts entre 2012 et 2025 <i>(lecture de série)</i>' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>Système dual</b>' },
          { t: 'Allemagne' },
          {
            t: 'L\'apprenti a un contrat de travail à temps quasi complet ; 476 000 nouveaux contrats en 2025',
          },
          {
            t: 'Taux de reprise en emploi de <b>79 %</b> en 2024, record historique. <b>Mais le système se contracte</b> : l\'offre de places recule de 4,6 %, et pour la 2<sup>e</sup> année la demande dépasse l\'offre',
          },
        ],
      },
      {
        cells: [
          { t: '<b>Salaire minimum dégressif par âge</b>' },
          { t: 'Pays-Bas' },
          {
            v: 30,
            d: 0,
            u: '% du taux adulte à 15 ans, 50 % à 18 ans, 100 % à 21 ans. Rend viables les emplois d\'appoint étudiants',
          },
          {
            t: '<b>Évaluation causale</b> du relèvement de 2019 : salaires +3 à 5 %, <b>« quasiment aucune influence »</b> sur la participation à court terme',
          },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>Formation continue des seniors</b>' },
          { t: 'Allemagne, Pays-Bas' },
          {
            t: '58,9 % et 55,1 % des plus de 50 ans en formation liée à l\'emploi, contre <b>35,5 %</b> en France',
          },
          { t: 'Corrélation forte avec le taux d\'emploi des seniors. <b>Aucune évaluation causale</b>' },
        ],
      },
      {
        cells: [
          { t: 'Voie professionnelle scolaire avec stages (MBO-BOL)' },
          { t: 'Pays-Bas' },
          {
            t: '330 000 étudiants, 69 % de l\'enseignement professionnel — la voie majoritaire n\'est <b>pas</b> l\'apprentissage',
          },
          { t: 'Taux de NEET de 3,9 %, le plus bas d\'Europe <i>(descriptif)</i>' },
        ],
      },
      {
        cells: [
          { t: 'Startersbeurs (bourse de démarrage)' },
          { t: 'Pays-Bas' },
          {
            v: 6,
            d: 0,
            u: 'mois, 32 h/semaine, ≈ 700 € versés par l\'entreprise, statut d\'indemnité et non de salaire',
          },
          {
            t: '<b>Aucune évaluation avec contrefactuel.</b> Le chiffre « la moitié a un emploi ensuite » circule sans groupe de contrôle',
          },
        ],
        missing: true,
      },
    ],
  },
  'population-des-15-64-ans-t2-2026': {
    vintage: '2026',
    sources: [
      'insee-insee-informations-rapides-n-192-aout',
      'eurostat-eurostat-enquete-forces-de-travail-202',
    ],
    columns: [
      {
        key: 'population-des-15-64-ans-t2-2026',
        header: 'Population des 15-64 ans, T2 2026',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'des-15-64-ans', header: '% des 15-64 ans', type: 'number', headerNumeric: true },
      { key: 'effectif-indicatif', header: 'Effectif indicatif', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'En emploi' },
          { v: 69, d: 1, strong: true },
          { v: 28.8, d: 1, u: 'M', approx: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '— dont en sous-emploi <i>(sous-ensemble de l\'emploi)</i>' },
          { v: 3, d: 1, approx: true },
          { v: 1.3, d: 1, u: 'M', approx: true },
        ],
      },
      {
        cells: [
          { t: 'Chômeurs au sens du BIT' },
          { v: 6.4, d: 1, strong: true },
          { v: 2.7, d: 1, u: 'M', approx: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Halo autour du chômage' },
          { v: 4.4, d: 1, strong: true },
          { v: 1.865, d: 3, u: 'M' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Autres inactifs (étudiants, retraités précoces, personnes ne souhaitant pas travailler)' },
          { v: 20.2, d: 1 },
          { v: 8.4, d: 1, u: 'M', approx: true },
        ],
      },
      {
        cells: [
          { t: 'Total' },
          { v: 100, d: 1 },
          { v: 41.8, d: 1, u: 'M', approx: true },
        ],
        total: true,
      },
    ],
  },
  'les-trois-ratios-a-ne-pas-confondre': {
    vintage: '2026',
    sources: [
      'insee-insee-informations-rapides-n-192-aout',
      'eurostat-eurostat-enquete-forces-de-travail-202',
    ],
    columns: [
      {
        key: 'les-trois-ratios-a-ne-pas-confondre',
        header: 'Les trois ratios à ne pas confondre',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'numerateur', header: 'Numérateur', type: 'text', headerNumeric: false },
      { key: 'denominateur', header: 'Dénominateur', type: 'text', headerNumeric: false },
      { key: 't2-2026', header: 'T2 2026', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Taux de chômage' },
          { t: 'Chômeurs BIT' },
          { t: 'Population active' },
          { v: 8.3, d: 1, u: '%', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Taux d\'emploi' },
          { t: 'Personnes en emploi' },
          { t: 'Population 15-64' },
          { v: 69, d: 1, u: '%', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Taux d\'activité' },
          { t: 'Actifs' },
          { t: 'Population 15-64' },
          { v: 75.4, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Part du halo' },
          { t: 'Halo' },
          { t: 'Population 15-64' },
          { v: 4.4, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Taux de sous-emploi' },
          { t: 'Sous-employés' },
          { t: 'Personnes en emploi' },
          { v: 4.4, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Taux d\'emploi en équivalent temps plein' },
          { t: 'Emploi en EQTP' },
          { t: 'Population 15-64' },
          { v: 64.2, d: 1, u: '%' },
        ],
        total: true,
      },
    ],
  },
  't2-2026': {
    vintage: '2026',
    sources: ['insee-france-travail-dares-statistiques-du'],
    columns: [
      { key: 't2-2026', header: 'T2 2026', type: 'text', headerNumeric: false },
      { key: 'effectif', header: 'Effectif', type: 'number', headerNumeric: true },
      {
        key: 'ecart-avec-le-chomage-bit',
        header: 'Écart avec le chômage BIT',
        type: 'number',
        headerNumeric: true,
      },
    ],
    rows: [
      {
        cells: [
          { t: '<b>Chômeurs au sens du BIT</b> (Insee)' },
          { v: 2677000, d: 0, strong: true },
          { t: 'référence' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Catégorie A — sans emploi, tenu de rechercher' },
          { v: 3323000, d: 0 },
          { t: '+ 0,65 M' },
        ],
      },
      {
        cells: [
          { t: 'Catégories A + B + C — avec activité réduite' },
          { v: 5801500, d: 0 },
          { t: '+ 3,12 M' },
        ],
      },
      {
        cells: [
          { t: 'Catégories A à E — dont dispensés de recherche et en emploi aidé' },
          { v: 6532400, d: 0 },
          { t: '+ 3,86 M' },
        ],
      },
      {
        cells: [
          { t: 'Toutes catégories, F et G comprises' },
          { v: 7520700, d: 0, approx: true },
          { t: '+ 4,84 M' },
        ],
      },
    ],
  },
  'france-moyenne-annuelle-2025': {
    vintage: '2025',
    sources: ['eurostat-une-ltu-a'],
    columns: [
      {
        key: 'france-moyenne-annuelle-2025',
        header: 'France, moyenne annuelle 2025',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'effectif', header: 'Effectif', type: 'number', headerNumeric: true },
      { key: 'part-des-chomeurs', header: 'Part des chômeurs', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Moins d\'un an' },
          { v: 1885000, d: 0 },
          { v: 76.9, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { v: 1, d: 0, u: 'à 2 ans' },
          { v: 334000, d: 0 },
          { v: 13.6, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { v: 2, d: 0, u: 'ans et plus' },
          { v: 232000, d: 0 },
          { v: 9.5, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: '<b>dont 1 an et plus — chômage de longue durée</b>' },
          { v: 566000, d: 0, strong: true },
          { v: 23.1, d: 1, u: '%', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Total chômeurs 2025' },
          { v: 2451000, d: 0 },
          { v: 100, d: 0, u: '%' },
        ],
        total: true,
      },
    ],
  },
  'taux-de-chomage': {
    vintage: '2025',
    sources: ['eurostat-une-ltu-a'],
    columns: [
      { key: 'taux-de-chomage', header: 'Taux de chômage', type: 'text', headerNumeric: false },
      { key: 'valeur', header: 'Valeur', type: 'number', headerNumeric: true },
      { key: 'champ', header: 'Champ', type: 'text', headerNumeric: false },
    ],
    rows: [
      {
        cells: [
          { t: '15-24 ans' },
          { v: 21.6, d: 1, u: '%' },
          { t: 'T2 2026, Insee' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '25-49 ans' },
          { v: 7.5, d: 1, u: '%' },
          { t: 'T2 2026' },
        ],
      },
      {
        cells: [
          { v: 50, d: 0, u: 'ans et plus' },
          { v: 5.5, d: 1, u: '%' },
          { t: 'T2 2026' },
        ],
      },
      {
        cells: [
          { t: 'Sans diplôme ou brevet, sortis de formation depuis 1 à 4 ans' },
          { v: 42.4, d: 1, u: '%', strong: true },
          { t: 'Insee, <i>Formations et emploi</i> 2025, données 2023' },
        ],
        separator: true,
      },
      {
        cells: [
          { t: 'CAP-BEP, même champ' },
          { v: 17.5, d: 1, u: '%' },
          { t: 'idem' },
        ],
      },
      {
        cells: [
          { t: 'Baccalauréat, même champ' },
          { v: 18.2, d: 1, u: '%' },
          { t: 'idem' },
        ],
      },
      {
        cells: [
          { t: 'Enseignement supérieur, même champ' },
          { v: 6.8, d: 1, u: 'à 11,0 %' },
          { t: 'idem' },
        ],
      },
      {
        cells: [
          { t: 'France métropolitaine' },
          { v: 7.9, d: 1, u: '%' },
          { t: 'T1 2026, taux localisés' },
        ],
        separator: true,
      },
      {
        cells: [
          { t: 'Guyane — maximum' },
          { v: 19.3, d: 1, u: '%' },
          { t: 'idem' },
        ],
      },
      {
        cells: [
          { t: 'Cantal — minimum départemental' },
          { v: 4.7, d: 1, u: '%' },
          { t: 'idem' },
        ],
      },
    ],
  },
  flux: {
    vintage: '2025',
    sources: ['eurostat-une-ltu-a'],
    columns: [
      { key: 'flux', header: 'Flux', type: 'text', headerNumeric: false },
      { key: 'valeur', header: 'Valeur', type: 'number', headerNumeric: true },
      { key: 'source', header: 'Source', type: 'text', headerNumeric: false },
    ],
    rows: [
      {
        cells: [
          { t: 'Nouvelles entrées en indemnisation' },
          { v: 549000, d: 0, u: '/ trimestre' },
          { t: 'Unédic, T3 2025' },
        ],
      },
      {
        cells: [
          { t: 'Personnes arrivant en fin de droits' },
          { v: 57000, d: 0, u: '/ mois', approx: true },
          { t: 'DG Trésor, oct. 2025, données MiDAS' },
        ],
      },
      {
        cells: [
          { t: 'Part des allocataires travaillant une partie du mois' },
          { v: 51, d: 0, u: '%' },
          { t: 'Unédic, T3 2025' },
        ],
      },
      {
        cells: [
          { t: 'Allocataires ayant retravaillé au 4<sup>e</sup> mois' },
          { v: 50, d: 0, u: '%', approx: true },
          { t: 'Unédic' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Part des premières reprises d\'emploi constituant une <b>sortie durable</b>' },
          { v: 1, d: 0, u: 'sur 4', strong: true },
          { t: 'Unédic' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Part des emplois retrouvés durant 6 mois ou plus' },
          { v: 1, d: 0, u: 'sur 3' },
          { t: 'Unédic' },
        ],
      },
    ],
  },
  'emplois-vacants-france': {
    vintage: '2026',
    sources: ['eurostat-dares-enquete-acemo-definition-eurosta'],
    columns: [
      {
        key: 'emplois-vacants-france',
        header: 'Emplois vacants, France',
        type: 'text',
        headerNumeric: false,
      },
      { key: 't2-2025', header: 'T2 2025', type: 'number', headerNumeric: true },
      { key: 't2-2026', header: 'T2 2026', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Nombre d\'emplois vacants' },
          { v: 488000, d: 0 },
          { v: 433600, d: 0, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Taux de vacance' },
          { v: 2.5, d: 1, u: '%' },
          { v: 2.2, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Offres abandonnées faute de candidat adéquat, 2024' },
          { t: '151 000, soit <b>4,9 % des offres</b>', cs: 2 },
        ],
        separator: true,
      },
      {
        cells: [
          { t: 'dont contrats durables (CDI ou plus de 6 mois)' },
          { v: 99000, d: 0, cs: 2 },
        ],
      },
      {
        cells: [
          { t: 'Offres finalement pourvues' },
          { v: 83.6, d: 1, u: '%', cs: 2 },
        ],
      },
    ],
  },
  'duree-moyenne-d-une-procedure': {
    vintage: '2022',
    sources: ['france-france-ministere-de-la-justice-sdse'],
    columns: [
      {
        key: 'duree-moyenne-d-une-procedure',
        header: 'Durée moyenne d\'une procédure',
        type: 'text',
        headerNumeric: false,
      },
      { key: '2012', header: '2012', type: 'number', headerNumeric: true },
      { key: '2022', header: '2022', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Première instance, au fond' },
          { v: 15.2, d: 1, u: 'mois' },
          { v: 17.6, d: 1, u: 'mois', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Parcours avec <b>départage</b> <i>(partage des voix entre conseillers)</i>' },
          { v: 29.2, d: 1, u: 'mois' },
          { v: 34.9, d: 1, u: 'mois', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Appel' },
          { v: 15.6, d: 1, u: 'mois' },
          { t: '<b>26,7 mois</b> <i>(+71 %)</i>' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Cassation' },
          { v: 16.5, d: 1, u: 'mois' },
          { v: 18.8, d: 1, u: 'mois' },
        ],
      },
      {
        cells: [
          { t: 'Référés' },
          { v: 1.9, d: 1, u: 'mois' },
          { v: 2.4, d: 1, u: 'mois' },
        ],
      },
    ],
  },
  'duree-cumulee-d-un-litige-mene-a-son-terme-bareme-2022': {
    vintage: '2022',
    sources: ['france-france-ministere-de-la-justice-sdse'],
    columns: [
      {
        key: 'duree-cumulee-d-un-litige-mene-a-son-terme-bareme-2022',
        header: 'Durée cumulée d\'un litige mené à son terme, barème 2022',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'duree', header: 'Durée', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Première instance + appel' },
          { t: '44,3 mois — <b>3 ans 8 mois</b>' },
        ],
      },
      {
        cells: [
          { t: 'Départage + appel' },
          { t: '61,6 mois — <b>5 ans 1 mois</b>' },
        ],
      },
      {
        cells: [
          { t: 'Départage + appel + cassation' },
          { t: '80,4 mois — <b>6 ans 8 mois</b>' },
        ],
        total: true,
      },
    ],
  },
  'indicateur-d-incertitude': {
    vintage: '2024',
    sources: ['france-france-ministere-de-la-justice-sdse'],
    columns: [
      {
        key: 'indicateur-d-incertitude',
        header: 'Indicateur d\'incertitude',
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
          { t: '<b>Délai dont dispose le salarié pour contester</b>' },
          { v: 12, d: 0, u: 'mois', strong: true },
          { v: 3, d: 0, u: 'semaines', strong: true },
          { t: 'sans objet' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>Moment du contrôle du motif</b>' },
          { t: 'Postérieur' },
          { t: 'Postérieur' },
          { t: '<b>Préalable</b>' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Qui juge en première instance' },
          { v: 4, d: 0, u: 'non-professionnels', strong: true, after: '(2 employeurs, 2 salariés)' },
          { v: 1, d: 0, u: 'juge professionnel qui préside + 2 assesseurs' },
          { v: 1, d: 0, u: 'magistrat professionnel' },
        ],
      },
      {
        cells: [
          { t: 'Durée en première instance' },
          { v: 17.6, d: 1, u: 'mois', strong: true },
          { v: 3, d: 0, u: 'mois', approx: true },
          { v: 6, d: 0, u: 'sem. (UWV) / 12 sem. (juge)' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Part des affaires réglées par accord' },
          { t: 'non publié' },
          { v: 80, d: 0, u: '%', approx: true },
          { v: 89, d: 0, u: '%', strong: true, after: 'des ruptures' },
        ],
      },
      {
        cells: [
          { t: '<b>Prévisibilité du montant</b>' },
          { t: '<b>Fourchette</b> barémée, écartée en cas de nullité' },
          { t: 'Usage négocié de 0,5 mois par année' },
          { t: '<b>Formule</b> : 1/3 de mois par année, plafond 102 000 €' },
        ],
        emphasis: true,
      },
    ],
  },
  'voie-de-rupture-aux-pays-bas': {
    vintage: '2019',
    sources: ['france-france-ministere-de-la-justice-sdse'],
    columns: [
      {
        key: 'voie-de-rupture-aux-pays-bas',
        header: 'Voie de rupture aux Pays-Bas',
        type: 'text',
        headerNumeric: false,
      },
      { key: '2011-2012', header: '2011-2012', type: 'number', headerNumeric: true },
      { key: '2018-2019', header: '2018-2019', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: '<b>Accord amiable</b> <i>(vaststellingsovereenkomst)</i>' },
          { v: 61, d: 0, u: '%' },
          { v: 89, d: 0, u: '%', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Autorisation de l\'UWV' },
          { v: 24, d: 0, u: '%' },
          { v: 7, d: 0, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Décision du juge' },
          { v: 9, d: 0, u: '%' },
          { v: 2, d: 0, u: '%' },
        ],
      },
    ],
  },
  'france-ordres-de-grandeur': {
    vintage: '2024',
    sources: ['france-france-ministere-de-la-justice-sdse'],
    columns: [
      {
        key: 'france-ordres-de-grandeur',
        header: 'France, ordres de grandeur',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'valeur', header: 'Valeur', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Fins de CDI, 2023' },
          { v: 4437700, d: 0 },
        ],
      },
      {
        cells: [
          { t: '— dont licenciements (économiques et non économiques)' },
          { v: 612000, d: 0 },
        ],
      },
      {
        cells: [
          { t: '— dont ruptures conventionnelles' },
          { v: 515200, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Affaires prud\'homales nouvelles au fond, 2022' },
          { v: 84051, d: 0 },
        ],
      },
      {
        cells: [
          { t: '<b>Rapport, en ordre de grandeur</b>' },
          { v: 1, d: 0, u: 'licenciement sur 7 à 8', approx: true, strong: true },
        ],
        emphasis: true,
      },
    ],
  },
  'parametres-au-1er-avril-2025': {
    vintage: '2025',
    sources: [
      'unedic-unedic-convention-du-15-novembre-2024-e',
      'unedic-unedic-tableau-de-donnees-comparatives',
      'dg-tresor-dg-tresor-octobre-2025-cohorte-des-per',
    ],
    columns: [
      {
        key: 'parametres-au-1er-avril-2025',
        header: 'Paramètres au 1<sup>er</sup> avril 2025',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'valeur', header: 'Valeur', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Affiliation minimale' },
          { v: 6, d: 0, u: 'mois sur les 24 derniers (36 mois à partir de 55 ans)' },
        ],
      },
      {
        cells: [
          { t: 'Durée maximale, moins de 55 ans' },
          { v: 18, d: 0, u: 'mois', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Durée maximale, 55-56 ans' },
          { v: 22.5, d: 1, u: 'mois' },
        ],
      },
      {
        cells: [
          { t: 'Durée maximale, 57 ans et plus' },
          { v: 27, d: 0, u: 'mois' },
        ],
      },
      {
        cells: [
          { t: 'Formule' },
          { v: 57, d: 0, u: '% du salaire journalier de référence, ou 40,4 % + 13,11 €/jour' },
        ],
        separator: true,
      },
      {
        cells: [
          { t: 'Dégressivité' },
          { t: '−30 % au 7<sup>e</sup> mois au-delà de ≈ 4 500 € brut/mois' },
        ],
      },
      {
        cells: [
          { t: 'Allocation nette mensuelle <b>moyenne</b>' },
          { v: 1048, d: 0, u: '€', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Allocataires pris en charge / indemnisés' },
          { v: 3.8, d: 1, u: 'M / 2,6 M' },
        ],
      },
      {
        cells: [
          { t: 'Dépenses d\'allocation 2025' },
          { v: 37, d: 1, u: 'Md€ (dépenses totales 45,2 Md€)' },
        ],
      },
      {
        cells: [
          { t: 'Dette nette de l\'Unédic fin 2025' },
          { v: -59.8, d: 1, u: 'Md€' },
        ],
      },
    ],
  },
  'assurance-chomage': {
    vintage: '2025',
    sources: [
      'unedic-unedic-convention-du-15-novembre-2024-e',
      'unedic-unedic-tableau-de-donnees-comparatives',
      'dg-tresor-dg-tresor-octobre-2025-cohorte-des-per',
    ],
    columns: [
      { key: 'assurance-chomage', header: 'Assurance chômage', type: 'text', headerNumeric: false },
      {
        key: 'affiliation-minimale',
        header: 'Affiliation minimale',
        type: 'number',
        headerNumeric: true,
      },
      { key: 'duree-maximale', header: 'Durée maximale', type: 'number', headerNumeric: true },
      {
        key: 'taux-de-remplacement',
        header: 'Taux de remplacement',
        type: 'number',
        headerNumeric: true,
      },
    ],
    rows: [
      {
        cells: [
          { t: '<b>France</b>' },
          { v: 6, d: 0, u: 'mois / 24' },
          { v: 18, d: 0, u: 'à 27 mois' },
          { v: 57, d: 0, u: '% du brut de référence' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 12, d: 0, u: 'mois / 30' },
          { v: 6, d: 0, u: 'à 24 mois' },
          { v: 60, d: 0, u: '% du net (67 % avec enfant)' },
        ],
      },
      {
        cells: [
          { t: 'Pays-Bas' },
          { v: 26, d: 0, u: 'sem. / 36' },
          { v: 3, d: 0, u: 'à 24 mois' },
          { v: 75, d: 0, u: '% puis 70 %' },
        ],
      },
      {
        cells: [
          { t: 'Danemark' },
          { t: 'seuil de revenu' },
          { v: 24, d: 0, u: 'mois sur 3 ans' },
          { v: 65, d: 0, u: '%, puis dégressif' },
        ],
      },
      {
        cells: [
          { t: 'Italie' },
          { v: 13, d: 0, u: 'sem. / 4 ans' },
          { t: 'jusqu\'à 24 mois' },
          { t: '75 %, −3 %/mois dès le 6<sup>e</sup>' },
        ],
      },
      {
        cells: [
          { t: 'Espagne' },
          { v: 360, d: 0, u: 'j / 6 ans' },
          { v: 4, d: 0, u: 'à 24 mois' },
          { v: 70, d: 0, u: '% puis 60 %' },
        ],
      },
      {
        cells: [
          { t: 'Suède' },
          { v: 6, d: 0, u: 'à 12 mois' },
          { v: 300, d: 0, u: 'jours' },
          { v: 65, d: 0, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Royaume-Uni' },
          { v: 2, d: 0, u: 'exercices fiscaux' },
          { v: 6, d: 0, u: 'mois' },
          { t: 'forfait' },
        ],
      },
      {
        cells: [
          { t: 'États-Unis' },
          { t: 'variable par État' },
          { v: 12, d: 0, u: 'à 30 sem. (26 le plus souvent)' },
          { t: '≈ 45-50 %' },
        ],
      },
    ],
  },
  'evaluations-avec-contrefactuel': {
    vintage: '2025',
    sources: [
      'unedic-unedic-convention-du-15-novembre-2024-e',
      'unedic-unedic-tableau-de-donnees-comparatives',
      'dg-tresor-dg-tresor-octobre-2025-cohorte-des-per',
    ],
    columns: [
      {
        key: 'evaluations-avec-contrefactuel',
        header: 'Évaluations avec contrefactuel',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'dispositif', header: 'Dispositif', type: 'text', headerNumeric: false },
      { key: 'effet-marginal', header: 'Effet marginal', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Card, Chetty & Weber (2007)' },
          { t: 'Autriche, discontinuité d\'éligibilité' },
          { t: 'taux de sortie −5 à −9 %' },
        ],
      },
      {
        cells: [
          { t: 'Schmieder, von Wachter & Bender (2012)' },
          { t: 'Allemagne, discontinuités administratives' },
          { v: 0.12, d: 2 },
        ],
      },
      {
        cells: [
          { t: 'Johnston & Mas (2016)' },
          { t: 'Missouri, réduction législative brutale' },
          { v: 0.3, d: 1, approx: true },
        ],
      },
      {
        cells: [
          { t: '<b>Le Barbanchon (2016)</b>' },
          { t: '<b>France</b>' },
          { v: 0.3, d: 1, approx: true, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'van Ours & Vodopivec (2008)' },
          { t: 'Slovénie' },
          { v: 0.4, d: 1, approx: true },
        ],
      },
    ],
  },
  'evaluations-francaises-des-reformes-recentes': {
    vintage: '2025',
    sources: [
      'unedic-unedic-convention-du-15-novembre-2024-e',
      'unedic-unedic-tableau-de-donnees-comparatives',
      'dg-tresor-dg-tresor-octobre-2025-cohorte-des-per',
    ],
    columns: [
      {
        key: 'evaluations-francaises-des-reformes-recentes',
        header: 'Évaluations françaises des réformes récentes',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'resultat', header: 'Résultat', type: 'text', headerNumeric: false },
    ],
    rows: [
      {
        cells: [
          { t: 'Unédic — dégressivité (50 000 allocataires à hauts revenus)' },
          { t: 'Durée de chômage réduite d\'environ <b>24 jours</b>' },
        ],
      },
      {
        cells: [
          { t: 'Unédic — nouveau calcul du salaire de référence (≈ 1,1 M d\'allocataires)' },
          {
            t: 'Allocation journalière −6 € (−16 %) ; retour à l\'emploi accéléré <b>mais vers des contrats de moins de 6 mois</b>',
          },
        ],
      },
      {
        cells: [
          { t: 'Unédic — affiliation portée de 4 à 6 mois' },
          { v: -30000, d: 0, u: 'entrées mensuelles ; −14 % d\'ouvertures de droits' },
        ],
      },
      {
        cells: [
          { t: 'IPP, rapport n° 55 (avril 2025) — réforme du SJR' },
          {
            v: 5,
            d: 0,
            u: 'à +20 % de jours travaillés pour les groupes les plus affectés ; élasticité emploi-allocation de −0,5 à −0,9 ; perte de revenu cumulée jusqu\'à 1 000 € sur six mois',
            sign: true,
          },
        ],
      },
      {
        cells: [
          { t: 'Unédic — bonus-malus (≈ 30 000 entreprises)' },
          { t: 'Effets « limités » ; architecture trop complexe pour être incitative' },
        ],
      },
    ],
  },
  ancrage: {
    vintage: '2025',
    sources: [
      'unedic-unedic-convention-du-15-novembre-2024-e',
      'unedic-unedic-tableau-de-donnees-comparatives',
      'dg-tresor-dg-tresor-octobre-2025-cohorte-des-per',
    ],
    columns: [
      { key: 'ancrage', header: 'Ancrage', type: 'text', headerNumeric: false },
      { key: 'ce-qu-il-dit', header: 'Ce qu\'il dit', type: 'text', headerNumeric: false },
      { key: 'ce-qu-il-vaut', header: 'Ce qu\'il vaut', type: 'text', headerNumeric: false },
    ],
    rows: [
      {
        cells: [
          { t: 'Banque de France, 2026' },
          { t: 'Les réformes de 2021 et 2023 ont réduit le chômage <b>structurel</b> de 0,6 point' },
          {
            t: 'Calibration macro, <b>pas d\'intervalle de confiance publié</b>, non validée par contrefactuel',
          },
        ],
      },
      {
        cells: [
          { t: 'Unédic, contracyclicité 2023' },
          {
            v: 4.5,
            d: 1,
            u: 'Md€ d\'économies annuelles et ≈ 300 000 allocataires en moins',
            approx: true,
          },
          {
            t: 'Effet <b>budgétaire</b> et sur les allocataires — un allocataire en moins n\'est pas un chômeur en moins',
          },
        ],
      },
      {
        cells: [
          { t: 'Gouvernement, mars 2026 (ruptures conventionnelles)' },
          { v: 12000, d: 0, u: 'à 15 000 retours à l\'emploi supplémentaires par an' },
          { t: 'Soit environ <b>0,04 point</b> de taux de chômage rapporté à 32,25 M d\'actifs' },
        ],
      },
    ],
  },
  'situation-3-mois-apres-la-fin-de-droits': {
    vintage: '2025',
    sources: [
      'unedic-unedic-convention-du-15-novembre-2024-e',
      'unedic-unedic-tableau-de-donnees-comparatives',
      'dg-tresor-dg-tresor-octobre-2025-cohorte-des-per',
    ],
    columns: [
      {
        key: 'situation-3-mois-apres-la-fin-de-droits',
        header: 'Situation 3 mois après la fin de droits',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'part', header: 'Part', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'En emploi salarié' },
          { v: 31, d: 0, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Au RSA' },
          { v: 18, d: 0, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'À l\'ASS' },
          { v: 11, d: 0, u: '%' },
        ],
      },
      {
        cells: [
          { t: '<b>Ni emploi salarié, ni RSA, ni ASS</b>' },
          { v: 40, d: 0, u: '%', approx: true, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Ayant repris un emploi au moins une fois dans les 12 mois' },
          { v: 58, d: 0, u: '%' },
        ],
        total: true,
      },
    ],
  },
  'assurance-chomage-2': {
    vintage: '2025',
    sources: [
      'unedic-france-unedic-convention-du-15-novemb',
      'dg-tresor-dg-tresor-tresor-economics-n-110-mars',
    ],
    columns: [
      { key: 'assurance-chomage', header: 'Assurance chômage', type: 'text', headerNumeric: false },
      { key: 'france', header: 'France', type: 'number', headerNumeric: true },
      { key: 'allemagne', header: 'Allemagne', type: 'number', headerNumeric: true },
      { key: 'pays-bas', header: 'Pays-Bas', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: '<b>Condition d\'entrée</b>' },
          { v: 6, d: 0, u: 'mois sur 24', strong: true },
          { v: 12, d: 0, u: 'mois sur 60' },
          { v: 26, d: 0, u: 'semaines sur 36' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>Durée maximale, salarié de 40 ans</b>' },
          { v: 18, d: 0, u: 'mois', strong: true },
          { v: 12, d: 0, u: 'mois', strong: true },
          { t: 'jusqu\'à 24 mois' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Durée maximale, seniors' },
          { v: 27, d: 0, u: 'mois (57 ans et +)' },
          { v: 24, d: 0, u: 'mois (58 ans et +)' },
          { v: 24, d: 0, u: 'mois' },
        ],
      },
      {
        cells: [
          { t: 'Taux de remplacement' },
          { v: 57, d: 0, u: '% du brut de référence' },
          { v: 60, d: 0, u: '% du net (67 % avec enfant)' },
          { v: 75, d: 0, u: '% puis 70 %' },
        ],
      },
      {
        cells: [
          { t: 'Dégressivité' },
          { t: '−30 % au 7<sup>e</sup> mois au-delà de 4 960 € brut' },
          { t: 'non' },
          { t: 'non' },
        ],
      },
      {
        cells: [
          { t: 'Après épuisement' },
          { t: 'ASS puis RSA' },
          { t: '<b>Bürgergeld</b> forfaitaire sous condition de ressources' },
          { t: 'assistance sociale' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Mécanisme original' },
          { t: '<b>Modulation contracyclique</b> : durée réduite de 25 % tant que le chômage est bas' },
          null,
          { t: 'Durée liée au millésime des années de carrière' },
        ],
        total: true,
      },
    ],
  },
  'ce-qui-est-affirme': {
    vintage: '2025',
    sources: [
      'unedic-france-unedic-convention-du-15-novemb',
      'dg-tresor-dg-tresor-tresor-economics-n-110-mars',
    ],
    columns: [
      { key: 'ce-qui-est-affirme', header: 'Ce qui est affirmé', type: 'text', headerNumeric: false },
      { key: 'sur-quelle-base', header: 'Sur quelle base', type: 'text', headerNumeric: false },
      { key: 'niveau-de-preuve', header: 'Niveau de preuve', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          {
            t: '<b>Baisse du chômage structurel d\'environ 3 points</b> (dont 1,4 pt attribué à Hartz IV)',
          },
          {
            t: 'Krebs & Scheffel, <i>IMF Economic Review</i> 2013 — <b>modèle de recherche et d\'appariement calibré</b>',
          },
          {
            t: '<b>Calibration</b> — pas une mesure. Le résultat dépend entièrement de la structure du modèle',
          },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Amélioration de l\'efficacité d\'appariement' },
          {
            t: 'Stops, <i>IZA Journal</i> 2016 — fonction d\'appariement sur 329 groupes professionnels × 402 zones, 138 mois',
          },
          {
            t: 'Estimation empirique — mais l\'auteur <b>refuse explicitement de quantifier</b> la part attribuable aux réformes',
          },
        ],
      },
      {
        cells: [
          { t: '« C\'est Hartz qui a modéré les salaires »' },
          {
            t: 'Centre for European Reform, 2017 : <b>la modération salariale commence en 1995</b>, née de la décentralisation de la négociation collective et de la menace de délocalisation',
          },
          { t: 'Objection documentée, non réfutée' },
        ],
        missing: true,
      },
    ],
  },
  'ce-qui-est-mesure-directement-sans-modele': {
    vintage: '2025',
    sources: [
      'unedic-france-unedic-convention-du-15-novemb',
      'dg-tresor-dg-tresor-tresor-economics-n-110-mars',
    ],
    columns: [
      {
        key: 'ce-qui-est-mesure-directement-sans-modele',
        header: 'Ce qui est mesuré directement, sans modèle',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'avant', header: 'Avant', type: 'number', headerNumeric: true },
      { key: 'apres', header: 'Après', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: '<b>Taux de pauvreté des chômeurs</b>' },
          { v: 41, d: 0, u: '% (2004)' },
          { v: 68, d: 0, u: '% (2010)', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Taux de pauvreté des personnes en emploi' },
          { v: 4.8, d: 1, u: '% (2004)' },
          { v: 7.5, d: 1, u: '% (2006)' },
        ],
      },
      {
        cells: [
          { t: 'Taux de pauvreté général' },
          { v: 12.5, d: 1, u: '% (2000)' },
          { v: 14.7, d: 1, u: '% (2005)' },
        ],
      },
      {
        cells: [
          { t: 'Coefficient de Gini' },
          { v: 26.2, d: 1, u: '(2000)' },
          { v: 28.8, d: 1, u: '(2005)' },
        ],
      },
      {
        cells: [
          { t: 'Intérim' },
          { v: 331000, d: 0, u: '(2003)' },
          { t: '882 000 (2011) — <b>×2,7</b>' },
        ],
        total: true,
      },
    ],
  },
  'anciennete-dans-l-entreprise': {
    vintage: '2026',
    sources: [
      'goulart-oesch-goulart-oesch-job-tenure-in-western',
      'france-france-art-l1234-9-et-l1234-1-du-code',
    ],
    columns: [
      {
        key: 'anciennete-dans-l-entreprise',
        header: 'Ancienneté dans l\'entreprise',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'moyenne-annees', header: 'Moyenne (années)', type: 'number', headerNumeric: true },
      { key: 'mediane', header: 'Médiane', type: 'number', headerNumeric: true },
      { key: 'part-1-an', header: 'Part < 1 an', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: '<b>France</b>' },
          { v: 11.9, d: 1, strong: true },
          null,
          null,
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 11.9, d: 1 },
          null,
          null,
        ],
      },
      {
        cells: [
          { t: 'Italie' },
          { v: 12.7, d: 1 },
          null,
          null,
        ],
      },
      {
        cells: [
          { t: 'Espagne' },
          { v: 11.3, d: 1 },
          null,
          null,
        ],
      },
      {
        cells: [
          { t: 'Royaume-Uni' },
          { t: '8,7 <i>(en déclin)</i>' },
          null,
          null,
        ],
      },
      {
        cells: [
          { t: 'États-Unis' },
          null,
          { v: 3.9, d: 1 },
          { v: 22, d: 0, u: '%' },
        ],
      },
    ],
  },
  'indemnite-prud-homale-pour-licenciement-sans-cause-reelle': {
    vintage: '2026',
    sources: [
      'goulart-oesch-goulart-oesch-job-tenure-in-western',
      'france-france-art-l1234-9-et-l1234-1-du-code',
    ],
    columns: [
      {
        key: 'indemnite-prud-homale-pour-licenciement-sans-cause-reelle',
        header: 'Indemnité prud\'homale pour licenciement sans cause réelle et sérieuse',
        type: 'text',
        headerNumeric: false,
      },
      {
        key: 'plancher-11-salaries',
        header: 'Plancher (≥ 11 salariés)',
        type: 'number',
        headerNumeric: true,
      },
      { key: 'plafond', header: 'Plafond', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { v: 2, d: 0, u: 'ans d\'ancienneté' },
          { v: 3, d: 0, u: 'mois' },
          { v: 3, d: 0, u: 'mois' },
        ],
      },
      {
        cells: [
          { v: 5, d: 0, u: 'ans' },
          { v: 3, d: 0, u: 'mois' },
          { v: 6, d: 0, u: 'mois' },
        ],
      },
      {
        cells: [
          { v: 10, d: 0, u: 'ans' },
          { v: 3, d: 0, u: 'mois' },
          { v: 10, d: 0, u: 'mois' },
        ],
      },
      {
        cells: [
          { v: 20, d: 0, u: 'ans' },
          { v: 3, d: 0, u: 'mois' },
          { v: 15.5, d: 1, u: 'mois' },
        ],
      },
      {
        cells: [
          { v: 30, d: 0, u: 'ans et plus' },
          { v: 3, d: 0, u: 'mois' },
          { v: 20, d: 0, u: 'mois' },
        ],
        total: true,
      },
    ],
  },
  'ce-qui-a-ete-mesure': {
    vintage: '2026',
    sources: [
      'goulart-oesch-goulart-oesch-job-tenure-in-western',
      'france-france-art-l1234-9-et-l1234-1-du-code',
    ],
    columns: [
      {
        key: 'ce-qui-a-ete-mesure',
        header: 'Ce qui a été mesuré',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'resultat', header: 'Résultat', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Recours prud\'homaux avant la réforme' },
          { t: 'divisés par près de deux en dix ans — la baisse est <b>antérieure</b>' },
        ],
      },
      {
        cells: [
          { t: 'Évolution après 2017' },
          { t: '−5 % en 2018, −1 % en 2019 : <b>ralentissement</b> de la baisse antérieure' },
        ],
      },
      {
        cells: [
          { t: 'Part des affaires réglées à l\'amiable' },
          { v: 48.9, d: 1, u: '% (2017) → 57,6 % (2019)' },
        ],
      },
    ],
  },
  'part-des-25-64-ans-en-formation-2025': {
    vintage: '2025',
    sources: [
      'goulart-oesch-goulart-oesch-job-tenure-in-western',
      'france-france-art-l1234-9-et-l1234-1-du-code',
    ],
    columns: [
      {
        key: 'part-des-25-64-ans-en-formation-2025',
        header: 'Part des 25-64 ans en formation, 2025',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'c2', header: '%', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Suède' },
          { v: 38.2, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Danemark' },
          { v: 31, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Finlande' },
          { v: 28.1, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Pays-Bas' },
          { v: 25.9, d: 1 },
        ],
      },
      {
        cells: [
          { t: '<b>France</b>' },
          { v: 15.5, d: 1, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'UE-27' },
          { v: 13.7, d: 1 },
        ],
        total: true,
      },
    ],
  },
  levier: {
    vintage: '2026',
    sources: ['insee-accompagnement-crepon-duflo-gurgand'],
    columns: [
      { key: 'levier', header: 'Levier', type: 'text', headerNumeric: false },
      { key: 'effet-mesure', header: 'Effet mesuré', type: 'number', headerNumeric: true },
      { key: 'preuve', header: 'Preuve', type: 'number', headerNumeric: true },
      {
        key: 'effets-indesirables-documentes',
        header: 'Effets indésirables documentés',
        type: 'text',
        headerNumeric: false,
      },
    ],
    rows: [
      {
        cells: [
          { t: '<b>Accompagnement intensif des chômeurs</b>' },
          {
            t: 'Individuel <b>+4,5 à +10,2 pts</b> de sortie vers l\'emploi à 6 mois. <b>Agrégé : effet net non significatif</b>',
          },
          { t: '<b>A</b>' },
          {
            t: '<b>Déplacement quasi intégral</b> entre chômeurs. Résultat répliqué par trois équipes indépendantes en 2013, 2014 et 2026',
          },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>Dégressivité des allocations élevées</b>' },
          {
            t: '+3 à +5 pts d\'emploi à 12 mois sur les allocataires concernés ; <b>−24 jours</b> de chômage',
          },
          { t: '<b>C</b>' },
          {
            t: 'Concessions salariales plus fréquentes (59 % contre 49 %). <b>Ne concerne que 3 % des allocataires</b>',
          },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Contrôle de la recherche d\'emploi' },
          { t: '+3 pts d\'emploi à 6 mois, <b>sur le contrôle aléatoire seulement</b>' },
          { t: '<b>D</b>' },
          { t: 'Non extrapolable au contrôle ciblé ; déplacement non mesuré ; 12 à 14 % de sanctions' },
        ],
      },
      {
        cells: [
          { t: 'Durcir le contrôle de la fausse indépendance' },
          {
            v: -62000,
            d: 0,
            u: 'indépendants sans salariés en un an aux Pays-Bas, par transition vers le salariat',
          },
          { t: '<b>C</b>' },
          { t: 'Effet emploi net probablement nul : recomposition statutaire' },
        ],
      },
      {
        cells: [
          { t: 'Raccourcir la chaîne de CDD' },
          { t: 'Hausse des transitions vers le CDI, <b>sauf pour les peu diplômés</b>' },
          { t: '<b>C/D</b>' },
          { t: 'Aucun effet pour les peu diplômés. <b>Les Pays-Bas ont annulé la mesure en 2020</b>' },
        ],
      },
      {
        cells: [
          { t: '<b>Réduire la durée d\'indemnisation</b>' },
          {
            t: 'Sortie du régime plus précoce <b>mais pas d\'emploi supplémentaire</b> (évaluation néerlandaise d\'une réduction de 3 mois)',
          },
          { t: '<b>C</b> — <b>résultat négatif</b>' },
          { t: 'La sortie anticipée ne se traduit pas en emploi' },
        ],
        missing: true,
      },
      {
        cells: [
          { t: 'Chômage partiel' },
          { t: 'Amortissement macro réel : emploi −1,7 % pour un volume de travail −9,4 %' },
          { t: '<b>D</b>' },
          {
            t: 'Effets d\'aubaine d\'environ 40 % ; destructions <b>différées</b> plutôt qu\'évitées. <b>Le coût par emploi sauvé n\'existe pas</b>',
          },
        ],
      },
      {
        cells: [
          { t: '<b>Réduire le délai de contestation</b> (12 mois → quelques semaines)' },
          { t: 'Réduction mécanique de la fenêtre d\'incertitude d\'un <b>facteur 17</b>' },
          { t: '<b>F</b>' },
          { t: 'Restriction d\'accès au juge. <b>Effet emploi jamais mesuré nulle part</b>' },
        ],
        missing: true,
      },
      {
        cells: [
          { t: '<b>Professionnaliser la 1<sup>re</sup> instance prud\'homale</b>' },
          { t: 'Réduction attendue du départage (34,9 → 17,6 mois) et du taux d\'appel' },
          { t: '<b>F</b>' },
          { t: '<b>Le taux de départage n\'est même pas publié</b> : l\'ampleur du gain est inconnue' },
        ],
        missing: true,
      },
      {
        cells: [
          { t: 'Autorisation préalable de licenciement' },
          {
            t: '<b>Aucun effet démontré</b> — l\'évaluation officielle néerlandaise conclut à l\'absence de régime « plus activant »',
          },
          { t: '<b>C</b> — <b>résultat négatif</b>' },
          { t: 'Contournée dans 89 % des cas ; coût moyen de rupture +8 %' },
        ],
        missing: true,
      },
      {
        cells: [
          { t: '<b>Barème d\'indemnités prud\'homales</b>' },
          { t: 'Aucun effet causal établi, ni sur l\'emploi ni sur la dispersion' },
          { t: '<b>F</b>' },
          {
            t: '<b>La baisse du contentieux commence en 2015, deux ans avant le barème.</b> Incertitude déplacée vers les demandes en nullité',
          },
        ],
        missing: true,
      },
      {
        cells: [
          { t: 'Droit de modifier son temps de travail' },
          { t: 'Corrélation forte avec le taux d\'emploi féminin ; <b>causalité non établie</b>' },
          { t: '<b>F</b>' },
          { t: 'Taux d\'emploi élevé en personnes, pas en heures ; écarts de revenus et de pensions' },
        ],
      },
      {
        cells: [
          { t: 'Fluidifier le marché locatif (hypothèse d\'Oswald)' },
          { v: 1, d: 0, u: '% de propriété ↔ +2,2 % de chômage à long terme', sign: true },
          { t: '<b>D</b>' },
          { t: 'Contradiction assumée entre niveaux micro et macro ; réplications mitigées' },
        ],
      },
      {
        cells: [
          { t: '<b>« Faire les réformes Hartz »</b>' },
          { v: 3, d: 0, u: 'points de chômage structurel' },
          { t: '<b>E</b> — <b>calibration</b>' },
          { t: 'Pauvreté des chômeurs 41 % → 68 % ; Gini +2,6 pts ; intérim ×2,7' },
        ],
        missing: true,
      },
    ],
  },
  'coin-fiscalo-social-2025-celibataire-au-salaire-moyen-en-d': {
    vintage: '2025',
    sources: ['ocde-ocde-taxing-wages-2026-donnees-2025-c', 'bozio-bozio-breda-grenet-review-of-economi'],
    columns: [
      {
        key: 'coin-fiscalo-social-2025-celibataire-au-salaire-moyen-en-d',
        header: 'Coin fiscalo-social, 2025, célibataire au salaire moyen, en % du coût total employeur',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'total', header: 'Total', type: 'number', headerNumeric: true },
      {
        key: 'impot-sur-le-revenu',
        header: 'Impôt sur le revenu',
        type: 'number',
        headerNumeric: true,
      },
      {
        key: 'cotisations-salariales',
        header: 'Cotisations salariales',
        type: 'number',
        headerNumeric: true,
      },
      {
        key: 'cotisations-patronales',
        header: 'Cotisations patronales',
        type: 'number',
        headerNumeric: true,
      },
    ],
    rows: [
      {
        cells: [
          { t: 'Belgique' },
          { v: 52.5, d: 1 },
          { v: 20.1, d: 1 },
          { v: 11, d: 1 },
          { v: 21.4, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 49.3, d: 1 },
          { v: 14.2, d: 1 },
          { v: 17.8, d: 1 },
          { v: 17.3, d: 1 },
        ],
      },
      {
        cells: [
          { t: '<b>France</b>' },
          { v: 47.2, d: 1, strong: true },
          { v: 12.2, d: 1, strong: true },
          { v: 8.3, d: 1 },
          { v: 26.7, d: 1, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Italie' },
          { v: 45.8, d: 1 },
          { v: 14.5, d: 1 },
          { v: 7.2, d: 1 },
          { v: 24, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Suède' },
          { v: 41.1, d: 1 },
          { v: 11.9, d: 1 },
          { v: 5.3, d: 1 },
          { v: 23.9, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Pays-Bas' },
          { v: 35.9, d: 1 },
          { v: 15.8, d: 1 },
          { v: 8.9, d: 1 },
          { v: 11.2, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Danemark' },
          { v: 35.8, d: 1 },
          { v: 35.1, d: 1, strong: true },
          { v: 0, d: 1, strong: true },
          { v: 0.7, d: 1, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Moyenne OCDE' },
          { v: 35.1, d: 1 },
          { v: 13.4, d: 1 },
          { v: 8.1, d: 1 },
          { v: 13.5, d: 1 },
        ],
        total: true,
      },
      {
        cells: [
          { t: 'Royaume-Uni' },
          { v: 32.4, d: 1 },
          { v: 15.4, d: 1 },
          { v: 4.9, d: 1 },
          { v: 12, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'États-Unis' },
          { v: 30, d: 1 },
          { v: 15.4, d: 1 },
          { v: 7.1, d: 1 },
          { v: 7.5, d: 1 },
        ],
      },
    ],
  },
  'pour-100-de-cout-total-employeur': {
    vintage: '2026',
    sources: ['ocde-ocde-taxing-wages-2026-donnees-2025-c', 'bozio-bozio-breda-grenet-review-of-economi'],
    columns: [
      {
        key: 'pour-100-de-cout-total-employeur',
        header: 'Pour 100 € de coût total employeur',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'france', header: 'France', type: 'number', headerNumeric: true },
      { key: 'danemark', header: 'Danemark', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Cotisations patronales' },
          { v: 26.7, d: 2, u: '€' },
          { v: 0.7, d: 2, u: '€' },
        ],
      },
      {
        cells: [
          { t: '<b>Salaire brut</b>' },
          { v: 73.3, d: 2, u: '€', strong: true },
          { v: 99.3, d: 2, u: '€', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Cotisations salariales' },
          { v: 8.3, d: 2, u: '€' },
          { v: 0, d: 2, u: '€' },
        ],
      },
      {
        cells: [
          { t: 'Impôt sur le revenu' },
          { v: 12.2, d: 2, u: '€' },
          { v: 35.1, d: 2, u: '€' },
        ],
      },
      {
        cells: [
          { t: 'Salaire net' },
          { v: 52.8, d: 2, u: '€' },
          { v: 64.2, d: 2, u: '€' },
        ],
        total: true,
      },
    ],
  },
  'bozio-breda-grenet-l-etude-francaise-de-reference': {
    vintage: '2026',
    sources: ['ocde-ocde-taxing-wages-2026-donnees-2025-c', 'bozio-bozio-breda-grenet-review-of-economi'],
    columns: [
      {
        key: 'bozio-breda-grenet-l-etude-francaise-de-reference',
        header: 'Bozio, Breda & Grenet — l\'étude française de référence',
        type: 'text',
        headerNumeric: false,
      },
      {
        key: 'transfert-vers-les-salaires',
        header: 'Transfert vers les salaires',
        type: 'number',
        headerNumeric: true,
      },
    ],
    rows: [
      {
        cells: [
          { t: '<b>Cotisations à lien contributif fort et transparent</b> (retraite complémentaire)' },
          { t: '<b>≈ 103 %</b> <i>(91 à 106 % à 9 ans)</i>' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>Cotisations à lien contributif faible ou nul</b> (maladie, famille)' },
          { t: '<b>≈ 15 %</b> <i>(6 à 21 % à 6 ans)</i>' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Impôt sur le revenu payé par le salarié' },
          { t: 'quasi intégral' },
        ],
      },
    ],
  },
  'les-autres-resultats-empiriques': {
    vintage: '2026',
    sources: ['ocde-ocde-taxing-wages-2026-donnees-2025-c', 'bozio-bozio-breda-grenet-review-of-economi'],
    columns: [
      {
        key: 'les-autres-resultats-empiriques',
        header: 'Les autres résultats empiriques',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'ce-qu-ils-trouvent', header: 'Ce qu\'ils trouvent', type: 'text', headerNumeric: false },
    ],
    rows: [
      {
        cells: [
          { t: 'Saez, Schoefer & Seim (Suède, 2019) — baisse de 16 points pour les moins de 26 ans' },
          {
            t: '<b>Aucun effet sur les salaires nets des jeunes traités</b> ; effet emploi de +2,1 points (élasticité 0,21). L\'ajustement s\'opère au niveau de <b>l\'entreprise</b>, qui partage la rente avec l\'ensemble de ses salariés, y compris les non-éligibles',
          },
        ],
      },
      {
        cells: [
          { t: 'Saez, Matsaganis & Tsakloglou (Grèce, 2012)' },
          {
            t: 'Les employeurs compensent les hausses de la part <b>patronale</b>, pas celles de la part <b>salariale</b>. Conclusion des auteurs : « l\'incidence légale importe pour l\'incidence économique » — le contraire exact de la prédiction canonique',
          },
        ],
      },
      {
        cells: [
          { t: 'Benzarti & Harju (Finlande, 2021)' },
          {
            t: 'Prélèvement <b>majoritairement supporté par les entreprises</b>, effets emploi significatifs, effets négligeables sur les rémunérations',
          },
        ],
      },
      {
        cells: [
          { t: 'Benzarti, synthèse (NBER WP 32819)' },
          {
            t: 'Trois anomalies systématiques : les élasticités ne suffisent pas à prédire l\'incidence (« les effets d\'équité dominent les effets de marché ») ; l\'incidence légale compte ; <b>les effets emploi sont asymétriques</b> — les baisses créent de l\'emploi, les hausses en détruisent peu',
          },
        ],
      },
    ],
  },
  'les-allegements-de-cotisations-sur-les-bas-salaires': {
    vintage: '2026',
    sources: ['ocde-ocde-taxing-wages-2026-donnees-2025-c', 'bozio-bozio-breda-grenet-review-of-economi'],
    columns: [
      {
        key: 'les-allegements-de-cotisations-sur-les-bas-salaires',
        header: 'Les allégements de cotisations sur les bas salaires',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'valeur', header: 'Valeur', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: '<b>Coût budgétaire, 2024</b>' },
          { v: 75, d: 0, u: 'Md€, soit 2,5 % du PIB', approx: true, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Coût en 2009, pour mémoire' },
          { v: 22.2, d: 1, u: 'Md€' },
        ],
      },
      {
        cells: [
          { t: 'Effet sur le coût employeur au SMIC' },
          { v: -700, d: 0, u: '€ par mois, soit environ un tiers de moins', approx: true },
        ],
      },
      {
        cells: [
          { t: 'Taux marginaux effectifs entre 1,2 et 2 SMIC' },
          { v: 75, d: 0, u: 'à 80 %', strong: true },
        ],
        separator: true,
      },
      {
        cells: [
          { t: 'Illustration du Groupe d\'experts SMIC' },
          { t: 'une hausse de 100 € du net génère 0 € de revenu disponible pour un surcoût de 242 €' },
        ],
      },
      {
        cells: [
          { t: 'Salariés concernés par la revalorisation du SMIC de novembre 2024' },
          { t: '12,4 %, dont <b>59,2 % de femmes</b>' },
        ],
      },
    ],
  },
  'ce-que-les-evaluations-mesurent': {
    vintage: '2026',
    sources: ['ocde-ocde-taxing-wages-2026-donnees-2025-c', 'bozio-bozio-breda-grenet-review-of-economi'],
    columns: [
      {
        key: 'ce-que-les-evaluations-mesurent',
        header: 'Ce que les évaluations mesurent',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'emplois', header: 'Emplois', type: 'number', headerNumeric: true },
      { key: 'cout-par-emploi', header: 'Coût par emploi', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          {
            t: '<b>Allégements ciblés sur les bas salaires</b> (DG Trésor, doc. n° 97, 2012, mesures 1993-1997)',
          },
          { v: 200000, d: 0, u: 'à 400 000' },
          { v: 20000, d: 0, u: 'à 40 000 €', strong: true, after: 'bruts ; 8 000 à 28 000 € nets' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>CICE, peu ciblé</b> (France Stratégie, comité de suivi)' },
          { t: '≈ 100 000 <i>(micro-économétrique)</i>' },
          { v: 180000, d: 0, u: '€', approx: true, strong: true },
        ],
        emphasis: true,
      },
    ],
  },
} satisfies Tables

export const series = {
  'ce-qui-compose-l-ecart-de-taux-d-emploi': {
    raw: true,
    title: 'Ce qui compose l\'écart de taux d\'emploi',
    subtitle: 'Contribution de chaque tranche d\'âge, en points de taux d\'emploi des 15-64 ans, 2025.',
    caption: '<b>Deux écarts de nature différente.</b> Le retard sur l\'Allemagne est fait <b>à 40 % des jeunes et à 36 % des seniors</b>, à parts presque égales. Le retard sur les Pays-Bas vient <b>à 61 % des seuls 15-24 ans</b>. Dans les deux cas, <b>le cœur d\'activité — les 25-54 ans — ne contribue que pour 14 à 17 %</b> : la France y est à 83,0 % contre 84,9 % en Allemagne. Ce n\'est pas là que se joue l\'écart.',
    legend: [
      { color: 's4', label: 'Écart avec l\'Allemagne (7,9 pts au total)' },
      { color: 's1', label: 'Écart avec les Pays-Bas (13,0 pts)' },
    ],
    svg: '<svg viewBox="0 0 720 222" class="cv" role="img" aria-labelledby="cdecomp-t">\n<title id="cdecomp-t">contribution à l\'écart, en points de taux d\'emploi</title>\n<line class="grid" x1="140.0" y1="16" x2="140.0" y2="174"></line>\n<text class="ax" x="140.0" y="196" text-anchor="middle">0</text>\n<line class="grid" x1="286.4" y1="16" x2="286.4" y2="174"></line>\n<text class="ax" x="286.4" y="196" text-anchor="middle">2</text>\n<line class="grid" x1="432.7" y1="16" x2="432.7" y2="174"></line>\n<text class="ax" x="432.7" y="196" text-anchor="middle">5</text>\n<line class="grid" x1="579.1" y1="16" x2="579.1" y2="174"></line>\n<text class="ax" x="579.1" y="196" text-anchor="middle">8</text>\n<text class="ax al" x="126" y="40">15-24 ans</text>\n<rect class="bar s4f" x="140" y="22" width="182.7" height="12" rx="3"></rect>\n<text class="lbl mut" x="329.7" y="32">3,12</text>\n<rect class="bar s1f" x="140" y="37" width="466.0" height="12" rx="3"></rect>\n<text class="lbl s1t" x="613.0" y="48">7,96</text>\n<text class="ax al" x="126" y="80">60-64 ans</text>\n<rect class="bar s4f" x="140" y="62" width="139.9" height="12" rx="3"></rect>\n<text class="lbl mut" x="286.9" y="72">2,39</text>\n<rect class="bar s1f" x="140" y="77" width="151.1" height="12" rx="3"></rect>\n<text class="lbl s1t" x="298.1" y="88">2,58</text>\n<text class="ax al" x="126" y="120">25-54 ans</text>\n<rect class="bar s4f" x="140" y="102" width="66.7" height="12" rx="3"></rect>\n<text class="lbl mut" x="213.7" y="112">1,14</text>\n<rect class="bar s1f" x="140" y="117" width="130.0" height="12" rx="3"></rect>\n<text class="lbl s1t" x="277.0" y="128">2,22</text>\n<text class="ax al" x="126" y="160">55-59 ans</text>\n<rect class="bar s4f" x="140" y="142" width="26.3" height="12" rx="3"></rect>\n<text class="lbl mut" x="173.3" y="152">0,45</text>\n<rect class="bar s1f" x="140" y="157" width="19.3" height="12" rx="3"></rect>\n<text class="lbl s1t" x="166.3" y="168">0,33</text>\n</svg>',
    sources: ['eurostat-lfsa-ergan'],
    vintage: 'à confirmer',
  },
  'le-taux-d-emploi-en-tetes-puis-en-equivalent-temps-plein': {
    raw: true,
    title: 'Le taux d\'emploi, en têtes puis en équivalent temps plein',
    subtitle: '2025. L\'équivalent temps plein rapporte l\'emploi à une base de 40 heures hebdomadaires.',
    caption: '<b>Le classement s\'inverse.</b> L\'écart France / Pays-Bas passe de <b>13,0 points à 0,7 point : 94,5 % de l\'écart disparaît</b>. L\'écart France / Allemagne passe de 7,9 à 3,1 points, soit 61 % en moins. Et <b>les Pays-Bas perdent la première place au profit de l\'Allemagne</b>. L\'Insee parvient au même constat : « en équivalent temps plein, l\'écart de taux d\'emploi de la France se réduit par rapport à l\'Allemagne et aux Pays-Bas, en particulier pour les femmes ».',
    legend: [
      { color: 's4', label: 'En têtes' },
      { color: 's1', label: 'En équivalent temps plein' },
    ],
    svg: '<svg viewBox="0 0 720 200" class="cv" role="img" aria-labelledby="ceqtp-t">\n<title id="ceqtp-t">taux d\'emploi des 15-64 ans, %, 2025</title>\n<line class="grid" x1="140.0" y1="16" x2="140.0" y2="152"></line>\n<text class="ax" x="140.0" y="174" text-anchor="middle">0</text>\n<line class="grid" x1="283.3" y1="16" x2="283.3" y2="152"></line>\n<text class="ax" x="283.3" y="174" text-anchor="middle">25</text>\n<line class="grid" x1="426.6" y1="16" x2="426.6" y2="152"></line>\n<text class="ax" x="426.6" y="174" text-anchor="middle">50</text>\n<line class="grid" x1="569.9" y1="16" x2="569.9" y2="152"></line>\n<text class="ax" x="569.9" y="174" text-anchor="middle">75</text>\n<text class="ax al" x="126" y="43">Pays-Bas</text>\n<rect class="bar s4f" x="140" y="24" width="471.7" height="13" rx="3"></rect>\n<rect class="bar s1f" x="140" y="41" width="371.4" height="13" rx="3"></rect>\n<text class="lbl mut" x="619.7" y="35">82,3</text>\n<text class="lbl s1t" x="519.4" y="52">64,8</text>\n<text class="ax al" x="126" y="89">Allemagne</text>\n<rect class="bar s4f" x="140" y="70" width="442.5" height="13" rx="3"></rect>\n<rect class="bar s1f" x="140" y="87" width="385.2" height="13" rx="3"></rect>\n<text class="lbl mut" x="590.5" y="81">77,2</text>\n<text class="lbl s1t" x="533.2" y="98">67,2</text>\n<text class="ax al" x="126" y="135">France</text>\n<rect class="bar s4f" x="140" y="116" width="397.2" height="13" rx="3"></rect>\n<rect class="bar s1f" x="140" y="133" width="367.4" height="13" rx="3"></rect>\n<text class="lbl mut" x="545.2" y="127">69,3</text>\n<text class="lbl s1t" x="515.4" y="144">64,1</text>\n</svg>',
    sources: ['eurostat-lfsi-emp-a-4'],
    vintage: 'à confirmer',
    values: {
      svg: { viewBox: '0 0 720 200', titleId: 'ceqtp-t', title: 'taux d\'emploi des 15-64 ans, %, 2025' },
      title: 'Le taux d\'emploi, en têtes puis en équivalent temps plein',
      subtitle: '2025. L\'équivalent temps plein rapporte l\'emploi à une base de 40 heures hebdomadaires.',
      caption: '<b>Le classement s\'inverse.</b> L\'écart France / Pays-Bas passe de <b>13,0 points à 0,7 point : 94,5 % de l\'écart disparaît</b>. L\'écart France / Allemagne passe de 7,9 à 3,1 points, soit 61 % en moins. Et <b>les Pays-Bas perdent la première place au profit de l\'Allemagne</b>. L\'Insee parvient au même constat : « en équivalent temps plein, l\'écart de taux d\'emploi de la France se réduit par rapport à l\'Allemagne et aux Pays-Bas, en particulier pour les femmes ».',
      sources: ['eurostat-lfsi-emp-a-4'],
      vintage: '2025',
      legend: [
        { color: 's4', label: 'En têtes' },
        { color: 's1', label: 'En équivalent temps plein' },
      ],
      type: 'bar',
      layout: {
        kind: 'bar',
        gridTop: 16,
        gridBottom: 152,
        tickLabelY: 174,
        catLabelX: 126,
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
      x: ['Pays-Bas', 'Allemagne', 'France'],
      y: { min: 0, max: 75, ticks: [0, 25, 50, 75] },
      series: [
        { key: 'b1', color: 's4', label: 'En têtes', values: [82.292, 77.198, 69.295], decimals: 1 },
        {
          key: 'b2',
          color: 's1',
          label: 'En équivalent temps plein',
          values: [64.794, 67.202, 64.096],
          decimals: 1,
        },
      ],
      frame: { width: 720, height: 200, left: 140, right: 569.9009340477326, top: 16, bottom: 152 },
    },
  },
  'taux-d-emploi-des-60-64-ans-france-et-pays-bas': {
    svg: {
      viewBox: '0 0 720 350',
      titleId: 'csen-t',
      title: 'Emploi des 60-64 ans',
      preserveAspectRatio: 'xMidYMid meet',
    },
    title: 'Taux d\'emploi des 60-64 ans, France et Pays-Bas',
    subtitle: '1995-2025. Les Pays-Bas partaient d\'un niveau plus bas que la France.',
    caption: '<b>+55,9 points aux Pays-Bas contre +33,9 en France.</b> Partis d\'un niveau <em>inférieur</em> à celui de la France en 1995 (13,6 % contre 10,5 % — l\'écart est de 3 points), les Pays-Bas terminent 25 points devant. L\'Allemagne, non représentée faute de série intermédiaire vérifiée, va de <b>18,0 % en 1995 à 67,6 % en 2025</b>.',
    sources: ['eurostat-lfsa-ergan-2'],
    vintage: '2025',
    legend: [
      { color: 's4', label: 'Pays-Bas' },
      { color: 's1', label: 'France' },
    ],
    type: 'line',
    layout: {
      kind: 'line',
      tickLabelX: 43,
      tickLabelDy: 4,
      axisLabel: { x: 43, y: 14, text: 'taux d\'emploi des 60-64 ans, %', anchor: 'end' },
      axisLineY: 316,
      dotR: 4,
      endLabelDx: 8,
      endLabelDy: 4,
      xLabelY: 334,
    },
    xAxis: { min: 1995, max: 2025, ticks: [1995, 2003, 2010, 2017, 2025] },
    x: [1995, 2000, 2003, 2005, 2006, 2007, 2008, 2010, 2012, 2015, 2019, 2023, 2025],
    y: { min: 0, max: 60, ticks: [0, 20, 40, 60], label: 'taux d\'emploi des 60-64 ans, %' },
    series: [
      {
        key: 's4',
        color: 's4',
        label: 'Pays-Bas',
        values: [
          13.597, 18.495, 24.209, 22.398, 24.311, 28.495, 32.296, 36.403, 42.806, 50.51, 61.097,
          67.5, 69.49,
        ],
      },
      {
        key: 's1',
        color: 's1',
        label: 'France',
        values: [
          10.51, 10.204, 12.602, 13.801, null, null, 16.199, 17.806, 21.505, 27.704, 32.704, 38.903,
          44.388,
        ],
      },
    ],
    frame: { width: 720, height: 350, left: 52, right: 602, top: 80.79999999999998, bottom: 316 },
  },
  'heures-travaillees-par-personne-de-15-a-24-ans': {
    raw: true,
    title: 'Heures travaillées par personne de 15 à 24 ans',
    subtitle: 'Par semaine, rapportées à toute la classe d\'âge et non aux seuls jeunes en emploi. 2025.',
    caption: '<b>Le renversement est complet.</b> En têtes, les Pays-Bas emploient <b>2,2 fois plus</b> de jeunes que la France (76,0 contre 34,5). En heures rapportées à toute la classe d\'âge, ils n\'en font travailler que <b>1,32 fois plus</b> — et <b>l\'Allemagne passe devant</b>. Un jeune Néerlandais en emploi travaille 19,7 heures par semaine, un Français 32,8, un Allemand 30,9.',
    svg: '<svg viewBox="0 0 720 158" class="cv" role="img" aria-labelledby="cjeunh-t">\n<title id="cjeunh-t">heures travaillées par personne de 15-24 ans et par semaine</title>\n<line class="grid" x1="140.0" y1="16" x2="140.0" y2="110"></line>\n<text class="ax" x="140.0" y="132" text-anchor="middle">0</text>\n<line class="grid" x1="288.4" y1="16" x2="288.4" y2="110"></line>\n<text class="ax" x="288.4" y="132" text-anchor="middle">5</text>\n<line class="grid" x1="436.8" y1="16" x2="436.8" y2="110"></line>\n<text class="ax" x="436.8" y="132" text-anchor="middle">10</text>\n<line class="grid" x1="585.3" y1="16" x2="585.3" y2="110"></line>\n<text class="ax" x="585.3" y="132" text-anchor="middle">15</text>\n<text class="ax al" x="126" y="32">Allemagne</text>\n<rect class="bar s1f" x="140" y="22" width="466.0" height="12" rx="3"></rect>\n<text class="lbl s1t" x="613.0" y="32">15,7</text>\n<text class="ax al" x="126" y="64">Pays-Bas</text>\n<rect class="bar s1f" x="140" y="54" width="445.3" height="12" rx="3"></rect>\n<text class="lbl s1t" x="592.3" y="64">15,0</text>\n<text class="ax al" x="126" y="96">France</text>\n<rect class="bar s1f" x="140" y="86" width="335.4" height="12" rx="3"></rect>\n<text class="lbl s1t" x="482.4" y="96">11,3</text>\n</svg>',
    sources: ['eurostat-lfsa-ergan-3'],
    vintage: 'à confirmer',
    values: {
      svg: {
        viewBox: '0 0 720 158',
        titleId: 'cjeunh-t',
        title: 'heures travaillées par personne de 15-24 ans et par semaine',
      },
      title: 'Heures travaillées par personne de 15 à 24 ans',
      subtitle: 'Par semaine, rapportées à toute la classe d\'âge et non aux seuls jeunes en emploi. 2025.',
      caption: '<b>Le renversement est complet.</b> En têtes, les Pays-Bas emploient <b>2,2 fois plus</b> de jeunes que la France (76,0 contre 34,5). En heures rapportées à toute la classe d\'âge, ils n\'en font travailler que <b>1,32 fois plus</b> — et <b>l\'Allemagne passe devant</b>. Un jeune Néerlandais en emploi travaille 19,7 heures par semaine, un Français 32,8, un Allemand 30,9.',
      sources: ['eurostat-lfsa-ergan-3'],
      vintage: '2025',
      type: 'bar',
      layout: {
        kind: 'bar',
        gridTop: 16,
        gridBottom: 110,
        tickLabelY: 132,
        catLabelX: 126,
        catLabelDy: 10,
        barHeight: 12,
        barPitch: 15,
        groupPitch: 32,
        firstBarY: 22,
        valueLabelDx: 7,
        valueLabelDy: 10,
        valueClasses: ['lbl s1t'],
        rx: 3,
      },
      x: ['Allemagne', 'Pays-Bas', 'France'],
      y: { min: 0, max: 15, ticks: [0, 5, 10, 15] },
      series: [
        { key: 'b1', color: 's1', values: [15.697, 15, 11.298], decimals: 1 },
      ],
      frame: { width: 720, height: 158, left: 140, right: 585.3033103450032, top: 16, bottom: 110 },
    },
  },
  'trois-facons-de-mesurer-le-sous-emploi-des-jeunes': {
    raw: true,
    title: 'Trois façons de mesurer le sous-emploi des jeunes',
    subtitle: '2025. Le classement ne change pas, mais l\'ampleur de l\'écart franco-allemand est divisée par cinq selon l\'indicateur.',
    caption: '<b>Sur le taux d\'emploi, l\'écart France-Allemagne est de 16,3 points. Sur le NEET des 15-24 ans, il tombe à 2,8 points.</b> Le NEET est le seul des trois qui ne dépende pas de la durée des études ni du statut donné aux apprentis. Les États-Unis n\'ont pas de NEET publié sur ce champ.',
    legend: [
      { color: 's4', label: 'Taux d\'emploi 15-24' },
      { color: 's2', label: 'NEET 15-24' },
      { color: 's5', label: 'NEET 20-24' },
    ],
    svg: '<svg viewBox="0 0 720 342" class="cv" role="img" aria-labelledby="cjeunes-t">\n<title id="cjeunes-t">%, 2025</title>\n<line class="grid" x1="150.0" y1="16" x2="150.0" y2="294"></line>\n<text class="ax" x="150.0" y="316" text-anchor="middle">0</text>\n<line class="grid" x1="300.2" y1="16" x2="300.2" y2="294"></line>\n<text class="ax" x="300.2" y="316" text-anchor="middle">25</text>\n<line class="grid" x1="450.4" y1="16" x2="450.4" y2="294"></line>\n<text class="ax" x="450.4" y="316" text-anchor="middle">50</text>\n<line class="grid" x1="600.6" y1="16" x2="600.6" y2="294"></line>\n<text class="ax" x="600.6" y="316" text-anchor="middle">75</text>\n<text class="ax al" x="136" y="47">Pays-Bas</text>\n<rect class="bar s4f" x="150" y="22" width="456.6" height="12" rx="3"></rect>\n<text class="lbl mut" x="613.6" y="32">76,0</text>\n<rect class="bar s2f" x="150" y="37" width="23.4" height="12" rx="3"></rect>\n<text class="lbl mut" x="180.4" y="48">3,9</text>\n<rect class="bar s5f" x="150" y="52" width="33.6" height="12" rx="3"></rect>\n<text class="lbl s5t" x="190.6" y="62">5,6</text>\n<text class="ax al" x="136" y="103">Allemagne</text>\n<rect class="bar s4f" x="150" y="78" width="305.2" height="12" rx="3"></rect>\n<text class="lbl mut" x="462.2" y="88">50,8</text>\n<rect class="bar s2f" x="150" y="93" width="49.3" height="12" rx="3"></rect>\n<text class="lbl mut" x="206.3" y="104">8,2</text>\n<rect class="bar s5f" x="150" y="108" width="60.1" height="12" rx="3"></rect>\n<text class="lbl s5t" x="217.1" y="118">10,0</text>\n<text class="ax al" x="136" y="159">États-Unis *</text>\n<rect class="bar s4f" x="150" y="134" width="300.4" height="12" rx="3"></rect>\n<text class="lbl mut" x="457.4" y="144">50,0</text>\n<rect class="bar s2f" x="150" y="149" width="1.0" height="12" rx="3"></rect>\n<text class="lbl mut" x="157.0" y="160">0,0</text>\n<rect class="bar s5f" x="150" y="164" width="1.0" height="12" rx="3"></rect>\n<text class="lbl s5t" x="157.0" y="174">0,0</text>\n<text class="ax al" x="136" y="215">UE-27</text>\n<rect class="bar s4f" x="150" y="190" width="207.3" height="12" rx="3"></rect>\n<text class="lbl mut" x="364.3" y="200">34,5</text>\n<rect class="bar s2f" x="150" y="205" width="54.1" height="12" rx="3"></rect>\n<text class="lbl mut" x="211.1" y="216">9,0</text>\n<rect class="bar s5f" x="150" y="220" width="77.5" height="12" rx="3"></rect>\n<text class="lbl s5t" x="234.5" y="230">12,9</text>\n<text class="ax al" x="136" y="271">France</text>\n<rect class="bar s4f" x="150" y="246" width="207.3" height="12" rx="3"></rect>\n<text class="lbl mut" x="364.3" y="256">34,5</text>\n<rect class="bar s2f" x="150" y="261" width="66.1" height="12" rx="3"></rect>\n<text class="lbl mut" x="223.1" y="272">11,0</text>\n<rect class="bar s5f" x="150" y="276" width="97.3" height="12" rx="3"></rect>\n<text class="lbl s5t" x="254.3" y="286">16,2</text>\n</svg>',
    sources: ['eurostat-eurostat-memes-jeux-que-le-tableau-ci-d'],
    vintage: 'à confirmer',
    values: {
      svg: { viewBox: '0 0 720 342', titleId: 'cjeunes-t', title: '%, 2025' },
      title: 'Trois façons de mesurer le sous-emploi des jeunes',
      subtitle: '2025. Le classement ne change pas, mais l\'ampleur de l\'écart franco-allemand est divisée par cinq selon l\'indicateur.',
      caption: '<b>Sur le taux d\'emploi, l\'écart France-Allemagne est de 16,3 points. Sur le NEET des 15-24 ans, il tombe à 2,8 points.</b> Le NEET est le seul des trois qui ne dépende pas de la durée des études ni du statut donné aux apprentis. Les États-Unis n\'ont pas de NEET publié sur ce champ.',
      sources: ['eurostat-eurostat-memes-jeux-que-le-tableau-ci-d'],
      vintage: '2025',
      legend: [
        { color: 's4', label: 'Taux d\'emploi 15-24' },
        { color: 's2', label: 'NEET 15-24' },
        { color: 's5', label: 'NEET 20-24' },
      ],
      type: 'bar',
      layout: {
        kind: 'bar',
        gridTop: 16,
        gridBottom: 294,
        tickLabelY: 316,
        catLabelX: 136,
        catLabelDy: 25,
        barHeight: 12,
        barPitch: 15,
        groupPitch: 56,
        firstBarY: 22,
        valueLabelDx: 7,
        valueLabelDy: 10.5,
        valueClasses: ['lbl mut', 'lbl mut', 'lbl s5t'],
        rx: 3,
      },
      x: ['Pays-Bas', 'Allemagne', 'États-Unis *', 'UE-27', 'France'],
      y: { min: 0, max: 75, ticks: [0, 25, 50, 75] },
      series: [
        {
          key: 'b1',
          color: 's4',
          label: 'Taux d\'emploi 15-24',
          values: [75.999, 50.799, 50, 34.504, 34.504],
          decimals: 1,
        },
        {
          key: 'b2',
          color: 's2',
          label: 'NEET 15-24',
          values: [3.895, 8.206, 0, 9.005, 11.002],
          decimals: 1,
        },
        {
          key: 'b3',
          color: 's5',
          label: 'NEET 20-24',
          values: [5.593, 10.003, 0, 12.899, 16.195],
          decimals: 1,
        },
      ],
      frame: { width: 720, height: 342, left: 150, right: 600.5991354203513, top: 16, bottom: 294 },
    },
  },
  'entrees-annuelles-en-apprentissage-par-niveau-prepare': {
    svg: {
      viewBox: '0 0 720 320',
      titleId: 'cappr-t',
      title: 'Entrées en apprentissage',
      preserveAspectRatio: 'xMidYMid meet',
    },
    title: 'Entrées annuelles en apprentissage, par niveau préparé',
    subtitle: 'France, 2018-2024, en milliers de nouveaux contrats.',
    caption: '<b>Les entrées dans le supérieur sont passées de 67 100 en 2018 à 345 400 en 2024, soit +415 %.</b> La part des entrants préparant un diplôme bac+2 à bac+5 est passée de 39 % à 61 %. En 2024, entrées du secondaire (344 500) et entrées de niveau licence-master (345 400) sont à égalité.',
    sources: ['depp-dg-tresor-tresor-eco-n-376-novembre-2'],
    vintage: '2024',
    legend: [
      { color: 's2', label: 'Supérieur (bac+2 et plus)' },
      { color: 's4', label: 'Secondaire et infra' },
    ],
    type: 'line',
    layout: {
      kind: 'line',
      tickLabelX: 43,
      tickLabelDy: 4,
      axisLabel: { x: 43, y: 14, text: 'milliers d\'entrées en apprentissage', anchor: 'end' },
      axisLineY: 286,
      dotR: 4,
      endLabelDx: 8,
      endLabelDy: 4,
      xLabelY: 304,
    },
    xAxis: { min: 2018, max: 2024, ticks: [2018, 2020, 2022, 2024] },
    x: [2018, 2020, 2022, 2023, 2024],
    y: { min: 0, max: 300, ticks: [0, 100, 200, 300], label: 'milliers d\'entrées en apprentissage' },
    series: [
      {
        key: 's2',
        color: 's2',
        label: 'Supérieur (bac+2 et plus)',
        values: [67.075, 147.984, 268.054, 320.026, 345.508],
      },
      {
        key: 's4',
        color: 's4',
        label: 'Secondaire et infra',
        values: [253.945, 276.98, 314.987, 330.104, 344.5],
      },
    ],
    frame: { width: 720, height: 320, left: 52, right: 602, top: 77.61000000000001, bottom: 285.99 },
  },
  'ou-sont-les-15-64-ans-et-ce-que-100-designe': {
    raw: true,
    title: 'Où sont les 15-64 ans, et ce que « 100 % » désigne',
    subtitle: 'Le taux de chômage de 8,3 % ne se lit pas sur cette barre : son dénominateur est la population active, pas les 15-64 ans.',
    caption: '<b>Le même fait, deux chiffres.</b> Le chômage BIT vaut <b>8,3 % de la population active</b> mais <b>6,4 % des 15-64 ans</b> : l\'écart ne tient qu\'au dénominateur. Le « non-emploi élargi » — chômage plus halo, rapporté aux 15-64 ans — atteint <b>10,8 %</b>. C\'est la source de confusion la plus fréquente du débat.',
    legend: [
      { color: 's3', label: 'En emploi' },
      { color: 's5', label: 'Chômage BIT' },
      { color: 's2', label: 'Halo' },
      { color: 's4', label: 'Autres inactifs' },
    ],
    svg: '<svg viewBox="0 0 720 98" class="cv" role="img" aria-labelledby="cchomdec-t">\n<title id="cchomdec-t">% des 15-64 ans, T2 2026</title>\n<line class="grid" x1="104.0" y1="16" x2="104.0" y2="48"></line>\n<text class="ax" x="104.0" y="72" text-anchor="middle">0</text>\n<line class="grid" x1="353.5" y1="16" x2="353.5" y2="48"></line>\n<text class="ax" x="353.5" y="72" text-anchor="middle">50</text>\n<line class="grid" x1="603.0" y1="16" x2="603.0" y2="48"></line>\n<text class="ax" x="603.0" y="72" text-anchor="middle">100</text>\n<text class="ax al" x="92" y="37">15-64 ans</text>\n<rect class="bar s3f" x="104.0" y="22" width="344.3" height="19" rx="2"></rect>\n<rect class="bar s5f" x="448.3" y="22" width="31.9" height="19" rx="2"></rect>\n<rect class="bar s2f" x="480.3" y="22" width="22.0" height="19" rx="2"></rect>\n<rect class="bar s4f" x="502.2" y="22" width="100.8" height="19" rx="2"></rect>\n</svg>',
    sources: ['insee-insee-informations-rapides-n-192-aout'],
    vintage: 'à confirmer',
    values: {
      svg: { viewBox: '0 0 720 98', titleId: 'cchomdec-t', title: '% des 15-64 ans, T2 2026' },
      title: 'Où sont les 15-64 ans, et ce que « 100 % » désigne',
      subtitle: 'Le taux de chômage de 8,3 % ne se lit pas sur cette barre : son dénominateur est la population active, pas les 15-64 ans.',
      caption: '<b>Le même fait, deux chiffres.</b> Le chômage BIT vaut <b>8,3 % de la population active</b> mais <b>6,4 % des 15-64 ans</b> : l\'écart ne tient qu\'au dénominateur. Le « non-emploi élargi » — chômage plus halo, rapporté aux 15-64 ans — atteint <b>10,8 %</b>. C\'est la source de confusion la plus fréquente du débat.',
      sources: ['insee-insee-informations-rapides-n-192-aout'],
      vintage: '2026',
      legend: [
        { color: 's3', label: 'En emploi' },
        { color: 's5', label: 'Chômage BIT' },
        { color: 's2', label: 'Halo' },
        { color: 's4', label: 'Autres inactifs' },
      ],
      type: 'stacked-bar',
      layout: {
        kind: 'bar',
        gridTop: 16,
        gridBottom: 48,
        tickLabelY: 72,
        catLabelX: 92,
        catLabelDy: 15,
        barHeight: 19,
        barPitch: 22,
        groupPitch: 22,
        firstBarY: 22,
        valueLabelDx: 7,
        valueLabelDy: 10,
        valueClasses: ['lbl mut', 'lbl mut', 'lbl mut', 'lbl mut'],
        rx: 2,
        stacked: true,
      },
      x: ['15-64 ans'],
      y: { min: 0, max: 100, ticks: [0, 50, 100] },
      series: [
        { key: 'b1', color: 's3', label: 'En emploi', values: [68.998] },
        { key: 'b2', color: 's5', label: 'Chômage BIT', values: [6.393] },
        { key: 'b3', color: 's2', label: 'Halo', values: [4.409] },
        { key: 'b4', color: 's4', label: 'Autres inactifs', values: [20.2] },
      ],
      frame: { width: 720, height: 98, left: 104, right: 603.000538667868, top: 16, bottom: 48 },
    },
  },
  'chomage-de-longue-et-de-tres-longue-duree-part-des-chomeur': {
    raw: true,
    title: 'Chômage de longue et de très longue durée, part des chômeurs',
    subtitle: '2025. Contrairement à une idée reçue, la France n\'est pas un cas extrême européen sur cette dimension.',
    caption: '<b>La France est sous la moyenne européenne et sous l\'Allemagne.</b> Le problème français est un <b>niveau élevé du chômage total</b>, pas une composition anormalement enkystée. L\'Italie, avec 50,3 % de chômage de longue durée, est le cas véritablement extrême.',
    legend: [
      { color: 's4', label: '12 mois et plus' },
      { color: 's1', label: '24 mois et plus' },
    ],
    svg: '<svg viewBox="0 0 720 338" class="cv" role="img" aria-labelledby="cltu-t">\n<title id="cltu-t">% des chômeurs, 2025</title>\n<line class="grid" x1="150.0" y1="16" x2="150.0" y2="290"></line>\n<text class="ax" x="150.0" y="312" text-anchor="middle">0</text>\n<line class="grid" x1="333.8" y1="16" x2="333.8" y2="290"></line>\n<text class="ax" x="333.8" y="312" text-anchor="middle">20</text>\n<line class="grid" x1="517.6" y1="16" x2="517.6" y2="290"></line>\n<text class="ax" x="517.6" y="312" text-anchor="middle">40</text>\n<text class="ax al" x="136" y="43">Italie</text>\n<rect class="bar s4f" x="150" y="24" width="462.3" height="13" rx="3"></rect>\n<rect class="bar s1f" x="150" y="41" width="263.8" height="13" rx="3"></rect>\n<text class="lbl mut" x="620.3" y="35">50,3</text>\n<text class="lbl s1t" x="421.8" y="52">28,7</text>\n<text class="ax al" x="136" y="89">Espagne</text>\n<rect class="bar s4f" x="150" y="70" width="295.0" height="13" rx="3"></rect>\n<rect class="bar s1f" x="150" y="87" width="170.9" height="13" rx="3"></rect>\n<text class="lbl mut" x="453.0" y="81">32,1</text>\n<text class="lbl s1t" x="328.9" y="98">18,6</text>\n<text class="ax al" x="136" y="135">UE-27</text>\n<rect class="bar s4f" x="150" y="116" width="289.5" height="13" rx="3"></rect>\n<rect class="bar s1f" x="150" y="133" width="150.7" height="13" rx="3"></rect>\n<text class="lbl mut" x="447.5" y="127">31,5</text>\n<text class="lbl s1t" x="308.7" y="144">16,4</text>\n<text class="ax al" x="136" y="181">Allemagne</text>\n<rect class="bar s4f" x="150" y="162" width="256.4" height="13" rx="3"></rect>\n<rect class="bar s1f" x="150" y="179" width="127.7" height="13" rx="3"></rect>\n<text class="lbl mut" x="414.4" y="173">27,9</text>\n<text class="lbl s1t" x="285.7" y="190">13,9</text>\n<text class="ax al" x="136" y="227">France</text>\n<rect class="bar s4f" x="150" y="208" width="211.4" height="13" rx="3"></rect>\n<rect class="bar s1f" x="150" y="225" width="87.3" height="13" rx="3"></rect>\n<text class="lbl mut" x="369.4" y="219">23,0</text>\n<text class="lbl s1t" x="245.3" y="236">9,5</text>\n<text class="ax al" x="136" y="273">Pays-Bas</text>\n<rect class="bar s4f" x="150" y="254" width="125.9" height="13" rx="3"></rect>\n<rect class="bar s1f" x="150" y="271" width="68.0" height="13" rx="3"></rect>\n<text class="lbl mut" x="283.9" y="265">13,7</text>\n<text class="lbl s1t" x="226.0" y="282">7,4</text>\n</svg>',
    sources: ['eurostat-une-ltu-a'],
    vintage: 'à confirmer',
    values: {
      svg: { viewBox: '0 0 720 338', titleId: 'cltu-t', title: '% des chômeurs, 2025' },
      title: 'Chômage de longue et de très longue durée, part des chômeurs',
      subtitle: '2025. Contrairement à une idée reçue, la France n\'est pas un cas extrême européen sur cette dimension.',
      caption: '<b>La France est sous la moyenne européenne et sous l\'Allemagne.</b> Le problème français est un <b>niveau élevé du chômage total</b>, pas une composition anormalement enkystée. L\'Italie, avec 50,3 % de chômage de longue durée, est le cas véritablement extrême.',
      sources: ['eurostat-une-ltu-a'],
      vintage: '2025',
      legend: [
        { color: 's4', label: '12 mois et plus' },
        { color: 's1', label: '24 mois et plus' },
      ],
      type: 'bar',
      layout: {
        kind: 'bar',
        gridTop: 16,
        gridBottom: 290,
        tickLabelY: 312,
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
      x: ['Italie', 'Espagne', 'UE-27', 'Allemagne', 'France', 'Pays-Bas'],
      y: { min: 0, max: 40, ticks: [0, 20, 40] },
      series: [
        {
          key: 'b1',
          color: 's4',
          label: '12 mois et plus',
          values: [50.305, 32.1, 31.502, 27.9, 23.003, 13.7],
          decimals: 1,
        },
        {
          key: 'b2',
          color: 's1',
          label: '24 mois et plus',
          values: [28.705, 18.596, 16.398, 13.896, 9.499, 7.399],
          decimals: 1,
        },
      ],
      frame: { width: 720, height: 338, left: 150, right: 517.599433114992, top: 16, bottom: 290 },
    },
  },
  'plafond-mensuel-de-l-allocation-chomage': {
    svg: { viewBox: '0 0 720 272', titleId: 'cplafond-t', title: 'plafond mensuel d\'allocation, euros' },
    title: 'Plafond mensuel de l\'allocation chômage',
    subtitle: 'Le seul point où la France est réellement isolée en Europe.',
    caption: '<b>Le plafond français est 2,7 fois le plafond allemand, 5,7 fois l\'italien, 6,3 fois l\'espagnol.</b> Mais il est très largement théorique : <b>0,14 % des allocataires l\'atteignent</b>, et l\'allocation nette moyenne effective est de 1 048 €. C\'est le point sur lequel l\'argument de l\'exception française est empiriquement fondé — et simultanément celui dont l\'incidence budgétaire est la plus faible.',
    sources: ['unedic-unedic-tableau-de-donnees-comparatives'],
    vintage: '2025',
    type: 'bar',
    layout: {
      kind: 'bar',
      gridTop: 16,
      gridBottom: 224,
      tickLabelY: 246,
      catLabelX: 136,
      catLabelDy: 10,
      barHeight: 12,
      barPitch: 15,
      groupPitch: 30,
      firstBarY: 22,
      valueLabelDx: 7,
      valueLabelDy: 10,
      valueClasses: ['lbl s1t'],
      rx: 3,
    },
    x: ['France', 'Allemagne', 'Danemark', 'Suède', 'Italie', 'Espagne', 'Royaume-Uni'],
    y: { min: 0, max: 7500, ticks: [0, 2500, 5000, 7500] },
    series: [
      {
        key: 'b1',
        color: 's1',
        values: [8826.031, 3280.284, 3146, 2340, 1550.258, 1400, 409.794],
        decimals: 0,
      },
    ],
    frame: { width: 720, height: 272, left: 150, right: 538.0147243617905, top: 16, bottom: 224 },
  },
  'indemnite-legale-et-preavis-pour-10-ans-d-anciennete': {
    raw: true,
    title: 'Indemnité légale et préavis, pour 10 ans d\'ancienneté',
    subtitle: 'En mois de salaire. Le résultat est l\'inverse de l\'intuition commune.',
    caption: '<b>Le coût nominal allemand est le double du coût français.</b> L\'indemnité pratique allemande est de 0,5 mois par année d\'ancienneté et le préavis atteint 7 mois à 20 ans d\'ancienneté, contre 2 mois en France quelle que soit l\'ancienneté. <b>Ce que la France a de spécifique n\'est pas le coût de la séparation, c\'est l\'aléa judiciaire.</b>',
    legend: [
      { color: 's4', label: 'Indemnité' },
      { color: 's1', label: 'Préavis' },
    ],
    svg: '<svg viewBox="0 0 720 246" class="cv" role="img" aria-labelledby="cseparr-t">\n<title id="cseparr-t">mois de salaire, 10 ans d\'ancienneté</title>\n<line class="grid" x1="150.0" y1="16" x2="150.0" y2="198"></line>\n<text class="ax" x="150.0" y="220" text-anchor="middle">0</text>\n<line class="grid" x1="334.9" y1="16" x2="334.9" y2="198"></line>\n<text class="ax" x="334.9" y="220" text-anchor="middle">2</text>\n<line class="grid" x1="519.8" y1="16" x2="519.8" y2="198"></line>\n<text class="ax" x="519.8" y="220" text-anchor="middle">4</text>\n<text class="ax al" x="136" y="43">Allemagne</text>\n<rect class="bar s4f" x="150" y="24" width="462.3" height="13" rx="3"></rect>\n<rect class="bar s1f" x="150" y="41" width="369.8" height="13" rx="3"></rect>\n<text class="lbl mut" x="620.3" y="35">5,0</text>\n<text class="lbl s1t" x="527.8" y="52">4,0</text>\n<text class="ax al" x="136" y="89">France</text>\n<rect class="bar s4f" x="150" y="70" width="231.1" height="13" rx="3"></rect>\n<rect class="bar s1f" x="150" y="87" width="184.9" height="13" rx="3"></rect>\n<text class="lbl mut" x="389.1" y="81">2,5</text>\n<text class="lbl s1t" x="342.9" y="98">2,0</text>\n<text class="ax al" x="136" y="135">Royaume-Uni</text>\n<rect class="bar s4f" x="150" y="116" width="213.6" height="13" rx="3"></rect>\n<rect class="bar s1f" x="150" y="133" width="212.6" height="13" rx="3"></rect>\n<text class="lbl mut" x="371.6" y="127">2,3</text>\n<text class="lbl s1t" x="370.6" y="144">2,3</text>\n<text class="ax al" x="136" y="181">États-Unis</text>\n<rect class="bar s4f" x="150" y="162" width="1.0" height="13" rx="3"></rect>\n<rect class="bar s1f" x="150" y="179" width="1.0" height="13" rx="3"></rect>\n<text class="lbl mut" x="158.0" y="173">0,0</text>\n<text class="lbl s1t" x="158.0" y="190">0,0</text>\n</svg>',
    sources: ['france-france-art-l1234-9-et-l1234-1-du-code'],
    vintage: 'à confirmer',
    values: {
      svg: { viewBox: '0 0 720 246', titleId: 'cseparr-t', title: 'mois de salaire, 10 ans d\'ancienneté' },
      title: 'Indemnité légale et préavis, pour 10 ans d\'ancienneté',
      subtitle: 'En mois de salaire. Le résultat est l\'inverse de l\'intuition commune.',
      caption: '<b>Le coût nominal allemand est le double du coût français.</b> L\'indemnité pratique allemande est de 0,5 mois par année d\'ancienneté et le préavis atteint 7 mois à 20 ans d\'ancienneté, contre 2 mois en France quelle que soit l\'ancienneté. <b>Ce que la France a de spécifique n\'est pas le coût de la séparation, c\'est l\'aléa judiciaire.</b>',
      sources: ['france-france-art-l1234-9-et-l1234-1-du-code'],
      vintage: '2026',
      legend: [
        { color: 's4', label: 'Indemnité' },
        { color: 's1', label: 'Préavis' },
      ],
      type: 'bar',
      layout: {
        kind: 'bar',
        gridTop: 16,
        gridBottom: 198,
        tickLabelY: 220,
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
      x: ['Allemagne', 'France', 'Royaume-Uni', 'États-Unis'],
      y: { min: 0, max: 4, ticks: [0, 2, 4] },
      series: [
        { key: 'b1', color: 's4', label: 'Indemnité', values: [5.001, 2.5, 2.31, 0.011], decimals: 1 },
        { key: 'b2', color: 's1', label: 'Préavis', values: [4, 2, 2.3, 0.011], decimals: 1 },
      ],
      frame: { width: 720, height: 246, left: 150, right: 519.7830826343381, top: 16, bottom: 198 },
    },
  },
} satisfies SeriesSet

/** Fiches du chapitre, dans l'ordre : alimente le rail et la recherche. */
export const questions = [
  {
    id: 's4-q1',
    title: 'D\'où vient exactement l\'écart de taux d\'emploi avec l\'Allemagne et les Pays-Bas ?',
  },
  { id: 's4-q2', title: 'Et si on comptait des heures plutôt que des têtes ? L\'écart fond' },
  { id: 's4-q3', title: 'Les seniors : l\'âge légal ne suffit pas à expliquer l\'écart' },
  { id: 's4-q4', title: 'Le cas néerlandais des seniors : de 13,6 % à 69,5 % en trente ans' },
  { id: 's4-q5', title: 'Les jeunes : ce que le taux d\'emploi néerlandais mesure vraiment' },
  {
    id: 's4-q6',
    title: 'L\'apprentissage a-t-il refermé l\'écart avec l\'Allemagne ? Le test par le comptage',
  },
  { id: 's4-q7', title: 'Les dispositifs qui fonctionnent en Allemagne et aux Pays-Bas' },
  {
    id: 's4-q8',
    title: 'Taux d\'emploi, taux de chômage : ce que chaque mesure compte réellement',
  },
  {
    id: 's4-q9',
    title: '« 2,7 millions » ou « 5,8 millions » de chômeurs ? Les deux, et ce ne sont pas les mêmes gens',
  },
  { id: 's4-q10', title: 'Comment se décompose le chômage : durée, âge, diplôme, territoire' },
  {
    id: 's4-q11',
    title: 'Les « emplois non pourvus » : ce que la mesure officielle dit, et ce qu\'elle ne dit pas',
  },
  {
    id: 's4-q12',
    title: 'L\'aléa judiciaire de la rupture : en quoi la France est-elle différente ?',
  },
  { id: 's4-q13', title: 'Réduire la durée d\'indemnisation ferait-il baisser le chômage ?' },
  {
    id: 's4-q14',
    title: 'L\'indemnisation du chômage comparée, et ce que les réformes Hartz ont réellement produit',
  },
  { id: 's4-q15', title: 'La fluidité du marché du travail : mobilité, séparation, reconversion' },
  { id: 's4-q16', title: 'Le tableau des leviers, classés par qualité de preuve' },
  { id: 's4-q17', title: 'Où va la différence entre le coût employeur et le net ?' },
  { id: 's4-q18', title: 'Combien coûte un salarié selon son niveau de salaire ?' },
  { id: 's4-q19', title: 'Pourquoi les nets sont-ils faibles malgré un coût employeur élevé ?' },
  {
    id: 's4-q20',
    title: 'Cotisations patronales ou salariales : la distinction change-t-elle réellement quelque chose ?',
  },
  { id: 's4-q21', title: 'Si on baisse les cotisations patronales de 10 Md€, qui finance ?' },
  { id: 's4-q22', title: 'Augmenter fortement le SMIC détruit-il des emplois ?' },
  { id: 's4-q23', title: 'Où en est la productivité ?' },
] satisfies readonly { id: string; title: string }[]

/**
 * Sources citées dans le texte du chapitre, en plus de celles portées par les
 * tableaux et les figures. La bibliographie les recense aussi : une source
 * citée en prose reste une source du dossier.
 */
export const citedSources = [
  'bozio-bozio-breda-grenet-review-of-economi',
  'dg-tresor-dg-tresor-octobre-2025-cohorte-des-per',
  'dg-tresor-dg-tresor-tresor-eco-n-376-novembre-2',
  'dg-tresor-dg-tresor-tresor-economics-n-110-mars',
  'drees-drees-les-retraites-et-les-retraites-e',
  'eurostat-dares-enquete-acemo-definition-eurosta',
  'eurostat-eurostat-enquete-forces-de-travail-202', 'eurostat-lfsi-emp-a-5',
  'eurostat-nama-10-a10-e', 'euwals-euwals-van-vuuren-wolthoff-de-econom',
  'france-france-ministere-de-la-justice-sdse',
  'goulart-oesch-goulart-oesch-job-tenure-in-western',
  'insee-accompagnement-crepon-duflo-gurgand', 'insee-france-travail-dares-statistiques-du',
  'ocde-ocde-taxing-wages-2026-donnees-2025-c',
  'unedic-france-unedic-convention-du-15-novemb',
  'unedic-ofce-revue-de-l-ofce-n-184-2024-ma',
  'unedic-unedic-convention-du-15-novembre-2024-e',
] satisfies readonly SourceId[]
