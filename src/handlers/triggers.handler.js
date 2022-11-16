const { byeTriggers } = require('../data/bye');
const { helloTriggers } = require('../data/hello');
const { phpTriggers } = require('../data/php');
const { javaTriggers } = require('../data/java');
const { TriggersMap } = require('../common/triggers.map');
const { punctuationsList } = require('../common/punctuations.list');

function clearWord(word) {
  const splittedWord = word.trim().split('');

  return splittedWord.filter((letter) => !punctuationsList.includes(letter)).join('');
}

function searchTriggers(text) {
  const splittedText = text.toLowerCase().split(' ');

  const clearSplittedText = splittedText.map((word) => clearWord(word));

  const triggers = [];

  clearSplittedText.forEach((word) => {
    if (byeTriggers.includes(word)) triggers.push(TriggersMap.bye);
    if (helloTriggers.includes(word)) triggers.push(TriggersMap.hello);
    if (phpTriggers.includes(word)) triggers.push(TriggersMap.php);
    if (javaTriggers.includes(word)) triggers.push(TriggersMap.java);
  });

  return new Set([...triggers]);
}
module.exports = {
  searchTriggers,
};
