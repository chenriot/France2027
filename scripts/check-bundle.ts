/**
 * Budget de JavaScript par page de chapitre.
 *
 *   npm run check:bundle        (après `next build`)
 *
 * Additionne les scripts réellement référencés par le HTML prérendu d'une page
 * de chapitre, compressés comme un serveur les sert. C'est ce que télécharge un
 * lecteur, et ce n'est pas ce que Next 15 appelait « First Load JS » : ce
 * chiffre-là ne comptait qu'une partie des morceaux, ce qui a longtemps fait
 * croire le budget tenu alors qu'il ne l'était pas. Next 16 ne l'affiche plus
 * du tout — sans ce script, le budget cesserait d'être vérifié.
 *
 * Deux seuils, comme `check-data.ts` sépare invariants et dette :
 *
 *  - `TARGET_KB` — l'objectif de la spécification (§9, critère 9). Pas encore
 *    atteint : il suppose de sortir React du client sur les pages de lecture.
 *  - `CEILING_KB` — un cliquet. Il échoue si le poids augmente encore, ce qui
 *    empêche la dette de grandir sans empêcher de travailler.
 */
import { existsSync, readFileSync, statSync } from 'node:fs'
import { gzipSync } from 'node:zlib'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const PAGE = join(ROOT, '.next', 'server', 'app', 'logement.html')
const TARGET_KB = 120
const CEILING_KB = 172

if (!existsSync(PAGE)) {
  console.error('page prérendue introuvable — lancer `next build` d’abord')
  process.exit(1)
}

const html = readFileSync(PAGE, 'utf8')
const scripts = [...new Set([...html.matchAll(/src="(\/_next\/static\/[^"]+\.js)"/g)].map((m) => m[1]))]

let gzipped = 0
let raw = 0
for (const src of scripts) {
  const file = join(ROOT, '.next', src.replace('/_next/', ''))
  if (!existsSync(file)) continue
  raw += statSync(file).size
  gzipped += gzipSync(readFileSync(file), { level: 9 }).length
}

const kb = gzipped / 1024
console.log(
  `page de chapitre : ${scripts.length} scripts · ${kb.toFixed(1)} Ko compressés ` +
    `(${(raw / 1024).toFixed(0)} Ko bruts) · objectif ${TARGET_KB} Ko · cliquet ${CEILING_KB} Ko`,
)

if (kb > CEILING_KB) {
  console.error(
    `\ncliquet dépassé de ${(kb - CEILING_KB).toFixed(1)} Ko : le poids a augmenté.\n` +
      'Corriger, ou relever le cliquet en connaissance de cause dans ce script.',
  )
  process.exit(1)
}
if (kb > TARGET_KB) {
  console.log(
    `objectif non atteint : ${(kb - TARGET_KB).toFixed(1)} Ko de trop. ` +
      'Dette connue, voir DECISIONS.md §D11.',
  )
} else {
  console.log('objectif atteint')
}
