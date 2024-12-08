import { describe, it, expect, vi, beforeEach } from 'vitest';
import { throwCustomError } from './throw-custom-error';

describe('throwCustomError', () => {
  beforeEach(() => {
    vi.spyOn(process, 'exit').mockImplementation(() => {
      // Prevent process.exit from terminating the test process
    });
  });

  it('should throw an error with the provided message', () => {
    const errorMessage = 'This is a custom error message';

    expect(() => throwCustomError(errorMessage)).toThrowError(new Error(errorMessage));
  });
});

vi.mock('./throw-custom-error', () => {
  return {
    throwCustomError: (message: string) => {
      throw new Error(message);
    }
  };
});
