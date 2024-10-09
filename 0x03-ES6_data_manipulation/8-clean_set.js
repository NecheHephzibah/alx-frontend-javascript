/**
 * Returns a string of all set values that start with a specific string,
 * with the startString removed.
 *
 * @param {Set} set - A Set of strings to be filtered and processed.
 * @param {string} startString - The string to check if a value in the set starts with.
 *
 * @returns {string} A string of set values that start with startString,
 * with the startString removed,
 * and values concatenated by a hyphen (-). If no matches, returns an empty string.
 */
export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }
  return [...set]
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');
}
