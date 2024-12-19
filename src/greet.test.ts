import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
  it('should return a greeting with the provided name and default to "Hello"', () => {
    const result = greet('Alice');
    expect(result).toBe('Hello, Alice!');
  });

  it('should return a greeting with the provided name and custom greeting', () => {
    const result = greet('Bob', 'Hi');
    expect(result).toBe('Hi, Bob!');
  });

  it('should return a greeting with "Hello" when name is an empty string', () => {
    const result = greet('');
    expect(result).toBe('Hello, !');
  });

  it('should return a greeting with custom greeting when name is an empty string', () => {
    const result = greet('', 'Greetings');
    expect(result).toBe('Greetings, !');
  });
});
