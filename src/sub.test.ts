import { describe, it, expect } from "vitest";
import { sub } from "./sub";

describe("sub", () => {
  it("should subtract two positive numbers correctly", () => {
    expect(sub(5, 3)).toBe(2);
  });

  it("should subtract a positive and negative number correctly", () => {
    expect(sub(5, -3)).toBe(8);
  });

  it("should subtract two negative numbers correctly", () => {
    expect(sub(-5, -3)).toBe(-2);
  });
});
