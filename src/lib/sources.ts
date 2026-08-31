import { sources } from '@/data/sources'
import type { SourceId } from '@/data/sources'
import type { Figure, Table } from './types'

export type { SourceId }
export { sources }

export interface Citation {
  readonly id: SourceId
  readonly chapters: readonly string[]
}

/**
 * Recense les sources effectivement citées par les 21 chapitres.
 *
 * La bibliographie en est dérivée : elle n'est jamais recopiée, et une source
 * déclarée mais jamais citée est signalée par `check-data.ts`.
 */
export function collectCitations(
  chapters: readonly {
    readonly slug: string
    readonly tables: Readonly<Record<string, Table>>
    readonly series: Readonly<Record<string, Figure>>
    readonly citedSources?: readonly SourceId[]
  }[],
): Map<SourceId, Set<string>> {
  const cited = new Map<SourceId, Set<string>>()
  const add = (id: SourceId, slug: string) => {
    const set = cited.get(id) ?? new Set<string>()
    set.add(slug)
    cited.set(id, set)
  }
  for (const chapter of chapters) {
    for (const t of Object.values(chapter.tables)) for (const id of t.sources) add(id, chapter.slug)
    for (const f of Object.values(chapter.series)) for (const id of f.sources) add(id, chapter.slug)
    for (const id of chapter.citedSources ?? []) add(id, chapter.slug)
  }
  return cited
}

/** Libellé de regroupement de la bibliographie. */
export function producerOf(id: SourceId): string {
  return sources[id].producer
}
