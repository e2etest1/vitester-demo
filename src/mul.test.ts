import { describe, it, expect } from 'vitest';
import { multiply } from './mul';

describe('multiply', () => {
  it('should return the product of two positive numbers', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  it('should return the product of a positive and a negative number', () => {
    expect(multiply(5, -3)).toBe(-15);
  });

  it('should return zero when multiplying any number by zero', () => {
    expect(multiply(0, 10)).toBe(0);
    expect(multiply(10, 0)).toBe(0);
  });

  it('should return the product of two negative numbers', () => {
    expect(multiply(-4, -5)).toBe(20);
  });

  it('should return the correct product when one of the numbers is one', () => {
    expect(multiply(1, 7)).toBe(7);
    expect(multiply(7, 1)).toBe(7);
  });
});
