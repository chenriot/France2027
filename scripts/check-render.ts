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
 * main. C'est une différence assumée, et elle est le but de la refonte.
 *
 * S'y ajoutent les **corrections déclarées** dans `scripts/amendments.ts` :
 * des valeurs du document d'origine qui ne se reconstituaient pas depuis la
 * source citée. Seules ces substitutions-là sont tolérées, et chacune doit
 * être observée au moins une fois — une correction déclarée mais jamais
 * appliquée est une erreur au même titre qu'un écart non déclaré.
 */
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { divergences } from './amendments'

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

/** Corrections déclarées, comptées à mesure qu'on les rencontre. */
const declared = new Map<string, number>(divergences().map(([was, now]) => [`${was}\u0000${now}`, 0]))

const differences: string[] = []
let corrected = 0
const limit = Math.max(original.length, built.length)
for (let i = 0; i < limit; i++) {
  if (original[i] === built[i]) continue

  const key = `${original[i]}\u0000${built[i]}`
  const count = declared.get(key)
  if (count !== undefined) {
    declared.set(key, count + 1)
    corrected++
    continue
  }
  if (differences.length < 10) {
    differences.push(
      `élément ${i}\n    origine : ${(original[i] ?? '(absent)').slice(0, 160)}\n    site    : ${(built[i] ?? '(absent)').slice(0, 160)}`,
    )
  }
}

const unused = [...declared].filter(([, n]) => n === 0).map(([k]) => k.split('\u0000').join(' → '))

if (original.length !== built.length || differences.length > 0 || unused.length > 0) {
  if (differences.length > 0) {
    console.error('\nle rendu a divergé du document d’origine, hors corrections déclarées :')
    for (const d of differences) console.error(`  - ${d}`)
  }
  if (unused.length > 0) {
    console.error('\ncorrections déclarées mais jamais appliquées :')
    for (const u of unused) console.error(`  - ${u}`)
  }
  if (original.length !== built.length) {
    console.error(`\nnombre d’éléments : ${original.length} à l’origine, ${built.length} sur le site`)
  }
  process.exit(1)
}

console.log(
  `rendu identique au document d’origine : 21 chapitres, ` +
    `${corrected} corrections déclarées, aucun écart non déclaré`,
)
