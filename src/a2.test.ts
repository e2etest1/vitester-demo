import { describe, it, expect } from 'vitest'
import { sum } from './a2'

describe('sum', () => {
  it('should return the sum of two positive numbers', () => {
    expect(sum(2, 3)).toBe(5)
  })

  it('should return the sum of two negative numbers', () => {
    expect(sum(-2, -3)).toBe(-5)
  })

  it('should return the sum of a positive and a negative number', () => {
    expect(sum(5, -3)).toBe(2)
  })

  it('should return the sum of zero and a number', () => {
    expect(sum(0, 5)).toBe(5)
    expect(sum(5, 0)).toBe(5)
  })
})
