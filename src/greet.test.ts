import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
  it('should return a greeting with the provided name and default to "Hello"', () => {
    const result = greet('Alice');
    expect(result).toBe('Hello, Alice!');
  });

  it('should return a greeting with the provided name and custom greeting', () => {
    const result = greet('Bob', 'Hi');
    expect(result).toBe('Hi, Bob!');
  });

  it('should return a greeting with "Hello" when name is an empty string', () => {
    const result = greet('');
    expect(result).toBe('Hello, !');
  });

  it('should return a greeting with custom greeting when name is an empty string', () => {
    const result = greet('', 'Greetings');
    expect(result).toBe('Greetings, !');
  });

  it('should handle special characters in the name', () => {
    const result = greet('!@#$', 'Hey');
    expect(result).toBe('Hey, !@#$!');
  });

  it('should handle special characters in the greeting', () => {
    const result = greet('Charlie', '#$%');
    expect(result).toBe('#$%, Charlie!');
  });

  it('should handle very long names', () => {
    const longName = 'A'.repeat(1000);
    const result = greet(longName);
    expect(result).toBe(`Hello, ${longName}!`);
  });

  it('should handle very long greetings', () => {
    const longGreeting = 'Hi'.repeat(500);
    const result = greet('Daisy', longGreeting);
    expect(result).toBe(`${longGreeting}, Daisy!`);
  });

  it('should return default greeting when greeting is undefined', () => {
    const result = greet('Eve', undefined);
    expect(result).toBe('Hello, Eve!');
  });

  it('should return default greeting when greeting is null', () => {
    // @ts-expect-error: Testing null input
    const result = greet('Frank', null);
    expect(result).toBe('Hello, Frank!');
  });
});
