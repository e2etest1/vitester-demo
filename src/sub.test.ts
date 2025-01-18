import { describe, it, expect } from 'vitest'
import { sub } from './sub'

describe('sub', () => {
  it('should subtract two positive numbers correctly', () => {
    expect(sub(5, 3)).toBe(2)
  })

  it('should subtract a negative number correctly', () => {
    expect(sub(5, -3)).toBe(8)
  })

  it('should subtract zero correctly', () => {
    expect(sub(5, 0)).toBe(5)
  })

  it('should return zero when subtracting equal numbers', () => {
    expect(sub(5, 5)).toBe(0)
  })

  it('should return negative when subtracting larger from smaller', () => {
    expect(sub(3, 5)).toBe(-2)
  })
})
