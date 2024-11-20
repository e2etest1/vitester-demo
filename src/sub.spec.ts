import { describe, it, expect } from 'vitest';
import { sub } from './sub';

describe('sub', () => {
  it('should return the difference of two positive numbers', () => {
    expect(sub(5, 3)).toBe(2);
  });

  it('should return the difference of two negative numbers', () => {
    expect(sub(-5, -3)).toBe(-2);
  });

  it('should return the difference when subtracting a positive number from a negative number', () => {
    expect(sub(-5, 3)).toBe(-8);
  });

  it('should return the difference when subtracting a negative number from a positive number', () => {
    expect(sub(5, -3)).toBe(8);
  });

  it('should return zero when subtracting a number from itself', () => {
    expect(sub(5, 5)).toBe(0);
  });
});
