/* eslint-disable no-param-reassign */
const shifArray = function (arr, val) {
  const position = Math.ceil(arr.length / 2);
  const arrayLength = arr.length;
  for (let i = arrayLength - 1; i >= position; i -= 1) {
    arr[i + 1] = arr[i];
    if (i === position) {
      arr[i] = val; break;
    }
  }
  return arr;
};

module.exports = shifArray;
