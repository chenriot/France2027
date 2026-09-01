// Généré par `npm run extract` depuis Temp/chiffres2027 (3).html.
// Toutes les données chiffrées du chapitre vivent ici, chacune sous sa source
// et son millésime. Voir CLAUDE.md, règles 2 à 4.
import type { ChapterMeta, SeriesSet, SourceId, Tables } from '@/lib/types'

export const meta = {
  slug: 'retraites-travail',
  num: 'Thème 03',
  title: 'Retraites et durée de travail sur une vie',
  shortTitle: 'Retraites et durée de travail',
  note: 'La France ne travaille pas moins par semaine que ses voisins. Elle travaille moins d\'années, aux deux bouts de la carrière.',
  status: 'complete',
  updated: '2026-08',
  legacyAnchor: 's3',
} satisfies ChapterMeta

export const tables = {
  '2024': {
    vintage: '2024',
    sources: ['eurostat-eurostat-gov-10a-exp-cofog-10-2-et-spr'],
    columns: [
      { key: '2024', header: '2024', type: 'text', headerNumeric: false },
      { key: 'pib-md', header: 'PIB, Md€', type: 'number', headerNumeric: true },
      { key: 'vieillesse-md', header: 'Vieillesse, Md€', type: 'number', headerNumeric: true },
      { key: 'du-pib', header: '% du PIB', type: 'number', headerNumeric: true },
      { key: 'survie-md', header: '+ survie, Md€', type: 'number', headerNumeric: true },
      { key: 'total-pib', header: 'Total, % PIB', type: 'number', headerNumeric: true },
      { key: 'pop-65-ans-et', header: 'Pop. 65 ans et +', type: 'number', headerNumeric: true },
      {
        key: 'personne-de-65-ans-et',
        header: '€ / personne de 65 ans et +',
        type: 'number',
        headerNumeric: true,
      },
    ],
    rows: [
      {
        cells: [
          { t: 'Italie' },
          { v: 2202, d: 0 },
          { v: 306.4, d: 1 },
          { v: 13.9, d: 1 },
          { v: 359.6, d: 1 },
          { v: 16.3, d: 1 },
          { v: 14.36, d: 2, u: 'M' },
          { v: 25046, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'France' },
          { v: 2935, d: 0 },
          { v: 392, d: 1 },
          { v: 13.4, d: 1 },
          { v: 432.6, d: 1 },
          { v: 14.7, d: 1 },
          { v: 14.78, d: 2, u: 'M' },
          { v: 29272, d: 0 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Suède' },
          { v: 564, d: 0 },
          { v: 61.4, d: 1 },
          { v: 10.9, d: 1 },
          { v: 62.1, d: 1 },
          { v: 11, d: 1 },
          { v: 2.17, d: 2, u: 'M' },
          { v: 28542, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Espagne' },
          { v: 1594, d: 0 },
          { v: 165.1, d: 1 },
          { v: 10.4, d: 1 },
          { v: 200.5, d: 1 },
          { v: 12.6, d: 1 },
          { v: 9.93, d: 2, u: 'M' },
          { v: 20192, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 4329, d: 0 },
          { v: 427.2, d: 1 },
          { v: 9.9, d: 1 },
          { v: 508.1, d: 1 },
          { v: 11.7, d: 1 },
          { v: 18.71, d: 2, u: 'M' },
          { v: 27157, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'Pays-Bas' },
          { v: 1115, d: 0 },
          { v: 68.8, d: 1 },
          { v: 6.2, d: 1 },
          { v: 69.3, d: 1 },
          { v: 6.2, d: 1 },
          { v: 3.68, d: 2, u: 'M' },
          { v: 18841, d: 0 },
        ],
      },
      {
        cells: [
          { t: 'UE-27' },
          { v: 18043, d: 0 },
          { v: 1928.4, d: 1 },
          { v: 10.7, d: 1 },
          { v: 2191, d: 1 },
          { v: 12.1, d: 1 },
          { v: 97.11, d: 2, u: 'M' },
          { v: 22562, d: 0 },
        ],
        total: true,
      },
    ],
  },
  indicateur: {
    vintage: '2026',
    sources: ['conseil-d-orientation-des-retraites-conseil-d-orientation'],
    columns: [
      { key: 'indicateur', header: 'Indicateur', type: 'text', headerNumeric: false },
      { key: 'valeur', header: 'Valeur', type: 'number', headerNumeric: true },
      { key: 'source', header: 'Source', type: 'text', headerNumeric: false },
    ],
    rows: [
      {
        cells: [
          { t: 'Cotisants par retraité, 1960' },
          { v: 4, d: 1, approx: true },
          { t: 'COR' },
        ],
      },
      {
        cells: [
          { t: 'Cotisants par retraité, 1965' },
          { v: 4.3, d: 1 },
          { t: 'COR' },
        ],
      },
      {
        cells: [
          { t: 'Cotisants par retraité, tous régimes, 2020' },
          { v: 2.05, d: 2 },
          { t: 'COR, rapport 2026' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: '— dont régime général' },
          { v: 2.25, d: 2 },
          { t: 'COR, rapport 2026' },
        ],
      },
      {
        cells: [
          { t: '— dont fonction publique d\'État' },
          { v: 1.29, d: 2 },
          { t: 'COR, rapport 2026' },
        ],
      },
      {
        cells: [
          { t: 'Rapport démographique (20-64 ans / 65 ans et +), 2009' },
          { v: 3.6, d: 2 },
          { t: 'COR' },
        ],
      },
      {
        cells: [
          { t: 'Rapport démographique, 2025' },
          { v: 2.5, d: 2 },
          { t: 'COR, rapport 2026' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Rapport démographique projeté, 2070' },
          { v: 1.62, d: 2 },
          { t: 'COR, rapport 2026' },
        ],
      },
    ],
  },
  'mesure-2024': {
    vintage: '2024',
    sources: ['eurostat-rexecode-proche-du-patronat-duree-eff'],
    columns: [
      { key: 'mesure-2024', header: 'Mesure (2024)', type: 'text', headerNumeric: false },
      { key: 'france', header: 'France', type: 'number', headerNumeric: true },
      { key: 'allemagne', header: 'Allemagne', type: 'number', headerNumeric: true },
      { key: 'moyenne-ue', header: 'Moyenne UE', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Salariés à temps plein' },
          { v: 1664, d: 0, u: 'h' },
          { v: 1785, d: 0, u: 'h' },
          { v: 1784, d: 0, u: 'h' },
        ],
      },
      {
        cells: [
          { t: 'Ensemble des personnes en emploi' },
          { v: 1509, d: 0, u: 'h' },
          { v: 1334, d: 0, u: 'h' },
          { v: 1610, d: 0, u: 'h' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Rapporté aux 15-64 ans' },
          { v: 1094, d: 0, u: 'h' },
          { v: 1164, d: 0, u: 'h' },
          { v: 1233, d: 0, u: 'h' },
        ],
        emphasis: true,
      },
    ],
  },
  '2024-2': {
    vintage: '2024',
    sources: ['eurostat-rexecode-proche-du-patronat-duree-eff'],
    columns: [
      { key: '2024', header: '2024', type: 'text', headerNumeric: false },
      { key: 'france', header: 'France', type: 'number', headerNumeric: true },
      { key: 'allemagne', header: 'Allemagne', type: 'number', headerNumeric: true },
      { key: 'rapport', header: 'Rapport', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Heures par personne en emploi' },
          { v: 1512, d: 0 },
          { v: 1345, d: 0 },
          { t: '0,889 — <b>−11,1 %</b>' },
        ],
      },
      {
        cells: [
          { t: 'Emplois ÷ population 15-64 ans' },
          { v: 72.3, d: 1, u: '%' },
          { v: 86.5, d: 1, u: '%' },
          { t: '1,196 — <b>+19,6 %</b>' },
        ],
      },
      {
        cells: [
          { t: 'Heures par habitant de 15-64 ans' },
          { v: 1094, d: 0 },
          { v: 1164, d: 0 },
          { t: '1,064 — <b>+6,4 %</b>' },
        ],
        total: true,
      },
    ],
  },
  pays: {
    vintage: '2024',
    sources: ['eurostat-rexecode-proche-du-patronat-duree-eff'],
    columns: [
      { key: 'pays', header: 'Pays', type: 'text', headerNumeric: false },
      { key: 'heures-an-2024', header: 'Heures/an (2024)', type: 'number', headerNumeric: true },
      {
        key: 'duree-esperee-de-vie-active',
        header: 'Durée espérée de vie active',
        type: 'number',
        headerNumeric: true,
      },
      { key: 'heures-cumulees', header: 'Heures cumulées', type: 'number', headerNumeric: true },
      {
        key: 'a-40-ans-de-carriere',
        header: 'À 40 ans de carrière',
        type: 'number',
        headerNumeric: true,
      },
    ],
    rows: [
      {
        cells: [
          { t: 'France' },
          { v: 1509, d: 0 },
          { v: 37.5, d: 1, u: 'ans' },
          { v: 56600, d: 0, u: 'h', approx: true },
          { v: 60400, d: 0, u: 'h', approx: true },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 1334, d: 0 },
          { v: 40.2, d: 1, u: 'ans' },
          { v: 53600, d: 0, u: 'h', approx: true },
          { v: 53400, d: 0, u: 'h', approx: true },
        ],
      },
      {
        cells: [
          { t: 'Royaume-Uni' },
          { v: 1524, d: 0 },
          { v: 39.2, d: 1, u: 'ans (2018)' },
          { v: 59800, d: 0, u: 'h', approx: true },
          { v: 61000, d: 0, u: 'h', approx: true },
        ],
      },
      {
        cells: [
          { t: 'États-Unis' },
          { v: 1810, d: 0 },
          { t: 'n.d.' },
          { t: 'non calculable' },
          { v: 72400, d: 0, u: 'h', approx: true },
        ],
      },
    ],
  },
  'taux-d-emploi-2024': {
    vintage: '2024',
    sources: ['eurostat-lfsi-emp-a-3', 'eurostat-eurostat-lfsi-emp-a-et-lfsa-ergan-2024'],
    columns: [
      {
        key: 'taux-d-emploi-2024',
        header: 'Taux d\'emploi 2024, %',
        type: 'text',
        headerNumeric: false,
      },
      { key: '15-24', header: '15-24', type: 'number', headerNumeric: true },
      { key: '25-54', header: '25-54', type: 'number', headerNumeric: true },
      { key: '55-64', header: '55-64', type: 'number', headerNumeric: true },
      { key: '60-64', header: '60-64', type: 'number', headerNumeric: true },
      { key: '15-64', header: '15-64', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Pays-Bas' },
          { v: 76, d: 1 },
          { v: 86.9, d: 1 },
          { v: 75.3, d: 1 },
          { v: 68.7, d: 1 },
          { v: 82.3, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Suède' },
          { v: 43, d: 1 },
          { v: 86.1, d: 1 },
          { v: 78.1, d: 1 },
          { v: 69.5, d: 1 },
          { v: 76.7, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 51, d: 1 },
          { v: 85, d: 1 },
          { v: 75, d: 1 },
          { v: 66.6, d: 1 },
          { v: 77.2, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'UE-27' },
          { v: 34.9, d: 1 },
          { v: 82.4, d: 1 },
          { v: 65.2, d: 1 },
          null,
          { v: 70.7, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'France' },
          { v: 34.4, d: 1 },
          { v: 82.9, d: 1 },
          { v: 60.3, d: 1 },
          { v: 42.4, d: 1 },
          { v: 68.8, d: 1 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Espagne' },
          { v: 24.9, d: 1 },
          { v: 78.7, d: 1 },
          { v: 61.1, d: 1 },
          null,
          { v: 66.1, d: 1 },
        ],
      },
      {
        cells: [
          { t: 'Italie' },
          { v: 19.7, d: 1 },
          { v: 74.5, d: 1 },
          { v: 59, d: 1 },
          { v: 47.2, d: 1 },
          { v: 62.2, d: 1 },
        ],
      },
    ],
  },
  'taux-d-emploi-des-55-64-ans': {
    vintage: '2025',
    sources: ['eurostat-lfsi-emp-a-3', 'eurostat-eurostat-lfsi-emp-a-et-lfsa-ergan-2024'],
    columns: [
      {
        key: 'taux-d-emploi-des-55-64-ans',
        header: 'Taux d\'emploi des 55-64 ans',
        type: 'text',
        headerNumeric: false,
      },
      { key: '2003', header: '2003', type: 'number', headerNumeric: true },
      { key: '2010', header: '2010', type: 'number', headerNumeric: true },
      { key: '2019', header: '2019', type: 'number', headerNumeric: true },
      { key: '2024', header: '2024', type: 'number', headerNumeric: true },
      { key: '2025', header: '2025', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'France' },
          { v: 38.2, d: 1 },
          { v: 41, d: 1 },
          { v: 54.5, d: 1 },
          { v: 60.3, d: 1 },
          { v: 61.7, d: 1 },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Allemagne' },
          { v: 39.4, d: 1 },
          { v: 57.8, d: 1 },
          { v: 72.7, d: 1 },
          { v: 75, d: 1 },
          { v: 75.3, d: 1 },
        ],
      },
      {
        cells: [
          { t: '<em>Écart</em>' },
          { v: -1.2, d: 1 },
          { v: -16.8, d: 1 },
          { v: -18.2, d: 1 },
          { v: -14.7, d: 1 },
          { v: -13.6, d: 1 },
        ],
      },
    ],
  },
  'indicateur-2': {
    vintage: '2025',
    sources: ['eurostat-tresor-eco-n-239-eurostat-lfsi-emp-a'],
    columns: [
      { key: 'indicateur', header: 'Indicateur', type: 'text', headerNumeric: false },
      { key: 'france', header: 'France', type: 'number', headerNumeric: true },
      { key: 'allemagne', header: 'Allemagne', type: 'number', headerNumeric: true },
      { key: 'reference', header: 'Référence', type: 'number', headerNumeric: true },
    ],
    rows: [
      {
        cells: [
          { t: 'Âge moyen de fin d\'études' },
          { v: 20.7, d: 1, u: 'ans' },
          null,
          null,
        ],
      },
      {
        cells: [
          { t: 'Durée hebdomadaire habituelle' },
          { v: 36.1, d: 1, u: 'h' },
          null,
          { t: 'UE : 36,3 h' },
        ],
      },
      {
        cells: [
          { t: 'Congés annuels' },
          { v: 32, d: 0, u: 'jours' },
          null,
          { t: 'UE : 25 jours' },
        ],
      },
      {
        cells: [
          { t: 'Taux d\'emploi 15-24 ans (2024)' },
          { v: 34.4, d: 1, u: '%' },
          { v: 51, d: 1, u: '%' },
          null,
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Taux d\'emploi 25-54 ans' },
          { v: 82.9, d: 1, u: '%' },
          { v: 85, d: 1, u: '%' },
          null,
        ],
      },
      {
        cells: [
          { t: 'Taux d\'emploi 55-64 ans' },
          { v: 60.3, d: 1, u: '%' },
          { v: 75, d: 1, u: '%' },
          { t: 'P.-Bas : 75,3 %' },
        ],
        emphasis: true,
      },
      {
        cells: [
          { t: 'Durée espérée de vie active (2025)' },
          { v: 37.5, d: 1, u: 'ans' },
          { v: 40.2, d: 1, u: 'ans' },
          null,
        ],
      },
    ],
  },
} satisfies Tables

