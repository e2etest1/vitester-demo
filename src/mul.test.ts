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

  it('should return zero when multiplying by zero', () => {
    expect(multiply(0, 5)).toBe(0);
    expect(multiply(5, 0)).toBe(0);
  });

  it('should return zero when both numbers are zero', () => {
    expect(multiply(0, 0)).toBe(0);
  });

  it('should handle large numbers correctly', () => {
    expect(multiply(1e10, 1e10)).toBe(1e20);
  });
});
