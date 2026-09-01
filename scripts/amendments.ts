/**
 * Amendements au document d'origine.
 *
 * Le dossier est une reproduction fidèle de `Temp/chiffres2027 (3).html`, et
 * `npm run extract` réécrit intégralement les 21 répertoires de chapitres :
 * une correction saisie à la main dans un `data.ts` disparaît à la première
 * régénération. Ce fichier est l'endroit — le seul — où le dossier s'écarte de
 * son document d'origine, et il n'est pas généré.
 *
 * Deux régimes, qui ne coûtent pas la même chose :
 *
 * - **Correction** : une valeur du document d'origine est fausse au regard de
 *   la source qu'elle cite. On la remplace **partout**, `/tout` compris. Le
 *   rendu diverge donc du document d'origine, et cette divergence est déclarée
 *   ici : `check-render.ts` lit `divergences()` et n'accepte que ces
 *   substitutions-là. Toute autre différence reste une régression.
 *
 * - **Ajout** : du contenu qui n'existait pas. Il est rendu en `mode="page"`
 *   seulement, jamais dans `/tout` — c'est le mécanisme de `DECISIONS.md` §D7,
 *   qui garde `/tout` comparable élément par élément. Une insertion décalerait
 *   tous les éléments suivants et rendrait la comparaison inutilisable.
 *
 * Chaque correction porte `was` : le texte exactement rendu par le document
 * d'origine. L'extracteur le vérifie et échoue s'il ne le trouve pas. Le jour
 * où le document source change, on l'apprend au lieu de le découvrir.
 *
 * Voir `specs/DECISIONS.md` §D14.
 */
import { formatValue, isNumCell } from '../src/lib/format'
import type { Cell, Row, Series, Table } from '../src/lib/types'

// ------------------------------------------------------------------- sources

/** Une source que le document d'origine ne citait pas. */
export interface SourceAddition {
  readonly id: string
  readonly producer: string
  readonly kind: 'database' | 'report' | 'press' | 'other'
  readonly datasets?: readonly string[]
  /** Formulation du bloc source, en HTML restreint, comme le registre. */
  readonly text: string
  readonly theme: string
  readonly engaged?: true
}

export const addedSources: readonly SourceAddition[] = [
  {
    id: 'bce-hfcs-vague-2021-tableaux-a1-a2',
    producer: 'BCE',
    kind: 'database',
    datasets: ['DN3001'],
    text:
      'BCE, <em>Household Finance and Consumption Survey</em>, vague 2021 (quatrième vague, publiée en juillet 2023), ' +
      '<em>Statistical Tables</em>, tableaux A1 (médianes) et A2 (moyennes), agrégat <span class="num">DN3001</span> ' +
      'patrimoine net par ménage, et part des ménages propriétaires de leur résidence principale. Les valeurs sont ' +
      'nominales, dans les prix de la période de référence de chaque pays.',
    theme: 'niveau-de-vie',
  },
  {
    id: 'bnb-revue-economique-2024-patrimoine-des-menages',
    producer: 'Banque nationale de Belgique',
    kind: 'report',
    text:
      'Banque nationale de Belgique, <em>Revue économique</em> 2024 n° 11, « Household wealth and wealth inequality », ' +
      'et billet « Yes, Belgians are rich, but they are not the richest in the world! ». La BNB y précise que les ' +
      'chiffres belges de la vague 2021 sont <strong>extrapolés à partir de l’enquête de 2017</strong> et portent de ce ' +
      'fait une marge d’erreur substantielle.',
    theme: 'niveau-de-vie',
  },
  {
    id: 'reserve-federale-scf-2022',
    producer: 'Réserve fédérale',
    kind: 'report',
    text:
      'Réserve fédérale des États-Unis, <em>Survey of Consumer Finances</em>, vague 2022, bulletin ' +
      '« Changes in U.S. Family Finances from 2019 to 2022 » (octobre 2023). Unité d’observation : la ' +
      '<em>family</em> (unité économique primaire), proche du ménage sans lui être identique. L’enquête ' +
      'sur-échantillonne les hauts patrimoines à partir de données fiscales, mais exclut les 400 plus grandes ' +
      'fortunes du classement <em>Forbes</em>. La vague 2025 n’est pas encore publiée.',
    theme: 'niveau-de-vie',
  },
  {
    id: 'zucman-impot-plancher-ultra-riches',
    producer: 'Gabriel Zucman',
    kind: 'report',
    text:
      'Gabriel Zucman, proposition d’impôt plancher de 2 % sur les patrimoines supérieurs à 100 M€ ' +
      '(environ 1 800 foyers fiscaux), et travaux associés de l’Institut des politiques publiques sur le taux ' +
      'd’imposition effectif des centimillionnaires et des milliardaires.',
    theme: 'depenses-publiques',
    engaged: true,
  },
  {
    id: 'tribune-sept-economistes-le-monde-taxe-zucman',
    producer: 'Le Monde',
    kind: 'press',
    text:
      'Tribune de sept économistes — dont Philippe Aghion et Antoine Lévy — dans <em>Le Monde</em>, contestant le ' +
      'rendement annoncé : selon eux, « pour 1 € prélevé mécaniquement, seul 0,25 € se traduit en recettes » une fois ' +
      'les ajustements de comportement pris en compte.',
    theme: 'depenses-publiques',
    engaged: true,
  },
  {
    id: 'bercy-pre-rapport-juin-2025-impot-plancher',
    producer: 'Ministère de l’Économie',
    kind: 'report',
    text:
      'Ministère de l’Économie et des Finances, pré-rapport de juin 2025 sur l’imposition minimale des hauts ' +
      'patrimoines, et variante gouvernementale d’un impôt minimal différentiel de 0,5 % hors actifs professionnels.',
    theme: 'depenses-publiques',
  },
  {
    id: 'collectif-trop-c-est-trop-taxe-zucman',
    producer: 'Collectif « Trop c’est trop »',
    kind: 'report',
    text:
      'Étude du collectif patronal « Trop c’est trop », concluant à une perte fiscale nette de 10 à 20 Md€ sous ' +
      'l’hypothèse d’un exil des entrepreneurs coûtant 1,3 à 1,8 point de PIB. <strong>Acteur engagé du débat</strong>, ' +
      'cité pour borner la fourchette basse, pas comme producteur de statistique.',
    theme: 'depenses-publiques',
    engaged: true,
  },
  {
    id: 'parlement-taxe-zucman-votes-2025-2026',
    producer: 'Assemblée nationale',
    kind: 'press',
    text:
      'Comptes rendus parlementaires : rejet au Sénat en juin 2025 (129 pour, 188 contre), rejet à l’Assemblée ' +
      'nationale le 31 octobre 2025 lors de l’examen du budget 2026 (172 pour, 228 contre), puis nouveau rejet au ' +
      'Sénat. La loi de finances pour 2026, promulguée le 19 février 2026 après engagement de responsabilité, retient ' +
      'à la place la pérennisation de la contribution différentielle sur les hauts revenus et une taxe de 20 % sur les ' +
      'biens de luxe logés dans certaines holdings patrimoniales.',
    theme: 'depenses-publiques',
  },
  {
    id: 'eurostat-taux-de-prelevements-obligatoires-2025',
    producer: 'Eurostat',
    kind: 'database',
    datasets: ['gov_10a_taxag'],
    text:
      'Eurostat, <span class="num">gov_10a_taxag</span> : ensemble des impôts et des cotisations sociales nettes ' +
      'perçus par les administrations publiques, rapporté au PIB, données 2025, comparaison des États membres. ' +
      '<strong>Le dénominateur est le PIB, pas la population</strong> : ce taux n’est ni un montant par habitant, ni ' +
      'par ménage, ni par foyer fiscal. Écart de périmètre à signaler systématiquement : la mesure française donne ' +
      '<span class="num">43,6 %</span> pour 2025 quand la mesure européenne donne <span class="num">45,3 %</span>, ' +
      'du fait du traitement des crédits d’impôt et des cotisations imputées — ne jamais comparer un chiffre Insee à ' +
      'un classement Eurostat sans le préciser.',
    theme: 'depenses-publiques',
  },
  {
    id: 'eurostat-structure-des-prelevements-france-allemagne',
    producer: 'Eurostat',
    kind: 'database',
    datasets: ['gov_10a_taxag', 'nasa_10_nf_tr'],
    text:
      'Eurostat, <span class="num">gov_10a_taxag</span> — cotisations effectives des employeurs (D611), autres ' +
      'impôts sur la production (D29) et TVA (D211) rapportés au PIB, données 2024 — et ' +
      '<span class="num">nasa_10_nf_tr</span> pour les impôts sur les bénéfices rapportés à la valeur ajoutée des ' +
      'sociétés non financières (S11). Coin fiscalo-social : OCDE, <em>Taxing Wages</em> 2026, données 2025. ' +
      '<strong>Le rapprochement de ces lignes dans un même tableau est notre assemblage</strong> : Eurostat publie ' +
      'les postes, pas la comparaison par assiette. <strong>Les quatre dénominateurs diffèrent</strong> — PIB, ' +
      'valeur ajoutée des sociétés, coût d’un salarié type — et les lignes ne s’additionnent donc pas.',
    theme: 'depenses-publiques',
  },
]

// --------------------------------------------------------------- corrections

/** Une cellule corrigée, avec le texte que le document d'origine rendait. */
export interface CellCorrection {
  /** Rendu exact de la cellule d'origine. Vérifié par l'extracteur. */
  readonly was: string
  readonly cell: Cell
}

