import type { Metadata } from 'next'
import type { ChapterMeta } from './types'

export const SITE = {
  name: 'Chiffres pour 2027',
  description:
    'Réponses documentées à plus de deux cent cinquante questions sur les finances publiques, ' +
    'les retraites, l’immigration, l’énergie, la sécurité, le logement et l’école — avec la ' +
    'source, l’année de référence et ce que le chiffre ne dit pas.',
} as const

export function chapterMetadata(meta: ChapterMeta): Metadata {
  const title = `${meta.title} · ${SITE.name}`
  const description = meta.note ?? SITE.description
  return {
    title,
    description,
    alternates: { canonical: `/${meta.slug}` },
    openGraph: { title, description, type: 'article' },
  }
}
