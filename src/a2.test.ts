import { describe, it, expect } from 'vitest'
import { sum } from './a2'

describe('sum', () => {
  it('should add two positive numbers correctly', () => {
    expect(sum(2, 3)).toBe(5)
  })

  it('should add a positive and negative number correctly', () => {
    expect(sum(5, -3)).toBe(2)
  })

  it('should add two negative numbers correctly', () => {
    expect(sum(-2, -4)).toBe(-6)
  })

  it('should add zero correctly', () => {
    expect(sum(5, 0)).toBe(5)
    expect(sum(0, 5)).toBe(5)
    expect(sum(0, 0)).toBe(0)
  })
})
