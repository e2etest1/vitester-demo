import { describe, it, expect } from 'vitest';
import { sum } from './a1';

describe('sum', () => {
  it('should return the sum of two positive numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });

  it('should return the sum of a positive and a negative number', () => {
    expect(sum(5, -2)).toBe(3);
  });

  it('should return the sum of two negative numbers', () => {
    expect(sum(-1, -1)).toBe(-2);
  });

  it('should return 0 when both numbers are 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('should return the same number when adding zero', () => {
    expect(sum(7, 0)).toBe(7);
    expect(sum(0, 7)).toBe(7);
  });
});