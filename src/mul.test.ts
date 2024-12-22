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
    expect(multiply(1e6, 1e6)).toBe(1e12);
  });

  it('should return the same number when multiplied by one', () => {
    expect(multiply(1, 5)).toBe(5);
    expect(multiply(5, 1)).toBe(5);
  });

  it('should handle floating-point numbers', () => {
    expect(multiply(0.1, 0.2)).toBeCloseTo(0.02, 5);
    expect(multiply(-0.1, 0.2)).toBeCloseTo(-0.02, 5);
  });

  it('should return negative when one of the numbers is negative and the other is positive', () => {
    expect(multiply(-5, 2)).toBe(-10);
    expect(multiply(5, -2)).toBe(-10);
  });

  it('should return positive when both numbers are negative', () => {
    expect(multiply(-5, -2)).toBe(10);
  });
});
