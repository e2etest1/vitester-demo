import { describe, it, expect } from 'vitest';
import { sub } from './sub';

describe('sub', () => {
  it('should return the correct difference for positive numbers', () => {
    expect(sub(5, 3)).toBe(2);
  });

  it('should return the correct difference for negative numbers', () => {
    expect(sub(-5, -3)).toBe(-2);
  });

  it('should return the correct difference when subtracting a positive from a negative', () => {
    expect(sub(-5, 3)).toBe(-8);
  });

  it('should return the correct difference when subtracting a negative from a positive', () => {
    expect(sub(5, -3)).toBe(8);
  });

  it('should return zero when subtracting a number from itself', () => {
    expect(sub(5, 5)).toBe(0);
  });

  it('should return the same number when subtracting zero', () => {
    expect(sub(5, 0)).toBe(5);
    expect(sub(-5, 0)).toBe(-5);
  });

  it('should return the negative of the number when zero is subtracted from it', () => {
    expect(sub(0, 5)).toBe(-5);
    expect(sub(0, -5)).toBe(5);
  });
});
