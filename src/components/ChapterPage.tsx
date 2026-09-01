import type { ReactNode } from 'react'
import { Charte } from '@/components/charte/Charte'
import { Document } from '@/components/charte/Document'
import { ScrollSpy } from '@/components/client/ScrollSpy'
import { chapters } from '@/data/chapters'
import type { ChapterMeta } from '@/lib/types'
import { Chapter } from './Chapter'

/**
 * Page d'un chapitre, sous la charte.
 *
 * Le contenu du chapitre est rendu tel quel — même composant, même balisage
 * que sur `/tout`. Seules la coquille et la peau changent. C'est ce qui permet
 * de porter les vingt et un chapitres d'un seul geste, sans toucher à une
 * ligne de `content.tsx`.
 */
export function ChapterPage({
  meta,
  questions,
  children,
}: {
  readonly meta: ChapterMeta
  readonly questions: readonly { id: string; title: string }[]
  readonly children: ReactNode
}) {
  const index = chapters.findIndex((c) => c.slug === meta.slug)
  const previous = index > 0 ? chapters[index - 1] : undefined
  const next = index >= 0 && index < chapters.length - 1 ? chapters[index + 1] : undefined

  return (
    <>
      <Charte courant={`/${meta.slug}`}>
        <Document
          railTitle={meta.shortTitle}
          rail={questions.map((q) => ({ href: `#${q.id}`, label: q.title }))}
          liens={
            <>
              <a href="/">Sommaire du dossier</a>
              <a href="/sources">Toutes les sources</a>
              <a href="/tout">Document intégral</a>
            </>
          }
          precedent={previous ? { href: `/${previous.slug}`, label: previous.shortTitle } : undefined}
          suivant={next ? { href: `/${next.slug}`, label: next.shortTitle } : undefined}
        >
          <Chapter meta={meta}>{children}</Chapter>
        </Document>
      </Charte>
      <ScrollSpy />
    </>
  )
}
