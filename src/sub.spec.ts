import { describe, it, expect } from 'vitest';
import { sub } from './sub';

describe('sub', () => {
  it('should return the difference of two positive numbers', () => {
    expect(sub(10, 5)).toBe(5);
  });

  it('should return the difference of a positive and a negative number', () => {
    expect(sub(10, -5)).toBe(15);
  });

  it('should return the difference of two negative numbers', () => {
    expect(sub(-10, -5)).toBe(-5);
  });

  it('should return zero when both numbers are the same', () => {
    expect(sub(5, 5)).toBe(0);
  });

  it('should handle zero correctly', () => {
    expect(sub(0, 5)).toBe(-5);
    expect(sub(5, 0)).toBe(5);
  });
});
