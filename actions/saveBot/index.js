const request = require('superagent');

(async () => {
  const bot = await request.get(`${process.env.CONSOLE_URL}}/bots/${process.env.BOT_ID}`)
    .set('Accept', 'application/json');
  return bot;
})