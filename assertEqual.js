const check = String.fromCodePoint(0x02714);
const cross = String.fromCodePoint(0x026D4);

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  (actual === expected) ?
    console.log(`${check} ${check} ${check} Assertion Passed: ${actual} === ${expected}`) :
    console.log(`${cross}${cross}${cross} Assertion Passed: ${actual} !== ${expected}`);
};

// Export the Function
module.exports = assertEqual;
