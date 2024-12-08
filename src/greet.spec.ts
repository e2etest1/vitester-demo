import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
  it('should return a greeting with "Hello" when no custom greeting is provided', () => {
    const result = greet('John');
    expect(result).toBe('Hello, John!');
  });

  it('should return a custom greeting when provided', () => {
    const result = greet('John', 'Hi');
    expect(result).toBe('Hi, John!');
  });

  it('should handle empty name with default greeting', () => {
    const result = greet('');
    expect(result).toBe('Hello, !');
  });

  it('should handle empty name with custom greeting', () => {
    const result = greet('', 'Greetings');
    expect(result).toBe('Greetings, !');
  });
});
