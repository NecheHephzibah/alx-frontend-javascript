/**
 * Export a new function named queryAPI.
 * It should accept an endpoint argument like so.
 */

// Export a const instance of WeakMap
export const weakMap = new WeakMap();

// Export the queryAPI function
export function queryAPI(endpoint) {
  // Check if the endpoint is already tracked in the weakMap
  let count = weakMap.get(endpoint) || 0;

  // Increment the count
  count += 1;

  // Update the weakMap with the new count
  weakMap.set(endpoint, count);

  // If the count is >= 5, throw an error
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}
