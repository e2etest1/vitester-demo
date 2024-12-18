import { describe, it, expect } from 'vitest';
import { multiply } from './mul';

describe('multiply', () => {
  it('should multiply two positive numbers correctly', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  it('should multiply a positive and a negative number correctly', () => {
    expect(multiply(-2, 3)).toBe(-6);
  });

  it('should multiply two negative numbers correctly', () => {
    expect(multiply(-2, -3)).toBe(6);
  });

  it('should return zero when one of the numbers is zero', () => {
    expect(multiply(0, 5)).toBe(0);
    expect(multiply(5, 0)).toBe(0);
  });

  it('should multiply by one correctly', () => {
    expect(multiply(1, 7)).toBe(7);
    expect(multiply(7, 1)).toBe(7);
  });

  it('should handle large numbers correctly', () => {
    expect(multiply(1e6, 1e6)).toBe(1e12);
  });

  it('should handle fractional numbers correctly', () => {
    expect(multiply(0.5, 0.2)).toBeCloseTo(0.1);
  });

  it('should handle multiplication with zero correctly', () => {
    expect(multiply(0, 0)).toBe(0);
  });

  it('should handle multiplication with negative and zero correctly', () => {
    expect(multiply(-5, 0)).toBeCloseTo(0);
    expect(multiply(0, -5)).toBeCloseTo(0);
  });

  it('should handle multiplication with very small numbers', () => {
    expect(multiply(1e-6, 1e-6)).toBeCloseTo(1e-12);
  });
});
