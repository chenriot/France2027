// Les indicateurs de la page d'accueil.
//
// **Aucun chiffre n'est écrit dans ce fichier.** Chaque indicateur désigne une
// origine — un tableau ou une figure d'un chapitre — et `./origine.ts` va y
// chercher la valeur, ses sources et son millésime. Corriger un chiffre dans
// son chapitre le corrige ici, sans autre geste ; supprimer ou renommer son
// origine casse le build plutôt que d'afficher un chiffre périmé.
//
// Les seuls nombres qui restent en clair sont ceux **cités dans une phrase
// rédigée** — ce que la règle 2 de CLAUDE.md autorise explicitement — et les
// quatre valeurs du bloc `PROSE` en fin de fichier, dont le dossier n'a pas
// de forme tabulée. Elles y sont regroupées, chacune avec la fiche qui
// l'établit, pour qu'on sache exactement ce qui n'est pas dérivé.
import type { NumCell, Sources } from '@/lib/types'
import {
  annees,
  barre,
  cellule,
  courbe,
  courbeUnique,
  credit,
  dernier,
  ligne,
  millesimeDe,
  premier,
  sourcesDe,
  valeur,
  type Origine,
} from './origine'

/** Les cinq tons de la charte utilisables sur fond blanc. Pas de jaune : il
 *  ne passe pas le contraste hors aplat bleu. */
export type Tone = 'blue' | 'blue2' | 'red' | 'ink' | 'grey'

export interface LineSeries {
  readonly key: string
  readonly label: string
  readonly tone: Tone
  /** `null` = donnée absente. Le tracé s'interrompt, il ne s'invente pas. */
  readonly values: readonly (number | null)[]
}

export interface BarItem {
  readonly label: string
  readonly value: number
  readonly decimals: number
  readonly tone: Tone
}

export interface HeatRow {
  readonly label: string
  readonly values: readonly number[]
}

export interface RankRow {
  readonly pos: string
  readonly suffix: string
  readonly label: string
  readonly detail: string
  readonly slots: number
  readonly at: number
  readonly tone: Tone
}

export type Chart =
  | {
      readonly kind: 'spark'
      readonly box: readonly [number, number]
      readonly tone: Tone
      readonly values: readonly number[]
    }
  | {
      readonly kind: 'lines'
      readonly box: readonly [number, number]
      readonly x: readonly number[]
      readonly yMin: number
      readonly yMax: number
      readonly decimals: number
      readonly series: readonly LineSeries[]
    }
  | {
      readonly kind: 'bars'
      readonly box: readonly [number, number]
      readonly max: number
      readonly unit: string
      readonly items: readonly BarItem[]
    }
  | {
      readonly kind: 'gauge'
      readonly box: readonly [number, number]
      readonly value: number
      readonly max: number
      readonly ref: number
      readonly refLabel: string
      readonly decimals: number
      readonly unit: string
      readonly tone: Tone
    }
  | {
      readonly kind: 'donut'
      readonly box: readonly [number, number]
      readonly value: number
      readonly tone: Tone
    }
  | {
      readonly kind: 'heat'
      readonly columns: readonly string[]
      readonly rows: readonly HeatRow[]
      readonly decimals: number
      readonly unit: string
      /** Colonnes portant l'échelle de couleur ; les autres restent neutres. */
      readonly heatColumns: readonly number[]
      readonly diverging: boolean
      readonly ramp: readonly [string, string]
    }
  | { readonly kind: 'ranks'; readonly rows: readonly RankRow[] }

/** Un indicateur : une face de tuile. */
export interface Kpi {
  readonly eyebrow: string
  readonly tone: Tone
  readonly title: string
  readonly value?: NumCell
  readonly unit?: string
  readonly delta?: NumCell
  readonly deltaTone?: 'up' | 'down'
  /** Phrase rédigée, en HTML restreint : `<b>` seulement. */
  readonly note?: string
  readonly chart?: Chart
  readonly sources: Sources
  readonly vintage: string
  /** Ligne de source affichée, reconstituée depuis le registre. */
  readonly credit: string
}

export interface Tile {
  readonly cols: 1 | 2
  readonly rows: 1 | 2
  /** Période de rotation, en millisecondes. Toutes différentes : la mosaïque
   *  ne doit jamais basculer d'un bloc. */
  readonly every: number
  readonly axis: 'x' | 'y'
  readonly faces: readonly Kpi[]
}

