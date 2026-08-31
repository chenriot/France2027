import { sources } from '@/data/sources'
import type { SourceId } from '@/lib/types'

/**
 * Bloc source, rendu depuis le registre.
 *
 * Le registre conserve la formulation exacte du document d'origine : le rendu
 * est identique, mais les 197 blocs d'origine sont réduits à 192 entrées
 * uniques, et la bibliographie en est dérivée au lieu d'être recopiée.
 */
export function Source({ ids }: { ids: readonly SourceId[] }) {
  return (
    <>
      {ids.map((id) => (
        <p
          key={id}
          className="src"
          dangerouslySetInnerHTML={{ __html: sources[id].text }}
        />
      ))}
    </>
  )
}
