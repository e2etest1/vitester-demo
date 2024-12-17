import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
  it('should return a greeting with "Hello" if no custom greeting is provided', () => {
    const result = greet('John');
    expect(result).toBe('Hello, John!');
  });

  it('should return a greeting with the custom greeting if provided', () => {
    const result = greet('Jane', 'Hi');
    expect(result).toBe('Hi, Jane!');
  });
});
