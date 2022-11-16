const { getRandomArrayIndex } = require('../utils/random.util');
const { getPhrasesArraysLength, getSentences, generateText } = require('./text.handler');
const { searchTriggers } = require('./triggers.handler');

function basicHandler(msg) {
  const phrasesArraysLength = getPhrasesArraysLength();
  const phrasesIndexMap = {
    php: getRandomArrayIndex(phrasesArraysLength.php),
    bye: getRandomArrayIndex(phrasesArraysLength.bye),
    hello: getRandomArrayIndex(phrasesArraysLength.hello),
    java: getRandomArrayIndex(phrasesArraysLength.java),
  };

  const triggersList = searchTriggers(msg.text);
  const userFirstName = msg.from.first_name;

  const sentences = getSentences(triggersList, phrasesIndexMap, userFirstName);

  return generateText(sentences);
}

module.exports = {
  basicHandler,
};
