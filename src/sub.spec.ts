import { describe, it, expect } from 'vitest';
import { sub } from './sub';

describe('sub function', () => {
  it('should subtract two positive numbers correctly', () => {
    expect(sub(5, 3)).toBe(2);
  });

  it('should subtract two negative numbers correctly', () => {
    expect(sub(-5, -3)).toBe(-2);
  });

  it('should subtract a positive and a negative number correctly', () => {
    expect(sub(5, -3)).toBe(8);
  });

  it('should subtract a negative and a positive number correctly', () => {
    expect(sub(-5, 3)).toBe(-8);
  });

  it('should return zero when subtracting a number from itself', () => {
    expect(sub(5, 5)).toBe(0);
  });

  it('should handle subtracting zero correctly', () => {
    expect(sub(5, 0)).toBe(5);
    expect(sub(0, 5)).toBe(-5);
  });
});
