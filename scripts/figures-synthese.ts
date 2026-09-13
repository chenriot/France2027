/**
 * Les graphiques du chapitre « Synthèse », écrits en valeurs.
 *
 *   npx tsx scripts/figures-synthese.ts
 *
 * Le document d'origine est la surface d'écriture du dossier (CLAUDE.md), et
 * ses figures y sont du SVG. Écrire ce SVG à la main reviendrait à saisir des
 * pixels — ce que la règle 3 interdit. Ce script fait l'inverse : les figures
 * sont décrites **en valeurs**, `src/lib/chart.ts` les trace, et le SVG obtenu
 * est injecté dans `Temp/chiffres2027 (3).html` à la place du bloc portant le
 * même titre.
 *
 * La boucle se referme d'elle-même : `npm run extract` relit ensuite ce SVG,
 * en redéduit les valeurs et vérifie que la reprojection retombe au pixel près.
 * Le même `buildChart` écrit et prouve, si bien qu'une figure générée ici est
 * « régénérée et prouvée identique » par construction.
 *
 * Pour modifier une valeur : l'éditer ici, relancer ce script, puis
 * `npm run extract` et `npm run verify`.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { buildChart } from '../src/lib/chart'
import type { SvgNode } from '../src/lib/chart'
import type { Series } from '../src/lib/types'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const SOURCE_HTML = join(ROOT, 'Temp', 'chiffres2027 (3).html')

/** Figure décrite en valeurs, plus le texte qui l'accompagne dans le document. */
interface FigureSpec {
  /** Titre affiché : sert aussi d'ancre pour retrouver le bloc à remplacer. */
  readonly title: string
  readonly subtitle: string
  readonly caption: string
  /** Le `p.src` du bloc : c'est lui que l'extracteur inscrit au registre. */
  readonly src: string
  readonly figure: Omit<Series, 'sources' | 'vintage' | 'title' | 'subtitle' | 'caption'>
}

// --------------------------------------------------------------- gabarits

/** Repère d'une courbe : celui des séries longues du dossier. */
const lineLayout = (axisLabel: string) =>
  ({
    kind: 'line',
    tickLabelX: 43,
    tickLabelDy: 4,
    axisLabel: { x: 43, y: 14, text: axisLabel, anchor: 'end' },
    axisLineY: 306,
    dotR: 4,
    endLabelDx: 8,
    endLabelDy: 4,
    xLabelY: 324,
  }) as const

/** Repère de barres horizontales, `n` séries par catégorie. */
const barLayout = (bottom: number, catLabelX: number, classes: readonly string[], pitch: number) =>
  ({
    kind: 'bar',
    gridTop: 16,
    gridBottom: bottom,
    tickLabelY: bottom + 22,
    catLabelX,
    catLabelDy: classes.length > 1 ? 10 + (classes.length - 1) * 7.5 : 10,
    barHeight: 12,
    barPitch: 15,
    groupPitch: pitch,
    firstBarY: 22,
    valueLabelDx: 7,
    valueLabelDy: 10,
    valueClasses: classes,
    rx: 3,
  }) as const

/** Les vingt et une années de la série longue du chapitre. */
const YEARS = Array.from({ length: 21 }, (_, i) => 2005 + i)

const frame = (h: number, left: number, right: number, bottom: number) =>
  ({ width: 720, height: h, left, right, top: 16, bottom }) as const