/** Un en-tête de colonne corrigé, en HTML restreint comme l'original. */
export interface HeaderCorrection {
  /** Rendu exact de l'en-tête d'origine. Vérifié par l'extracteur. */
  readonly was: string
  readonly header: string
}

export interface TableAmendment {
  readonly chapter: string
  readonly table: string
  /** Millésime corrigé, quand celui déduit du document est faux. */
  readonly vintage?: string
  /** Sources corrigées, quand le bloc cité ne porte pas la bonne référence. */
  readonly sources?: readonly string[]
  /**
   * En-têtes de colonne corrigés, par indice. L'identifiant du tableau est
   * dérivé du premier en-tête *avant* amendement : le corriger ne change donc
   * ni l'ancre ni les appels `<DataTable id="…" />`.
   */
  readonly headers?: Readonly<Record<number, HeaderCorrection>>
  /**
   * Cellules corrigées, par libellé de la première cellule de la ligne, puis
   * par indice de colonne.
   */
  readonly corrections?: Readonly<Record<string, Readonly<Record<number, CellCorrection>>>>
  /** Lignes ajoutées, rendues en mode page seulement. */
  readonly added?: readonly Row[]
}

const n = (v: number, d: number, u?: string): Cell => (u ? { v, d, u } : { v, d })

/** Une ligne ajoutée par la refonte : absente de `/tout`, présente au chapitre. */
const addedRow = (cells: readonly Cell[]): Row => ({ cells, addition: true })

export const tableAmendments: readonly TableAmendment[] = [
  {
    chapter: 'niveau-de-vie',
    table: 'patrimoine-net-par-menage-enquete-bce-2023',
    // Le registre disait « vague 2023 » : il n'existe pas de vague 2023. Les
    // vagues sont 2010, 2014, 2017 et 2021 ; 2023 est l'année de publication
    // de la quatrième. Le millésime de la donnée est 2021.
    vintage: '2021',
    sources: ['bce-hfcs-vague-2021-tableaux-a1-a2', 'bnb-revue-economique-2024-patrimoine-des-menages'],
    // Sans cela, `/tout` — qui ne rend pas les encadrés ajoutés — présenterait
    // les valeurs corrigées sous un intitulé annonçant une vague inexistante.
    headers: {
      0: {
        was: 'Patrimoine net par ménage, enquête BCE 2023',
        header: 'Patrimoine net par ménage, enquête BCE vague 2021',
      },
    },
    corrections: {
      Belgique: {
        1: { was: '254 200 €', cell: n(242400, 0, '€') },
        2: { was: '411 500 €', cell: n(408000, 0, '€') },
        3: { was: '1,62', cell: n(1.68, 2) },
        4: { was: '66,7 %', cell: n(72.4, 1, '%') },
      },
      Italie: {
        1: { was: '162 800 €', cell: n(159000, 0, '€') },
        2: { was: '307 300 €', cell: n(350000, 0, '€') },
        3: { was: '1,89', cell: n(2.2, 2) },
        4: { was: '74,5 %', cell: n(77.5, 1, '%') },
      },
      Espagne: {
        1: { was: '151 600 €', cell: n(127700, 0, '€') },
        2: { was: '321 800 €', cell: n(278700, 0, '€') },
        3: { was: '2,12', cell: n(2.18, 2) },
        4: { was: '72,1 %', cell: n(73.9, 1, '%') },
      },
      France: {
        1: { was: '149 000 €', cell: n(125700, 0, '€') },
        2: { was: '330 700 €', cell: n(277100, 0, '€') },
        3: { was: '2,22', cell: n(2.2, 2) },
        4: { was: '57,2 %', cell: n(57.5, 1, '%') },
      },
      'Pays-Bas': {
        1: { was: '143 500 €', cell: n(105600, 0, '€') },
        2: { was: '257 300 €', cell: n(219600, 0, '€') },
        3: { was: '1,79', cell: n(2.08, 2) },
        4: { was: '56,6 %', cell: n(56.9, 1, '%') },
      },
      'Zone euro': {
        1: { was: '140 100 €', cell: n(123500, 0, '€') },
        2: { was: '312 000 €', cell: n(292100, 0, '€') },
        3: { was: '2,23', cell: n(2.37, 2) },
        4: { was: '60,1 %', cell: n(61.7, 1, '%') },
      },
      Allemagne: {
        1: { was: '103 300 €', cell: n(106700, 0, '€') },
        2: { was: '324 000 €', cell: { v: 315600, d: 0, u: '€' } },
        3: { was: '3,14', cell: { v: 2.96, d: 2, strong: true } },
        4: { was: '41,8 %', cell: { v: 44.5, d: 1, u: '%', strong: true } },
      },
    },
    // Les deux pays qui dominent la Belgique dans la même enquête. Leur absence
    // du tableau d'origine est ce qui fait paraître la Belgique première.
    added: [
      addedRow([{ t: 'Luxembourg' }, n(717700, 0, '€'), n(1269700, 0, '€'), n(1.77, 2), n(65.6, 1, '%')]),
      addedRow([{ t: 'Malte' }, n(273600, 0, '€'), n(413000, 0, '€'), n(1.51, 2), n(79.0, 1, '%')]),
    ],
  },
]

// -------------------------------------------------------------- tableaux neufs

/**
 * Un tableau avant insertion dans le registre.
 *
 * `sources` y est une liste de chaînes, pas de `SourceId` : les identifiants
 * ajoutés par ce fichier n'existent dans `src/data/sources.ts` qu'**après**
 * régénération, et le typage strict rendrait donc impossible d'ajouter une
 * source et le tableau qui la cite dans le même mouvement. L'extracteur
 * vérifie l'existence des identifiants au moment de l'insertion.
 */
export type DraftTable = Omit<Table, 'sources'> & { readonly sources: readonly string[] }

/** Tableaux qui n'existaient pas, rattachés à une fiche ajoutée. */
export interface TableAddition {
  readonly chapter: string
  readonly id: string
  readonly table: DraftTable
}

