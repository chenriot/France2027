import { describe, expect, it } from 'vitest'
import { polylinePoints, px, roundHalfEven, valueOfY, xOf, yOf } from './scales'
import type { Axis, Frame } from './types'

// Repère de la figure « Dépense publique par nature » du document d'origine.
const frame: Frame = { width: 720, height: 452, left: 52, right: 602, top: 22, bottom: 372 }
const axis: Axis = { label: '% du PIB', min: 0, max: 30, ticks: [0, 5, 10, 15, 20, 25, 30] }

describe('yOf', () => {
  it('place les graduations aux ordonnées du document d’origine', () => {
    expect(px(yOf(0, axis, frame))).toBe(372)
    expect(px(yOf(5, axis, frame))).toBe(313.7)
    expect(px(yOf(15, axis, frame))).toBe(197)
    expect(px(yOf(30, axis, frame))).toBe(22)
  })
})

describe('xOf', () => {
  it('répartit 50 points de 52 à 602', () => {
    expect(px(xOf(0, 50, frame))).toBe(52)
    expect(px(xOf(1, 50, frame))).toBe(63.2)
    expect(px(xOf(49, 50, frame))).toBe(602)
  })
})

describe('valueOfY', () => {
  it('est l’inverse exact de yOf', () => {
    for (const v of [0, 3.7, 17.2, 25.5, 30]) {
      expect(valueOfY(yOf(v, axis, frame), axis, frame)).toBeCloseTo(v, 10)
    }
  })
})

describe('polylinePoints', () => {
  it('projette les valeurs sur le repère d’origine, une décimale comprise', () => {
    expect(polylinePoints([17.23, 17.14, 17.37], axis, frame)).toBe('52.0,171.0 327.0,172.0 602.0,169.3')
  })
  it('saute les points absents', () => {
    expect(polylinePoints([1, null, 3], axis, frame)).toBe('52.0,360.3 602.0,337.0')
  })
})

describe('roundHalfEven', () => {
  it('arrondit au pair, comme le générateur du document d’origine', () => {
    expect(roundHalfEven(32.5)).toBe(32)
    expect(roundHalfEven(47.5)).toBe(48)
    expect(roundHalfEven(62.5)).toBe(62)
    expect(roundHalfEven(95.5)).toBe(96)
    expect(roundHalfEven(2.4)).toBe(2)
    expect(roundHalfEven(2.6)).toBe(3)
  })
})
