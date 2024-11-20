import { describe, it, expect } from "vitest";
import { sub } from "./sub";

describe("sub", () => {
  it("should return the correct result for positive numbers", () => {
    expect(sub(10, 5)).toBe(5);
  });

  it("should return the correct result for negative numbers", () => {
    expect(sub(-10, -5)).toBe(-5);
  });

  it("should return the correct result when subtracting a positive and a negative number", () => {
    expect(sub(10, -5)).toBe(15);
  });

  it("should return the correct result when subtracting a negative and a positive number", () => {
    expect(sub(-10, 5)).toBe(-15);
  });

  it("should return zero when both numbers are the same", () => {
    expect(sub(5, 5)).toBe(0);
  });

  it("should return the correct result when subtracting zero", () => {
    expect(sub(5, 0)).toBe(5);
    expect(sub(0, 5)).toBe(-5);
  });
});
