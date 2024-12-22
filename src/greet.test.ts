import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
  it('should return a greeting with the provided name and default greeting', () => {
    const result = greet('John');
    expect(result).toBe('Hello, John!');
  });

  it('should return a greeting with the provided name and custom greeting', () => {
    const result = greet('John', 'Hi');
    expect(result).toBe('Hi, John!');
  });

  it('should handle empty name with default greeting', () => {
    const result = greet('');
    expect(result).toBe('Hello, !');
  });

  it('should handle empty name with custom greeting', () => {
    const result = greet('', 'Hi');
    expect(result).toBe('Hi, !');
  });

  it('should handle undefined name with default greeting', () => {
    const result = greet(undefined as unknown as string);
    expect(result).toBe('Hello, undefined!');
  });

  it('should handle undefined name with custom greeting', () => {
    const result = greet(undefined as unknown as string, 'Hi');
    expect(result).toBe('Hi, undefined!');
  });
});
