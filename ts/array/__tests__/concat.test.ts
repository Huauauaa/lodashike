import concat from '../concat';

test('compact', () => {
  const array = [1];
  expect(concat(array, 2, [3], [[4]])).toEqual([1, 2, 3, [4]]);
  expect(concat(array)).toEqual([1]);
  expect(array).toEqual([1]);

  const arr = ['1'];
  expect(concat(arr, 2, [false], [[4]])).toEqual(['1', 2, false, [4]]);
  expect(concat(arr)).toEqual(['1']);
  expect(arr).toEqual(['1']);
});
