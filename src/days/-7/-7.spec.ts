import { expect, test, describe } from "vitest";
import { part1, part2 } from ".";
import data from "./day01.txt?raw";

describe("day -7", () => {
  describe("part 1", () => {
    test("example", () => {
      expect(part1(["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"])).toBe(
        142
      );
    });

    test("real", () => {
      expect(part1(data.split("\n"))).toBe(56465);
    });
  });

  describe("part 2", () => {
    test("example", () => {
      expect(
        part2([
          "two1nine",
          "eightwothree",
          "abcone2threexyz",
          "xtwone3four",
          "4nineeightseven2",
          "zoneight234",
          "7pqrstsixteen",
        ])
      ).toBe(281);
    });

    test("real", () => {
      expect(part2(data.split("\n"))).toBe(55902);
    });
  });
});
