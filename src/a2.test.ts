import { describe, it, expect } from "vitest";
import { sum } from "./a2";

describe("sum", () => {
  it("should correctly add two numbers", () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(-1, 1)).toBe(0);
    expect(sum(0, 0)).toBe(0);
  });
});