export const addedTables: readonly TableAddition[] = [
  {
    chapter: 'niveau-de-vie',
    id: 'patrimoine-net-des-menages-americains-scf-2022',
    table: {
      vintage: '2022',
      sources: ['reserve-federale-scf-2022'],
      columns: [
        { key: 'indicateur', header: 'Patrimoine net des <em>families</em>, enquête SCF 2022', type: 'text' },
        { key: 'valeur', header: 'Dollars 2022', type: 'number', headerNumeric: true },
      ],
      rows: [
        { cells: [{ t: 'Médian' }, { v: 192900, d: 0, u: '$' }] },
        { cells: [{ t: 'Moyen' }, { v: 1063700, d: 0, u: '$' }] },
        {
          cells: [{ t: 'Rapport moyen / médian' }, { v: 5.51, d: 2, strong: true }],
          emphasis: true,
        },
        {
          cells: [
            { t: 'Progression réelle de la médiane, 2019-2022' },
            { v: 37, d: 0, u: '%', sign: true },
          ],
        },
        {
          cells: [
            { t: 'Progression réelle de la moyenne, 2019-2022' },
            { v: 23, d: 0, u: '%', sign: true },
          ],
        },
      ],
    },
  },
  {
    chapter: 'depenses-publiques',
    id: 'taxe-zucman-estimations-de-rendement',
    table: {
      vintage: '2025',
      sources: [
        'zucman-impot-plancher-ultra-riches',
        'tribune-sept-economistes-le-monde-taxe-zucman',
        'bercy-pre-rapport-juin-2025-impot-plancher',
        'collectif-trop-c-est-trop-taxe-zucman',
      ],
      columns: [
        { key: 'auteur', header: 'Qui chiffre', type: 'text' },
        { key: 'rendement', header: 'Rendement annuel', type: 'number', headerNumeric: true },
        { key: 'deficit', header: 'Part des 152,5 Md€ de déficit', type: 'number', headerNumeric: true },
        { key: 'hypothese', header: 'Hypothèse déterminante', type: 'text' },
      ],
      rows: [
        {
          cells: [
            { t: 'Gabriel Zucman, fourchette haute' },
            { v: 25, d: 0, u: 'Md€' },
            { v: 16.4, d: 1, u: '%' },
            { t: 'Assiette pleine, réaction des contribuables supposée faible' },
          ],
        },
        {
          cells: [
            { t: 'Gabriel Zucman, chiffre le plus cité' },
            { v: 20, d: 0, u: 'Md€', strong: true },
            { v: 13.1, d: 1, u: '%', strong: true },
            { t: '2 % sur le patrimoine au-delà de 100 M€, environ 1 800 foyers' },
          ],
          emphasis: true,
        },
        {
          cells: [
            { t: 'Gabriel Zucman, fourchette basse' },
            { v: 15, d: 0, u: 'Md€' },
            { v: 9.8, d: 1, u: '%' },
            { t: 'Même assiette, évitement partiel' },
          ],
        },
        {
          cells: [
            { t: 'Sept économistes, tribune <em>Le Monde</em>' },
            { v: 5, d: 0, u: 'Md€', approx: true },
            { v: 3.3, d: 1, u: '%' },
            { t: '« Pour 1 € prélevé mécaniquement, seul 0,25 € se traduit en recettes »' },
          ],
          separator: true,
        },
        {
          cells: [
            { t: 'Ministère de l’Économie, pré-rapport de juin 2025' },
            { v: 4, d: 0, u: 'Md€', approx: true },
            { v: 2.6, d: 1, u: '%' },
            { t: 'Assiette resserrée, comportements intégrés' },
          ],
        },
        {
          cells: [
            { t: 'Variante gouvernementale : 0,5 % hors actifs professionnels' },
            { v: 2, d: 0, u: 'Md€', approx: true },
            { v: 1.3, d: 1, u: '%' },
            { t: 'Taux quatre fois plus bas, outil de travail exclu' },
          ],
        },
        {
          cells: [
            { t: 'Collectif « Trop c’est trop » <em>(acteur engagé)</em>' },
            { t: '−10 à −20 Md€', n: true },
            { t: 'perte nette', n: true },
            { t: 'Exil fiscal coûtant 1,3 à 1,8 point de PIB' },
          ],
          missing: true,
        },
      ],
      footer: {
        cells: [
          { t: 'Pour mémoire, charge annuelle de la dette' },
          { v: 65, d: 0, u: 'Md€', approx: true },
          { v: 42.6, d: 1, u: '%' },
          { t: 'Le repère qui situe l’ordre de grandeur' },
        ],
        total: true,
      },
    },
  },
  {
    chapter: 'dette-deficit',
    id: 'd-ou-viennent-les-points-de-dette-1995-2025',
    table: {
      vintage: '2025',
      sources: ['eurostat-gov-10dd-edpt1'],
      columns: [
        { key: 'periode', header: 'Période', type: 'text' },
        { key: 'contexte', header: 'Contexte', type: 'text' },
        { key: 'points', header: 'Points de PIB', type: 'number', headerNumeric: true },
      ],
      rows: [
        { cells: [{ t: '1995 → 2007' }, { t: 'Douze ans sans choc' }, { v: 7.7, d: 1, sign: true }] },
        {
          cells: [{ t: '2007 → 2009' }, { t: 'Crise financière' }, { v: 18.6, d: 1, sign: true, strong: true }],
          emphasis: true,
        },
        { cells: [{ t: '2009 → 2019' }, { t: 'Dix ans sans choc' }, { v: 14.1, d: 1, sign: true }] },
        {
          cells: [{ t: '2019 → 2020' }, { t: 'Crise sanitaire' }, { v: 16.7, d: 1, sign: true, strong: true }],
          emphasis: true,
        },
        {
          cells: [
            { t: '2020 → 2023' },
            { t: 'Sortie de crise, inflation forte — <em>seule décrue de la série</em>' },
            { v: -5.4, d: 1 },
          ],
        },
        { cells: [{ t: '2023 → 2025' }, { t: 'Aucun choc' }, { v: 6.1, d: 1, sign: true }] },
        {
          cells: [
            { t: '<b>Les deux chocs</b>' },
            { t: 'Trois années sur trente' },
            { v: 35.3, d: 1, sign: true, strong: true },
          ],
          separator: true,
        },
        {
          cells: [
            { t: '<b>Les périodes sans choc</b>' },
            { t: 'Vingt-sept années sur trente' },
            { v: 22.5, d: 1, sign: true, strong: true },
          ],
        },
      ],
      footer: {
        cells: [
          { t: '1995 → 2025' },
          { t: 'De 57,8 % à 115,6 % du PIB' },
          { v: 57.8, d: 1, sign: true, strong: true },
        ],
        total: true,
      },
    },
  },
  {
    chapter: 'depenses-publiques',
    id: 'france-et-allemagne-meme-niveau-assiettes-opposees',
    table: {
      vintage: '2024',
      sources: ['eurostat-structure-des-prelevements-france-allemagne'],
      columns: [
        { key: 'preleve', header: 'Prélèvement, et sur quoi il est assis', type: 'text' },
        { key: 'fr', header: 'France', type: 'number', headerNumeric: true },
        { key: 'de', header: 'Allemagne', type: 'number', headerNumeric: true },
        { key: 'ecart', header: 'Lecture', type: 'text' },
      ],
      rows: [
        {
          cells: [
            { t: '<b>Cotisations employeurs</b> <em>(% du PIB)</em>' },
            { v: 10, d: 1, u: '%', strong: true },
            { v: 7, d: 1, u: '%' },
            { t: 'La France prélève <b>43 % de plus</b> sur les salaires' },
          ],
          emphasis: true,
        },
        {
          cells: [
            { t: '<b>Impôts de production</b> <em>(% du PIB)</em>' },
            { v: 4.4, d: 1, u: '%', strong: true },
            { v: 1, d: 1, u: '%' },
            { t: '<b>Rapport de 1 à 4,4</b> — et dus même à perte' },
          ],
          emphasis: true,
        },
        {
          cells: [
            { t: 'TVA <em>(% du PIB)</em>' },
            { v: 7.1, d: 1, u: '%' },
            { v: 9.4, d: 1, u: '%', strong: true },
            { t: 'La France prélève <b>2,3 points de moins</b> sur la consommation' },
          ],
        },
        {
          cells: [
            { t: 'Impôts sur les bénéfices <em>(% de la valeur ajoutée des sociétés)</em>' },
            { v: 4.31, d: 2, u: '%' },
            { v: 4.33, d: 2, u: '%' },
            { t: '<b>Quasiment identique</b>' },
          ],
        },
        {
          cells: [
            { t: 'Total prélevé sur 100 € de coût employeur <em>(un salarié type)</em>' },
            { v: 47.2, d: 1, u: '€' },
            { v: 49.3, d: 1, u: '€', strong: true },
            { t: 'L’Allemagne prélève <b>plus</b> au total' },
          ],
          separator: true,
        },
      ],
    },
  },
  {
    chapter: 'commerce-exterieur',
    id: 'ce-que-la-reaffectation-change-a-la-lecture-par-zone',
    table: {
      vintage: '2025',
      sources: ['eurostat-douanes-francaises-et-eurostat-comext-s'],
      columns: [
        { key: 'lecture', header: 'Solde des biens, 2025', type: 'text' },
        { key: 'brut', header: 'Chiffre brut', type: 'number', headerNumeric: true },
        { key: 'reaffecte', header: 'Après réaffectation', type: 'number', headerNumeric: true },
      ],
      rows: [
        {
          cells: [{ t: 'Chine' }, { v: -22.5, d: 1, u: 'Md€' }, { v: -50, d: 0, u: 'Md€', approx: true, strong: true }],
          emphasis: true,
        },
        { cells: [{ t: 'Pays-Bas' }, { v: -39, d: 1, u: 'Md€' }, { v: -5.4, d: 1, u: 'Md€', approx: true }] },
        { cells: [{ t: 'Belgique' }, { v: -18.9, d: 1, u: 'Md€' }, { v: 0.3, d: 1, u: 'Md€', approx: true, sign: true }] },
        {
          cells: [
            { t: '<b>Solde avec l’UE-27</b>' },
            { v: -113.4, d: 1, u: 'Md€' },
            { v: -60, d: 0, u: 'Md€', approx: true, strong: true },
          ],
          separator: true,
        },
        {
          cells: [
            { t: '<b>Solde avec le reste du monde</b>' },
            { v: 19.4, d: 1, u: 'Md€', sign: true },
            { v: -33, d: 0, u: 'Md€', approx: true, strong: true },
          ],
        },
      ],
      footer: {
        cells: [
          { t: 'Premier déficit bilatéral' },
          { t: 'Pays-Bas', n: true },
          { t: '<b>Chine</b>', n: true },
        ],
        total: true,
      },
    },
  },
]

// -------------------------------------------------------------- figures neuves

/**
 * Une figure avant insertion dans le registre.
 *
 * Même raison que `DraftTable` pour `sources` : les identifiants ajoutés par ce
 * fichier n'existent dans `src/data/sources.ts` qu'après régénération.
 *
 * Une figure ajoutée n'a **pas** de SVG d'origine à reproduire : elle est
 * écrite en valeurs, et `lib/chart.ts` la trace — le même code qui sert de
 * preuve de non-régression aux 55 figures migrées. Il n'y a donc rien à
 * comparer, et aucune coordonnée de pixel à saisir : seules les constantes de
 * mise en page (`layout`, `frame`) sont des réglages de composant.
 */
export type DraftFigure = Omit<Series, 'sources'> & { readonly sources: readonly string[] }

export interface FigureAddition {
  readonly chapter: string
  readonly id: string
  readonly figure: DraftFigure
}