// ------------------------------------------------------------------ origines

const DETTE: Origine = { chapitre: 'dette-deficit', cle: 'dette-publique-francaise-1995-2025' }
const GES: Origine = {
  chapitre: 'ecologie-climat',
  cle: 'emissions-territoriales-de-gaz-a-effet-de-serre-france',
}
const PISA: Origine = { chapitre: 'education', cle: 'pisa-mathematiques-2003-2022' }
const LOGEMENT: Origine = { chapitre: 'logement', cle: 'indice-prix-revenu-base-100-en-2015' }
const PIB: Origine = { chapitre: 'synthese', cle: 'france-trois-mesures-du-pib-indice-ue-27-100' }
const CRIME: Origine = {
  chapitre: 'securite-justice',
  cle: 'homicides-et-tentatives-d-homicide-france-et-allemagne',
}
const FONCTIONS: Origine = {
  chapitre: 'synthese',
  cle: 'depense-publique-par-fonction-en-euros-par-habitant',
}
const COFOG: Origine = { chapitre: 'depenses-publiques', cle: 'fonction-cofog-2024' }
const EMPLOI_AGE: Origine = { chapitre: 'retraites-travail', cle: 'taux-d-emploi-2024' }
const PENSIONS: Origine = { chapitre: 'retraites-travail', cle: '2024' }
const ELEVE: Origine = { chapitre: 'education', cle: 'item' }
const ENCADREMENT: Origine = {
  chapitre: 'education',
  cle: 'eleves-par-enseignant-public-et-prive',
}
const PRESTATIONS: Origine = { chapitre: 'dette-deficit', cle: 'du-pib' }
const SOINS: Origine = { chapitre: 'sante', cle: 'besoins-de-soins-non-satisfaits' }

/** Sources, millésime et ligne de crédit d'un indicateur, en une fois. */
const de = (o: Origine) => ({
  sources: sourcesDe(o),
  vintage: millesimeDe(o),
  credit: credit(o),
})

// --------------------------------------------------------------- séries lues

const detteY = courbeUnique(DETTE)
const gesY = courbeUnique(GES)
const pisaFr = courbe(PISA, 'France')
const crimeTf = courbe(CRIME, 'Tentatives, France')
const crimeTa = courbe(CRIME, 'Tentatives, Allemagne')

/** Le logement n'est pas une figure mais un tableau à trois millésimes. */
const LOGEMENT_ANNEES = ['2000', '2010', '2024'] as const
const logementFr = ligne(LOGEMENT, 'France', LOGEMENT_ANNEES)

const PAYS_COFOG = ['P.-Bas', 'Allem.', 'France', 'UE-27'] as const
const TRANCHES = ['15-24', '25-54', '55-64', '60-64'] as const

/**
 * Les quatre valeurs que le dossier n'établit qu'en prose : elles n'ont ni
 * tableau ni figure d'où les tirer. Chacune porte la fiche qui la démontre.
 */
const PROSE = {
  /** Synthèse, proposition n° 1 : part des prestations dans la hausse depuis 1975. */
  partPrestations: 76,
  /** Thème 01 : 2ᵉ d'Europe en % du PIB, 8ᵉ par habitant. */
  rangPibPct: 2,
  rangParHabitant: 8,
  /** Thème 16 : délai d'implantation d'un site industriel, en mois. */
  delaiIndustriel: 17,
} as const

// ------------------------------------------------------------- indicateurs

