import { describe, it, expect } from 'vitest';
import { sum } from './a3';

describe('sum', () => {
  it('should return the sum of two positive numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('should return the sum of a positive number and zero', () => {
    expect(sum(5, 0)).toBe(5);
  });

  it('should return the sum of two negative numbers', () => {
    expect(sum(-1, -2)).toBe(-3);
  });

  it('should return the sum of a positive number and a negative number', () => {
    expect(sum(5, -3)).toBe(2);
  });

  it('should return zero when both numbers are zero', () => {
    expect(sum(0, 0)).toBe(0);
  });
});
