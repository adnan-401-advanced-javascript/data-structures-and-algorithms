const recursiveFn = function (arr, searchVal, start, end) {
  if (arr.length === 0) {
    return "please provide an array";
  }

  if (start > end) return -1;

  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === searchVal) return mid;

  if (arr[mid] > searchVal) return recursiveFn(arr, searchVal, start, mid - 1);
  return recursiveFn(arr, searchVal, mid + 1, end);
};

const binarySearch = function (arr, searchVal) {
  const result = recursiveFn(arr, searchVal, 0, arr.length - 1);
  return result;
};

module.exports = binarySearch;
