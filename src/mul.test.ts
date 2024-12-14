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

  it('should handle multiplying with zero for both numbers', () => {
    expect(multiply(0, 0)).toBe(0);
  });

  it('should multiply a number by one', () => {
    expect(multiply(1, 7)).toBe(7);
    expect(multiply(7, 1)).toBe(7);
  });

  it('should multiply a number by negative one', () => {
    expect(multiply(-1, 7)).toBe(-7);
    expect(multiply(7, -1)).toBe(-7);
  });

  it('should handle large numbers', () => {
    expect(multiply(1e10, 1e10)).toBe(1e20);
  });

  it('should handle very small numbers', () => {
    expect(multiply(1e-10, 1e-10)).toBeCloseTo(1e-20);
  });

  it('should handle floating-point numbers', () => {
    expect(multiply(1.5, 2.5)).toBeCloseTo(3.75);
  });

  it('should handle multiplying a number by itself', () => {
    expect(multiply(4, 4)).toBe(16);
    expect(multiply(-4, -4)).toBe(16);
  });

  it('should handle multiplying negative and positive floating-point numbers', () => {
    expect(multiply(-1.5, 2.5)).toBeCloseTo(-3.75);
    expect(multiply(1.5, -2.5)).toBeCloseTo(-3.75);
  });
});
