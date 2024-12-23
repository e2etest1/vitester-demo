import { describe, it, expect } from 'vitest';
import { sub } from './sub';

describe('sub', () => {
  it('should return the correct result for positive numbers', () => {
    expect(sub(10, 5)).toBe(5);
  });

  it('should return the correct result for negative numbers', () => {
    expect(sub(-10, -5)).toBe(-5);
  });

  it('should return the correct result when subtracting a positive number from a negative number', () => {
    expect(sub(-10, 5)).toBe(-15);
  });

  it('should return the correct result when subtracting a negative number from a positive number', () => {
    expect(sub(10, -5)).toBe(15);
  });

  it('should return zero when subtracting a number from itself', () => {
    expect(sub(5, 5)).toBe(0);
  });

  it('should return the same number when subtracting zero', () => {
    expect(sub(10, 0)).toBe(10);
    expect(sub(-10, 0)).toBe(-10);
  });

  it('should return the negative of the number when zero is subtracted from it', () => {
    expect(sub(0, 10)).toBe(-10);
    expect(sub(0, -10)).toBe(10);
  });
});
