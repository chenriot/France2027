/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Pas de `output: 'export'` : le site est déployé sur Vercel avec un build
  // Next.js standard. Toutes les routes doivent néanmoins rester prérendues au
  // build — voir specs/site-chiffres-2027.md §9 et CLAUDE.md.

  // La charte, née sur `/accueil-2027`, sert maintenant tout le site. Les
  // URL de la maquette restent valides et mènent aux pages définitives.
  async redirects() {
    return [
      { source: '/accueil-2027', destination: '/', permanent: true },
      { source: '/accueil-2027/themes', destination: '/#themes', permanent: true },
      { source: '/accueil-2027/synthese', destination: '/synthese', permanent: true },
    ]
  },
}

export default nextConfig
