import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
  it('should return default greeting when no custom greeting provided', () => {
    expect(greet('John')).toBe('Hello, John!');
  });

  it('should return custom greeting when provided', () => {
    expect(greet('John', 'Hi')).toBe('Hi, John!');
  });
});
