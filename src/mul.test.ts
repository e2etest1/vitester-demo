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

  it("should return 0 when one operand is 0", () => {
    expect(multiply(0, 10)).toBe(0);
    expect(multiply(10, 0)).toBe(0);
  });

  it("should return the product of a number and 1 (identity property)", () => {
    expect(multiply(1, 15)).toBe(15);
    expect(multiply(15, 1)).toBe(15);
  });

  it("should handle large numbers correctly", () => {
    expect(multiply(1_000_000, 1_000_000)).toBe(1_000_000_000_000);
  });

  it("should handle fractional numbers", () => {
    expect(multiply(0.5, 0.2)).toBeCloseTo(0.1);
  });

  it("should handle negative fractional numbers", () => {
    expect(multiply(-0.5, 0.2)).toBeCloseTo(-0.1);
  });

  it("should handle both operands as zero", () => {
    expect(multiply(0, 0)).toBe(0);
  });
});