export const tiles: readonly Tile[] = [
  // ------------------------------------------------------ 1. carte de chaleur
  {
    cols: 2,
    rows: 2,
    every: 13000,
    axis: 'x',
    faces: [
      {
        eyebrow: 'Synthèse · dépense comparée',
        tone: 'blue',
        title: 'Dépense publique par fonction, en euros par habitant',
        note: "L'Allemagne dépense plus que la France sur <b>huit fonctions sur dix</b>. Les exceptions sont le logement et la culture.",
        chart: {
          kind: 'heat',
          columns: ['UE-27', 'Allemagne', 'France'],
          decimals: 0,
          unit: ' €',
          heatColumns: [0, 1, 2],
          diverging: false,
          ramp: ['faible', 'élevée'],
          rows: (
            [
              'Protection sociale',
              'Santé',
              'Services généraux',
              'Affaires économiques',
              'Enseignement',
              'Défense',
              'Ordre et sécurité',
              'Loisirs, culture',
              'Logement',
              'Environnement',
            ] as const
          ).map((fonction) => ({
            label: fonction,
            values: ['UE-27', 'Allemagne', 'France'].map((pays) => barre(FONCTIONS, pays, fonction)),
          })),
        },
        ...de(FONCTIONS),
      },
      {
        eyebrow: 'Thème 03 · Retraites et durée de travail',
        tone: 'red',
        title: "Taux d'emploi par tranche d'âge, France et Allemagne",
        note: "Sur le cœur de carrière, les deux pays sont à égalité. L'écart se fait aux deux bouts, et il est le plus large sur les 60-64 ans.",
        chart: {
          kind: 'heat',
          columns: ['France', 'Allemagne', 'Écart'],
          decimals: 1,
          unit: ' %',
          heatColumns: [2],
          diverging: true,
          ramp: ['France en retrait', 'France en avance'],
          rows: TRANCHES.map((tranche) => {
            const fr = valeur(EMPLOI_AGE, 'France', tranche)
            const de_ = valeur(EMPLOI_AGE, 'Allemagne', tranche)
            return { label: `${tranche} ans`, values: [fr, de_, fr - de_] }
          }),
        },
        ...de(EMPLOI_AGE),
      },
    ],
  },

  // ---------------------------------------------------- 2. séries comparées
  {
    cols: 2,
    rows: 2,
    every: 12000,
    axis: 'y',
    faces: [
      {
        eyebrow: 'Thème 12 · Sécurité et justice',
        tone: 'red',
        title: "Homicides et tentatives d'homicide, France et Allemagne",
        note: "En 2008, la France était <b>en dessous</b> de l'Allemagne pour les tentatives. Elle est aujourd'hui à trois fois le taux allemand, lequel n'a pas bougé.",
        chart: {
          kind: 'lines',
          box: [510, 300],
          x: annees(CRIME),
          yMin: 0,
          yMax: 7,
          decimals: 2,
          series: [
            { key: 'tf', label: 'Tentatives, France', tone: 'red', values: crimeTf },
            { key: 'ta', label: 'Tentatives, Allemagne', tone: 'blue', values: crimeTa },
            {
              key: 'hf',
              label: 'Homicides, France',
              tone: 'ink',
              values: courbe(CRIME, 'Homicides, France'),
            },
            {
              key: 'ha',
              label: 'Homicides, Allemagne',
              tone: 'grey',
              values: courbe(CRIME, 'Homicides, Allemagne'),
            },
          ],
        },
        ...de(CRIME),
      },
      {
        eyebrow: 'Thème 14 · Éducation',
        tone: 'blue',
        title: 'PISA mathématiques, cinq pays',
        note: "La France perd près d'une année de scolarité en dix-neuf ans. Le décrochage du dernier cycle est le plus brutal de la série.",
        chart: {
          kind: 'lines',
          box: [510, 300],
          x: annees(PISA),
          yMin: 460,
          yMax: 590,
          decimals: 0,
          series: [
            { key: 'sg', label: 'Singapour', tone: 'ink', values: courbe(PISA, 'Singapour') },
            { key: 'jp', label: 'Japon', tone: 'grey', values: courbe(PISA, 'Japon') },
            { key: 'ee', label: 'Estonie', tone: 'blue2', values: courbe(PISA, 'Estonie') },
            { key: 'de', label: 'Allemagne', tone: 'red', values: courbe(PISA, 'Allemagne') },
            { key: 'fr', label: 'France', tone: 'blue', values: pisaFr },
          ],
        },
        ...de(PISA),
      },
    ],
  },

  // ------------------------------------------- 3. valeur, écart et courbe
  {
    cols: 1,
    rows: 1,
    every: 8000,
    axis: 'y',
    faces: [
      {
        eyebrow: 'Thème 10 · Écologie',
        tone: 'blue',
        title: 'Gaz à effet de serre',
        value: { v: dernier(gesY), d: 1 },
        unit: 'MtCO₂e',
        delta: { v: (dernier(gesY) / premier(gesY) - 1) * 100, d: 1, u: '%' },
        deltaTone: 'down',
        chart: { kind: 'spark', box: [215, 92], tone: 'blue', values: gesY },
        ...de(GES),
      },
      {
        eyebrow: 'Thème 14 · Éducation',
        tone: 'red',
        title: 'PISA mathématiques, France',
        value: { v: dernier(pisaFr), d: 1 },
        unit: 'score',
        delta: { v: dernier(pisaFr) - premier(pisaFr), d: 1, u: 'pts' },
        deltaTone: 'up',
        chart: {
          kind: 'spark',
          box: [215, 92],
          tone: 'red',
          values: pisaFr.filter((v): v is number => v !== null),
        },
        ...de(PISA),
      },
      {
        eyebrow: 'Thème 15 · Logement',
        tone: 'ink',
        title: 'Prix des logements sur revenu',
        value: { v: logementFr[2], d: 1 },
        unit: 'indice 2015',
        delta: { v: (logementFr[2] / logementFr[1] - 1) * 100, d: 1, u: '% depuis 2010' },
        deltaTone: 'down',
        chart: { kind: 'spark', box: [215, 92], tone: 'ink', values: logementFr },
        ...de(LOGEMENT),
      },
    ],
  },

  // ------------------------------------------------------------- 4. jauge
  {
    cols: 1,
    rows: 1,
    every: 9500,
    axis: 'x',
    faces: [
      {
        eyebrow: 'Synthèse · proposition n° 1',
        tone: 'blue',
        title: 'Prestations sociales, en % du PIB',
        note: 'Le poste qui a absorbé toute la marge budgétaire depuis 1975.',
        chart: {
          kind: 'gauge',
          box: [215, 86],
          value: valeur(PRESTATIONS, 'Prestations sociales', '2024'),
          max: 30,
          ref: valeur(PRESTATIONS, 'Prestations sociales', '1975'),
          refLabel: '1975',
          decimals: 1,
          unit: ' %',
          tone: 'blue',
        },
        ...de(PRESTATIONS),
      },
      {
        eyebrow: 'Thème 03 · Emploi',
        tone: 'red',
        title: "Taux d'emploi des 15-64 ans",
        note: 'Le pays le mieux placé du panel est les Pays-Bas, repère sur la jauge.',
        chart: {
          kind: 'gauge',
          box: [215, 86],
          value: valeur(EMPLOI_AGE, 'France', '15-64'),
          max: 100,
          ref: valeur(EMPLOI_AGE, 'Pays-Bas', '15-64'),
          refLabel: 'P.-Bas',
          decimals: 1,
          unit: ' %',
          tone: 'red',
        },
        ...de(EMPLOI_AGE),
      },
    ],
  },

  // ------------------------------------------------------------ 5. barres
  {
    cols: 1,
    rows: 1,
    every: 10500,
    axis: 'x',
    faces: [
      {
        eyebrow: 'Thème 03 · Retraites',
        tone: 'red',
        title: 'Emploi des 60-64 ans',
        note: "C'est l'écart le plus large du dossier entre la France et l'Allemagne.",
        chart: {
          kind: 'bars',
          box: [215, 78],
          max: 80,
          unit: ' %',
          items: [
            {
              label: 'Allemagne',
              value: valeur(EMPLOI_AGE, 'Allemagne', '60-64'),
              decimals: 1,
              tone: 'blue',
            },
            {
              label: 'France',
              value: valeur(EMPLOI_AGE, 'France', '60-64'),
              decimals: 1,
              tone: 'red',
            },
          ],
        },
        ...de(EMPLOI_AGE),
      },
      {
        eyebrow: 'Thème 14 · Éducation',
        tone: 'ink',
        title: 'Élèves par enseignant, primaire',
        note: 'Une mesure physique, insensible aux niveaux de prix et aux conventions comptables.',
        chart: {
          kind: 'bars',
          box: [215, 78],
          max: 22,
          unit: '',
          items: [
            {
              label: 'France',
              value: valeur(ENCADREMENT, 'France', 'Primaire'),
              decimals: 1,
              tone: 'red',
            },
            {
              label: 'Allemagne',
              value: valeur(ENCADREMENT, 'Allemagne', 'Primaire'),
              decimals: 1,
              tone: 'ink',
            },
          ],
        },
        ...de(ENCADREMENT),
      },
    ],
  },

  // -------------------------------------------------------------- 6. part
  {
    cols: 1,
    rows: 1,
    every: 9000,
    axis: 'y',
    faces: [
      {
        eyebrow: 'Synthèse · proposition n° 1',
        tone: 'blue',
        title: 'La marge budgétaire, absorbée',
        note: 'De la hausse de la dépense publique depuis 1975 vient des <b>prestations sociales</b>. Aucun autre poste n’en explique plus de 16 %.',
        chart: { kind: 'donut', box: [215, 84], value: PROSE.partPrestations, tone: 'blue' },
        ...de(PRESTATIONS),
      },
      {
        eyebrow: 'Thème 01 · Dépenses publiques',
        tone: 'red',
        title: 'Administration générale, par habitant',
        value: cellule(COFOG, 'Administration générale (01.1, hors dette)', 'France €/hab'),
        unit: '€',
        note: "La moins chère du panel après l'Espagne, et nettement sous la moyenne européenne.",
        chart: {
          kind: 'bars',
          box: [215, 78],
          max: 1400,
          unit: ' €',
          items: [
            {
              label: 'Allemagne',
              value: valeur(COFOG, 'Administration générale (01.1, hors dette)', 'Allem.'),
              decimals: 0,
              tone: 'grey',
            },
            {
              label: 'France',
              value: valeur(COFOG, 'Administration générale (01.1, hors dette)', 'France €/hab'),
              decimals: 0,
              tone: 'red',
            },
          ],
        },
        ...de(COFOG),
      },
    ],
  },

  // ------------------------------------------------------- 7. arbitrage
  {
    cols: 2,
    rows: 1,
    every: 10000,
    axis: 'y',
    faces: [
      {
        eyebrow: 'Synthèse · composition de la dépense',
        tone: 'blue',
        title: 'Retraites, par personne de 65 ans et plus',
        note: 'Sur ce poste, la France dépense <b>plus</b> que l’Allemagne.',
        chart: {
          kind: 'bars',
          box: [510, 82],
          max: 34000,
          unit: ' €',
          items: [
            {
              label: 'France',
              value: valeur(PENSIONS, 'France', '€ / personne de 65 ans et +'),
              decimals: 0,
              tone: 'blue',
            },
            {
              label: 'Allemagne',
              value: valeur(PENSIONS, 'Allemagne', '€ / personne de 65 ans et +'),
              decimals: 0,
              tone: 'grey',
            },
          ],
        },
        ...de(PENSIONS),
      },
      {
        eyebrow: 'Synthèse · composition de la dépense',
        tone: 'red',
        title: "Dépense par élève, en pouvoir d'achat",
        note: "Sur celui-là, un cinquième de moins — et une part de l'écart reste masquée par les pensions.",
        chart: {
          kind: 'bars',
          box: [510, 82],
          max: 12500,
          unit: '',
          items: [
            {
              label: 'Allemagne',
              value: valeur(ELEVE, 'Allemagne', 'Dépense par élève (SPA, 2022)'),
              decimals: 0,
              tone: 'grey',
            },
            {
              label: 'France',
              value: valeur(ELEVE, 'France', 'Dépense par élève (SPA, 2022)'),
              decimals: 0,
              tone: 'red',
            },
          ],
        },
        ...de(ELEVE),
      },
    ],
  },

  // ----------------------------------------------------------- 8. rangs
  {
    cols: 2,
    rows: 1,
    every: 11500,
    axis: 'x',
    faces: [
      {
        eyebrow: 'Thème 01 · Dépenses publiques',
        tone: 'blue',
        title: 'La même dépense, deux classements',
        note: 'Le classement dépend entièrement du dénominateur choisi.',
        chart: {
          kind: 'ranks',
          rows: [
            {
              pos: String(PROSE.rangPibPct),
              suffix: 'e',
              label: 'En % du PIB',
              detail: `${valeur(COFOG, 'Total', 'FR, % PIB').toLocaleString('fr-FR')} %`,
              slots: 10,
              at: PROSE.rangPibPct - 1,
              tone: 'red',
            },
            {
              pos: String(PROSE.rangParHabitant),
              suffix: 'e',
              label: 'Par habitant',
              detail: `${valeur(COFOG, 'Total', 'France €/hab').toLocaleString('fr-FR')} €`,
              slots: 10,
              at: PROSE.rangParHabitant - 1,
              tone: 'blue',
            },
          ],
        },
        ...de(COFOG),
      },
      {
        eyebrow: 'Thème 01 · Dépenses publiques',
        tone: 'ink',
        title: 'La dépense totale, par habitant',
        note: 'En euros par habitant, la France passe derrière les Pays-Bas et l’Allemagne.',
        chart: {
          kind: 'bars',
          box: [510, 96],
          max: 32000,
          unit: ' €',
          items: PAYS_COFOG.map((pays) => ({
            label: pays,
            value: valeur(COFOG, 'Total', pays === 'France' ? 'France €/hab' : pays),
            decimals: 0,
            tone: pays === 'France' ? ('red' as const) : ('grey' as const),
          })),
        },
        ...de(COFOG),
      },
    ],
  },
]

