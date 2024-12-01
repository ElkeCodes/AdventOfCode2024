type LeftRight = [Array<number>, Array<number>];

const parseLines = (lines: Array<string>): LeftRight =>
  lines.reduce(
    ([left, right]: LeftRight, line): LeftRight => {
      const [leftNumber, rightNumber] = line.split("   ");
      left.push(parseInt(leftNumber, 10));
      right.push(parseInt(rightNumber, 10));
      return [left, right];
    },
    [[], []]
  );

export const part1 = (lines: Array<string>): number => {
  let [left, right] = parseLines(lines);
  left.sort();
  right.sort();
  return left.reduce((acc, n, index) => {
    return acc + Math.abs(n - right[index]);
  }, 0);
};

export const part2 = (lines: Array<string>): number => {
  const [left, right] = parseLines(lines);
  return left.reduce((acc, n) => {
    return acc + n * right.filter((r) => r === n).length;
  }, 0);
};
