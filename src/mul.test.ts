import { describe, it, expect } from "vitest";
import { multiply } from "./mul";

describe("multiply", () => {
  it("should return the product of two positive numbers", () => {
    expect(multiply(2, 3)).toBe(6);
  });

  it("should return the product of a positive and a negative number", () => {
    expect(multiply(-4, 5)).toBe(-20);
  });

  it("should return the product of two negative numbers", () => {
    expect(multiply(-3, -7)).toBe(21);
  });

  it("should return 0 when one of the numbers is 0", () => {
    expect(multiply(0, 10)).toBe(0);
    expect(multiply(10, 0)).toBe(0);
  });

  it("should return 0 when both numbers are 0", () => {
    expect(multiply(0, 0)).toBe(0);
  });
});
