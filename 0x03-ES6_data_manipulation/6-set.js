/**
 * Converts an array into a Set, removing any duplicate values.
 *
 * @param {Array} array - An array of elements (of any data type) to be converted into a Set.
 *
 * @returns {Set} A new Set object containing the unique values from the array.
 */
export default function setFromArray(array) {
  return new Set(array);
}
