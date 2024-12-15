import { describe, it, expect } from 'vitest';
import { multiply } from './mul';

describe('multiply', () => {
  it('should multiply two positive numbers correctly', () => {
    expect(multiply(3, 4)).toBe(12);
  });

  it('should multiply a positive and a negative number correctly', () => {
    expect(multiply(3, -4)).toBe(-12);
  });

  it('should multiply two negative numbers correctly', () => {
    expect(multiply(-3, -4)).toBe(12);
  });

  it('should return zero when multiplying by zero', () => {
    expect(multiply(3, 0)).toBe(0);
    expect(multiply(0, 4)).toBe(0);
  });

  it('should return zero when both numbers are zero', () => {
    expect(multiply(0, 0)).toBe(0);
  });

  it('should handle multiplication with large numbers', () => {
    expect(multiply(1000000, 1000000)).toBe(1000000000000);
  });

  it('should handle multiplication with small numbers', () => {
    expect(multiply(0.1, 0.2)).toBeCloseTo(0.02, 5);
  });
});
