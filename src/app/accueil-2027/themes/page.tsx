import type { Metadata } from 'next'
import { chapters } from '@/data/chapters'
import { Charte } from '../Shell'

/**
 * Les chapitres du dossier, sous la charte de `/elections-2027`.
 *
 * **Rien n'est saisi ici.** Titres, chapeaux et volumétrie viennent tous de
 * `src/data/chapters.ts`, qui est lui-même produit par `npm run extract` : un
 * chapitre ajouté ou renommé apparaît sur cette page sans qu'on y touche.
 */
export const metadata: Metadata = {
  title: 'Les thèmes du dossier — maquette',
  description:
    'Les chapitres de « Chiffres pour 2027 », sous la charte d’Élections 2027. Titres et volumétrie lus dans le registre des chapitres.',
  robots: { index: false, follow: false },
}

export default function Themes() {
  const themes = chapters.filter((c) => c.kind === 'theme')
  const annexes = chapters.filter((c) => c.kind !== 'theme')
  const total = (clef: 'questions' | 'tables' | 'figures') =>
    chapters.reduce((n, c) => n + c.counts[clef], 0)

  return (
    <Charte courant="/accueil-2027/themes">
      <section className="a27-pagehead">
        <p className="a27-badge">{themes.length} thèmes · {annexes.length} annexes</p>
        <h1 className="a27-h1">Le dossier, chapitre par chapitre.</h1>
        <p className="a27-lede">
          Chaque thème est un chapitre autonome : une question, les données qui y répondent, les
          limites de ces données. La synthèse en donne la lecture d’ensemble.
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

      <div className="a27-grid">
        {themes.map((c, i) => (
          <article className="a27-theme" key={c.slug}>
            <p className="a27-index">{String(i + 1).padStart(2, '0')}</p>
            <h2>
              <a href={`/${c.slug}`}>{c.title}</a>
            </h2>
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

      <section className="a27-annexes">
        <h2>Synthèse et annexes</h2>
        <ul>
          {annexes.map((c) => (
            <li key={c.slug}>
              <a href={`/${c.slug}`}>{c.title}</a>
              {c.note ? <span dangerouslySetInnerHTML={{ __html: ` — ${c.note}` }} /> : null}
            </li>
          ))}
        </ul>
      </section>
    </Charte>
  )
}