export const series = {
  'taux-d-emploi-par-tranche-d-age-2024': {
    raw: true,
    title: 'Taux d\'emploi par tranche d\'âge, 2024',
    subtitle: 'En % de la population de chaque tranche.',
    caption: '<b>L\'écart est concentré aux deux extrémités de la vie active.</b> Sur le cœur de carrière (25-54 ans), la France et l\'Allemagne sont pratiquement à égalité — 2,1 points d\'écart. Sur les 15-24 ans, l\'écart est de 16,6 points ; sur les 60-64 ans, il atteint <b>24,2 points</b>. Autrement dit : <b>le problème français n\'est pas que les gens travaillent peu, c\'est qu\'ils commencent tard et s\'arrêtent tôt.</b>',
    legend: [
      { color: 's4', label: 'France' },
      { color: 's1', label: 'Allemagne' },
    ],
    svg: '<svg viewBox="0 0 720 292" class="cv" role="img" aria-labelledby="cempage-t">\r\n<title id="cempage-t">taux d\'emploi, %, 2024</title>\r\n<line class="grid" x1="150.0" y1="16" x2="150.0" y2="244"></line>\r\n<text class="ax" x="150.0" y="266" text-anchor="middle">0</text>\r\n<line class="grid" x1="286.0" y1="16" x2="286.0" y2="244"></line>\r\n<text class="ax" x="286.0" y="266" text-anchor="middle">25</text>\r\n<line class="grid" x1="421.9" y1="16" x2="421.9" y2="244"></line>\r\n<text class="ax" x="421.9" y="266" text-anchor="middle">50</text>\r\n<line class="grid" x1="557.9" y1="16" x2="557.9" y2="244"></line>\r\n<text class="ax" x="557.9" y="266" text-anchor="middle">75</text>\r\n<text class="ax al" x="136" y="43">15-24 ans</text>\r\n<rect class="bar s4f" x="150" y="24" width="187.1" height="13" rx="3"></rect>\r\n<rect class="bar s1f" x="150" y="41" width="277.4" height="13" rx="3"></rect>\r\n<text class="lbl mut" x="345.1" y="35">34,4</text>\r\n<text class="lbl s1t" x="435.4" y="52">51,0</text>\r\n<text class="ax al" x="136" y="89">25-54 ans</text>\r\n<rect class="bar s4f" x="150" y="70" width="450.8" height="13" rx="3"></rect>\r\n<rect class="bar s1f" x="150" y="87" width="462.3" height="13" rx="3"></rect>\r\n<text class="lbl mut" x="608.8" y="81">82,9</text>\r\n<text class="lbl s1t" x="620.3" y="98">85,0</text>\r\n<text class="ax al" x="136" y="135">55-64 ans</text>\r\n<rect class="bar s4f" x="150" y="116" width="327.9" height="13" rx="3"></rect>\r\n<rect class="bar s1f" x="150" y="133" width="407.9" height="13" rx="3"></rect>\r\n<text class="lbl mut" x="485.9" y="127">60,3</text>\r\n<text class="lbl s1t" x="565.9" y="144">75,0</text>\r\n<text class="ax al" x="136" y="181">60-64 ans</text>\r\n<rect class="bar s4f" x="150" y="162" width="230.6" height="13" rx="3"></rect>\r\n<rect class="bar s1f" x="150" y="179" width="362.2" height="13" rx="3"></rect>\r\n<text class="lbl mut" x="388.6" y="173">42,4</text>\r\n<text class="lbl s1t" x="520.2" y="190">66,6</text>\r\n<text class="ax al" x="136" y="227">65-69 ans</text>\r\n<rect class="bar s4f" x="150" y="208" width="60.4" height="13" rx="3"></rect>\r\n<rect class="bar s1f" x="150" y="225" width="115.3" height="13" rx="3"></rect>\r\n<text class="lbl mut" x="218.4" y="219">11,1</text>\r\n<text class="lbl s1t" x="273.3" y="236">21,2</text>\r\n</svg>',
    sources: ['eurostat-lfsi-emp-a-3'],
    vintage: '2024',
    values: {
      svg: { viewBox: '0 0 720 292', titleId: 'cempage-t', title: 'taux d\'emploi, %, 2024' },
      title: 'Taux d\'emploi par tranche d\'âge, 2024',
      subtitle: 'En % de la population de chaque tranche.',
      caption: '<b>L\'écart est concentré aux deux extrémités de la vie active.</b> Sur le cœur de carrière (25-54 ans), la France et l\'Allemagne sont pratiquement à égalité — 2,1 points d\'écart. Sur les 15-24 ans, l\'écart est de 16,6 points ; sur les 60-64 ans, il atteint <b>24,2 points</b>. Autrement dit : <b>le problème français n\'est pas que les gens travaillent peu, c\'est qu\'ils commencent tard et s\'arrêtent tôt.</b>',
      sources: ['eurostat-lfsi-emp-a-3'],
      vintage: '2024',
      legend: [
        { color: 's4', label: 'France' },
        { color: 's1', label: 'Allemagne' },
      ],
      type: 'bar',
      layout: {
        kind: 'bar',
        gridTop: 16,
        gridBottom: 244,
        tickLabelY: 266,
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
      x: ['15-24 ans', '25-54 ans', '55-64 ans', '60-64 ans', '65-69 ans'],
      y: { min: 0, max: 75, ticks: [0, 25, 50, 75] },
      series: [
        {
          key: 'b1',
          color: 's4',
          label: 'France',
          values: [34.402, 82.888, 60.291, 42.4, 11.106],
          decimals: 1,
        },
        {
          key: 'b2',
          color: 's1',
          label: 'Allemagne',
          values: [51.005, 85.002, 75, 66.597, 21.2],
          decimals: 1,
        },
      ],
      frame: { width: 720, height: 292, left: 150, right: 557.900266652897, top: 16, bottom: 244 },
    },
  },
} satisfies SeriesSet

/** Fiches du chapitre, dans l'ordre : alimente le rail et la recherche. */
export const questions = [
  { id: 's3-q1', title: 'Combien d\'actifs pour un retraité ?' },
  { id: 's3-q2', title: 'À quel âge part-on, et combien d\'années passe-t-on en retraite ?' },
  { id: 's3-q3', title: 'Quelle part du PIB pour les retraites, et combien par retraité ?' },
  { id: 's3-q4', title: 'Les retraités ont-ils un niveau de vie supérieur aux actifs ?' },
  { id: 's3-q5', title: 'Combien coûterait un retour à 60, 62 ou 63 ans ?' },
  { id: 's3-q6', title: 'Peut-on équilibrer sans toucher à l\'âge ?' },
  { id: 's3-q7', title: 'Sur une vie entière, combien d\'heures travaille-t-on ?' },
  {
    id: 's3-q8',
    title: 'Le taux d\'emploi par tranche d\'âge : où se situe exactement le décrochage',
  },
  { id: 's3-q9', title: 'Et si on travaillait autant que nos voisins ? Une hypothèse chiffrée' },
  { id: 's3-q10', title: 'Qu\'est-ce qui réduit les heures travaillées dans une vie ?' },
] satisfies readonly { id: string; title: string }[]

/**
 * Sources citées dans le texte du chapitre, en plus de celles portées par les
 * tableaux et les figures. La bibliographie les recense aussi : une source
 * citée en prose reste une source du dossier.
 */
export const citedSources = [
  'conseil-d-orientation-des-retraites-conseil-d-orientation',
  'drees-drees-fiche-9-2025-cor-rapport-202',
  'eurostat-eurostat-gov-10a-exp-cofog-10-2-et-spr',
  'eurostat-eurostat-lfsi-emp-a-et-lfsa-ergan-2024',
  'eurostat-rexecode-proche-du-patronat-duree-eff',
  'eurostat-tresor-eco-n-239-eurostat-lfsi-emp-a',
  'insee-fondation-ifrap-organisme-non-neutre-l',
] satisfies readonly SourceId[]
