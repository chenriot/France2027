import type { Metadata } from 'next'
import { KpiBoard } from '@/components/client/KpiBoard'
import { chapters } from '@/data/chapters'
import { sources } from '@/data/sources'
import '@/styles/accueil-2027.css'
import { Tile } from './Tile'
import { hero, minis, tiles } from './data'

/**
 * Page d'accueil à indicateurs, sous la charte de `/elections-2027`
 * (direction 1c de la maquette « Élections 2027 »).
 *
 * Route autonome, hors du répertoire `(chapitres)` : elle ne touche ni au
 * rendu de `/tout`, ni au shell du dossier, ni aux jetons de thème. Voir
 * `src/styles/accueil-2027.css` pour l'écart assumé à la règle 6 sur la
 * palette, qui est celui de `/elections-2027` et pour la même raison.
 *
 * **Contrairement à `/elections-2027`, tous les chiffres viennent du dossier**
 * et portent leur source et leur millésime : ils vivent dans `./data.ts`, avec
 * des identifiants tirés du registre `src/data/sources.ts`. La page et ses
 * composants n'écrivent que du balisage.
 *
 * Elle reste un composant serveur, donc prérendue : le retournement des tuiles
 * et les animations d'entrée sont le seul morceau client, et il ne produit
 * aucun contenu — voir `src/components/client/KpiBoard.tsx`.
 */
export const metadata: Metadata = {
  title: "Chiffres pour 2027 — accueil à indicateurs",
  description:
    "Proposition d'accueil pour le dossier « Chiffres pour 2027 », sous la charte d'Élections 2027. Vingt-neuf indicateurs sourcés et datés.",
  robots: { index: false, follow: false },
}

const NAV = ['Accueil', 'Thèmes', 'Synthèse', 'Promesses', 'Sources']

export default function Accueil2027() {
  const themes = chapters.filter((c) => c.kind === 'theme').length
  const refs = Object.keys(sources).length

  return (
    <>
      {/* React 19 remonte la feuille de style dans le <head>. Les familles du
          dossier — IBM Plex Mono comprise — sont déjà chargées par le layout. */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;800;900&family=Libre+Franklin:wght@400;600;700&display=swap"
      />

      <div className="a27">
        <p className="a27-provenance">
          <b>Maquette</b>
          <span>
            Mise en page proposée. Les {refs} chiffres, eux, viennent du dossier : chacun porte sa
            source et son millésime. <a href="/sources">Voir les sources</a>.
          </span>
        </p>

        <header className="a27-head">
          <div className="a27-brand">
            <div className="a27-compass" aria-hidden="true">
              <i />
            </div>
            <p className="a27-wordmark">CHIFFRES POUR 2027</p>
          </div>
          <nav aria-label="Navigation principale">
            <ul className="a27-nav">
              {NAV.map((item, i) => (
                <li key={item} className={i === 0 ? 'on' : undefined}>
                  <a href="#" aria-current={i === 0 ? 'page' : undefined}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <section className="a27-hero">
          <div className="a27-hero-l">
            <p className="a27-badge">Élection présidentielle · 2027</p>
            <h1 className="a27-h1">
              L’état de la France,
              <br />
              en chiffres vérifiables.
            </h1>
            <p className="a27-lede">
              Un dossier factuel, sans thèse préalable : {themes} thèmes, une synthèse, une grille de
              lecture des promesses. Chaque chiffre porte sa source et son millésime ; chaque écart
              est daté.
            </p>
            <div className="a27-cta">
              <a className="primary" href="/synthese">
                Lire la synthèse
              </a>
              <a className="ghost" href="/tout">
                Le document intégral
              </a>
            </div>
          </div>

          <div className="a27-hero-r">
            <Tile spec={hero} id="hero" />
          </div>
        </section>

        <div className="a27-boardhead">
          <h2>Le dossier en un coup d’œil</h2>
          <p>
            Chaque tuile alterne entre plusieurs indicateurs. Survolez pour figer, cliquez pour
            passer au suivant.
          </p>
          <div className="a27-ctl">
            {/* Révélé par le composant client : sans JavaScript, il ne ferait rien. */}
            <button id="a27-pause" type="button" aria-pressed="false" hidden>
              Suspendre
            </button>
          </div>
        </div>

        <div className="a27-board">
          {tiles.map((spec, i) => (
            <Tile key={spec.faces[0].title} spec={spec} id={`t${i}`} />
          ))}
          {minis.map((spec, i) => (
            <Tile key={spec.faces[0].title} spec={spec} id={`m${i}`} />
          ))}
        </div>

        <footer className="a27-foot">
          <h2>Chaque chiffre est daté, sourcé et vérifiable ligne à ligne.</h2>
          <ul className="a27-links">
            <li>
              <a href="/sources">Sources</a>
            </li>
            <li>
              <a href="/tout">Document intégral</a>
            </li>
            <li>
              <a href="/synthese">Synthèse</a>
            </li>
          </ul>
        </footer>
      </div>

      <KpiBoard />
    </>
  )
}
