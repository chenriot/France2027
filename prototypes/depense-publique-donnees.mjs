/*
 * Génère le bloc de données du prototype `depense-publique-1975-2024.html`.
 *
 *   node prototypes/depense-publique-donnees.mjs
 *
 * Aucun chiffre n'est saisi à la main, ici ni dans le prototype : tout est lu
 * dans le dépôt, puis réinjecté dans le fichier HTML entre ses deux marqueurs.
 * Relancer le script après une régénération des chapitres, ou après avoir
 * déposé un fichier dans `docs/`, suffit à remettre le prototype à jour.
 *
 * Trois origines, et c'est la seule chose à savoir avant de lire le graphique :
 *
 * - les cinq postes par nature viennent de la figure du chapitre « Dette et
 *   déficit » (Eurostat `nasa_10_nf_tr` et `gov_10a_main`, rebasés) ;
 * - la dépense totale, les recettes, le solde et la dette viennent du classeur
 *   Insee `docs/insee-depenses-recettes-publiques-base-2020.xlsx` (comptes
 *   nationaux annuels, base 2020) ;
 * - le PIB en valeur, qui ouvre la lecture en euros, est cherché dans tous les
 *   fichiers de `docs/`. Tant qu'il n'y est pas, ce mode reste fermé.
 *
 * Les deux premiers millésimes de PIB diffèrent de 0,1 à 0,3 point — c'est écrit
 * dans le registre des sources du dossier. Le script vérifie donc, année par
 * année, que le croisement tient : reste positif, `recettes − dépenses` égal au
 * déficit notifié à 0,1 point près, dette continue une fois commencée, PIB dans
 * une unité attendue. Il échoue plutôt que d'écrire un graphique faux.
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

/* ------------------------------------------------------- classeurs .xlsx */

/**
 * Lit un classeur sans dépendance : un .xlsx est un zip de XML. Rend la grille
 * des cellules et, pour chaque année trouvée dans l'en-tête, sa colonne — sans
 * présumer de la ligne d'en-tête, qui n'est pas au même endroit d'un fichier
 * de l'Insee à l'autre.
 */
function classeur(fichier) {
  const lire = (membre) =>
    execFileSync('unzip', ['-p', fichier, membre], { maxBuffer: 1 << 26 }).toString('utf8')
  let textes = []
  try {
    textes = [...lire('xl/sharedStrings.xml').matchAll(/<si>([\s\S]*?)<\/si>/g)].map((si) =>
      [...si[1].matchAll(/<t[^>]*>([\s\S]*?)<\/t>/g)].map((t) => t[1]).join(''),
    )
  } catch {
    /* un classeur sans chaînes partagées reste lisible */
  }
  const grille = {}
  for (const feuille of ['xl/worksheets/sheet1.xml']) {
    for (const ligne of lire(feuille).matchAll(/<row[^>]*>([\s\S]*?)<\/row>/g)) {
      for (const c of ligne[1].matchAll(/<c r="([A-Z]+)(\d+)"([^>]*)>([\s\S]*?)<\/c>/g)) {
        const type = /t="([^"]+)"/.exec(c[3])?.[1]
        const brut = /<v>([\s\S]*?)<\/v>/.exec(c[4])?.[1]
        if (brut === undefined) continue
        grille[`${c[1]}${c[2]}`] = type === 's' ? textes[+brut] : Number(brut)
      }
    }
  }

  // La ligne d'en-tête est celle qui porte le plus d'années plausibles.
  const parLigne = {}
  for (const [clef, v] of Object.entries(grille)) {
    const m = /^([A-Z]+)(\d+)$/.exec(clef)
    const an = parseInt(String(v), 10)
    if (an >= 1940 && an <= 2040) (parLigne[m[2]] ??= []).push([an, m[1]])
  }
  const entete = Object.values(parLigne).sort((a, b) => b.length - a.length)[0] ?? []
  const colonnes = Object.fromEntries(entete)
  return { grille, colonnes }
}

const principal = classeur(path.join(racine, 'docs/insee-depenses-recettes-publiques-base-2020.xlsx'))

/**
 * Une ligne d'un classeur, repérée par son libellé en colonne A — l'égalité
 * d'abord, car « Dépenses » commence aussi le titre du document, le début du
 * libellé ensuite, car ils portent des appels de note. `nulOk` accepte les
 * années « nd » et les rend en `null` : un trou se dessine comme un trou, il ne
 * s'invente pas.
 */
