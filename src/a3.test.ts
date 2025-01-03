import { describe, expect, it } from "vitest";
import { sum } from "./a3";

describe("sum", () => {
  it("should add two positive numbers correctly", () => {
    expect(sum(2, 3)).toBe(5);
  });

  it("should add two negative numbers correctly", () => {
    expect(sum(-2, -3)).toBe(-5);
  });

  it("should add positive and negative numbers correctly", () => {
    expect(sum(5, -3)).toBe(2);
    expect(sum(-5, 3)).toBe(-2);
  });

  it("should add zero correctly", () => {
    expect(sum(0, 5)).toBe(5);
    expect(sum(5, 0)).toBe(5);
    expect(sum(0, 0)).toBe(0);
  });
});
