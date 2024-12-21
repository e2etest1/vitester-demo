import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
  it('should return a greeting with the provided name and default to "Hello"', () => {
    const name = 'Alice';
    const result = greet(name);
    expect(result).toBe('Hello, Alice!');
  });

  it('should return a greeting with the provided name and custom greeting', () => {
    const name = 'Bob';
    const customGreeting = 'Good morning';
    const result = greet(name, customGreeting);
    expect(result).toBe('Good morning, Bob!');
  });
});
