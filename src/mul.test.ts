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

  it('should return zero when multiplying by zero', () => {
    expect(multiply(0, 5)).toBe(0);
    expect(multiply(5, 0)).toBe(0);
  });

  it('should return the same number when multiplying by one', () => {
    expect(multiply(1, 7)).toBe(7);
    expect(multiply(7, 1)).toBe(7);
  });

  it('should handle large numbers correctly', () => {
    expect(multiply(100000, 100000)).toBe(10000000000);
  });

  it('should handle floating-point numbers correctly', () => {
    expect(multiply(0.1, 0.2)).toBeCloseTo(0.02, 10);
  });

  it('should handle multiplying by negative one', () => {
    expect(multiply(-1, 8)).toBe(-8);
    expect(multiply(8, -1)).toBe(-8);
  });

  it('should handle very large numbers', () => {
    expect(multiply(1e10, 1e10)).toBe(1e20);
  });

  it('should handle very small numbers', () => {
    expect(multiply(1e-10, 1e-10)).toBeCloseTo(1e-20, 10);
  });
});
