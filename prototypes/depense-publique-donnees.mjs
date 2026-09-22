/*
 * Génère le bloc de données du prototype `depense-publique-1975-2024.html`.
 *
 *   node prototypes/depense-publique-donnees.mjs
 *
 * Aucun chiffre n'est saisi à la main, ici ni dans le prototype : tout est lu
 * dans le dépôt, puis réinjecté dans le fichier HTML entre ses deux marqueurs.
 * Relancer le script après une régénération des chapitres suffit à remettre le
 * prototype à jour.
 *
 * Deux origines, et c'est la seule chose à savoir avant de lire le graphique :
 *
 * - les cinq postes par nature viennent de la figure du chapitre « Dette et
 *   déficit » (Eurostat `nasa_10_nf_tr` et `gov_10a_main`, rebasés) ;
 * - la dépense totale, les recettes et le solde viennent du classeur Insee
 *   `docs/insee-depenses-recettes-publiques-base-2020.xlsx` (comptes nationaux
 *   annuels, base 2020), que le dossier ne contient pas encore par ailleurs.
 *
 * Les deux millésimes de PIB diffèrent de 0,1 à 0,3 point — c'est écrit dans le
 * registre des sources du dossier. Le script vérifie donc, année par année, que
 * le croisement reste cohérent : reste positif, et `recettes − dépenses` égal
 * au déficit notifié à 0,1 point près. Il échoue plutôt que d'écrire un
 * graphique faux.
 */
import fs from 'node:fs'
import path from 'node:path'
import { execFileSync } from 'node:child_process'

const racine = path.join(import.meta.dirname, '..')
const AN0 = 1975
const AN1 = 2024

/* ------------------------------------------------ figure du chapitre */

/** Extrait un littéral d'objet d'un `data.ts` par sa clé, accolades équilibrées. */
function figure(fichier, cle) {
  const src = fs.readFileSync(path.join(racine, fichier), 'utf8')
  const depart = src.indexOf(`  '${cle}': {`)
  if (depart < 0) throw new Error(`figure introuvable : ${cle} dans ${fichier}`)
  let i = src.indexOf('{', depart)
  const ouverture = i
  let profondeur = 0
  let chaine = null
  for (; i < src.length; i++) {
    const c = src[i]
    if (chaine) {
      if (c === '\\') i++
      else if (c === chaine) chaine = null
      continue
    }
    if (c === "'" || c === '"' || c === '`') chaine = c
    else if (c === '{') profondeur++
    else if (c === '}' && --profondeur === 0) break
  }
  return new Function(`return ${src.slice(ouverture, i + 1)}`)()
}

const nature = figure('src/app/(chapitres)/dette-deficit/data.ts', 'depense-publique-par-nature-1975-2024').values

/* ------------------------------------------------------- classeur Insee */

/** Lit le classeur Insee sans dépendance : un .xlsx est un zip de XML. */
function classeur(fichier) {
  const lire = (membre) =>
    execFileSync('unzip', ['-p', path.join(racine, fichier), membre], { maxBuffer: 1 << 26 }).toString('utf8')
  const textes = [...lire('xl/sharedStrings.xml').matchAll(/<si>([\s\S]*?)<\/si>/g)].map((si) =>
    [...si[1].matchAll(/<t[^>]*>([\s\S]*?)<\/t>/g)].map((t) => t[1]).join(''),
  )
  const feuille = lire('xl/worksheets/sheet1.xml')
  const grille = {}
  for (const ligne of feuille.matchAll(/<row[^>]*>([\s\S]*?)<\/row>/g)) {
    for (const c of ligne[1].matchAll(/<c r="([A-Z]+)(\d+)"([^>]*)>([\s\S]*?)<\/c>/g)) {
      const type = /t="([^"]+)"/.exec(c[3])?.[1]
      const brut = /<v>([\s\S]*?)<\/v>/.exec(c[4])?.[1]
      if (brut === undefined) continue
      grille[`${c[1]}${c[2]}`] = type === 's' ? textes[+brut] : Number(brut)
    }
  }
  return grille
}

const grille = classeur('docs/insee-depenses-recettes-publiques-base-2020.xlsx')

/** Colonne de chaque année, d'après la ligne d'en-tête (« 2024 (sd) » compris). */
const colonnes = {}
for (const clef of Object.keys(grille)) {
  const m = /^([A-Z]+)4$/.exec(clef)
  if (!m) continue
  const an = parseInt(String(grille[clef]), 10)
  if (Number.isFinite(an)) colonnes[an] = m[1]
}

/**
 * Une ligne du classeur, repérée par le début de son libellé en colonne A — les
 * libellés portent des appels de note. `nulOk` accepte les années « nd » et les
 * rend en `null` : la dette brute ne commence qu'en 1978, et un trou se dessine
 * comme un trou, il ne s'invente pas.
 */
