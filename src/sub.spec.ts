import { describe, it, expect } from 'vitest';
import { sub } from './sub';

describe('sub', () => {
  it('should return the correct subtraction of two positive numbers', () => {
    expect(sub(5, 3)).toBe(2);
  });

  it('should return the correct subtraction when the result is negative', () => {
    expect(sub(3, 5)).toBe(-2);
  });

  it('should return zero when both numbers are equal', () => {
    expect(sub(4, 4)).toBe(0);
  });

  it('should return the correct subtraction with negative numbers', () => {
    expect(sub(-5, -3)).toBe(-2);
  });

  it('should return the correct subtraction with a positive and a negative number', () => {
    expect(sub(5, -3)).toBe(8);
  });

  it('should return the correct subtraction with zero', () => {
    expect(sub(0, 5)).toBe(-5);
    expect(sub(5, 0)).toBe(5);
  });
});
