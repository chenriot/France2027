import type { Metadata } from 'next'
import { Bibliography } from '@/components/Bibliography'
import { Charte } from '@/components/charte/Charte'
import { Document } from '@/components/charte/Document'
import { chapters } from '@/data/chapters'

export const metadata: Metadata = {
  title: 'Toutes les sources · Chiffres pour 2027',
  description:
    'Les références du dossier, générées depuis les données : chaque entrée indique les chapitres qui la citent.',
  alternates: { canonical: '/sources' },
}

/**
 * La bibliographie, sous la charte. Le composant `Bibliography` est inchangé :
 * il se déduit toujours des sources déclarées par les tableaux et les figures.
 */
export default function SourcesPage() {
  return (
    <Charte courant="/sources">
      <Document
        railTitle="Le dossier"
        rail={chapters.map((c) => ({ href: `/${c.slug}`, label: c.shortTitle }))}
        liens={
          <>
            <a href="/">Sommaire du dossier</a>
            <a href="/tout">Document intégral</a>
          </>
        }
      >
        <Bibliography />
      </Document>
    </Charte>
  )
}