export const addedFigures: readonly FigureAddition[] = [
  {
    chapter: 'depenses-publiques',
    id: 'd-ou-viennent-les-1-323-md-de-prelevements',
    figure: {
      svg: { viewBox: '0 0 720 360', titleId: 'cassiette-t', title: 'prélèvements par assiette, 2024' },
      title: 'D’où viennent les 1 323 Md€ de prélèvements',
      subtitle:
        'En milliards d’euros, 2024. Les lignes publiées par Eurostat, regroupées par ce qu’elles taxent. '+
        'Ce sont des masses nationales : ni par habitant, ni par ménage, ni par foyer fiscal.',
      caption:
        '<b>Le premier bloc est le travail, et de loin.</b> Les cotisations sociales pèsent à elles seules ' +
        '<b>482,3 Md€, soit 36 % de tout ce que prélève la France</b> — davantage que la TVA et l’impôt sur les ' +
        'sociétés réunis. Et le bloc « revenus des ménages » en contient une part supplémentaire : il agrège ' +
        'l’impôt sur le revenu au barème et la <b>CSG</b>, prélevée à la source sur les salaires. ' +
        '<b>L’impôt sur le revenu au barème — celui qui a des tranches, un formulaire et un quotient familial — ' +
        'ne représente que 92 Md€, soit 7 % du total.</b> Le premier impôt sur le revenu du pays est celui dont ' +
        'personne ne parle.',
      sources: ['eurostat-eurostat-gov-10a-taxag-secteurs-s13-s1'],
      vintage: '2024',
      caveat:
        'Le regroupement par assiette est notre reconstruction : Eurostat publie les huit lignes, pas les sept ' +
        'blocs. La CSG n’est pas isolable en source primaire — elle reste ici dans « revenus des ménages », alors ' +
        'qu’elle est très majoritairement assise sur des salaires : la part réellement portée par le travail est ' +
        'donc supérieure aux 36 % du premier bloc.',
      type: 'bar',
      layout: {
        kind: 'bar',
        gridTop: 16,
        gridBottom: 300,
        tickLabelY: 322,
        catLabelX: 236,
        catLabelDy: 13,
        barHeight: 18,
        barPitch: 0,
        groupPitch: 38,
        firstBarY: 26,
        valueLabelDx: 7,
        valueLabelDy: 13,
        valueClasses: ['lbl s1t'],
        rx: 3,
      },
      x: [
        'Travail (cotisations)',
        'Revenus des ménages',
        'Consommation (TVA, accises)',
        'Production',
        'Bénéfices des sociétés',
        'Autres',
        'Transmission du patrimoine',
      ],
      y: { min: 0, max: 500, ticks: [0, 100, 200, 300, 400, 500] },
      series: [
        {
          key: 'assiette',
          color: 's1',
          values: [482.3, 275.1, 265.4, 129, 83.8, 66.4, 21.5],
          decimals: 1,
        },
      ],
      frame: { width: 720, height: 360, left: 250, right: 660, top: 16, bottom: 300 },
    },
  },
  {
    chapter: 'depenses-publiques',
    id: 'sur-100-de-cout-employeur-ce-qui-est-preleve',
    figure: {
      svg: { viewBox: '0 0 720 330', titleId: 'ccoin-t', title: 'coin fiscalo-social, 2025' },
      title: 'Sur 100 € de coût employeur, ce qui est prélevé',
      subtitle:
        'Célibataire sans enfant au salaire moyen, 2025. La longueur totale est le prélèvement ; les couleurs disent '+
        'sur quoi il est assis. Unité de compte : <b>un salarié</b>, pas un ménage ni un foyer fiscal.',
      caption:
        '<b>Le total français n’est pas le plus élevé — sa composition, oui.</b> La France prélève 47,2 € sur 100, ' +
        'moins que la Belgique et l’Allemagne. Mais <b>26,7 € passent par les cotisations patronales, le taux le ' +
        'plus élevé de l’OCDE et le double de la moyenne (13,5 €)</b>, quand l’impôt sur le revenu n’en prend que ' +
        '12,2 — avant-dernier rang du panel de comparaison. <b>Le Danemark est le contre-exemple qui tranche</b> : ' +
        '0,7 € de cotisations patronales, aucune cotisation salariale, 35,1 € d’impôt sur le revenu, pour un ' +
        'prélèvement total inférieur de 11 points au français et une protection sociale d’ampleur comparable. ' +
        '<b>Il n’existe donc aucun lien nécessaire entre le niveau de protection sociale et le niveau des charges ' +
        'assises sur les salaires : c’est un choix de plomberie, pas une contrainte.</b>',
      sources: ['eurostat-ocde-taxing-wages-2026-donnees-2025'],
      vintage: '2025',
      caveat:
        'La moyenne OCDE se reconstitue à 35,0 quand l’indicateur publié vaut 35,1 : l’écart est un arrondi des ' +
        'trois composantes, pas une divergence de mesure. Le coin fiscalo-social s’arrête au revenu net disponible — ' +
        'il n’inclut ni la TVA, ni les impôts sur le patrimoine, ni l’impôt sur les sociétés.',
      legend: [
        { color: 's1', label: 'Cotisations patronales' },
        { color: 's4', label: 'Cotisations salariales' },
        { color: 's5', label: 'Impôt sur le revenu' },
      ],
      type: 'stacked-bar',
      layout: {
        kind: 'bar',
        gridTop: 16,
        gridBottom: 270,
        tickLabelY: 292,
        catLabelX: 196,
        catLabelDy: 15,
        barHeight: 22,
        barPitch: 0,
        groupPitch: 40,
        firstBarY: 28,
        valueLabelDx: 7,
        valueLabelDy: 15,
        valueClasses: ['lbl', 'lbl', 'lbl'],
        rx: 2,
        stacked: true,
      },
      x: ['Belgique', 'Allemagne', 'France', 'Danemark', 'Moyenne OCDE', 'États-Unis'],
      y: { min: 0, max: 60, ticks: [0, 10, 20, 30, 40, 50, 60] },
      series: [
        {
          key: 'patronales',
          color: 's1',
          label: 'Cotisations patronales',
          values: [21.4, 17.3, 26.7, 0.7, 13.5, 7.5],
          decimals: 1,
        },
        {
          key: 'salariales',
          color: 's4',
          label: 'Cotisations salariales',
          values: [11, 17.8, 8.3, 0, 8.1, 7.1],
          decimals: 1,
        },
        {
          key: 'impot',
          color: 's5',
          label: 'Impôt sur le revenu',
          values: [20.1, 14.2, 12.2, 35.1, 13.4, 15.4],
          decimals: 1,
        },
      ],
      frame: { width: 720, height: 330, left: 210, right: 650, top: 16, bottom: 270 },
    },
  },
  {
    chapter: 'depenses-publiques',
    id: 'ce-que-chaque-pays-preleve-en-part-de-sa-richesse',
    figure: {
      svg: { viewBox: '0 0 720 380', titleId: 'cpo-t', title: 'prélèvements obligatoires, 2025' },
      title: 'Ce que chaque pays prélève, en part de sa richesse',
      subtitle:
        'Impôts et cotisations sociales, toutes administrations confondues, en % du PIB, 2025. ' +
        'Le dénominateur est la richesse produite : ce n’est ni un montant par habitant, ni par ménage.',
      caption:
        '<b>La France est deuxième de l’Union, à un demi-point du Danemark.</b> Mais le classement dit seulement ' +
        '<em>combien</em>, pas <em>sur quoi</em> — et c’est là que les modèles divergent radicalement. Le Danemark ' +
        'prélève presque autant que la France en n’ayant quasiment <b>aucune cotisation sociale</b> : il finance sa ' +
        'protection sociale par l’impôt sur le revenu. L’Allemagne prélève 4,4 points de moins au total, mais ' +
        '<b>davantage sur un salaire</b> — 49,3 € contre 47,2 € sur 100 € de coût employeur. <b>Deux pays au même ' +
        'niveau de prélèvement peuvent donc taxer des choses entièrement différentes</b>, et c’est ce que le seul ' +
        'taux de prélèvements obligatoires ne dit jamais.',
      sources: ['eurostat-taux-de-prelevements-obligatoires-2025'],
      vintage: '2025',
      caveat:
        'Deux mesures coexistent pour la France et il ne faut jamais les mélanger : <b>43,6 %</b> en méthodologie ' +
        'française, <b>45,3 %</b> en méthodologie européenne — c’est cette dernière qui figure ici, la seule ' +
        'comparable entre pays. L’écart tient au traitement des crédits d’impôt et des cotisations imputées.',
      legend: [
        { color: 's1', label: 'France' },
        { color: 's4', label: 'Autres pays et moyenne européenne' },
      ],
      type: 'bar',
      layout: {
        kind: 'bar',
        gridTop: 16,
        gridBottom: 320,
        tickLabelY: 342,
        catLabelX: 176,
        catLabelDy: 13,
        barHeight: 18,
        barPitch: 0,
        groupPitch: 37,
        firstBarY: 26,
        valueLabelDx: 7,
        valueLabelDy: 13,
        valueClasses: ['lbl mut', 'lbl s1t'],
        rx: 3,
      },
      x: [
        'Danemark',
        'France',
        'Belgique',
        'Autriche',
        'Italie',
        'Allemagne',
        'UE-27',
        'Espagne',
      ],
      y: { min: 0, max: 50, ticks: [0, 10, 20, 30, 40, 50] },
      series: [
        {
          key: 'autres',
          color: 's4',
          label: 'Autres pays et moyenne européenne',
          values: [45.8, null, 45.1, 43.8, 42.6, 40.9, 40.4, 37.3],
          decimals: 1,
        },
        {
          key: 'france',
          color: 's1',
          label: 'France',
          values: [null, 45.3, null, null, null, null, null, null],
          decimals: 1,
        },
      ],
      frame: { width: 720, height: 380, left: 190, right: 660, top: 16, bottom: 320 },
    },
  },
]

// ------------------------------------------------------------------- fiches

/** Une fiche entière qui n'existait pas dans le document d'origine. */
export interface FicheAddition {
  readonly chapter: string
  readonly id: string
  readonly title: string
  /** JSX du corps, sans la balise `<Question>` qui l'enveloppe. */
  readonly body: string
}

