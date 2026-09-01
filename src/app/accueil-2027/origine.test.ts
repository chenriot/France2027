// Le contrat de la page d'accueil : chacune de ses origines existe encore
// dans le chapitre qui la porte.
//
// `npm run extract` réécrit les 21 chapitres. S'il renomme un tableau, une
// colonne ou une série que l'accueil cite, ce test tombe — et il tombe en
// deux secondes, avant le build, avec le nom de l'origine fautive.
import { describe, expect, it } from 'vitest'
import { hero, minis, tiles } from './data'
import type { Kpi } from './data'

const toutes: readonly Kpi[] = [hero, ...tiles, ...minis].flatMap((t) => t.faces)

describe('les indicateurs de /accueil-2027', () => {
  it('lisent tous une origine résoluble', () => {
    // L'import de `./data` a déjà exécuté chaque lecture : si une origine
    // avait disparu, le module aurait jeté au chargement.
    expect(toutes.length).toBeGreaterThan(20)
  })

  it('portent chacun au moins une source et un millésime', () => {
    for (const k of toutes) {
      expect(k.sources.length, `« ${k.title} » sans source`).toBeGreaterThan(0)
      expect(k.vintage, `« ${k.title} » sans millésime`).toMatch(/^\d{4}/)
      expect(k.credit, `« ${k.title} » sans ligne de source`).not.toBe('')
    }
  })

  it('ne portent aucune valeur non finie', () => {
    const nombres = (k: Kpi): number[] => {
      const out: number[] = []
      if (k.value) out.push(k.value.v)
      if (k.delta) out.push(k.delta.v)
      const c = k.chart
      if (c?.kind === 'spark') out.push(...c.values)
      if (c?.kind === 'lines') out.push(...c.series.flatMap((s) => s.values.filter((v) => v !== null) as number[]))
      if (c?.kind === 'bars') out.push(...c.items.map((i) => i.value))
      if (c?.kind === 'gauge') out.push(c.value, c.ref)
      if (c?.kind === 'donut') out.push(c.value)
      if (c?.kind === 'heat') out.push(...c.rows.flatMap((r) => r.values))
      return out
    }
    for (const k of toutes) {
      for (const v of nombres(k)) {
        expect(Number.isFinite(v), `« ${k.title} » porte une valeur non finie`).toBe(true)
      }
    }
  })

  it('rendent la dette et les émissions telles que leur chapitre les écrit', () => {
    // Deux témoins, pris aux deux bouts du dossier : si la dérivation se
    // débranchait sans casser, ces deux-là le diraient.
    const dette = tiles.concat(hero).flatMap((t) => t.faces).find((k) => k.title.startsWith('Deux marches'))
    expect(dette?.chart?.kind).toBe('spark')
    expect(dette?.value?.v).toBeGreaterThan(100)

    const ges = tiles.flatMap((t) => t.faces).find((k) => k.title === 'Gaz à effet de serre')
    expect(ges?.delta?.v).toBeLessThan(0)
  })
})
