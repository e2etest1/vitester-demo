import { describe, it, expect } from 'vitest';
import { multiply } from './mul';

describe('multiply', () => {
  it('should multiply two positive numbers', () => {
    expect(multiply(3, 4)).toBe(12);
    expect(multiply(7, 5)).toBe(35);
  });

  it('should multiply a positive and a negative number', () => {
    expect(multiply(-3, 4)).toBe(-12);
    expect(multiply(7, -5)).toBe(-35);
  });

  it('should multiply two negative numbers', () => {
    expect(multiply(-3, -4)).toBe(12);
    expect(multiply(-7, -5)).toBe(35);
  });

  it('should multiply by zero', () => {
    expect(multiply(0, 4)).toBe(0);
    expect(multiply(7, 0)).toBe(0);
    expect(multiply(0, 0)).toBe(0);
  });

  it('should handle multiplying by one', () => {
    expect(multiply(1, 4)).toBe(4);
    expect(multiply(7, 1)).toBe(7);
    expect(multiply(-1, 5)).toBe(-5);
  });

  it('should handle multiplying large numbers', () => {
    expect(multiply(1000, 2000)).toBe(2000000);
    expect(multiply(-1000, -2000)).toBe(2000000);
  });
});
