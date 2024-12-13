type Coordinate = [number, number];
type CoordinateKey = `${number}-${number}`;
type TopoMap = Map<CoordinateKey, number>;
const getKey = (x: number, y: number): CoordinateKey => `${x}-${y}`;
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

const createTopoMap = (
  lines: Array<string>
): {
  topoMap: TopoMap;
  lowestPoints: Array<Coordinate>;
  isInBounds: isInBoundsFunction;
} => {
  let topoMap: TopoMap = new Map();
  const lowestPoints: Array<Coordinate> = [];
  let maxY = 0;
  let maxX = 0;
  lines.forEach((line, y) => {
    line.split("").forEach((height, x) => {
      const parsedHeight = parseInt(height, 10);
      if (parsedHeight === 0) {
        lowestPoints.push([x, y]);
      }
      topoMap.set(getKey(x, y), parsedHeight);
      maxX = Math.max(maxX, x);
    });
    maxY = Math.max(maxY, y);
  });
  return {
    topoMap,
    lowestPoints,
    isInBounds: createIsInBoundsChecker(maxX, maxY),
  };
};

const getNeighbours = (
  [x, y]: Coordinate,
  isInBounds: isInBoundsFunction
): Array<Coordinate> =>
  [
    [x + 1, y] as Coordinate,
    [x, y + 1] as Coordinate,
    [x - 1, y] as Coordinate,
    [x, y - 1] as Coordinate,
  ].filter((x, y) => isInBounds(x, y));

export const part1 = (lines: Array<string>): number => {
  const { topoMap, lowestPoints, isInBounds } = createTopoMap(lines);
  const findHowManyHighPointsReachable = (
    startingPoint: Coordinate
  ): number => {
    let result: Set<CoordinateKey> = new Set();
    const queue: Array<Coordinate> = [startingPoint];
    let currentCoordinate;
    while ((currentCoordinate = queue.shift())) {
      let currentHeight = topoMap.get(getKey(...currentCoordinate))!;
      if (currentHeight === 9) {
        result.add(getKey(...currentCoordinate));
      } else {
        for (const neighbour of getNeighbours(currentCoordinate, isInBounds)) {
          if (topoMap.get(getKey(...neighbour)) === currentHeight + 1) {
            queue.push(neighbour);
          }
        }
      }
    }
    return result.size;
  };
  return lowestPoints.reduce(
    (acc, lowestPoint) => acc + findHowManyHighPointsReachable(lowestPoint),
    0
  );
};

export const part2 = (lines: Array<string>): number => {
  const { topoMap, lowestPoints, isInBounds } = createTopoMap(lines);
  const findHowManyHighPointsReachable = (
    startingPoint: Coordinate
  ): number => {
    let result = 0;
    const queue: Array<Coordinate> = [startingPoint];
    let currentCoordinate;
    while ((currentCoordinate = queue.shift())) {
      let currentHeight = topoMap.get(getKey(...currentCoordinate))!;
      if (currentHeight === 9) {
        result++;
      } else {
        for (const neighbour of getNeighbours(currentCoordinate, isInBounds)) {
          if (topoMap.get(getKey(...neighbour)) === currentHeight + 1) {
            queue.push(neighbour);
          }
        }
      }
    }
    return result;
  };
  return lowestPoints.reduce(
    (acc, lowestPoint) => acc + findHowManyHighPointsReachable(lowestPoint),
    0
  );
};
