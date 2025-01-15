import { describe, expect, it } from 'vitest';
import { multiply } from './mul';

describe('multiply', () => {
  it('should multiply two positive numbers correctly', () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(10, 5)).toBe(50);
  });

  it('should multiply positive and negative numbers correctly', () => {
    expect(multiply(-2, 3)).toBe(-6);
    expect(multiply(2, -3)).toBe(-6);
    expect(multiply(-2, -3)).toBe(6);
  });

  it('should handle multiplication with zero', () => {
    expect(multiply(0, 5)).toBe(0);
    expect(multiply(5, 0)).toBe(0);
    expect(multiply(0, 0)).toBe(0);
  });

  it('should handle decimal numbers', () => {
    expect(multiply(0.5, 2)).toBe(1);
    expect(multiply(2.5, 2.5)).toBe(6.25);
    expect(multiply(-1.5, 2)).toBe(-3);
  });

  it('should handle large numbers', () => {
    expect(multiply(1000000, 1000000)).toBe(1000000000000);
    expect(multiply(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER);
  });
});
