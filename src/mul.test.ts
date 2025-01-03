import { describe, expect, it } from 'vitest'
import { multiply } from './mul'

describe('multiply', () => {
  it('should multiply two positive numbers correctly', () => {
    expect(multiply(2, 3)).toBe(6)
    expect(multiply(4, 5)).toBe(20)
    expect(multiply(10, 10)).toBe(100)
  })

  it('should multiply positive and negative numbers correctly', () => {
    expect(multiply(2, -3)).toBe(-6)
    expect(multiply(-4, 5)).toBe(-20)
    expect(multiply(-2, -3)).toBe(6)
  })

  it('should multiply numbers with zero correctly', () => {
    expect(multiply(0, 5)).toBe(0)
    expect(multiply(3, 0)).toBe(0)
    expect(multiply(0, 0)).toBe(0)
  })

  it('should multiply decimal numbers correctly', () => {
    expect(multiply(0.5, 2)).toBe(1)
    expect(multiply(2.5, 2.5)).toBe(6.25)
    expect(multiply(-1.5, 2)).toBe(-3)
    expect(multiply(0.1, 0.2)).toBeCloseTo(0.02)
    expect(multiply(3.333, 3)).toBeCloseTo(9.999)
  })

  it('should multiply large numbers correctly', () => {
    expect(multiply(999999, 999999)).toBe(999998000001)
    expect(multiply(1000000, -1000000)).toBe(-1000000000000)
    expect(multiply(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER)
  })

  it('should handle special numeric values', () => {
    expect(multiply(Infinity, 2)).toBe(Infinity)
    expect(multiply(-Infinity, 2)).toBe(-Infinity)
    expect(multiply(Infinity, -2)).toBe(-Infinity)
    expect(multiply(-Infinity, -2)).toBe(Infinity)
    expect(Number.isNaN(multiply(NaN, 5))).toBe(true)
    expect(Number.isNaN(multiply(5, NaN))).toBe(true)
  })

  it('should handle very small decimal numbers', () => {
    expect(multiply(0.0000001, 0.0000001)).toBeCloseTo(1e-14)
    expect(multiply(1e-8, 1e-8)).toBeCloseTo(1e-16)
  })

  it('should handle numbers close to MAX_SAFE_INTEGER', () => {
    const almostMax = Number.MAX_SAFE_INTEGER - 1
    expect(multiply(almostMax, 1)).toBe(almostMax)
    expect(multiply(1, almostMax)).toBe(almostMax)
  })
})
