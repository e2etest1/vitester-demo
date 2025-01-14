import { describe, it, expect } from 'vitest'
import { greet } from './greet'

describe('greet', () => {
  it('should return default greeting with name', () => {
    expect(greet('John')).toBe('Hello, John!')
  })

  it('should return custom greeting with name', () => {
    expect(greet('John', 'Hi')).toBe('Hi, John!')
  })

  it('should handle empty name', () => {
    expect(greet('')).toBe('Hello, !')
  })

  it('should handle empty custom greeting by using default', () => {
    expect(greet('John', '')).toBe('Hello, John!')
  })
})
