import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
  it('should return a greeting with the provided name and default greeting', () => {
    const result = greet('John');
    expect(result).toBe('Hello, John!');
  });

  it('should return a greeting with the provided name and custom greeting', () => {
    const result = greet('John', 'Hi');
    expect(result).toBe('Hi, John!');
  });

  it('should handle an empty name with the default greeting', () => {
    const result = greet('');
    expect(result).toBe('Hello, !');
  });

  it('should handle an empty name with a custom greeting', () => {
    const result = greet('', 'Hey');
    expect(result).toBe('Hey, !');
  });

  it('should handle an empty custom greeting', () => {
    const result = greet('John', '');
    expect(result).toBe('Hello, John!');
  });
});
