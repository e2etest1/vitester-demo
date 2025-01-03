import { describe, it, expect } from "vitest";
import { multiply } from "./mul";

describe("multiply", () => {
  it("should multiply two positive numbers correctly", () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(4, 5)).toBe(20);
    expect(multiply(10, 10)).toBe(100);
  });

  it("should multiply with zero correctly", () => {
    expect(multiply(5, 0)).toBe(0);
    expect(multiply(0, 7)).toBe(0);
    expect(multiply(0, 0)).toBe(0);
  });

  it("should multiply negative numbers correctly", () => {
    expect(multiply(-2, 3)).toBe(-6);
    expect(multiply(2, -3)).toBe(-6);
    expect(multiply(-2, -3)).toBe(6);
  });

  it("should multiply decimal numbers correctly", () => {
    expect(multiply(2.5, 2)).toBe(5);
    expect(multiply(1.5, 1.5)).toBe(2.25);
    expect(multiply(0.1, 0.2)).toBeCloseTo(0.02);
  });

  it("should multiply large numbers correctly", () => {
    expect(multiply(999999, 999999)).toBe(999998000001);
    expect(multiply(1000000, 1000000)).toBe(1000000000000);
  });
});
