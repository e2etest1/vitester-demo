import { describe, it, expect } from 'vitest';
import { multiply } from './mul';

describe('multiply', () => {
  it('should return the product of two positive numbers', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  it('should return the product of a positive and a negative number', () => {
    expect(multiply(2, -3)).toBe(-6);
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
    expect(multiply(1000000, 1000000)).toBe(1000000000000);
  });

  it('should handle floating-point numbers correctly', () => {
    expect(multiply(0.1, 0.2)).toBeCloseTo(0.02, 10);
  });

  it('should handle multiplication by one', () => {
    expect(multiply(1, 5)).toBe(5);
    expect(multiply(5, 1)).toBe(5);
  });

  it('should handle multiplication by negative one', () => {
    expect(multiply(-1, 5)).toBe(-5);
    expect(multiply(5, -1)).toBe(-5);
  });

  it('should return a negative product for one positive and one negative floating-point number', () => {
    expect(multiply(0.1, -0.2)).toBeCloseTo(-0.02, 10);
  });

  it('should return a positive product for two negative floating-point numbers', () => {
    expect(multiply(-0.1, -0.2)).toBeCloseTo(0.02, 10);
  });
});
