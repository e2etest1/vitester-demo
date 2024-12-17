import { describe, it, expect } from 'vitest';
import { sum } from './a2';

describe('sum', () => {
  it('should return the sum of two positive numbers', () => {
    const result = sum(2, 3);
    expect(result).toBe(5);
  });

  it('should return the sum of a positive and a negative number', () => {
    const result = sum(5, -3);
    expect(result).toBe(2);
  });

  it('should return the sum of two negative numbers', () => {
    const result = sum(-4, -6);
    expect(result).toBe(-10);
  });

  it('should return the sum when one of the numbers is zero', () => {
    const result = sum(0, 7);
    expect(result).toBe(7);
  });
});
