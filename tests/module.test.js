const { sum } = require("../scripts/module.js");

describe("sum function", () => {
  test("outputs sum of a and b", () => {
    const number = sum(3)(2);
    expect(number).toBe(5);
  });
});
