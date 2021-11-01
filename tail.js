// FUNCTION IMPLEMENTATION
const tail = (arr) => {
  if (arr.length <= 1) return null;
  return arr.slice(1);
};

// Export the Function
module.exports = tail;

