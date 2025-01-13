import { describe, it, expect } from "vitest";
import { multiply } from "./mul";

describe("multiply", () => {
  it("should return the product of two positive numbers", () => {
    expect(multiply(2, 3)).toBe(6);
  });

  it("should return the product of a positive and a negative number", () => {
    expect(multiply(4, -5)).toBe(-20);
  });

  it("should return the product of two negative numbers", () => {
    expect(multiply(-3, -7)).toBe(21);
  });

  it("should return 0 when multiplying any number by 0", () => {
    expect(multiply(0, 5)).toBe(0);
    expect(multiply(7, 0)).toBe(0);
    expect(multiply(0, 0)).toBe(0);
  });

  it("should handle large numbers correctly", () => {
    expect(multiply(1_000_000, 2_000_000)).toBe(2_000_000_000_000);
  });

  it("should handle edge cases with 1", () => {
    expect(multiply(1, 123)).toBe(123);
    expect(multiply(123, 1)).toBe(123);
    expect(multiply(-1, 123)).toBe(-123);
    expect(multiply(123, -1)).toBe(-123);
  });
});
