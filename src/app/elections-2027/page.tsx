import type { Metadata } from 'next'
import '@/styles/elections-2027.css'

/**
 * « Boussole 2027 » — mise en œuvre de la direction 1c de la maquette
 * `Élections 2027.dc.html` (projet Claude Design « Site d'information
 * élections 2027 »).
 *
 * Route autonome, hors du répertoire `(chapitres)` : elle ne touche ni au
 * rendu de `/tout`, ni au shell du dossier, ni aux jetons de thème. Voir
 * `src/styles/elections-2027.css` pour les deux écarts assumés à la règle 6.
 *
 * **Tous les chiffres de cette page viennent de la maquette et sont des
 * données d'illustration** — la maquette le dit elle-même. Aucun ne provient
 * du registre sourcé du dossier. D'où le bandeau en tête et le `noindex`
 * ci-dessous : sur un sujet électoral, un chiffre plausible sans source est
 * exactement ce que ce projet cherche à combattre. À lever le jour où la page
 * est branchée sur des données réelles.
 */
export const metadata: Metadata = {
  title: 'Boussole 2027 — maquette',
  description:
    'Direction de maquette pour un site d’information sur les données de la présidentielle 2027. Chiffres d’illustration, non sourcés.',
  robots: { index: false, follow: false },
}

const NAV = ['Accueil', 'Comparer', 'Chiffrer', 'Ma commune', 'Sources']

/** Rapport de forces au premier tour. Hauteurs et valeurs de la maquette. */
const BLOCS = [
  { label: 'Bloc national', value: 31, height: 152, fill: '#fff' },
  { label: 'Gauche', value: 27, height: 131, fill: 'var(--b27-red)' },
  { label: 'Centre', value: 21, height: 104, fill: 'var(--b27-yellow)' },
  { label: 'Droite', value: 13, height: 64, fill: 'rgb(255 255 255 / 55%)' },
  { label: 'Autres', value: 8, height: 38, fill: 'rgb(255 255 255 / 30%)' },
]

const THEMES = [
  { label: 'Retraites', width: '72%', fill: 'var(--b27-ink)' },
  { label: 'Santé', width: '46%', fill: 'var(--b27-red)' },
  { label: 'Énergie', width: '58%', fill: 'var(--b27-blue)' },
]

/** Bureaux de vote de la grille « Ma commune », dans l'ordre de la maquette. */
const BUREAUX = [
  '#cdd6f7', '#8fa2ee', '#1b3fd8', '#f2b8bc', '#e0323c', '#8fa2ee', '#eeeeeb', '#cdd6f7',
  '#1b3fd8', '#eeeeeb', '#f2b8bc', '#8fa2ee', '#1b3fd8', '#e0323c', '#cdd6f7', '#8fa2ee',
  '#eeeeeb', '#cdd6f7', '#1b3fd8', '#e0323c', '#f2b8bc', '#1b3fd8', '#8fa2ee', '#eeeeeb',
]

export default function Boussole2027() {
  return (
    <>
      {/* React 19 remonte la feuille de style dans le <head>. Les familles du
          dossier — IBM Plex Mono comprise — sont déjà chargées par le layout. */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;800;900&family=Libre+Franklin:wght@400;600;700&display=swap"
      />

      <div className="b27">
        <p className="b27-disclaimer">
          <b>Maquette</b>
          <span>
            Les chiffres de cette page sont des données d’illustration, non des mesures réelles.
            Aucun ne provient du registre sourcé du dossier.
          </span>
        </p>

        <header className="b27-head">
          <div className="b27-brand">
            <div className="b27-compass" aria-hidden="true">
              <i />
            </div>
            <p className="b27-wordmark">BOUSSOLE 2027</p>
          </div>
          <nav aria-label="Navigation principale">
            <ul className="b27-nav">
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

        <section className="b27-hero">
          <div className="b27-hero-l">
            <p className="b27-badge">Élection présidentielle · 2027</p>
            <h1 className="b27-h1">
              Les faits d’abord.
              <br />
              Les avis ensuite.
            </h1>
            <p className="b27-lede">
              Une base de données publique sur les programmes, les budgets et les votes passés.
              Aucune recommandation, aucun classement : les sources et la méthode sont visibles à
              chaque écran.
            </p>
            <div className="b27-cta">
              <a className="primary" href="#comparer">
                Comparer les programmes
              </a>
              <a className="ghost" href="#methode">
                Voir la méthode
              </a>
            </div>
          </div>

          <div className="b27-hero-r">
            <p className="b27-kicker">
              Rapport de forces — 1<sup>er</sup> tour
            </p>
            <div className="b27-cols">
              {BLOCS.map((b) => (
                <div className="b27-col" key={b.label}>
                  <span>{b.value}</span>
                  <i style={{ height: b.height, background: b.fill }} />
                </div>
              ))}
            </div>
            <div className="b27-legend" aria-hidden="true">
              {BLOCS.map((b) => (
                <div key={b.label}>{b.label}</div>
              ))}
            </div>
            <p className="b27-hero-note">
              Agrégation de 34 enquêtes publiées depuis juin 2026. Marge d’erreur ±1,4 point.
            </p>
          </div>
        </section>

        <section className="b27-cards">
          <article className="b27-card" id="comparer">
            <p className="b27-num" style={{ color: 'var(--b27-blue)' }}>
              01
            </p>
            <h2>Comparer douze programmes ligne à ligne</h2>
            <p>
              Retraites, santé, énergie, fiscalité : le texte source en regard de chaque chiffrage.
            </p>
            <div className="b27-rows">
              {THEMES.map((t) => (
                <div className="b27-row" key={t.label}>
                  <span>{t.label}</span>
                  <div className="t">
                    <i style={{ width: t.width, background: t.fill }} />
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="b27-card">
            <p className="b27-num" style={{ color: 'var(--b27-red)' }}>
              02
            </p>
            <h2>Chiffrer l’effet sur votre foyer</h2>
            <p>Un simulateur qui indique ses hypothèses et ses angles morts.</p>
            <div className="b27-sim">
              <p className="k">Revenu net mensuel</p>
              <p className="v">2 340 €</p>
              <div className="b27-slider" aria-hidden="true">
                <div className="f" />
                <div className="knob" />
              </div>
              <p className="n">
                Écart entre les programmes : <b>−41 € à +96 €</b> par mois.
              </p>
            </div>
          </article>

          <article className="b27-card">
            <p className="b27-num">03</p>
            <h2>Retrouver les votes de votre commune</h2>
            <p>Résultats de 2017 et 2022, bureau par bureau, avec l’abstention.</p>
            <div className="b27-map" aria-hidden="true">
              {BUREAUX.map((fill, i) => (
                <i key={i} style={{ background: fill }} />
              ))}
            </div>
          </article>
        </section>

        <footer className="b27-foot" id="methode">
          <h2>Toutes les données sont téléchargeables, datées et versionnées.</h2>
          <ul className="b27-formats">
            <li>CSV</li>
            <li>JSON</li>
            <li>API</li>
            <li>Licence ouverte</li>
          </ul>
        </footer>
      </div>
    </>
  )
}
