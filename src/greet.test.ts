import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
  it('should return default greeting when no custom greeting is provided', () => {
    const name = 'Alice';
    const result = greet(name);
    expect(result).toBe('Hello, Alice!');
  });

  it('should return custom greeting when a custom greeting is provided', () => {
    const name = 'Bob';
    const customGreeting = 'Good morning';
    const result = greet(name, customGreeting);
    expect(result).toBe('Good morning, Bob!');
  });
});
