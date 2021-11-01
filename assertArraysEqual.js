// Import Function
const eqArrays = require('./eqArrays');


// FUNCTION IMPLEMENTATION
const check = String.fromCodePoint(0x02714);
const cross = String.fromCodePoint(0x026D4);

const assertArraysEqual = function(actual, expected) {
  eqArrays(actual, expected) ?
    console.log(`${check} ${check} ${check} Assertion Passed: ${actual} === ${expected}`) :
    console.log(`${cross}${cross}${cross} Assertion Failed: ${actual} !== ${expected}`);
};

// Export Function
module.exports = assertArraysEqual;
