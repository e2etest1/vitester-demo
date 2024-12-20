import { describe, it, expect } from 'vitest';
import { multiply } from './mul';

describe('multiply', () => {
  it('should return the product of two positive numbers', () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(5, 5)).toBe(25);
  });

  it('should return the product of a positive and a negative number', () => {
    expect(multiply(-2, 3)).toBe(-6);
    expect(multiply(5, -5)).toBe(-25);
  });

  it('should return the product of two negative numbers', () => {
    expect(multiply(-2, -3)).toBe(6);
    expect(multiply(-5, -5)).toBe(25);
  });

  it('should return zero when multiplied by zero', () => {
    expect(multiply(0, 5)).toBe(0);
    expect(multiply(5, 0)).toBe(0);
    expect(multiply(0, 0)).toBe(0);
  });

  it('should handle large numbers', () => {
    expect(multiply(1000000, 1000000)).toBe(1000000000000);
  });

  it('should handle small numbers', () => {
    expect(multiply(0.1, 0.2)).toBeCloseTo(0.02);
  });
});
