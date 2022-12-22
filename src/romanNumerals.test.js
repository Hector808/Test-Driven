const sum = require('./romanNumerals');

describe.each([
    [5, 5, 10],
    [7, 3, 10],
    [27, 46, 73],
  ])('calculate sum correct for %i and %i', (a, b, expected) => {
    test(`returns ${expected}`, () => {
      expect(a + b).toBe(expected);
    });

  });





  test('calculates the correct sum for a variety of products', () => {
    expect(sum(5, 8, 12)).toBe(25);
  });