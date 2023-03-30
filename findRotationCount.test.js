const { findRotationCount } = require("./findRotationCount");

describe("findRotationCount", function () {
  test("works", function () {
    expect(findRotationCount([15, 18, 2, 3, 6, 12])).toEqual(2);
    expect(findRotationCount([7, 9, 11, 12, 5])).toEqual(4);
    expect(findRotationCount([7, 9, 11, 12, 15])).toEqual(0);
  });
});
