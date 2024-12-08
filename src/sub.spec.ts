import { describe, it, expect } from 'vitest';
import { sub } from './sub';

describe('sub', () => {
  it('should correctly subtract two positive numbers', () => {
    expect(sub(5, 3)).toBe(2);
  });

  it('should correctly subtract two negative numbers', () => {
    expect(sub(-5, -3)).toBe(-2);
  });

  it('should correctly subtract a positive and a negative number', () => {
    expect(sub(5, -3)).toBe(8);
  });

  it('should correctly subtract a number from itself', () => {
    expect(sub(5, 5)).toBe(0);
  });

  it('should correctly subtract zero from a number', () => {
    expect(sub(5, 0)).toBe(5);
  });

  it('should correctly subtract a number from zero', () => {
    expect(sub(0, 5)).toBe(-5);
  });
});
