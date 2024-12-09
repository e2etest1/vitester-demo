import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock process.exit globally to prevent it from affecting the test environment.
vi.spyOn(process, 'exit').mockImplementation(() => {
  // Intentionally left blank to suppress the actual process.exit call
});

describe('throwCustomError', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should throw an error with the specified message', async () => {
    const { throwCustomError } = await import('./throw-custom-error');
    const errorMessage = 'This is a custom error message';
    expect(() => throwCustomError(errorMessage)).toThrowError(errorMessage);
  });
});
