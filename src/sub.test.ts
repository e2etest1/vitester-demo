import { describe, it, expect } from 'vitest';
import { sub } from './sub';

describe('sub', () => {
  it('should return the correct result when subtracting two positive numbers', () => {
    expect(sub(5, 3)).toBe(2);
  });

  it('should return the correct result when subtracting two negative numbers', () => {
    expect(sub(-5, -3)).toBe(-2);
  });

  it('should return the correct result when subtracting a positive and a negative number', () => {
    expect(sub(5, -3)).toBe(8);
  });

  it('should return the correct result when subtracting a negative and a positive number', () => {
    expect(sub(-5, 3)).toBe(-8);
  });

  it('should return zero when subtracting zero from zero', () => {
    expect(sub(0, 0)).toBe(0);
  });

  it('should return the same number when subtracting zero from a number', () => {
    expect(sub(5, 0)).toBe(5);
  });

  it('should return the negation of a number when subtracting a number from zero', () => {
    expect(sub(0, 5)).toBe(-5);
  });
});
