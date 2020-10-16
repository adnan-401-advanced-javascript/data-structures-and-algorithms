/* eslint-disable no-undef  */

const quickSort = require("../quickSort");

describe("Sort array", () => {
  it("sort array", () => {
    const arr = [2, 3, 5, 7, 6, 1, 4];
    expect(quickSort(arr, 0, arr.length - 1)).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});
