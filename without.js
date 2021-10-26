const check = String.fromCodePoint(0x02714);
const cross = String.fromCodePoint(0x026D4);

// FUNCTION IMPLEMENTATION
const assertArraysEqual = function (actual, expected) {
  let tmp = Array.isArray(actual) &&
    Array.isArray(expected) &&
    actual.length === expected.length &&
    actual.every((val, index) => val === expected[index]);

  tmp ?
    console.log(`${check} ${check} ${check} Assertion Passed: ${actual} === ${expected}`) :
    console.log(`${cross}${cross}${cross} Assertion Passed: ${actual} !== ${expected}`);
};

const without = (source, itemsToRemove) => {
  let arr = [];
  let tmp = [];
  for (let item of itemsToRemove) {
    for (let i = 0; i < source.length; ++i) {
      if (item !== source[i]) arr[i] = true;
      else arr[i] = false;
    }
  }

  for (let i = 0; i < source.length; ++i)
    if (arr[i]) tmp.push(source[i]);
  console.log(tmp);
  return tmp;
};

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);