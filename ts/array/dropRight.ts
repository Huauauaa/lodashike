import drop from './drop';

/**
 * Creates a slice of array with n elements dropped from the end.
 *
 * @param array The array to query.
 * @param n The number of elements to drop.
 *
 * @returns the slice of array.
 */
function dropRight<T>(array: T[], n = 1): T[] {
  return drop(array.slice().reverse(), n).reverse();
}

export default dropRight;
