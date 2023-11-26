import fn from '../compact';

test('compact', () => {
  expect(fn([0, 1, false, 2, '', 3, NaN])).toEqual([1, 2, 3]);
});
