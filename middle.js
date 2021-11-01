const middle = (arr) => {
  let start = Math.ceil(arr.length / 2) - 1;
  let end = start + 2;
  let mid = [];

  if (arr.length < 3) return mid;
  (arr.length % 2 === 0) ?
    mid = arr.slice(start, end) :
    mid = arr.slice(start, start + 1);

  //console.log(mid);
  return mid;
};

// Export Function
module.exports = middle;
