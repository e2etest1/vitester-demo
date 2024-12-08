import { describe, it, expect } from 'vitest';
import { sum } from './a2';

describe('sum', () => {
  it('should return the sum of two positive numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('should return the sum of a positive and a negative number', () => {
    expect(sum(5, -3)).toBe(2);
  });

  it('should return the sum of two negative numbers', () => {
    expect(sum(-4, -6)).toBe(-10);
  });

  it('should return zero when both numbers are zero', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('should return the sum when one number is zero', () => {
    expect(sum(0, 7)).toBe(7);
    expect(sum(9, 0)).toBe(9);
  });
});
