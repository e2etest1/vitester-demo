import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
  it('should return a greeting with the provided name and default to "Hello"', () => {
    const result = greet('John');
    expect(result).toBe('Hello, John!');
  });

  it('should return a greeting with the provided name and custom greeting', () => {
    const result = greet('John', 'Hi');
    expect(result).toBe('Hi, John!');
  });
});