function ligne(libelle, nulOk = false) {
  const cellules = Object.keys(grille).filter((c) => /^A\d+$/.test(c))
  // L'égalité d'abord : « Dépenses » commence aussi le titre du classeur.
  const m = cellules.find((c) => grille[c] === libelle)
    ?? cellules.find((c) => String(grille[c]).startsWith(libelle))
  if (!m) throw new Error(`ligne introuvable dans le classeur : « ${libelle} »`)
  const n = m.slice(1)
  const out = []
  for (let an = AN0; an <= AN1; an++) {
    const v = grille[`${colonnes[an]}${n}`]
    if (typeof v !== 'number') {
      if (nulOk) { out.push(null); continue }
      throw new Error(`valeur manquante : ${libelle} ${an}`)
    }
    out.push(v)
  }
  return out
}

const depenses = ligne('Dépenses')
const recettes = ligne('Recettes')
const solde = ligne('Déficit au sens de Maastricht')
const dette = ligne('Dette des administrations publiques (brute)', true)

/**
 * Le PIB en valeur ouvre le second mode de lecture — les mêmes séries en
 * milliards d'euros courants. Il n'est pas dans le classeur des ratios : tant
 * qu'une ligne « Produit intérieur brut » (en Md€) n'y figure pas, le mode
 * reste fermé plutôt qu'approché.
 */
let pib = null
try {
  pib = ligne('Produit intérieur brut')
} catch {
  console.warn('PIB en valeur absent du classeur : le mode « en euros » restera fermé.')
}

/* ----------------------------------------------------------- contrôles */

const annees = []
for (let an = AN0; an <= AN1; an++) annees.push(an)
if (nature.x.length !== annees.length || nature.x[0] !== AN0 || nature.x.at(-1) !== AN1) {
  throw new Error('la figure du chapitre ne couvre plus exactement 1975-2024')
}

const cinq = annees.map((_, j) => nature.series.reduce((t, s) => t + s.values[j], 0))
const reste = annees.map((_, j) => depenses[j] - cinq[j])

for (const [j, an] of annees.entries()) {
  if (reste[j] <= 0) throw new Error(`reste négatif en ${an} : les deux sources ne se recoupent plus`)
  const ecart = Math.abs(recettes[j] - depenses[j] - solde[j])
  if (ecart > 0.1) throw new Error(`en ${an}, recettes − dépenses s'écarte du solde notifié de ${ecart.toFixed(2)} point`)
}

if (pib !== null) {
  // Garde-fou d'unité : le mode « en euros » attend des milliards d'euros
  // courants. Une série en millions donnerait un graphique juste au facteur
  // mille près, c'est-à-dire faux sans que rien ne le signale.
  const dernier = pib.at(-1)
  if (dernier < 1000 || dernier > 5000) {
    throw new Error(
      `PIB ${AN1} = ${dernier} : unité inattendue. Le mode « en euros » attend des milliards d'euros courants (ordre de grandeur 2 000 à 3 500).`,
    )
  }
}

const debutDette = dette.findIndex((v) => v !== null)
if (debutDette < 0) throw new Error('la dette brute est absente du classeur')
for (let j = debutDette; j < dette.length; j++) {
  if (dette[j] === null) throw new Error(`trou dans la dette en ${annees[j]} : la série n'est plus continue`)
}

/* -------------------------------------------------------------- sortie */

const r3 = (v) => Math.round(v * 1000) / 1000
const donnees = {
  annees,
  postes: nature.series.map((s) => ({
    cle: s.key,
    couleur: s.color,
    libelle: s.label,
    valeurs: s.values.map(r3),
  })),
  depenses: depenses.map(r3),
  recettes: recettes.map(r3),
  solde: solde.map(r3),
  dette: dette.map((v) => (v === null ? null : r3(v))),
  pib: pib === null ? null : pib.map(r3),
  mandats: nature.annotations.mandates.map((m) => ({
    libelle: m.label,
    de: r3(AN0 + m.from),
    a: r3(AN0 + m.to),
    bloc: m.bloc,
  })),
  cohabitations: (nature.annotations.cohabitations ?? []).map((c) => ({
    de: r3(AN0 + c.from),
    a: r3(AN0 + c.to),
  })),
}

const texte = `const DONNEES = ${JSON.stringify(donnees, null, 2)}\n`
const cible = path.join(racine, 'prototypes/depense-publique-1975-2024.html')
const html = fs.readFileSync(cible, 'utf8')
const debut = '/* @données */'
const fin = '/* @fin-données */'
const i = html.indexOf(debut)
const k = html.indexOf(fin)
if (i < 0 || k < 0) throw new Error('marqueurs de données introuvables dans le prototype')
fs.writeFileSync(cible, `${html.slice(0, i + debut.length)}\n${texte}${html.slice(k)}`)

console.log(
  `${annees.length} années écrites · reste de ${r3(Math.min(...reste))} à ${r3(Math.max(...reste))} point du PIB`
  + ` · dette de ${annees[debutDette]} à ${AN1}, de ${dette[debutDette]} à ${dette.at(-1)} % du PIB`,
)
