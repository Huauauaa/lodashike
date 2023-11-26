/**
 * Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
 *
 * @param array - The array to process
 * @param size - The length of each chunk
 * @returns the new array of chunks.
 */
function chunk<T>(array: T[], size = 1): T[][] {
  const result: T[][] = [];
  let item: T[] = [];
  for (let i = 0; i < array.length; i++) {
    item.push(array[i]);
    if (item.length === size) {
      result.push(item);
      item = [];
    }
  }
  if (item.length !== 0) {
    result.push(item);
  }
  return result;
}

export default chunk;
