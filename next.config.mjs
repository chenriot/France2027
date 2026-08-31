/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Pas de `output: 'export'` : le site est déployé sur Vercel avec un build
  // Next.js standard. Toutes les routes doivent néanmoins rester prérendues au
  // build — voir specs/site-chiffres-2027.md §9 et CLAUDE.md.
}

export default nextConfig
