const romano = require('./roman');

test('Number 1', () => {
    expect(romano("I")).toBe("I");
  });

  test('Number 2', () => {
    expect(romano("II")).toBe("II");
  });

  test('Number 3', () => {
    expect(romano("III")).toBe("III");
  });
