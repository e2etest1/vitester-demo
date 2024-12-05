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

  it('should return 0 when multiplying any number by 0', () => {
    expect(multiply(0, 5)).toBe(0);
    expect(multiply(5, 0)).toBe(0);
  });

  it('should return the same number when multiplying by 1', () => {
    expect(multiply(1, 5)).toBe(5);
    expect(multiply(5, 1)).toBe(5);
  });

  it('should return 0 when multiplying 0 by 0', () => {
    expect(multiply(0, 0)).toBe(0);
  });
});
