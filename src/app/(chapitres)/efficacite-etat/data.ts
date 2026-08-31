// Généré par `npm run extract` depuis Temp/chiffres2027 (3).html.
// Toutes les données chiffrées du chapitre vivent ici, chacune sous sa source
// et son millésime. Voir CLAUDE.md, règles 2 à 4.
import type { ChapterMeta, SeriesSet, SourceId, Tables } from '@/lib/types'

export const meta = {
  slug: 'efficacite-etat',
  num: 'Thème 16',
  title: 'Efficacité de l\'État et des services publics',
  shortTitle: 'Efficacité de l\'État',
  note: 'Rapporté à la population, l\'emploi public français est quasi stable depuis vingt ans. Ce qui a changé, c\'est sa composition — et c\'est ce déplacement qui explique le sentiment d\'abandon.',
  status: 'complete',
  updated: '2026-08',
  legacyAnchor: 's16',
} satisfies ChapterMeta

export const tables = {
  'au-31-decembre-2024': {
    vintage: '2024',
    sources: ['insee-dgafp-rapport-annuel-sur-l-etat-de-la-f'],
    columns: [
      {
        key: 'au-31-decembre-2024',
        header: 'Au 31 décembre 2024',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'effectifs', header: 'Effectifs', type: 'number', headerNumeric: true },
      { key: 'part', header: 'Part', type: 'number', headerNumeric: true },
      { key: 'pour-100-000-hab', header: 'Pour 100 000 hab.', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Fonction publique d\'État' },
          { v: 2587400, d: 0 },
          { v: 44, d: 1, u: '%' },
          { v: 3774, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Fonction publique territoriale' },
          { v: 2039400, d: 0 },
          { v: 34.7, d: 1, u: '%' },
          { v: 2975, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Fonction publique hospitalière' },
          { v: 1249900, d: 0 },
          { v: 21.3, d: 1, u: '%' },
          { v: 1823, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Ensemble' },
          { v: 5876700, d: 0 },
          { v: 100, d: 0, u: '%' },
          { v: 8573, d: 0 },
        ],
        total: true,
      },
    ],
  },
  ministere: {
    vintage: '2024',
    sources: ['insee-dgafp-rapport-annuel-sur-l-etat-de-la-f'],
    columns: [
      { key: 'ministere', header: 'Ministère', type: 'text', headerNumeric: false },
      { key: 'effectifs', header: 'Effectifs', type: 'number', headerNumeric: true },
      { key: 'part', header: 'Part', type: 'number', headerNumeric: true },
      { key: 'pour-100-000-hab', header: 'Pour 100 000 hab.', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Éducation, enseignement supérieur, recherche' },
          { v: 1490000, d: 0 },
          { v: 58, d: 0, u: '%' },
          { v: 2179, d: 0 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Intérieur et Outre-mer' },
          { v: 306000, d: 0 },
          { v: 12, d: 0, u: '%' },
          { v: 448, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Armées' },
          { v: 290100, d: 0 },
          { v: 11, d: 0, u: '%' },
          { v: 424, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Ministères économiques et financiers' },
          { v: 142100, d: 0 },
          { v: 6, d: 0, u: '%' },
          { v: 208, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Justice' },
          { v: 95000, d: 0 },
          { v: 4, d: 0, u: '%' },
          { v: 139, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Ministères sociaux' },
          { v: 94400, d: 0 },
          { v: 4, d: 0, u: '%' },
          { v: 138, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Transition écologique' },
          { v: 66500, d: 0 },
          { v: 3, d: 0, u: '%' },
          { v: 97, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Agriculture' },
          { v: 45500, d: 0 },
          { v: 2, d: 0, u: '%' },
          { v: 67, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Culture' },
          { v: 25100, d: 0 },
          { v: 1, d: 0, u: '%' },
          { v: 37, d: 0 },
        ],
      },
    ],
  },
  'pour-100-000-habitants': {
    vintage: '2024',
    sources: ['eurostat-demo-gind'],
    columns: [
      {
        key: 'pour-100-000-habitants',
        header: 'Pour 100 000 habitants',
        type: 'text',
        headerNumeric: false,
      },
      { key: '2005', header: '2005', type: 'number', headerNumeric: true },
      { key: '2014', header: '2014', type: 'number', headerNumeric: true },
      { key: '2020', header: '2020', type: 'number', headerNumeric: true },
      { key: '2024', header: '2024', type: 'number', headerNumeric: true },
      { key: '2005-2024', header: 'Δ 2005-2024', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Fonction publique d\'État' },
          { v: 4208, d: 0 },
          { v: 3608, d: 0 },
          { v: 3734, d: 0 },
          { v: 3774, d: 0 },
          { v: -10.3, d: 1, u: '%' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Fonction publique territoriale' },
          { v: 2474, d: 0 },
          { v: 2857, d: 0 },
          { v: 2900, d: 0 },
          { v: 2975, d: 0 },
          { v: 20.3, d: 1, u: '%', sign: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Fonction publique hospitalière' },
          { v: 1666, d: 0 },
          { v: 1751, d: 0 },
          { v: 1791, d: 0 },
          { v: 1823, d: 0 },
          { v: 9.5, d: 1, u: '%', sign: true },
        ],
      },
      {
        cells: [
          { t: 'Ensemble' },
          { v: 8347, d: 0 },
          { v: 8216, d: 0 },
          { v: 8425, d: 0 },
          { v: 8573, d: 0 },
          { v: 2.7, d: 1, u: '%', sign: true },
        ],
        total: true,
      },
    ],
  },
  'pour-100-000-habitants-2': {
    vintage: 'à confirmer',
    sources: ['eurostat-crim-just-job-2'],
    columns: [
      {
        key: 'pour-100-000-habitants',
        header: 'Pour 100 000 habitants',
        type: 'text',
        headerNumeric: false,
      },
      { key: 'france', header: 'France', type: 'number', headerNumeric: true },
      { key: 'allemagne', header: 'Allemagne', type: 'number', headerNumeric: true },
      { key: 'roy-uni', header: 'Roy.-Uni', type: 'number', headerNumeric: true },
      { key: 'etats-unis', header: 'États-Unis', type: 'number', headerNumeric: true },
      { key: 'mediane-europeenne', header: 'Médiane européenne', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Policiers' },
          { v: 361, d: 0 },
          { v: 311, d: 0 },
          { t: '≥ 211 *' },
          { v: 240, d: 0, u: '**', approx: true },
          null,
        ],
      },
      {
        cells: [
          { t: 'Juges professionnels' },
          { v: 11.3, d: 1 },
          { v: 24.7, d: 1 },
          null,
          null,
          { v: 17.6, d: 1 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Médecins' },
          { v: 328, d: 0 },
          { v: 453, d: 0 },
          { v: 330, d: 0 },
          { v: 368, d: 0 },
          null,
        ],
      },
      {
        cells: [
          { t: 'Infirmiers et sages-femmes' },
          { v: 942, d: 0 },
          { v: 1225, d: 0 },
          { v: 955, d: 0 },
          { v: 1338, d: 0 },
          null,
        ],
      },
      {
        cells: [
          { t: 'Enseignants (pré-primaire à secondaire)' },
          { v: 1194, d: 0 },
          { v: 1550, d: 0 },
          null,
          null,
          null,
        ],
      },
      {
        cells: [
          { t: 'Budget justice par habitant' },
          { v: 77, d: 0, u: '€' },
          { v: 136, d: 0, u: '€' },
          null,
          null,
          { v: 75, d: 0, u: '€' },
        ],
        total: true,
      },
    ],
  },
  domaine: {
    vintage: 'à confirmer',
    sources: ['tableau-de-synthese-tableau-de-synthese-chaque-ligne-renvo'],
    columns: [
      { key: 'domaine', header: 'Domaine', type: 'text', headerNumeric: false },
      { key: 'moyens', header: 'Moyens', type: 'text', headerNumeric: false },
      { key: 'diagnostic', header: 'Diagnostic', type: 'text', headerNumeric: false },
    ],
    rows: [
      {
        cells: [
          { t: '<strong>Santé</strong>' },
          { t: 'Élevés (11,5 % du PIB)' },
          {
            t: 'Meilleure mortalité traitable d\'Europe. Déserts médicaux, mortalité infantile, accès dégradé : <strong>problème de répartition et d\'organisation</strong>, pas de volume.',
          },
        ],
      },
      {
        cells: [
          { t: '<strong>École</strong>' },
          { t: 'Dans la moyenne OCDE' },
          {
            t: 'Primaire sous-doté de 11 %, secondaire sur-doté de 13 %. Enseignants à 0,64-0,69 du salaire des diplômés du supérieur pour 900 h d\'enseignement. <strong>Problème d\'allocation interne.</strong>',
          },
        ],
      },
      {
        cells: [
          { t: '<strong>Justice</strong>' },
          { v: 77, d: 0, u: '€/hab. contre 136 € en Allemagne ; 11,3 juges contre 24,7' },
          { t: '<strong>Vrai problème de moyens.</strong> Sous-investissement chronique et documenté.' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '<strong>Sécurité</strong>' },
          { v: 361, d: 0, u: 'policiers/100 000, plus que l\'Allemagne' },
          {
            t: 'Moyens comparativement élevés. Taux d\'élucidation des vols ≤ 8 %. <strong>Question d\'efficacité et d\'organisation</strong> plus que de volume — mais la donnée comparative manque.',
          },
        ],
      },
      {
        cells: [
          { t: '<strong>Collectivités</strong>' },
          { t: 'En croissance, en partie par transferts' },
          {
            t: 'Au moins 7,4 Md€/an de coordination. <strong>Problème d\'efficacité organisationnelle.</strong>',
          },
        ],
      },
    ],
  },
} satisfies Tables

export const series = {
  'emploi-public-par-versant-pour-100-000-habitants': {
    raw: true,
    title: 'Emploi public par versant, pour 100 000 habitants',
    subtitle: '2005 et 2024. Neutralise la croissance démographique.',
    caption: '<em>Sources : Insee Première n° 2094 ; séries antérieures Insee-Siasp. Ratios calculés sur la population Banque mondiale.</em>',
    legend: [
      { color: 's4', label: '2005' },
      { color: 's1', label: '2024' },
    ],
    svg: '<svg viewBox="0 0 720 200" class="cv" role="img" aria-labelledby="cfp-t">\n<title id="cfp-t">agents pour 100 000 habitants</title>\n<line class="grid" x1="228.0" y1="16" x2="228.0" y2="152"></line>\n<text class="ax" x="228.0" y="174" text-anchor="middle">0</text>\n<line class="grid" x1="412.7" y1="16" x2="412.7" y2="152"></line>\n<text class="ax" x="412.7" y="174" text-anchor="middle">2 000</text>\n<line class="grid" x1="597.5" y1="16" x2="597.5" y2="152"></line>\n<text class="ax" x="597.5" y="174" text-anchor="middle">4 000</text>\n<text class="ax al" x="214" y="43">Fonction publique d\'État</text>\n<rect class="bar s4f" x="228" y="24" width="388.7" height="13" rx="3"></rect>\n<rect class="bar s1f" x="228" y="41" width="348.6" height="13" rx="3"></rect>\n<text class="lbl mut" x="624.7" y="35">4 208</text>\n<text class="lbl s1t" x="584.6" y="52">3 774</text>\n<text class="ax al" x="214" y="89">Fonction publique territoriale</text>\n<rect class="bar s4f" x="228" y="70" width="228.5" height="13" rx="3"></rect>\n<rect class="bar s1f" x="228" y="87" width="274.8" height="13" rx="3"></rect>\n<text class="lbl mut" x="464.5" y="81">2 474</text>\n<text class="lbl s1t" x="510.8" y="98">2 975</text>\n<text class="ax al" x="214" y="135">Fonction publique hospitalière</text>\n<rect class="bar s4f" x="228" y="116" width="153.9" height="13" rx="3"></rect>\n<rect class="bar s1f" x="228" y="133" width="168.4" height="13" rx="3"></rect>\n<text class="lbl mut" x="389.9" y="127">1 666</text>\n<text class="lbl s1t" x="404.4" y="144">1 823</text>\n</svg>',
    sources: ['eurostat-demo-gind'],
    vintage: 'à confirmer',
    values: {
      svg: { viewBox: '0 0 720 200', titleId: 'cfp-t', title: 'agents pour 100 000 habitants' },
      title: 'Emploi public par versant, pour 100 000 habitants',
      subtitle: '2005 et 2024. Neutralise la croissance démographique.',
      caption: '<em>Sources : Insee Première n° 2094 ; séries antérieures Insee-Siasp. Ratios calculés sur la population Banque mondiale.</em>',
      sources: ['eurostat-demo-gind'],
      vintage: '2024',
      legend: [
        { color: 's4', label: '2005' },
        { color: 's1', label: '2024' },
      ],
      type: 'bar',
      layout: {
        kind: 'bar',
        gridTop: 16,
        gridBottom: 152,
        tickLabelY: 174,
        catLabelX: 214,
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
      x: [
        'Fonction publique d\'État', 'Fonction publique territoriale',
        'Fonction publique hospitalière',
      ],
      y: { min: 0, max: 4000, ticks: [0, 2000, 4000] },
      series: [
        { key: 'b1', color: 's4', label: '2005', values: [4207.848, 2473.613, 1666.035], decimals: 0 },
        { key: 'b2', color: 's1', label: '2024', values: [3773.748, 2974.831, 1823.004], decimals: 0 },
      ],
      frame: { width: 720, height: 200, left: 228, right: 597.5000207880995, top: 16, bottom: 152 },
    },
  },
} satisfies SeriesSet

/** Fiches du chapitre, dans l'ordre : alimente le rail et la recherche. */
export const questions = [
  { id: 's16-q1', title: 'Combien d\'agents publics, dans quel versant ?' },
  {
    id: 's16-q2',
    title: 'L\'emploi public a-t-il explosé ? La réponse rapportée à la population',
  },
  {
    id: 's16-q3',
    title: 'Pourquoi la fonction publique territoriale augmente-t-elle ? Et pourquoi ressent-on un désengagement de l\'État ?',
  },
  { id: 's16-q4', title: 'Comparaison internationale par fonction, pour 100 000 habitants' },
  { id: 's16-q5', title: 'Combien coûte l\'administration, et le millefeuille ?' },
  { id: 's16-q6', title: 'Quelles simplifications ont vraiment marché ailleurs ?' },
  {
    id: 's16-q7',
    title: 'Moyens et résultats : où manque-t-il de l\'argent, où manque-t-il de l\'efficacité ?',
  },
] satisfies readonly { id: string; title: string }[]

/**
 * Sources citées dans le texte du chapitre, en plus de celles portées par les
 * tableaux et les figures. La bibliographie les recense aussi : une source
 * citée en prose reste une source du dossier.
 */
export const citedSources = [
  'eurostat-crim-just-job-2', 'insee-dgafp-rapport-annuel-sur-l-etat-de-la-f',
  'tableau-de-synthese-tableau-de-synthese-chaque-ligne-renvo',
] satisfies readonly SourceId[]