export const addedFiches: readonly FicheAddition[] = [
  {
    chapter: 'depenses-publiques',
    id: 's1-q27',
    title: 'Que rapporterait la « taxe Zucman », et qu’est-ce que ça couvre du déficit ?',
    body: `
<p>Un impôt plancher de <strong>2 % sur le patrimoine au-delà de 100 M€</strong>, visant environ 1 800 foyers fiscaux. Le débat public a porté sur son rendement, et l’écart entre les chiffrages est le plus large qu’on rencontre dans ce dossier : <strong>de 20 Md€ à une perte nette</strong>, pour la même mesure.</p>
<DataTable id="taxe-zucman-estimations-de-rendement" />
<Source ids={["zucman-impot-plancher-ultra-riches","tribune-sept-economistes-le-monde-taxe-zucman","bercy-pre-rapport-juin-2025-impot-plancher","collectif-trop-c-est-trop-taxe-zucman"]} />
<Limit title={"L’écart de 1 à 4 tient à une seule hypothèse"}><p>Toutes ces estimations partent de la même assiette. Ce qui les sépare, c’est la <strong>réaction supposée des contribuables</strong> : transformation de la détention, donation, changement de résidence fiscale. Les sept économistes l’énoncent crûment — « pour 1 € prélevé mécaniquement, seul 0,25 € se traduit en recettes ». Personne ne dispose d’un contrefactuel : la France n’a jamais appliqué d’impôt plancher sur le patrimoine, et les comparaisons étrangères portent sur des dispositifs de seuils et d’assiettes différents.</p><p>La dernière ligne du tableau vient d’un <strong>acteur engagé du débat</strong>, pas d’un producteur de statistique. Elle est citée pour borner la fourchette, symétriquement aux 25 Md€ des promoteurs, et son hypothèse d’exil — 1,3 à 1,8 point de PIB — n’est pas mesurée.</p></Limit>
<h4>Ce que ça représente rapporté au déficit</h4>
<p>Le déficit public 2025 s’établit à <span className="num">152,5 Md€</span>, soit <span className="num">5,1 %</span> du PIB. Même retenu à son chiffrage le plus favorable, l’impôt en couvrirait <strong>un huitième</strong> ; au chiffrage de Bercy, <strong>un trentième</strong>. Le repère le plus parlant est ailleurs : 20 Md€, c’est environ <strong>un tiers de la charge annuelle de la dette</strong>.</p>
<Takeaway title={"Une mesure de répartition, pas de redressement"}>Le chapitre « Dette et déficit » établit que <strong>la quasi-totalité du déficit français est structurelle</strong>. Une recette nouvelle de 5 à 20 Md€ déplace le niveau du déficit, pas sa pente : elle ne referme aucun écart structurel, quel que soit le chiffrage retenu. C’est un argument de justice fiscale, dont les mérites se discutent comme tels — <strong>pas un instrument de retour à l’équilibre</strong>, et le présenter comme tel des deux côtés du débat est une erreur de catégorie.</Takeaway>
<h4>Où en est le texte</h4>
<p>Rejeté au Sénat en juin 2025 (129 pour, 188 contre), puis à l’Assemblée nationale le 31 octobre 2025 lors de l’examen du budget 2026 (172 pour, 228 contre), et de nouveau au Sénat. La <strong>loi de finances pour 2026</strong>, promulguée le 19 février 2026 après engagement de responsabilité, retient à la place deux dispositifs bien plus étroits : la pérennisation de la contribution différentielle sur les hauts revenus — environ 1,5 Md€ attendus, rendement effectif inférieur — et une taxe de 20 % sur les biens de luxe logés dans certaines holdings patrimoniales, là où le projet initial visait 2 % sur une assiette large.</p>
<Source ids={["parlement-taxe-zucman-votes-2025-2026"]} />
`.trim(),
  },
  {
    chapter: 'dette-deficit',
    id: 's2-q10',
    title: 'Les crises expliquent-elles la dette, ou le déficit permanent ?',
    body: `
<p>La dette française se raconte d’ordinaire comme une succession d’accidents : la crise financière, puis le Covid. Les marches existent, elles sont visibles sur la courbe ci-dessus, et elles sont grosses. Mais la question utile n’est pas « d’où vient le saut ? » — c’est « pourquoi ne redescend-il jamais ? ». Voici la décomposition complète, période par période, sur les trente années que couvre la série d’Eurostat.</p>
<DataTable id="d-ou-viennent-les-points-de-dette-1995-2025" />
<Source ids={["eurostat-gov-10dd-edpt1"]} />
<Limit title={"Ce que cette décomposition est, et ce qu’elle n’est pas"}><p>C’est une <strong>lecture arithmétique de la série annuelle</strong>, pas une imputation causale : découper autrement les bornes déplacerait les totaux. Le découpage retenu isole les deux seuls épisodes que le document d’origine qualifie de chocs, et laisse tout le reste dans les périodes ordinaires. Il ne dit pas ce qui a causé quoi — il dit combien de points de dette ont été acquis pendant, et en dehors, des années de crise.</p><p>Enfin, un point de dette n’est pas un euro emprunté : le ratio bouge aussi par son dénominateur. C’est précisément ce qui explique la seule décrue de la série, entre 2020 et 2023.</p></Limit>
<Takeaway title={"Les crises font monter la dette ; le déficit permanent l’empêche de redescendre"}>Les deux chocs pèsent <strong>35,3 points sur les 57,8 acquis depuis 1995</strong> — soit 61 %, et il serait faux de prétendre qu’ils ne comptent pas. Mais trois faits pèsent plus lourd que cette part. <strong>Aucune période sans choc n’a jamais rendu de points</strong> : elles en ajoutent 22,5 au total, dont 14,1 sur les dix années de calme qui séparent les deux crises et 6,1 depuis 2023. <strong>La seule décrue de trente ans est celle de 2020-2023 — et elle vient de l’inflation, pas d’un effort</strong> : le dénominateur a bondi pendant que la dépense était revalorisée avec retard. <strong>Et le déficit d’aujourd’hui n’a presque plus rien de conjoncturel</strong> : 4,9 points sur 5,1 sont structurels, soit 96 %. Une reprise de la croissance ne le résorbera pas.</Takeaway>
<p><strong>La comparaison allemande achève la démonstration.</strong> En 2009, le choc a été de même ampleur des deux côtés du Rhin — <span className="num">+4,8</span> points de dépense publique en Allemagne contre <span className="num">+4,4</span> en France — et le recul du PIB nominal allemand a même été plus violent. L’Allemagne a effacé <strong>79 % du choc en cinq ans</strong> ; la France en a effacé 23 % en deux ans, puis est repartie à la hausse jusqu’à dépasser son pic de crise. Le point de bascule est identifiable, et il est social : sur la protection sociale, l’Allemagne monte de 1,76 point en 2009 puis en rend 1,09 d’ici 2019 ; la France monte de 1,90 et n’en rend aucun.</p>
<h4>Un budget largement écrit d’avance</h4>
<p>Voici ce qui rend le reste compréhensible. <strong>L’essentiel de la dépense publique n’est pas décidé chaque année : il découle de droits ouverts et de la démographie.</strong> Retraites et santé absorbent 57 € sur 100 dépensés. Le nombre de retraités est passé d’environ 4 millions en 1975 à plus de 17 millions. En 2024, les prestations vieillesse ont progressé de <span className="num">6,5 %</span> sans qu’aucune mesure nouvelle ait été votée — dont environ 1,5 point seulement de démographie et de pension moyenne, le reste venant de la revalorisation et de l’effet de noria.</p>
<p><strong>Un gouvernement qui ne déciderait rien du tout verrait donc la dépense augmenter.</strong> C’est ce qui produit l’effet de cliquet visible sur cinquante ans : <span className="num">46,1 %</span> du PIB en 1975, <span className="num">53,6 %</span> au plus bas des années 2000, <span className="num">55,3 %</span> en 2019, <span className="num">57,0 %</span> en 2024. Chaque crise ajoute un palier ; la décrue qui suit ne ramène jamais au point de départ.</p>
<p>La conséquence est rarement énoncée, et elle explique beaucoup du débat budgétaire français : <strong>les gouvernements successifs n’ont pas tant arbitré entre des dépenses qu’ils n’ont cherché des recettes</strong>. L’assainissement de 2010-2019 s’est fait <strong>aux deux tiers par les recettes</strong> (+3,7 points de PIB) et pour un tiers par les dépenses (−2,7 points). Et la dégradation de 2022-2024 vient d’une <strong>chute des recettes</strong> (−2,5 points en deux ans), pas d’une hausse des dépenses, qui reculaient sur la même période.</p>
<h4>Ce qu’on a coupé pour payer, et ce qui paie aujourd’hui</h4>
<p>Trois financements se sont succédé, dans cet ordre.</p>
<ol className="check"><li><b>La défense.</b> C’est le poste qui a le plus reculé sur longue période, de l’ordre de <span className="num">4 %</span> du PIB dans les années 1960 à <span className="num">1,9 %</span> aujourd’hui. Il remonte depuis 2022, ce qui referme cette marge pour de bon.</li><li><b>L’investissement public.</b> Seul poste qui recule sur les deux mesures à la fois : <strong>−1 point de PIB, et de 11,5 % à 7,5 % de la dépense publique</strong>. Sur 100 € dépensés en 1975, 11,50 € allaient aux routes, aux ponts, aux réseaux et aux bâtiments ; il en reste 7,50 €. C’est le poste le plus facile à comprimer politiquement, parce que reporter la rénovation d’un pont ne se voit pas l’année où on le décide — et le plus coûteux à différer, parce que le report se paie plus tard et hors de tout arbitrage démocratique explicite.</li><li><b>La dette.</b> C’est le point décisif : en points de PIB, un seul poste a réellement reculé et les salaires publics ont même légèrement progressé. <strong>Les prestations n’ont donc pas été financées en coupant ailleurs : elles l’ont été par la hausse de la dépense totale</strong>, couverte d’abord par les prélèvements, ensuite par l’emprunt.</li></ol>
<Takeaway title={"Et c’est le déficit qui étrangle maintenant les services publics"}>La boucle se referme là. Les intérêts coûtent environ <strong>65 Md€ par an</strong> — davantage que le budget de la Défense, à peu près autant que celui de l’Éducation nationale, soit <strong>856 € par habitant contre 590 en Allemagne</strong>. Cet argent ne construit rien, ne soigne personne et n’enseigne à personne. Il déforme jusqu’aux comparaisons : la fonction « services généraux » française paraît lourde, et l’on en conclut à une bureaucratie coûteuse — alors que l’administration générale française est <strong>la moins chère du panel après l’Espagne</strong>, et qu’une fois les intérêts retirés elle tombe <strong>exactement à la moyenne européenne</strong>. Ce n’est pas un problème de bureaucratie, c’est un problème de dette. <strong>Le déficit n’est plus seulement une conséquence de la dépense : il en est devenu l’un des postes.</strong></Takeaway>
`.trim(),
  },
]

