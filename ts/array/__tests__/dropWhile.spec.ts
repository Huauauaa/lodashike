import dropWhile from '../dropWhile';

test('dropRight', () => {
  const users = [
    { user: 'barney', active: false },
    { user: 'fred', active: false },
    { user: 'pebbles', active: true },
  ];

  // expect(
  //   dropWhile(users, function (o) {
  //     return !o.active;
  //   })
  // ).toEqual([{ user: 'pebbles', active: true }]);

  expect(dropWhile(users, ['active', false])).toStrictEqual([
    { user: 'pebbles', active: true },
  ]);
  expect(dropWhile(users, 'active')).toStrictEqual(users);
  expect(dropWhile(users, 'active1')).toStrictEqual(users);
});
