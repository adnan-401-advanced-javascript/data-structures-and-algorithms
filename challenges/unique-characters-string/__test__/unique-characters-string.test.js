/* eslint-disable no-undef */
const uniqueCharactersString = require("../unique-characters-string");

describe("uniqueCharactersString", () => {
  it("uniqueCharactersString", () => {
    const str = "I love cats";
    expect(uniqueCharactersString(str)).toBe(true);
  });
  it("uniqueCharactersString2", () => {
    const str = "The quick brown fox jumps over the lazy do";
    expect(uniqueCharactersString(str)).toBe(false);
  });

  it("uniqueCharactersString3", () => {
    const str = "Donald the duck";
    expect(uniqueCharactersString(str)).toBe(false);
  });
});
