import { describe, it, expect } from 'vitest';
import { sum } from './sum';

describe('sum', () => {
  it('should return the correct sum of two positive numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('should return the correct sum of a positive and a negative number', () => {
    expect(sum(5, -2)).toBe(3);
  });

  it('should return the correct sum when both numbers are negative', () => {
    expect(sum(-3, -4)).toBe(-7);
  });

  it('should return 0 when both numbers are 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('should return the other number when one of the numbers is 0', () => {
    expect(sum(0, 5)).toBe(5);
    expect(sum(5, 0)).toBe(5);
  });
});
