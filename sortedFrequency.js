function sortedFrequency(arr, val) {
  let leftLowerIdx = 0;
  let leftUpperIdx = arr.length - 1;
  let leftMiddleIdx = Math.floor((leftUpperIdx + leftLowerIdx) / 2);
  while (leftLowerIdx <= leftUpperIdx) {
    if (arr[leftMiddleIdx] < val) {
      leftLowerIdx = leftMiddleIdx + 1;
      leftMiddleIdx = Math.floor((leftUpperIdx + leftLowerIdx) / 2);
    } else if (arr[leftMiddleIdx] >= val) {
      leftUpperIdx = leftMiddleIdx - 1;
      leftMiddleIdx = Math.floor((leftUpperIdx + leftLowerIdx) / 2);
    }
  }
  let rightLowerIdx = leftMiddleIdx + 1;
  let rightUpperIdx = arr.length - 1;
  let rightMiddleIdx = Math.floor((rightUpperIdx + rightLowerIdx) / 2);
  while (rightLowerIdx <= rightUpperIdx) {
    if (arr[rightMiddleIdx] <= val) {
      rightLowerIdx = rightMiddleIdx + 1;
      rightMiddleIdx = Math.floor((rightUpperIdx + rightLowerIdx) / 2);
    } else if (arr[rightMiddleIdx] > val) {
      rightUpperIdx = rightMiddleIdx - 1;
      rightMiddleIdx = Math.floor((rightUpperIdx + rightLowerIdx) / 2);
    }
  }
  return rightMiddleIdx - leftMiddleIdx === 0
    ? -1
    : rightMiddleIdx - leftMiddleIdx;
}
