import { describe, it, expect } from 'vitest';
import { multiply } from './mul';

describe('multiply', () => {
  it('should multiply two positive numbers correctly', () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(5, 4)).toBe(20);
  });

  it('should multiply positive and negative numbers correctly', () => {
    expect(multiply(2, -3)).toBe(-6);
    expect(multiply(-5, 4)).toBe(-20);
  });

  it('should multiply two negative numbers correctly', () => {
    expect(multiply(-2, -3)).toBe(6);
    expect(multiply(-5, -4)).toBe(20);
  });

  it('should handle zero multiplication correctly', () => {
    expect(multiply(0, 5)).toBe(0);
    expect(multiply(5, 0)).toBe(0);
    expect(multiply(0, 0)).toBe(0);
  });

  it('should handle decimal numbers correctly', () => {
    expect(multiply(0.5, 2)).toBe(1);
    expect(multiply(2.5, 2.5)).toBe(6.25);
  });

  it('should handle large numbers correctly', () => {
    expect(multiply(1000000, 1000000)).toBe(1000000000000);
  });
});
