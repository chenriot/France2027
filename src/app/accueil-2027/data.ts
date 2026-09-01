// Les indicateurs de la page d'accueil. Aucun chiffre ne vit ailleurs : la
// page et ses composants n'écrivent que du balisage. Voir CLAUDE.md, règles 2
// à 4 — chaque indicateur porte ses sources et son millésime, et les
// identifiants de source viennent du registre `src/data/sources.ts`.
//
// Les valeurs sont reprises des `data.ts` des chapitres, sans retouche. Quand
// un chapitre corrige un chiffre, c'est ici qu'il faut le reporter.
import type { NumCell, Sources } from "@/lib/types";

/** Les cinq tons de la charte utilisables sur fond blanc. Pas de jaune : il
 *  ne passe pas le contraste hors aplat bleu. */
export type Tone = "blue" | "blue2" | "red" | "ink" | "grey";

export interface LineSeries {
  readonly key: string;
  readonly label: string;
  readonly tone: Tone;
  /** `null` = donnée absente. Le tracé s'interrompt, il ne s'invente pas. */
  readonly values: readonly (number | null)[];
}

export interface BarItem {
  readonly label: string;
  readonly value: number;
  readonly decimals: number;
  readonly tone: Tone;
}

export interface HeatRow {
  readonly label: string;
  readonly values: readonly number[];
}

export interface RankRow {
  readonly pos: string;
  readonly suffix: string;
  readonly label: string;
  readonly detail: string;
  readonly slots: number;
  readonly at: number;
  readonly tone: Tone;
}

export type Chart =
  | {
      readonly kind: "spark";
      readonly box: readonly [number, number];
      readonly tone: Tone;
      readonly values: readonly number[];
    }
  | {
      readonly kind: "lines";
      readonly box: readonly [number, number];
      readonly x: readonly number[];
      readonly yMin: number;
      readonly yMax: number;
      readonly decimals: number;
      readonly series: readonly LineSeries[];
    }
  | {
      readonly kind: "bars";
      readonly box: readonly [number, number];
      readonly max: number;
      readonly unit: string;
      readonly items: readonly BarItem[];
    }
  | {
      readonly kind: "gauge";
      readonly box: readonly [number, number];
      readonly value: number;
      readonly max: number;
      readonly ref: number;
      readonly refLabel: string;
      readonly decimals: number;
      readonly unit: string;
      readonly tone: Tone;
    }
  | {
      readonly kind: "donut";
      readonly box: readonly [number, number];
      readonly value: number;
      readonly tone: Tone;
    }
  | {
      readonly kind: "heat";
      readonly columns: readonly string[];
      readonly rows: readonly HeatRow[];
      readonly decimals: number;
      readonly unit: string;
      /** Colonnes portant l'échelle de couleur ; les autres restent neutres. */
      readonly heatColumns: readonly number[];
      readonly diverging: boolean;
      readonly ramp: readonly [string, string];
    }
  | { readonly kind: "ranks"; readonly rows: readonly RankRow[] };

/** Un indicateur : une face de tuile. */
export interface Kpi {
  readonly eyebrow: string;
  readonly tone: Tone;
  readonly title: string;
  readonly value?: NumCell;
  readonly unit?: string;
  readonly delta?: NumCell;
  readonly deltaTone?: "up" | "down";
  /** Phrase rédigée, en HTML restreint : `<b>` seulement. */
  readonly note?: string;
  readonly chart?: Chart;
  readonly sources: Sources;
  readonly vintage: string;
  /** Ligne de source affichée, reprise de la formulation du chapitre. */
  readonly credit: string;
}

export interface Tile {
  readonly cols: 1 | 2;
  readonly rows: 1 | 2;
  /** Période de rotation, en millisecondes. Toutes différentes : la mosaïque
   *  ne doit jamais basculer d'un bloc. */
  readonly every: number;
  readonly axis: "x" | "y";
  readonly faces: readonly Kpi[];
}

// --------------------------------------------------------------- séries

const DETTE = [
  57.805, 60.597, 61.993, 62.102, 61.39, 59.693, 59.31, 61.308, 65.414, 66.892,
  68.206, 65.414, 65.496, 69.793, 84.108, 86.298, 88.707, 91.69, 94.591, 96.206,
  97, 98.095, 98.807, 98.506, 98.204, 114.901, 112.793, 111.397, 109.509,
  112.602, 115.612,
] as const;

