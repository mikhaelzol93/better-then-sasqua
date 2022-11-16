const TelegramBot = require('node-telegram-bot-api');
const { basicHandler } = require('../handlers/basic.handler');

module.exports = {
  start(token) {
    const bot = new TelegramBot(token, { polling: true });

    bot.on('message', (msg) => {
      const text = basicHandler(msg);

      if (text.length > 0) {
        bot.sendMessage(msg.chat.id, text);
      }
    });
  },
};
