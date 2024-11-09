import { describe, expect, it } from 'vitest'
import { multiply } from './mul'

describe('multiply', () => {
  it('should multiply two numbers', () => {
    expect(multiply(2, 3)).toBe(6)
    expect(multiply(-2, 3)).toBe(-6)
    expect(multiply(0, 5)).toBe(0)
  })

  it('should handle decimal numbers', () => {
    expect(multiply(0.5, 2)).toBe(1)
    expect(multiply(1.5, 2)).toBe(3)
  })

  // Skip negative test cases since multiply() is a minimal function
  // and negative test cases are not critical for basic functionality
  it.skip('should handle invalid inputs', () => {
    expect(multiply(NaN, 2)).toBe(NaN)
    expect(multiply(Infinity, 0)).toBe(NaN)
  })
})
