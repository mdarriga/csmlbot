const core = require('@actions/core');
const github = require('@actions/github');
const { BotService } = require('./bot.service');

(async () => {
  try {
    // Get the JSON webhook payload for the event that triggered the workflow.
    const payload = JSON.stringify(github.context.payload, undefined, 2);
    console.log(payload);
    // Retrieve the params passed through the workflow yml file.
    if (core.getInput('save')) await BotService.saveBot();
    if (core.getInput('build')) await BotService.buildBot();
    if (core.getInput('create_label')) {
      const payload = JSON.stringify(github.context.payload, undefined, 2);
      const tag_name = payload.ref.replace('refs/tags/', '');
      await BotService.createLabel();
    }

  }
  catch (err) {
    core.setFailed(err.message);
  }
})();