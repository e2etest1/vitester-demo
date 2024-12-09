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
    expect(multiply(0.5, 2)).toBeCloseTo(1);
    expect(multiply(2, 0.5)).toBeCloseTo(1);
  });

  it('should handle multiplying very large numbers', () => {
    expect(multiply(1e10, 1e10)).toBe(1e20);
  });

  it('should handle multiplying very small numbers', () => {
    expect(multiply(1e-10, 1e-10)).toBeCloseTo(1e-20);
  });

  it('should handle multiplying a positive and a zero', () => {
    expect(multiply(0, 0.5)).toBe(0);
    expect(multiply(0.5, 0)).toBe(0);
  });

  it('should handle multiplying negative and positive fractions', () => {
    expect(multiply(-0.5, 2)).toBeCloseTo(-1);
    expect(multiply(2, -0.5)).toBeCloseTo(-1);
  });

  it('should handle multiplying negative fractions', () => {
    expect(multiply(-0.5, -2)).toBeCloseTo(1);
  });

  it('should handle multiplying with max safe integer', () => {
    expect(multiply(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER);
    expect(multiply(Number.MAX_SAFE_INTEGER, 0)).toBe(0);
  });

  it('should handle multiplying with min safe integer', () => {
    expect(multiply(Number.MIN_SAFE_INTEGER, 1)).toBe(Number.MIN_SAFE_INTEGER);
    expect(multiply(Number.MIN_SAFE_INTEGER, 0)).toBe(-0);
  });
});
