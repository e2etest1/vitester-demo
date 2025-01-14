import { describe, expect, it } from 'vitest'
import { multiply } from './mul'

describe('multiply', () => {
  it('should multiply two positive numbers correctly', () => {
    expect(multiply(2, 3)).toBe(6)
    expect(multiply(10, 5)).toBe(50)
    expect(multiply(100, 100)).toBe(10000)
  })

  it('should multiply positive and negative numbers correctly', () => {
    expect(multiply(2, -3)).toBe(-6)
    expect(multiply(-4, 5)).toBe(-20)
    expect(multiply(-10, -5)).toBe(50)
  })

  it('should multiply with zero correctly', () => {
    expect(multiply(0, 5)).toBe(0)
    expect(multiply(10, 0)).toBe(0)
    expect(multiply(0, 0)).toBe(0)
  })

  it('should handle decimal numbers correctly', () => {
    expect(multiply(0.5, 2)).toBe(1)
    expect(multiply(2.5, 2.5)).toBe(6.25)
    expect(multiply(0.1, 0.2)).toBeCloseTo(0.02)
  })

  it('should handle large numbers correctly', () => {
    expect(multiply(999999, 999999)).toBe(999998000001)
    expect(multiply(1000000, 1000000)).toBe(1000000000000)
  })

  it('should handle very small decimal numbers', () => {
    expect(multiply(0.0001, 0.0001)).toBeCloseTo(0.00000001)
    expect(multiply(0.00001, 0.00001)).toBeCloseTo(0.0000000001)
  })

  it('should handle Number.MAX_SAFE_INTEGER', () => {
    const max = Number.MAX_SAFE_INTEGER
    expect(multiply(max, 1)).toBe(max)
    expect(multiply(1, max)).toBe(max)
  })

  it('should handle Number.MIN_SAFE_INTEGER', () => {
    const min = Number.MIN_SAFE_INTEGER
    expect(multiply(min, 1)).toBe(min)
    expect(multiply(1, min)).toBe(min)
  })
})
