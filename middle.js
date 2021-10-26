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

const middle = (arr) => {

  let start = Math.ceil(arr.length / 2) - 1;
  let end = start + 2;
  let mid = [];

  if (arr.length < 3) return mid;
  (arr.length % 2 === 0) ?
    mid = arr.slice(start, end) :
    mid = arr.slice(start, start + 1);

  console.log(mid);
  return mid;
};

console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]