console.log("Binary Search on reverse sorted array");
function BSReverseSortedArray(arr, targetElmt) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (leftIndex <= rightIndex) {
    let midIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
    if (targetElmt === arr[midIndex]) {
      return midIndex;
    }
    if (targetElmt < arr[midIndex]) {
      leftIndex = midIndex + 1;
    } else {
      rightIndex = midIndex - 1;
    }
  }
  return -1;
}
console.log(BSReverseSortedArray([12, 10, 8, 9, 6], 12)); // 0
console.log(BSReverseSortedArray([9, 6, 3, 2, 0], 2)); // 3
console.log(BSReverseSortedArray([50, 23, 19, 4, 1], 12)); // -1
