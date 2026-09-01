import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { SITE } from '@/lib/metadata'
import { SITE_URL } from '@/lib/site'
import '@/styles/tokens.css'
import '@/styles/base.css'
import '@/styles/site.css'
import '@/styles/print.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE.name, template: `%s` },
  description: SITE.description,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        {/* Polices reprises telles quelles du document d'origine : le CSS,
            conservé verbatim, appelle les familles par leur nom réel. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
