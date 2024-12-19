import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
  it('should return a greeting with "Hello" if no custom greeting is provided', () => {
    const result = greet('Alice');
    expect(result).toBe('Hello, Alice!');
  });

  it('should return a custom greeting if provided', () => {
    const result = greet('Bob', 'Hi');
    expect(result).toBe('Hi, Bob!');
  });

  it('should handle an empty name with default greeting', () => {
    const result = greet('');
    expect(result).toBe('Hello, !');
  });

  it('should handle an empty name with custom greeting', () => {
    const result = greet('', 'Greetings');
    expect(result).toBe('Greetings, !');
  });

  it('should handle both name and greeting as empty strings', () => {
    const result = greet('', '');
    expect(result).toBe('Hello, !');
  });
});
