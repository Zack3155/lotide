const letterPositions = function (sentence) {
  const result = {};
  // logic to update results here
  for (let char1 of sentence) {
    let index = 0;
    let arr = [];
    for (let char2 of sentence) {
      if (char1 === char2) arr.push(index);
      ++index;
    }
    if (char1 != ' ') result[char1] = arr;
  }
  console.log(result);
  return result;
};

letterPositions("lighthouse in the house");