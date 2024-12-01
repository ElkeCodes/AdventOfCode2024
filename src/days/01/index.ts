const parseLines = (lines: Array<string>): [Array<number>, Array<number>] => {
  let left: number[] = [];
  let right: number[] = [];
  lines.forEach((line) => {
    const [leftNubmer, rightNumber] = line.split("   ");
    left.push(parseInt(leftNubmer, 10));
    right.push(parseInt(rightNumber, 10));
  });
  return [left, right];
};

export const part1 = (lines: Array<string>): number => {
  let [left, right] = parseLines(lines);
  left = left.sort();
  right = right.sort();
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
