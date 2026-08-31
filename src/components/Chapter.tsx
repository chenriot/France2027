import type { ReactNode } from 'react'
import type { ChapterMeta } from '@/lib/types'
import type { RenderMode } from './bind'

/**
 * Enveloppe d'un chapitre : la section, son en-tête et son chapeau, dans le
 * balisage exact du document d'origine.
 */
export function Chapter({
  meta,
  mode = 'page',
  children,
}: {
  readonly meta: ChapterMeta
  readonly mode?: RenderMode
  readonly children: ReactNode
}) {
  return (
    <section className="sec" id={meta.legacyAnchor}>
      <div className="sec-head">
        <span className="sec-num">{meta.num}</span>
        <h2>{meta.title}</h2>
      </div>
      {meta.note ? (
        <p className="sec-note" dangerouslySetInnerHTML={{ __html: meta.note }} />
      ) : null}
      {children}
      {mode === 'page' ? <ChapterFooter meta={meta} /> : null}
    </section>
  )
}

/**
 * Pied de chapitre daté. Sur un dossier de chiffres, la fraîcheur est une
 * information de premier ordre. Omis en mode verbatim, où la page doit rester
 * comparable au document d'origine.
 */
function ChapterFooter({ meta }: { meta: ChapterMeta }) {
  return (
    <p className="chapfoot">
      <span>Mis à jour&nbsp;: {meta.updated}</span>
      {meta.status === 'partiel' ? (
        <span className="chapfoot-partial">
          Chapitre annoncé comme partiel par le document d’origine.
        </span>
      ) : null}
    </p>
  )
}
