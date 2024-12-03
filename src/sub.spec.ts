import { describe, it, expect } from 'vitest';
import { sub } from './sub';

describe('sub', () => {
  it('should subtract two positive numbers correctly', () => {
    expect(sub(5, 3)).toBe(2);
  });

  it('should subtract two negative numbers correctly', () => {
    expect(sub(-5, -3)).toBe(-2);
  });

  it('should subtract a positive number and a negative number correctly', () => {
    expect(sub(5, -3)).toBe(8);
  });

  it('should subtract a negative number and a positive number correctly', () => {
    expect(sub(-5, 3)).toBe(-8);
  });

  it('should return 0 when subtracting a number from itself', () => {
    expect(sub(5, 5)).toBe(0);
  });

  it('should handle subtraction resulting in negative numbers', () => {
    expect(sub(3, 5)).toBe(-2);
  });
});