/** La tuile du hero : sur aplat bleu, plus grande, trois faces. */
export const hero: Tile = {
  cols: 2,
  rows: 2,
  every: 11000,
  axis: 'y',
  faces: [
    {
      eyebrow: 'Thème 02 · Dette et déficit',
      tone: 'red',
      title: "Deux marches d'escalier, jamais redescendues",
      value: { v: dernier(detteY), d: 1 },
      unit: 'du PIB',
      delta: {
        v: dernier(detteY) - detteY[annees(DETTE).indexOf(2007)],
        d: 1,
        u: 'points depuis 2007',
        sign: true,
      },
      deltaTone: 'up',
      note: "Le point bas d'après-crise est celui de 2019, déjà cinquante points au-dessus de 2007. Depuis 2023, la dette remonte <b>sans choc macroéconomique</b>.",
      chart: { kind: 'spark', box: [500, 128], tone: 'red', values: detteY },
      ...de(DETTE),
    },
    {
      eyebrow: 'Thème 01 · Dépenses publiques et niveau de vie',
      tone: 'blue',
      title: 'Le PIB par habitant est passé sous la moyenne européenne',
      value: { v: dernier(courbe(PIB, 'PIB par habitant')), d: 1 },
      unit: 'indice, UE-27 = 100',
      delta: {
        v:
          dernier(courbe(PIB, 'PIB par habitant')) -
          premier(courbe(PIB, 'PIB par habitant')),
        d: 1,
        u: 'points depuis 1995',
      },
      deltaTone: 'up',
      note: "L'écart entre les trois courbes, c'est <b>le taux d'emploi et la durée du travail</b>. La productivité horaire, elle, ne décroche qu'après 2019.",
      chart: {
        kind: 'lines',
        box: [500, 150],
        x: annees(PIB),
        yMin: 90,
        yMax: 140,
        decimals: 0,
        series: [
          {
            key: 'h',
            label: 'PIB par heure travaillée',
            tone: 'ink',
            values: courbe(PIB, 'PIB par heure travaillée'),
          },
          {
            key: 'e',
            label: 'PIB par personne en emploi',
            tone: 'blue2',
            values: courbe(PIB, 'PIB par personne en emploi'),
          },
          {
            key: 'p',
            label: 'PIB par habitant',
            tone: 'red',
            values: courbe(PIB, 'PIB par habitant'),
          },
        ],
      },
      ...de(PIB),
    },
    {
      eyebrow: 'Synthèse · proposition n° 3',
      tone: 'blue',
      title: "Deuxième d'Europe en part du PIB, huitième par habitant",
      value: cellule(COFOG, 'Total', 'France €/hab'),
      unit: 'par habitant',
      note: "Le résultat le plus contre-intuitif du dossier : première du panel en part du PIB, cinquième sur sept en euros par habitant.",
      chart: {
        kind: 'bars',
        box: [500, 150],
        max: 32000,
        unit: ' €',
        items: PAYS_COFOG.map((pays) => ({
          label: pays,
          value: valeur(COFOG, 'Total', pays === 'France' ? 'France €/hab' : pays),
          decimals: 0,
          tone: pays === 'France' ? ('red' as const) : ('grey' as const),
        })),
      },
      ...de(COFOG),
    },
  ],
}

