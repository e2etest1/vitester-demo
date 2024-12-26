import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
  it('should return a greeting with the specified name and default greeting', () => {
    const result = greet('John');
    expect(result).toBe('Hello, John!');
  });

  it('should return a greeting with the specified name and custom greeting', () => {
    const result = greet('John', 'Good morning');
    expect(result).toBe('Good morning, John!');
  });
});
