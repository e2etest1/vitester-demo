import { describe, it, expect } from 'vitest';
import { sub } from './sub';

describe('sub', () => {
  it('should return the correct result for a basic subtraction', () => {
    expect(sub(5, 3)).toBe(2);
    expect(sub(10, 5)).toBe(5);
    expect(sub(0, 0)).toBe(0);
    expect(sub(-5, -3)).toBe(-2);
    expect(sub(-10, 5)).toBe(-15);
  });
});
