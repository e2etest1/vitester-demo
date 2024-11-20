import { describe, it, expect } from 'vitest';
import { multiply } from './mul';

describe('multiply', () => {
  it('should return the product of two positive numbers', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  it('should return the product of a positive and a negative number', () => {
    expect(multiply(5, -4)).toBe(-20);
  });

  it('should return the product of two negative numbers', () => {
    expect(multiply(-3, -7)).toBe(21);
  });

  it('should return zero when one of the numbers is zero', () => {
    expect(multiply(0, 10)).toBe(0);
    expect(multiply(10, 0)).toBe(0);
  });

  it('should return zero when both numbers are zero', () => {
    expect(multiply(0, 0)).toBe(0);
  });

  it('should handle decimal numbers', () => {
    expect(multiply(1.5, 2)).toBeCloseTo(3.0);
    expect(multiply(-1.5, 2)).toBeCloseTo(-3.0);
  });
});
