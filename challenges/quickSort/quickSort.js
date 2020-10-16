/* eslint-disable no-param-reassign */
function swap(arr, leftIndex, rightIndex) {
  console.log("swap", arr[leftIndex], arr[rightIndex]);
  const temp = arr[leftIndex];
  arr[leftIndex] = arr[rightIndex];
  arr[rightIndex] = temp;
}
function partition(arr, left, right) {
  const pivot = arr[Math.floor((right + left) / 2)]; // middle element
  console.log("---partition", arr, left, right);
  console.log("!!!pivot", pivot);

  let i = left; // left pointer
  let j = right; // right pointer
  while (i <= j) {
    while (arr[i] < pivot) {
      console.log("arr[i] < pivot", arr[i], "<", pivot);
      i += 1;
      console.log("i", i);
    }
    console.log("--");
    while (arr[j] > pivot) {
      console.log("arr[j] > pivot", arr[j], ">", pivot);
      j -= 1;
      console.log("j", j);
    }
    if (i <= j) {
      swap(arr, i, j); // sawpping two elements
      i += 1;
      j -= 1;
      console.log("i", i);
      console.log("j", j);
    }
  }
  console.log("after---", arr);
  return i;
}

function quickSort(arr, left, right) {
  let index;
  if (arr.length > 1) {
    index = partition(arr, left, right); // index returned from partition
    console.log("index", index);
    if (left < index - 1) { // more elements on the left side of the pivot
      quickSort(arr, left, index - 1);
    }
    if (index < right) { // more elements on the right side of the pivot
      quickSort(arr, index, right);
    }
  }
  return arr;
}

module.exports = quickSort;
