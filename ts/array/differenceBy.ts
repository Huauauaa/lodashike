/**
 * https://lodash.com/docs/4.17.15#differenceBy
 */
function differenceBy<T>(array: T[], ...args) {
  const lastArg = args.at(-1);
  if (typeof lastArg === 'string' && lastArg !== '') {
    return withKey(lastArg, array, ...args.slice(0, -1));
  }
  if (typeof lastArg === 'function') {
    return withFn(lastArg, array, ...args.slice(0, -1));
  }

  return array;
}

function withKey<T>(key: string, array: T[], ...others: T[][]) {
  const values = new Set();
  others.forEach((other) => {
    other.forEach((item) => {
      if (item[key] !== undefined) {
        values.add(item[key]);
      }
    });
  });
  return array.filter((item) => !values.has(item[key]));
}

function withFn<T>(fn: Function, array: T[], ...others: T[][]) {
  const values = new Set();
  others.forEach((other) => {
    other.forEach((item) => {
      if (fn(item) !== undefined) {
        values.add(fn(item));
      }
    });
  });
  return array.filter((item) => !values.has(fn(item)));
}

export default differenceBy;
