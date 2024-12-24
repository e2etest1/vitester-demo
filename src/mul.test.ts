import { describe, it, expect } from 'vitest';
import { multiply } from './mul';

describe('multiply', () => {
  it('should multiply two positive numbers', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  it('should multiply a positive and a negative number', () => {
    expect(multiply(5, -4)).toBe(-20);
  });

  it('should multiply two negative numbers', () => {
    expect(multiply(-2, -3)).toBe(6);
  });

  it('should multiply a number by zero', () => {
    expect(multiply(7, 0)).toBe(0);
    expect(multiply(0, 7)).toBe(0);
  });

  it('should multiply zero by zero', () => {
    expect(multiply(0, 0)).toBe(0);
  });

  it('should multiply by one', () => {
    expect(multiply(1, 9)).toBe(9);
    expect(multiply(9, 1)).toBe(9);
  });

  it('should handle large numbers', () => {
    expect(multiply(100000, 100000)).toBe(10000000000);
  });
});