export const FIGURES: readonly FigureSpec[] = [
  // ----------------------------------------------------------------- 01
  {
    title: 'Richesse produite par habitant, 2005-2025',
    src:
      'OCDE, <i>Perspectives économiques</i> n° 119 (juin 2026), série <span class="num">GDPVD_CAP</span>, dollars à parité de pouvoir d’achat de 2021. Extraction par API SDMX le 13 septembre 2026.',
    subtitle:
      'En dollars à parité de pouvoir d’achat. <b>L’axe démarre à 40 000 $</b> : à 0, les cinq courbes se ' +
      'confondraient et l’écart serait invisible.',
    caption:
      '<b>La France ne s’appauvrit pas : elle avance moins vite.</b> En vingt ans elle gagne 14 %, l’Allemagne 21 %, ' +
      'les Pays-Bas 22 %, les États-Unis 29 %. <b>L’écart avec l’Allemagne a plus que doublé</b> — 3 525 $ par ' +
      'habitant en 2005, 7 691 $ en 2025 — et la France, qui produisait 11,3 % de plus que la moyenne des pays de ' +
      'l’OCDE, n’en produit plus que 1,4 % de plus — la moyenne, absente du graphique, est passée de 43 474 $ à 54 450 $.',
    figure: {
      svg: { viewBox: '0 0 720 340', titleId: 'csyn1-t', title: 'dollars par habitant, parité de pouvoir d’achat' },
      layout: lineLayout('$ par habitant'),
      type: 'line',
      x: YEARS,
      xAxis: { min: 2005, max: 2025, ticks: [2005, 2010, 2015, 2020, 2025] },
      y: { min: 40000, max: 80000, ticks: [40000, 50000, 60000, 70000, 80000], label: '$ par habitant' },
      series: [
        { key: 's2', color: 's2', label: 'États-Unis', values: [59501, 60579, 61204, 60700, 58617, 59692, 60149, 61051, 61877, 62942, 64291, 64957, 66096, 67656, 69043, 67336, 71336, 72732, 74259, 75658, 76834] },
        { key: 's3', color: 's3', label: 'Pays-Bas', values: [58352, 60391, 62592, 63684, 61034, 61491, 62292, 61452, 61281, 62045, 63066, 64250, 65648, 66733, 67820, 64861, 68528, 71280, 70165, 70452, 71271] },
        { key: 's4', color: 's4', label: 'Allemagne', values: [51901, 54104, 55848, 56357, 53443, 55722, 57863, 58160, 58363, 59451, 59858, 60748, 62501, 63128, 63730, 60928, 63384, 64161, 63149, 62678, 62888] },
        { key: 's1', color: 's1', label: 'France', values: [48376, 49457, 50382, 50241, 48627, 49286, 50272, 50149, 50367, 50612, 50890, 51071, 52022, 52610, 53504, 49264, 52373, 53634, 54363, 54820, 55197] },
        { key: 's5', color: 's5', label: 'Royaume-Uni', values: [48291, 49013, 50044, 49611, 47003, 47683, 47690, 48095, 48596, 49759, 50458, 51164, 52424, 52978, 53369, 47926, 51836, 53975, 53419, 53428, 53832] },
      ],
      frame: { width: 720, height: 340, left: 52, right: 602, top: 22, bottom: 306 },
    },
  },
  // ----------------------------------------------------------------- 02
  {
    title: 'Ce que produit une heure de travail, 2024',
    src:
      'OCDE, base <i>Productivité</i>, série <span class="num">GDPHRS</span>, dollars à parité de pouvoir d’achat de 2020, données 2024. Extraction par API SDMX le 13 septembre 2026.',
    subtitle: 'PIB par heure travaillée, en dollars à parité de pouvoir d’achat.',
    caption:
      '<b>Quatre pays dans un mouchoir de poche.</b> L’heure travaillée française vaut 81,6 $ contre 83,0 en ' +
      'Allemagne et 84,1 aux États-Unis : <b>moins de 3 % d’écart avec le mieux placé</b>, et dix points de mieux ' +
      'que le Royaume-Uni. Le travail français n’est ni lent ni mal outillé — l’écart de richesse ne vient pas de là.',
    figure: {
      svg: { viewBox: '0 0 720 194', titleId: 'csyn2-t', title: 'dollars par heure travaillée, 2024' },
      layout: barLayout(146, 182, ['lbl mut'], 30),
      type: 'bar',
      x: ['États-Unis', 'Allemagne', 'Pays-Bas', 'France', 'Royaume-Uni'],
      y: { min: 0, max: 90, ticks: [0, 30, 60, 90] },
      series: [{ key: 'ph', color: 's1', values: [84.1, 83.0, 82.1, 81.6, 74.0], decimals: 1 }],
      frame: frame(194, 196, 586, 146),
    },
  },
  // ----------------------------------------------------------------- 03
  {
    title: 'Heures travaillées par habitant de 15 à 74 ans, 2024',
    src:
      'OCDE, base <i>Productivité</i>, série <span class="num">HRSPOP</span>, heures travaillées rapportées à la population de 15 à 74 ans, données 2024.',
    subtitle: 'Total des heures travaillées dans l’année, rapporté à la population en âge de travailler.',
    caption:
      '<b>C’est ici que se joue l’écart.</b> 927 heures par habitant en âge de travailler contre 983 en Allemagne — ' +
      '<b>6 % de moins</b> — et un quart de moins qu’aux États-Unis. Rapprochées de la figure précédente, les deux ' +
      'mesures disent la même chose : <b>on ne travaille pas assez, au sens où trop peu de personnes travaillent</b>.',
    figure: {
      svg: { viewBox: '0 0 720 194', titleId: 'csyn3-t', title: 'heures par habitant de 15 à 74 ans, 2024' },
      layout: barLayout(146, 182, ['lbl s1t'], 30),
      type: 'bar',
      x: ['États-Unis', 'Pays-Bas', 'Royaume-Uni', 'Allemagne', 'France'],
      y: { min: 0, max: 1200, ticks: [0, 400, 800, 1200] },
      series: [{ key: 'h74', color: 's1', values: [1145, 1097, 1002, 983, 927] }],
      frame: frame(194, 196, 586, 146),
    },
  },
  // ----------------------------------------------------------------- 04
  {
    title: 'Part des personnes en emploi, par tranche d’âge, 2024',
    src:
      'OCDE, base <i>Emploi</i>, taux d’emploi par tranche d’âge, données 2024.',
    subtitle: 'France et Allemagne, en % de la tranche d’âge.',
    caption:
      '<b>Au cœur de la vie active, les deux pays sont à deux points l’un de l’autre.</b> L’écart est aux deux ' +
      'extrémités : <b>−16,6 points chez les 15-24 ans, −24,2 points entre 60 et 64 ans</b>. Les jeunes entrent ' +
      'tard, les seniors sortent tôt. Tout le reste de cette synthèse découle de ces deux trous.',
    figure: {
      svg: { viewBox: '0 0 720 274', titleId: 'csyn4-t', title: 'taux d’emploi par tranche d’âge, 2024' },
      layout: barLayout(226, 182, ['lbl mut', 'lbl s1t'], 45),
      type: 'bar',
      x: ['15-24 ans', '25-54 ans', '55-64 ans', '60-64 ans', '65-69 ans'],
      y: { min: 0, max: 90, ticks: [0, 30, 60, 90] },
      legend: [
        { color: 's4', label: 'Allemagne' },
        { color: 's1', label: 'France' },
      ],
      series: [
        { key: 'deu', color: 's4', values: [51.0, 85.0, 75.0, 66.6, 21.2], decimals: 1 },
        { key: 'fra', color: 's1', values: [34.4, 82.9, 60.3, 42.4, 11.1], decimals: 1 },
      ],
      frame: frame(274, 196, 586, 226),
    },
  },
  // ----------------------------------------------------------------- 05
  {
    title: 'Prélèvements obligatoires par habitant, 2025',
    src:
      'OCDE, <i>Perspectives économiques</i> n° 119 (juin 2026), séries <span class="num">TAXQ</span>, <span class="num">GDP</span> et <span class="num">POP</span>, données 2025.',
    subtitle: 'En dollars à parité de pouvoir d’achat. Le taux appliqué figure dans le tableau qui suit.',
    caption:
      '<b>Le taux le plus élevé du panel, et pourtant moins d’argent encaissé.</b> La France prélève 44,7 % de sa ' +
      'richesse, contre 40,5 % en Allemagne et 38,8 % aux Pays-Bas — et elle récolte moins que l’un et l’autre par ' +
      'habitant. Un taux plus élevé appliqué à une richesse plus petite peut très bien rapporter moins : ' +
      '<b>ce qui manque n’est pas la pression fiscale, c’est ce sur quoi elle s’applique</b>.',
    figure: {
      svg: { viewBox: '0 0 720 194', titleId: 'csyn5-t', title: 'dollars par habitant, 2025' },
      layout: barLayout(146, 182, ['lbl s1t'], 30),
      type: 'bar',
      x: ['Pays-Bas', 'Allemagne', 'France', 'États-Unis', 'Royaume-Uni'],
      y: { min: 0, max: 30000, ticks: [0, 10000, 20000, 30000] },
      series: [{ key: 'hab', color: 's1', values: [27355, 25369, 24498, 19561, 19227] }],
      frame: frame(194, 196, 586, 146),
    },
  },
  // ----------------------------------------------------------------- 06
  {
    title: 'Dépense sociale par habitant, publique et privée, 2021',
    src:
      'OCDE, <i>Social Expenditure Database</i>, dépense sociale publique et privée par habitant en parité de pouvoir d’achat, données 2021.',
    subtitle:
      'En dollars à parité de pouvoir d’achat ; le total figure à côté de chaque pays. La part privée — retraites ' +
      'par capitalisation, assurances santé, prévoyance — est payée par les ménages sans passer par la dépense publique.',
    caption:
      '<b>La France y consacre la part de richesse la plus élevée du panel — 32,7 % — et, par habitant, moins ' +
      'd’argent que l’Allemagne, les Pays-Bas et les États-Unis.</b> Les deux affirmations sont vraies en même ' +
      'temps : le dénominateur français est plus petit. Le système n’est donc pas plus généreux en montant. ' +
      '<b>Ce qui distingue la France n’est pas ce qu’elle verse, c’est ce qu’elle produit pour le verser.</b>',
    figure: {
      svg: { viewBox: '0 0 720 274', titleId: 'csyn6-t', title: 'dollars par habitant, 2021' },
      layout: barLayout(226, 182, ['lbl s1t', 'lbl mut'], 45),
      type: 'bar',
      x: [
        'Pays-Bas · 21 623 $',
        'États-Unis · 21 312 $',
        'Allemagne · 20 440 $',
        'France · 19 578 $',
        'Royaume-Uni · 15 388 $',
      ],
      y: { min: 0, max: 20000, ticks: [0, 10000, 20000] },
      legend: [
        { color: 's1', label: 'Dépense publique' },
        { color: 's4', label: 'Dépense privée' },
      ],
      series: [
        { key: 'pub', color: 's1', values: [13694, 13377, 18172, 17628, 13188] },
        { key: 'priv', color: 's4', values: [7929, 7935, 2268, 1950, 2200] },
      ],
      frame: frame(274, 196, 586, 226),
    },
  },
  // ----------------------------------------------------------------- 07
  {
    title: 'Niveau de vie avant et après redistribution, 2024',
    src:
      'Insee, <i>France, portrait social</i> 2025, fiche 20 ; <i>Insee Analyses</i> n° 88.',
    subtitle: 'Niveau de vie annuel moyen, en euros, avant puis après impôts et prestations.',
    caption:
      '<b>Le revenu des 10 % les plus modestes est multiplié par 2,5 ; celui des 10 % les plus aisés est amputé ' +
      'd’un quart.</b> L’écart entre le haut et le bas passe de 21 à 6. Même en corrigeant l’effet des retraites, ' +
      'la France conserve <b>la redistribution la plus forte des huit pays comparés</b> : avant de lui demander de ' +
      'redistribuer davantage, il faut partir de ce qu’elle fait déjà.',
    figure: {
      svg: { viewBox: '0 0 720 229', titleId: 'csyn7-t', title: 'euros par an, avant et après redistribution, 2024' },
      layout: barLayout(181, 240, ['lbl mut', 'lbl s1t'], 45),
      type: 'bar',
      x: [
        'Les 10 % les plus modestes',
        'Les 20 % les plus modestes',
        'Les 20 % les plus aisés',
        'Les 10 % les plus aisés',
      ],
      y: { min: 0, max: 100000, ticks: [0, 50000, 100000] },
      legend: [
        { color: 's4', label: 'Avant redistribution' },
        { color: 's1', label: 'Après impôts et prestations' },
      ],
      series: [
        { key: 'avant', color: 's4', values: [4710, 9090, 74980, 99300] },
        { key: 'apres', color: 's1', values: [11960, 14100, 58690, 74410] },
      ],
      frame: frame(229, 254, 586, 181),
    },
  },
  // ----------------------------------------------------------------- 08
  {
    title: 'Coût de l’administration générale, par habitant, 2023',
    src:
      'Eurostat, <span class="num">gov_10a_exp</span>, fonction COFOG 01 « services généraux des administrations publiques » hors charge de la dette, données 2023.',
    subtitle: 'Fonction « services généraux des administrations publiques » hors charge de la dette, euros par habitant, 2023.',
    caption:
      '<b>L’administration française est la moins chère du panel après l’Espagne</b> : 623 € par habitant, contre ' +
      '759 en moyenne européenne et 1 070 en Allemagne. Le « problème de l’administration » n’existe pas dans les ' +
      'chiffres — et le tableau qui suit montre l’inverse : moins d’infirmiers, moins de juges, moins ' +
      'd’enseignants par élève que chez les voisins.',
    figure: {
      svg: { viewBox: '0 0 720 164', titleId: 'csyn8-t', title: 'euros par habitant, administration générale' },
      layout: barLayout(116, 240, ['lbl s1t'], 30),
      type: 'bar',
      x: ['Pays-Bas', 'Allemagne', 'Moyenne européenne', 'France'],
      y: { min: 0, max: 1400, ticks: [0, 700, 1400] },
      series: [{ key: 'adm', color: 's1', values: [1268, 1070, 759, 623] }],
      frame: frame(164, 254, 586, 116),
    },
  },
]

