import { expect, test, describe } from "vitest";
import { part1, part2 } from ".";
import data from "./01.txt?raw";

describe("day 01", () => {
  describe("part 1", () => {
    test("actual", () => {
      expect(part1(data.split("\n"))).toBe(1506483);
    });
    test("example", () => {
      expect(part1(example)).toBe(11);
    });
  });

  describe("part 2", () => {
    test("actual", () => {
      expect(part2(data.split("\n"))).toBe(23126924);
    });
    test("example", () => {
      expect(part2(example)).toBe(31);
    });
  });
});

const example = ["3   4", "4   3", "2   5", "1   3", "3   9", "3   3"];
