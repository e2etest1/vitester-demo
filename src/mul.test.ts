import { describe, it, expect } from 'vitest';
import { multiply } from './mul';

describe('multiply', () => {
  it('should multiply two positive numbers', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  it('should multiply a positive and a negative number', () => {
    expect(multiply(2, -3)).toBe(-6);
  });

  it('should multiply two negative numbers', () => {
    expect(multiply(-2, -3)).toBe(6);
  });

  it('should return zero when multiplying by zero', () => {
    expect(multiply(0, 5)).toBe(0);
    expect(multiply(5, 0)).toBe(0);
  });

  it('should return the same number when multiplying by one', () => {
    expect(multiply(1, 5)).toBe(5);
    expect(multiply(5, 1)).toBe(5);
  });

  it('should handle multiplying zero by zero', () => {
    expect(multiply(0, 0)).toBe(0);
  });

  it('should handle multiplying by large numbers', () => {
    expect(multiply(1000000, 1000000)).toBe(1000000000000);
  });

  it('should handle multiplying by fractions', () => {
    expect(multiply(0.5, 2)).toBe(1);
    expect(multiply(2, 0.5)).toBe(1);
  });

  it('should handle multiplying by very small numbers', () => {
    expect(multiply(1e-10, 1e-10)).toBeCloseTo(1e-20);
  });

  it('should handle multiplying by non-integer numbers', () => {
    expect(multiply(2.5, 4)).toBe(10);
    expect(multiply(4, 2.5)).toBe(10);
  });

  it('should handle multiplying by negative fractions', () => {
    expect(multiply(-0.5, 2)).toBe(-1);
    expect(multiply(2, -0.5)).toBe(-1);
  });
});
