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
  return { nodes, highestId: id };
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

// const findEmptySpace

export const part2 = (lines: Array<string>): number => {
  const line = lines.at(0)!;
  const { nodes, highestId } = convertDiskMapToIndividualBlocks(line);
  for (let id = highestId; id >= 0; id--) {}
  // let firstFreeSpot = nodes.findIndex((node) => node === ".");
  // let lastFileIndex = nodes.findLastIndex((node) => node !== ".");
  // while (firstFreeSpot < lastFileIndex) {
  //   const lastFile = nodes[lastFileIndex];
  //   nodes[lastFileIndex] = ".";
  //   nodes[firstFreeSpot] = lastFile;
  //   firstFreeSpot = nodes.findIndex((node) => node === ".");
  //   lastFileIndex = nodes.findLastIndex((node) => node !== ".");
  // }
  return calculateChecksum(nodes);
};
