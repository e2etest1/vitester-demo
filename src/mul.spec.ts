import { describe, it, expect } from 'vitest';
import { multiply } from './mul';

describe('multiply', () => {
  it('should multiply two positive numbers', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  it('should multiply a positive and a negative number', () => {
    expect(multiply(-2, 3)).toBe(-6);
  });

  it('should multiply two negative numbers', () => {
    expect(multiply(-2, -3)).toBe(6);
  });

  it('should multiply a number by zero', () => {
    expect(multiply(0, 5)).toBe(0);
    expect(multiply(5, 0)).toBe(0);
  });

  it('should multiply zero by zero', () => {
    expect(multiply(0, 0)).toBe(0);
  });

  it('should multiply a number by one', () => {
    expect(multiply(1, 5)).toBe(5);
    expect(multiply(5, 1)).toBe(5);
  });

  it('should multiply one by one', () => {
    expect(multiply(1, 1)).toBe(1);
  });

  it('should handle multiplying large numbers', () => {
    expect(multiply(1e10, 1e10)).toBe(1e20);
  });

  it('should handle multiplying by fractional numbers', () => {
    expect(multiply(0.5, 0.2)).toBeCloseTo(0.1);
  });

  it('should handle multiplying very small numbers', () => {
    expect(multiply(1e-10, 1e-10)).toBeCloseTo(1e-20);
  });

  it('should handle multiplying a negative and a fractional number', () => {
    expect(multiply(-0.5, 0.2)).toBeCloseTo(-0.1);
  });

  it('should handle multiplying large and small numbers', () => {
    expect(multiply(1e10, 1e-10)).toBeCloseTo(1);
  });
});
