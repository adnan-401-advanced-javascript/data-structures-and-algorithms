const insertionSort = require("../insertionSort");

describe("Sort array", () => {
  it("sort array", () => {
    const arr = [2, 3, 5, 7, 6, 1, 4];
    expect(insertionSort(arr)).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});
