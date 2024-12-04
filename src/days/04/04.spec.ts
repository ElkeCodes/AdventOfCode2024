import { expect, test, describe } from "vitest";
import { part1, part2 } from ".";
import data from "./04.txt?raw";

describe("day 01", () => {
  describe("part 1", () => {
    test("actual", () => {
      expect(part1(data.split("\n"))).toBe(2557);
    });
    test("example", () => {
      expect(part1(example)).toBe(18);
    });
  });

  describe("part 2", () => {
    test("actual", () => {
      expect(part2(data.split("\n"))).toBe(1854);
    });
    test("example", () => {
      expect(part2(example)).toBe(9);
    });
  });
});

const example = [
  "MMMSXXMASM",
  "MSAMXMSMSA",
  "AMXSXMAAMM",
  "MSAMASMSMX",
  "XMASAMXAMM",
  "XXAMMXXAMA",
  "SMSMSASXSS",
  "SAXAMASAAA",
  "MAMMMXMMMM",
  "MXMXAXMASX",
];
