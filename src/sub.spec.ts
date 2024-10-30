import { describe, it, expect } from "vitest";
import { sub } from "./sub";

describe("sub function", () => {
  it("should return the correct result for positive numbers", () => {
    expect(sub(5, 3)).toBe(2);
  });

  it("should return the correct result for negative numbers", () => {
    expect(sub(-5, -3)).toBe(-2);
  });

  it("should return the correct result when subtracting a positive and a negative number", () => {
    expect(sub(5, -3)).toBe(8);
  });

  it("should return the correct result when subtracting a negative and a positive number", () => {
    expect(sub(-5, 3)).toBe(-8);
  });

  it("should return zero when both numbers are zero", () => {
    expect(sub(0, 0)).toBe(0);
  });

  it("should return the correct result when subtracting zero from a number", () => {
    expect(sub(5, 0)).toBe(5);
  });

  it("should return the correct result when a number is subtracted from zero", () => {
    expect(sub(0, 5)).toBe(-5);
  });
});
