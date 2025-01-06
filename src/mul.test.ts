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

  it('should handle decimal numbers correctly', () => {
    expect(multiply(2.5, 4)).toBe(10);
    expect(multiply(1.5, 1.5)).toBe(2.25);
  });

  it('should handle multiplication by negative one', () => {
    expect(multiply(-1, 5)).toBe(-5);
    expect(multiply(5, -1)).toBe(-5);
  });

  it('should handle very small decimal numbers', () => {
    expect(multiply(0.0001, 0.0002)).toBeCloseTo(0.00000002);
  });

  it('should handle multiplication with infinity', () => {
    expect(multiply(Infinity, 5)).toBe(Infinity);
    expect(multiply(5, Infinity)).toBe(Infinity);
    expect(multiply(-Infinity, 5)).toBe(-Infinity);
    expect(multiply(5, -Infinity)).toBe(-Infinity);
  });

  it('should handle multiplication with NaN', () => {
    expect(multiply(NaN, 5)).toBeNaN();
    expect(multiply(5, NaN)).toBeNaN();
  });
});
