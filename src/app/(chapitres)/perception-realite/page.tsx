import { ChapterPage } from '@/components/ChapterPage'
import { chapterMetadata } from '@/lib/metadata'
import Content from './content'
import { meta, questions } from './data'

export const metadata = chapterMetadata(meta)

export default function Page() {
  return (
    <ChapterPage meta={meta} questions={questions}>
      <Content />
    </ChapterPage>
  )
}
