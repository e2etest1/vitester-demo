import { describe, expect, it } from 'vitest'
import { multiply } from './mul'

describe('multiply', () => {
  it('should multiply two positive numbers correctly', () => {
    expect(multiply(2, 3)).toBe(6)
    expect(multiply(10, 5)).toBe(50)
  })

  it('should multiply positive and negative numbers correctly', () => {
    expect(multiply(2, -3)).toBe(-6)
    expect(multiply(-4, 5)).toBe(-20)
  })

  it('should multiply two negative numbers correctly', () => {
    expect(multiply(-2, -3)).toBe(6)
    expect(multiply(-5, -4)).toBe(20)
  })

  it('should handle multiplication with zero', () => {
    expect(multiply(0, 5)).toBe(0)
    expect(multiply(10, 0)).toBe(0)
    expect(multiply(0, 0)).toBe(0)
  })

  it('should handle decimal numbers correctly', () => {
    expect(multiply(2.5, 2)).toBe(5)
    expect(multiply(0.1, 0.2)).toBeCloseTo(0.02)
    expect(multiply(1.5, -2)).toBe(-3)
  })

  it('should handle large numbers', () => {
    expect(multiply(999999, 999999)).toBe(999998000001)
    expect(multiply(1e6, 1e6)).toBe(1e12)
  })
})
