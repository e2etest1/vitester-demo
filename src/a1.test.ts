import { describe, it, expect } from 'vitest';
import { sum } from './a1';

describe('sum', () => {
  it('should return the correct sum of two positive numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('should return the correct sum of a positive and a negative number', () => {
    expect(sum(5, -3)).toBe(2);
  });

  it('should return the correct sum of two negative numbers', () => {
    expect(sum(-4, -6)).toBe(-10);
  });

  it('should return zero when both inputs are zero', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('should return the correct sum when adding zero to a number', () => {
    expect(sum(7, 0)).toBe(7);
    expect(sum(0, 7)).toBe(7);
  });
});
