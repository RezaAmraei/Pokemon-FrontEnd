const SplitStringInHalf = (string) => {
  const partOne = string.slice(0, string.length / 2);
  const partTwo = string.slice(string.length / 2, string.length);
  return [partOne, partTwo];
};

export default SplitStringInHalf;
