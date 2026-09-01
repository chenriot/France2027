/**
 * Adresse publique du site.
 *
 * Elle n'est pas écrite en dur : un domaine codé dans le source rend fausses
 * les balises `canonical`, les métadonnées Open Graph et le sitemap partout
 * ailleurs qu'en production — y compris sur les URL de prévisualisation, qui
 * sont justement celles qu'on ouvre pour relire.
 *
 * Ordre de résolution :
 *
 *  1. `NEXT_PUBLIC_SITE_URL` — le domaine définitif, quand il existe ;
 *  2. `VERCEL_PROJECT_PRODUCTION_URL` — le domaine de production attribué par
 *     Vercel, stable d'un déploiement à l'autre ;
 *  3. `VERCEL_URL` — l'URL du déploiement courant (prévisualisations) ;
 *  4. `http://localhost:3000` en développement.
 */
function fromEnvironment(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL
  if (explicit) return explicit

  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL
  if (production) return `https://${production}`

  const deployment = process.env.VERCEL_URL
  if (deployment) return `https://${deployment}`

  return 'http://localhost:3000'
}

/** L'origine du site, sans barre oblique finale. */
export const SITE_URL = fromEnvironment().replace(/\/+$/, '')

/** URL absolue d'un chemin interne. */
export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}
