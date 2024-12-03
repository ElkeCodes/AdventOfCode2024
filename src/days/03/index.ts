const parseNumber = (line: string, start: number, end: number) =>
  parseInt(line.substring(start, end), 10);

const parseMultiplication = (
  line: string,
  index: number
): { newIndex: number; result: number } => {
  index += 4;
  let commaIndex = line.indexOf(",", index);
  let closingParenthesis = line.indexOf(")", index);
  if (commaIndex <= index + 3 && closingParenthesis <= commaIndex + 4) {
    return {
      result:
        parseNumber(line, index, commaIndex) *
        parseNumber(line, commaIndex + 1, closingParenthesis),
      newIndex: closingParenthesis,
    };
  }
  return { result: 0, newIndex: index };
};

const calculateLine = (line: string): number => {
  let index = 0;
  let total = 0;
  while (index < line.length) {
    if (line.startsWith("mul(", index)) {
      const { result, newIndex } = parseMultiplication(line, index);
      total += result;
      index = newIndex;
    } else {
      index++;
    }
  }
  return total;
};

const calculateLine2 = (
  line: string,
  defaultEnabled: boolean
): { result: number; enabled: boolean } => {
  let index = 0;
  let total = 0;
  let enabled = defaultEnabled;
  while (index < line.length) {
    if (line.startsWith("do()", index)) {
      enabled = true;
      index += 4;
    }
    if (line.startsWith("don't()", index)) {
      enabled = false;
      index += 7;
    }
    if (line.startsWith("mul(", index) && enabled) {
      const { result, newIndex } = parseMultiplication(line, index);
      total += result;
      index = newIndex;
    } else {
      index++;
    }
  }
  return { result: total, enabled };
};

export const part1 = (lines: Array<string>): number => {
  return lines.reduce((acc, line) => acc + calculateLine(line), 0);
};

export const part2 = (lines: Array<string>): number => {
  return lines.reduce(
    ({ result: previousResult, enabled: previousEnabled }, line) => {
      const { result, enabled } = calculateLine2(line, previousEnabled);
      return { result: result + previousResult, enabled };
    },
    { result: 0, enabled: true }
  ).result;
};
