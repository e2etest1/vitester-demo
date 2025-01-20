import { describe, it, expect } from 'vitest';
import { sum } from './sum';

describe('sum', () => {
  it('adds two positive numbers correctly', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('adds two negative numbers correctly', () => {
    expect(sum(-1, -2)).toBe(-3);
  });

  it('adds zero correctly', () => {
    expect(sum(5, 0)).toBe(5);
    expect(sum(0, 5)).toBe(5);
    expect(sum(0, 0)).toBe(0);
  });
});
