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

  it('should multiply a number by zero', () => {
    expect(multiply(5, 0)).toBe(0);
  });

  it('should multiply zero by a number', () => {
    expect(multiply(0, 5)).toBe(0);
  });

  it('should multiply zero by zero', () => {
    expect(multiply(0, 0)).toBe(0);
  });

  it('should multiply with large positive numbers', () => {
    expect(multiply(1e10, 1e10)).toBe(1e20);
  });

  it('should multiply with large negative numbers', () => {
    expect(multiply(-1e10, 1e10)).toBe(-1e20);
  });

  it('should multiply with very small numbers', () => {
    expect(multiply(1e-10, 1e-10)).toBeCloseTo(1e-20);
  });

  it('should multiply with maximum safe integer', () => {
    expect(multiply(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER);
  });

  it('should multiply with minimum safe integer', () => {
    expect(multiply(Number.MIN_SAFE_INTEGER, 1)).toBe(Number.MIN_SAFE_INTEGER);
  });

  it('should multiply with non-integer values', () => {
    expect(multiply(2.5, 4)).toBe(10);
    expect(multiply(2.5, -4)).toBe(-10);
  });
});
