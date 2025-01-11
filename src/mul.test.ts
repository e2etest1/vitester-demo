import { describe, it, expect } from "vitest";
import { multiply } from "./mul";

describe("multiply", () => {
  it("should return the product of two positive numbers", () => {
    expect(multiply(3, 5)).toBe(15);
  });

  it("should return the product of a positive and a negative number", () => {
    expect(multiply(4, -2)).toBe(-8);
  });

  it("should return the product of two negative numbers", () => {
    expect(multiply(-3, -7)).toBe(21);
  });

  it("should return 0 when multiplying by zero", () => {
    expect(multiply(0, 5)).toBe(0);
    expect(multiply(3, 0)).toBe(0);
    expect(multiply(0, 0)).toBe(0);
  });

  it("should handle decimal numbers correctly", () => {
    expect(multiply(2.5, 4)).toBe(10);
    expect(multiply(-1.5, 2)).toBe(-3);
  });

  it("should handle large numbers correctly", () => {
    expect(multiply(1e10, 1e5)).toBe(1e15);
    expect(multiply(-1e10, 1e5)).toBe(-1e15);
  });
});
