import { describe, it, expect } from 'vitest';
import { div } from './div';

describe('div', () => {
  it('should correctly divide two positive numbers', () => {
    expect(div(6, 3)).toBe(2);
  });

  it('should correctly divide a positive number by a negative number', () => {
    expect(div(6, -3)).toBe(-2);
  });

  it('should correctly divide two negative numbers', () => {
    expect(div(-6, -3)).toBe(2);
  });

  it('should return 0 when the numerator is 0', () => {
    expect(div(0, 5)).toBe(0);
  });

  it('should handle division by zero', () => {
    expect(div(5, 0)).toBe(Infinity);
  });

  it('should handle zero divided by zero', () => {
    expect(div(0, 0)).toBeNaN();
  });
});
