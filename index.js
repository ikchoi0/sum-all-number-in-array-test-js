function sumItems(array) {
  // Sum all the numbers in the array
  return array.reduce((prev, curr) => {
    if (Array.isArray(curr)) {
      curr = sumItems(curr);
    }
    return prev + curr;
  }, 0);
}

module.exports = sumItems;