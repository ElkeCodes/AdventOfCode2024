interface Rule {
  before: number;
  after: number;
}
type Update = Array<number>;

export const parseData = (
  lines: Array<string>
): { rules: Array<Rule>; updates: Array<Update> } => {
  let isParsingUpdates = false;
  let updates: Array<Update> = [];
  let rules: Array<Rule> = [];
  lines.forEach((line) => {
    if (line === "") {
      isParsingUpdates = true;
      return;
    }
    if (isParsingUpdates) {
      updates.push(line.split(",").map((n) => parseInt(n, 10)));
    } else {
      const [before, after] = line.split("|").map((n) => parseInt(n, 10));
      rules.push({ before, after });
    }
  });

  return { rules, updates };
};

export const isPageCorrectlyOrdered = (
  update: Update,
  page: number,
  pageIndex: number,
  rules: Array<Rule>
): boolean => {
  const relevantBeforeRules = rules.filter(({ before }) => before === page);
  const relevantAfterRules = rules.filter(({ after }) => after === page);
  return (
    relevantBeforeRules.every(({ after }) => {
      const foundIndex = update.findIndex((x) => x === after);
      return foundIndex === -1 || foundIndex > pageIndex;
    }) &&
    relevantAfterRules.every(({ before }) => {
      const foundIndex = update.findIndex((x) => x === before);
      return foundIndex === -1 || foundIndex < pageIndex;
    })
  );
};

export const isCorrectlyOrdered = (
  update: Update,
  rules: Array<Rule>
): boolean => {
  return update.every((page, pageIndex) =>
    isPageCorrectlyOrdered(update, page, pageIndex, rules)
  );
};

export const grabCenter = (update: Update): number => {
  return update.at((update.length - 1) / 2)!;
};

const shuffle = (unshuffled: Array<number>): Array<number> =>
  unshuffled
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

export const sortUpdate = (update: Update, rules: Array<Rule>): Update => {
  let result: Update = [update.at(0)!];
  for (let pageIndex = 1; pageIndex < update.length; pageIndex++) {
    let page = update.at(pageIndex)!;
    let isInserted = false;
    for (let insertIndex = 0; insertIndex < result.length; insertIndex++) {
      let tempResult = [...result];
      tempResult.splice(insertIndex, 0, page);
      if (isCorrectlyOrdered(tempResult, rules)) {
        result = tempResult;
        isInserted = true;
        break;
      }
    }
    if (!isInserted) {
      result.push(page);
    }
  }

  // for AoC, this will always be true
  // in the case of Soultaker's challenge, it will probably fail the first time...
  if (isCorrectlyOrdered(result, rules)) {
    return result;
  } else {
    // haven't found a better solution, using a dumb shuffle works but is slow
    return sortUpdate(shuffle(update), rules);
  }
};

export const part1 = (lines: Array<string>): number => {
  const { rules, updates } = parseData(lines);

  return updates
    .filter((update) => isCorrectlyOrdered(update, rules))
    .reduce((acc, update) => acc + grabCenter(update), 0);
};

export const part2 = (lines: Array<string>): number => {
  const { rules, updates } = parseData(lines);

  return updates
    .filter((update) => !isCorrectlyOrdered(update, rules))
    .map((update) => sortUpdate(update, rules))
    .reduce((acc, update) => acc + grabCenter(update), 0);
};
