/**
 * Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
 *
 * @param array
 */
function compact(array) {
  return array.filter(
    (item) => ![false, null, 0, '', undefined, NaN].includes(item)
  );
}

export default compact;
