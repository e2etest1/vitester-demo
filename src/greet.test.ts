import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
  it('should return a default greeting when no custom greeting is provided', () => {
    const result = greet('Alice');
    expect(result).toBe('Hello, Alice!');
  });

  it('should return a custom greeting when a custom greeting is provided', () => {
    const result = greet('Bob', 'Hi');
    expect(result).toBe('Hi, Bob!');
  });

  it('should handle an empty name with a default greeting', () => {
    const result = greet('');
    expect(result).toBe('Hello, !');
  });

  it('should handle an empty name with a custom greeting', () => {
    const result = greet('', 'Greetings');
    expect(result).toBe('Greetings, !');
  });

  it('should default to "Hello, name!" when an empty custom greeting is provided', () => {
    const result = greet('Charlie', '');
    expect(result).toBe('Hello, Charlie!');
  });

  it('should return a custom greeting when both name and greeting are empty', () => {
    const result = greet('', '');
    expect(result).toBe('Hello, !');
  });

  it('should handle name with special characters', () => {
    const result = greet('John@Doe', 'Hi');
    expect(result).toBe('Hi, John@Doe!');
  });

  it('should handle name with numbers', () => {
    const result = greet('User123', 'Welcome');
    expect(result).toBe('Welcome, User123!');
  });

  it('should handle name with spaces', () => {
    const result = greet('John Doe', 'Hello');
    expect(result).toBe('Hello, John Doe!');
  });

  it('should return a default greeting when greeting is undefined', () => {
    const result = greet('Emily', undefined);
    expect(result).toBe('Hello, Emily!');
  });
});
