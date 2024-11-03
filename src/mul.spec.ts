import { describe, it, expect } from 'vitest';
import { multiply } from './mul';

describe('multiply', () => {
  it('should return the product of two positive numbers', () => {
    expect(multiply(2 as any, 3 as any)).toBe(6);
  });

  it('should return the product of a positive and a negative number', () => {
    expect(multiply(2 as any, -3 as any)).toBe(-6);
  });

  it('should return the product of two negative numbers', () => {
    expect(multiply(-2 as any, -3 as any)).toBe(6);
  });

  it('should return zero if one of the numbers is zero', () => {
    expect(multiply(0 as any, 5 as any)).toBe(0);
    expect(multiply(5 as any, 0 as any)).toBe(0);
  });

  it('should return zero if both numbers are zero', () => {
    expect(multiply(0 as any, 0 as any)).toBe(0);
  });
});
