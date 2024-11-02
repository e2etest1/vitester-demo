import { expect, test } from "vitest";
import { sum } from "./sum";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1 as any, 2 as any)).toBe(3);
});

test("adds -1 + -2 to equal -3", () => {
  expect(sum(-1 as any, -2 as any)).toBe(-3);
});

test("adds 0 + 0 to equal 0", () => {
  expect(sum(0 as any, 0 as any)).toBe(0);
});

test("adds 3 + -3 to equal 0", () => {
  expect(sum(3 as any, -3 as any)).toBe(0);
});
