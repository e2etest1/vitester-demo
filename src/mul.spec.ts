import { describe, it, expect } from 'vitest'
import { multiply } from './mul'

describe('multiply', () => {
  it('should return the product of two positive numbers', () => {
    expect(multiply(3, 4)).toBe(12)
  })

  it('should return the product of a positive and a negative number', () => {
    expect(multiply(-3, 4)).toBe(-12)
  })

  it('should return the product of two negative numbers', () => {
    expect(multiply(-3, -4)).toBe(12)
  })

  it('should return zero when multiplying any number by zero', () => {
    expect(multiply(5, 0)).toBe(0)
    expect(multiply(0, 5)).toBe(0)
  })

  it('should return zero when multiplying zero by zero', () => {
    expect(multiply(0, 0)).toBe(0)
  })

  it('should return the same number when multiplying by one', () => {
    expect(multiply(7, 1)).toBe(7)
    expect(multiply(1, 7)).toBe(7)
    expect(multiply(-7, 1)).toBe(-7)
    expect(multiply(1, -7)).toBe(-7)
  })

  it('should handle large numbers correctly', () => {
    expect(multiply(1e10, 1e10)).toBe(1e20)
    expect(multiply(-1e10, 1e10)).toBe(-1e20)
    expect(multiply(1e10, -1e10)).toBe(-1e20)
    expect(multiply(-1e10, -1e10)).toBe(1e20)
  })

  it('should handle fractional numbers correctly', () => {
    expect(multiply(0.5, 0.2)).toBeCloseTo(0.1)
    expect(multiply(-0.5, 0.2)).toBeCloseTo(-0.1)
    expect(multiply(0.5, -0.2)).toBeCloseTo(-0.1)
    expect(multiply(-0.5, -0.2)).toBeCloseTo(0.1)
  })
})
