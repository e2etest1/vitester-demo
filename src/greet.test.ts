import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
  it('should return default greeting when no greeting provided', () => {
    expect(greet('John')).toBe('Hello, John!');
  });

  it('should return custom greeting when greeting provided', () => {
    expect(greet('John', 'Hi')).toBe('Hi, John!');
  });

  it('should handle empty name', () => {
    expect(greet('')).toBe('Hello, !');
  });

  it('should handle empty greeting as default greeting', () => {
    expect(greet('John', '')).toBe('Hello, John!');
  });
});
