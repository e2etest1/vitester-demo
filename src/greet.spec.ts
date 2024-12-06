import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
  it('should return a custom greeting when a greeting is provided', () => {
    const result = greet('Alice', 'Hi');
    expect(result).toBe('Hi, Alice!');
  });

  it('should return a default greeting when no greeting is provided', () => {
    const result = greet('Bob');
    expect(result).toBe('Hello, Bob!');
  });
});
