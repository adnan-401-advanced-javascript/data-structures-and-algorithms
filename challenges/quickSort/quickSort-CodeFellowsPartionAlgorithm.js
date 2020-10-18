/* eslint-disable no-param-reassign */

function swap(arr, i, low) {
  const temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
}

function partition(arr, left, right) {
  console.log("left", left, "right", right, "--", arr);
  // set a pivot right
  const pivot = arr[right];
  // create a variable to track the largest index of numbers lower than the defined pivot
  let low = left - 1;
  // loop from left to right
  for (let i = left; i < right; i += 1) {
    if (arr[i] <= pivot) {
      console.log("arr[i] <= pivot || ", arr[i], "<=", pivot);
      low += 1;
      console.log("swap, i , low || ", arr[i], arr[low]);
      swap(arr, i, low);
    }
  }

  // place the value of the pivot location in the middle.
  // all numbers smaller than the pivot are on the left, larger on the right.
  console.log("end-swap!", arr[right], arr[low + 1]);
  swap(arr, right, low + 1);
  // return the split index
  return low + 1;
}

function quickSort(arr, left, right) {
  if (left < right) {
    // Partition the array by setting the position of the pivot value
    const position = partition(arr, left, right);
    console.log("splitIndex----", position);
    // Sort the left
    quickSort(arr, left, position - 1);
    // Sort the right
    quickSort(arr, position + 1, right);
  }
  return arr;
}

module.exports = quickSort;
