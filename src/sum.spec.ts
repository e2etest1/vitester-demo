import { describe, it, expect } from 'vitest';
import { sum } from './sum';

describe('sum', () => {
  it('should return the sum of three numbers', () => {
    expect(sum(1, 2, 3)).toBe(6);
    expect(sum(-1, -2, -3)).toBe(-6);
    expect(sum(0, 0, 0)).toBe(0);
  });
});
