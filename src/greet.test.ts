import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
  it('should return a greeting with the provided greeting message', () => {
    const result = greet('John', 'Hi');
    expect(result).toBe('Hi, John!');
  });

  it('should return a default greeting when no greeting message is provided', () => {
    const result = greet('Jane');
    expect(result).toBe('Hello, Jane!');
  });
});
