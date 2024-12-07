type Coordinate = [number, number];
type CoordinateKey = `${number}-${number}`;
type LabMap = Map<
  CoordinateKey,
  { visits: Array<Coordinate>; obstacle: boolean }
>;

const getKey = (x: number, y: number): CoordinateKey => `${x}-${y}`;
const parseKey = (key: CoordinateKey): { x: number; y: number } => ({
  x: parseInt(key.split("-").at(0)!, 10),
  y: parseInt(key.split("-").at(1)!, 10),
});

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

function* turn(): Generator<Coordinate> {
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
  const directions = turn();
  let direction = directions.next().value;
  let currentCoordinate = startCoordinate;
  while (map.has(getKey(...currentCoordinate))) {
    const previousVisit = map.get(getKey(...currentCoordinate))!;
    map.set(getKey(...currentCoordinate), {
      ...previousVisit,
      visits: [direction, ...previousVisit.visits],
    });
    let targetCoordinate = nextCoordinate(currentCoordinate, direction);
    let target = map.get(getKey(...targetCoordinate));
    if (!target) {
      break;
    }
    if (target.obstacle) {
      direction = directions.next().value;
      continue;
    }
    currentCoordinate = targetCoordinate;
  }
  return [...map].reduce(
    (acc, [_, { visits }]) => (acc += visits.length > 0 ? 1 : 0),
    0
  );
};

export const part2 = (lines: Array<string>): number => {
  return 2;
};
