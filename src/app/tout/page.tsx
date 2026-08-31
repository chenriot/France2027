import type { Metadata } from 'next'
import { Chapter } from '@/components/Chapter'
import { Masthead } from '@/components/Masthead'
import { ScrollSpy } from '@/components/client/ScrollSpy'
import { Search } from '@/components/client/Search'
import { ThemeToggle } from '@/components/client/ThemeToggle'
import { Bibliography } from '@/components/Bibliography'
import { allChapters } from '@/data/all'
import CommerceExterieur from '@/app/(chapitres)/commerce-exterieur/content'
import Demographie from '@/app/(chapitres)/demographie/content'
import DepensesPubliques from '@/app/(chapitres)/depenses-publiques/content'
import DetteDeficit from '@/app/(chapitres)/dette-deficit/content'
import EcologieClimat from '@/app/(chapitres)/ecologie-climat/content'
import Education from '@/app/(chapitres)/education/content'
import EfficaciteEtat from '@/app/(chapitres)/efficacite-etat/content'
import EmploiChomage from '@/app/(chapitres)/emploi-chomage/content'
import Energie from '@/app/(chapitres)/energie/content'
import Europe from '@/app/(chapitres)/europe/content'
import ExpliqueSimplement from '@/app/(chapitres)/explique-simplement/content'
import GrillePromesses from '@/app/(chapitres)/grille-promesses/content'
import Immigration from '@/app/(chapitres)/immigration/content'
import Industrie from '@/app/(chapitres)/industrie/content'
import Logement from '@/app/(chapitres)/logement/content'
import NiveauDeVie from '@/app/(chapitres)/niveau-de-vie/content'
import PerceptionRealite from '@/app/(chapitres)/perception-realite/content'
import RetraitesTravail from '@/app/(chapitres)/retraites-travail/content'
import Sante from '@/app/(chapitres)/sante/content'
import SecuriteJustice from '@/app/(chapitres)/securite-justice/content'
import Synthese from '@/app/(chapitres)/synthese/content'

export const metadata: Metadata = {
  title: 'Document intégral · Chiffres pour 2027',
  description: 'Les 21 chapitres sur une page, pour la lecture linéaire, l’impression et l’archivage.',
  alternates: { canonical: '/tout' },
}

/**
 * Ordre du sommaire, aligné sur `allChapters`. C'est cette page qui sert de
 * référence de non-régression : elle reconstitue le document d'origine, et les
 * chapitres y sont rendus en mode verbatim — sans pied de chapitre ni tableau
 * de données replié, qui sont des ajouts propres aux pages de lecture.
 */
const CONTENTS = [
  Synthese,
  DepensesPubliques,
  DetteDeficit,
  RetraitesTravail,
  EmploiChomage,
  Industrie,
  CommerceExterieur,
  Immigration,
  EcologieClimat,
  Energie,
  Europe,
  Sante,
  SecuriteJustice,
  Logement,
  Education,
  NiveauDeVie,
  EfficaciteEtat,
  Demographie,
  PerceptionRealite,
  GrillePromesses,
  ExpliqueSimplement,
]

export default function Tout() {
  return (
    <div className="shell">
      <nav className="rail" aria-label="Sommaire">
        <p className="rail-title">Sommaire</p>
        <Search />
        <div className="extra top">
          <a href="#synth">Synthèse et commentaire</a>
        </div>
        <ol id="toc">
          {allChapters
            .filter((c) => c.meta.legacyAnchor !== 'synth')
            .map((c) => (
              <li key={c.meta.slug}>
                <a href={`#${c.meta.legacyAnchor}`}>{c.meta.shortTitle}</a>
              </li>
            ))}
        </ol>
        <div className="extra">
          <a href="#sources">Toutes les sources</a>
        </div>
        <div className="toolbar">
          <ThemeToggle />
        </div>
      </nav>

      <main className="main">
        <Masthead />
        {allChapters.map((chapter, i) => {
          const Content = CONTENTS[i]
          return (
            <Chapter key={chapter.meta.slug} meta={chapter.meta} mode="verbatim">
              <Content mode="verbatim" />
            </Chapter>
          )
        })}
        {/* Le document d'origine se refermait sur une bibliographie tenue à la
            main. Celle-ci est dérivée des 21 fichiers de données : c'est la
            seule différence assumée de la reconstitution. */}
        <Bibliography />
      </main>
      <ScrollSpy />
    </div>
  )
}
