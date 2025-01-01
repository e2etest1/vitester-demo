import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
  it('should return a default greeting when no custom greeting is provided', () => {
    const result = greet('John');
    expect(result).toBe('Hello, John!');
  });

  it('should return a custom greeting when a custom greeting is provided', () => {
    const result = greet('John', 'Hi');
    expect(result).toBe('Hi, John!');
  });
});
