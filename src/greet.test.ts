import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
  it('should return a default greeting message when no custom greeting is provided', () => {
    const result = greet('John');
    expect(result).toBe('Hello, John!');
  });

  it('should return a custom greeting message when a custom greeting is provided', () => {
    const result = greet('Jane', 'Good morning');
    expect(result).toBe('Good morning, Jane!');
  });

  it('should handle an empty name with default greeting', () => {
    const result = greet('');
    expect(result).toBe('Hello, !');
  });

  it('should handle an empty name with custom greeting', () => {
    const result = greet('', 'Hi');
    expect(result).toBe('Hi, !');
  });

  it('should return the correct greeting when name contains special characters', () => {
    const result = greet('John-Doe', 'Hi');
    expect(result).toBe('Hi, John-Doe!');
  });
});
