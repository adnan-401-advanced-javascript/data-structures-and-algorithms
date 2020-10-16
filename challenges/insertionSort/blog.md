# Insertion Sort

### BIG O
* Big(O) **O(n^2)** two nested loops


## Challenge
### Psedo code

```javascript
FOR i = 1 to arr.length  
  int j <-- i - 1
  int temp <-- arr[i]

  WHILE j >= 0 AND temp < arr[j]
    arr[j + 1] <-- arr[j]
    j <-- j - 1

  arr[j + 1] <-- temp

```

### Code
```javascript
function InsertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let j = i - 1;
    let temp = arr[i];

    while (j >= 0 && temp < arr[j]) {
      arr[j + 1] = arr[j];      
      j--;
    }
    arr[j + 1] = temp;
  }
  return arr;
}
```

### test
```javascript
describe("Sort array", () => {
  it("sort array", () => {
    const arr = [2, 3, 5, 7, 6, 1, 4];
    expect(insertionSort(arr)).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});
```

## Solution
**Algorithm** <br/>
1: Iterate from arr[1] to arr[n] over the array. <br/>
2: Compare the current element (key) to its predecessor. <br/>
3: If the key element is smaller than its predecessor, compare it to the elements before. Move the greater elements one position up to make space for the swapped element.

<img src="https://media.geeksforgeeks.org/wp-content/uploads/insertionsort.png" />
