import isNil from '../isNil';

test('isNil', () => {
  expect(isNil(null)).toBe(true);
  expect(isNil(void 0)).toBe(true);
  expect(isNil(NaN)).toBe(false);
});