// ------------------------------------------------------------- sérialisation

/** Sérialise une primitive comme le fait le document d'origine. */
function serialise(n: SvgNode): string {
  const attrs = Object.entries(n.attrs)
    .map(([k, v]) => `${k}="${v}"`)
    .join(' ')
  const cls = n.cls ? ` class="${n.cls}"` : ''
  return n.text !== undefined
    ? `<${n.tag}${cls} ${attrs}>${n.text}</${n.tag}>`
    : `<${n.tag}${cls} ${attrs}/>`
}

const KEY_OF: Record<string, string> = { s1: 'k1', s2: 'k2', s3: 'k3', s4: 'k4', s5: 'k5', s6: 'k6' }

/** Le bloc `figure.fig` complet, au balisage du document. */
export function render(spec: FigureSpec): string {
  const f = spec.figure as Series
  const nodes = buildChart(f).map(serialise)
  const keyrow = f.legend
    ? `<div class="keyrow">${f.legend
        .map((l) => `<span><i class="${KEY_OF[l.color] ?? 'k1'}"></i>${l.label}</span>`)
        .join('')}</div>\n`
    : ''
  return (
    `<figure class="fig">\n` +
    `<p class="fig-title">${spec.title}</p>\n` +
    `<p class="fig-sub">${spec.subtitle}</p>\n` +
    keyrow +
    `<div class="figscroll"><svg viewBox="${f.svg.viewBox}" class="cv" role="img" aria-labelledby="${f.svg.titleId}">\n` +
    `<title id="${f.svg.titleId}">${f.svg.title}</title>\n` +
    nodes.join('\n') +
    `\n</svg></div>\n` +
    `<figcaption>${spec.caption}</figcaption>\n` +
    `<p class="src">${spec.src}</p>\n` +
    `</figure>`
  )
}

// ------------------------------------------------------------------ injection

/**
 * Remplace dans le document le bloc `figure.fig` portant le même `fig-title`.
 * Le titre est donc l'identifiant : deux figures ne peuvent pas le partager.
 */
function inject(html: string, spec: FigureSpec): string {
  const anchor = `<p class="fig-title">${spec.title}</p>`
  const at = html.indexOf(anchor)
  if (at < 0) throw new Error(`figure introuvable dans le document : « ${spec.title} »`)
  const start = html.lastIndexOf('<figure class="fig">', at)
  const end = html.indexOf('</figure>', at)
  if (start < 0 || end < 0) throw new Error(`bloc figure mal formé autour de « ${spec.title} »`)
  return html.slice(0, start) + render(spec) + html.slice(end + '</figure>'.length)
}

if (process.argv[1] && process.argv[1].endsWith('figures-synthese.ts')) {
  let html = readFileSync(SOURCE_HTML, 'utf8')
  for (const spec of FIGURES) html = inject(html, spec)
  writeFileSync(SOURCE_HTML, html)
  console.log(`${FIGURES.length} figures régénérées dans « ${SOURCE_HTML.split('/').pop()} ».`)
}
