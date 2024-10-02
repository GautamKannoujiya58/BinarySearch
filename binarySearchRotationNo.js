console.log("Number of times a sorted array is rotated");

function numberOfSortedRotated(rotatedArr) {
  let N = rotatedArr.length;
  let leftIndex = 0;
  let rightIndex = rotatedArr.length - 1;
  while (leftIndex <= rightIndex) {
    let midIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
    let nextElmt = (midIndex + 1) % N;
    let prevElmt = (midIndex + N - 1) % N;
    if (
      rotatedArr[midIndex] <= rotatedArr[nextElmt] &&
      rotatedArr[midIndex] <= rotatedArr[prevElmt]
    ) {
      return midIndex;
    }
    if (rotatedArr[leftIndex] <= rotatedArr[midIndex]) {
      leftIndex = midIndex + 1;
    } else if (rotatedArr[midIndex] <= rotatedArr[rightIndex]) {
      rightIndex = midIndex - 1;
    }
  }
}
console.log(numberOfSortedRotated([11, 12, 15, 18, 2, 5, 6, 8])); //4
console.log(numberOfSortedRotated([6, 7, 8, 9, 1, 2, 3, 4, 5])); //4
console.log(numberOfSortedRotated([3, 4, 5, 1, 2])); //3
console.log(numberOfSortedRotated([1, 2, 3, 4, 5])); // 0
