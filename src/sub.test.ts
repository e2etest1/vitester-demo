import { describe, it, expect } from "vitest";
import { sub } from "./sub";

describe("sub function", () => {
  it("should subtract two positive numbers correctly", () => {
    expect(sub(10, 5)).toBe(5);
  });

  it("should subtract two negative numbers correctly", () => {
    expect(sub(-10, -5)).toBe(-5);
  });

  it("should subtract a positive and a negative number correctly", () => {
    expect(sub(10, -5)).toBe(15);
  });

  it("should subtract a number from zero correctly", () => {
    expect(sub(0, 5)).toBe(-5);
  });

  it("should subtract zero from a number correctly", () => {
    expect(sub(5, 0)).toBe(5);
  });

  it("should subtract two zeros correctly", () => {
    expect(sub(0, 0)).toBe(0);
  });
});
