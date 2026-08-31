import type { ReactNode } from 'react'
import { chapters } from '@/data/chapters'
import type { ChapterMeta } from '@/lib/types'
import { Chapter } from './Chapter'
import { Rail } from './Rail'
import { ScrollSpy } from './client/ScrollSpy'

/** Page d'un chapitre : coquille, rail des fiches, section, navigation. */
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
    <div className="shell">
      <a className="skip" href="#contenu">
        Aller au contenu
      </a>
      <Rail
        title={meta.shortTitle}
        entries={questions.map((q) => ({ href: `#${q.id}`, label: q.title }))}
      />
      <main className="main" id="contenu">
        <Chapter meta={meta}>{children}</Chapter>
        <nav className="chapnav">
          {previous ? <a href={`/${previous.slug}`}>← {previous.shortTitle}</a> : <span />}
          {next ? <a href={`/${next.slug}`}>{next.shortTitle} →</a> : <span />}
        </nav>
      </main>
      <ScrollSpy />
    </div>
  )
}
