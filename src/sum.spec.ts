import { describe, it, expect } from "vitest";
import { sum } from "./sum";

describe("sum", () => {
  it("should return the sum of three numbers", () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(-1, -2)).toBe(-3);
    expect(sum(0, 0)).toBe(0);
  });
});
