import { describe, it, expect } from 'vitest'
import { multiply } from './mul'

describe('multiply', () => {
  it('should multiply two positive numbers correctly', () => {
    expect(multiply(2, 3)).toBe(6)
    expect(multiply(10, 5)).toBe(50)
  })

  it('should multiply negative numbers correctly', () => {
    expect(multiply(-2, 3)).toBe(-6)
    expect(multiply(2, -3)).toBe(-6)
    expect(multiply(-2, -3)).toBe(6)
  })

  it('should multiply by zero correctly', () => {
    expect(multiply(5, 0)).toBe(0)
    expect(multiply(0, 5)).toBe(0)
    expect(multiply(0, 0)).toBe(0)
  })

  it('should handle decimal numbers', () => {
    expect(multiply(2.5, 2)).toBe(5)
    expect(multiply(0.1, 0.2)).toBeCloseTo(0.02)
  })

  it('should handle large numbers', () => {
    expect(multiply(999999, 999999)).toBe(999998000001)
    expect(multiply(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER)
  })
})
