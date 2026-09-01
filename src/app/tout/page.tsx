import type { Metadata } from 'next'
import { Chapter } from '@/components/Chapter'
import { Charte } from '@/components/charte/Charte'
import { Masthead } from '@/components/Masthead'
import { ScrollSpy } from '@/components/client/ScrollSpy'
import { Search } from '@/components/client/Search'
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
    <Charte courant="/tout">
      {/*
        La coquille change, le corps ne change pas : `check:render` compare la
        chaîne à partir de `<main class="main">`, et tout ce qu'elle contient
        est ici exactement ce qu'il était. Seule la peau — `.a27-article` —
        est nouvelle, et une peau ne se voit pas dans le HTML.
      */}
      <div className="a27-doc">
        <nav className="a27-rail" aria-label="Sommaire">
          <div className="a27-rail-in">
            <p className="a27-rail-title">Sommaire</p>
            <Search />
            <ol id="toc">
              <li>
                <a href="#synth">
                  <span className="n">00</span>
                  <span>Synthèse et commentaire</span>
                </a>
              </li>
              {allChapters
                .filter((c) => c.meta.legacyAnchor !== 'synth')
                .map((c, i) => (
                  <li key={c.meta.slug}>
                    <a href={`#${c.meta.legacyAnchor}`}>
                      <span className="n">{String(i + 1).padStart(2, '0')}</span>
                      <span>{c.meta.shortTitle}</span>
                    </a>
                  </li>
                ))}
            </ol>
            <div className="a27-rail-extra">
              <a href="#sources">Toutes les sources</a>
              <a href="/">Sommaire du dossier</a>
            </div>
          </div>
        </nav>

        <div className="a27-doc-body a27-article">
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
        </div>
      </div>
      <ScrollSpy />
    </Charte>
  )
}
