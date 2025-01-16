import { describe, expect, it } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
  it('should return default greeting with name', () => {
    const result = greet('John');
    expect(result).toBe('Hello, John!');
  });

  it('should return custom greeting with name', () => {
    const result = greet('John', 'Hi');
    expect(result).toBe('Hi, John!');
  });
});
