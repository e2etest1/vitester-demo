import { describe, it, expect } from 'vitest';
import { sub } from './sub';

describe('sub function', () => {
  it('should subtract two positive numbers', () => {
    expect(sub(5, 3)).toBe(2);
  });

  it('should subtract two negative numbers', () => {
    expect(sub(-5, -3)).toBe(-2);
  });

  it('should subtract a positive and a negative number', () => {
    expect(sub(5, -3)).toBe(8);
  });

  it('should subtract a negative and a positive number', () => {
    expect(sub(-5, 3)).toBe(-8);
  });

  it('should return 0 when subtracting two equal numbers', () => {
    expect(sub(5, 5)).toBe(0);
  });
});
