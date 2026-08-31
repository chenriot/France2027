import type { Metadata } from 'next'
import { Bibliography } from '@/components/Bibliography'
import { Rail } from '@/components/Rail'
import { ScrollSpy } from '@/components/client/ScrollSpy'

export const metadata: Metadata = {
  title: 'Toutes les sources · Chiffres pour 2027',
  description:
    'Les références du dossier, générées depuis les données : chaque entrée indique les chapitres qui la citent.',
  alternates: { canonical: '/sources' },
}

export default function SourcesPage() {
  return (
    <div className="shell">
      <Rail />
      <main className="main" id="contenu">
        <Bibliography />
      </main>
      <ScrollSpy />
    </div>
  )
}
