import { allChapters } from '@/data/all'
import { sources } from '@/data/sources'
import type { SourceId } from '@/data/sources'
import { collectCitations } from '@/lib/sources'

/**
 * Bibliographie générée.
 *
 * Elle n'est écrite nulle part : elle se déduit des `sources` déclarées par les
 * 286 tableaux et les 55 figures. Une source déclarée mais jamais citée est
 * signalée par `check-data.ts` ; une source citée mais non déclarée ne compile
 * pas — `SourceId` est l'union des clés du registre.
 */
export function Bibliography() {
  const cited = collectCitations(
    allChapters.map((c) => ({
      slug: c.meta.slug,
      tables: c.tables,
      series: c.series,
      citedSources: c.citedSources,
    })),
  )

  // Regroupées par producteur, le plus cité d'abord : la bibliographie devient
  // une carte de la dépendance documentaire du dossier.
  const byProducer = new Map<string, SourceId[]>()
  for (const id of [...cited.keys()].sort()) {
    const producer = sources[id].producer
    byProducer.set(producer, [...(byProducer.get(producer) ?? []), id])
  }
  const groups = [...byProducer.entries()].sort(
    (a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0], 'fr'),
  )
  const titleOf = (slug: string) =>
    allChapters.find((c) => c.meta.slug === slug)?.meta.shortTitle ?? slug

  return (
    <section className="sec" id="sources">
      <div className="sec-head">
        <span className="sec-num">Bibliographie</span>
        <h2>Toutes les sources</h2>
      </div>
      <p className="sec-note">
        {cited.size} références, générées depuis les {allChapters.length} fichiers de données —
        jamais recopiées. Chaque entrée indique les chapitres qui la citent. Les organismes engagés
        dans le débat public sont signalés&nbsp;: ils ne sont cités qu’à défaut de source publique.
      </p>

      {groups.map(([producer, ids]) => (
        <div className="srcgroup" key={producer}>
          <h3>
            {producer} · {ids.length}
          </h3>
          <ul className="srclist">
            {ids.map((id) => (
              <li key={id}>
                <span dangerouslySetInnerHTML={{ __html: sources[id].text }} />
                {sources[id].engaged ? (
                  <span className="cited engaged">
                    Organisme engagé dans le débat public, cité à défaut de source publique.
                  </span>
                ) : null}
                <span className="cited">
                  Cité par&nbsp;:{' '}
                  {[...(cited.get(id) ?? [])].map((slug, i) => (
                    <span key={slug}>
                      {i > 0 ? ', ' : ''}
                      <a href={`/${slug}`}>{titleOf(slug)}</a>
                    </span>
                  ))}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
