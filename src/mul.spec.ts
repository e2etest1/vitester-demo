import { describe, it, expect } from 'vitest';
import { multiply } from './mul';

describe('multiply', () => {
  it('should multiply two positive numbers correctly', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  it('should multiply a positive and a negative number correctly', () => {
    expect(multiply(2, -3)).toBe(-6);
  });

  it('should multiply two negative numbers correctly', () => {
    expect(multiply(-2, -3)).toBe(6);
  });

  it('should return 0 when multiplying any number by 0', () => {
    expect(multiply(0, 5)).toBe(0);
    expect(multiply(5, 0)).toBe(0);
  });

  it('should multiply two floating-point numbers correctly', () => {
    expect(multiply(2.5, 4.2)).toBeCloseTo(10.5);
  });

  it('should handle multiplication with zero correctly', () => {
    expect(multiply(0, 0)).toBe(0);
  });

  it('should multiply a number by one correctly', () => {
    expect(multiply(1, 5)).toBe(5);
    expect(multiply(5, 1)).toBe(5);
  });

  it('should multiply very large numbers correctly', () => {
    expect(multiply(1e10, 1e10)).toBe(1e20);
  });
});
