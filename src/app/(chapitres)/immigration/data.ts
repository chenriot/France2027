// Généré par `npm run extract` depuis Temp/chiffres2027 (3).html.
// Toutes les données chiffrées du chapitre vivent ici, chacune sous sa source
// et son millésime. Voir CLAUDE.md, règles 2 à 4.
import type { ChapterMeta, SeriesSet, SourceId, Tables } from '@/lib/types'

export const meta = {
  slug: 'immigration',
  num: 'Thème 07',
  title: 'Immigration et intégration',
  shortTitle: 'Immigration et intégration',
  note: 'Sur ce thème plus que tout autre, la question « quel est le chiffre ? » est mal posée. Trois indicateurs différents mesurent trois choses différentes.',
  status: 'complete',
  updated: '2026-08',
  legacyAnchor: 's7',
} satisfies ChapterMeta

export const tables = {
  '2024': {
    vintage: '2024',
    sources: ['insee-insee-enquete-emploi-en-continu-donnee'],
    columns: [
      { key: '2024', header: '2024', type: 'text', headerNumeric: false },
      { key: 'immigres', header: 'Immigrés', type: 'number', headerNumeric: true },
      { key: 'non-immigres', header: 'Non-immigrés', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Taux d\'emploi' },
          { v: 62.4, d: 1, u: '%' },
          { v: 69.8, d: 1, u: '%' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Taux de chômage' },
          { v: 12, d: 0, u: '%' },
          { v: 7, d: 0, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Taux d\'activité des hommes' },
          { v: 79.9, d: 1, u: '%' },
          { v: 77.1, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Taux d\'activité des femmes' },
          { v: 62.7, d: 1, u: '%' },
          { v: 72.8, d: 1, u: '%' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'En CDI' },
          { v: 69, d: 0, u: '%' },
          { v: 74, d: 0, u: '%' },
        ],
      },
    ],
  },
  indicateur: {
    vintage: '2025',
    sources: ['insee-ministere-de-l-interieur-direction-gene'],
    columns: [
      { key: 'indicateur', header: 'Indicateur', type: 'text', headerNumeric: false },
      { key: 'valeur', header: 'Valeur', type: 'number', headerNumeric: true },
      { key: 'ce-qu-il-mesure', header: 'Ce qu\'il mesure', type: 'text', headerNumeric: false },
    ],
    rows: [
      {
        cells: [
          { t: 'Premiers titres de séjour' },
          { t: '343 024 (2024)<br>377 000 (2025)' },
          { t: 'Flux administratif, ressortissants hors UE uniquement' },
        ],
      },
      {
        cells: [
          { t: 'Entrées au sens large (Insee)' },
          { t: '347 000 (2023)<br>313 000 (2024)' },
          { t: 'Inclut les ressortissants UE, hors procédure' },
        ],
      },
      {
        cells: [
          { t: 'Solde migratoire' },
          { t: 'n.d. depuis 2023' },
          { t: 'Résidu comptable, pas une observation directe' },
        ],
      },
    ],
  },
  categorie: {
    vintage: '2025',
    sources: ['insee-insee-et-ined-definitions-officielles-e'],
    columns: [
      { key: 'categorie', header: 'Catégorie', type: 'text', headerNumeric: false },
      {
        key: 'definition-insee-ined',
        header: 'Définition Insee/Ined',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'effectif', header: 'Effectif', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: '<strong>Immigré</strong>' },
          {
            t: 'Né étranger à l\'étranger, résidant en France. Qualité <em>permanente</em>, conservée après naturalisation',
          },
          { v: 7.73, d: 2, u: 'M (11,3 %)' },
        ],
      },
      {
        cells: [
          { t: '<strong>Étranger</strong>' },
          { t: 'Réside en France sans la nationalité française, né en France ou non' },
          { v: 6.03, d: 2, u: 'M (8,8 %)' },
        ],
      },
      {
        cells: [
          { t: '— dont nés en France' },
          { t: 'Mineurs pour l\'essentiel' },
          { v: 0.89, d: 2, u: 'M' },
        ],
      },
      {
        cells: [
          { t: '<strong>Naturalisé</strong>' },
          { t: 'Immigré ayant acquis la nationalité française' },
          { v: 2.59, d: 2, u: 'M (33 %)' },
        ],
      },
      {
        cells: [
          { t: '<strong>Demandeur d\'asile</strong>' },
          { t: 'Demande déposée, décision en attente' },
          { v: 145210, d: 0, u: '(2025)' },
        ],
      },
      {
        cells: [
          { t: '<strong>Situation irrégulière</strong>' },
          { t: 'Sans titre valide' },
          { t: 'Non dénombrable' },
        ],
      },
    ],
  },
  etude: {
    vintage: '2023',
    sources: ['ocde-cepii-ocde-perspectives-des-migration'],
    columns: [
      { key: 'etude', header: 'Étude', type: 'text', headerNumeric: false },
      { key: 'resultat', header: 'Résultat', type: 'text', headerNumeric: false },
    ],
    rows: [
      {
        cells: [
          { t: 'Chojnicki & Ragot, CEPII (1979-2011)' },
          { t: 'Entre −0,5 % et +0,05 % du PIB selon les années' },
        ],
      },
      {
        cells: [
          { t: 'CEPII (2018), approche élargie' },
          { v: 12, d: 0, u: 'Md€ (2010) à −19,8 Md€ (2006) selon le périmètre', sign: true },
        ],
      },
      {
        cells: [
          { t: 'OCDE (2013)' },
          { t: 'Impact net proche de zéro, quelques dixièmes de point de PIB' },
        ],
      },
      {
        cells: [
          { t: 'J.-P. Gourévitch' },
          { t: 'Coût net de 17,4 à 36,4 Md€ (périmètre contesté par le CEPII)' },
        ],
      },
    ],
  },
  poste: {
    vintage: '2026',
    sources: [
      'document-de-politique-transversale-pol-document-de-politiq',
      'ocde-ocde-international-migration-outlook-20',
    ],
    columns: [
      { key: 'poste', header: 'Poste', type: 'text', headerNumeric: false },
      { key: 'montant', header: 'Montant', type: 'number', headerNumeric: true },
      { key: 'statut', header: 'Statut', type: 'text', headerNumeric: false },
      { key: 'source-ou-formule', header: 'Source ou formule', type: 'text', headerNumeric: false },
    ],
    rows: [
      {
        cells: [
          { t: '<b>Retraites, régime général, aux nés à l\'étranger</b>' },
          { v: 24, d: 1, u: 'Md€', strong: true },
          { t: 'Mesuré' },
          {
            t: 'CNAV, 31/12/2024 — 3 109 826 retraités, soit 20,2 % des effectifs mais <b>14,8 % des prestations</b>',
          },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Retraites, extrapolation à tous les régimes' },
          { v: 39, d: 0, u: 'à 46 Md€' },
          { t: 'Estimé' },
          {
            t: 'Part du RG (14,8 %) pondérée à la baisse pour les autres régimes (≈ 9 %, condition de nationalité dans la fonction publique, droits complémentaires plus faibles) → part d\'ensemble 11-13 %',
          },
        ],
      },
      {
        cells: [
          { t: '<b>ASPA versée aux nés à l\'étranger</b>' },
          { v: 1.3, d: 1, u: 'Md€', strong: true },
          { t: 'Mesuré' },
          { t: 'CNAV, 2024 — <b>40 % du total ASPA</b>, la part publiée la plus élevée du dossier' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Assurance maladie' },
          { v: 27, d: 0, u: 'à 29 Md€' },
          { t: 'Estimé' },
          { t: 'ONDAM 2024 ≈ 255 Md€ × clé 10,5-11,5 %' },
        ],
      },
      {
        cells: [
          { t: '<b>AME</b>' },
          { v: 1.39, d: 2, u: 'Md€', strong: true },
          { t: 'Mesuré' },
          { t: 'Dépense constatée 2024 ; 465 744 bénéficiaires au 30/09/2024' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Prestations CNAF (familiales, logement, RSA, prime d\'activité)' },
          { v: 13, d: 0, u: 'à 16 Md€' },
          { t: 'Estimé' },
          {
            t: 'Masse CNAF ≈ 100 Md€ × 11 % d\'allocataires étrangers, majoré d\'un facteur 1,2-1,45 (foyers plus grands, prestations sous condition de ressources plus fréquentes)',
          },
        ],
      },
      {
        cells: [
          { t: '— dont RSA' },
          { v: 1.8, d: 1, u: 'à 2,2 Md€' },
          { t: 'Estimé' },
          { t: '15-18 % des foyers sur 11,97 Md€' },
        ],
      },
      {
        cells: [
          { t: '— dont AAH' },
          { v: 1, d: 1, u: 'à 1,2 Md€' },
          { t: 'Estimé' },
          {
            t: '8-10 % sur 11,97 Md€ — <b>fiabilité très faible</b>, donnée uniquement pour ne pas laisser un poste de 12 Md€ à zéro par défaut',
          },
        ],
      },
      {
        cells: [
          { t: 'Chômage indemnisé' },
          { v: 5, d: 1, u: 'à 6,5 Md€' },
          { t: 'Estimé' },
          { v: 37.1, d: 1, u: 'Md€ × 17 % d\'indemnisés × 0,88 (allocation moyenne inférieure)' },
        ],
      },
      {
        cells: [
          { t: '<b>Éducation, périmètre « immigrés »</b>' },
          { v: 6.6, d: 1, u: 'Md€', approx: true, strong: true },
          { t: 'Estimé' },
          {
            v: 450000,
            d: 0,
            u: 'enfants immigrés d\'âge scolaire × 10 920 €, plus 1,74 Md€ mesurés pour le supérieur',
            approx: true,
          },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Éducation, périmètre « étrangers »' },
          { v: 11, d: 0, u: 'à 12 Md€' },
          { t: 'Estimé' },
          { t: '≈ 1,0-1,1 M d\'élèves étrangers × 10 920 € — dont la majorité sont <b>nés en France</b>' },
        ],
      },
      {
        cells: [
          { t: '<b>Politique migratoire, document de politique transversale</b>' },
          { v: 7.82, d: 2, u: 'Md€', strong: true },
          { t: 'Mesuré' },
          {
            t: 'DPT « Politique française de l\'immigration et de l\'intégration », PLF 2026, 19 programmes de 12 missions',
          },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '— dont mission « Immigration, asile et intégration »' },
          { v: 2.16, d: 2, u: 'Md€' },
          { t: 'Mesuré' },
          { t: 'Sénat, rapport PLF 2026 — <b>21,6 % du DPT seulement</b>' },
        ],
      },
      {
        cells: [
          { t: 'Contrôle de l\'immigration irrégulière' },
          { v: 1.8, d: 1, u: 'Md€', approx: true },
          { t: 'Mesuré' },
          { t: 'Cour des comptes, janvier 2024, données 2022 — ≈ 16 000 ETP' },
        ],
      },
      {
        cells: [
          { t: 'Mineurs non accompagnés, à la charge des départements' },
          { v: 1, d: 1, u: 'Md€', approx: true },
          { t: 'Estimé' },
          { v: 31000, d: 0, u: '× 90 €/jour × 365' },
        ],
      },
      {
        cells: [
          { t: 'Allocation pour demandeur d\'asile' },
          { v: 0.31, d: 2, u: 'Md€' },
          { t: 'Mesuré' },
          { t: 'PLF 2026 — seul minimum social intégralement imputable par construction' },
        ],
      },
      {
        cells: [
          { t: '<b>Total hors biens publics purs</b>' },
          { v: 100, d: 0, u: 'à 112 Md€', approx: true, strong: true },
          { t: 'Estimé' },
          { t: 'Périmètre « immigrés »' },
        ],
        total: true,
      },
    ],
  },
  'le-detail-du-controle-de-l-immigration-irreguliere': {
    vintage: '2026',
    sources: [
      'document-de-politique-transversale-pol-document-de-politiq',
      'ocde-ocde-international-migration-outlook-20',
    ],
    columns: [
      {
        key: 'le-detail-du-controle-de-l-immigration-irreguliere',
        header: 'Le détail du contrôle de l\'immigration irrégulière',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'montant', header: 'Montant', type: 'number', headerNumeric: true },
      { key: 'detail', header: 'Détail', type: 'text', headerNumeric: false },
    ],
    rows: [
      {
        cells: [
          { t: 'Personnel de la police aux frontières' },
          { v: 980, d: 0, u: 'M€' },
          { v: 11500, d: 0, u: 'agents en métropole, 1 300 outre-mer' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Rétention administrative' },
          { v: 225, d: 0, u: 'M€' },
          { t: 'dont 155 M€ de masse salariale policière' },
        ],
      },
      {
        cells: [
          { t: 'Éloignement forcé' },
          { v: 50.3, d: 1, u: 'M€' },
          {
            v: 11409,
            d: 0,
            u: 'éloignements : 21,8 M€ de billets commerciaux, 3 M€ de vols affrétés, 25,5 M€ de personnel',
          },
        ],
      },
      {
        cells: [
          { t: 'Total' },
          { v: 1.8, d: 1, u: 'Md€', approx: true },
          {
            v: 16000,
            d: 0,
            u: 'ETP ; le ministère de l\'Intérieur en porte 90 %, soit 8 % de son budget',
            approx: true,
          },
        ],
        total: true,
      },
    ],
  },
  recette: {
    vintage: '2026',
    sources: [
      'document-de-politique-transversale-pol-document-de-politiq',
      'ocde-ocde-international-migration-outlook-20',
    ],
    columns: [
      { key: 'recette', header: 'Recette', type: 'text', headerNumeric: false },
      { key: 'montant-estime', header: 'Montant estimé', type: 'number', headerNumeric: true },
      { key: 'fiabilite', header: 'Fiabilité', type: 'number', headerNumeric: true },
      { key: 'cle-retenue', header: 'Clé retenue', type: 'text', headerNumeric: false },
    ],
    rows: [
      {
        cells: [
          { t: '<b>Cotisations sociales</b>' },
          { v: 50, d: 0, u: 'à 55 Md€', strong: true },
          { t: 'Moyenne' },
          {
            v: 554.4,
            d: 1,
            u: 'Md€ × clé masse salariale 10,0 %, corrigée de −5 à −10 % pour les allégements concentrés sous 1,6 SMIC, zone de surreprésentation',
          },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'TVA et fiscalité indirecte' },
          { v: 20, d: 0, u: 'à 24 Md€' },
          { t: 'Moyenne-faible' },
          {
            v: 210.7,
            d: 1,
            u: 'Md€ × 10,5 % ; propension à consommer supérieure, minorée des transferts vers l\'étranger',
          },
        ],
      },
      {
        cells: [
          { t: 'CSG-CRDS' },
          { v: 13, d: 0, u: 'à 16 Md€' },
          { t: 'Faible' },
          {
            v: 152.4,
            d: 1,
            u: 'Md€ × 9,5 % (moyenne pondérée : 10 % sur l\'activité, 13 % sur les revenus de remplacement, 4 % sur le capital)',
          },
        ],
      },
      {
        cells: [
          { t: 'Impôt sur le revenu' },
          { v: 4.5, d: 1, u: 'à 6,0 Md€' },
          { t: 'Faible' },
          {
            v: 88,
            d: 0,
            u: 'Md€ × 5-7 %, l\'écart de revenu de 11 % à la médiane se traduisant par un écart de contribution bien supérieur du fait de la progressivité',
          },
        ],
      },
      {
        cells: [
          { t: 'Taxes foncières et d\'habitation' },
          { v: 3.5, d: 1, u: 'à 4,0 Md€' },
          { t: 'Faible' },
          { v: 57.8, d: 1, u: 'Md€ × 6-7 %' },
        ],
      },
      {
        cells: [
          { t: '<b>Taxes sur les titres de séjour</b>' },
          { v: 0.19, d: 2, u: 'Md€', strong: true },
          { t: 'Mesuré' },
          { t: 'Assemblée nationale, exercice 2017 — <b>seul poste de recette réellement mesuré</b>' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>Total</b>' },
          { v: 91, d: 0, u: 'à 105 Md€', strong: true },
          null,
          { t: 'Soit 7,3 à 8,4 % des prélèvements obligatoires, pour 11,6 % de la population' },
        ],
        total: true,
      },
    ],
  },
  'ocde-memes-donnees-meme-pays-meme-periode-2006-2018': {
    vintage: '2018',
    sources: [
      'document-de-politique-transversale-pol-document-de-politiq',
      'ocde-ocde-international-migration-outlook-20',
    ],
    columns: [
      {
        key: 'ocde-memes-donnees-meme-pays-meme-periode-2006-2018',
        header: 'OCDE, mêmes données, même pays, même période (2006-2018)',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'contribution-nette', header: 'Contribution nette', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: '<b>Hors</b> biens publics purs' },
          { v: 1.02, d: 2, u: '% du PIB', sign: true, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>Avec</b> biens publics purs imputés au coût moyen' },
          { v: -0.85, d: 2, u: '% du PIB', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Écart de convention' },
          { v: 1.87, d: 2, u: 'point de PIB, soit ≈ 55 Md€', strong: true },
        ],
        total: true,
      },
    ],
  },
  'agregation-de-nos-propres-postes-perimetre-immigres': {
    vintage: '2026',
    sources: [
      'document-de-politique-transversale-pol-document-de-politiq',
      'ocde-ocde-international-migration-outlook-20',
    ],
    columns: [
      {
        key: 'agregation-de-nos-propres-postes-perimetre-immigres',
        header: 'Agrégation de nos propres postes, périmètre « immigrés »',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'montant', header: 'Montant', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Recettes estimées' },
          { t: '91 à 105 Md€ <i>(centre ≈ 98)</i>' },
        ],
      },
      {
        cells: [
          { t: 'Dépenses estimées hors biens publics purs' },
          { t: '100 à 112 Md€ <i>(centre ≈ 106)</i>' },
        ],
      },
      {
        cells: [
          { t: '<b>Solde hors biens publics purs</b>' },
          { v: -8, d: 0, u: 'Md€, soit −0,27 % du PIB', approx: true, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Biens publics purs au coût moyen (11,6 % × ≈ 190 Md€)' },
          { v: -22, d: 0, u: 'Md€' },
        ],
      },
      {
        cells: [
          { t: '<b>Solde avec biens publics purs</b>' },
          { v: -30, d: 0, u: 'Md€, soit −1,0 % du PIB', approx: true, strong: true },
        ],
        emphasis: true,
      },
    ],
  },
  'etude-2': {
    vintage: '2026',
    sources: [
      'document-de-politique-transversale-pol-document-de-politiq',
      'ocde-ocde-international-migration-outlook-20',
    ],
    columns: [
      { key: 'etude', header: 'Étude', type: 'text', headerNumeric: false },
      { key: 'statut', header: 'Statut', type: 'text', headerNumeric: false },
      { key: 'population', header: 'Population', type: 'text', headerNumeric: false },
      { key: 'biens-publics-purs', header: 'Biens publics purs', type: 'text', headerNumeric: false },
      { key: 'resultat', header: 'Résultat', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: '<b>CEPII</b> — Chojnicki, Ragot, Sokhna, <i>Revue économique</i> 2022' },
          { t: '<b>Académique, comité de lecture</b>' },
          { t: 'Immigrés (déf. Insee)' },
          { t: 'Attribués aux natifs seuls' },
          { v: -0.5, d: 1, u: '% à +0,05 % du PIB', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>OCDE</b>, <i>IMO 2021</i>' },
          { t: 'Institutionnel' },
          { t: 'Nés à l\'étranger' },
          { t: 'Deux variantes publiées' },
          { v: 1.02, d: 2, u: '% / −0,85 %', sign: true, strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'OCDE, <i>IMO 2013</i>' },
          { t: 'Institutionnel' },
          { t: 'Ménages nés à l\'étranger' },
          { t: 'Coût moyen imputé' },
          { v: -0.52, d: 2, u: '% du PIB', approx: true },
        ],
      },
      {
        cells: [
          { t: 'CAE, <i>Focus</i> n° 072, 2021' },
          { t: 'Institutionnel (synthèse)' },
          null,
          { t: 'Discute les deux' },
          { t: '± 0,5 % du PIB ; ± 0,2 % hors 2011' },
        ],
      },
      {
        cells: [
          { t: 'Observatoire de l\'immigration et de la démographie, 2023' },
          { t: '<b>Non académique</b>' },
          { t: 'Étrangers extra-UE <b>hors actifs occupés</b>' },
          { t: 'Imputés' },
          { t: 'Coût net 41 Md€' },
        ],
        missing: true,
      },
      {
        cells: [
          { t: 'Contribuables associés / Gourévitch, 2023' },
          { t: '<b>Non académique</b>' },
          { t: 'Immigration légale + illégale + <b>descendants</b>' },
          { t: 'Imputés' },
          { v: 53.9, d: 1, u: 'Md€/an', approx: true },
        ],
        missing: true,
      },
    ],
  },
  organisme: {
    vintage: '2026',
    sources: [
      'document-de-politique-transversale-pol-document-de-politiq',
      'ocde-ocde-international-migration-outlook-20',
    ],
    columns: [
      { key: 'organisme', header: 'Organisme', type: 'text', headerNumeric: false },
      { key: 'prestation', header: 'Prestation', type: 'text', headerNumeric: false },
      {
        key: 'ventilation-par-nationalite',
        header: 'Ventilation par nationalité',
        type: 'text',
        headerNumeric: false,
      },
      {
        key: 'par-pays-de-naissance',
        header: 'Par pays de naissance',
        type: 'text',
        headerNumeric: false,
      },
    ],
    rows: [
      {
        cells: [
          { t: 'CNAV' },
          { t: 'Retraites, ASPA' },
          { t: 'Non' },
          { t: '<b>Oui — publiée</b>', n: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'CNAF' },
          { t: 'RSA, prime d\'activité, aides au logement, allocations familiales' },
          { t: 'Collectée pour l\'éligibilité, <b>non publiée par prestation</b>' },
          { t: 'Non' },
        ],
      },
      {
        cells: [
          { t: 'DREES' },
          { t: 'Minima sociaux' },
          { t: 'Non' },
          { t: 'Non' },
        ],
      },
      {
        cells: [
          { t: 'Unédic' },
          { t: 'Chômage indemnisé' },
          { t: 'Non' },
          { t: 'Non' },
        ],
      },
      {
        cells: [
          { t: 'CNAM' },
          { t: 'Assurance maladie, indemnités journalières' },
          { t: 'Non' },
          { t: 'Non' },
        ],
      },
      {
        cells: [
          { t: 'DGFiP' },
          { t: 'Impôt sur le revenu, TVA, foncier' },
          { t: 'Non' },
          { t: 'Non' },
        ],
      },
      {
        cells: [
          { t: 'Urssaf' },
          { t: 'Cotisations, CSG' },
          { t: 'Non' },
          { t: 'Non' },
        ],
      },
    ],
  },
  'part-d-etrangers-parmi-les-mis-en-cause-2024': {
    vintage: '2024',
    sources: ['insee-ssmsi-donnees-2024-reponses-parlementa'],
    columns: [
      {
        key: 'part-d-etrangers-parmi-les-mis-en-cause-2024',
        header: 'Part d\'étrangers parmi les mis en cause (2024)',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'c2', header: '%', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Violences sexuelles' },
          { v: 13, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Homicides' },
          { v: 18, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Coups et blessures volontaires' },
          { v: 20, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Vols avec arme' },
          { v: 22, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Vols violents sans arme' },
          { v: 30, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Cambriolages de logement' },
          { v: 38, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Vols avec violence dans les transports' },
          { v: 48, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Vols sans violence dans les transports' },
          { v: 80, d: 0 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<em>Rappel : part dans la population résidente</em>' },
          { v: 8.8, d: 1 },
        ],
        total: true,
      },
    ],
  },
  etape: {
    vintage: '2024',
    sources: ['insee-ssmsi-donnees-2024-reponses-parlementa'],
    columns: [
      { key: 'etape', header: 'Étape', type: 'text', headerNumeric: false },
      { key: 'part-d-etrangers', header: 'Part d\'étrangers', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Population générale (2019)' },
          { v: 7.4, d: 1, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Mis en cause' },
          { v: 18, d: 0, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Auteurs traités par la justice' },
          { v: 14, d: 0, u: '%' },
        ],
      },
      {
        cells: [
          { t: 'Population détenue' },
          { v: 23, d: 0, u: 'à 25 %' },
        ],
        emphasis: true,
      },
    ],
  },
  'part-d-etrangers-parmi-les-mis-en-cause-2024-2': {
    vintage: '2024',
    sources: ['insee-ssmsi-donnees-2022-a-2024-communiquees'],
    columns: [
      {
        key: 'part-d-etrangers-parmi-les-mis-en-cause-2024',
        header: 'Part d\'étrangers parmi les mis en cause, 2024',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'part', header: 'Part', type: 'number', headerNumeric: true },
      {
        key: 'rapport-a-leur-part-dans-la-population-8-8',
        header: 'Rapport à leur part dans la population (8,8 %)',
        type: 'number',
        headerNumeric: true,
      },
    ],
    rows: [
      {
        cells: [
          { t: 'Violences sexuelles' },
          { v: 13, d: 0, u: '%' },
          { v: 1.5, d: 1, u: '×' },
        ],
      },
      {
        cells: [
          { t: '<b>Homicides</b>' },
          { v: 18, d: 0, u: '%', strong: true },
          { v: 2, d: 1, u: '×', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Coups et blessures volontaires' },
          { v: 20, d: 0, u: '%' },
          { v: 2.3, d: 1, u: '×' },
        ],
      },
      {
        cells: [
          { t: 'Vols avec arme' },
          { v: 22, d: 0, u: '%' },
          { v: 2.5, d: 1, u: '×' },
        ],
      },
      {
        cells: [
          { t: 'Vols violents sans arme' },
          { v: 30, d: 0, u: '%' },
          { v: 3.4, d: 1, u: '×' },
        ],
      },
      {
        cells: [
          { t: 'Cambriolages de logement' },
          { v: 38, d: 0, u: '%' },
          { v: 4.3, d: 1, u: '×' },
        ],
      },
      {
        cells: [
          { t: 'Vols sans violence dans les transports en commun (2023)' },
          { v: 80, d: 0, u: '%' },
          { v: 9.1, d: 1, u: '×' },
        ],
        emphasis: true,
      },
    ],
  },
} satisfies Tables

export const series = {
  'ce-que-contient-reellement-la-politique-d-immigration-budg': {
    raw: true,
    title: 'Ce que contient réellement la « politique d\'immigration » budgétaire',
    subtitle: 'Document de politique transversale, crédits de paiement 2025, en millions d\'euros.',
    caption: '<b>Les deux premiers postes sont l\'enseignement supérieur et l\'AME</b> — et la mission budgétaire éponyme n\'en représente qu\'un cinquième. Les 1 742,9 M€ d\'étudiants étrangers dans le supérieur constituent la plus grosse ligne du document, davantage que l\'AME et davantage que la police nationale. Ce point est presque toujours absent du débat public.',
    svg: '<svg viewBox="0 0 720 422" class="cv" role="img" aria-labelledby="cdpt-t">\n<title id="cdpt-t">millions d\'euros, crédits de paiement 2025</title>\n<line class="grid" x1="236.0" y1="16" x2="236.0" y2="374"></line>\n<text class="ax" x="236.0" y="396" text-anchor="middle">0</text>\n<line class="grid" x1="343.7" y1="16" x2="343.7" y2="374"></line>\n<text class="ax" x="343.7" y="396" text-anchor="middle">500</text>\n<line class="grid" x1="451.4" y1="16" x2="451.4" y2="374"></line>\n<text class="ax" x="451.4" y="396" text-anchor="middle">1 000</text>\n<line class="grid" x1="559.1" y1="16" x2="559.1" y2="374"></line>\n<text class="ax" x="559.1" y="396" text-anchor="middle">1 500</text>\n<text class="ax al" x="222" y="32">Formations supérieures</text>\n<rect class="bar s1f" x="236" y="22" width="375.5" height="12" rx="3"></rect>\n<text class="lbl s1t" x="618.5" y="32">1 743</text>\n<text class="ax al" x="222" y="62">Immigration et asile</text>\n<rect class="bar s1f" x="236" y="52" width="362.2" height="12" rx="3"></rect>\n<text class="lbl s1t" x="605.2" y="62">1 681</text>\n<text class="ax al" x="222" y="92">Police nationale</text>\n<rect class="bar s1f" x="236" y="82" width="295.9" height="12" rx="3"></rect>\n<text class="lbl s1t" x="538.9" y="92">1 373</text>\n<text class="ax al" x="222" y="122">Protection maladie (AME)</text>\n<rect class="bar s1f" x="236" y="112" width="284.3" height="12" rx="3"></rect>\n<text class="lbl s1t" x="527.3" y="122">1 320</text>\n<text class="ax al" x="222" y="152">Intégration et nationalité</text>\n<rect class="bar s1f" x="236" y="142" width="78.9" height="12" rx="3"></rect>\n<text class="lbl s1t" x="321.9" y="152">366</text>\n<text class="ax al" x="222" y="182">Administration territoriale</text>\n<rect class="bar s1f" x="236" y="172" width="55.9" height="12" rx="3"></rect>\n<text class="lbl s1t" x="298.9" y="182">260</text>\n<text class="ax al" x="222" y="212">Enseignement scolaire 1er degré</text>\n<rect class="bar s1f" x="236" y="202" width="33.9" height="12" rx="3"></rect>\n<text class="lbl s1t" x="276.9" y="212">157</text>\n<text class="ax al" x="222" y="242">Gendarmerie nationale</text>\n<rect class="bar s1f" x="236" y="232" width="30.7" height="12" rx="3"></rect>\n<text class="lbl s1t" x="273.7" y="242">143</text>\n<text class="ax al" x="222" y="272">Politique de la ville</text>\n<rect class="bar s1f" x="236" y="262" width="27.0" height="12" rx="3"></rect>\n<text class="lbl s1t" x="270.0" y="272">125</text>\n<text class="ax al" x="222" y="302">Conseil d\'État et juridictions</text>\n<rect class="bar s1f" x="236" y="292" width="24.8" height="12" rx="3"></rect>\n<text class="lbl s1t" x="267.8" y="302">115</text>\n<text class="ax al" x="222" y="332">Enseignement scolaire 2nd degré</text>\n<rect class="bar s1f" x="236" y="322" width="24.4" height="12" rx="3"></rect>\n<text class="lbl s1t" x="267.4" y="332">113</text>\n<text class="ax al" x="222" y="362">Autres programmes</text>\n<rect class="bar s1f" x="236" y="352" width="73.7" height="12" rx="3"></rect>\n<text class="lbl s1t" x="316.7" y="362">342</text>\n</svg>',
    sources: ['document-de-politique-transversale-pol-document-de-politiq'],
    vintage: 'à confirmer',
    values: {
      svg: {
        viewBox: '0 0 720 422',
        titleId: 'cdpt-t',
        title: 'millions d\'euros, crédits de paiement 2025',
      },
      title: 'Ce que contient réellement la « politique d\'immigration » budgétaire',
      subtitle: 'Document de politique transversale, crédits de paiement 2025, en millions d\'euros.',
      caption: '<b>Les deux premiers postes sont l\'enseignement supérieur et l\'AME</b> — et la mission budgétaire éponyme n\'en représente qu\'un cinquième. Les 1 742,9 M€ d\'étudiants étrangers dans le supérieur constituent la plus grosse ligne du document, davantage que l\'AME et davantage que la police nationale. Ce point est presque toujours absent du débat public.',
      sources: ['document-de-politique-transversale-pol-document-de-politiq'],
      vintage: '2025',
      type: 'bar',
      layout: {
        kind: 'bar',
        gridTop: 16,
        gridBottom: 374,
        tickLabelY: 396,
        catLabelX: 222,
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
      x: [
        'Formations supérieures', 'Immigration et asile', 'Police nationale',
        'Protection maladie (AME)', 'Intégration et nationalité', 'Administration territoriale',
        'Enseignement scolaire 1er degré', 'Gendarmerie nationale', 'Politique de la ville',
        'Conseil d\'État et juridictions', 'Enseignement scolaire 2nd degré', 'Autres programmes',
      ],
      y: { min: 0, max: 1500, ticks: [0, 500, 1000, 1500] },
      series: [
        {
          key: 'b1',
          color: 's1',
          values: [
            1743.268, 1681, 1373, 1319.87, 366.295, 259.517, 157.382, 142.526, 125.348, 115.135,
            113.278, 342.154,
          ],
          decimals: 0,
        },
      ],
      frame: { width: 720, height: 422, left: 236, right: 559.1, top: 16, bottom: 374 },
    },
  },
} satisfies SeriesSet

/** Fiches du chapitre, dans l'ordre : alimente le rail et la recherche. */
export const questions = [
  { id: 's7-q1', title: 'Combien d\'immigrés entrent chaque année ?' },
  { id: 's7-q2', title: 'Immigré, étranger, réfugié, naturalisé : quelle différence ?' },
  { id: 's7-q3', title: 'L\'immigration coûte-t-elle ou rapporte-t-elle ? Les postes détaillés' },
  {
    id: 's7-q4',
    title: 'Chaque poste, chiffré : ce qui est mesuré, ce qui est estimé, ce qui ne l\'est pas',
  },
  { id: 's7-q5', title: 'Emploi et revenus' },
  { id: 's7-q6', title: 'Statistiques pénales : que mesurent exactement les pourcentages ?' },
  { id: 's7-q7', title: 'Peut-on déduire une causalité d\'une surreprésentation ?' },
  { id: 's7-q8', title: 'Que se passerait-il si la France réduisait fortement l\'immigration ?' },
] satisfies readonly { id: string; title: string }[]

/**
 * Sources citées dans le texte du chapitre, en plus de celles portées par les
 * tableaux et les figures. La bibliographie les recense aussi : une source
 * citée en prose reste une source du dossier.
 */
export const citedSources = [
  'insee-insee-enquete-emploi-en-continu-donnee',
  'insee-insee-et-ined-definitions-officielles-e',
  'insee-ministere-de-l-interieur-direction-gene',
  'insee-ssmsi-donnees-2022-a-2024-communiquees',
  'insee-ssmsi-donnees-2024-reponses-parlementa',
  'ocde-cepii-ocde-perspectives-des-migration',
  'ocde-ocde-international-migration-outlook-20',
] satisfies readonly SourceId[]
