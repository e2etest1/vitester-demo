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

  it('should return zero when multiplying any number by zero', () => {
    expect(multiply(0, 5)).toBe(0);
    expect(multiply(5, 0)).toBe(0);
  });

  it('should multiply by one correctly', () => {
    expect(multiply(1, 5)).toBe(5);
    expect(multiply(5, 1)).toBe(5);
  });

  it('should handle large numbers correctly', () => {
    expect(multiply(1000000, 1000000)).toBe(1000000000000);
  });

  it('should handle decimal numbers correctly', () => {
    expect(multiply(1.5, 2)).toBe(3);
    expect(multiply(2.5, 2.5)).toBe(6.25);
  });
});
