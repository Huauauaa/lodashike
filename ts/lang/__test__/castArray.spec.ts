import castArray from '../castArray';

test('castArray', () => {
  expect(castArray(1)).toStrictEqual([1]);
  expect(castArray({ a: 1 })).toStrictEqual([{ a: 1 }]);
  expect(castArray('abc')).toStrictEqual(['abc']);
  expect(castArray(null)).toStrictEqual([null]);
  expect(castArray(undefined)).toStrictEqual([undefined]);
  expect(castArray()).toStrictEqual([]);
  var array = [1, 2, 3];
  expect(castArray(array)).toBe(array);
});
