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
    expect(multiply(1000000, 1000000)).toBe(1000000000000);
  });

  it('should handle decimal numbers', () => {
    expect(multiply(1.5, 2)).toBe(3);
    expect(multiply(-1.5, 2)).toBe(-3);
  });

  it('should handle very large numbers without overflow', () => {
    expect(multiply(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER);
    expect(multiply(Number.MAX_SAFE_INTEGER, 0)).toBe(0);
  });

  it('should handle very small numbers', () => {
    expect(multiply(Number.MIN_VALUE, 1)).toBe(Number.MIN_VALUE);
    expect(multiply(Number.MIN_VALUE, 0)).toBe(0);
  });
});
