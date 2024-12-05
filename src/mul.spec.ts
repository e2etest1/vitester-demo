import { describe, it, expect } from 'vitest';
import { multiply } from './mul';

describe('multiply', () => {
  it('should multiply two positive numbers', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  it('should multiply a positive and a negative number', () => {
    expect(multiply(2, -3)).toBe(-6);
  });

  it('should multiply two negative numbers', () => {
    expect(multiply(-2, -3)).toBe(6);
  });

  it('should return 0 when one of the numbers is 0', () => {
    expect(multiply(0, 5)).toBe(0);
    expect(multiply(5, 0)).toBe(0);
  });

  it('should multiply a number by 1 and return the same number', () => {
    expect(multiply(7, 1)).toBe(7);
    expect(multiply(1, 7)).toBe(7);
  });

  it('should handle large numbers', () => {
    expect(multiply(1000000, 1000000)).toBe(1000000000000);
  });

  it('should handle very small numbers', () => {
    expect(multiply(0.0001, 0.0002)).toBeCloseTo(0.00000002, 10);
  });

  it('should handle floating point precision', () => {
    expect(multiply(0.1, 0.2)).toBeCloseTo(0.02, 10);
  });

  it('should multiply a number by -1 and return its negation', () => {
    expect(multiply(7, -1)).toBe(-7);
    expect(multiply(-7, -1)).toBe(7);
  });

  it('should handle multiplication of very large and very small numbers', () => {
    expect(multiply(1e10, 1e-10)).toBeCloseTo(1, 10);
  });
});
