import { expect, test, describe } from "vitest";
import { sum } from "./sum";

describe("sum", () => {
  test("should add 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("should add -1 + -1 to equal -2", () => {
    expect(sum(-1, -1)).toBe(-2);
  });

  test("should add 0 + 0 to equal 0", () => {
    expect(sum(0, 0)).toBe(0);
  });

  test("should add 1.5 + 2.5 to equal 4", () => {
    expect(sum(1.5, 2.5)).toBe(4);
  });

  test("should add -1.5 + 2 to equal 0.5", () => {
    expect(sum(-1.5, 2)).toBe(0.5);
  });
});
