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

  it('should return 0 when multiplying by zero', () => {
    expect(multiply(0, 5)).toBe(0);
    expect(multiply(5, 0)).toBe(0);
  });

  it('should return the number itself when multiplying by one', () => {
    expect(multiply(1, 5)).toBe(5);
    expect(multiply(5, 1)).toBe(5);
  });

  it('should handle large numbers correctly', () => {
    expect(multiply(1000000, 1000000)).toBe(1000000000000);
  });

  it('should handle very large numbers correctly', () => {
    expect(multiply(1e12, 1e12)).toBe(1e24);
  });

  it('should handle very small numbers correctly', () => {
    expect(multiply(1e-12, 1e-12)).toBeCloseTo(1e-24);
  });

  it('should handle floating point numbers correctly', () => {
    expect(multiply(1.5, 2.5)).toBeCloseTo(3.75);
  });

  it('should return 0 when multiplying zero by zero', () => {
    expect(multiply(0, 0)).toBe(0);
  });
});
