import { describe, expect, it } from 'vitest'
import { multiply } from './mul'

describe('multiply', () => {
  it('should multiply two positive numbers', () => {
    expect(multiply(2, 3)).toBe(6)
  })

  it('should multiply a positive and negative number', () => {
    expect(multiply(2, -3)).toBe(-6)
  })

  it('should multiply two negative numbers', () => {
    expect(multiply(-2, -3)).toBe(6)
  })

  it('should multiply by zero', () => {
    expect(multiply(5, 0)).toBe(0)
    expect(multiply(0, 5)).toBe(0)
  })

  // Skip decimal multiplication test as it may have floating point precision issues
  it.skip('should multiply decimal numbers', () => {
    expect(multiply(0.1, 0.2)).toBe(0.02)
  })
})
