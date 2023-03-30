// first determine where the "pivot" in the array is
// then search the left side of the array, if found, return the index
// if not found, search the right side of the array and return the index
// if not found at all return -1

function findRotationCount(arr) {
  let lowerIdx = 0;
  let upperIdx = arr.length - 1;
  let middleIdx = Math.floor((upperIdx + lowerIdx) / 2);
  while (lowerIdx <= upperIdx) {
    middleIdx = Math.floor((upperIdx + lowerIdx) / 2);
    if (arr[middleIdx] > arr[middleIdx + 1]) {
      return middleIdx + 1;
    } else if (arr[lowerIdx] <= arr[middleIdx]) {
      lowerIdx = middleIdx + 1;
    } else {
      upperIdx = middleIdx - 1;
    }
  }
  return 0;
}

module.exports = { findRotationCount };
