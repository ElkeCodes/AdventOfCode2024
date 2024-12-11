import { expect, test, describe } from "vitest";
import { convertDiskMapToIndividualBlocks, part1, part2 } from ".";
import data from "./10.txt?raw";

describe("day 01", () => {
  describe("part 1", () => {
    test("actual", () => {
      expect(part1(data.split("\n"))).toBe(6435922584968);
    });
    test("example", () => {
      expect(part1(example)).toBe(1928);
    });
  });

  describe("part 2", () => {
    test("actual", () => {
      expect(part2(data.split("\n"))).toBe(6469636832766);
    });
    test("example", () => {
      expect(part2(example)).toBe(2858);
    });
  });
});

// 00...111...2...333.44.5555.6666.777.888899
const example = ["2333133121414131402"];
