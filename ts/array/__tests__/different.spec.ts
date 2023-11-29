import difference from '../difference';

test('difference', () => {
  const array = [2, 1];
  expect(difference(array)).toEqual(array);
  expect(difference(array, [2, 3])).toEqual([1]);
  expect(difference(array, [2, 3], [3])).toEqual([1]);
  expect(difference(array, [2, 3], [1])).toEqual([]);
  // expect(difference(array, ['2', '3'])).toEqual([]);
});
