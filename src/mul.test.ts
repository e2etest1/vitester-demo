import { describe, it, expect } from 'vitest';
import { multiply } from './mul';

describe('multiply', () => {
  it('should multiply two positive numbers correctly', () => {
    expect(multiply(3, 4)).toBe(12);
  });

  it('should multiply a positive and a negative number correctly', () => {
    expect(multiply(-3, 4)).toBe(-12);
  });

  it('should multiply two negative numbers correctly', () => {
    expect(multiply(-3, -4)).toBe(12);
  });

  it('should return 0 when multiplying by zero', () => {
    expect(multiply(3, 0)).toBe(0);
    expect(multiply(0, 4)).toBe(0);
  });

  it('should return 0 when both numbers are zero', () => {
    expect(multiply(0, 0)).toBe(0);
  });

  it('should handle large numbers correctly', () => {
    expect(multiply(1e10, 1e10)).toBe(1e20);
  });

  it('should handle very small numbers correctly', () => {
    expect(multiply(1e-10, 1e-10)).toBeCloseTo(1e-20);
  });

  it('should handle multiplying by one correctly', () => {
    expect(multiply(1, 12345)).toBe(12345);
    expect(multiply(12345, 1)).toBe(12345);
  });

  it('should handle multiplying by negative one correctly', () => {
    expect(multiply(-1, 12345)).toBe(-12345);
    expect(multiply(12345, -1)).toBe(-12345);
  });
});
