// const calculateMultiplication = (
//   line: string,
//   index: number
// ): { result: number; newIndex: number } => {
//   if (line.startsWith("mul(")) {
//     let newIndex = index + 4;
//     let commaIndex = line.indexOf(",", newIndex);
//     let closingParenthesis = line.indexOf(")", commaIndex);
//     if (commaIndex <= newIndex + 3 && closingParenthesis <= commaIndex + 4) {
//       result =
//         parseInt(line.substring(newIndex, commaIndex), 10) *
//         parseInt(line.substring(commaIndex + 1, closingParenthesis), 10);
//       newIndex = closingParenthesis;
//     }
//   }
// };

const calculateLine = (line: string): number => {
  let index = 0;
  let result = 0;
  while (index < line.length) {
    if (line.startsWith("mul(", index)) {
      index += 4;
      let commaIndex = line.indexOf(",", index);
      let closingParenthesis = line.indexOf(")", index);
      if (commaIndex <= index + 3 && closingParenthesis <= commaIndex + 4) {
        result +=
          parseInt(line.substring(index, commaIndex), 10) *
          parseInt(line.substring(commaIndex + 1, closingParenthesis), 10);
        index = closingParenthesis;
      }
    } else {
      index++;
    }
  }
  return result;
};

let enabled = true;
const calculateLine2 = (line: string): number => {
  let index = 0;
  let result = 0;
  while (index < line.length) {
    if (line.startsWith("do()", index)) {
      console.log("do at", index);
      enabled = true;
      index += 4;
    }
    if (line.startsWith("don't()", index)) {
      console.log("don't at", index);
      enabled = false;
      index += 7;
    }
    if (line.startsWith("mul(", index)) {
      console.log(enabled, "mul at", index, line.substring(index, index + 12));
      index += 4;
      let commaIndex = line.indexOf(",", index);
      // console.log("commaindex", commaIndex);
      let closingParenthesis = line.indexOf(")", commaIndex + 1);
      // console.log("closingParenthesis", closingParenthesis);
      if (commaIndex <= index + 3 && closingParenthesis <= commaIndex + 4) {
        // console.log(line.substring(index, commaIndex));
        // console.log(line.substring(commaIndex + 1, closingParenthesis));
        if (enabled) {
          console.log(
            "result += ",
            parseInt(line.substring(index, commaIndex), 10),
            parseInt(line.substring(commaIndex + 1, closingParenthesis), 10),
            parseInt(line.substring(index, commaIndex), 10) *
              parseInt(line.substring(commaIndex + 1, closingParenthesis), 10)
          );
          result +=
            parseInt(line.substring(index, commaIndex), 10) *
            parseInt(line.substring(commaIndex + 1, closingParenthesis), 10);
        }
        index = Math.max(closingParenthesis + 1, commaIndex + 1);
      }
    } else {
      index++;
    }
  }
  return result;
};

export const part1 = (lines: Array<string>): number => {
  return lines.reduce((acc, line) => acc + calculateLine(line), 0);
};

export const part2 = (lines: Array<string>): number => {
  return lines.reduce((acc, line) => acc + calculateLine2(line), 0);
};
