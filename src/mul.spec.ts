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

  it("should return zero when one of the numbers is zero", () => {
    expect(multiply(0, 5)).toBe(0);
    expect(multiply(5, 0)).toBe(0);
  });

  it("should return zero when both numbers are zero", () => {
    expect(multiply(0, 0)).toBe(0);
  });

  it("should handle large numbers correctly", () => {
    expect(multiply(1000000, 1000000)).toBe(1000000000000);
  });

  it("should handle decimal numbers correctly", () => {
    expect(multiply(0.5, 0.2)).toBeCloseTo(0.1);
  });

  it("should return the product of one positive and one zero", () => {
    expect(multiply(0, 7)).toBe(0);
  });

  it("should return the product of one negative and one zero", () => {
    expect(Object.is(multiply(-7, 0), -0)).toBe(true);
  });

  it("should handle very small decimal numbers correctly", () => {
    expect(multiply(0.0001, 0.0002)).toBeCloseTo(0.00000002);
  });

  it("should handle a mix of large and small numbers", () => {
    expect(multiply(1000000, 0.000001)).toBeCloseTo(1);
  });

  it("should handle negative decimal numbers", () => {
    expect(multiply(-0.5, 0.2)).toBeCloseTo(-0.1);
  });

  it("should handle multiplication resulting in a negative zero", () => {
    expect(Object.is(multiply(-0, 5), -0)).toBe(true);
  });
});
