import { describe, it, expect } from 'vitest';
import { multiply } from './mul';

describe('multiply', () => {
  it('should return 0 when one of the arguments is 0', () => {
    expect(multiply(0, 5)).toBe(0);
    expect(multiply(5, 0)).toBe(0);
  });

  it('should return the correct product for positive numbers', () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(7, 8)).toBe(56);
  });

  it('should return the correct product for negative numbers', () => {
    expect(multiply(-2, 3)).toBe(-6);
    expect(multiply(2, -3)).toBe(-6);
    expect(multiply(-2, -3)).toBe(6);
  });

  it('should return the correct product for mixed positive and negative numbers', () => {
    expect(multiply(-5, 4)).toBe(-20);
    expect(multiply(5, -4)).toBe(-20);
  });

  it('should handle large numbers', () => {
    expect(multiply(100000, 200000)).toBe(20000000000);
  });

  it('should handle edge cases with very small numbers', () => {
    expect(multiply(0.1, 0.2)).toBeCloseTo(0.02);
  });
});
