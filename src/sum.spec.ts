import { describe, it, expect } from "vitest";
import { sum } from "./sum";

describe("sum function", () => {
  it("should add two positive numbers correctly", () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(10, 5)).toBe(15);
  });

  it("should add two negative numbers correctly", () => {
    expect(sum(-1, -2)).toBe(-3);
    expect(sum(-10, -5)).toBe(-15);
  });

  it("should add a positive and a negative number correctly", () => {
    expect(sum(1, -2)).toBe(-1);
    expect(sum(-10, 5)).toBe(-5);
  });

  it("should return the same number when adding zero", () => {
    expect(sum(0, 0)).toBe(0);
    expect(sum(0, 5)).toBe(5);
    expect(sum(5, 0)).toBe(5);
  });
});
