import { describe, it, expect } from 'vitest';
import { multiply } from './mul';

describe('multiply', () => {
  it('should multiply two positive numbers', () => {
    expect(multiply(3, 4)).toBe(12);
  });

  it('should multiply a positive and a negative number', () => {
    expect(multiply(3, -4)).toBe(-12);
  });

  it('should multiply two negative numbers', () => {
    expect(multiply(-3, -4)).toBe(12);
  });

  it('should return zero when multiplying any number by zero', () => {
    expect(multiply(3, 0)).toBe(0);
    expect(multiply(0, 4)).toBe(0);
  });

  it('should return zero when multiplying zero by zero', () => {
    expect(multiply(0, 0)).toBe(0);
  });

  it('should return the same number when multiplying by one', () => {
    expect(multiply(3, 1)).toBe(3);
    expect(multiply(1, 4)).toBe(4);
    expect(multiply(-3, 1)).toBe(-3);
    expect(multiply(1, -4)).toBe(-4);
  });

  it('should handle large numbers', () => {
    expect(multiply(1000000, 1000000)).toBe(1000000000000);
    expect(multiply(-1000000, 1000000)).toBe(-1000000000000);
  });
});
