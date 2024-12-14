import { describe, it, expect } from "vitest";
import { greet } from "./greet";

describe("greet", () => {
  it("should return a greeting with the provided name and default to 'Hello'", () => {
    const result = greet("Alice");
    expect(result).toBe("Hello, Alice!");
  });

  it("should return a greeting with the provided name and custom greeting", () => {
    const result = greet("Alice", "Good morning");
    expect(result).toBe("Good morning, Alice!");
  });
});
