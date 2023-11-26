function contact<T extends any[] = any[], U extends any[] = any[]>(
  array: T,
  ...args: U
): Array<T | U> {
  return [...array, ...args.flat()];
}

export default contact;
