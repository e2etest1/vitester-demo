import { describe, it, expect } from 'vitest';
import { multiply } from './mul';

describe('multiply', () => {
  it('should return the product of two positive numbers', () => {
    expect(multiply(3, 4)).toBe(12);
  });

  it('should return the product of a positive and a negative number', () => {
    expect(multiply(3, -4)).toBe(-12);
  });

  it('should return the product of two negative numbers', () => {
    expect(multiply(-3, -4)).toBe(12);
  });

  it('should return zero when multiplying by zero', () => {
    expect(multiply(0, 5)).toBe(0);
    expect(multiply(5, 0)).toBe(0);
  });

  it('should return zero when both numbers are zero', () => {
    expect(multiply(0, 0)).toBe(0);
  });

  it('should handle large numbers', () => {
    expect(multiply(100000, 100000)).toBe(10000000000);
  });

  it('should handle multiplication with one as an operand', () => {
    expect(multiply(1, 7)).toBe(7);
    expect(multiply(7, 1)).toBe(7);
  });

  it('should handle multiplication with negative one as an operand', () => {
    expect(multiply(-1, 7)).toBe(-7);
    expect(multiply(7, -1)).toBe(-7);
  });

  it('should handle floating-point numbers', () => {
    expect(multiply(0.1, 0.2)).toBeCloseTo(0.02, 10);
    expect(multiply(-0.1, 0.2)).toBeCloseTo(-0.02, 10);
  });

  it('should handle very large and very small numbers', () => {
    expect(multiply(1e10, 1e-10)).toBeCloseTo(1, 10);
    expect(multiply(-1e10, 1e-10)).toBeCloseTo(-1, 10);
  });
});
