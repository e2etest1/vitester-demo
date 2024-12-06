import { describe, it, expect } from 'vitest';
import { multiply } from './mul';

describe('multiply', () => {
  it('should return the product of two positive numbers', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  it('should return the product of a positive and a negative number', () => {
    expect(multiply(-2, 3)).toBe(-6);
  });

  it('should return the product of two negative numbers', () => {
    expect(multiply(-2, -3)).toBe(6);
  });

  it('should return zero if one of the numbers is zero', () => {
    expect(multiply(0, 5)).toBe(0);
    expect(multiply(5, 0)).toBe(0);
  });

  it('should return zero if both numbers are zero', () => {
    expect(multiply(0, 0)).toBe(0);
  });

  it('should handle large numbers correctly', () => {
    expect(multiply(1e10, 1e10)).toBe(1e20);
  });

  it('should handle small decimal numbers correctly', () => {
    expect(multiply(0.1, 0.2)).toBeCloseTo(0.02);
  });
});
