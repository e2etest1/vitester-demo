import { describe, it, expect } from "vitest";
import { multiply } from "./mul";

describe("multiply", () => {
  it("should return the product of two positive numbers", () => {
    expect(multiply(2, 3)).toBe(6);
  });

  it("should return the product of a positive and a negative number", () => {
    expect(multiply(-2, 3)).toBe(-6);
  });

  it("should return the product of two negative numbers", () => {
    expect(multiply(-2, -3)).toBe(6);
  });

  it("should return 0 when one of the numbers is 0", () => {
    expect(multiply(0, 5)).toBe(0);
    expect(multiply(5, 0)).toBe(0);
  });

  it("should return the product of a number and 1 (identity property)", () => {
    expect(multiply(1, 7)).toBe(7);
    expect(multiply(7, 1)).toBe(7);
  });

  it("should handle large numbers", () => {
    expect(multiply(1_000_000, 2_000_000)).toBe(2_000_000_000_000);
  });

  it("should handle decimal numbers", () => {
    expect(multiply(2.5, 4)).toBe(10);
    expect(multiply(-2.5, 4)).toBe(-10);
  });

  it("should handle very small numbers", () => {
    expect(multiply(0.0001, 0.0002)).toBeCloseTo(0.00000002, 10);
  });
});
