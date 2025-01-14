import { describe, it, expect } from 'vitest';
import { sub } from './sub';

describe('sub', () => {
  it('should subtract two positive numbers correctly', () => {
    expect(sub(5, 3)).toBe(2);
  });

  it('should subtract negative numbers correctly', () => {
    expect(sub(-2, -5)).toBe(3);
  });

  it('should subtract zero correctly', () => {
    expect(sub(10, 0)).toBe(10);
    expect(sub(0, 5)).toBe(-5);
  });
});
