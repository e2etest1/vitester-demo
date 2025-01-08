import { describe, it, expect } from 'vitest';
import { multiply } from './mul';

describe('multiply', () => {
  it('should multiply two positive numbers', () => {
    expect(multiply(3, 4)).toBe(12);
  });

  it('should multiply a positive and a negative number', () => {
    expect(multiply(-3, 4)).toBe(-12);
  });

  it('should multiply two negative numbers', () => {
    expect(multiply(-3, -4)).toBe(12);
  });

  it('should multiply a number by zero', () => {
    expect(multiply(3, 0)).toBe(0);
  });

  it('should multiply zero by a number', () => {
    expect(multiply(0, 5)).toBe(0);
  });

  it('should multiply zero by zero', () => {
    expect(multiply(0, 0)).toBe(0);
  });

  it('should multiply a number by one', () => {
    expect(multiply(7, 1)).toBe(7);
  });

  it('should multiply one by a number', () => {
    expect(multiply(1, 9)).toBe(9);
  });

  it('should multiply a number by itself', () => {
    expect(multiply(5, 5)).toBe(25);
  });

  it('should handle large numbers', () => {
    expect(multiply(100000, 100000)).toBe(10000000000);
  });
});
