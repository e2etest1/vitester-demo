import { describe, it, expect } from 'vitest';
import { multiply } from './mul';

describe('multiply', () => {
  it('should multiply two positive numbers correctly', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  it('should multiply a positive and a negative number correctly', () => {
    expect(multiply(-2, 3)).toBe(-6);
  });

  it('should multiply two negative numbers correctly', () => {
    expect(multiply(-2, -3)).toBe(6);
  });

  it('should return 0 when multiplying any number by 0', () => {
    expect(multiply(0, 5)).toBe(0);
    expect(multiply(5, 0)).toBe(0);
  });

  it('should multiply numbers with zero correctly', () => {
    expect(multiply(0, 0)).toBe(0);
  });

  it('should multiply a number by one correctly', () => {
    expect(multiply(1, 5)).toBe(5);
    expect(multiply(5, 1)).toBe(5);
  });

  it('should handle multiplication with large numbers', () => {
    expect(multiply(1000000, 1000000)).toBe(1000000000000);
  });

  it('should handle multiplication with decimal numbers', () => {
    expect(multiply(1.5, 2)).toBe(3);
    expect(multiply(-1.5, 2)).toBe(-3);
  });
});