const GES = [
  546.869, 572.486, 561.48, 539.943, 531.689, 538.046, 556.357, 548.577,
  562.429, 557.116, 551.803, 556.926, 550.569, 554.649, 554.269, 555.503,
  544.877, 535.104, 530.266, 509.108, 513.093, 487.951, 490.702, 490.133, 457.4,
  460.721, 463.662, 466.034, 446.49, 437.666, 398.008, 422.391, 405.787,
  378.178, 366.983, 359.488,
] as const;

const PISA_FR = [
  510.816, 495.493, 496.822, 495.019, 492.884, 495.398, 473.909,
] as const;
const LOGEMENT_FR = [67.5, 86, 103.7, 100, 97, 93.6] as const;

// ------------------------------------------------------------- indicateurs

export const tiles: readonly Tile[] = [
  // ------------------------------------------------------ 1. carte de chaleur
  {
    cols: 2,
    rows: 2,
    every: 13000,
    axis: "x",
    faces: [
      {
        eyebrow: "Synthèse · dépense comparée",
        tone: "blue",
        title: "Dépense publique par fonction, en euros par habitant",
        note: "L'Allemagne dépense plus que la France sur <b>huit fonctions sur dix</b>. Les exceptions sont le logement (613 € contre 245) et la culture.",
        chart: {
          kind: "heat",
          columns: ["UE-27", "Allemagne", "France"],
          decimals: 0,
          unit: " €",
          heatColumns: [0, 1, 2],
          diverging: false,
          ramp: ["faible", "élevée"],
          rows: [
            { label: "Protection sociale", values: [7865, 10575, 10077] },
            { label: "Santé", values: [2957, 3942, 3797] },
            { label: "Services généraux", values: [2434, 3327, 2633] },
            { label: "Affaires économiques", values: [2119, 2808, 2415] },
            { label: "Enseignement", values: [1910, 2330, 2161] },
            { label: "Défense", values: [592, 701, 788] },
            { label: "Ordre et sécurité", values: [697, 846, 758] },
            { label: "Loisirs, culture", values: [473, 551, 626] },
            { label: "Logement", values: [296, 245, 613] },
            { label: "Environnement", values: [330, 294, 440] },
          ],
        },
        sources: ["eurostat-gov-10a-exp"],
        vintage: "2024",
        credit: "Eurostat gov_10a_exp · millésime 2024",
      },
      {
        eyebrow: "Thème 03 · Retraites et durée de travail",
        tone: "red",
        title: "Taux d'emploi par tranche d'âge, France et Allemagne",
        note: "Sur le cœur de carrière, les deux pays sont à égalité — <b>2,1 points</b>. L'écart se fait aux deux bouts : 16,6 points chez les jeunes, <b>24,2 points sur les 60-64 ans</b>.",
        chart: {
          kind: "heat",
          columns: ["France", "Allemagne", "Écart"],
          decimals: 1,
          unit: " %",
          heatColumns: [2],
          diverging: true,
          ramp: ["France en retrait", "France en avance"],
          rows: [
            { label: "15-24 ans", values: [34.4, 51, -16.6] },
            { label: "25-54 ans", values: [82.9, 85, -2.1] },
            { label: "55-64 ans", values: [60.3, 75, -14.7] },
            { label: "60-64 ans", values: [42.4, 66.6, -24.2] },
          ],
        },
        sources: ["eurostat-eurostat-enquete-forces-de-travail-202"],
        vintage: "2024",
        credit: "Eurostat, enquête forces de travail · millésime 2024",
      },
    ],
  },

  // ---------------------------------------------------- 2. séries comparées
  {
    cols: 2,
    rows: 2,
    every: 12000,
    axis: "y",
    faces: [
      {
        eyebrow: "Thème 12 · Sécurité et justice",
        tone: "red",
        title: "Homicides et tentatives d'homicide, France et Allemagne",
        note: "En 2008, la France était <b>en dessous</b> de l'Allemagne pour les tentatives. En 2024, elle est à <b>trois fois</b> le taux allemand, lequel est stable depuis dix-sept ans.",
        chart: {
          kind: "lines",
          box: [510, 300],
          x: [2008, 2010, 2012, 2013, 2014, 2016, 2018, 2019, 2020, 2022, 2024],
          yMin: 0,
          yMax: 7,
          decimals: 2,
          series: [
            {
              key: "tf",
              label: "Tentatives, France",
              tone: "red",
              values: [
                1.819,
                1.869,
                2.39,
                null,
                2.54,
                3.39,
                3.719,
                null,
                4.631,
                5.281,
                6.25,
              ],
            },
            {
              key: "ta",
              label: "Tentatives, Allemagne",
              tone: "blue",
              values: [
                1.96,
                1.981,
                null,
                1.981,
                null,
                2.14,
                null,
                2.181,
                null,
                2.069,
                2.06,
              ],
            },
            {
              key: "hf",
              label: "Homicides, France",
              tone: "ink",
              values: [
                1.519,
                1.231,
                1.25,
                null,
                1.16,
                1.169,
                1.04,
                null,
                1.031,
                1.21,
                1.281,
              ],
            },
            {
              key: "ha",
              label: "Homicides, Allemagne",
              tone: "grey",
              values: [
                0.8,
                0.85,
                null,
                0.769,
                null,
                0.91,
                null,
                0.71,
                null,
                0.74,
                0.831,
              ],
            },
          ],
        },
        sources: ["eurostat-eurostat-crim-off-cat-iccs0101-et-iccs0"],
        vintage: "2024",
        credit: "Eurostat crim_off_cat · pour 100 000 habitants · 2024",
      },
      {
        eyebrow: "Thème 14 · Éducation",
        tone: "blue",
        title: "PISA mathématiques, cinq pays, 2003-2022",
        note: "La France perd <b>36,9 points en dix-neuf ans</b>, près d'une année de scolarité. Le décrochage de 2022 est le plus brutal de la série.",
        chart: {
          kind: "lines",
          box: [510, 300],
          x: [2003, 2006, 2009, 2012, 2015, 2018, 2022],
          yMin: 460,
          yMax: 590,
          decimals: 0,
          series: [
            {
              key: "sg",
              label: "Singapour",
              tone: "ink",
              values: [null, null, 562.002, 573.482, 564.184, 568.975, 574.715],
            },
            {
              key: "jp",
              label: "Japon",
              tone: "grey",
              values: [
                534.108, 523.102, 528.985, 536.385, 532.4, 526.992, 535.579,
              ],
            },
            {
              key: "ee",
              label: "Estonie",
              tone: "blue2",
              values: [
                null,
                514.611,
                512.097,
                520.493,
                519.497,
                523.387,
                509.915,
              ],
            },
            {
              key: "de",
              label: "Allemagne",
              tone: "red",
              values: [502.989, 503.795, 512.808, 513.52, 506.025, 500, 474.81],
            },
            {
              key: "fr",
              label: "France",
              tone: "blue",
              values: [
                510.816, 495.493, 496.822, 495.019, 492.884, 495.398, 473.909,
              ],
            },
          ],
        },
        sources: ["ocde-ocde-enquete-pisa-score-moyen-en-mathe"],
        vintage: "2022",
        credit: "OCDE PISA via Our World in Data · 2022",
      },
    ],
  },

  // ------------------------------------------- 3. valeur, écart et courbe
  {
    cols: 1,
    rows: 1,
    every: 8000,
    axis: "y",
    faces: [
      {
        eyebrow: "Thème 10 · Écologie",
        tone: "blue",
        title: "Gaz à effet de serre",
        value: { v: 359.488, d: 1 },
        unit: "MtCO₂e",
        delta: { v: -34.3, d: 1, u: "%" },
        deltaTone: "down",
        chart: {
          kind: "spark",
          box: [215, 92],
          tone: "blue",
          values: [...GES],
        },
        sources: ["eurostat-sdg-13-10"],
        vintage: "2025",
        credit: "Eurostat sdg_13_10 · Citepa 2026",
      },
      {
        eyebrow: "Thème 14 · Éducation",
        tone: "red",
        title: "PISA mathématiques, France",
        value: { v: 473.909, d: 1 },
        unit: "score",
        delta: { v: -36.9, d: 1, u: "pts" },
        deltaTone: "up",
        chart: {
          kind: "spark",
          box: [215, 92],
          tone: "red",
          values: [...PISA_FR],
        },
        sources: ["ocde-ocde-enquete-pisa-score-moyen-en-mathe"],
        vintage: "2022",
        credit: "OCDE PISA via Our World in Data · 2022",
      },
      {
        eyebrow: "Thème 15 · Logement",
        tone: "ink",
        title: "Prix des logements sur revenu",
        value: { v: 93.6, d: 1 },
        unit: "indice 2015",
        delta: { v: -9.7, d: 1, u: "%" },
        deltaTone: "down",
        chart: {
          kind: "spark",
          box: [215, 92],
          tone: "ink",
          values: [...LOGEMENT_FR],
        },
        sources: ["ocde-ocde-base-des-prix-de-l-immobilier-rat"],
        vintage: "2024",
        credit: "OCDE, base des prix de l'immobilier · 2024",
      },
    ],
  },

  // ------------------------------------------------------------- 4. jauge
  {
    cols: 1,
    rows: 1,
    every: 9500,
    axis: "x",
    faces: [
      {
        eyebrow: "Synthèse · proposition n° 1",
        tone: "blue",
        title: "Prestations sociales, en % du PIB",
        note: "En 2024, contre <b>17,2 % en 1975</b>.",
        chart: {
          kind: "gauge",
          box: [215, 86],
          value: 25.5,
          max: 30,
          ref: 17.2,
          refLabel: "1975",
          decimals: 1,
          unit: " %",
          tone: "blue",
        },
        sources: ["eurostat-gov-10a-main"],
        vintage: "2024",
        credit: "Eurostat gov_10a_main · 2024",
      },
      {
        eyebrow: "Thème 04 · Emploi",
        tone: "red",
        title: "Taux d'emploi des 15-64 ans",
        note: "Contre <b>86,0 % aux Pays-Bas</b>.",
        chart: {
          kind: "gauge",
          box: [215, 86],
          value: 69.8,
          max: 100,
          ref: 86,
          refLabel: "P.-Bas",
          decimals: 1,
          unit: " %",
          tone: "red",
        },
        sources: ["eurostat-lfsa-ergan"],
        vintage: "2024",
        credit: "Eurostat, forces de travail · 2024",
      },
    ],
  },

  // ------------------------------------------------------------ 5. barres
  {
    cols: 1,
    rows: 1,
    every: 10500,
    axis: "x",
    faces: [
      {
        eyebrow: "Thème 03 · Retraites",
        tone: "red",
        title: "Emploi des 60-64 ans",
        note: "<b>24,2 points</b> d'écart — le plus large du dossier.",
        chart: {
          kind: "bars",
          box: [215, 78],
          max: 80,
          unit: " %",
          items: [
            { label: "Allemagne", value: 66.6, decimals: 1, tone: "blue" },
            { label: "France", value: 42.4, decimals: 1, tone: "red" },
          ],
        },
        sources: ["eurostat-eurostat-enquete-forces-de-travail-202"],
        vintage: "2024",
        credit: "Eurostat, forces de travail · 2024",
      },
      {
        eyebrow: "Thème 14 · Éducation",
        tone: "ink",
        title: "Encadrement au primaire",
        note: "Contre <b>14,0 et 20,0</b> en moyenne OCDE.",
        chart: {
          kind: "bars",
          box: [215, 78],
          max: 26,
          unit: "",
          items: [
            { label: "Enseignant", value: 17.9, decimals: 1, tone: "red" },
            { label: "Classe", value: 21.6, decimals: 1, tone: "ink" },
          ],
        },
        sources: ["ocde-ocde-regards-sur-l-education-2025-tabl"],
        vintage: "2024",
        credit: "OCDE, Regards sur l'éducation 2025",
      },
    ],
  },

  // -------------------------------------------------------------- 6. part
  {
    cols: 1,
    rows: 1,
    every: 9000,
    axis: "y",
    faces: [
      {
        eyebrow: "Synthèse · proposition n° 1",
        tone: "blue",
        title: "La marge budgétaire, absorbée",
        note: "De la hausse de la dépense depuis 1975 vient des <b>prestations sociales</b>.",
        chart: { kind: "donut", box: [215, 84], value: 76, tone: "blue" },
        sources: ["eurostat-gov-10a-main"],
        vintage: "2024",
        credit: "Eurostat gov_10a_main · 1975-2024",
      },
      {
        eyebrow: "Thème 12 · Justice",
        tone: "red",
        title: "Juges, face à l'Allemagne",
        value: { v: -50, d: 0 },
        unit: "%",
        note: "La France a <b>moitié moins de juges</b> et se situe sous la médiane européenne.",
        sources: ["eurostat-crim-just-job"],
        vintage: "2024",
        credit: "Eurostat crim_just_job · 2024",
      },
    ],
  },

  // ------------------------------------------------------- 7. arbitrage
  {
    cols: 2,
    rows: 1,
    every: 10000,
    axis: "y",
    faces: [
      {
        eyebrow: "Synthèse · composition de la dépense",
        tone: "blue",
        title: "Retraites, par personne de 65 ans et plus",
        note: "Sur ce poste, la France dépense <b>plus</b> que l’Allemagne.",
        chart: {
          kind: "bars",
          box: [510, 82],
          max: 34000,
          unit: " €",
          items: [
            { label: "France", value: 29272, decimals: 0, tone: "blue" },
            { label: "Allemagne", value: 27157, decimals: 0, tone: "grey" },
          ],
        },
        sources: ["eurostat-gov-10a-exp"],
        vintage: "2024",
        credit: "Eurostat gov_10a_exp · 2024",
      },
      {
        eyebrow: "Synthèse · composition de la dépense",
        tone: "red",
        title: "Dépense par élève, en pouvoir d'achat",
        note: "Sur celui-là, <b>21 % de moins</b> — et 10 % de l'écart reste masqué par les pensions.",
        chart: {
          kind: "bars",
          box: [510, 82],
          max: 12500,
          unit: "",
          items: [
            { label: "Allemagne", value: 10363, decimals: 0, tone: "grey" },
            { label: "France", value: 8151, decimals: 0, tone: "red" },
          ],
        },
        sources: ["ocde-ocde-regards-sur-l-education-2025-depe"],
        vintage: "2024",
        credit: "OCDE, Regards sur l'éducation 2025",
      },
    ],
  },

  // ----------------------------------------------------------- 8. rangs
  {
    cols: 2,
    rows: 1,
    every: 11500,
    axis: "x",
    faces: [
      {
        eyebrow: "Thème 01 · Dépenses publiques",
        tone: "blue",
        title: "La même dépense, deux classements",
        note: "Le classement dépend entièrement du dénominateur choisi.",
        chart: {
          kind: "ranks",
          rows: [
            {
              pos: "2",
              suffix: "e",
              label: "En % du PIB",
              detail: "57,3 %",
              slots: 10,
              at: 1,
              tone: "red",
            },
            {
              pos: "8",
              suffix: "e",
              label: "Par habitant",
              detail: "24 308 €",
              slots: 10,
              at: 7,
              tone: "blue",
            },
          ],
        },
        sources: ["eurostat-gov-10a-exp"],
        vintage: "2024",
        credit: "Eurostat gov_10a_exp · 2024",
      },
      {
        eyebrow: "Thème 13 · Santé",
        tone: "ink",
        title: "Reste à charge des ménages",
        note: "Mais les besoins de soins non satisfaits ont <b>triplé depuis 2019</b> — de 1,2 % à 4,1 %.",
        chart: {
          kind: "ranks",
          rows: [
            {
              pos: "1",
              suffix: "er",
              label: "Le plus faible des quatre pays comparés",
              detail: "en part comme en montant",
              slots: 4,
              at: 0,
              tone: "blue",
            },
          ],
        },
        sources: ["eurostat-ocde-health-statistics-2025-depense-de"],
        vintage: "2024",
        credit: "OCDE Health Statistics 2025",
      },
    ],
  },
];

