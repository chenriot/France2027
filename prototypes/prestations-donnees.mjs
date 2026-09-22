/*
 * Génère le bloc de données du prototype `prestations-sociales-2024.html`.
 *
 *   node prototypes/prestations-donnees.mjs
 *
 * Aucun chiffre n'est saisi ici : tout vient du chapitre « Dépenses publiques
 * et prélèvements », qui porte déjà la ventilation des prestations sociales sur
 * deux niveaux — six risques dans une figure, puis le détail de chaque risque
 * dans son tableau.
 *
 * Ce que ce script déclare, en revanche, c'est **quelles lignes retenir** :
 * les tableaux du dossier mêlent des postes et leurs sous-postes, et un total
 * intermédiaire (« Total aides au logement ») qui compterait deux fois. La
 * sélection est donc explicite, ligne par ligne, et le script échoue si l'une
 * d'elles disparaît du chapitre — plutôt que de dessiner un graphique amputé
 * sans le dire.
 *
 * Les postes nommés ne couvrent pas tout un risque : le reste est laissé en
 * clair dans la barre, jamais complété par une valeur inventée.
 */
import fs from 'node:fs'
import path from 'node:path'

const racine = path.join(import.meta.dirname, '..')
const CHAPITRE = 'src/app/(chapitres)/depenses-publiques/data.ts'
const src = fs.readFileSync(path.join(racine, CHAPITRE), 'utf8')

