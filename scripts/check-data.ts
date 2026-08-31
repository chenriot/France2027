/**
 * Audit des données du dossier.
 *
 *   npm run check:data          (exécuté par `npm run build`)
 *
 * Sépare volontairement deux choses :
 *
 *  - les **invariants**, qui font échouer le build. Une source citée mais
 *    absente du registre, une ligne plus large que ses colonnes, une série
 *    dont les valeurs ne correspondent pas aux abscisses : ce sont des
 *    incohérences, pas des arbitrages.
 *  - la **dette de migration**, qui est rapportée sans bloquer : millésimes à
 *    confirmer, figures dont le tracé n'a pas encore été régénéré. Ce sont des
 *    chantiers connus ; les cacher serait pire que les compter.
 *
 * Écrit `.artifacts/audit.json` : pour chaque chapitre, ses tableaux et ses
 * séries, leurs sources et leurs millésimes. C'est le fichier qu'on ouvre
 * quand quelqu'un conteste un chiffre.
 */
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { allChapters } from '../src/data/all'
import { sources } from '../src/data/sources'
import type { SourceId } from '../src/data/sources'
import { isRawFigure } from '../src/lib/types'
import type { Figure, Table } from '../src/lib/types'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const VINTAGE_TODO = 'à confirmer'

const errors: string[] = []
const debt: string[] = []
const cited = new Set<string>()

interface AuditEntry {
  readonly kind: 'table' | 'figure'
  readonly id: string
  readonly title?: string
  readonly vintage: string
  readonly sources: readonly string[]
  readonly rows?: number
  readonly values?: number
  readonly rendering?: 'régénéré' | 'tracé d’origine' | 'non converti'
}

const audit: Record<string, { readonly title: string; readonly entries: AuditEntry[] }> = {}

function checkSources(where: string, ids: readonly SourceId[]): void {
  if (ids.length === 0) {
    errors.push(`${where} : aucune source déclarée`)
    return
  }
  for (const id of ids) {
    if (!(id in sources)) errors.push(`${where} : source inconnue « ${id} »`)
    cited.add(id)
  }
}

function auditTable(slug: string, id: string, t: Table): AuditEntry {
  const where = `${slug}/tables/${id}`
  checkSources(where, t.sources)
  if (t.vintage === VINTAGE_TODO) debt.push(`${where} : millésime à confirmer`)

  const width = t.columns.length
  for (const [r, row] of t.rows.entries()) {
    const span = row.cells.reduce((n, c) => n + (c !== null && 'cs' in c && c.cs ? c.cs : 1), 0)
    if (span > width) {
      errors.push(`${where} : ligne ${r + 1} occupe ${span} colonnes pour ${width} déclarées`)
    }
  }
  for (const row of t.rows) {
    for (const cell of row.cells) {
      if (cell !== null && 'v' in cell && !Number.isFinite(cell.v)) {
        errors.push(`${where} : valeur non finie`)
      }
    }
  }
  return { kind: 'table', id, title: t.title, vintage: t.vintage, sources: t.sources, rows: t.rows.length }
}

function auditFigure(slug: string, id: string, f: Figure): AuditEntry {
  const where = `${slug}/series/${id}`
  checkSources(where, f.sources)
  if (f.vintage === VINTAGE_TODO) debt.push(`${where} : millésime à confirmer`)

  const values = isRawFigure(f) ? f.values : f
  if (isRawFigure(f)) {
    debt.push(
      values
        ? `${where} : valeurs lues, tracé d'origine conservé`
        : `${where} : figure non convertie`,
    )
  }
  if (values) {
    for (const s of values.series) {
      if (s.values.length !== values.x.length) {
        errors.push(
          `${where} : série « ${s.key} » a ${s.values.length} valeurs pour ${values.x.length} abscisses`,
        )
      }
    }
  }
  return {
    kind: 'figure',
    id,
    title: f.title,
    vintage: f.vintage,
    sources: f.sources,
    values: values ? values.series.reduce((n, s) => n + s.values.length, 0) : 0,
    rendering: isRawFigure(f) ? (values ? 'tracé d’origine' : 'non converti') : 'régénéré',
  }
}

for (const chapter of allChapters) {
  const { slug, title } = chapter.meta
  const entries: AuditEntry[] = []
  for (const [id, table] of Object.entries(chapter.tables)) entries.push(auditTable(slug, id, table))
  for (const [id, figure] of Object.entries(chapter.series)) entries.push(auditFigure(slug, id, figure))
  for (const id of chapter.citedSources) checkSources(`${slug}/prose`, [id])
  audit[slug] = { title, entries }
}

const orphans = Object.keys(sources).filter((id) => !cited.has(id))
for (const id of orphans) debt.push(`source déclarée jamais citée : ${id}`)

mkdirSync(join(ROOT, '.artifacts'), { recursive: true })
writeFileSync(
  join(ROOT, '.artifacts', 'audit.json'),
  JSON.stringify(
    {
      generated: new Date().toISOString().slice(0, 10),
      chapters: audit,
      sources: Object.fromEntries(
        Object.entries(sources).map(([id, s]) => [
          id,
          { producer: s.producer, kind: s.kind, engaged: s.engaged ?? false, cited: cited.has(id) },
        ]),
      ),
      debt,
    },
    null,
    2,
  ),
)

const tables = Object.values(audit).reduce((n, c) => n + c.entries.filter((e) => e.kind === 'table').length, 0)
const figures = Object.values(audit).reduce((n, c) => n + c.entries.filter((e) => e.kind === 'figure').length, 0)

console.log(`audit : ${allChapters.length} chapitres, ${tables} tableaux, ${figures} figures`)
console.log(`sources : ${cited.size} citées sur ${Object.keys(sources).length} déclarées`)
console.log(`dette de migration : ${debt.length} points (détail dans .artifacts/audit.json)`)

if (errors.length > 0) {
  console.error(`\n${errors.length} incohérence(s) — le build s'arrête :`)
  for (const e of errors.slice(0, 30)) console.error(`  - ${e}`)
  process.exit(1)
}
console.log('invariants : tous vérifiés')
