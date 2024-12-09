type Coordinate = [number, number];
type CoordinateKey = `${number}-${number}`;
type AntennaMap = Map<CoordinateKey, string>;

const getKey = (x: number, y: number): CoordinateKey => `${x}-${y}`;
const parseKey = (key: CoordinateKey): { x: number; y: number } => ({
  x: parseInt(key.split("-").at(0)!, 10),
  y: parseInt(key.split("-").at(1)!, 10),
});

const parseLines = (
  lines: Array<string>
): {
  map: AntennaMap;
  antennaCodes: Array<string>;
  isInBounds: (c: Coordinate) => boolean;
} => {
  let antennaCodes: Array<string> = [];
  const map: AntennaMap = new Map();
  let maxX = 0;
  let maxY = 0;
  lines.forEach((line, y) =>
    line.split("").forEach((character, x) => {
      maxX = Math.max(maxX, x);
      maxY = Math.max(maxY, y);
      if (character != ".") {
        antennaCodes.push(character);
        map.set(getKey(x, y), character);
      }
    })
  );
  return {
    map,
    antennaCodes: [...new Set(antennaCodes)],
    isInBounds: ([x, y]: Coordinate) =>
      x >= 0 && x <= maxX && y >= 0 && y <= maxY,
  };
};

export const part1 = (lines: Array<string>): number => {
  const { map, antennaCodes, isInBounds } = parseLines(lines);
  const annodesSet = new Set<CoordinateKey>();
  antennaCodes.forEach((antenna) => {
    const allAntennasWithSameCode = Object.values([...map]).filter(
      ([_, antennaCode]) => antennaCode === antenna
    );
    for (let [antenna1Coordinate] of allAntennasWithSameCode) {
      for (let [antenna2Coordinate] of allAntennasWithSameCode) {
        if (antenna1Coordinate !== antenna2Coordinate) {
          const { x: a1X, y: a1Y } = parseKey(antenna1Coordinate);
          const { x: a2X, y: a2Y } = parseKey(antenna2Coordinate);
          const xDistance = a1X - a2X;
          const yDistance = a1Y - a2Y;
          annodesSet.add(getKey(a1X + xDistance, a1Y + yDistance));
          annodesSet.add(getKey(a2X - xDistance, a2Y - yDistance));
        }
      }
    }
  });
  return [...annodesSet].filter((coordinateKey) => {
    const { x, y } = parseKey(coordinateKey);
    return isInBounds([x, y]);
  }).length;
};

export const part2 = (lines: Array<string>): number => {
  const { map, antennaCodes, isInBounds } = parseLines(lines);
  const annodesSet = new Set<CoordinateKey>();

  const keepGoing = (
    x: number,
    y: number,
    step: number,
    xDistance: number,
    yDistance: number
  ) => {
    if (isInBounds([x + step * xDistance, y + step * yDistance])) {
      annodesSet.add(getKey(x + step * xDistance, y + step * yDistance));
      keepGoing(x, y, step + 1, xDistance, yDistance);
    }
  };
  antennaCodes.forEach((antenna) => {
    const allAntennasWithSameCode = Object.values([...map]).filter(
      ([_, antennaCode]) => antennaCode === antenna
    );
    for (let [antenna1Coordinate] of allAntennasWithSameCode) {
      for (let [antenna2Coordinate] of allAntennasWithSameCode) {
        if (antenna1Coordinate !== antenna2Coordinate) {
          const { x: a1X, y: a1Y } = parseKey(antenna1Coordinate);
          const { x: a2X, y: a2Y } = parseKey(antenna2Coordinate);
          const xDistance = a1X - a2X;
          const yDistance = a1Y - a2Y;
          keepGoing(a1X, a1Y, 0, xDistance, yDistance);
          keepGoing(a2X, a2Y, 0, -xDistance, -yDistance);
        }
      }
    }
  });
  return [...annodesSet].filter((coordinateKey) => {
    const { x, y } = parseKey(coordinateKey);
    return isInBounds([x, y]);
  }).length;
};
