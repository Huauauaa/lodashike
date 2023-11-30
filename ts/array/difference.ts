/**
 * https://lodash.com/docs/4.17.15#difference
 */
function difference<T>(array: T[], ...values: T[][]) {
  const other = values.flat();
  return array.filter((item) => !other.includes(item));
}

export default difference;
