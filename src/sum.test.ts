import { describe, it, expect } from "vitest";
import { sum } from "./sum";

describe("sum", () => {
  it("should return the correct sum of two positive numbers", () => {
    expect(sum(3, 5)).toBe(8);
  });

  it("should return the correct sum of a positive number and zero", () => {
    expect(sum(7, 0)).toBe(7);
  });

  it("should return the correct sum of two negative numbers", () => {
    expect(sum(-4, -6)).toBe(-10);
  });

  it("should return the correct sum of a positive and a negative number", () => {
    expect(sum(10, -3)).toBe(7);
  });

  it("should return the correct sum of two zeros", () => {
    expect(sum(0, 0)).toBe(0);
  });
});
