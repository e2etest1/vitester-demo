import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
  it('should return default greeting when no custom greeting provided', () => {
    expect(greet('John')).toBe('Hello, John!');
  });

  it('should return custom greeting when provided', () => {
    expect(greet('John', 'Hi')).toBe('Hi, John!');
  });

  it('should work with empty string name', () => {
    expect(greet('')).toBe('Hello, !');
  });

  it('should work with special characters in name', () => {
    expect(greet('John-Doe')).toBe('Hello, John-Doe!');
  });

  it('should work with spaces in custom greeting', () => {
    expect(greet('John', 'Good morning')).toBe('Good morning, John!');
  });
});
