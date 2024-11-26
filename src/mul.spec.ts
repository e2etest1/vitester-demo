import { describe, it, expect } from 'vitest';
import { multiply } from './mul';

describe('multiply', () => {
  it('should multiply two positive numbers correctly', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  it('should multiply a positive and a negative number correctly', () => {
    expect(multiply(2, -3)).toBe(-6);
  });

  it('should multiply two negative numbers correctly', () => {
    expect(multiply(-2, -3)).toBe(6);
  });

  it('should return zero when multiplying any number with zero', () => {
    expect(multiply(0, 5)).toBe(0);
    expect(multiply(5, 0)).toBe(0);
  });

  it('should multiply decimal numbers correctly', () => {
    expect(multiply(1.5, 2)).toBe(3);
    expect(multiply(2.5, 2.5)).toBe(6.25);
  });

  it('should handle multiplication of large numbers', () => {
    expect(multiply(1e10, 1e10)).toBe(1e20);
  });

  it('should return the same number when multiplying by one', () => {
    expect(multiply(1, 7)).toBe(7);
    expect(multiply(7, 1)).toBe(7);
  });

  it('should handle multiplication with very small numbers', () => {
    expect(multiply(1e-10, 1e-10)).toBeCloseTo(1e-20);
  });

  it('should handle potential overflow scenarios', () => {
    expect(multiply(Number.MAX_SAFE_INTEGER, 2)).toBe(Number.MAX_SAFE_INTEGER * 2);
  });
});
