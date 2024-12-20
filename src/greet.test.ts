import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
  it('should return a greeting with the provided name and default greeting', () => {
    const result = greet('Alice');
    expect(result).toBe('Hello, Alice!');
  });

  it('should return a custom greeting with the provided name', () => {
    const result = greet('Bob', 'Good morning');
    expect(result).toBe('Good morning, Bob!');
  });

  it('should return a greeting with an empty name and default greeting', () => {
    const result = greet('');
    expect(result).toBe('Hello, !');
  });

  it('should return a custom greeting with an empty name', () => {
    const result = greet('', 'Hi');
    expect(result).toBe('Hi, !');
  });

  it('should return a greeting with special characters in the name and default greeting', () => {
    const result = greet('!@#$%^&*()');
    expect(result).toBe('Hello, !@#$%^&*()!');
  });

  it('should return a custom greeting with special characters in the name', () => {
    const result = greet('!@#$%^&*()', 'Greetings');
    expect(result).toBe('Greetings, !@#$%^&*()!');
  });

  it('should handle undefined greeting gracefully', () => {
    const result = greet('Charlie', undefined);
    expect(result).toBe('Hello, Charlie!');
  });

  it('should handle null greeting gracefully', () => {
    // @ts-ignore
    const result = greet('Charlie', null);
    expect(result).toBe('Hello, Charlie!');
  });
});
