/**
 * Non-régression de rendu.
 *
 *   npm run build && npm run check:render
 *
 * Compare le HTML prérendu de `/tout` au document d'origine, élément par
 * élément. C'est la vérification qui donne sa valeur à l'objectif « conserver
 * le rendu à l'identique » : sans elle, la promesse n'est qu'une intention.
 *
 * Trois différences de sérialisation sont neutralisées parce qu'elles
 * n'existent plus une fois le HTML analysé par un navigateur :
 *   - les entités (`&#x27;` et `'` sont le même caractère) ;
 *   - les balises auto-fermantes (`<line/>` et `<line></line>`) ;
 *   - la casse des noms d'attributs (`colSpan` et `colspan`).
 *
 * La bibliographie est exclue de la comparaison : celle du site est générée
 * depuis les données, alors que celle du document d'origine était tenue à la
 * main. C'est la seule différence assumée, et elle est le but de la refonte.
 */
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const ORIGINAL = join(ROOT, 'Temp', 'chiffres2027 (3).html')
const BUILT = join(ROOT, '.next', 'server', 'app', 'tout.html')

const ENTITIES: Record<string, string> = {
  '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"',
  '&#39;': "'", '&#x27;': "'", '&apos;': "'", '&nbsp;': ' ', '&#x2F;': '/',
}

const VOID_TAGS = ['line', 'rect', 'circle', 'polyline', 'path', 'i', 'br', 'hr', 'img', 'input']

function normalise(html: string): string {
  let s = html
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<script[\s\S]*?<\/script>/g, '')
    .replace(/\s+/g, ' ')
    .replace(/> </g, '><')
  s = s.replace(/&(?:amp|lt|gt|quot|#39|#x27|apos|nbsp|#x2F);/g, (m) => ENTITIES[m] ?? m)
  for (const t of VOID_TAGS) s = s.split(`></${t}>`).join('/>')
  s = s.replace(/\s*\/>/g, '/>')
  s = s.replace(/<(br|hr|img|input)>/g, '<$1/>')
  s = s.replace(/\s([a-zA-Z-]+)="/g, (_, name: string) => ` ${name.toLowerCase()}="`)
  return s.trim()
}

/** Le corps du document, chapitres seuls : la bibliographie est hors périmètre. */
function chapters(html: string): string {
  const start = html.indexOf('<main class="main">')
  const body = html.slice(start > 0 ? start : html.indexOf('<main'), html.lastIndexOf('</main>'))
  const bibliography = body.indexOf('<section class="sec" id="sources">')
  return normalise(bibliography > 0 ? body.slice(0, bibliography) : body)
}

/** Découpe en unités comparables : une balise, ou un fragment de texte. */
function tokens(s: string): string[] {
  return s.split(/(<[^>]+>)/).filter((t) => t.trim() !== '')
}

const original = tokens(chapters(readFileSync(ORIGINAL, 'utf8')))
const built = tokens(chapters(readFileSync(BUILT, 'utf8')))

console.log(`origine : ${original.length} éléments · site : ${built.length} éléments`)

const differences: string[] = []
const limit = Math.max(original.length, built.length)
for (let i = 0; i < limit && differences.length < 10; i++) {
  if (original[i] !== built[i]) {
    differences.push(
      `élément ${i}\n    origine : ${(original[i] ?? '(absent)').slice(0, 160)}\n    site    : ${(built[i] ?? '(absent)').slice(0, 160)}`,
    )
  }
}

if (original.length !== built.length || differences.length > 0) {
  console.error('\nle rendu a divergé du document d’origine :')
  for (const d of differences) console.error(`  - ${d}`)
  process.exit(1)
}

console.log('rendu identique au document d’origine : 21 chapitres, aucun écart')
