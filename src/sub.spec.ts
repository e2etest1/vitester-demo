import { describe, it, expect } from 'vitest';
import { sub } from './sub';

describe('sub', () => {
  it('should return the correct difference for positive numbers', () => {
    expect(sub(5, 3)).toBe(2);
    expect(sub(10, 4)).toBe(6);
  });

  it('should return the correct difference for negative numbers', () => {
    expect(sub(-5, -3)).toBe(-2);
    expect(sub(-10, -4)).toBe(-6);
  });

  it('should return the correct difference when subtracting from zero', () => {
    expect(sub(0, 5)).toBe(-5);
    expect(sub(0, -5)).toBe(5);
  });

  it('should return the correct difference when subtracting zero', () => {
    expect(sub(5, 0)).toBe(5);
    expect(sub(-5, 0)).toBe(-5);
  });

  it('should return zero when both numbers are equal', () => {
    expect(sub(5, 5)).toBe(0);
    expect(sub(-5, -5)).toBe(0);
  });
});