// ------------------------------------------------------- blocs insérés en fiche

/**
 * Blocs ajoutés à l'intérieur d'une fiche existante, insérés juste après un
 * appel `<DataTable id="…" />`. Comme toute addition, ils ne sont rendus qu'en
 * mode page.
 */
export interface BlockAddition {
  readonly chapter: string
  /** Identifiant du tableau après lequel le bloc est inséré. */
  readonly afterTable: string
  readonly jsx: string
}

export const addedBlocks: readonly BlockAddition[] = [
  {
    chapter: 'niveau-de-vie',
    afterTable: 'patrimoine-net-par-menage-enquete-bce-2023',
    jsx: `<Definition title={"Patrimoine brut, patrimoine net : la distinction qui décide de tout"}><p><strong>Le patrimoine brut est la somme de ce qu’on possède</strong>, sans rien retrancher : résidence principale, autre immobilier, dépôts, assurance-vie, actions, actifs professionnels, véhicules et objets de valeur.</p><p><strong>Le patrimoine net, c’est le brut moins toutes les dettes</strong> — capital restant dû du crédit immobilier, crédits à la consommation, découverts. C’est donc bien « ce que le ménage possède réellement », au sens où c’est ce qui resterait si tout était vendu et tout remboursé.</p><p>Deux ménages, même pays, même année :</p><ul><li>maison <span className="num">300 000 €</span>, épargne <span className="num">20 000 €</span>, crédit restant <span className="num">60 000 €</span> → brut <span className="num">320 000 €</span>, <strong>net <span className="num">260 000 €</span></strong> ;</li><li>maison <span className="num">350 000 €</span>, épargne <span className="num">25 000 €</span>, crédit restant <span className="num">230 000 €</span> → brut <span className="num">375 000 €</span>, <strong>net <span className="num">145 000 €</span></strong>.</li></ul><p>Le second possède plus de pierre et détient plus d’actifs ; il est nettement moins riche. <strong>C’est la dette, pas ce qui est possédé, qui fait l’écart</strong> — et c’est exactement ce qui sépare la Belgique des Pays-Bas dans le tableau ci-dessus.</p><p>Attention en relisant cette fiche : les <span className="num">205 100 €</span> et <span className="num">374 900 €</span> cités plus haut sont des patrimoines <strong>bruts</strong> (Insee, enquête <em>Histoire de vie et Patrimoine</em>), quand le tableau européen est en <strong>net</strong>. Dans l’enquête de la BCE elle-même, le brut médian français atteint <span className="num">177 300 €</span> pour un net de <span className="num">125 700 €</span> : <strong>41 % d’écart, à la même date et sur le même échantillon</strong>. Comparer un brut à un net n’a aucun sens.</p></Definition>`,
  },
  {
    chapter: 'niveau-de-vie',
    afterTable: 'patrimoine-net-par-menage-enquete-bce-2023',
    jsx: `<Limit title={"Ce tableau a été corrigé, et le commentaire qui suit ne l’a pas été"}><p>Les sept lignes d’origine ne se reconstituaient pas depuis l’enquête citée. Elles ont été <strong>remplacées par les valeurs publiées de la vague 2021</strong> (tableaux A1 et A2, agrégat <span className="num">DN3001</span>) : l’écart allait de <span className="num">−3 %</span> pour l’Allemagne à <span className="num">+36 %</span> pour les Pays-Bas, sans règle apparente, alors que les taux de propriété, eux, étaient justes à moins d’un point près. Le millésime a suivi : il n’existe pas de « vague 2023 » — les vagues sont 2010, 2014, 2017 et 2021, la quatrième ayant été publiée en 2023.</p><p><strong>Le texte qui suit date d’avant la correction</strong> et n’a pas été réécrit : son point 2 affirme que le patrimoine moyen allemand est « presque identique » au français. Sur les valeurs publiées, il lui est <strong>supérieur de 14 %</strong> (315 600 € contre 277 100 €), et le rapport moyenne/médiane est de 2,96 contre 2,20, non de 3,14 contre 2,22. Le reste du raisonnement tient : le ménage allemand médian reste nettement moins riche que le français et l’italien, et le taux de propriété reste le déterminant dominant.</p><p>Enfin, les lignes Luxembourg et Malte sont ajoutées par la refonte. <strong>La Belgique n’est pas première de la zone euro</strong> : elle est première des six pays que le tableau d’origine avait retenus.</p></Limit>
<h4>Le cas belge, puisqu’il surprend</h4>
<p>La médiane belge est bien la plus élevée des grands pays de la zone euro, et <strong>ce n’est pas un artefact de mesure</strong> : on compare des patrimoines nets, dettes déduites. Le ménage belge médian possède réellement davantage que le néerlandais ou l’allemand. Trois mécanismes se cumulent, tous réels.</p>
<ol className="check"><li><b>La dette, bien plus que la propriété.</b> Les Pays-Bas comptent 56,9 % de propriétaires, la Belgique 72,4 % : quinze points d’écart. Ce n’est pas là que se joue l’écart. Regardez les deux mesures côte à côte, dans la même enquête : en patrimoine <em>brut</em>, la médiane belge est de <span className="num">301 900 €</span> et la néerlandaise de <span className="num">232 200 €</span> — un rapport de 1,3. En patrimoine <em>net</em>, elles passent à <span className="num">242 400 €</span> et <span className="num">105 600 €</span> — un rapport de 2,3. <strong>Le passage du brut au net divise la médiane néerlandaise par plus de deux, et n’enlève qu’un cinquième à la belge.</strong> Le crédit belge s’amortit vite et intégralement, avec un apport élevé ; le crédit néerlandais a longtemps été remboursable <em>in fine</em>, à 100 % et plus de la valeur du bien, et déductible de l’impôt. Les Néerlandais détiennent la deuxième pierre du tableau et en doivent la moitié à leur banque.</li><li><b>Aucune correction immobilière.</b> Les prix belges progressent sans discontinuer depuis les années 1980. L’Espagne, les Pays-Bas et l’Irlande ont, eux, traversé la correction de 2008-2013.</li><li><b>Les droits à retraite ne sont comptés nulle part, et c’est asymétrique.</b> Les Pays-Bas ont les fonds de pension les mieux capitalisés au monde rapportés au PIB : rien de cela n’entre dans ce tableau. La Belgique, dont le taux de remplacement public est bas pour les revenus moyens et hauts, pousse au contraire ses ménages à s’auto-assurer par la pierre et l’épargne — patrimoine qui, lui, est compté. <strong>Ce tableau ne classe donc pas les pays par « qui est le mieux loti », mais par « qui détient le plus en propre ».</strong></li></ol>
<MissingData title={"Ce que la ligne belge ne vaut pas"}>La Banque nationale de Belgique signale que <strong>les chiffres belges de la vague 2021 sont extrapolés depuis l’enquête de 2017</strong>, avec une marge d’erreur substantielle : la Belgique n’a pas mené d’enquête complète pour cette vague. Le classement tient — la Belgique était déjà en tête en 2017 — mais la précision du chiffre, non. Par ailleurs, le rapport moyenne/médiane de 1,68, le plus bas du tableau, reflète en partie une <strong>sous-mesure du sommet</strong> : la France et l’Allemagne sur-échantillonnent les hauts patrimoines à partir de fichiers fiscaux, la Belgique moins. Cet effet joue sur la moyenne, pas sur la médiane : il ne retire rien au constat principal.</MissingData>
<Source ids={["bnb-revue-economique-2024-patrimoine-des-menages"]} />
<h4>Et aux États-Unis ?</h4>
<DataTable id="patrimoine-net-des-menages-americains-scf-2022" />
<Source ids={["reserve-federale-scf-2022"]} />
<Limit title={"Deux enquêtes qui ne se comparent pas terme à terme"}><p>Au taux moyen de 2022, la médiane américaine vaut environ <span className="num">183 000 €</span> et la moyenne <span className="num">1 010 000 €</span> : le ménage américain médian se situe entre le français et le belge, quand la moyenne américaine vaut trois fois et demie la française. Trois réserves avant d’en tirer quoi que ce soit.</p><p><strong>La comparaison est biaisée en faveur des États-Unis sur la retraite.</strong> Ni l’enquête américaine ni l’européenne ne comptent les droits publics, mais la première <strong>compte les plans 401(k) et les IRA</strong>, qui sont le principal véhicule de retraite américain. Les États-Unis comptabilisent donc en patrimoine ce que la France laisse hors champ sous forme de droits en répartition.</p><p><strong>L’enquête américaine capte bien mieux le sommet</strong>, grâce à un sur-échantillon tiré des données fiscales. Le rapport de 5,51 est donc à la fois plus élevé et mieux mesuré que les rapports européens, qui sont sous-estimés. Enfin l’unité d’observation diffère — <em>family</em> contre ménage — et la conversion au taux de change flatte les États-Unis, dont le niveau des prix est plus élevé.</p></Limit>`,
  },
  {
    chapter: 'depenses-publiques',
    afterTable: 'prelevement',
    jsx: `<Figure id="d-ou-viennent-les-1-323-md-de-prelevements" />
<Definition title={"Les sept blocs, et ce que chacun recouvre"}><p>Le tableau ci-dessus donne les lignes telles qu’Eurostat les publie ; la figure les regroupe par <strong>assiette</strong> — c’est-à-dire par ce sur quoi le prélèvement est assis, qui est la question économiquement pertinente.</p><ul><li><b>Travail</b> — les cotisations sociales, part employeur (293,1 Md€) et part salarié ou indépendant (137,9 Md€).</li><li><b>Revenus des ménages</b> — impôt sur le revenu au barème, CSG et CRDS confondus dans une seule ligne comptable.</li><li><b>Consommation</b> — TVA (206,3 Md€) et accises sur les carburants, l’alcool et le tabac (59,1 Md€).</li><li><b>Production</b> — les impôts dus <em>du seul fait qu’on produit</em> : taxe foncière des entreprises, taxe sur les salaires, versement mobilité, cotisation foncière. Ils sont dus même à perte.</li><li><b>Bénéfices des sociétés</b> — l’impôt sur les sociétés, seul poste assis sur un résultat.</li><li><b>Transmission du patrimoine</b> — successions et donations.</li></ul><p>Deux totaux voisins circulent et ne doivent pas être confondus : <strong>1 323,5 Md€</strong> est la mesure Eurostat 2024 de l’ensemble des prélèvements ; <strong>1 271 Md€</strong> est la masse que l’Insee répartit par décile de niveau de vie pour 2023, plus loin dans ce chapitre. Millésimes et périmètres différents.</p></Definition>
<Takeaway title={"Ce que la France taxe, et ce que taxent les autres"}>La France ne prélève pas seulement beaucoup : elle prélève sur des assiettes particulières. Les <strong>cotisations employeurs</strong> y valent <span className="num">10,0 %</span> du PIB, contre <span className="num">7,0 %</span> en Allemagne et <span className="num">5,2 %</span> aux Pays-Bas. Les <strong>impôts de production</strong> y valent <span className="num">4,4 %</span> du PIB contre <span className="num">1,0 %</span> en Allemagne — et ils sont dus même quand l’entreprise perd de l’argent. En revanche, l’imposition des <strong>bénéfices</strong> est quasiment identique dans les deux pays : 4,31 % de la valeur ajoutée des sociétés non financières contre 4,33 %. <strong>L’écart franco-allemand ne porte donc pas sur le fait de taxer les entreprises, mais sur le fait de taxer l’activité plutôt que le résultat, et le salaire plutôt que le revenu.</strong></Takeaway>`,
  },
  {
    chapter: 'depenses-publiques',
    afterTable: 'sur-100-de-cout-employeur',
    jsx: `<Figure id="sur-100-de-cout-employeur-ce-qui-est-preleve" />
<Takeaway title={"Le niveau n’est pas la singularité — l’assiette l’est"}>Sur le <strong>total</strong> prélevé, la France est troisième d’un panel de neuf : élevée, pas aberrante. Sur les <strong>cotisations patronales</strong>, elle est première de l’OCDE ; sur l’<strong>impôt sur le revenu</strong>, huitième sur neuf. Deux conséquences pratiques. D’abord, l’essentiel du prélèvement français est concentré <strong>en amont de la fiche de paie</strong>, là où le salarié ne le voit pas — ce qui rend le débat sur « ce que je paie » structurellement faussé. Ensuite, comparer des <strong>salaires bruts</strong> entre pays n’a aucun sens : à coût employeur identique, le brut danois dépasse le brut français de 35 % au seul motif que le Danemark ne prélève presque rien avant le brut. Les seules comparaisons salariales valides portent sur le <strong>coût total employeur</strong> ou sur le <strong>net après impôt</strong>.</Takeaway>`,
  },
  {
    chapter: 'depenses-publiques',
    afterTable: 'impot',
    jsx: `<h4>Et les autres pays, que prélèvent-ils ?</h4>
<Figure id="ce-que-chaque-pays-preleve-en-part-de-sa-richesse" />
<p>Le classement répond à « combien ». Il ne répond pas à « <strong>sur quoi</strong> » — et c’est la question qui distingue réellement les modèles. Voici la comparaison poste par poste avec l’Allemagne, qui prélève 4,4 points de PIB de moins au total.</p>
<DataTable id="france-et-allemagne-meme-niveau-assiettes-opposees" />
<Source ids={["eurostat-structure-des-prelevements-france-allemagne"]} />
<Limit title={"Quatre dénominateurs différents, qui ne s’additionnent pas"}><p>Les trois premières lignes rapportent au <strong>PIB</strong>, la quatrième à la <strong>valeur ajoutée des sociétés non financières</strong>, la cinquième au <strong>coût d’un salarié type</strong> — célibataire sans enfant au salaire moyen. Ce sont trois questions distinctes, et <strong>additionner ces lignes n’aurait aucun sens</strong>. Aucune n’est un montant par habitant, par ménage ou par foyer fiscal.</p><p>Le rapprochement lui-même est notre assemblage : Eurostat publie ces postes, pas cette comparaison. Et il ne couvre que deux pays, faute d’une ventilation par assiette disponible pour l’ensemble du panel dans ce dossier.</p></Limit>
<Takeaway title={"Le même niveau, des assiettes opposées"}>Trois modèles cohabitent en Europe, à niveau de prélèvement voisin. Le <strong>modèle français</strong> prélève sur <b>le travail et la production</b> : cotisations employeurs à 10 % du PIB, impôts de production à 4,4 %, dus même à perte. Le <strong>modèle allemand</strong> prélève davantage sur <b>la consommation</b> — 9,4 % du PIB de TVA contre 7,1 — et davantage sur le salarié lui-même que sur son employeur. Le <strong>modèle danois</strong> prélève presque tout par <b>l’impôt sur le revenu</b> : 0,7 € de cotisations patronales sur 100 € de coût employeur, contre 26,7 en France, pour une protection sociale d’ampleur comparable. <strong>Et sur l’imposition des bénéfices, la France et l’Allemagne sont à deux centièmes de point l’une de l’autre</strong> : le débat français sur le taux de l’impôt sur les sociétés porte sur le poste où l’écart est nul.</Takeaway>`,
  },
  {
    chapter: 'depenses-publiques',
    afterTable: 'revenus-de-2024-imposition-en-2025',
    jsx: `<Definition title={"Par personne, par ménage ou par foyer fiscal ? L’unité change la lecture"}><p>Les chiffres de ce chapitre n’ont pas tous la même unité de compte, et confondre deux d’entre elles suffit à inverser une conclusion. Quatre unités circulent.</p><ul><li><b>Par habitant</b> — la dépense publique (<span className="num">24 308 €</span>), la dette (<span className="num">50 400 €</span>), les comparaisons européennes par tête. <strong>Tout le monde compte pour un</strong>, nouveau-nés et retraités compris. C’est la seule unité qui compare des quantités entre pays.</li><li><b>Par foyer fiscal</b> — tout ce qui touche à l’impôt sur le revenu, dont le tableau ci-dessus. Un foyer fiscal n’est ni une personne ni un ménage : <strong>un couple marié ou pacsé compte pour un foyer, deux concubins pour deux</strong>. D’où <span className="num">41,5 millions</span> de foyers fiscaux pour une population de <span className="num">68 millions</span> d’habitants. Dire « la moitié des Français ne paient pas d’impôt sur le revenu » est donc doublement inexact : ce sont <strong>53 % des foyers</strong>, et ces foyers acquittent la TVA et la CSG comme les autres.</li><li><b>Par unité de consommation</b> — les déciles de niveau de vie et les taux de prélèvement par décile. Le revenu du ménage est divisé par un nombre d’unités qui tient compte de sa composition, un ménage de quatre ne coûtant pas quatre fois un ménage d’un. <strong>Ce n’est ni par personne, ni par ménage.</strong></li><li><b>Sur 100 € de coût employeur</b> — le coin fiscalo-social. L’unité est <strong>un salarié</strong>, dans une situation type ; un couple à deux salaires est prélevé deux fois sur ce barème.</li></ul><p><strong>La règle pratique :</strong> avant de comparer deux chiffres de ce dossier, vérifier qu’ils partagent la même unité. Un montant par ménage rapporté à un montant par habitant se trompe d’un facteur voisin de deux ; par foyer fiscal, d’un facteur variable selon la structure des couples.</p></Definition>`,
  },
  {
    chapter: 'niveau-de-vie',
    afterTable: 'seuil-de-patrimoine-debut-2024',
    jsx: `<Definition title={"Ces seuils sont par ménage — et le niveau de vie ne l’est pas"}><p>C’est la confusion la plus coûteuse de ce chapitre, parce que les deux séries voisinent en permanence et n’ont pas la même unité de compte.</p><ul><li><b>Le patrimoine se mesure par ménage.</b> Les <span className="num">205 100 €</span> de médiane, les <span className="num">857 700 €</span> du seuil des 10 % et les <span className="num">3 020 900 €</span> du seuil du 1 % désignent <strong>un ménage entier</strong>, quelle que soit sa taille. Une personne seule et un couple avec deux enfants comptent chacun pour un. Un couple qui possède 800 000 € n’est pas dans les 10 % ; deux personnes seules possédant 430 000 € chacune y sont toutes les deux.</li><li><b>Le niveau de vie se mesure par unité de consommation.</b> Les <span className="num">26 740 €</span> par an correspondent à une <strong>personne seule</strong> ; le même niveau de vie pour un couple avec deux jeunes enfants suppose un revenu de ménage nettement supérieur. C’est aussi l’unité des déciles et du rapport interdécile.</li><li><b>L’enquête européenne est en patrimoine net par ménage</b>, l’enquête française en patrimoine <em>brut</em> par ménage. Les deux se lisent par ménage, mais pas sur le même agrégat : dans l’enquête de la BCE elle-même, le brut médian français vaut <span className="num">177 300 €</span> pour un net de <span className="num">125 700 €</span>.</li></ul><p><strong>Conséquence directe sur les comparaisons internationales :</strong> un pays où les ménages sont plus petits affiche mécaniquement un patrimoine médian par ménage plus faible, sans que ses habitants soient moins riches. La taille moyenne des ménages n’est pas la même en France, en Allemagne et en Italie — <strong>aucun des tableaux de ce chapitre ne la neutralise</strong>, et le dossier n’en donne pas de mesure. C’est une limite à garder en tête avant de conclure d’un classement par ménage à un classement des personnes.</p></Definition>`,
  },
  {
    chapter: 'commerce-exterieur',
    afterTable: 'solde-bilateral-des-biens-france',
    jsx: `<h4>Ce que la réaffectation change à la lecture par zone</h4>
<p>La conséquence dépasse le seul solde chinois, et elle contredit l’une des affirmations les plus reprises de ce chapitre : celle selon laquelle <strong>la totalité du déficit français viendrait du commerce à l’intérieur de l’Europe</strong>.</p>
<DataTable id="ce-que-la-reaffectation-change-a-la-lecture-par-zone" />
<Source ids={["eurostat-douanes-francaises-et-eurostat-comext-s"]} />
<Limit title={"Les deux dernières lignes sont notre arithmétique, sous hypothèse affichée"}><p>Les trois premières lignes reprennent la réestimation de la fiche. Les deux dernières en tirent la conséquence, et elles reposent sur une hypothèse qu’il faut énoncer : <strong>les quelque 53 Md€ de déficit retirés aux Pays-Bas et à la Belgique correspondent, pour l’essentiel, à des marchandises d’origine extra-européenne</strong> — ce qui est le mécanisme même de l’effet Rotterdam, mais dont aucune clé publiée ne donne la répartition exacte.</p><p>Sous cette hypothèse, le déficit avec l’Union tomberait d’environ 113 à 60 Md€, et <strong>l’excédent de 19 Md€ avec le reste du monde deviendrait un déficit d’une trentaine de milliards</strong>. Les ordres de grandeur sont robustes ; les valeurs ne le sont pas. Rappel de la fiche : <strong>ni les douanes, ni Eurostat, ni la Banque de France ne publient la ventilation des importations françaises venues des Pays-Bas et de Belgique par pays d’origine ultime.</strong> Les deux colonnes ne viennent pas exactement de la même source et ne doivent pas être soustraites ligne à ligne au milliard près.</p></Limit>
<p>Une fois les <strong>services</strong> intégrés — la France est excédentaire de 6,2 Md€ avec la Chine —, le déséquilibre réel s’établit autour de <span className="num">−44 Md€</span>. C’est, de tout ce chapitre, <strong>le seul déséquilibre bilatéral qui résiste à la fois à l’intégration des services et à la correction du transit portuaire</strong> : celui avec les États-Unis change de signe, celui avec les Pays-Bas et la Belgique s’évapore, celui avec l’Allemagne se réduit des trois quarts.</p>`,
  },
]

