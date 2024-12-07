import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet function', () => {
  it('should return greeting with provided greeting word', () => {
    const result = greet('Alice', 'Hi');
    expect(result).toBe('Hi, Alice!');
  });

  it('should return default greeting when no greeting word is provided', () => {
    const result = greet('Bob');
    expect(result).toBe('Hello, Bob!');
  });
});
