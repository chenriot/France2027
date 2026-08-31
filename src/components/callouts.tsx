import type { ReactNode } from 'react'

interface CalloutProps {
  /** Titre de l'encadré, en HTML restreint : il porte parfois `<sup>`, `<em>`. */
  readonly title: string
  readonly children: ReactNode
}

function Callout({ kind, title, children }: CalloutProps & { kind: string }) {
  return (
    <div className={kind}>
      {title ? <b dangerouslySetInnerHTML={{ __html: title }} /> : null}
      {children}
    </div>
  )
}

/** Encadré vert : définit une notion. */
export function Definition(props: CalloutProps) {
  return <Callout kind="defn" {...props} />
}

/** Encadré orange : signale une limite de mesure. */
export function Limit(props: CalloutProps) {
  return <Callout kind="lim" {...props} />
}

/** Encadré rouge : donnée qui n'existe pas ou n'a pas été trouvée. */
export function MissingData(props: CalloutProps) {
  return <Callout kind="hole" {...props} />
}

/** Encadré de synthèse : ce qu'il faut retenir. */
export function Takeaway(props: CalloutProps) {
  return <Callout kind="take" {...props} />
}
