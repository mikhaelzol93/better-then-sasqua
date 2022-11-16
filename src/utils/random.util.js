function getRandomArrayIndex(arrayLength) {
  const min = 0;
  const max = arrayLength;
  return Math.floor(Math.random() * (max - min) + min);
}

module.exports = {
  getRandomArrayIndex,
};
