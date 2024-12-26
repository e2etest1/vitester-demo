import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet function', () => {
  it('should return a greeting with the default "Hello" when no custom greeting is provided', () => {
    const name = 'Alice';
    const result = greet(name);
    expect(result).toBe('Hello, Alice!');
  });

  it('should return a greeting with the provided custom greeting', () => {
    const name = 'Bob';
    const customGreeting = 'Hi';
    const result = greet(name, customGreeting);
    expect(result).toBe('Hi, Bob!');
  });
});
