import { describe, it, expect } from 'vitest';
import { sub } from './sub';

describe('sub', () => {
  it('should correctly subtract two positive numbers', () => {
    expect(sub(5, 3)).toBe(2);
  });

  it('should correctly subtract two negative numbers', () => {
    expect(sub(-5, -3)).toBe(-2);
  });

  it('should correctly subtract a positive number from a negative number', () => {
    expect(sub(-5, 3)).toBe(-8);
  });

  it('should correctly subtract a negative number from a positive number', () => {
    expect(sub(5, -3)).toBe(8);
  });

  it('should return zero when both numbers are the same', () => {
    expect(sub(3, 3)).toBe(0);
  });
});
