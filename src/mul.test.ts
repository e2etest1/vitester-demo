import { describe, it, expect } from 'vitest'
import { multiply } from './mul'

describe('multiply', () => {
  it('should multiply two positive numbers correctly', () => {
    expect(multiply(2, 3)).toBe(6)
    expect(multiply(4, 5)).toBe(20)
  })

  it('should handle zero', () => {
    expect(multiply(0, 5)).toBe(0)
    expect(multiply(5, 0)).toBe(0)
    expect(multiply(0, 0)).toBe(0)
  })

  it('should handle negative numbers', () => {
    expect(multiply(-2, 3)).toBe(-6)
    expect(multiply(2, -3)).toBe(-6)
    expect(multiply(-2, -3)).toBe(6)
  })

  it('should handle large numbers', () => {
    expect(multiply(999999, 999999)).toBe(999998000001)
  })

  it('should handle decimal numbers', () => {
    expect(multiply(0.5, 0.5)).toBe(0.25)
    expect(multiply(1.5, 2)).toBe(3)
  })
})
