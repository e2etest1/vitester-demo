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
    expect(multiply(0, 3)).toBe(0);
    expect(multiply(3, 0)).toBe(0);
  });

  it('should return zero when both numbers are zero', () => {
    expect(multiply(0, 0)).toBe(0);
  });

  it('should handle large numbers correctly', () => {
    expect(multiply(1000000, 1000000)).toBe(1000000000000);
  });

  it('should return the same number when multiplied by one', () => {
    expect(multiply(1, 5)).toBe(5);
    expect(multiply(5, 1)).toBe(5);
  });

  it('should return the negative of the number when multiplied by negative one', () => {
    expect(multiply(-1, 5)).toBe(-5);
    expect(multiply(5, -1)).toBe(-5);
  });

  it('should handle very large numbers correctly', () => {
    expect(multiply(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER);
    expect(multiply(Number.MAX_SAFE_INTEGER, 2)).toBe(18014398509481982);
  });
});
