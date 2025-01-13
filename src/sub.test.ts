import { describe, it, expect } from "vitest";
import { sub } from "./sub";

describe("sub", () => {
  it("should subtract two positive numbers correctly", () => {
    expect(sub(10, 5)).toBe(5);
  });

  it("should subtract a positive and a negative number correctly", () => {
    expect(sub(10, -5)).toBe(15);
  });

  it("should subtract two negative numbers correctly", () => {
    expect(sub(-10, -5)).toBe(-5);
  });

  it("should return the same number when subtracting zero", () => {
    expect(sub(10, 0)).toBe(10);
  });

  it("should return the negative of the number when subtracting it from zero", () => {
    expect(sub(0, 10)).toBe(-10);
  });

  it("should handle subtraction resulting in zero", () => {
    expect(sub(5, 5)).toBe(0);
  });
});
