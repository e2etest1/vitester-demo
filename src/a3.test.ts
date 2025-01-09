import { describe, it, expect } from 'vitest';
import { sum } from './a3';

describe('sum', () => {
  it('should return the sum of two numbers', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(-1, 1)).toBe(0);
    expect(sum(0, 0)).toBe(0);
    expect(sum(-1, -1)).toBe(-2);
    expect(sum(100, 200)).toBe(300);
  });
});
