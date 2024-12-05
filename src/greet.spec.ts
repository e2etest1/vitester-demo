import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
  it('should return a greeting with the default message when no custom greeting is provided', () => {
    const result = greet('John');
    expect(result).toBe('Hello, John!');
  });

  it('should return a greeting with a custom message when a custom greeting is provided', () => {
    const result = greet('John', 'Hi');
    expect(result).toBe('Hi, John!');
  });
});
