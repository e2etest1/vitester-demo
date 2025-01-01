import { describe, it, expect } from 'vitest';
import { multiply } from './mul';

describe('multiply', () => {
  it('should return the product of two positive numbers', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  it('should return the product of a positive and a negative number', () => {
    expect(multiply(-2, 3)).toBe(-6);
  });

  it('should return zero when one of the numbers is zero', () => {
    expect(multiply(0, 5)).toBe(0);
    expect(multiply(7, 0)).toBe(0);
  });

  it('should return the product of two negative numbers', () => {
    expect(multiply(-4, -5)).toBe(20);
  });

  it('should handle multiplication by one correctly', () => {
    expect(multiply(1, 9)).toBe(9);
    expect(multiply(9, 1)).toBe(9);
  });
});
