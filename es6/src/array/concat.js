/**
 * Creates a new array concatenating array with any additional arrays and/or values.
 *
 * @param {*} array - The array to concatenate.
 * @param  {...any} values - The values to concatenate.
 */
function contact(array, ...values) {
  return [...array, ...values.flat()];
}

export default contact;
