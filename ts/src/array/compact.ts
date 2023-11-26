/**
 * Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
 *
 * @param array
 * @returns
 */
function compact(array: any[]) {
  return array.filter(
    (item) => ![false, null, 0, '', undefined, NaN].includes(item)
  );
}

export default compact;
