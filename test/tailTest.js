// Import Function
const assert = require('chai').assert;
const tail = require('../tail');

// TEST CODE
describe("#tail", () => {
  it(`returns ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]`, () => {
    assert.deepEqual(tail["Yo Yo", "Lighthouse", "Labs"]);
  });
  it("returns [2] for [1, 2]", () => {
    assert.deepEqual(tail([1, 2]), [2]);
  });
  it("returns null for []", () => {
    assert.deepEqual(tail([]), null);
  });
  it(`returns null for ["1"]`, () => {
    assert.deepEqual(tail(["1"]), null);
  });
});