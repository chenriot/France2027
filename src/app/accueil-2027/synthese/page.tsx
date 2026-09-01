import type { Metadata } from 'next'
import Content from '@/app/(chapitres)/synthese/content'
import { meta, questions } from '@/app/(chapitres)/synthese/data'
import { Charte } from '../Shell'

/**
 * La synthèse du dossier, sous la charte de `/elections-2027`.
 *
 * **Le texte n'est pas recopié : c'est le chapitre lui-même qui est rendu.**
 * On importe le `Content` de `(chapitres)/synthese`, celui que servent déjà
 * `/synthese` et `/tout`. Corriger une phrase dans le document d'origine et
 * relancer `npm run extract` la corrige donc aux trois endroits à la fois.
 *
 * Seule la peau change : `src/styles/accueil-2027.css` redéfinit, sous
 * `.a27-article`, la typographie et les jetons de couleur des classes du
 * chapitre. Le balisage, lui, est celui du dossier — intact, donc `/tout`
 * n'est pas touché et `check:render` reste vert.
 */
export const metadata: Metadata = {
  title: 'La synthèse — maquette',
  description:
    'Ce que l’ensemble des chiffres du dossier établit, sous la charte d’Élections 2027. Texte rendu depuis le chapitre lui-même.',
  robots: { index: false, follow: false },
}

export default function Synthese() {
  return (
    <Charte courant="/accueil-2027/synthese">
      <section className="a27-pagehead">
        <p className="a27-badge">{meta.num} · mise à jour {meta.updated}</p>
        <h1 className="a27-h1">{meta.title}</h1>
        {meta.note ? (
          <p className="a27-lede" dangerouslySetInnerHTML={{ __html: meta.note }} />
        ) : null}
        <ol className="a27-toc">
          {questions.map((q) => (
            <li key={q.id}>
              <a href={`#${q.id}`}>{q.title}</a>
            </li>
          ))}
        </ol>
      </section>

      {/* Le chapitre, tel quel. Voir l'en-tête du fichier : c'est le même
          composant que sert `/synthese`, pas une copie de son texte. */}
      <div className="a27-article">
        <Content mode="page" />
      </div>
    </Charte>
  )
}