/** La tuile du hero : sur aplat bleu, plus grande, trois faces. */
export const hero: Tile = {
  cols: 2,
  rows: 2,
  every: 11000,
  axis: "y",
  faces: [
    {
      eyebrow: "Thème 02 · Dette et déficit",
      tone: "red",
      title: "Deux marches d'escalier, jamais redescendues",
      value: { v: 115.612, d: 1 },
      unit: "% du PIB · 2025",
      delta: { v: 50.116, d: 1, u: "points depuis 2007", sign: true },
      deltaTone: "up",
      note: "Le point bas d'après-crise est <b>98,2 %</b> en 2019, contre 65,5 % en 2007. Depuis 2023, la dette remonte de <b>6,1 points en deux ans, sans choc macroéconomique</b>.",
      chart: {
        kind: "spark",
        box: [500, 128],
        tone: "red",
        values: [...DETTE],
      },
      sources: ["eurostat-gov-10dd-edpt1"],
      vintage: "2025",
      credit: "Eurostat gov_10dd_edpt1 · millésime 2025",
    },
    {
      eyebrow: "Thème 01 · Dépenses publiques et niveau de vie",
      tone: "blue",
      title: "Le PIB par habitant est passé sous la moyenne européenne",
      value: { v: 98.292, d: 1 },
      unit: "indice, UE-27 = 100 · 2024",
      delta: { v: -18.204, d: 1, u: "points depuis 1995" },
      deltaTone: "up",
      note: "L'écart entre les trois courbes, c'est <b>le taux d'emploi et la durée du travail</b>. La productivité horaire, elle, ne décroche qu'après 2019.",
      chart: {
        kind: "lines",
        box: [500, 150],
        x: [1995, 2000, 2005, 2008, 2010, 2015, 2019, 2022, 2024],
        yMin: 90,
        yMax: 140,
        decimals: 0,
        series: [
          {
            key: "h",
            label: "PIB par heure travaillée",
            tone: "ink",
            values: [
              133.996, 135, 131.901, 127.694, 126.197, 124.507, 125.299,
              113.908, 114.296,
            ],
          },
          {
            key: "e",
            label: "PIB par personne en emploi",
            tone: "blue2",
            values: [
              122.394, 121.796, 119.208, 116.408, 116.408, 114.701, 116.197,
              106.092, 107.394,
            ],
          },
          {
            key: "p",
            label: "PIB par habitant",
            tone: "red",
            values: [
              116.496, 117.606, 113.099, 111.004, 108.803, 106.197, 104.894,
              97.306, 98.292,
            ],
          },
        ],
      },
      sources: ["eurostat-nama-10-lp-ulc"],
      vintage: "2024",
      credit: "Eurostat nama_10_lp_ulc · millésime 2024",
    },
    {
      eyebrow: "Synthèse · proposition n° 3",
      tone: "blue",
      title: "Deuxième d'Europe en part du PIB, huitième par habitant",
      value: { v: 24308, d: 0 },
      unit: "€ par habitant · 57,3 % du PIB",
      note: "Le résultat le plus contre-intuitif du dossier. Corrigé du pouvoir d'achat, l'écart à l'UE-27 tombe de <b>+23,6 % à +13,5 %</b>.",
      chart: {
        kind: "bars",
        box: [500, 150],
        max: 34000,
        unit: " €",
        items: [
          { label: "Danemark", value: 31073, decimals: 0, tone: "grey" },
          { label: "Pays-Bas", value: 27705, decimals: 0, tone: "grey" },
          { label: "Allemagne", value: 25620, decimals: 0, tone: "grey" },
          { label: "France", value: 24308, decimals: 0, tone: "red" },
        ],
      },
      sources: ["eurostat-gov-10a-exp"],
      vintage: "2024",
      credit: "Eurostat gov_10a_exp · millésime 2024",
    },
  ],
};

