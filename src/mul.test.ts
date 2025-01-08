import { describe, it, expect } from 'vitest';
import { multiply } from './mul';

describe('multiply', () => {
  it('should multiply two positive numbers', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  it('should multiply a positive and a negative number', () => {
    expect(multiply(4, -5)).toBe(-20);
  });

  it('should multiply two negative numbers', () => {
    expect(multiply(-3, -7)).toBe(21);
  });

  it('should return zero when multiplying any number by zero', () => {
    expect(multiply(0, 5)).toBe(0);
    expect(multiply(5, 0)).toBe(0);
  });

  it('should multiply by one correctly', () => {
    expect(multiply(1, 10)).toBe(10);
    expect(multiply(10, 1)).toBe(10);
  });

  it('should multiply two zeros correctly', () => {
    expect(multiply(0, 0)).toBe(0);
  });
});
