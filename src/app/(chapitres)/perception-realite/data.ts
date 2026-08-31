// Généré par `npm run extract` depuis Temp/chiffres2027 (3).html.
// Toutes les données chiffrées du chapitre vivent ici, chacune sous sa source
// et son millésime. Voir CLAUDE.md, règles 2 à 4.
import type { ChapterMeta, SeriesSet, SourceId, Tables } from '@/lib/types'

export const meta = {
  slug: 'perception-realite',
  num: 'Thème 18',
  title: 'Perception contre réalité',
  shortTitle: 'Perception contre réalité',
  note: 'Section incomplète, et il faut le dire : les chiffres de réalité sont vérifiés, ceux de perception ne l\'ont pas été.',
  status: 'partiel',
  updated: '2026-08',
  legacyAnchor: 's18',
} satisfies ChapterMeta

export const tables = {
  sujet: {
    vintage: '2026',
    sources: ['chaque-ligne-porte-sa-source-et-son-mill-chaque-ligne-port'],
    columns: [
      { key: 'sujet', header: 'Sujet', type: 'text', headerNumeric: false },
      { key: 'realite', header: 'Réalité', type: 'number', headerNumeric: true },
      { key: 'source', header: 'Source', type: 'text', headerNumeric: false },
    ],
    rows: [
      {
        cells: [
          { t: 'Part d\'immigrés dans la population' },
          { v: 11.3, d: 1, u: '% (7,73 M)' },
          { t: 'Insee, 2024' },
        ],
      },
      {
        cells: [
          { t: 'Part d\'étrangers' },
          { v: 8.8, d: 1, u: '% (6,03 M)' },
          { t: 'Insee, 2024' },
        ],
      },
      {
        cells: [
          { t: 'Taux de chômage (BIT)' },
          { v: 7.9, d: 1, u: '%' },
          { t: 'Insee, T1 2026' },
        ],
      },
      {
        cells: [
          { t: 'Homicides par an' },
          { v: 975, d: 0, u: '(1,43 /100 000)', approx: true },
          { t: 'SSMSI, 2025' },
        ],
      },
      {
        cells: [
          { t: 'Dépenses de protection sociale' },
          { v: 31.9, d: 1, u: '% du PIB' },
          { t: 'DREES, 2024' },
        ],
      },
      {
        cells: [
          { t: 'Agents publics' },
          { v: 5.88, d: 2, u: 'M (20 % de l\'emploi)' },
          { t: 'Insee, 2024' },
        ],
      },
      {
        cells: [
          { t: 'Contribution nette à l\'UE' },
          { t: '≈ 9-10 Md€/an (≈ 0,3 % du RNB)' },
          { t: 'Cour des comptes, 2023' },
        ],
      },
      {
        cells: [
          { t: 'Aide publique au développement' },
          { v: 0.48, d: 2, u: '% du RNB (14,3 Md€)' },
          { t: 'MEAE, 2025' },
        ],
      },
      {
        cells: [
          { t: 'Part de la France dans les GES mondiaux' },
          { t: '≈ 0,8-1 %' },
          { t: 'Citepa' },
        ],
      },
      {
        cells: [
          { t: 'Pension moyenne tous régimes' },
          { t: '≈ 1 600-1 700 €/mois brut' },
          { t: 'DREES' },
        ],
      },
    ],
  },
  'manque-a-gagner-de-cotisations-estimation-2023': {
    vintage: '2023',
    sources: ['cour-des-comptes-urssaf-caisse-nationale-evaluation-du-t'],
    columns: [
      {
        key: 'manque-a-gagner-de-cotisations-estimation-2023',
        header: 'Manque à gagner de cotisations, estimation 2023',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'montant', header: 'Montant', type: 'number', headerNumeric: true },
      { key: 'perimetre', header: 'Périmètre', type: 'text', headerNumeric: false },
    ],
    rows: [
      {
        cells: [
          { t: '<b>Travail dissimulé, champ Urssaf</b>' },
          { v: 4.8, d: 1, u: 'à 6,3 Md€', strong: true },
          { t: 'Le chiffre de la fraude proprement dite' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Travail dissimulé, champ large' },
          { v: 6, d: 1, u: 'à 7,8 Md€' },
          { t: 'En ajoutant les régimes non couverts par l\'Urssaf' },
        ],
      },
      {
        cells: [
          { t: '« Environ 10 milliards », le chiffre qui circule' },
          { t: 'borne haute' },
          {
            t: 'Agrégat qui inclut aussi les <b>erreurs d\'assiette non frauduleuses</b> et l\'assurance chômage',
          },
        ],
        missing: true,
      },
    ],
  },
  situation: {
    vintage: '2026',
    sources: ['cour-des-comptes-urssaf-caisse-nationale-evaluation-du-t'],
    columns: [
      { key: 'situation', header: 'Situation', type: 'text', headerNumeric: false },
      {
        key: 'ce-que-l-employeur-y-gagne',
        header: 'Ce que l\'employeur y gagne',
        type: 'text',
        headerNumeric: false,
      },
      {
        key: 'ce-que-le-salarie-y-perd',
        header: 'Ce que le salarié y perd',
        type: 'text',
        headerNumeric: false,
      },
    ],
    rows: [
      {
        cells: [
          { t: '<b>Dissimulation totale</b> — le salarié n\'existe pas dans les déclarations' },
          { t: 'La totalité des cotisations, patronales et salariales' },
          {
            t: '<b>Tout</b> : droits à retraite, assurance chômage, accident du travail, arrêt maladie, et toute preuve d\'ancienneté',
          },
        ],
        emphasis: true,
      },
      {
        cells: [
          {
            t: '<b>Dissimulation partielle d\'heures</b> — le bulletin mentionne 25 h, le salarié en fait 39',
          },
          {
            t: 'Les cotisations sur les heures non déclarées, plus la majoration des heures supplémentaires',
          },
          {
            t: 'Des trimestres et des points de retraite ; une indemnisation chômage calculée sur un salaire minoré',
          },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>Complément en espèces</b> — une part du salaire versée hors bulletin' },
          { t: 'Cotisations sur la part occulte' },
          { t: 'Mêmes effets, plus une capacité d\'emprunt réduite' },
        ],
      },
      {
        cells: [
          {
            t: '<b>Faux statut d\'indépendant</b> — le travailleur est juridiquement à son compte mais subordonné dans les faits',
          },
          { t: 'L\'intégralité des cotisations patronales et le coût du licenciement' },
          { t: 'Le statut protecteur du salariat ; requalification possible mais longue' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Faux stagiaires, faux bénévoles' },
          { t: 'Le salaire et les cotisations' },
          { t: 'Rémunération et droits' },
        ],
      },
      {
        cells: [
          {
            t: '<b>Sous-traitance en cascade et sociétés éphémères</b> — le donneur d\'ordre est solvable, le dernier maillon ne l\'est pas',
          },
          { t: 'Le risque est logé chez une entité qui disparaîtra' },
          { t: 'Un employeur introuvable au moment de faire valoir ses droits' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Détachement frauduleux, fausses domiciliations' },
          { t: 'L\'écart de cotisations entre deux pays' },
          { t: 'Une protection sociale théorique dans un pays où le travailleur ne vit pas' },
        ],
      },
      {
        cells: [
          { t: 'Fausse activité déclarée' },
          { t: 'Un taux de cotisation accident du travail plus faible' },
          { t: 'Une couverture inadaptée au risque réel' },
        ],
      },
    ],
  },
  'travail-dissimule-urssaf': {
    vintage: '2024',
    sources: ['cour-des-comptes-urssaf-caisse-nationale-evaluation-du-t'],
    columns: [
      {
        key: 'travail-dissimule-urssaf',
        header: 'Travail dissimulé, Urssaf',
        type: 'text',
        headerNumeric: false,
      },
      { key: '2013', header: '2013', type: 'number', headerNumeric: true },
      { key: '2024', header: '2024', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: '<b>Montants notifiés</b>' },
          { v: 321, d: 0, u: 'M€' },
          { t: '<b>1 586 M€</b> <i>(× 4,9)</i>' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>Montants effectivement encaissés</b>' },
          null,
          { v: 121, d: 0, u: 'M€', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>Taux de recouvrement</b>' },
          null,
          { v: 6, d: 0, u: 'à 10 %', strong: true },
        ],
        total: true,
      },
    ],
  },
  'fraudes-detectees-dernieres-annees-disponibles': {
    vintage: '2026',
    sources: ['cour-des-comptes-urssaf-caisse-nationale-evaluation-du-t'],
    columns: [
      {
        key: 'fraudes-detectees-dernieres-annees-disponibles',
        header: 'Fraudes détectées, dernières années disponibles',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'montant', header: 'Montant', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: '<b>Travail dissimulé notifié</b> (Urssaf)' },
          { v: 1586, d: 0, u: 'M€', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<b>Ensemble des fraudes aux prestations</b> (assurance maladie + famille + vieillesse)' },
          { v: 1294, d: 0, u: 'M€', strong: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Fraude fiscale détectée' },
          { v: 5.8, d: 1, u: 'fois la fraude sociale', approx: true },
        ],
        total: true,
      },
    ],
  },
  'type-de-fraude': {
    vintage: '2020',
    sources: ['chaque-ligne-porte-sa-source-et-son-anne-chaque-ligne-port'],
    columns: [
      { key: 'type-de-fraude', header: 'Type de fraude', type: 'text', headerNumeric: false },
      { key: 'estimation', header: 'Estimation', type: 'number', headerNumeric: true },
      { key: 'source-et-annee', header: 'Source et année', type: 'text', headerNumeric: false },
    ],
    rows: [
      {
        cells: [
          { t: 'Fraude et irrégularités à la TVA' },
          { v: 15, d: 0, u: 'Md€/an', approx: true },
          { t: 'Cour des comptes, 2020' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Fraude aux cotisations sociales (travail dissimulé)' },
          { v: 8.5, d: 1, u: 'Md€ (2018)' },
          { t: 'Acoss — jugée sous-estimée par la Cour des comptes elle-même' },
        ],
      },
      {
        cells: [
          { t: 'Fraude aux prestations sociales (estimée)' },
          { v: 3, d: 0, u: 'Md€ (2010)', approx: true },
          { t: 'Cour des comptes, régime général' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Fraude aux prestations effectivement détectée' },
          { v: 1, d: 0, u: 'Md€ (2019)', approx: true },
          { t: 'Organismes sociaux' },
        ],
      },
    ],
  },
} satisfies Tables

export const series = {} satisfies SeriesSet

/** Fiches du chapitre, dans l'ordre : alimente le rail et la recherche. */
export const questions = [
  { id: 's18-q1', title: 'Pourquoi cette section est partiellement vide' },
  { id: 's18-q2', title: 'Les chiffres réels, vérifiés' },
  {
    id: 's18-q3',
    title: 'Le travail dissimulé : ce que c\'est, ce que ça représente, et ce qui rentre vraiment',
  },
  { id: 's18-q4', title: 'Fraude fiscale et fraude sociale : l\'ordre de grandeur' },
] satisfies readonly { id: string; title: string }[]

/**
 * Sources citées dans le texte du chapitre, en plus de celles portées par les
 * tableaux et les figures. La bibliographie les recense aussi : une source
 * citée en prose reste une source du dossier.
 */
export const citedSources = [
  'chaque-ligne-porte-sa-source-et-son-anne-chaque-ligne-port',
  'chaque-ligne-porte-sa-source-et-son-mill-chaque-ligne-port',
  'cour-des-comptes-urssaf-caisse-nationale-evaluation-du-t',
] satisfies readonly SourceId[]
