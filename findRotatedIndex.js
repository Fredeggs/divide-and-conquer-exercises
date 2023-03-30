// first determine where the "pivot" in the array is
// then search the left side of the array, if found, return the index
// if not found, search the right side of the array and return the index
// if not found at all return -1

function findRotatedIndex(arr, val) {
  let start = 0;
  let end = findPivot(arr);
  let leftSearchResult = myBinarySearch(start, end, arr, val);
  if (leftSearchResult != -1) {
    return leftSearchResult;
  } else {
    start = end + 1;
    end = arr.length - 1;
    return myBinarySearch(start, end, arr, val);
  }
}

function findPivot(arr) {
  let lowerIdx = 0;
  let upperIdx = arr.length - 1;
  let middleIdx = Math.floor((upperIdx + lowerIdx) / 2);
  while (lowerIdx <= upperIdx) {
    middleIdx = Math.floor((upperIdx + lowerIdx) / 2);
    if (arr[middleIdx] > arr[middleIdx + 1]) {
      return middleIdx;
    } else if (arr[lowerIdx] <= arr[middleIdx]) {
      lowerIdx = middleIdx + 1;
    } else {
      upperIdx = middleIdx - 1;
    }
  }
  return -1;
}

function myBinarySearch(start, end, arr, val) {
  let lowerIdx = start;
  let upperIdx = end;
  let middleIdx = Math.floor((upperIdx + lowerIdx) / 2);
  while (lowerIdx <= upperIdx) {
    if (val > arr[middleIdx]) {
      lowerIdx = middleIdx + 1;
      middleIdx = Math.floor((upperIdx + lowerIdx) / 2);
    } else if (val < arr[middleIdx]) {
      upperIdx = middleIdx - 1;
      middleIdx = Math.floor((upperIdx + lowerIdx) / 2);
    } else {
      return middleIdx;
    }
  }
  return -1;
}

module.exports = { findRotatedIndex };
