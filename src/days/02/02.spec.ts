import { expect, test, describe } from "vitest";
import { createReportVariations, isReportSafe, part1, part2 } from ".";
import data from "./02.txt?raw";

describe("day 01", () => {
  describe("part 1", () => {
    test("actual", () => {
      expect(part1(data.split("\n"))).toBe(282);
    });
    test("example", () => {
      expect(part1(example)).toBe(2);
    });
  });

  describe("part 2", () => {
    test("actual", () => {
      expect(part2(data.split("\n"))).toBe(349);
    });
    test("example", () => {
      expect(part2(example)).toBe(4);
    });
  });

  describe("helpers", () => {
    test("isReportSafe", () => {
      expect(isReportSafe([7, 6, 4, 2, 1])).toBeTruthy();
      expect(isReportSafe([1, 2, 7, 8, 9])).toBeFalsy();
      expect(isReportSafe([9, 7, 6, 2, 1])).toBeFalsy();
      expect(isReportSafe([1, 3, 2, 4, 5])).toBeFalsy();
      expect(isReportSafe([8, 6, 4, 4, 1])).toBeFalsy();
      expect(isReportSafe([1, 3, 6, 7, 9])).toBeTruthy();
      expect(() => isReportSafe([1])).toThrowError(
        "report length must be more than 2"
      );
    });
    test("createReportVariations", () => {
      expect(createReportVariations([7, 6, 4, 2, 1])).toStrictEqual([
        [6, 4, 2, 1],
        [7, 4, 2, 1],
        [7, 6, 2, 1],
        [7, 6, 4, 1],
        [7, 6, 4, 2],
        [7, 6, 4, 2, 1],
      ]);
    });
  });
});

const example = [
  "7 6 4 2 1",
  "1 2 7 8 9",
  "9 7 6 2 1",
  "1 3 2 4 5",
  "8 6 4 4 1",
  "1 3 6 7 9",
];
