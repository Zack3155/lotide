const check = String.fromCodePoint(0x02714);
const cross = String.fromCodePoint(0x026D4);

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  (actual === expected) ?
    console.log(`${check} ${check} ${check} Assertion Passed: ${actual} === ${expected}`) :
    console.log(`${cross}${cross}${cross} Assertion Passed: ${actual} !== ${expected}`);
};

const head = (arr) => {
  return arr[0];
};

const tail = (arr) => {
  if (arr.length === 1) return null;
  return arr.slice(0);
};

// TEST CODE
const words = ["Yo Yo", "Lighthouse", "Labs"];
const tmp1 = [];
const tmp2 = ["1"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
tail(tmp1);
assertEqual(tmp1.length, 0);
tail(tmp2);
assertEqual(tmp2.length, 1);
