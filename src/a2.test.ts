import { describe, it, expect } from 'vitest'
import { sum } from './a2'

describe('sum', () => {
  it('should correctly add two positive numbers', () => {
    expect(sum(2, 3)).toBe(5)
  })

  it('should correctly add a positive and negative number', () => {
    expect(sum(5, -3)).toBe(2)
  })

  it('should correctly add two negative numbers', () => {
    expect(sum(-2, -4)).toBe(-6)
  })

  it('should correctly add zero with a number', () => {
    expect(sum(0, 5)).toBe(5)
    expect(sum(5, 0)).toBe(5)
  })

  it('should correctly add zero with zero', () => {
    expect(sum(0, 0)).toBe(0)
  })
})
