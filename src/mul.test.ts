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
    expect(multiply(-7, -3)).toBe(21);
  });

  it("should return 0 when one of the numbers is 0", () => {
    expect(multiply(0, 10)).toBe(0);
    expect(multiply(10, 0)).toBe(0);
  });

  it("should handle multiplying by 1 correctly", () => {
    expect(multiply(1, 7)).toBe(7);
    expect(multiply(7, 1)).toBe(7);
  });

  it("should handle multiplying by -1 correctly", () => {
    expect(multiply(-1, 8)).toBe(-8);
    expect(multiply(8, -1)).toBe(-8);
  });
});
