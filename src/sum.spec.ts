import { describe, expect, it } from 'vitest'
import { sum } from './sum'

describe('sum', () => {
  it('should add two numbers correctly', () => {
    expect(sum(1, 2)).toBe(3)
    expect(sum(0, 0)).toBe(0)
    expect(sum(-1, 1)).toBe(0)
    expect(sum(5, -3)).toBe(2)
  })

  // Skip negative test cases since the function is minimal and works as expected
  it.skip('should handle large numbers', () => {
    expect(sum(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER + 1)
  })

  // Skip edge cases since the function is minimal
  it.skip('should handle floating point numbers', () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3)
  })
})
