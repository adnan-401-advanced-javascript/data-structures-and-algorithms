let arr = [1, 2, 3, 4, 5];
let shifArray = function (arr, val){
  let position = Math.ceil(arr.length / 2);
  let arrayLength = arr.length;
  for (var i = arrayLength - 1; i >= position; i--) {
    arr[i + 1] = arr[i];
    if (i == position) {
      arr[i] = val; break;
    }
  }
return arr;
}

module.exports = shifArray;
