# Merge Sort Method
## Pseudo Code

```
ALGORITHM Mergesort(arr)
   DECLARE n <-- arr.length

   if n > 1
     DECLARE mid <-- n/2
     DECLARE left <-- arr[0...mid]
     DECLARE right <-- arr[mid...n]
     // sort the left side
     Mergesort(left)
     // sort the right side
     Mergesort(right)
     // merge the sorted left and right sides together
     Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
   DECLARE i <-- 0
   DECLARE j <-- 0
   DECLARE k <-- 0

   while i < left.length && j < right.length
       if left[i] <= right[j]
           arr[k] <-- left[i]
           i <-- i + 1
       else
           arr[k] <-- right[j]
           j <-- j + 1

       k <-- k + 1

   if i = left.length
      set remaining entries in arr to remaining values in right
   else
      set remaining entries in arr to remaining values in left
```

## Code
```javaScript
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
```

## Test
```javaScript
const mergeSort = require("../mergeSort");

describe("Sort array", () => {
  it("sort array", () => {
    const arr = [7, 3, 2, 16, 24, 4, 11, 9];
    expect(mergeSort(arr)).toStrictEqual([2, 3, 4, 7, 9, 11, 16, 24]);
  });
});

});
```


## Example implementation

![](https://miro.medium.com/max/2560/1*61Mf0zjVfd1s3_SzUNGxPA.png)
