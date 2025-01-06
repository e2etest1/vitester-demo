import { describe, it, expect } from 'vitest';
import { multiply } from './mul';

describe('multiply', () => {
  it('should multiply two positive numbers', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  it('should multiply a positive and a negative number', () => {
    expect(multiply(-2, 3)).toBe(-6);
  });

  it('should multiply two negative numbers', () => {
    expect(multiply(-2, -3)).toBe(6);
  });

  it('should multiply a number by zero', () => {
    expect(multiply(5, 0)).toBe(0);
    expect(multiply(0, 5)).toBe(0);
  });

  it('should multiply zero by zero', () => {
    expect(multiply(0, 0)).toBe(0);
  });

  it('should handle large numbers', () => {
    expect(multiply(1000000, 1000000)).toBe(1000000000000);
  });

  it('should handle small decimal numbers', () => {
    expect(multiply(0.1, 0.2)).toBeCloseTo(0.02, 10);
  });
});
