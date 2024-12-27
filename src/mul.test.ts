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
    expect(multiply(0, 3)).toBe(0);
    expect(multiply(2, 0)).toBe(0);
  });

  it('should return zero when both numbers are zero', () => {
    expect(multiply(0, 0)).toBe(0);
  });

  it('should handle large numbers correctly', () => {
    expect(multiply(1000000, 1000000)).toBe(1000000000000);
  });

  it('should handle multiplication with Infinity', () => {
    expect(multiply(Infinity, 1)).toBe(Infinity);
    expect(multiply(-Infinity, 1)).toBe(-Infinity);
    expect(multiply(Infinity, 0)).toBeNaN();
  });

  it('should handle multiplication with very small floating-point numbers', () => {
    expect(multiply(1e-10, 1e-10)).toBeCloseTo(1e-20, 15);
  });

  it('should handle multiplication with floating-point precision', () => {
    expect(multiply(0.1, 0.2)).toBeCloseTo(0.02, 10);
  });
});
