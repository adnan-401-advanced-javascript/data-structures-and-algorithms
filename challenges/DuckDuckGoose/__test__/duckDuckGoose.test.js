/* eslint-disable no-undef */
const duckDuckGoose = require("../duckDuckGoose");

describe("duckDuckGoose Tests", () => {
  it("duckDuckGoose", () => {
    const result = duckDuckGoose(["A", "B", "C", "D", "E"], 3);
    expect(result.join("")).toBe("CAEB");
  });
});
