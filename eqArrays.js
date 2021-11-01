// FUNCTION IMPLEMENTATION
const eqArrays = function(actual, expected) {
  let tmp = Array.isArray(actual) &&
    Array.isArray(expected) &&
    actual.length === expected.length &&
    actual.every((val, index) => val === expected[index]);

  return tmp;
};

// Export Function
module.exports = eqArrays;