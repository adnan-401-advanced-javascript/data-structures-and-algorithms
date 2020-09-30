const arr = [89, 2354, 3546, 23, 10, -923, 823, -12];
const revarsedArray = [];

function reverseArray(array) {
  array.forEach((element, i) => {
    revarsedArray.push(arr[arr.length - 1 - i]);
    return revarsedArray;
  });
}

reverseArray(arr);
console.log(revarsedArray);
