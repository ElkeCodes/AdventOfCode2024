import { expect, test, describe } from "vitest";
import { convertDiskMapToIndividualBlocks, part1, part2 } from ".";
import data from "./09.txt?raw";

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
    // test("actual", () => {
    //   expect(part2(data.split("\n"))).toBe(991);
    // });
    test("example", () => {
      expect(part2(example)).toBe(2858);
    });
  });

  // describe("helpers", () => {
  //   test("convertDiskMapToIndividualBlocks", () => {
  //     console.log(convertDiskMapToIndividualBlocks("12345").nodes);
  //     expect(convertDiskMapToIndividualBlocks("12345")).toStrictEqual({
  //       nodes: {
  //         0: { id: 0, size: 1 },
  //         3: { id: 1, size: 3 },
  //         10: { id: 2, size: 5 },
  //       },
  //       freeSpots: [1, 2, 6, 7, 8, 9],
  //     });
  //   });
  // });
});

// 00...111...2...333.44.5555.6666.777.888899
const example = ["2333133121414131402"];