/** Extrait un littéral d'objet du `data.ts` par sa clé, accolades équilibrées. */
function bloc(cle) {
  const depart = src.indexOf(`  '${cle}': {`)
  if (depart < 0) throw new Error(`introuvable dans le chapitre : ${cle}`)
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

const sansBalises = (s) => String(s).replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()

/**
 * Le montant d'une cellule, en milliards d'euros. Le dossier écrit tantôt une
 * valeur chiffrée, tantôt une phrase — « 45,6 Md€ (89,1 %) » — quand la cellule
 * porte aussi une évolution. Les deux sont acceptées ; rien d'autre.
 */
function montant(cellule, ou) {
  if (cellule && 'v' in cellule) {
    if (cellule.u && cellule.u !== 'Md€') throw new Error(`unité inattendue (${cellule.u}) : ${ou}`)
    return cellule.v
  }
  const m = /^\s*(\d+(?:,\d+)?)\s*Md€/.exec(sansBalises(cellule?.t ?? ''))
  if (!m) throw new Error(`montant illisible : ${ou} — « ${sansBalises(cellule?.t ?? '')} »`)
  return parseFloat(m[1].replace(',', '.'))
}

/** Un poste d'un tableau du chapitre, repéré par son libellé exact. */
function poste(tableau, libelle, cle) {
  const ligne = tableau.rows.find((r) => sansBalises(r.cells[0].t ?? '') === libelle)
  if (!ligne) throw new Error(`ligne « ${libelle} » absente du tableau ${cle}`)
  return { libelle, montant: montant(ligne.cells[1], `${cle} / ${libelle}`) }
}

/* ---------------------------------------------------- le premier niveau */

const figure = bloc('les-prestations-sociales-par-risque').values ?? bloc('les-prestations-sociales-par-risque')
const risquesFigure = figure.x.map((libelle, i) => ({ libelle, montant: figure.series[0].values[i] }))

/* -------------------------------------------------- le second niveau
   Pour chaque risque : le tableau du chapitre et les lignes à retenir. Les
   sous-postes préfixés d'un tiret cadratin sont écartés — ils détaillent la
   ligne au-dessus et compteraient deux fois —, de même que « Total aides au
   logement », qui est un sous-total. */
const DETAIL = {
  'Vieillesse et survie': {
    tableau: 'vieillesse-et-survie-426-7-md',
    lignes: [
      'Droits directs (pensions de retraite)',
      'Droits dérivés (réversion)',
      'Dépendance et perte d\'autonomie',
      'Minimum vieillesse et ASPA',
    ],
  },
  'Santé (maladie, invalidité, AT-MP)': {
    tableau: 'sante-338-9-md',
    lignes: [
      'Soins de santé (prestation en nature)',
      'Accueil, accompagnement et hébergement du handicap',
      'Indemnités journalières (en espèces)',
      'Médico-social personnes âgées',
      'AAH',
      'Pensions et rentes d\'invalidité',
      'Pensions et rentes accidents du travail',
      'Prestation de compensation du handicap',
    ],
  },
  Famille: {
    tableau: 'famille-65-8-md',
    lignes: [
      'Allocations familiales',
      'Aide sociale à l\'enfance',
      'Crèches et modes d\'accueil (en nature)',
      'Accueil du jeune enfant (PAJE)',
      'Maternité',
      'Allocation de rentrée scolaire',
    ],
  },
  'Emploi et chômage': {
    tableau: 'emploi-et-chomage-51-1-md',
    lignes: ['Indemnisation du chômage', 'Insertion et réinsertion professionnelle'],
  },
  'Pauvreté et exclusion': {
    tableau: 'pauvrete-exclusion-et-logement-50-1-md',
    lignes: [
      'RSA',
      'Prime d\'activité',
      'Bourses de l\'enseignement supérieur',
      'Prestations des CCAS et CIAS',
      'Chèque énergie',
    ],
  },
  Logement: {
    tableau: 'pauvrete-exclusion-et-logement-50-1-md',
    lignes: ['APL', 'ALS', 'ALF'],
  },
}

/* Les couleurs suivent l'ordre décroissant des montants ; la sixième est
   l'accent du dossier, les cinq premières ses cinq tons de série. */
const COULEURS = ['s1', 's3', 's4', 's2', 's5', 'accent']

const risques = risquesFigure
  .slice()
  .sort((a, b) => b.montant - a.montant)
  .map((r, i) => {
    const d = DETAIL[r.libelle]
    if (!d) throw new Error(`aucun détail déclaré pour le risque « ${r.libelle} »`)
    const tableau = bloc(d.tableau)
    const postes = d.lignes.map((l) => poste(tableau, l, d.tableau)).sort((a, b) => b.montant - a.montant)
    const somme = postes.reduce((t, p) => t + p.montant, 0)
    if (somme > r.montant + 0.5) {
      throw new Error(`« ${r.libelle} » : les postes retenus font ${somme.toFixed(1)} Md€ pour un risque de ${r.montant.toFixed(1)} — double compte probable`)
    }
    return {
      cle: 'r' + (i + 1),
      libelle: r.libelle,
      couleur: COULEURS[i],
      montant: Math.round(r.montant * 1000) / 1000,
      detaille: Math.round(somme * 1000) / 1000,
      postes: postes.map((p) => ({ ...p, montant: Math.round(p.montant * 1000) / 1000 })),
      source: d.tableau,
    }
  })

const total = risques.reduce((t, r) => t + r.montant, 0)

/* ----------------------------------------------------------- contrôles */

if (Math.abs(total - 932.5) > 1) {
  throw new Error(`total des risques : ${total.toFixed(1)} Md€. La figure du chapitre ne dit plus la même chose.`)
}
for (const r of risques) {
  if (r.postes.length === 0) throw new Error(`« ${r.libelle} » sans aucun poste retenu`)
  if (r.detaille / r.montant < 0.5) {
    console.warn(`  ⚠ « ${r.libelle} » : ${(100 * r.detaille / r.montant).toFixed(0)} % seulement du risque est détaillé.`)
  }
}

/* -------------------------------------------------------------- sortie */

const donnees = {
  annee: figure.vintage ?? '2024',
  total: Math.round(total * 1000) / 1000,
  risques,
  /* Les trois risques qui occupent le débat public, nommés une fois ici pour
     que le prototype n'ait pas à les deviner. */
  debat: ['Emploi et chômage', 'Pauvreté et exclusion', 'Logement'],
  sommet: ['Vieillesse et survie', 'Santé (maladie, invalidité, AT-MP)'],
}

const texte = `const DONNEES = ${JSON.stringify(donnees, null, 2)}\n`
const cible = path.join(racine, 'prototypes/prestations-sociales-2024.html')
const html = fs.readFileSync(cible, 'utf8')
const debut = '/* @données */'
const fin = '/* @fin-données */'
const i = html.indexOf(debut)
const k = html.indexOf(fin)
if (i < 0 || k < 0) throw new Error('marqueurs de données introuvables dans le prototype')
fs.writeFileSync(cible, `${html.slice(0, i + debut.length)}\n${texte}${html.slice(k)}`)

console.log(`${risques.length} risques, ${risques.reduce((t, r) => t + r.postes.length, 0)} postes, ${total.toFixed(1)} Md€ au total`)
for (const r of risques) {
  console.log(`  ${r.libelle.padEnd(36)} ${r.montant.toFixed(1).padStart(6)} Md€ · ${r.postes.length} postes détaillés (${(100 * r.detaille / r.montant).toFixed(0)} %)`)
}
