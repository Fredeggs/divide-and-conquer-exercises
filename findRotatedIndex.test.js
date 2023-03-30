const { findRotatedIndex } = require("./findRotatedIndex");

describe("findRotatedIndex", function () {
  test("works", function () {
    expect(findRotatedIndex([3, 4, 1, 2], 4)).toEqual(1);
    expect(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)).toEqual(2);
    expect(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)).toEqual(6);
    expect(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)).toEqual(-1);
    expect(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)).toEqual(-1);
  });
});
