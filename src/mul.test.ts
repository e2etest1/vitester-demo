import { describe, it, expect } from 'vitest';
import { multiply } from './mul';

describe('multiply', () => {
  it('should return the product of two positive numbers', () => {
    expect(multiply(3, 4)).toBe(12);
  });

  it('should return the product of a positive and a negative number', () => {
    expect(multiply(3, -4)).toBe(-12);
  });

  it('should return the product of two negative numbers', () => {
    expect(multiply(-3, -4)).toBe(12);
  });

  it('should return zero when multiplying by zero', () => {
    expect(multiply(3, 0)).toBe(0);
    expect(multiply(0, 4)).toBe(0);
  });

  it('should return zero when both numbers are zero', () => {
    expect(multiply(0, 0)).toBe(0);
  });

  it('should handle large numbers correctly', () => {
    expect(multiply(1e10, 1e10)).toBe(1e20);
  });
});
