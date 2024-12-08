import { expect, test, describe } from "vitest";
import { findCorrectOperators, parseData, part1 } from ".";
import data from "./07.txt?raw";

describe("day 01", () => {
  describe("part 1", () => {
    test("actual", () => {
      expect(part1(data.split("\n"))).toBe(1289579105366);
    });
    test("example", () => {
      expect(part1(example)).toBe(3749);
    });
  });
  describe("helpers", () => {
    test("parseData", () => {
      expect(parseData(example)).toStrictEqual([
        { result: 190, parts: [10, 19] },
        { result: 3267, parts: [81, 40, 27] },
        { result: 83, parts: [17, 5] },
        { result: 156, parts: [15, 6] },
        { result: 7290, parts: [6, 8, 6, 15] },
        { result: 161011, parts: [16, 10, 13] },
        { result: 192, parts: [17, 8, 14] },
        { result: 21037, parts: [9, 7, 18, 13] },
        { result: 292, parts: [11, 6, 16, 20] },
      ]);
    });
    test("findCorrectOperators", () => {
      expect(
        findCorrectOperators({
          result: 2093,
          parts: [44, 4, 9, 8, 1, 1, 9, 9, 589, 3, 3, 1],
        })
      ).toBe(2093);
    });
  });
});

const example = [
  "190: 10 19",
  "3267: 81 40 27",
  "83: 17 5",
  "156: 15 6",
  "7290: 6 8 6 15",
  "161011: 16 10 13",
  "192: 17 8 14",
  "21037: 9 7 18 13",
  "292: 11 6 16 20",
];
