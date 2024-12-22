import { describe, it, expect } from "vitest"
import { sum } from "./a1"

describe("sum", () => {
  it("should return the sum of two positive numbers", () => {
    expect(sum(1, 2)).toBe(3)
  })

  it("should return the sum when one number is negative", () => {
    expect(sum(-1, 2)).toBe(1)
  })

  it("should return the sum of two negative numbers", () => {
    expect(sum(-1, -2)).toBe(-3)
  })

  it("should return the sum when one number is zero", () => {
    expect(sum(0, 5)).toBe(5)
  })

  it("should return the correct sum for large numbers", () => {
    expect(sum(1000000, 2000000)).toBe(3000000)
  })
})
