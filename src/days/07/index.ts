interface Equation {
  result: number;
  parts: Array<number>;
}
export const parseData = (lines: Array<string>): Array<Equation> =>
  lines.map((line) => {
    const [result, partsToParse] = line.split(": ");
    return {
      result: parseInt(result, 10),
      parts: partsToParse.split(" ").map((part) => parseInt(part, 10)),
    };
  });

type TempPart = { partIndex: number; total: number; calc: string };
export const findCorrectOperators = ({ result, parts }: Equation): number => {
  let partsToDo: Array<TempPart> = [
    { partIndex: 0, total: parts[0], calc: `${parts[0]}` },
  ];
  let currentPart;
  while ((currentPart = partsToDo.pop()!)) {
    let { partIndex, total, calc } = currentPart;
    // if (calc.startsWith(`44 * 4 + 9 * 8 * 1 * 1`)) console.log(calc, total);
    partIndex++;
    if (total === result && partIndex === parts.length) {
      return total;
    }
    if (total <= result && partIndex < parts.length) {
      partsToDo.push({
        partIndex,
        total: total * parts[partIndex],
        calc: `${calc} * ${parts[partIndex]}`,
      });
      partsToDo.push({
        partIndex,
        total: total + parts[partIndex],
        calc: `${calc} + ${parts[partIndex]}`,
      });
    }
  }
  return 0;
};

export const part1 = (lines: Array<string>): number => {
  const equations = parseData(lines);
  let results = new Set<number>();
  equations.forEach(({ result, parts }) => {
    const tempResult = findCorrectOperators({ result, parts });
    if (result === tempResult) {
      results.add(result);
    }
  });
  return [...results].reduce((acc, result) => acc + result, 0);
};
