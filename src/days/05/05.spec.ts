import { expect, test, describe } from "vitest";
import {
  grabCenter,
  isCorrectlyOrdered,
  parseData,
  part1,
  part2,
  sortUpdate,
} from ".";
import data from "./05.txt?raw";
import challenge1 from "./challenge1.txt?raw";
import challenge2 from "./challenge2.txt?raw";

describe("day 01", () => {
  describe("part 1", () => {
    test("actual", () => {
      expect(part1(data.split("\n"))).toBe(5087);
    });
    test("example", () => {
      expect(part1(example)).toBe(143);
    });
  });

  describe("part 2", () => {
    test("actual", () => {
      expect(part2(data.split("\n"))).toBe(4971);
    });
    test("example", () => {
      expect(part2(example)).toBe(123);
    });
  });

  describe("helpers", () => {
    test("parseData", () => {
      expect(parseData(example)).toStrictEqual({
        rules: exampleRules,
        updates: [
          [75, 47, 61, 53, 29],
          [97, 61, 53, 29, 13],
          [75, 29, 13],
          [75, 97, 47, 61, 53],
          [61, 13, 29],
          [97, 13, 75, 29, 47],
        ],
      });
    });
    test("isCorrectlyOrdered", () => {
      expect(
        isCorrectlyOrdered([75, 47, 61, 53, 29], exampleRules)
      ).toBeTruthy();
      expect(
        isCorrectlyOrdered([97, 61, 53, 29, 13], exampleRules)
      ).toBeTruthy();
      expect(isCorrectlyOrdered([75, 29, 13], exampleRules)).toBeTruthy();
      expect(
        isCorrectlyOrdered([75, 97, 47, 61, 53], exampleRules)
      ).toBeFalsy();
      expect(isCorrectlyOrdered([61, 13, 29], exampleRules)).toBeFalsy();
      expect(
        isCorrectlyOrdered([97, 13, 75, 29, 47], exampleRules)
      ).toBeFalsy();
    });
    test("grabCenter", () => {
      expect(grabCenter([1, 2, 3])).toBe(2);
      expect(grabCenter([1, 2, 3, 4, 5])).toBe(3);
    });
    test("sortUpdate", () => {
      expect(sortUpdate([75, 97, 47, 61, 53], exampleRules)).toStrictEqual([
        97, 75, 47, 61, 53,
      ]);
      expect(sortUpdate([61, 13, 29], exampleRules)).toStrictEqual([
        61, 29, 13,
      ]);
      expect(sortUpdate([97, 13, 75, 29, 47], exampleRules)).toStrictEqual([
        97, 75, 47, 29, 13,
      ]);
    });
  });

  // https://gathering.tweakers.net/forum/list_message/80936826#80936826
  // thanks for the extra challenge Soultaker!
  describe("soultaker's challenge", () => {
    test("challenge 1", () => {
      const lines = challenge1.split("\n");
      expect(part1(lines) * part2(lines)).toBe(9812096);
    });
    test("challenge 2", () => {
      const lines = challenge2.split("\n");
      expect(part1(lines) * part2(lines)).toBe(6145186);
    });
  });
});

const exampleRules = [
  { before: 47, after: 53 },
  { before: 97, after: 13 },
  { before: 97, after: 61 },
  { before: 97, after: 47 },
  { before: 75, after: 29 },
  { before: 61, after: 13 },
  { before: 75, after: 53 },
  { before: 29, after: 13 },
  { before: 97, after: 29 },
  { before: 53, after: 29 },
  { before: 61, after: 53 },
  { before: 97, after: 53 },
  { before: 61, after: 29 },
  { before: 47, after: 13 },
  { before: 75, after: 47 },
  { before: 97, after: 75 },
  { before: 47, after: 61 },
  { before: 75, after: 61 },
  { before: 47, after: 29 },
  { before: 75, after: 13 },
  { before: 53, after: 13 },
];

const example = [
  "47|53",
  "97|13",
  "97|61",
  "97|47",
  "75|29",
  "61|13",
  "75|53",
  "29|13",
  "97|29",
  "53|29",
  "61|53",
  "97|53",
  "61|29",
  "47|13",
  "75|47",
  "97|75",
  "47|61",
  "75|61",
  "47|29",
  "75|13",
  "53|13",
  "",
  "75,47,61,53,29",
  "97,61,53,29,13",
  "75,29,13",
  "75,97,47,61,53",
  "61,13,29",
  "97,13,75,29,47",
];

/**
 
"29|13",
"47|13",
"47|29",
"47|53",
"47|61",
"53|13",
"53|29",
"61|13",
"61|29",
"61|53",
"75|13",
"75|29",
"75|47",
"75|53",
"75|61",
"97|13",
"97|29",
"97|47",
"97|53",
"97|61",
"97|75",



29: 13
47: 13, 29, 53, 61
53: 13, 29
61: 13, 29, 53
75: 13, 29, 47, 53, 61
97: 13, 29, 47, 53, 61, 75
 */
