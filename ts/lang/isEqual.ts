/**
 * TODO
 * @param value
 * @param other
 * @returns
 */
function isEqual<T>(value: T, other: T) {
  if (typeof value !== typeof other) {
    return false;
  }

  if (Array.isArray(value) && Array.isArray(other)) {
    return isEqualArray(value, other);
  }

  return value === other;
}

export function isEqualObject(value: T, other: T) {}

export function isEqualArray<T>(value: T[], other: T[]) {
  if (value.length !== other.length) {
    return false;
  }

  for (let i = 0; i < value.length; i++) {
    if (value[i] !== other[i]) {
      return false;
    }
  }

  return true;
}

export default isEqual;
