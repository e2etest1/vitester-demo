import { describe, it, expect } from "vitest";
import { sub } from "./sub";

describe("sub", () => {
  it("should subtract two positive numbers correctly", () => {
    expect(sub(5, 3)).toBe(2);
  });

  it("should subtract a positive and a negative number correctly", () => {
    expect(sub(5, -3)).toBe(8);
  });

  it("should subtract two negative numbers correctly", () => {
    expect(sub(-5, -3)).toBe(-2);
  });

  it("should return zero when subtracting two equal numbers", () => {
    expect(sub(3, 3)).toBe(0);
  });

  it("should handle subtraction resulting in negative numbers", () => {
    expect(sub(3, 5)).toBe(-2);
  });

  it("should return the same number when subtracting zero", () => {
    expect(sub(5, 0)).toBe(5);
  });

  it("should return the negative of the number when zero is subtracted from it", () => {
    expect(sub(0, 5)).toBe(-5);
  });
});
