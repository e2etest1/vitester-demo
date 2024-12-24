import { describe, it, expect } from 'vitest';
import { sub } from './sub';

describe('sub', () => {
  it('should return the correct result for positive numbers', () => {
    expect(sub(5, 3)).toBe(2);
  });

  it('should return the correct result for negative numbers', () => {
    expect(sub(-5, -3)).toBe(-2);
  });

  it('should return the correct result for mixed positive and negative numbers', () => {
    expect(sub(5, -3)).toBe(8);
  });

  it('should return zero when both numbers are the same', () => {
    expect(sub(3, 3)).toBe(0);
  });

  it('should handle zero correctly', () => {
    expect(sub(0, 5)).toBe(-5);
    expect(sub(5, 0)).toBe(5);
  });
});
