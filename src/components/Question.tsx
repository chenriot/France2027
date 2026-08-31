import type { ReactNode } from 'react'

/** Fiche question/réponse : le `div.q` du document d'origine. */
export function Question({
  id,
  title,
  children,
}: {
  readonly id: string
  readonly title: string
  readonly children: ReactNode
}) {
  return (
    <div className="q" id={id}>
      <h3>{title}</h3>
      {children}
    </div>
  )
}
