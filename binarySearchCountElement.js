console.log("Count of an element in a sorted array");

function binarySearchCountElement(arr, targetEmt) {
  const last = lastOccurrence(arr, targetEmt);
  const first = firstOccurrence(arr, targetEmt);
  if (last === -1 || first === -1) {
    return -1;
  }
  return last - first + 1;
}
console.log(binarySearchCountElement([1, 3, 3, 3, 3, 3, 3, 3], 3)); // 7
console.log(binarySearchCountElement([1, 2, 4, 6, 6, 8, 9, 10], 3)); // -1
console.log(binarySearchCountElement([3, 3, 3, 4, 5], 3)); // 3
console.log(binarySearchCountElement([1, 2, 3, 3, 3], 3)); // 3
console.log(binarySearchCountElement([1, 2, 3, 4, 5], 3)); // 1
console.log(binarySearchCountElement([3], 3)); // 1
console.log(binarySearchCountElement([5], 3)); // -1

function firstOccurrence(arr, targetElmt) {
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

function lastOccurrence(arr, targetElmt) {
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
