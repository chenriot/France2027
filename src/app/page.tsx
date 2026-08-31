import { Masthead } from '@/components/Masthead'
import { Rail } from '@/components/Rail'
import { ScrollSpy } from '@/components/client/ScrollSpy'
import { chapters } from '@/data/chapters'
import { sources } from '@/data/sources'

export default function Home() {
  const themes = chapters.filter((c) => c.kind === 'theme')
  const others = chapters.filter((c) => c.kind !== 'theme')

  return (
    <div className="shell">
      <a className="skip" href="#contenu">
        Aller au contenu
      </a>
      <Rail />
      <main className="main" id="contenu">
        <Masthead />

        <section className="sec" id="sommaire">
          <div className="sec-head">
            <span className="sec-num">Sommaire</span>
            <h2>Les {themes.length} thèmes du dossier</h2>
          </div>
          <p className="sec-note">
            Chaque thème est un chapitre autonome. La synthèse en donne la lecture d’ensemble ; la
            grille de lecture et le dossier expliqué simplement en sont les deux annexes.
          </p>

          <div className="q" id="chapitres">
            <h3>Thèmes</h3>
            <div className="tw">
              <table>
                <thead>
                  <tr>
                    <th>Thème</th>
                    <th className="n">Fiches</th>
                    <th className="n">Tableaux</th>
                    <th className="n">Figures</th>
                  </tr>
                </thead>
                <tbody>
                  {themes.map((c) => (
                    <tr key={c.slug}>
                      <td>
                        <a href={`/${c.slug}`}>{c.title}</a>
                      </td>
                      <td className="n">{c.counts.questions}</td>
                      <td className="n">{c.counts.tables}</td>
                      <td className="n">{c.counts.figures}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="q" id="reste">
            <h3>Synthèse et annexes</h3>
            <ul>
              {others.map((c) => (
                <li key={c.slug}>
                  <a href={`/${c.slug}`}>{c.title}</a>
                  {c.note ? <> — {c.note}</> : null}
                </li>
              ))}
              <li>
                <a href="/sources">Toutes les sources</a> — les {Object.keys(sources).length}{' '}
                références du dossier, générées depuis les données.
              </li>
              <li>
                <a href="/tout">Document intégral</a> — les 21 chapitres sur une page, pour la
                lecture linéaire et l’impression.
              </li>
            </ul>
          </div>
        </section>
      </main>
      <ScrollSpy />
    </div>
  )
}
