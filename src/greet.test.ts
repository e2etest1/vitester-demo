import { describe, expect, it } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
  it('should return default greeting when only name is provided', () => {
    expect(greet('John')).toBe('Hello, John!');
  });

  it('should return custom greeting when both name and greeting are provided', () => {
    expect(greet('John', 'Hi')).toBe('Hi, John!');
  });

  it('should work with empty string name', () => {
    expect(greet('')).toBe('Hello, !');
  });

  it('should work with special characters in name', () => {
    expect(greet('John@Doe')).toBe('Hello, John@Doe!');
  });

  it('should work with special characters in greeting', () => {
    expect(greet('John', 'Howdy!')).toBe('Howdy!, John!');
  });
});
