import { describe, expect, it } from 'vitest'
import { multiply } from './mul'

describe('multiply', () => {
  it('should multiply two positive numbers', () => {
    expect(multiply(2, 3)).toBe(6)
    expect(multiply(4, 5)).toBe(20)
  })

  it('should multiply a positive and negative number', () => {
    expect(multiply(2, -3)).toBe(-6)
    expect(multiply(-4, 5)).toBe(-20)
  })

  it('should multiply two negative numbers', () => {
    expect(multiply(-2, -3)).toBe(6)
    expect(multiply(-4, -5)).toBe(20)
  })

  it('should multiply by zero', () => {
    expect(multiply(5, 0)).toBe(0)
    expect(multiply(0, 5)).toBe(0)
    expect(multiply(0, 0)).toBe(0)
  })

  it('should multiply decimal numbers', () => {
    expect(multiply(0.5, 2)).toBe(1)
    expect(multiply(2.5, 2.5)).toBe(6.25)
  })

  it('should handle large numbers', () => {
    expect(multiply(999999, 999999)).toBe(999998000001)
  })
})
