import { describe, it, expect } from 'vitest';
import { multiply } from './mul';

describe('multiply', () => {
  it('should multiply two positive numbers correctly', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  it('should multiply a positive and a negative number correctly', () => {
    expect(multiply(-2, 3)).toBe(-6);
  });

  it('should multiply two negative numbers correctly', () => {
    expect(multiply(-2, -3)).toBe(6);
  });

  it('should multiply a number by zero correctly', () => {
    expect(multiply(5, 0)).toBe(0);
  });

  it('should multiply zero by a number correctly', () => {
    expect(multiply(0, 5)).toBe(0);
  });

  it('should multiply zero by zero correctly', () => {
    expect(multiply(0, 0)).toBe(0);
  });
});
