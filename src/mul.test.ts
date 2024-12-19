import { describe, it, expect } from 'vitest'
import { multiply } from './mul'

describe('multiply', () => {
  it('should return the product of two positive numbers', () => {
    expect(multiply(3, 4)).toBe(12)
  })

  it('should return the product of a positive and a negative number', () => {
    expect(multiply(3, -4)).toBe(-12)
  })

  it('should return the product of two negative numbers', () => {
    expect(multiply(-3, -4)).toBe(12)
  })

  it('should return zero when one of the numbers is zero', () => {
    expect(multiply(0, 5)).toBe(0)
    expect(multiply(5, 0)).toBe(0)
  })

  it('should return zero when both numbers are zero', () => {
    expect(multiply(0, 0)).toBe(0)
  })

  it('should handle large numbers', () => {
    expect(multiply(1000, 2000)).toBe(2000000)
  })

  it('should handle small decimal numbers', () => {
    expect(multiply(0.1, 0.2)).toBeCloseTo(0.02, 5)
  })

  it('should return the number itself when multiplied by one', () => {
    expect(multiply(1, 5)).toBe(5)
    expect(multiply(5, 1)).toBe(5)
    expect(multiply(-1, 5)).toBe(-5)
    expect(multiply(5, -1)).toBe(-5)
  })

  it('should handle very small numbers', () => {
    expect(multiply(1e-10, 1e-10)).toBeCloseTo(1e-20, 15)
  })
})
