import { describe, it, expect } from 'vitest';
import { sum } from './a2';

describe('sum', () => {
  it('should return the sum of two positive numbers', () => {
    expect(sum(1 as any, 2 as any)).toBe(3);
  });

  it('should return the sum of a positive and a negative number', () => {
    expect(sum(5 as any, -3 as any)).toBe(2);
  });

  it('should return the sum of two negative numbers', () => {
    expect(sum(-4 as any, -6 as any)).toBe(-10);
  });

  it('should return 0 when adding 0 and 0', () => {
    expect(sum(0 as any, 0 as any)).toBe(0);
  });

  it('should handle large numbers', () => {
    expect(sum(1000000 as any, 2000000 as any)).toBe(3000000);
  });
});
