// La surface de lecture, sous la charte : un rail collant et le corps du
// chapitre.
//
// Le corps n'est pas réécrit : c'est le balisage du dossier, celui que rend
// aussi `/tout`. `.a27-article` ne fait que redéfinir, autour de lui, les
// jetons de couleur et la typographie de la charte — voir
// `src/styles/charte-2027.css`. La garantie de rendu porte sur le balisage,
// pas sur la peau : `check:render` ne voit donc rien passer.
import type { ReactNode } from 'react'
import { Search } from '@/components/client/Search'

export interface RailEntry {
  readonly href: string
  readonly label: string
}

export function Document({
  rail,
  railTitle = 'Sommaire',
  liens,
  precedent,
  suivant,
  children,
}: {
  readonly rail?: readonly RailEntry[]
  readonly railTitle?: string
  readonly liens?: ReactNode
  readonly precedent?: RailEntry
  readonly suivant?: RailEntry
  readonly children: ReactNode
}) {
  return (
    <div className="a27-doc">
      <nav className="a27-rail" aria-label={railTitle}>
        <div className="a27-rail-in">
          <p className="a27-rail-title">{railTitle}</p>
          <Search />
          {rail && rail.length > 0 ? (
            // `id="toc"` : c'est l'accroche du surligneur de section, partagée
            // avec le rail du dossier.
            <ol id="toc">
              {rail.map((e, i) => (
                <li key={e.href}>
                  <a href={e.href}>
                    <span className="n">{String(i + 1).padStart(2, '0')}</span>
                    <span>{e.label}</span>
                  </a>
                </li>
              ))}
            </ol>
          ) : null}
          {liens ? <div className="a27-rail-extra">{liens}</div> : null}
        </div>
      </nav>

      <div className="a27-doc-body">
        <div className="a27-article">{children}</div>
        {precedent || suivant ? (
          <nav className="a27-chapnav" aria-label="Chapitre précédent et suivant">
            {precedent ? (
              <a href={precedent.href}>
                <span>Précédent</span>
                {precedent.label}
              </a>
            ) : (
              <span />
            )}
            {suivant ? (
              <a href={suivant.href} className="next">
                <span>Suivant</span>
                {suivant.label}
              </a>
            ) : (
              <span />
            )}
          </nav>
        ) : null}
      </div>
    </div>
  )
}
