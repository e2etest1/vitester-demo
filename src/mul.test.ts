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

  it('should handle multiplication with large numbers', () => {
    expect(multiply(1000000, 1000000)).toBe(1000000000000);
  });

  it('should handle multiplication with one', () => {
    expect(multiply(1, 5)).toBe(5);
    expect(multiply(5, 1)).toBe(5);
  });

  it('should handle multiplication with negative one', () => {
    expect(multiply(-1, 5)).toBe(-5);
    expect(multiply(5, -1)).toBe(-5);
  });

  it('should handle multiplication with decimal numbers', () => {
    expect(multiply(2.5, 4)).toBe(10);
    expect(multiply(3.5, 2)).toBe(7);
  });

  it('should handle multiplication with very small numbers', () => {
    expect(multiply(0.0001, 0.0002)).toBeCloseTo(0.00000002, 10);
  });

  it('should handle multiplication with negative decimals', () => {
    expect(multiply(-2.5, 4)).toBe(-10);
    expect(multiply(3.5, -2)).toBe(-7);
  });
});
