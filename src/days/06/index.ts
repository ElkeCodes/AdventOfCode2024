type Coordinate = [number, number];
type CoordinateKey = `${number}-${number}`;
type LabMap = Map<
  CoordinateKey,
  { visits: Array<Coordinate>; obstacle: boolean }
>;

const getKey = (x: number, y: number): CoordinateKey => `${x}-${y}`;

export const parseMap = (
  lines: Array<string>
): { map: LabMap; startCoordinate: Coordinate } => {
  const map: LabMap = new Map();
  let startCoordinate: Coordinate = [0, 0];
  lines.forEach((line, y) =>
    line.split("").forEach((tile, x) => {
      if (tile === "^") {
        startCoordinate = [x, y];
      }
      map.set(getKey(x, y), { visits: [], obstacle: tile === "#" });
    })
  );
  return { map, startCoordinate };
};

function* turn(): Generator<Coordinate, Coordinate> {
  while (true) {
    yield [0, -1];
    yield [1, 0];
    yield [0, 1];
    yield [-1, 0];
  }
}

const nextCoordinate = (
  [x, y]: Coordinate,
  [dx, dy]: Coordinate
): Coordinate => [x + dx, y + dy];

export const part1 = (lines: Array<string>): number => {
  const { map, startCoordinate } = parseMap(lines);
  letGuardFollowPath(map, startCoordinate);
  return [...map].reduce(
    (acc, [_, { visits }]) => (acc += visits.length > 0 ? 1 : 0),
    0
  );
};

const letGuardFollowPath = (
  map: LabMap,
  startCoordinate: Coordinate
): boolean => {
  const directions = turn();
  let direction = directions.next().value;
  let currentCoordinate = startCoordinate;
  while (map.has(getKey(...currentCoordinate))) {
    let targetCoordinate = nextCoordinate(currentCoordinate, direction);
    let target = map.get(getKey(...targetCoordinate));
    if (!target) {
      break;
    }
    if (target.obstacle) {
      direction = directions.next().value;
      continue;
    } else {
      const previousVisit = map.get(getKey(...targetCoordinate))!;
      if (
        previousVisit.visits.find(
          ([visitX, visitY]) =>
            visitX === direction[0] && visitY === direction[1]
        )
      ) {
        return true;
      }
      map.set(getKey(...targetCoordinate), {
        ...previousVisit,
        visits: [direction, ...previousVisit.visits],
      });
    }

    currentCoordinate = targetCoordinate;
  }
  return false;
};

const clearVisits = (map: LabMap) => {
  for (var [originalKey, originalValue] of map) {
    map.set(originalKey, { ...originalValue, visits: [] });
  }
};

export const part2 = (lines: Array<string>): number => {
  const { map, startCoordinate } = parseMap(lines);
  letGuardFollowPath(map, startCoordinate);

  let result = 0;
  for (var [key, value] of [...map].filter(
    ([key, { visits }]) =>
      visits.length > 0 && getKey(...startCoordinate) !== key
  )) {
    clearVisits(map);
    map.set(key, { ...value, obstacle: true });
    if (letGuardFollowPath(map, startCoordinate)) {
      result++;
    }
    map.set(key, { ...value, obstacle: false });
  }
  return result;
};
