import { describe, it, expect } from 'vitest';
import { sub } from './sub';

describe('sub', () => {
  it('should correctly subtract two positive numbers', () => {
    expect(sub(10, 5)).toBe(5);
  });

  it('should correctly subtract two negative numbers', () => {
    expect(sub(-10, -5)).toBe(-5);
  });

  it('should correctly subtract a positive and a negative number', () => {
    expect(sub(10, -5)).toBe(15);
  });

  it('should correctly subtract a negative and a positive number', () => {
    expect(sub(-10, 5)).toBe(-15);
  });

  it('should return zero when subtracting a number from itself', () => {
    expect(sub(5, 5)).toBe(0);
  });

  it('should handle subtracting zero from a number', () => {
    expect(sub(5, 0)).toBe(5);
  });

  it('should handle subtracting a number from zero', () => {
    expect(sub(0, 5)).toBe(-5);
  });
});
