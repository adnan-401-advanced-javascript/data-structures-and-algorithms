const bracketsValidator = require("../multi-bracket-validation.js");

describe("Tests", () => {
  it("success test 1", () => {
    expect(bracketsValidator("{}")).toBe(true);
  });
  it("success test 2", () => {
    expect(bracketsValidator("{}(){}")).toBe(true);
  });
  it("success test 3", () => {
    expect(bracketsValidator("()[[Extra Characters]]")).toBe(true);
  });
  it("success test 4", () => {
    expect(bracketsValidator("(){}[[]]")).toBe(true);
  });
  it("success test 5", () => {
    expect(bracketsValidator("{}{Code}[Fellows](())")).toBe(true);
  });
  it("failled test 6", () => {
    expect(bracketsValidator("[({}]")).toBe(false);
  });
  it("failled test 7", () => {
    expect(bracketsValidator("(](")).toBe(false);
  });
});
