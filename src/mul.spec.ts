import { describe, it, expect } from 'vitest';
import { multiply } from './mul';

describe('multiply', () => {
  it('should correctly multiply two positive numbers', () => {
    expect(multiply(3, 4)).toBe(12);
  });

  it('should correctly multiply a positive and a negative number', () => {
    expect(multiply(-3, 4)).toBe(-12);
  });

  it('should correctly multiply two negative numbers', () => {
    expect(multiply(-3, -4)).toBe(12);
  });

  it('should return zero when multiplying by zero', () => {
    expect(multiply(0, 5)).toBe(0);
    expect(multiply(5, 0)).toBe(0);
  });

  it('should return zero when multiplying zero by zero', () => {
    expect(multiply(0, 0)).toBe(0);
  });
});
