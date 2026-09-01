import type { Metadata } from 'next'
import { KpiBoard } from '@/components/client/KpiBoard'
import { chapters } from '@/data/chapters'
import { Charte } from './Shell'
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
 * **Contrairement à `/elections-2027`, aucun chiffre n'est écrit ici.** Les
 * indicateurs de `./data.ts` désignent une origine dans un chapitre, et
 * `./origine.ts` va y lire la valeur, ses sources et son millésime.
 *
 * Elle reste un composant serveur, donc prérendue : le retournement des tuiles
 * et les animations d'entrée sont le seul morceau client, et il ne produit
 * aucun contenu — voir `src/components/client/KpiBoard.tsx`.
 */
export const metadata: Metadata = {
  title: 'Chiffres pour 2027 — accueil à indicateurs',
  description:
    "Proposition d'accueil pour le dossier « Chiffres pour 2027 », sous la charte d'Élections 2027. Vingt-neuf indicateurs lus dans les chapitres.",
  robots: { index: false, follow: false },
}

export default function Accueil2027() {
  const themes = chapters.filter((c) => c.kind === 'theme').length

  return (
    <>
      <Charte courant="/accueil-2027">
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
              <a className="primary" href="/accueil-2027/synthese">
                Lire la synthèse
              </a>
              <a className="ghost" href="/accueil-2027/themes">
                Parcourir les thèmes
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
      </Charte>

      <KpiBoard />
    </>
  )
}
