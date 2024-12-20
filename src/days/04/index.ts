type Coordinate = [number, number];
type CoordinateKey = `${number}-${number}`;
type WordSearchMap = Map<CoordinateKey, string>;
type MatchVectors = Array<{ [character: string]: Array<Coordinate> }>;

const getKey = (x: number, y: number): CoordinateKey => `${x}-${y}`;
const parseKey = (key: CoordinateKey): { x: number; y: number } => ({
  x: parseInt(key.split("-").at(0)!, 10),
  y: parseInt(key.split("-").at(1)!, 10),
});

const parseWordSearch = (lines: Array<string>): WordSearchMap => {
  const map: WordSearchMap = new Map();
  lines.forEach((line, y) =>
    line.split("").forEach((character, x) => {
      map.set(getKey(x, y), character);
    })
  );
  return map;
};

const countMatches = (map: WordSearchMap, vectors: MatchVectors): number => {
  let result = 0;
  for (let key of map.keys()) {
    const { x, y } = parseKey(key);
    result += vectors.filter((vector) =>
      Object.entries(vector).every(([character, coordinates]) =>
        coordinates.every(
          ([deltaX, deltaY]) =>
            map.get(getKey(x + deltaX, y + deltaY)) === character
        )
      )
    ).length;
  }
  return result;
};

export const part1 = (lines: Array<string>): number => {
  const vectors: Array<{ [character: string]: Array<Coordinate> }> = [
    { X: [[0, 0]], M: [[1, 0]], A: [[2, 0]], S: [[3, 0]] },
    { X: [[0, 0]], M: [[1, 1]], A: [[2, 2]], S: [[3, 3]] },
    { X: [[0, 0]], M: [[0, 1]], A: [[0, 2]], S: [[0, 3]] },
    { X: [[0, 0]], M: [[-1, 1]], A: [[-2, 2]], S: [[-3, 3]] },
    { X: [[0, 0]], M: [[-1, 0]], A: [[-2, 0]], S: [[-3, 0]] },
    { X: [[0, 0]], M: [[-1, -1]], A: [[-2, -2]], S: [[-3, -3]] },
    { X: [[0, 0]], M: [[0, -1]], A: [[0, -2]], S: [[0, -3]] },
    { X: [[0, 0]], M: [[1, -1]], A: [[2, -2]], S: [[3, -3]] },
  ];

  const map = parseWordSearch(lines);
  return countMatches(map, vectors);
};

export const part2 = (lines: Array<string>): number => {
  const vectors: Array<{ [character: string]: Array<Coordinate> }> = [
    {
      M: [
        [0, 0],
        [0, 2],
      ],
      A: [[1, 1]],
      S: [
        [2, 2],
        [2, 0],
      ],
    },
    {
      M: [
        [0, 0],
        [2, 0],
      ],
      A: [[1, 1]],
      S: [
        [2, 2],
        [0, 2],
      ],
    },
    {
      M: [
        [0, 0],
        [0, -2],
      ],
      A: [[-1, -1]],
      S: [
        [-2, -2],
        [-2, 0],
      ],
    },
    {
      M: [
        [0, 0],
        [-2, 0],
      ],
      A: [[-1, -1]],
      S: [
        [-2, -2],
        [0, -2],
      ],
    },
  ];
  const map = parseWordSearch(lines);
  return countMatches(map, vectors);
};
