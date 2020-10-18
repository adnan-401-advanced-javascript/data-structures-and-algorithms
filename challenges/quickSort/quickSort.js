/* eslint-disable no-param-reassign */

function swap(arr, left, right) {
  console.log("swap", arr[left], arr[right]);
  const temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}

function partition(arr, left, right) {
  console.log("left", left, "right", right, "--", arr);
  const pivot = Math.floor((left + right) / 2);
  console.log("pivot", arr[pivot]);

  while (left < right) {
    while (arr[left] < arr[pivot]) {
      left += 1;
    }

    while (arr[right] > arr[pivot]) {
      right -= 1;
    }

    if (left <= right) {
      swap(arr, left, right);
      left += 1;
      right -= 1;
    }
  }

  return left;
}

function quickSort(arr, left, right) {
  const position = partition(arr, left, right);
  console.log("splitIndex----", position);
  if (left < position - 1) {
    quickSort(arr, left, position - 1);
  }
  // sort the right, moving the pivot to the right each time
  if (right > position) {
    quickSort(arr, position, right);
  }
  return arr;
}

module.exports = quickSort;

// const arr = [3, 4, 6, 8, 7, 1, 2, 5];
const arr = [8, 4, 23, 42, 16, 15];

console.log(quickSort(arr, 0, arr.length - 1));
