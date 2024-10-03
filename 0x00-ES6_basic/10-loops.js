export default function appendToEachArrayValue(array, appendString) {
  const newArrayList = [];
  for (const idx of array) {
    newArrayList.push(appendString + idx);
  }

  return newArrayList;
}
