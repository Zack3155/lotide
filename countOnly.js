const check = String.fromCodePoint(0x02714);
const cross = String.fromCodePoint(0x026D4);

const eqArrays = function (actual, expected) {
  let tmp = Array.isArray(actual) &&
    Array.isArray(expected) &&
    actual.length === expected.length &&
    actual.every((val, index) => val === expected[index]);

  return tmp;
};

const assertEqual = function (actual, expected) {
  eqArrays(actual, expected) ?
    console.log(`${check} ${check} ${check} Assertion Passed: ${actual} === ${expected}`) :
    console.log(`${cross}${cross}${cross} Assertion Passed: ${actual} !== ${expected}`);
};


// FUNCTION IMPLEMENTATION

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function (allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) results[item] += 1;
      else results[item] = 1;
    }
  }

  return results;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(result1);

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);