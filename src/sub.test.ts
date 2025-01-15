import { describe, expect, it } from "vitest";
import { sub } from "./sub";

describe("sub", () => {
  it("should subtract two positive numbers", () => {
    expect(sub(5, 3)).toBe(2);
  });

  it("should subtract a positive and negative number", () => {
    expect(sub(5, -3)).toBe(8);
  });

  it("should subtract two negative numbers", () => {
    expect(sub(-5, -3)).toBe(-2);
  });

  it("should handle zero", () => {
    expect(sub(5, 0)).toBe(5);
    expect(sub(0, 5)).toBe(-5);
    expect(sub(0, 0)).toBe(0);
  });
});
