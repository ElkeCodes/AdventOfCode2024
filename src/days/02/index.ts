type Report = Array<number>;

const parseLines = (lines: Array<string>): Array<Report> =>
  lines.map((line) =>
    line.split(" ").map((character) => parseInt(character, 10))
  );

export const isReportSafe = (report: Report) => {
  if (report.length < 2) {
    throw new Error("report length must be more than 2");
  }
  const isDecreasing = report.at(0)! > report.at(1)!;
  let previous = report.at(0)!;
  return report.slice(1).every((current) => {
    if (isDecreasing) {
      let tempPrevious = previous;
      previous = current;
      return current < tempPrevious && tempPrevious - current <= 3;
    } else {
      let tempPrevious = previous;
      previous = current;
      return current > tempPrevious && current - tempPrevious <= 3;
    }
  });
};

export const createReportVariations = (report: Report): Array<Report> => {
  return Array.from(Array(report.length + 1)).map((_, index) => {
    if (index === report.length) {
      return report;
    }
    const result = [...report];
    result.splice(index, 1);
    return result;
  });
};

export const part1 = (lines: Array<string>): number => {
  const reports = parseLines(lines);
  return reports.filter(isReportSafe).length;
};

export const part2 = (lines: Array<string>): number => {
  const reports = parseLines(lines);
  return reports.filter((report) =>
    createReportVariations(report).some(isReportSafe)
  ).length;
};
