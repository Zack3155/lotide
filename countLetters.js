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

const countLetters = (sentence) => {
  const result = {};
  for(let char1 of sentence){
    let count = 0;
    for(let char2 of sentence){
      if(char1 === char2) ++count;
  }
  if(char1 != ' ') result[char1] = count;
}
  console.log(result);
  return result;
};

countLetters("lighthouse in the house");