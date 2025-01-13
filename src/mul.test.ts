import { describe, it, expect } from "vitest";
import { multiply } from "./mul";

describe("multiply", () => {
  it("should multiply two positive numbers correctly", () => {
    expect(multiply(2, 3)).toBe(6);
  });

  it("should multiply a positive and a negative number correctly", () => {
    expect(multiply(5, -4)).toBe(-20);
  });

  it("should multiply two negative numbers correctly", () => {
    expect(multiply(-7, -8)).toBe(56);
  });

  it("should return 0 when one of the numbers is 0", () => {
    expect(multiply(0, 10)).toBe(0);
    expect(multiply(10, 0)).toBe(0);
  });

  it("should return 0 when both numbers are 0", () => {
    expect(multiply(0, 0)).toBe(0);
  });

  it("should handle multiplication with large numbers", () => {
    expect(multiply(1_000_000, 2_000_000)).toBe(2_000_000_000_000);
  });

  it("should handle multiplication with fractional numbers", () => {
    expect(multiply(0.5, 2)).toBe(1);
    expect(multiply(-0.5, 2)).toBe(-1);
  });

  it("should handle multiplication with very small numbers", () => {
    expect(multiply(1e-10, 1e-10)).toBeCloseTo(1e-20, 15);
  });
});