/** Les quatre chiffres isolés du bandeau bas. */
export const minis: readonly Tile[] = [
  {
    cols: 1,
    rows: 1,
    every: 7000,
    axis: 'y',
    faces: [
      {
        eyebrow: 'Dette',
        tone: 'red',
        title: 'Sur la seule année 2020',
        value: {
          v: detteY[annees(DETTE).indexOf(2020)] - detteY[annees(DETTE).indexOf(2019)],
          d: 1,
          sign: true,
        },
        unit: 'points',
        note: 'De dette publique en une année.',
        ...de(DETTE),
      },
      {
        eyebrow: 'Dette',
        tone: 'red',
        title: 'Entre 2023 et 2025',
        value: {
          v: dernier(detteY) - detteY[annees(DETTE).indexOf(2023)],
          d: 1,
          sign: true,
        },
        unit: 'points',
        note: '<b>Sans choc macroéconomique.</b>',
        ...de(DETTE),
      },
      {
        eyebrow: 'Dette',
        tone: 'red',
        title: "Le point bas d'après-crise",
        value: { v: detteY[annees(DETTE).indexOf(2019)], d: 1 },
        unit: '% en 2019',
        note: 'Contre moins de deux tiers du PIB en 2007.',
        ...de(DETTE),
      },
    ],
  },
  {
    cols: 1,
    rows: 1,
    every: 7600,
    axis: 'x',
    faces: [
      {
        eyebrow: 'Thème 13 · Santé',
        tone: 'blue',
        title: 'Besoins de soins non satisfaits',
        value: cellule(SOINS, 'France', '2024'),
        unit: '%',
        note: 'Ils ont triplé depuis 2019.',
        ...de(SOINS),
      },
      {
        eyebrow: 'Thème 13 · Santé',
        tone: 'blue',
        title: 'Le même taux, avant la rupture',
        value: cellule(SOINS, 'France', '2019'),
        unit: '% en 2019',
        note: 'La dégradation est postérieure à 2019, et elle se poursuit.',
        ...de(SOINS),
      },
      {
        eyebrow: 'Thème 14 · Éducation',
        tone: 'blue',
        title: 'Élèves par enseignant, préprimaire',
        value: cellule(ENCADREMENT, 'France', 'Préprimaire'),
        unit: 'en France',
        note: "Contre <b>7,1 en Allemagne</b> : c'est le niveau où l'écart est le plus grand.",
        ...de(ENCADREMENT),
      },
    ],
  },
  {
    cols: 1,
    rows: 1,
    every: 8300,
    axis: 'y',
    faces: [
      {
        eyebrow: 'Thème 12 · Sécurité',
        tone: 'ink',
        title: "Tentatives d'homicide, France",
        value: { v: dernier(crimeTf), d: 2 },
        unit: 'pour 100 000 hab.',
        note: 'Contre moins de deux en 2008.',
        ...de(CRIME),
      },
      {
        eyebrow: 'Thème 12 · Sécurité',
        tone: 'ink',
        title: 'Le même taux, en Allemagne',
        value: { v: dernier(crimeTa), d: 2 },
        unit: 'pour 100 000 hab.',
        note: '<b>Stable sur dix-sept ans.</b>',
        ...de(CRIME),
      },
      {
        eyebrow: 'Thème 12 · Sécurité',
        tone: 'ink',
        title: 'Le rapport entre les deux',
        value: { v: dernier(crimeTf) / dernier(crimeTa), d: 1 },
        unit: 'fois',
        note: '<b>Égalité en 2008.</b>',
        ...de(CRIME),
      },
    ],
  },
  {
    cols: 1,
    rows: 1,
    every: 6800,
    axis: 'x',
    faces: [
      {
        eyebrow: "Thème 17 · Efficacité de l'État",
        tone: 'grey',
        title: 'Administration générale, par habitant',
        value: cellule(COFOG, 'Administration générale (01.1, hors dette)', 'France €/hab'),
        unit: '€',
        note: "Contre <b>1 070 € en Allemagne</b> et 1 268 aux Pays-Bas.",
        ...de(COFOG),
      },
      {
        eyebrow: 'Thème 02 · Charge de la dette',
        tone: 'grey',
        title: 'Les intérêts de la dette',
        value: cellule(COFOG, 'Charge de la dette (COFOG 01.7)', 'France €/hab'),
        unit: '€ par habitant',
        note: 'Un poste qui remonte depuis 2022, et le seul qui ne rend aucun service.',
        ...de(COFOG),
      },
      {
        eyebrow: 'Thème 16 · Industrie',
        tone: 'grey',
        title: 'Implanter un site industriel',
        value: { v: PROSE.delaiIndustriel, d: 0 },
        unit: 'mois',
        note: "Dont <b>huit mois d'écart</b> entre délai théorique et délai réel.",
        ...de(COFOG),
      },
    ],
  },
]
