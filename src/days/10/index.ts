export const convertDiskMapToIndividualBlocks = (
  diskMap: string
): { nodes: Array<string | number>; highestId: number } => {
  let isFile = true;
  let nodes: Array<string | number> = [];
  let id = 0;
  let index = 0;
  for (let i = 0; i < diskMap.length; i++) {
    const size = parseInt(diskMap[i], 10);
    if (isFile) {
      Array.from(Array(size)).forEach(() => (nodes[index++] = id));
      id++;
    } else {
      Array.from(Array(size)).forEach(() => (nodes[index++] = "."));
    }
    isFile = !isFile;
  }
  return { nodes, highestId: id - 1 };
};

const calculateChecksum = (nodes: Array<string | number>): number =>
  nodes.reduce((acc: number, id, index) => {
    if (id !== ".") {
      return acc + (id as number) * index;
    }
    return acc;
  }, 0);

export const part1 = (lines: Array<string>): number => {
  const line = lines.at(0)!;
  const { nodes } = convertDiskMapToIndividualBlocks(line);
  let firstFreeSpot = nodes.findIndex((node) => node === ".");
  let lastFileIndex = nodes.findLastIndex((node) => node !== ".");
  while (firstFreeSpot < lastFileIndex) {
    const lastFile = nodes[lastFileIndex];
    nodes[lastFileIndex] = ".";
    nodes[firstFreeSpot] = lastFile;
    firstFreeSpot = nodes.findIndex((node) => node === ".");
    lastFileIndex = nodes.findLastIndex((node) => node !== ".");
  }
  return calculateChecksum(nodes);
};

const findEmptySpace = (
  nodes: Array<string | number>,
  fileSize: number
): number => {
  let index = 0;
  let foundEmptyIndex = 0;
  let foundEmptySize = 0;
  while (index + fileSize < nodes.length) {
    if (nodes[index] === ".") {
      if (foundEmptySize === 0) {
        foundEmptyIndex = index;
      }
      foundEmptySize++;
    } else {
      foundEmptySize = 0;
    }
    if (foundEmptySize === fileSize) {
      return foundEmptyIndex;
    }
    index++;
  }
  return -1;
};

export const part2 = (lines: Array<string>): number => {
  const line = lines.at(0)!;
  const { nodes, highestId } = convertDiskMapToIndividualBlocks(line);
  for (let id = highestId; id >= 0; id--) {
    let endFileIndex = nodes.findLastIndex((node) => node === id);
    let startFileIndex = nodes.findIndex((node) => node === id);
    let fileSize = endFileIndex - startFileIndex + 1;
    let emptySpaceIndex = findEmptySpace(nodes, fileSize);
    if (emptySpaceIndex === -1 || emptySpaceIndex >= startFileIndex) {
      continue;
    }
    nodes.splice(
      emptySpaceIndex,
      fileSize,
      ...(Array(fileSize).fill(id) as Array<string | number>)
    );
    nodes.splice(
      startFileIndex,
      fileSize,
      ...(Array(fileSize).fill(".") as Array<string | number>)
    );
  }
  return calculateChecksum(nodes);
};
