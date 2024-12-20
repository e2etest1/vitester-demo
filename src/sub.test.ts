import { describe, it, expect } from 'vitest';
import { sub } from './sub';

describe('sub', () => {
  it('should return the difference of two positive numbers', () => {
    expect(sub(5, 3)).toBe(2);
  });

  it('should return the difference of two negative numbers', () => {
    expect(sub(-5, -3)).toBe(-2);
  });

  it('should return a positive result when subtracting a smaller number from a larger number', () => {
    expect(sub(10, 5)).toBe(5);
  });

  it('should return a negative result when subtracting a larger number from a smaller number', () => {
    expect(sub(5, 10)).toBe(-5);
  });

  it('should return zero when subtracting a number from itself', () => {
    expect(sub(7, 7)).toBe(0);
  });
});
