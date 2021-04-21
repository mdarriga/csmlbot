const request = require('superagent');

(async () => {
  console.log('- - - - - - - - saveBot() - - - - - - -')
  console.log('console_url: ', process.env.CONSOLE_URL);
  console.log('bot_id: ', process.env.BOT_ID);
  console.log('url: ', `${process.env.CONSOLE_URL}}/bots/${process.env.BOT_ID}`)
  const bot = await request.get(`${process.env.CONSOLE_URL}/bots/${process.env.BOT_ID}`)
    .set('Authorization', `Bearer ${process.env.JWT}`);
  console.log(bot);
})();