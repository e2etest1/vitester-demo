import { describe, it, expect } from 'vitest';
import { sub } from './sub';

describe('sub', () => {
  it('should return the correct result for positive numbers', () => {
    expect(sub(10, 5)).toBe(5);
  });

  it('should return the correct result for negative numbers', () => {
    expect(sub(-10, -5)).toBe(-5);
  });

  it('should return the correct result for mixed positive and negative numbers', () => {
    expect(sub(10, -5)).toBe(15);
  });

  it('should return the correct result when subtracting zero', () => {
    expect(sub(10, 0)).toBe(10);
    expect(sub(0, 10)).toBe(-10);
  });

  it('should return zero when both numbers are zero', () => {
    expect(sub(0, 0)).toBe(0);
  });
});
