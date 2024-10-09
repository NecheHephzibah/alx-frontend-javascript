/**
 * Returns a map of grocery items with their quantities.
 *
 * @returns {Map} A Map containing grocery items as keys and their quantities as values.
 */
export default function groceriesList() {
  const groceries = new Map();
  groceries.set('Apples', 10);
  groceries.set('Tomatoes', 10);
  groceries.set('Pasta', 1);
  groceries.set('Rice', 1);
  groceries.set('Banana', 5);

  return groceries;
}
