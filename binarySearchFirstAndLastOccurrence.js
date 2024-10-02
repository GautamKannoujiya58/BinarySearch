console.log("First and last occurrence of an Element");

// First Occurrence
function binarySearchFirstOccurrence(arr, targetElmt) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  let firstOccurrence = -1;
  while (leftIndex <= rightIndex) {
    let midIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);

    if (targetElmt === arr[midIndex]) {
      firstOccurrence = midIndex;
      rightIndex = midIndex - 1;
    } else if (targetElmt < arr[midIndex]) {
      rightIndex = midIndex - 1;
    } else {
      leftIndex = midIndex + 1;
    }
  }
  return firstOccurrence;
}
console.log(binarySearchFirstOccurrence([1, 2, 2, 2, 3, 4, 5, 6], 2)); // 1
console.log(binarySearchFirstOccurrence([1, 3, 5, 7, 9], 4)); // -1
console.log(binarySearchFirstOccurrence([10], 10)); // 0
console.log(binarySearchFirstOccurrence([1, 3, 3, 3, 3, 5, 6, 7], 3)); // 1

// Last occurrence
function binarySearchLastOccurrence(arr, targetElmt) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  let lastOccurrence = -1;
  while (leftIndex <= rightIndex) {
    let midIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
    if (targetElmt === arr[midIndex]) {
      lastOccurrence = midIndex;
      leftIndex = midIndex + 1;
    } else if (targetElmt < arr[midIndex]) {
      rightIndex = midIndex - 1;
    } else {
      leftIndex = midIndex + 1;
    }
  }
  return lastOccurrence;
}
console.log("---------------------------------------------------------");
console.log(binarySearchLastOccurrence([1, 2, 2, 2, 3, 4, 5, 6], 2)); // 3
console.log(binarySearchLastOccurrence([1, 3, 5, 7, 9], 4)); // -1
console.log(binarySearchLastOccurrence([10], 10)); // 0
console.log(binarySearchLastOccurrence([1, 2, 2, 2, 3], 2)); // 3
console.log(binarySearchLastOccurrence([1, 3, 3, 3, 3, 5, 6, 7], 3)); // 4
