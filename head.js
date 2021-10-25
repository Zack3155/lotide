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

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);
assertEqual(head([]), null);