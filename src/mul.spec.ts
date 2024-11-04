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

  it('should return 0 when multiplying any number by zero', () => {
    expect(multiply(3, 0)).toBe(0);
    expect(multiply(0, 4)).toBe(0);
    expect(multiply(0, 0)).toBe(0);
  });

  it('should multiply floating point numbers correctly', () => {
    expect(multiply(1.5, 2)).toBe(3);
    expect(multiply(2.5, 4.2)).toBeCloseTo(10.5);
  });
});
