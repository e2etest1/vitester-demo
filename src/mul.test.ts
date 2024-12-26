import { describe, it, expect } from "vitest";
import { multiply } from "./mul";

describe("multiply", () => {
  it("should multiply two positive numbers", () => {
    expect(multiply(2, 3)).toBe(6);
  });

  it("should multiply a positive and a negative number", () => {
    expect(multiply(2, -3)).toBe(-6);
  });

  it("should multiply two negative numbers", () => {
    expect(multiply(-2, -3)).toBe(6);
  });

  it("should return zero when multiplying any number by zero", () => {
    expect(multiply(0, 5)).toBe(0);
    expect(multiply(5, 0)).toBe(0);
  });

  it("should return zero when multiplying zero by zero", () => {
    expect(multiply(0, 0)).toBe(0);
  });

  it("should handle multiplication with one as a factor", () => {
    expect(multiply(1, 7)).toBe(7);
    expect(multiply(7, 1)).toBe(7);
  });

  it("should handle large numbers", () => {
    expect(multiply(1000, 1000)).toBe(1000000);
  });

  it("should handle very small numbers (fractions)", () => {
    expect(multiply(0.1, 0.2)).toBeCloseTo(0.02, 5);
    expect(multiply(0.5, 0.5)).toBeCloseTo(0.25, 5);
  });

  it("should handle multiplication with JavaScript's maximum safe integer", () => {
    const maxSafeInt = Number.MAX_SAFE_INTEGER;
    expect(multiply(maxSafeInt, 1)).toBe(maxSafeInt);
    expect(multiply(maxSafeInt, 0)).toBe(0);
  });

  it("should handle multiplication with JavaScript's minimum safe integer", () => {
    const minSafeInt = Number.MIN_SAFE_INTEGER;
    expect(multiply(minSafeInt, 1)).toBe(minSafeInt);
    expect(Object.is(multiply(minSafeInt, 0), -0)).toBe(true);
  });
});