// --------------------------------------------------------- parties de chapitre

/**
 * Un intertitre de partie inséré avant une fiche.
 *
 * Le document d'origine en porte déjà dans deux chapitres (« Partie 1 » à
 * « Partie 4 » sur l'emploi, « Le patrimoine » sur le niveau de vie) : c'est
 * son propre dispositif, et le balisage repris ici est le sien. On l'étend aux
 * chapitres devenus trop longs pour être parcourus d'un bloc.
 *
 * Comme tout ajout, une partie n'est rendue qu'en `mode="page"` : `/tout` reste
 * comparable élément par élément, et l'ordre des fiches n'est jamais modifié —
 * on n'insère qu'un intertitre, on ne déplace rien.
 */
export interface PartAddition {
  readonly chapter: string
  /** Identifiant de la fiche devant laquelle l'intertitre est inséré. */
  readonly beforeFiche: string
  readonly label: string
  readonly title: string
  readonly lede: string
}

export const addedParts: readonly PartAddition[] = [
  {
    chapter: 'depenses-publiques',
    beforeFiche: 's1-q1',
    label: 'Partie 1',
    title: 'Où va l’argent',
    lede:
      'Les 1 672 Md€ ventilés par fonction, comparés à ceux de nos voisins, et les deux endroits où la ' +
      'comparaison se renverse quand on change de dénominateur.',
  },
  {
    chapter: 'depenses-publiques',
    beforeFiche: 's1-q8',
    label: 'Partie 2',
    title: 'Le dénominateur : ce que la France produit',
    lede:
      'Presque tous les ratios de ce dossier ont le PIB au dénominateur. Cette partie le regarde en face : ' +
      'où il en est, pourquoi il décroche, et ce qui subsiste quand on le rapporte à ceux qui produisent.',
  },
  {
    chapter: 'depenses-publiques',
    beforeFiche: 's1-q14',
    label: 'Partie 3',
    title: 'D’où vient l’argent',
    lede:
      'Combien la France prélève, sur quelles assiettes, et ce que prélèvent les autres pays — le niveau ' +
      'n’étant pas la singularité française, sa composition l’étant.',
  },
  {
    chapter: 'depenses-publiques',
    beforeFiche: 's1-q21',
    label: 'Partie 4',
    title: 'Qui paie, et qui reçoit',
    lede:
      'La répartition de l’effort le long de la distribution des revenus, ce que la redistribution corrige, ' +
      'et le premier poste de la dépense : les prestations sociales.',
  },
  {
    chapter: 'securite-justice',
    beforeFiche: 's12-q1',
    label: 'Partie 1',
    title: 'Mesurer la violence',
    lede:
      'Les homicides, ce que les conventions de comptage font dire aux chiffres, et l’instrument qui ne ' +
      'dépend ni de la police ni du parquet.',
  },
  {
    chapter: 'securite-justice',
    beforeFiche: 's12-q8',
    label: 'Partie 2',
    title: 'Ce qui augmente, et ce qui est mieux déclaré',
    lede:
      'Deux instruments indépendants — la plainte et l’enquête auprès de la population — et ce que leur ' +
      'écart permet de trancher.',
  },
  {
    chapter: 'securite-justice',
    beforeFiche: 's12-q10',
    label: 'Partie 3',
    title: 'Les moyens : police, justice, prisons',
    lede:
      'Plus de policiers que l’Allemagne, deux fois moins de juges, et des prisons occupées à 130 %.',
  },
  {
    chapter: 'industrie',
    beforeFiche: 's5-q1',
    label: 'Partie 1',
    title: 'Ce qui s’est passé',
    lede:
      'Le recul de l’emploi et de la valeur ajoutée industriels, les coûts, et la part qui vient réellement ' +
      'des délocalisations — bien plus faible qu’on ne le dit.',
  },
  {
    chapter: 'industrie',
    beforeFiche: 's5-q8',
    label: 'Partie 2',
    title: 'La fiscalité, et ce qu’elle change vraiment',
    lede:
      'Les impôts de production, l’anomalie française la mieux documentée du dossier fiscal — et l’absence ' +
      'de preuve que les baisser réindustrialise.',
  },
  {
    chapter: 'industrie',
    beforeFiche: 's5-q11',
    label: 'Partie 3',
    title: 'Décider où implanter une usine',
    lede:
      'Le dossier tel qu’il se présente à un investisseur, poste par poste, et ce qui départage réellement ' +
      'la France, l’Allemagne, les États-Unis et la Chine.',
  },
]

// ------------------------------------------------ divergences déclarées de rendu

/**
 * Les substitutions que `/tout` est autorisé à présenter face au document
 * d'origine — et rien d'autre. `check-render.ts` s'en sert pour distinguer une
 * correction assumée d'une régression.
 */
export function divergences(): readonly (readonly [string, string])[] {
  const pairs: (readonly [string, string])[] = []
  for (const amendment of tableAmendments) {
    for (const { was, header } of Object.values(amendment.headers ?? {})) {
      pairs.push([was, header])
    }
    for (const row of Object.values(amendment.corrections ?? {})) {
      for (const { was, cell } of Object.values(row)) {
        if (!isNumCell(cell)) continue
        pairs.push([was, formatValue(cell)])
      }
    }
  }
  return pairs
}
