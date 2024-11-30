export type Coordinate = [number, number];
type Sky = [number, number, Array<Coordinate>];

export const DIRECTIONS: { [direction: string]: Coordinate } = {
  WEST: [-1, 0],
  SOUTH: [0, 1],
  EAST: [1, 0],
  NORTH: [0, -1],
};

export const analyseSky = (lines: Array<string>): Sky => {
  let currentY = 0;
  let maxX = 0;
  let maxY = 0;
  let foundStars: Array<Coordinate> = [];
  lines.forEach((line) => {
    line.split("").forEach((maybeStar, currentX) => {
      if (maybeStar === "*") {
        foundStars.push([currentX, currentY]);
      }
      maxX = Math.max(maxX, currentX);
    });
    maxY = Math.max(maxY, currentY);
    currentY++;
  });
  return [maxX, maxY, foundStars];
};

export const takeNextCoordinate = (
  [cX, cY]: Coordinate,
  [dX, dY]: Coordinate
): Coordinate => [cX + dX, cY + dY];

export const isSameCoordinate = (
  [c1X, c1Y]: Coordinate,
  [c2X, c2Y]: Coordinate
): boolean => c1X === c2X && c1Y === c2Y;

type isInBoundsFunction = (c: Coordinate) => boolean;
export const isInBounds = (
  [c1X, c1Y]: Coordinate,
  maxX: number,
  maxY: number
) => c1X >= 0 && c1Y >= 0 && c1X <= maxX && c1Y <= maxY;

export const createIsInBoundsChecker =
  (maxX: number, maxY: number): isInBoundsFunction =>
  (c: Coordinate) =>
    isInBounds(c, maxX, maxY);

export const findNextStar = (
  star: Coordinate,
  direction: Coordinate,
  isInBounds: isInBoundsFunction,
  stars: Array<Coordinate>
): Coordinate | false => {
  let currentCoordinate = star;
  do {
    currentCoordinate = takeNextCoordinate(currentCoordinate, direction);
    if (stars.find((s) => isSameCoordinate(s, currentCoordinate))) {
      return currentCoordinate;
    }
  } while (isInBounds(currentCoordinate));
  return false;
};

export const buildSky = (
  starCoordinates: Array<Coordinate>,
  isInBounds: isInBoundsFunction
): Map<string, Array<Coordinate>> => {
  const result = new Map();
  starCoordinates.forEach((coordinate) => {
    result.set(
      getKey(coordinate),
      [
        findNextStar(coordinate, DIRECTIONS.NORTH, isInBounds, starCoordinates),
        findNextStar(coordinate, DIRECTIONS.EAST, isInBounds, starCoordinates),
        findNextStar(coordinate, DIRECTIONS.SOUTH, isInBounds, starCoordinates),
        findNextStar(coordinate, DIRECTIONS.WEST, isInBounds, starCoordinates),
      ].filter(Boolean) as Array<Coordinate>
    );
  });
  return result;
};

const getKey = JSON.stringify;

export const searchSky = (
  sky: Map<string, Array<Coordinate>>,
  star: Coordinate
): Array<Array<string>> => {
  const visited = new Set();
  const queue: Array<[Coordinate, Array<string>]> = [[star, [getKey(star)]]];
  let result = [];

  while (queue.length > 0) {
    const [node, path] = queue.shift()!;
    visited.add(node);
    if (path.length === 3) {
      result.push(path);
    } else {
      if (sky.has(getKey(node))) {
        for (const neighbor of sky.get(getKey(node))!) {
          if (!visited.has(neighbor)) {
            queue.push([neighbor, [...new Set([getKey(neighbor), ...path])]]);
          }
        }
      }
    }
  }
  return result;
};

export const part1 = (lines: Array<string>): number => {
  const [maxX, maxY, foundStars] = analyseSky(lines);
  const isInBounds = createIsInBoundsChecker(maxX, maxY);
  const sky = buildSky(foundStars, isInBounds);

  const result = new Set();
  foundStars.forEach((star) =>
    searchSky(sky, star).forEach((consellation) =>
      result.add(JSON.stringify(consellation.sort()))
    )
  );
  return result.size;
};
