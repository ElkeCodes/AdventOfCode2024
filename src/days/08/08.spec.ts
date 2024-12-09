import { expect, test, describe } from "vitest";
import { part1, part2 } from ".";
import data from "./08.txt?raw";

describe("day 01", () => {
  describe("part 1", () => {
    test("actual", () => {
      expect(part1(data.split("\n"))).toBe(276);
    });
    test("example", () => {
      expect(part1(example)).toBe(14);
    });
  });

  describe("part 2", () => {
    test("actual", () => {
      expect(part2(data.split("\n"))).toBe(991);
    });
    test("example", () => {
      expect(part2(example)).toBe(34);
    });
  });
});

const example = [
  "............",
  "........0...",
  ".....0......",
  ".......0....",
  "....0.......",
  "......A.....",
  "............",
  "............",
  "........A...",
  ".........A..",
  "............",
  "............",
];
