import { describe, it, expect } from 'vitest';
import { sub } from './sub';

describe('sub', () => {
  it('should return the difference of two positive numbers', () => {
    expect(sub(5, 3)).toBe(2);
  });

  it('should return the difference when subtracting a larger number from a smaller number', () => {
    expect(sub(3, 5)).toBe(-2);
  });

  it('should return zero when subtracting a number from itself', () => {
    expect(sub(5, 5)).toBe(0);
  });

  it('should handle negative numbers correctly', () => {
    expect(sub(-5, -3)).toBe(-2);
    expect(sub(-3, -5)).toBe(2);
  });

  it('should handle subtraction involving zero', () => {
    expect(sub(0, 5)).toBe(-5);
    expect(sub(5, 0)).toBe(5);
  });
});
