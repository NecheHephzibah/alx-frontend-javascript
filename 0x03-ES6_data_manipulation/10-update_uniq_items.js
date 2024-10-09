/**
 * Updates all items in a map with quantity 1 to have a quantity of 100.
 *
 * @param {Map} map - A Map containing items as keys and their quantities as values.
 *
 * @throws {Error} Throws an error if the provided argument is not a map.
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [key, value] of map.entries()) {
    if (value === 1) {
      map.set(key, 100);
    }
  }
}
