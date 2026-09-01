import { chapters, families } from '@/data/chapters'
import { Search } from './client/Search'
import { ThemeToggle } from './client/ThemeToggle'

export interface RailEntry {
  readonly href: string
  readonly label: string
}

/** « Thème 07 » → « 07 ». Le numéro affiché est celui du dossier, pas la position. */
function numberOf(num: string): string {
  return num.replace(/^\D+/, '').trim()
}

/**
 * Sommaire latéral. Sur une page de chapitre il liste les fiches de ce
 * chapitre ; ailleurs, les 21 chapitres. Dans les deux cas c'est du HTML
 * navigable sans JavaScript.
 */
export function Rail({ entries, title = 'Sommaire' }: { entries?: readonly RailEntry[]; title?: string }) {
  const items: RailEntry[] =
    entries?.slice() ??
    chapters.filter((c) => c.kind === 'theme').map((c) => ({ href: `/${c.slug}`, label: c.shortTitle }))

  const synthese = chapters.find((c) => c.kind === 'synthese')

  return (
    <nav className="rail" aria-label="Sommaire">
      <p className="rail-title">{title}</p>
      <Search />
      {!entries && synthese ? (
        <div className="extra top">
          <a href={`/${synthese.slug}`}>{synthese.shortTitle}</a>
        </div>
      ) : null}
      {entries ? (
        <ol id="toc">
          {items.map((e) => (
            <li key={e.href}>
              <a href={e.href}>{e.label}</a>
            </li>
          ))}
        </ol>
      ) : (
        // Les dix-huit thèmes regroupés par famille de lecture. Le numéro
        // affiché est celui du dossier — le compteur CSS donnerait la position
        // dans la liste, qui n'est plus la même une fois les thèmes regroupés.
        <ol id="toc">
          {families.map((f) => {
            const group = chapters.filter((c) => c.kind === 'theme' && c.family === f.id)
            if (group.length === 0) return null
            return (
              <li key={f.id} className="grp">
                <span>{f.label}</span>
                <ol>
                  {group.map((c) => (
                    <li key={c.slug} className="num">
                      <a href={`/${c.slug}`}>
                        <span className="n-fam">{numberOf(c.num)}</span>
                        <span>{c.shortTitle}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </li>
            )
          })}
        </ol>
      )}
      {!entries ? (
        <div className="extra">
          {chapters
            .filter((c) => c.kind === 'annexe')
            .map((c) => (
              <a key={c.slug} href={`/${c.slug}`}>
                {c.shortTitle}
              </a>
            ))}
          <a href="/sources">Toutes les sources</a>
          <a href="/tout">Document intégral</a>
        </div>
      ) : (
        <div className="extra">
          <a href="/">Sommaire général</a>
          <a href="/sources">Toutes les sources</a>
        </div>
      )}
      <div className="toolbar">
        <ThemeToggle />
      </div>
    </nav>
  )
}
