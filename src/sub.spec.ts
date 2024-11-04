import { describe, it, expect } from 'vitest';
import { sub } from './sub';

describe('sub', () => {
  it('should return the difference of two positive numbers', () => {
    expect(sub(10, 5)).toBe(5);
  });

  it('should return the difference when subtracting a positive number from zero', () => {
    expect(sub(0, 5)).toBe(-5);
  });

  it('should return the difference when subtracting zero from a positive number', () => {
    expect(sub(5, 0)).toBe(5);
  });

  it('should return the difference of two negative numbers', () => {
    expect(sub(-10, -5)).toBe(-5);
  });

  it('should return the difference when subtracting a negative number from a positive number', () => {
    expect(sub(5, -5)).toBe(10);
  });

  it('should return zero when subtracting a number from itself', () => {
    expect(sub(5, 5)).toBe(0);
  });

  it('should return zero when subtracting zero from zero', () => {
    expect(sub(0, 0)).toBe(0);
  });
});
