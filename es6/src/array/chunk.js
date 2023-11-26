/**
 * Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
 *
 * @param {array} array: The array to process
 * @param {number} [size=1] size: The length of each chunk
 */
function chunk(array = [], size = 1) {
  const result = [];
  let item = [];
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
