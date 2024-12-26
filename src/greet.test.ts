import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
  it('should return a greeting with the provided greeting message', () => {
    const name = 'Alice';
    const greeting = 'Good morning';
    const result = greet(name, greeting);
    expect(result).toBe('Good morning, Alice!');
  });

  it('should return a greeting with the default message when no greeting is provided', () => {
    const name = 'Bob';
    const result = greet(name);
    expect(result).toBe('Hello, Bob!');
  });
});
