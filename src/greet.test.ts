import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
  it('should return a greeting with the provided greeting and name', () => {
    const result = greet('Alice', 'Good morning');
    expect(result).toBe('Good morning, Alice!');
  });

  it('should return a greeting with "Hello" when no greeting is provided', () => {
    const result = greet('Bob');
    expect(result).toBe('Hello, Bob!');
  });
});
