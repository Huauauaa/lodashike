import isNil from '../lang/isNil';

/**
 * Creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).
 * @param array
 * @param param1
 */
function dropWhile<T>(array: T[], predicate) {
  if (isNil(predicate)) {
    return [];
  }
  if (typeof predicate === 'function') {
    return dropWhileFunction(array, predicate);
  }

  if (Array.isArray(predicate)) {
    return dropWhileArray(array, [
      predicate[0],
      predicate[1] === false ? false : true,
    ]);
  }

  if (typeof predicate === 'string') {
    return dropWhileString(array, predicate);
  }

  return dropWhileObject(array, predicate);
}

function dropWhileFunction<T>(array: T[], predicate: Function) {}
function dropWhileObject<T>(array: T[], value: T) {
  const index = array.findIndex((item) => item[key] !== value);
  return doDropWhile(array, index);
}
function dropWhileArray<T>(array: T[], [key, value]: [string, boolean]) {
  const index = array.findIndex((item) => item[key] !== value);
  return doDropWhile(array, index);
}
function dropWhileString<T>(array: T[], key: string) {
  const index = array.findIndex((item) => !item[key]);

  return doDropWhile(array, index);
}

function doDropWhile<T>(array: T[], index: number) {
  if (index < 0) {
    return array;
  }

  return array.slice(index);
}

export default dropWhile;
