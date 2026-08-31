import { describe, expect, it } from 'vitest'
import { cellText, formatNum, groupThousands, normalize } from './format'

describe('groupThousands', () => {
  it('groupe par trois avec une espace', () => {
    expect(groupThousands('10077')).toBe('10 077')
    expect(groupThousands('1672')).toBe('1 672')
    expect(groupThousands('999')).toBe('999')
    expect(groupThousands('1234567')).toBe('1 234 567')
  })
})

describe('formatNum', () => {
  it('reproduit les formes du document d’origine', () => {
    expect(formatNum({ v: 693, d: 1, u: 'Md€' })).toBe('693,0 Md€')
    expect(formatNum({ v: 10077, d: 0, u: '€' })).toBe('10 077 €')
    expect(formatNum({ v: 23.6, d: 1, u: '%' })).toBe('23,6 %')
    expect(formatNum({ v: 27.4, d: 1, u: '%', sign: true })).toBe('+27,4 %')
    expect(formatNum({ v: 68.78, d: 2, u: 'M' })).toBe('68,78 M')
  })

  it('utilise le moins typographique, pas le trait d’union', () => {
    expect(formatNum({ v: -54, d: 0, u: '%' })).toBe('−54 %')
    expect(formatNum({ v: -1.2, d: 1 })).toBe('−1,2')
  })

  it('sait ne pas grouper les milliers', () => {
    expect(formatNum({ v: 2024, d: 0, g: false })).toBe('2024')
    expect(formatNum({ v: 2024, d: 0 })).toBe('2 024')
  })

  it('porte l’approximation et le complément de phrase', () => {
    expect(formatNum({ v: 700, d: 0, u: '€', approx: true })).toBe('≈ 700 €')
    expect(formatNum({ v: 27.4, d: 1, u: '%', sign: true, after: "pour l'Allemagne" }))
      .toBe("+27,4 % pour l'Allemagne")
  })
})

describe('cellText', () => {
  it('rend une donnée absente par un tiret cadratin', () => {
    expect(cellText(null)).toBe('—')
  })
  it('déshabille le texte riche', () => {
    expect(cellText({ t: 'Aucune <b>évaluation</b>' })).toBe('Aucune évaluation')
  })
})

describe('normalize', () => {
  it('supprime accents et casse', () => {
    expect(normalize('Écologie Énergie')).toBe('ecologie energie')
  })
})
