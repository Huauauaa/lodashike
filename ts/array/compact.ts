/**
 * Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
 *
 * @param array - The array to compact.
 * @returns the new array of filtered values.
 *
 * @example
 * ```ts
_.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]
 * ```
 */
function compact(array: any[]): any[] {
  return array.filter(
    (item) => ![false, null, 0, '', undefined, NaN].includes(item)
  );
}

export default compact;
