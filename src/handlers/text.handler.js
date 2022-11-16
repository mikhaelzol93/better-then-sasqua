const { TriggersMap } = require('../common/triggers.map');
const { byePhrases } = require('../data/bye');
const { helloPhrases } = require('../data/hello');
const { phpPhrases } = require('../data/php');
const { javaPhrases } = require('../data/java');

function getSentences(triggersList, phrasesIndexMap, userFirstName) {
  const sentences = [];

  triggersList.forEach((triggerWord) => {
    if (triggerWord === TriggersMap.bye) {
      const byePhrase = `${userFirstName}, ${byePhrases[phrasesIndexMap[TriggersMap.bye]]}`;
      sentences.push(byePhrase);
    }

    if (triggerWord === TriggersMap.hello) {
      const helloPhrase = `${userFirstName}, ${helloPhrases[phrasesIndexMap[TriggersMap.hello]]}`;
      sentences.push(helloPhrase);
    }

    if (triggerWord === TriggersMap.php) {
      const phpPhrase = phpPhrases[phrasesIndexMap[TriggersMap.php]];
      sentences.push(phpPhrase);
    }

    if (triggerWord === TriggersMap.java) {
      const javaPhrase = javaPhrases[phrasesIndexMap[TriggersMap.java]];
      sentences.push(javaPhrase);
    }
  });

  return sentences;
}

function generateText(sentences) {
  if (sentences.length === 0) return;

  let text = '';

  sentences.forEach((sentence) => (text += sentence + ' '));

  return text;
}

function getPhrasesArraysLength() {
  return {
    php: phpPhrases.length,
    bye: byePhrases.length,
    hello: helloPhrases.length,
    java: javaPhrases.length,
  };
}

module.exports = {
  generateText,
  getSentences,
  getPhrasesArraysLength,
};
