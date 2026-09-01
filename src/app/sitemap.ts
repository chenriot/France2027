import type { MetadataRoute } from 'next'
import { chapters } from '@/data/chapters'
import { SITE_URL } from '@/lib/site'

const BASE = SITE_URL

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date('2026-08-31')
  return [
    { url: BASE, lastModified: updated, priority: 1 },
    ...chapters.map((c) => ({
      url: `${BASE}/${c.slug}`,
      lastModified: updated,
      priority: c.kind === 'theme' ? 0.8 : 0.6,
    })),
    { url: `${BASE}/sources`, lastModified: updated, priority: 0.5 },
    { url: `${BASE}/tout`, lastModified: updated, priority: 0.5 },
  ]
}
