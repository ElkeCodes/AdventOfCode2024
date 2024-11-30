import { expect, test, describe } from "vitest";
import {
  analyseSky,
  buildSky,
  Coordinate,
  createIsInBoundsChecker,
  DIRECTIONS,
  findNextStar,
  isInBounds,
  isSameCoordinate,
  part1,
  takeNextCoordinate,
} from ".";
import data from "./day-7.txt?raw";

describe("day -7", () => {
  describe("part 1", () => {
    test("actual", () => {
      expect(part1(data.split("\n"))).toBe(416);
    });
    describe("examples", () => {
      test("mini example", () => {
        expect(part1(miniExample)).toBe(6);
      });
      test("mini mini example", () => {
        expect(part1([".*.*.*.", "......."])).toBe(1);
      });
      test("Remcoder's example", () => {
        expect(part1([".....", ".*...", "*.*..", ".*.*.", "..*.."])).toBe(2);
      });
      test("bigger example", () => {
        expect(part1(biggerExample)).toBe(25);
      });
    });
    describe("helpers", () => {
      test("takeNextCoordinate", () => {
        expect(takeNextCoordinate([3, 4], DIRECTIONS.NORTH)).toStrictEqual([
          3, 3,
        ]);
        expect(takeNextCoordinate([3, 4], DIRECTIONS.SOUTH)).toStrictEqual([
          3, 5,
        ]);
        expect(takeNextCoordinate([3, 4], DIRECTIONS.WEST)).toStrictEqual([
          2, 4,
        ]);
        expect(takeNextCoordinate([3, 4], DIRECTIONS.EAST)).toStrictEqual([
          4, 4,
        ]);
      });
      test("isSameCoordinate", () => {
        expect(isSameCoordinate([3, 4], [3, 4])).toBeTruthy();
        expect(isSameCoordinate([4, 4], [3, 4])).toBeFalsy();
        expect(isSameCoordinate([3, 4], [4, 2])).toBeFalsy();
      });
      test("isInBounds", () => {
        expect(isInBounds([3, 2], 5, 5)).toBeTruthy();
        expect(isInBounds([0, 2], 5, 5)).toBeTruthy();
        expect(isInBounds([3, -1], 5, 5)).toBeFalsy();
      });
      test("analyseSky", () => {
        expect(analyseSky(miniExample)).toStrictEqual(miniExampleSky);
      });
      test("findNextStar", () => {
        const isInBounds = createIsInBoundsChecker(5, 0);
        expect(
          findNextStar([1, 0], DIRECTIONS.NORTH, isInBounds, [
            [1, 0],
            [3, 0],
          ])
        ).toStrictEqual(false);
        expect(
          findNextStar([1, 0], DIRECTIONS.EAST, isInBounds, [
            [1, 0],
            [3, 0],
          ])
        ).toStrictEqual([3, 0]);
        expect(
          findNextStar([1, 0], DIRECTIONS.SOUTH, isInBounds, [
            [1, 0],
            [3, 0],
          ])
        ).toStrictEqual(false);
        expect(
          findNextStar([1, 0], DIRECTIONS.WEST, isInBounds, [
            [1, 0],
            [3, 0],
          ])
        ).toStrictEqual(false);
      });
      test("buildSky", () => {
        const isInBounds = createIsInBoundsChecker(5, 0);
        expect([
          ...buildSky(
            [
              [0, 0],
              [2, 0],
              [1, 1],
              [2, 1],
              [3, 1],
              [5, 1],
            ],
            isInBounds
          ).entries(),
        ]).toStrictEqual([
          ["[0,0]", [[2, 0]]],
          [
            "[2,0]",
            [
              [2, 1],
              [0, 0],
            ],
          ],
          ["[1,1]", [[2, 1]]],
          [
            "[2,1]",
            [
              [2, 0],
              [3, 1],
              [1, 1],
            ],
          ],
          ["[3,1]", [[2, 1]]],
          ["[5,1]", []],
        ]);
      });
    });
  });
});

const miniExample = [".......", ".*.*.*.", ".......", ".*.*...", "......."];
const miniExampleStars: Array<Coordinate> = [
  [1, 1],
  [3, 1],
  [5, 1],
  [1, 3],
  [3, 3],
];
const miniExampleSky = [6, 4, miniExampleStars];

const biggerExample = [
  "....................",
  "...........*..*.....",
  "........*........*..",
  "....*.....*....*....",
  ".......*...*........",
  "..*.*....*..........",
  ".......*..*.........",
  "...........*......*.",
  "..*.*............*..",
  "....................",
];
