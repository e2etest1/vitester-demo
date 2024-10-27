import { describe, it, expect } from "vitest";
import { reverseString } from "./reverse-string";

describe("reverseString", () => {
  it("should reverse a regular string", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  it("should handle an empty string", () => {
    expect(reverseString("")).toBe("");
  });

  it("should handle a single character string", () => {
    expect(reverseString("a")).toBe("a");
  });

  it("should handle a string with spaces", () => {
    expect(reverseString("hello world")).toBe("dlrow olleh");
  });

  it("should handle a string with special characters", () => {
    expect(reverseString("!@#$")).toBe("$#@!");
  });

  it("should handle a palindrome", () => {
    expect(reverseString("madam")).toBe("madam");
  });
});
