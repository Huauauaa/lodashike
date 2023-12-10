function castArray(...args: any[]) {
  if (args.length === 0) {
    return [];
  }

  return castArrayHandler(args[0]);
}

function castArrayHandler<T>(value: T | T[]): T[] {
  if (Array.isArray(value)) {
    return value;
  }

  return [value];
}

export default castArray;