/** Les quatre chiffres isolés du bandeau bas. */
export const minis: readonly Tile[] = [
  {
    cols: 1,
    rows: 1,
    every: 7000,
    axis: "y",
    faces: [
      {
        eyebrow: "Dette",
        tone: "red",
        title: "Sur la seule année 2020",
        value: { v: 16.7, d: 1, sign: true },
        unit: "points",
        note: "De dette publique en une année.",
        sources: ["eurostat-gov-10dd-edpt1"],
        vintage: "2025",
        credit: "Eurostat gov_10dd_edpt1",
      },
      {
        eyebrow: "Dette",
        tone: "red",
        title: "Entre 2023 et 2025",
        value: { v: 6.1, d: 1, sign: true },
        unit: "points",
        note: "<b>Sans choc macroéconomique.</b>",
        sources: ["eurostat-gov-10dd-edpt1"],
        vintage: "2025",
        credit: "Eurostat gov_10dd_edpt1",
      },
      {
        eyebrow: "Dette",
        tone: "red",
        title: "Le point bas d'après-crise",
        value: { v: 98.2, d: 1 },
        unit: "% en 2019",
        note: "Contre <b>65,5 % en 2007</b>.",
        sources: ["eurostat-gov-10dd-edpt1"],
        vintage: "2025",
        credit: "Eurostat gov_10dd_edpt1",
      },
    ],
  },
  {
    cols: 1,
    rows: 1,
    every: 7600,
    axis: "x",
    faces: [
      {
        eyebrow: "Santé",
        tone: "blue",
        title: "Besoins de soins non satisfaits",
        value: { v: 4.1, d: 1 },
        unit: "%",
        note: "Contre <b>1,2 % en 2019</b>.",
        sources: ["eurostat-eurostat-hlth-cd-apr-hlth-silc-08-hlth"],
        vintage: "2024",
        credit: "Eurostat hlth_silc_08",
      },
      {
        eyebrow: "Santé",
        tone: "blue",
        title: "Population en désert médical",
        value: { v: 30, d: 0 },
        unit: "%",
        note: "De la population vit dans une zone d'accès aux soins dégradé.",
        sources: ["eurostat-eurostat-hlth-cd-apr-hlth-silc-08-hlth"],
        vintage: "2024",
        credit: "Thème 13 du dossier",
      },
      {
        eyebrow: "Efficacité de l'État",
        tone: "blue",
        title: "Personnels administratifs de l'Éducation",
        value: { v: -21, d: 0 },
        unit: "% en quinze ans",
        note: "Entre <b>2007 et 2022</b>.",
        sources: ["ocde-ocde-regards-sur-l-education-2025-tabl"],
        vintage: "2024",
        credit: "Sénat, thème 14 du dossier",
      },
    ],
  },
  {
    cols: 1,
    rows: 1,
    every: 8300,
    axis: "y",
    faces: [
      {
        eyebrow: "Sécurité",
        tone: "ink",
        title: "Tentatives d'homicide, France",
        value: { v: 6.25, d: 2 },
        unit: "pour 100 000 hab.",
        note: "Contre <b>1,82 en 2008</b>.",
        sources: ["eurostat-eurostat-crim-off-cat-iccs0101-et-iccs0"],
        vintage: "2024",
        credit: "Eurostat crim_off_cat · 2024",
      },
      {
        eyebrow: "Sécurité",
        tone: "ink",
        title: "Le même taux, en Allemagne",
        value: { v: 2.06, d: 2 },
        unit: "pour 100 000 hab.",
        note: "<b>Stable sur dix-sept ans.</b>",
        sources: ["eurostat-eurostat-crim-off-cat-iccs0101-et-iccs0"],
        vintage: "2024",
        credit: "Eurostat crim_off_cat · 2024",
      },
      {
        eyebrow: "Sécurité",
        tone: "ink",
        title: "Le rapport entre les deux",
        value: { v: 3, d: 1 },
        unit: "fois",
        note: "<b>Égalité en 2008.</b>",
        sources: ["eurostat-eurostat-crim-off-cat-iccs0101-et-iccs0"],
        vintage: "2024",
        credit: "Eurostat crim_off_cat · 2024",
      },
    ],
  },
  {
    cols: 1,
    rows: 1,
    every: 6800,
    axis: "x",
    faces: [
      {
        eyebrow: "Efficacité de l'État",
        tone: "grey",
        title: "Administration générale, par habitant",
        value: { v: 623, d: 0 },
        unit: "€",
        note: "<b>759 € en Europe, 1 070 en Allemagne.</b>",
        sources: ["eurostat-gov-10a-exp"],
        vintage: "2024",
        credit: "Eurostat gov_10a_exp · 2024",
      },
      {
        eyebrow: "Thème 16 · Industrie",
        tone: "grey",
        title: "Implanter un site industriel",
        value: { v: 17, d: 0 },
        unit: "mois",
        note: "Dont <b>8 mois d'écart</b> entre délai théorique et délai réel.",
        sources: ["eurostat-gov-10a-exp"],
        vintage: "2024",
        credit: "Thème 16 du dossier",
      },
      {
        eyebrow: "Thème 14 · Éducation",
        tone: "grey",
        title: "Enseignants par groupe-classe",
        value: { v: 1.2, d: 2 },
        unit: "au primaire",
        note: "<b>1,43 en moyenne OCDE</b>, 1,80 au Japon.",
        sources: ["ocde-calcul-a-partir-de-ocde-regards-sur-l-e"],
        vintage: "2024",
        credit: "OCDE, Regards sur l'éducation 2025",
      },
    ],
  },
];
