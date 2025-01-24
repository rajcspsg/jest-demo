const { sum, multiply } = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 2 +3 to 5', () => {
  expect(sum(3, 2)).toBe(5);
});

test('multiply 2 * 3 to 6', () => {
  expect(multiply(3, 2)).toBe(6);
});


test('multiple 1 * 5 to 5', () => {
  expect(multiply(1, 5)).toBe(5);
});
