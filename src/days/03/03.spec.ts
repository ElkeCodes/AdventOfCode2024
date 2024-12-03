import { expect, test, describe } from "vitest";
import { part1, part2 } from ".";
import data from "./03.txt?raw";

describe("day 01", () => {
  describe("part 1", () => {
    test("actual", () => {
      expect(part1(data.split("\n"))).toBe(183788984);
    });
    test("example", () => {
      expect(part1(example)).toBe(161);
    });
  });

  describe("part 2", () => {
    test("actual", () => {
      expect(part2(data.split("\n"))).toBe(62098619);
    });
    test("example", () => {
      expect(part2(example2)).toBe(48);
    });
  });

  // describe("helpers", () => {
  //   test("isReportSafe", () => {
  //     expect(isReportSafe([7, 6, 4, 2, 1])).toBeTruthy();
  //     expect(isReportSafe([1, 2, 7, 8, 9])).toBeFalsy();
  //     expect(isReportSafe([9, 7, 6, 2, 1])).toBeFalsy();
  //     expect(isReportSafe([1, 3, 2, 4, 5])).toBeFalsy();
  //     expect(isReportSafe([8, 6, 4, 4, 1])).toBeFalsy();
  //     expect(isReportSafe([1, 3, 6, 7, 9])).toBeTruthy();
  //     expect(() => isReportSafe([1])).toThrowError(
  //       "report length must be more than 2"
  //     );
  //   });
  //   test("createReportVariations", () => {
  //     expect(createReportVariations([7, 6, 4, 2, 1])).toStrictEqual([
  //       [6, 4, 2, 1],
  //       [7, 4, 2, 1],
  //       [7, 6, 2, 1],
  //       [7, 6, 4, 1],
  //       [7, 6, 4, 2],
  //       [7, 6, 4, 2, 1],
  //     ]);
  //   });
  // });
});

const example = [
  "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))",
];

const example2 = [
  "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))",
];
