import { describe, it, expect } from 'vitest';
import { multiply } from './mul';

describe('multiply', () => {
  it('should multiply two positive numbers', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  it('should multiply a positive and a negative number', () => {
    expect(multiply(2, -3)).toBe(-6);
  });

  it('should multiply two negative numbers', () => {
    expect(multiply(-2, -3)).toBe(6);
  });

  it('should multiply a number by zero', () => {
    expect(multiply(5, 0)).toBe(0);
  });

  it('should multiply zero by a number', () => {
    expect(multiply(0, 5)).toBe(0);
  });

  it('should multiply two zeros', () => {
    expect(multiply(0, 0)).toBe(0);
  });

  it('should handle multiplying by one', () => {
    expect(multiply(1, 7)).toBe(7);
    expect(multiply(7, 1)).toBe(7);
  });

  it('should handle multiplying by negative one', () => {
    expect(multiply(-1, 7)).toBe(-7);
    expect(multiply(7, -1)).toBe(-7);
  });
});
