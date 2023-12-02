import isEqual from '../isEqual';

test('isEqual array', () => {
  expect(isEqual([], [])).toBe(true);
  expect(isEqual([1], [1])).toBe(true);
  expect(isEqual([1], [1, 2])).toBe(false);
  expect(isEqual([1, 2], [2, 1])).toBe(false);
});
