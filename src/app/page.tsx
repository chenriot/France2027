import { KpiBoard } from '@/components/client/KpiBoard'
import { Charte } from '@/components/charte/Charte'
import { KpiTile } from '@/components/charte/KpiTile'
import { chapters, families } from '@/data/chapters'
import { hero, minis, tiles } from '@/data/indicateurs'

/**
 * L'accueil du dossier : les indicateurs d'abord, le sommaire ensuite.
 *
 * **Aucun chiffre n'est écrit ici.** Les indicateurs de `src/data/indicateurs.ts`
 * désignent une origine dans un chapitre, et `src/lib/origine.ts` va y lire la
 * valeur, ses sources et son millésime ; les titres et la volumétrie des
 * chapitres viennent de `src/data/chapters.ts`.
 *
 * La page reste un composant serveur, donc prérendue : le retournement des
 * tuiles et les animations d'entrée sont le seul morceau client, et il ne
 * produit aucun contenu — voir `src/components/client/KpiBoard.tsx`.
 */
export default function Home() {
  const themes = chapters.filter((c) => c.kind === 'theme')
  const annexes = chapters.filter((c) => c.kind !== 'theme')
  const total = (clef: 'questions' | 'tables' | 'figures') =>
    chapters.reduce((n, c) => n + c.counts[clef], 0)

  return (
    <>
      <Charte courant="/">
        <section className="a27-hero">
          <div className="a27-hero-l">
            <p className="a27-badge">Élection présidentielle · 2027</p>
            <h1 className="a27-h1">
              L’état de la France,
              <br />
              en chiffres vérifiables.
            </h1>
            <p className="a27-lede">
              Un dossier factuel, sans thèse préalable : {themes.length} thèmes, une synthèse, une
              grille de lecture des promesses. Chaque chiffre porte sa source et son millésime ;
              chaque écart est daté.
            </p>
            <div className="a27-cta">
              <a className="primary" href="/synthese">
                Lire la synthèse
              </a>
              <a className="ghost" href="#themes">
                Parcourir les thèmes
              </a>
            </div>
          </div>

          <div className="a27-hero-r">
            <KpiTile spec={hero} id="hero" />
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
            <KpiTile key={spec.faces[0].title} spec={spec} id={`t${i}`} />
          ))}
          {minis.map((spec, i) => (
            <KpiTile key={spec.faces[0].title} spec={spec} id={`m${i}`} />
          ))}
        </div>

        <section className="a27-pagehead" id="themes">
          <p className="a27-badge">
            {themes.length} thèmes · {annexes.length} annexes
          </p>
          <h2 className="a27-h1">Le dossier, chapitre par chapitre.</h2>
          <p className="a27-lede">
            Chaque thème est un chapitre autonome : une question, les données qui y répondent, les
            limites de ces données.
          </p>
          <dl className="a27-tally">
            <div>
              <dt>Fiches</dt>
              <dd>{total('questions')}</dd>
            </div>
            <div>
              <dt>Tableaux</dt>
              <dd>{total('tables')}</dd>
            </div>
            <div>
              <dt>Figures</dt>
              <dd>{total('figures')}</dd>
            </div>
          </dl>
        </section>

        {families.map((f) => {
          const groupe = themes.filter((c) => c.family === f.id)
          if (groupe.length === 0) return null
          return (
            <section key={f.id}>
              <div className="a27-family">
                <h3>{f.label}</h3>
                <p>{f.lede}</p>
              </div>
              <div className="a27-grid">
                {groupe.map((c) => (
                  <article className="a27-theme" key={c.slug}>
                    <p className="a27-index">{c.num.replace(/^\D+/, '').trim()}</p>
                    <h4>
                      <a href={`/${c.slug}`}>{c.title}</a>
                    </h4>
                    {c.note ? (
                      <p className="a27-themenote" dangerouslySetInnerHTML={{ __html: c.note }} />
                    ) : null}
                    <ul className="a27-counts">
                      <li>
                        <b>{c.counts.questions}</b> fiches
                      </li>
                      <li>
                        <b>{c.counts.tables}</b> tableaux
                      </li>
                      <li>
                        <b>{c.counts.figures}</b> figures
                      </li>
                    </ul>
                  </article>
                ))}
              </div>
            </section>
          )
        })}

        <section className="a27-annexes">
          <h2>Synthèse et annexes</h2>
          <ul>
            {annexes.map((c) => (
              <li key={c.slug}>
                <a href={`/${c.slug}`}>{c.title}</a>
                {c.note ? <span dangerouslySetInnerHTML={{ __html: ` — ${c.note}` }} /> : null}
              </li>
            ))}
            <li>
              <a href="/sources">Toutes les sources</a> — les références du dossier, générées depuis
              les données.
            </li>
            <li>
              <a href="/tout">Document intégral</a> — les {chapters.length} chapitres sur une page,
              pour la lecture linéaire et l’impression.
            </li>
          </ul>
        </section>
      </Charte>

      <KpiBoard />
    </>
  )
}
