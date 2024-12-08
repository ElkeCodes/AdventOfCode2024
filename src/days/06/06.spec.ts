import { expect, test, describe } from "vitest";
import { part1, part2, parseMap } from ".";
import data from "./06.txt?raw";

describe("day 01", () => {
  describe("part 1", () => {
    test("actual", () => {
      expect(part1(data.split("\n"))).toBe(4602);
    });
    test("example", () => {
      expect(part1(example)).toBe(41);
    });
  });

  describe("part 2", () => {
    test("actual", () => {
      expect(part2(data.split("\n"))).toBe(1703);
    });
    test("example", () => {
      expect(part2(example)).toBe(6);
    });
  });

  describe("helpers", () => {
    test("parseMap", () => {
      const { map, startCoordinate } = parseMap(example);
      expect([...map.entries()]).toStrictEqual(parsedMap);
      expect(startCoordinate).toStrictEqual([4, 6]);
    });
  });
});

const example = [
  "....#.....",
  ".........#",
  "..........",
  "..#.......",
  ".......#..",
  "..........",
  ".#..^.....",
  "........#.",
  "#.........",
  "......#...",
];

const parsedMap = [
  [
    "0-0",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "1-0",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "2-0",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "3-0",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "4-0",
    {
      obstacle: true,
      visits: [],
    },
  ],
  [
    "5-0",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "6-0",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "7-0",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "8-0",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "9-0",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "0-1",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "1-1",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "2-1",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "3-1",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "4-1",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "5-1",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "6-1",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "7-1",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "8-1",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "9-1",
    {
      obstacle: true,
      visits: [],
    },
  ],
  [
    "0-2",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "1-2",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "2-2",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "3-2",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "4-2",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "5-2",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "6-2",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "7-2",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "8-2",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "9-2",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "0-3",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "1-3",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "2-3",
    {
      obstacle: true,
      visits: [],
    },
  ],
  [
    "3-3",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "4-3",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "5-3",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "6-3",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "7-3",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "8-3",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "9-3",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "0-4",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "1-4",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "2-4",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "3-4",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "4-4",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "5-4",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "6-4",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "7-4",
    {
      obstacle: true,
      visits: [],
    },
  ],
  [
    "8-4",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "9-4",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "0-5",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "1-5",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "2-5",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "3-5",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "4-5",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "5-5",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "6-5",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "7-5",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "8-5",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "9-5",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "0-6",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "1-6",
    {
      obstacle: true,
      visits: [],
    },
  ],
  [
    "2-6",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "3-6",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "4-6",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "5-6",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "6-6",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "7-6",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "8-6",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "9-6",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "0-7",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "1-7",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "2-7",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "3-7",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "4-7",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "5-7",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "6-7",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "7-7",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "8-7",
    {
      obstacle: true,
      visits: [],
    },
  ],
  [
    "9-7",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "0-8",
    {
      obstacle: true,
      visits: [],
    },
  ],
  [
    "1-8",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "2-8",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "3-8",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "4-8",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "5-8",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "6-8",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "7-8",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "8-8",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "9-8",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "0-9",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "1-9",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "2-9",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "3-9",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "4-9",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "5-9",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "6-9",
    {
      obstacle: true,
      visits: [],
    },
  ],
  [
    "7-9",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "8-9",
    {
      obstacle: false,
      visits: [],
    },
  ],
  [
    "9-9",
    {
      obstacle: false,
      visits: [],
    },
  ],
];
