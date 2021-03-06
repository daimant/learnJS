"use strict";

describe("должен вернуть отсортированный массив", function() {
  it("массив [3, 1, 2], должен вернуть [1, 2, 3]", function() {
    assert.deepEqual(sortArr([3, 1, 2]), [1, 2, 3]);
  });

  it("массив [-1, 900, 0], должен вернуть [-1, 0, 900]", function() {
    assert.deepEqual(sortArr([-1, 900, 0]), [-1, 0, 900]);
  });

  it("массив [1000,50,100], должен вернуть [50,100,1000]", function() {
    assert.deepEqual(sortArr([1000, 50, 100]), [50, 100, 1000]);
  });

  it("массив [100500, -1000, 1000], должен вернуть [-1000, 1000, 100500]", function() {
    assert.deepEqual(sortArr([100500, -1000, 1000]), [-1000, 1000, 100500]);
  });

  it("массив [-3, 1, -20], должен вернуть [-20, -3, 1]", function() {
    assert.deepEqual(sortArr([-3, 1, -20]), [-20, -3, 1]);
  });
});
