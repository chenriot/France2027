/**
 * Export du document intégral en un fichier HTML autonome.
 *
 *   npm run export:html      → .artifacts/chiffres-2027.html
 *
 * Reprend le rendu prérendu de `/tout`, y intègre les feuilles de style, et
 * retire les deux commandes qui n'ont pas de sens hors du site — la recherche
 * et la bascule de thème sont des composants client, inertes dans un fichier
 * figé. Le reste est le document tel qu'il s'affiche en ligne : le sommaire
 * latéral et ses ancres fonctionnent, l'impression aussi.
 *
 * Sert à partager, archiver ou déposer le dossier là où un site ne va pas.
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { chapters } from '../src/data/chapters'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const BUILT = join(ROOT, '.next', 'server', 'app', 'tout.html')
const HOME = join(ROOT, '.next', 'server', 'app', 'index.html')
const OUT = join(ROOT, '.artifacts', 'chiffres-2027.html')

const FONTS =
  'https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;' +
  '0,6..72,600;1,6..72,400&family=IBM+Plex+Mono:wght@400;500;600&' +
  'family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap'

function stylesheet(name: string): string {
  return readFileSync(join(ROOT, 'src', 'styles', `${name}.css`), 'utf8')
}

const page = readFileSync(BUILT, 'utf8')
const start = page.indexOf('<div class="shell">')
const end = page.lastIndexOf('</div>') + '</div>'.length
if (start < 0) throw new Error('rendu de /tout introuvable — lancer `next build` d’abord')

let body = page.slice(start, end)

// Le sommaire de l'accueil ouvre le fichier : sans lui, on tombe directement
// dans la synthèse sans savoir ce que contient le dossier ni où aller.
const home = readFileSync(HOME, 'utf8')
const tocStart = home.indexOf('<section class="sec" id="sommaire">')
if (tocStart < 0) throw new Error('sommaire introuvable dans le rendu de /')
const tocEnd = home.indexOf('</section>', tocStart) + '</section>'.length
const contents = home.slice(tocStart, tocEnd)

const afterMasthead = body.indexOf('</header>') + '</header>'.length
if (afterMasthead <= '</header>'.length) throw new Error('en-tête introuvable dans le rendu de /tout')
body = body.slice(0, afterMasthead) + contents + body.slice(afterMasthead)

// Commandes client, inertes dans un fichier figé : mieux vaut les retirer
// qu'afficher un champ de recherche qui ne cherche rien.
body = body
  .replace(/<input class="filter"[^>]*>/g, '')
  .replace(/<div class="toolbar">[\s\S]*?<\/div>/g, '')
  .replace(/<!--[\s\S]*?-->/g, '')

// Tout le dossier tient dans ce fichier : un lien vers `/logement` doit donc
// pointer sur la section, pas sur une adresse qui n'existe pas hors du site.
for (const chapter of chapters) {
  body = body.split(`href="/${chapter.slug}"`).join(`href="#${chapter.legacyAnchor}"`)
}
body = body.split('href="/sources"').join('href="#sources"')
// « Document intégral » : c'est le fichier lui-même, donc son début.
body = body.split('href="/tout"').join('href="#top"')

const remaining = body.match(/href="\/[a-z][^"]*"/g)
if (remaining) {
  throw new Error(`liens non résolus dans le fichier autonome : ${[...new Set(remaining)].join(', ')}`)
}

const html = `<title>Chiffres pour 2027</title>
<span id="top"></span>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${FONTS}">
<style>
${stylesheet('tokens')}
${stylesheet('base')}
${stylesheet('print')}
</style>
${body}
`

mkdirSync(dirname(OUT), { recursive: true })
writeFileSync(OUT, html)

const sections = (html.match(/<section class="sec"/g) ?? []).length - 1 // hors sommaire
const questions = (html.match(/<div class="q"/g) ?? []).length
console.log(`écrit ${OUT}`)
console.log(`${sections} sections · ${questions} fiches · ${Math.round(html.length / 1024)} Ko`)
