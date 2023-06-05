const { sum } = require("../scripts/module.js");

describe("sum function", () => {
  test("outputs sum of a and b", () => {
    const number = sum(3)(2);
    expect(number).toBe(5);
  });
});

let { formatDate } = require("../scripts/module.js");

describe('formatDate', () => {
  test('should correctly format the date', () => {
    const newDate = formatDate();
    expect(newDate).toBe('26.11.2020');
  });
});