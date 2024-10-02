console.log("Binary search on order agnostic / order not known search");
function OrderAgnosticBinarySearch(arr, targetElmt) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  let isAscending = arr[leftIndex] < arr[rightIndex]; // Determingin the ascending or descending of the given array
  //   if (arr[midIndex] > arr[midIndex - 1]) {
  //     while (leftIndex <= rightIndex) {
  //       let midIndex1 = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
  //       if (targetElmt === arr[midIndex1]) {
  //         return midIndex1;
  //       }
  //       if (targetElmt < arr[midIndex1]) {
  //         rightIndex = midIndex1 - 1;
  //       } else {
  //         leftIndex = midIndex1 + 1;
  //       }
  //     }
  //   } else {
  //     while (leftIndex <= rightIndex) {
  //       let midIndex2 = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
  //       if (targetElmt === arr[midIndex2]) {
  //         return midIndex2;
  //       }
  //       if (targetElmt > arr[midIndex2]) {
  //         rightIndex = midIndex2 - 1;
  //       } else {
  //         leftIndex = midIndex2 + 1;
  //       }
  //     }
  //   }
  if (arr.length === 1 && arr[0] === targetElmt) {
    return 0;
  }
  while (leftIndex <= rightIndex) {
    let midIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
    if (targetElmt === arr[midIndex]) {
      return midIndex;
    }
    if (isAscending) {
      // Ascending
      if (targetElmt < arr[midIndex]) {
        rightIndex = midIndex - 1;
      } else {
        leftIndex = midIndex + 1;
      }
    } else {
      // Descending
      if (targetElmt > arr[midIndex]) {
        rightIndex = midIndex - 1;
      } else {
        leftIndex = midIndex + 1;
      }
    }
  }
  return -1;
}

console.log(OrderAgnosticBinarySearch([12, 10, 8, 9, 6], 12)); // 0
console.log(OrderAgnosticBinarySearch([9, 6, 3, 2, 0], 2)); // 3
console.log(OrderAgnosticBinarySearch([50, 23, 19, 4, 1], 12)); // -1
console.log("--------------------------------------");

console.log(OrderAgnosticBinarySearch([1, 3, 5, 7, 8, 90], 90)); // 5
console.log(OrderAgnosticBinarySearch([1, 3, 90, 800, 998, 900], 0)); // -1
console.log(OrderAgnosticBinarySearch([3, 11, 16, 34, 89, 92, 120], 120)); // 6
console.log(OrderAgnosticBinarySearch([9, 11, 45, 49, 60], 11)); // 1
console.log("---------------------------------------");

console.log(OrderAgnosticBinarySearch([12, 73], 12)); // 0
console.log(OrderAgnosticBinarySearch([65, 23], 23)); // 1
console.log(OrderAgnosticBinarySearch([12, 73], 0)); // -1
console.log(OrderAgnosticBinarySearch([56], 56)); // 0
console.log(OrderAgnosticBinarySearch([56], 5)); // -1
console.log(OrderAgnosticBinarySearch([10], 10)); // 0
