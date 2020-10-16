/* eslint-disable no-use-before-define */

module.exports = function mergeSort(arr) {
  const arrLength = arr.length;
  console.log("mergeSort", arr);
  if (arrLength === 1) return arr;

  const mid = Math.floor(arrLength / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, arrLength);

  return merge(mergeSort(left), mergeSort(right));
};

function merge(left, right) {
  const arr = [];

  while (left.length && right.length) {
    console.log("left[0] < right[0]", left[0], right[0], left[0] < right[0]);
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  console.log("---merged ", arr, left, right);

  // (left or right) if one of them empty, by default will concatenate the other
  return [...arr, ...left, ...right];
}
