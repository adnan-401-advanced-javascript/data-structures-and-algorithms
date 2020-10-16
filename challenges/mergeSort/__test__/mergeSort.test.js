/* eslint-disable no-undef  */

const mergeSort = require("../mergeSort");

describe("Sort array", () => {
  it("sort array", () => {
    const arr = [7, 3, 2, 16, 24, 4, 11, 9];
    expect(mergeSort(arr)).toStrictEqual([2, 3, 4, 7, 9, 11, 16, 24]);
  });
});
