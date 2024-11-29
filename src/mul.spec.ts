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

  it('should return zero if one of the numbers is zero', () => {
    expect(multiply(0, 5)).toBe(0);
    expect(multiply(5, 0)).toBe(0);
  });

  it('should handle multiplication by one correctly', () => {
    expect(multiply(1, 5)).toBe(5);
    expect(multiply(5, 1)).toBe(5);
  });

  it('should handle multiplication of zero by zero', () => {
    expect(multiply(0, 0)).toBe(0);
  });

  it('should handle multiplication of very large numbers', () => {
    expect(multiply(1e10, 1e10)).toBe(1e20);
  });

  it('should handle multiplication with floating-point numbers', () => {
    expect(multiply(0.1, 0.2)).toBeCloseTo(0.02, 10);
    expect(multiply(1.5, 2.5)).toBeCloseTo(3.75, 10);
  });

  it('should handle multiplication by negative one correctly', () => {
    expect(multiply(-1, 5)).toBe(-5);
    expect(multiply(5, -1)).toBe(-5);
  });
});
