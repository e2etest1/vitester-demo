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

  it('should return zero when one of the numbers is zero', () => {
    expect(multiply(0, 5)).toBe(0);
    expect(multiply(5, 0)).toBe(0);
  });

  it('should return zero when both numbers are zero', () => {
    expect(multiply(0, 0)).toBe(0);
  });

  it('should handle large numbers', () => {
    expect(multiply(1000, 2000)).toBe(2000000);
  });

  it('should handle fractional numbers', () => {
    expect(multiply(0.5, 2)).toBe(1);
    expect(multiply(-0.5, 2)).toBe(-1);
  });

  it('should return the product of one and any number', () => {
    expect(multiply(1, 123)).toBe(123);
    expect(multiply(123, 1)).toBe(123);
  });

  it('should return the product of negative one and any number', () => {
    expect(multiply(-1, 123)).toBe(-123);
    expect(multiply(123, -1)).toBe(-123);
  });

  it('should handle very small numbers', () => {
    expect(multiply(0.0001, 0.0002)).toBeCloseTo(0.00000002);
  });

  it('should handle very large numbers', () => {
    expect(multiply(1e10, 1e10)).toBe(1e20);
  });
});
