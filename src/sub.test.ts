import { describe, it, expect } from 'vitest';
import { sub } from './sub';

describe('sub', () => {
  it('should return the correct difference for positive numbers', () => {
    expect(sub(5, 3)).toBe(2);
  });

  it('should return the correct difference for negative numbers', () => {
    expect(sub(-5, -3)).toBe(-2);
  });

  it('should return the correct difference when the result is zero', () => {
    expect(sub(3, 3)).toBe(0);
  });

  it('should return the correct difference for a mix of positive and negative numbers', () => {
    expect(sub(-5, 3)).toBe(-8);
    expect(sub(5, -3)).toBe(8);
  });
});
