import { describe, it, expect } from 'vitest';
import { sum } from './sum';

describe('sum', () => {
  it('should add two positive numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });

  it('should add two negative numbers', () => {
    expect(sum(-2, -3)).toBe(-5);
  });

  it('should add a positive and a negative number', () => {
    expect(sum(5, -3)).toBe(2);
  });

  it('should add zero and a positive number', () => {
    expect(sum(0, 7)).toBe(7);
  });

  it('should add zero and a negative number', () => {
    expect(sum(0, -7)).toBe(-7);
  });

  it('should return zero when adding two zeros', () => {
    expect(sum(0, 0)).toBe(0);
  });
});
