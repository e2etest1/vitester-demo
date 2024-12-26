import { describe, it, expect } from 'vitest';
import { mul } from './mul';

describe('mul', () => {
  it('should return the product of two positive numbers', () => {
    expect(mul(3, 4)).toBe(12);
  });

  it('should return the product of a positive and a negative number', () => {
    expect(mul(-3, 4)).toBe(-12);
  });

  it('should return the product of two negative numbers', () => {
    expect(mul(-3, -4)).toBe(12);
  });

  it('should return zero when one of the numbers is zero', () => {
    expect(mul(0, 5)).toBe(0);
    expect(mul(5, 0)).toBe(0);
  });

  it('should return zero when both numbers are zero', () => {
    expect(mul(0, 0)).toBe(0);
  });
});