function ligne({ grille, colonnes }, libelle, nulOk = false) {
  const cellules = Object.keys(grille).filter((c) => /^A\d+$/.test(c))
  const m = cellules.find((c) => grille[c] === libelle)
    ?? cellules.find((c) => String(grille[c]).startsWith(libelle))
  if (!m) return null
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

function exige(classeur, libelle, nulOk = false) {
  const l = ligne(classeur, libelle, nulOk)
  if (!l) throw new Error(`ligne introuvable dans le classeur : « ${libelle} »`)
  return l
}

const depenses = exige(principal, 'Dépenses')
const recettes = exige(principal, 'Recettes')
const solde = exige(principal, 'Déficit au sens de Maastricht')
const dette = exige(principal, 'Dette des administrations publiques (brute)', true)

/* --------------------------------------------------------- PIB en valeur
   Il ouvre la lecture en euros. On le cherche dans tous les fichiers déposés
   dans `docs/` plutôt que dans un seul, pour que déposer le téléchargement de
   l'Insee suffise, quel qu'en soit le nom. */

/** Un CSV à deux colonnes, « année ; valeur », accepté en dernier recours. */
function csv(fichier) {
  const lignes = fs.readFileSync(fichier, 'utf8').split(/\r?\n/)
  const par = {}
  for (const l of lignes) {
    const [a, v] = l.split(/[;,\t]/)
    const an = parseInt(a, 10)
    const val = parseFloat(String(v ?? '').replace(',', '.').replace(/\s/g, ''))
    if (an >= 1940 && an <= 2040 && Number.isFinite(val)) par[an] = val
  }
  const out = []
  for (let an = AN0; an <= AN1; an++) {
    if (par[an] === undefined) return null
    out.push(par[an])
  }
  return out
}

function chercherPib() {
  const dossier = path.join(racine, 'docs')
  for (const nom of fs.readdirSync(dossier).sort()) {
    const chemin = path.join(dossier, nom)
    if (nom.endsWith('.xlsx')) {
      let c
      try { c = classeur(chemin) } catch { continue }
      for (const libelle of ['Produit intérieur brut', 'PIB']) {
        let l
        try { l = ligne(c, libelle) } catch { continue }
        if (l) return { valeurs: l, source: nom, libelle }
      }
    } else if (nom.endsWith('.csv')) {
      const l = csv(chemin)
      if (l) return { valeurs: l, source: nom, libelle: 'colonnes année ; valeur' }
    }
  }
  return null
}

let pib = null
const trouve = chercherPib()
if (trouve) {
  const dernier = trouve.valeurs.at(-1)
  // Unité : l'Insee publie tantôt des milliards, tantôt des millions d'euros.
  // Une série en millions donnerait un graphique faux d'un facteur mille sans
  // que rien ne le signale : on convertit, ou on refuse.
  let facteur = 1
  if (dernier > 1e6 && dernier < 5e6) facteur = 1e-3
  else if (dernier < 1000 || dernier > 5000) {
    throw new Error(
      `PIB ${AN1} = ${dernier} dans ${trouve.source} : unité inattendue. Attendu des milliards d'euros courants (ordre de grandeur 2 000 à 3 500) ou des millions.`,
    )
  }
  pib = trouve.valeurs.map((v) => v * facteur)
  console.log(`PIB en valeur lu dans docs/${trouve.source} (« ${trouve.libelle} »)`
    + `${facteur === 1 ? '' : ', converti des millions en milliards'} : ${pib[0].toFixed(1)} Md€ en ${AN0}, ${pib.at(-1).toFixed(1)} Md€ en ${AN1}.`)
} else {
  console.warn('PIB en valeur absent de docs/ : le mode « en euros » restera fermé.')
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

const debutDette = dette.findIndex((v) => v !== null)
if (debutDette < 0) throw new Error('la dette brute est absente du classeur')
for (let j = debutDette; j < dette.length; j++) {
  if (dette[j] === null) throw new Error(`trou dans la dette en ${annees[j]} : la série n'est plus continue`)
}

if (pib) {
  // Un PIB en valeur croît presque toujours : une chute de plus de 5 % en
  // euros courants trahirait une série en volume, ou un mauvais raccord.
  for (let j = 1; j < pib.length; j++) {
    const taux = pib[j] / pib[j - 1] - 1
    if (taux < -0.05) {
      throw new Error(`PIB ${annees[j]} : ${(taux * 100).toFixed(1)} % en un an. Série attendue en euros courants, pas en volume.`)
    }
  }
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
  + ` · dette de ${annees[debutDette]} à ${AN1}, de ${dette[debutDette]} à ${dette.at(-1)} % du PIB`
  + ` · lecture en euros ${pib ? 'ouverte' : 'fermée'}`,
)
