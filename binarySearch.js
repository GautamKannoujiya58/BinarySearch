console.log("Hello world");
// Using while loop
// function binarySearch(arr, targetElmt) {
//   let len = arr.length;
//   let start = 0;
//   let end = len - 1;

//   while (start <= end) {
//     let mid = start + Math.floor((end - start) / 2);
//     if (targetElmt === arr[mid]) {
//       return mid;
//     }
//     if (targetElmt < arr[mid]) {
//       end = mid - 1;
//     } else {
//       start = mid + 1;
//     }
//   }
//   return -1;
// }

// Using for loop
console.log("Hello world");
function binarySearch(arr, targetElmt) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    let midIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
    if (targetElmt === arr[midIndex]) {
      return midIndex;
    }
    if (targetElmt < arr[midIndex]) {
      rightIndex = midIndex - 1;
    } else {
      leftIndex = midIndex + 1;
    }
  }
  return -1;
}
console.log(binarySearch([1, 3, 5, 7, 8, 90], 90)); // 5
console.log(binarySearch([1, 3, 90, 800, 998, 900], 0)); // -1
console.log(binarySearch([3, 11, 16, 34, 89, 92, 120], 120)); // 6
console.log(binarySearch([9, 11, 45, 49, 60], 11)); // 1
