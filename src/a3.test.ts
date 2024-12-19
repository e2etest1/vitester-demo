import { describe, it, expect } from 'vitest';
import { sum } from './a3';

describe('sum', () => {
  it('should return the sum of two positive numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });

  it('should return the sum of a positive and a negative number', () => {
    expect(sum(5, -2)).toBe(3);
  });

  it('should return the sum of two negative numbers', () => {
    expect(sum(-4, -6)).toBe(-10);
  });

  it('should return the sum of a number and zero', () => {
    expect(sum(7, 0)).toBe(7);
  });

  it('should return zero when summing zero and zero', () => {
    expect(sum(0, 0)).toBe(0);
  });
});
