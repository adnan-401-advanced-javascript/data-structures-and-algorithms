/* eslint-disable no-param-reassign */

"user strict";

function InsertionSort(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let j = i - 1;
    const temp = arr[i];

    while (j >= 0 && temp < arr[j]) {
      arr[j + 1] = arr[j];
      j -= 1;
    }
    arr[j + 1] = temp;
  }
  return arr;
}
module.exports = InsertionSort;

console.log(InsertionSort([7, 8, 5, 2, 4, 6, 3]));
