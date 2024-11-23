import { describe, it, expect } from 'vitest';
import { multiply } from './mul';

describe('multiply', () => {
  it('should multiply two positive numbers correctly', () => {
    expect(multiply(3, 4)).toBe(12);
  });

  it('should multiply a positive and a negative number correctly', () => {
    expect(multiply(3, -4)).toBe(-12);
  });

  it('should multiply two negative numbers correctly', () => {
    expect(multiply(-3, -4)).toBe(12);
  });

  it('should multiply a number by zero correctly', () => {
    expect(multiply(3, 0)).toBe(0);
    expect(multiply(0, 4)).toBe(0);
  });

  it('should multiply zero by zero correctly', () => {
    expect(multiply(0, 0)).toBe(0);
  });

  it('should multiply by one correctly', () => {
    expect(multiply(5, 1)).toBe(5);
    expect(multiply(1, 7)).toBe(7);
  });

  it('should handle large numbers', () => {
    expect(multiply(1000000, 1000000)).toBe(1000000000000);
  });
});
