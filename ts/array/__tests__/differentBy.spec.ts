import differenceBy from '../differenceBy';

test('differenceBy', () => {
  expect(differenceBy([{ x: 1 }, { x: 2 }], [{ x: 1 }], 'x')).toEqual([
    { x: 2 },
  ]);
  expect(differenceBy([{ x: 1 }, { x: 2 }], [{ x: 1 }], 'y')).toEqual([
    { x: 1 },
    { x: 2 },
  ]);
  expect(differenceBy([{ x: 1 }, { x: 2 }], [{ x: 1 }], '')).toEqual([
    { x: 1 },
    { x: 2 },
  ]);

  expect(differenceBy([{ x: 1 }, { x: 2 }], [{ x: 1 }])).toEqual([
    { x: 1 },
    { x: 2 },
  ]);

  expect(differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)).toEqual([1.2]);
  expect(differenceBy([2.1, 1.2], [2.3, 3.4])).toEqual([2.1, 1.2]);
  expect(
    differenceBy([2.1, 1.2], [2.3, 3.4], (item) => Number.parseInt(item))
  ).toEqual([1.2]);
});
