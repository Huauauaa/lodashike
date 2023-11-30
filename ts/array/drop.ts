/**
 * Creates a slice of array with n elements dropped from the beginning.
 * @param array The array to query.
 * @param n The number of elements to drop.
 *
 * @returns the slice of array.
 */
function drop<T>(array: T[], n = 1): T[] {
  return array.slice(n);
}

export default drop;
