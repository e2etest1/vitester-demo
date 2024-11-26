import { describe, it, expect } from "vitest";
import { sum } from "./a2";

describe("sum", () => {
  it("should return the correct sum of two positive numbers", () => {
    expect(sum(2, 3)).toBe(5);
  });

  it("should return the correct sum of two negative numbers", () => {
    expect(sum(-2, -3)).toBe(-5);
  });

  it("should return the correct sum of a positive and a negative number", () => {
    expect(sum(5, -3)).toBe(2);
  });

  it("should return zero when both numbers are zero", () => {
    expect(sum(0, 0)).toBe(0);
  });
});
