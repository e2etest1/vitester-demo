import { describe, it, expect } from 'vitest';
import { mul } from './mul';

describe('mul', () => {
  it('should multiply two positive numbers correctly', () => {
    expect(mul(2, 3)).toBe(6);
  });

  it('should multiply a positive and a negative number correctly', () => {
    expect(mul(4, -5)).toBe(-20);
  });

  it('should multiply two negative numbers correctly', () => {
    expect(mul(-2, -3)).toBe(6);
  });

  it('should return zero when multiplying any number with zero', () => {
    expect(mul(0, 5)).toBe(0);
    expect(mul(5, 0)).toBe(0);
  });

  it('should handle multiplication with one correctly', () => {
    expect(mul(1, 7)).toBe(7);
    expect(mul(7, 1)).toBe(7);
  });

  it('should handle multiplication with zero correctly', () => {
    expect(mul(0, 0)).toBe(0);
  });
});
