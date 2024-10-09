/**
 * Checks if all elements in an array exist within a given set.
 *
 * @param {Set} set - A Set object containing unique elements.
 * @param {Array} array - An array of elements to check for
 * existence in the set.
 *
 * @returns {boolean} Returns true if all elements in the array exist
 * in the set, otherwise false.
 */
export default function hasValuesFromArray(set, array) {
  return array.every((element) => set.has(element));
}
