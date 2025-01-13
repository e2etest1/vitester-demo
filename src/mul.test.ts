import { describe, it, expect } from "vitest";
import { multiply } from "./mul";

describe("multiply", () => {
  it("should return the product of two positive numbers", () => {
    expect(multiply(2, 3)).toBe(6);
  });

  it("should return the product of a positive and a negative number", () => {
    expect(multiply(5, -4)).toBe(-20);
  });

  it("should return the product of two negative numbers", () => {
    expect(multiply(-3, -7)).toBe(21);
  });

  it("should return 0 when one of the numbers is 0", () => {
    expect(multiply(0, 10)).toBe(0);
    expect(multiply(10, 0)).toBe(0);
  });

  it("should return 0 when both numbers are 0", () => {
    expect(multiply(0, 0)).toBe(0);
  });

  it("should handle large numbers correctly", () => {
    expect(multiply(1_000_000, 2_000_000)).toBe(2_000_000_000_000);
  });

  it("should handle fractional numbers correctly", () => {
    expect(multiply(0.5, 2)).toBe(1);
    expect(multiply(-0.5, 2)).toBe(-1);
  });

  it("should handle edge cases with very small numbers", () => {
    const result = multiply(1e-10, 1e-10);
    expect(Math.abs(result - 1e-20)).toBeLessThan(1e-25);
  });
});
