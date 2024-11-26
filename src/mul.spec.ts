import { describe, it, expect } from 'vitest';
import { multiply } from './mul';

describe('multiply', () => {
  it('should multiply two positive numbers', () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(5, 5)).toBe(25);
  });

  it('should multiply a positive and a negative number', () => {
    expect(multiply(-2, 3)).toBe(-6);
    expect(multiply(5, -5)).toBe(-25);
  });

  it('should multiply two negative numbers', () => {
    expect(multiply(-2, -3)).toBe(6);
    expect(multiply(-5, -5)).toBe(25);
  });

  it('should multiply any number by zero', () => {
    expect(multiply(0, 5)).toBe(0);
    expect(multiply(5, 0)).toBe(0);
    expect(multiply(0, 0)).toBe(0);
  });

  it('should handle multiplication with large numbers', () => {
    expect(multiply(100000, 100000)).toBe(10000000000);
  });
});
