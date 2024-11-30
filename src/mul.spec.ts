import { describe, it, expect } from 'vitest';
import { multiply } from './mul';

describe('multiply', () => {
  it('should multiply two positive numbers correctly', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  it('should multiply a positive and a negative number correctly', () => {
    expect(multiply(4, -5)).toBe(-20);
  });

  it('should multiply two negative numbers correctly', () => {
    expect(multiply(-2, -3)).toBe(6);
  });

  it('should return zero when multiplying any number by zero', () => {
    expect(multiply(0, 5)).toBe(0);
    expect(multiply(5, 0)).toBe(0);
  });

  it('should return zero when multiplying zero by zero', () => {
    expect(multiply(0, 0)).toBe(0);
  });

  it('should handle multiplying by one correctly', () => {
    expect(multiply(1, 7)).toBe(7);
    expect(multiply(7, 1)).toBe(7);
  });

  it('should handle multiplying by negative one correctly', () => {
    expect(multiply(-1, 7)).toBe(-7);
    expect(multiply(7, -1)).toBe(-7);
  });

  it('should handle large numbers correctly', () => {
    expect(multiply(1000000, 1000000)).toBe(1000000000000);
  });

  it('should handle non-integer values correctly', () => {
    expect(multiply(2.5, 4)).toBe(10);
    expect(multiply(3.5, -2)).toBe(-7);
  });

  it('should handle multiplying by fractions correctly', () => {
    expect(multiply(0.5, 0.5)).toBe(0.25);
  });

  it('should handle edge case of multiplying by very small numbers', () => {
    expect(multiply(1e-10, 1e-10)).toBeCloseTo(1e-20);
  });

  it('should handle edge case of multiplying by very large positive and negative numbers', () => {
    expect(multiply(1e10, -1e10)).toBe(-1e20);
  });
});
