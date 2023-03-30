function findFloor(arr, val) {
  let lowerIdx = 0;
  let upperIdx = arr.length - 1;
  let middleIdx = Math.floor((upperIdx + lowerIdx) / 2);
  while (lowerIdx <= upperIdx) {
    if (val > arr[middleIdx]) {
      lowerIdx = middleIdx + 1;
      middleIdx = Math.floor((upperIdx + lowerIdx) / 2);
    } else if (val < arr[middleIdx]) {
      upperIdx = middleIdx - 1;
      middleIdx = Math.floor((upperIdx + lowerIdx) / 2);
    } else {
      return arr[middleIdx];
    }
  }
  return arr[upperIdx] || -1;
}
