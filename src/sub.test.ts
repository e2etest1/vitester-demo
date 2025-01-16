import { describe, expect, it } from "vitest";
import { sub } from "./sub";

describe("sub", () => {
  it("should subtract two positive numbers correctly", () => {
    expect(sub(5, 3)).toBe(2);
  });

  it("should subtract with negative numbers correctly", () => {
    expect(sub(5, -3)).toBe(8);
    expect(sub(-5, 3)).toBe(-8);
    expect(sub(-5, -3)).toBe(-2);
  });

  it("should subtract with zero correctly", () => {
    expect(sub(5, 0)).toBe(5);
    expect(sub(0, 3)).toBe(-3);
    expect(sub(0, 0)).toBe(0);
  });
});
