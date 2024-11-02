import { describe, it, expect } from 'vitest';
import { sum } from './a1';

describe('sum', () => {
  it('should return the sum of two numbers', () => {
    expect(sum(1 as any, 2 as any)).toBe(3);
    expect(sum(-1 as any, -1 as any)).toBe(-2);
    expect(sum(0 as any, 0 as any)).toBe(0);
    expect(sum(1.5 as any, 2.5 as any)).toBe(4);
  });
});
