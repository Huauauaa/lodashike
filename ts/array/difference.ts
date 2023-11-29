function difference<T>(array: T[], ...values: T[][]) {
  if (values.length === 0) {
    return array;
  }
  const other = values.flat();
  return array.filter((item) => !other.includes(item));
}

export default difference;
