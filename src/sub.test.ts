import { describe, it, expect } from 'vitest';
import { sub } from './sub';

describe('sub function', () => {
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

  it('should return 0 when both numbers are the same', () => {
    expect(sub(5, 5)).toBe(0);
  });

  it('should handle subtraction resulting in a negative number', () => {
    expect(sub(5, 10)).toBe(-5);
  });
});
