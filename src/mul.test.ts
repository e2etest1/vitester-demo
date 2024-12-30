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
    expect(multiply(3, 0)).toBe(0);
    expect(multiply(0, 4)).toBe(0);
  });

  it('should return zero when both numbers are zero', () => {
    expect(multiply(0, 0)).toBe(0);
  });

  it('should handle large numbers correctly', () => {
    expect(multiply(1e10, 1e10)).toBe(1e20);
  });

  it('should handle very small numbers correctly', () => {
    expect(multiply(1e-10, 1e-10)).toBeCloseTo(1e-20);
  });

  it('should handle fractions correctly', () => {
    expect(multiply(0.5, 0.2)).toBeCloseTo(0.1);
  });

  it('should handle non-integer values correctly', () => {
    expect(multiply(2.5, 4)).toBe(10);
    expect(multiply(3, 2.5)).toBe(7.5);
  });

  it('should handle negative fractions correctly', () => {
    expect(multiply(-0.5, 0.2)).toBeCloseTo(-0.1);
    expect(multiply(0.5, -0.2)).toBeCloseTo(-0.1);
  });
});
