import { describe, expect, it } from "vitest";
import { sum } from "./sum";

describe("sum", () => {
  it("adds two positive numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("adds a positive and negative number", () => {
    expect(sum(5, -3)).toBe(2);
  });

  it("adds two negative numbers", () => {
    expect(sum(-2, -4)).toBe(-6);
  });

  it("adds zero with a number", () => {
    expect(sum(0, 5)).toBe(5);
    expect(sum(5, 0)).toBe(5);
  });

  it("adds zero with zero", () => {
    expect(sum(0, 0)).toBe(0);
  });
});
