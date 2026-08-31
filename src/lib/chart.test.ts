import { describe, expect, it } from 'vitest'
import { series } from '@/app/(chapitres)/synthese/data'
import { buildChart, svgNumber } from './chart'
import { isRawFigure } from './types'
import type { Figure, Series } from './types'

function dataDriven(id: keyof typeof series): Series {
  const figure: Figure = series[id]
  if (isRawFigure(figure)) throw new Error(`« ${id} » n'est pas pilotée par les données`)
  return figure
}

describe('svgNumber', () => {
  it('groupe les milliers avec l’espace fine insécable des SVG', () => {
    expect(svgNumber(10000)).toBe('10\u202f000')
    expect(svgNumber(7865)).toBe('7\u202f865')
    expect(svgNumber(2.31, 1)).toBe('2,3')
  })
  it('n’ajoute pas de séparateur quand on le lui interdit', () => {
    expect(svgNumber(1975, 0, false)).toBe('1975')
  })
})

describe('buildChart, courbe', () => {
  const figure = dataDriven('france-trois-mesures-du-pib-indice-ue-27-100')

  it('retrouve les ordonnées de grille du document d’origine', () => {
    const grid = buildChart(figure).filter((n) => n.cls === 'grid')
    expect(grid[0].attrs.y1).toBe('306.0')
    expect(grid[grid.length - 1].attrs.y1).toBe('22.0')
  })

  it('retrouve les coordonnées exactes de la première courbe', () => {
    const first = buildChart(figure).find((n) => n.tag === 'polyline')
    expect(String(first?.attrs.points)).toBe(
      '52.0,56.1 146.8,50.4 241.7,68.0 298.6,91.9 336.5,100.4 431.3,110.0 507.2,105.5 564.1,170.2 602.0,168.0',
    )
  })

  it('porte des valeurs lisibles, jamais des pixels', () => {
    // Le document d'origine ne stockait que « 52.0,56.1 ». Ici, un indice.
    expect(figure.series[0].values[0]).toBeCloseTo(134, 0)
    expect(figure.x[0]).toBe(1995)
    expect(figure.x[figure.x.length - 1]).toBe(2024)
    expect(figure.y.ticks).toEqual([90, 100, 110, 120, 130, 140])
  })
})

describe('buildChart, barres', () => {
  const figure = dataDriven('depense-publique-par-fonction-en-euros-par-habitant')

  it('retrouve les largeurs de barre du document d’origine', () => {
    const bars = buildChart(figure).filter((n) => n.tag === 'rect')
    expect(bars[0].attrs.width).toBe('307.3')
    expect(bars[1].attrs.width).toBe('413.2')
    expect(bars[2].attrs.width).toBe('393.7')
  })

  it('place les étiquettes de valeur avec l’arrondi au pair', () => {
    const labels = buildChart(figure).filter((n) => n.cls?.startsWith('lbl'))
    expect(labels.slice(0, 3).map((l) => l.attrs.y)).toEqual([32, 48, 62])
    expect(labels[0].text).toBe('7\u202f865')
  })

  it('porte les euros par habitant, pas des largeurs', () => {
    // L'étiquette affiche « 10 077 » ; la largeur du rectangle en dit un peu
    // plus. C'est la valeur exacte qui est conservée, pas son arrondi.
    expect(figure.series[2].values[0]).toBeCloseTo(10076.8, 1)
    expect(figure.x[0]).toBe('Protection sociale')
  })
})
