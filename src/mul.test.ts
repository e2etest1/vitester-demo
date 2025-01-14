import { describe, it, expect } from 'vitest';
import { multiply } from './mul';

describe('multiply', () => {
  it('should multiply two positive numbers correctly', () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(4, 5)).toBe(20);
    expect(multiply(10, 10)).toBe(100);
  });

  it('should multiply positive and negative numbers correctly', () => {
    expect(multiply(2, -3)).toBe(-6);
    expect(multiply(-4, 5)).toBe(-20);
    expect(multiply(-2, -3)).toBe(6);
  });

  it('should multiply with zero correctly', () => {
    expect(multiply(0, 5)).toBe(0);
    expect(multiply(10, 0)).toBe(0);
    expect(multiply(0, 0)).toBe(0);
  });

  it('should multiply decimal numbers correctly', () => {
    expect(multiply(0.5, 2)).toBe(1);
    expect(multiply(1.5, 2.5)).toBe(3.75);
    expect(multiply(0.1, 0.2)).toBeCloseTo(0.02);
  });

  it('should multiply large numbers correctly', () => {
    expect(multiply(999999, 999999)).toBe(999998000001);
    expect(multiply(1000000, 1000000)).toBe(1000000000000);
  });

  it('should handle Number.MAX_SAFE_INTEGER correctly', () => {
    const maxSafeInt = Number.MAX_SAFE_INTEGER;
    expect(multiply(maxSafeInt, 1)).toBe(maxSafeInt);
    expect(multiply(1, maxSafeInt)).toBe(maxSafeInt);
  });

  it('should handle Number.MIN_SAFE_INTEGER correctly', () => {
    const minSafeInt = Number.MIN_SAFE_INTEGER;
    expect(multiply(minSafeInt, 1)).toBe(minSafeInt);
    expect(multiply(1, minSafeInt)).toBe(minSafeInt);
  });
});
