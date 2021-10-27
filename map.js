const check = String.fromCodePoint(0x02714);
const cross = String.fromCodePoint(0x026D4);

// FUNCTION IMPLEMENTATION
const eqArrays = function (actual, expected) {
  let tmp = Array.isArray(actual) &&
    Array.isArray(expected) &&
    actual.length === expected.length &&
    actual.every((val, index) => val === expected[index]);

  return tmp;
};

const assertArraysEqual = function (actual, expected) {
  eqArrays(actual, expected) ?
    console.log(`${check} ${check} ${check} Assertion Passed: ${actual} === ${expected}`) :
    console.log(`${cross}${cross}${cross} Assertion Passed: ${actual} !== ${expected}`);
};



// FUNCTION IMPLEMENTATION

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
assertArraysEqual(words.map(word => word[0]), ['g', 'c', 't', 'm', 't']);