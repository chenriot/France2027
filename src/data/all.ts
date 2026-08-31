// Agrégat des 21 chapitres, pour les pages transverses (`/sources`, `/tout`)
// et pour l'audit. Généré à la main une seule fois : il n'y a rien à
// recalculer, seulement 21 imports explicites.
import * as commerceExterieur from '@/app/(chapitres)/commerce-exterieur/data'
import * as demographie from '@/app/(chapitres)/demographie/data'
import * as depensesPubliques from '@/app/(chapitres)/depenses-publiques/data'
import * as detteDeficit from '@/app/(chapitres)/dette-deficit/data'
import * as ecologieClimat from '@/app/(chapitres)/ecologie-climat/data'
import * as education from '@/app/(chapitres)/education/data'
import * as efficaciteEtat from '@/app/(chapitres)/efficacite-etat/data'
import * as emploiChomage from '@/app/(chapitres)/emploi-chomage/data'
import * as energie from '@/app/(chapitres)/energie/data'
import * as europe from '@/app/(chapitres)/europe/data'
import * as expliqueSimplement from '@/app/(chapitres)/explique-simplement/data'
import * as grillePromesses from '@/app/(chapitres)/grille-promesses/data'
import * as immigration from '@/app/(chapitres)/immigration/data'
import * as industrie from '@/app/(chapitres)/industrie/data'
import * as logement from '@/app/(chapitres)/logement/data'
import * as niveauDeVie from '@/app/(chapitres)/niveau-de-vie/data'
import * as perceptionRealite from '@/app/(chapitres)/perception-realite/data'
import * as retraitesTravail from '@/app/(chapitres)/retraites-travail/data'
import * as sante from '@/app/(chapitres)/sante/data'
import * as securiteJustice from '@/app/(chapitres)/securite-justice/data'
import * as synthese from '@/app/(chapitres)/synthese/data'
import type { ChapterMeta, SeriesSet, SourceId, Tables } from '@/lib/types'

export interface ChapterModule {
  readonly meta: ChapterMeta
  readonly tables: Tables
  readonly series: SeriesSet
  readonly questions: readonly { readonly id: string; readonly title: string }[]
  /** Sources citées en prose, hors tableaux et figures. */
  readonly citedSources: readonly SourceId[]
}

/** Dans l'ordre du sommaire. */
export const allChapters: readonly ChapterModule[] = [
  synthese,
  depensesPubliques,
  detteDeficit,
  retraitesTravail,
  emploiChomage,
  industrie,
  commerceExterieur,
  immigration,
  ecologieClimat,
  energie,
  europe,
  sante,
  securiteJustice,
  logement,
  education,
  niveauDeVie,
  efficaciteEtat,
  demographie,
  perceptionRealite,
  grillePromesses,
  expliqueSimplement,
]

export function chapterData(slug: string): ChapterModule | undefined {
  return allChapters.find((c) => c.meta.slug === slug)
}
