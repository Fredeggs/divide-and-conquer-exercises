function countZeroes(arr) {
  let lowerIdx = 0;
  let upperIdx = arr.length - 1;
  let middleIdx = Math.floor((upperIdx + lowerIdx) / 2);
  while (lowerIdx <= upperIdx) {
    if (arr[middleIdx] === 1) {
      lowerIdx = middleIdx + 1;
      middleIdx = Math.floor((upperIdx + lowerIdx) / 2);
    } else if (arr[middleIdx] === 0) {
      upperIdx = middleIdx - 1;
      middleIdx = Math.floor((upperIdx + lowerIdx) / 2);
    }
  }
  return arr.length - upperIdx - 1;
}
