// La coquille de la charte : bandeau de provenance, en-tête, navigation, pied.
//
// Les trois pages de `/accueil-2027` la partagent. Le libellé et la
// destination de chaque entrée de navigation ne sont donc écrits qu'ici.
import type { ReactNode } from 'react'
import { sources } from '@/data/sources'
import '@/styles/accueil-2027.css'

export const NAV = [
  { href: '/accueil-2027', label: 'Accueil' },
  { href: '/accueil-2027/themes', label: 'Thèmes' },
  { href: '/accueil-2027/synthese', label: 'Synthèse' },
  { href: '/grille-promesses', label: 'Promesses' },
  { href: '/sources', label: 'Sources' },
] as const

export function Charte({ courant, children }: { courant: string; children: ReactNode }) {
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
            Mise en page proposée. Les chiffres, eux, viennent du dossier : chacun est lu dans le
            chapitre qui l’établit, avec sa source et son millésime parmi{' '}
            {Object.keys(sources).length} références. <a href="/sources">Voir les sources</a>.
          </span>
        </p>

        <header className="a27-head">
          <a className="a27-brand" href="/accueil-2027">
            <span className="a27-compass" aria-hidden="true">
              <i />
            </span>
            <span className="a27-wordmark">CHIFFRES POUR 2027</span>
          </a>
          <nav aria-label="Navigation principale">
            <ul className="a27-nav">
              {NAV.map((item) => (
                <li key={item.href} className={item.href === courant ? 'on' : undefined}>
                  <a href={item.href} aria-current={item.href === courant ? 'page' : undefined}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        {children}

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
              <a href="/">Sommaire du dossier</a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  )
}
