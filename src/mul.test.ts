import { describe, expect, it } from 'vitest'
import { multiply } from './mul'

describe('multiply', () => {
  it('should multiply two positive numbers correctly', () => {
    expect(multiply(2, 3)).toBe(6)
    expect(multiply(4, 5)).toBe(20)
  })

  it('should multiply a number by zero correctly', () => {
    expect(multiply(5, 0)).toBe(0)
    expect(multiply(0, 7)).toBe(0)
  })

  it('should multiply a number by one correctly', () => {
    expect(multiply(8, 1)).toBe(8)
    expect(multiply(1, 9)).toBe(9)
  })

  it('should multiply negative numbers correctly', () => {
    expect(multiply(-2, 3)).toBe(-6)
    expect(multiply(2, -3)).toBe(-6)
    expect(multiply(-2, -3)).toBe(6)
  })

  it('should multiply decimal numbers correctly', () => {
    expect(multiply(2.5, 2)).toBe(5)
    expect(multiply(1.5, 1.5)).toBe(2.25)
  })
})
