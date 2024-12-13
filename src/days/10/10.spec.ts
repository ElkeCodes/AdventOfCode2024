import { expect, test, describe } from "vitest";
import { part1, part2 } from ".";
import data from "./10.txt?raw";

describe("day 01", () => {
  describe("part 1", () => {
    test("actual", () => {
      expect(part1(data.split("\n"))).toBe(822);
    });
    test("mini example", () => {
      expect(part1(miniExample)).toBe(1);
    });
    test("slightly bigger example", () => {
      expect(part1(slightlyBiggerExample)).toBe(2);
    });
    test("big example", () => {
      expect(part1(bigExample)).toBe(4);
    });
    test("bigger example", () => {
      expect(part1(biggerExample)).toBe(3);
    });
    test("biggest example", () => {
      expect(part1(biggestExample)).toBe(36);
    });
  });

  describe("part 2", () => {
    test("actual", () => {
      expect(part2(data.split("\n"))).toBe(1801);
    });
    test("biggest example", () => {
      expect(part2(biggestExample)).toBe(81);
    });
  });
});

const miniExample = ["0123", "1234", "8765", "9876"];

const slightlyBiggerExample = [
  "...0...",
  "...1...",
  "...2...",
  "6543456",
  "7.....7",
  "8.....8",
  "9.....9",
];

const bigExample = [
  "..90..9",
  "...1.98",
  "...2..7",
  "6543456",
  "765.987",
  "876....",
  "987....",
];

const biggerExample = [
  "10..9..",
  "2...8..",
  "3...7..",
  "4567654",
  "...8..3",
  "...9..2",
  ".....01",
];

const biggestExample = [
  "89010123",
  "78121874",
  "87430965",
  "96549874",
  "45678903",
  "32019012",
  "01329801",
  "10456732",
];
