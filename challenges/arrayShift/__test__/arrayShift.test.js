/* eslint-disable no-undef */
const shifArray = require("../array-shift");

describe("test array shift", () => {
  it("test case", () => {
    expect(shifArray([4, 8, 15, 23, 42], 16).toString()).toBe("4,8,15,16,23,42");
  });
});
