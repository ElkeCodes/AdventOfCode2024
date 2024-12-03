import { expect, test, describe } from "vitest";
import { part1, part2 } from ".";
import data from "./03.txt?raw";

describe("day 01", () => {
  describe("part 1", () => {
    test("actual", () => {
      expect(part1(data.split("\n"))).toBe(183788984);
    });
    test("example", () => {
      expect(part1(examplePart1)).toBe(161);
    });
  });

  describe("part 2", () => {
    test("actual", () => {
      expect(part2(data.split("\n"))).toBe(62098619);
    });
    test("example", () => {
      expect(part2(examplePart2)).toBe(48);
    });
  });
});

const examplePart1 = [
  "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))",
];

const examplePart2 = [
  "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))",
];
