const check = String.fromCodePoint(0x02714);
const cross = String.fromCodePoint(0x026D4);

const assertEqual = function (actual, expected) {
  (actual === expected) ?
    console.log(`${check} ${check} ${check} Assertion Passed: ${actual} === ${expected}`) :
    console.log(`${cross}${cross}${cross} Assertion Passed: ${actual} !== ${expected}`);
};

const eqArrays = function (actual, expected) {
  let tmp = Array.isArray(actual) &&
    Array.isArray(expected) &&
    actual.length === expected.length &&
    actual.every((val, index) => val === expected[index]);

  return tmp;
};


// FUNCTION IMPLEMENTATION


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  let result = 0;
  let count = 0;

  for (const key1 of Object.keys(object1)) {
    for (const key2 of Object.keys(object2)) {
      if (key1 === key2 &&
        object1[key1] === object2[key2] &&
        Object.keys(object1).length === Object.keys(object2).length)
        ++result;
      else if (key1 === key2 &&
        eqArrays(object1[key1], object2[key2]) &&
        Object.keys(object1).length === Object.keys(object2).length)
        ++result;
    }
    ++count;
  }
  console.log(`Result: ${result}, `, result === count);
  return (result === count);
};


const cd = { c: "1", d: "2" };
const dc = { d: "2", c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: "3" };
eqObjects(cd, cd2); // => false

const cd3 = { c: "1", d: ["2", 3] };
const dc2 = { d: ["2", 3], c: "1" };
eqObjects(cd3, dc2); // => true