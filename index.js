const core = require('@actions/core');
const github = require('@actions/github');
const { BotService } = require('./bot.service');

try {
  // Get the JSON webhook payload for the event that triggered the workflow.
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(payload);
  // Retrieve the params passed through the workflow yml file.
  if (core.getInput('save')) BotService.saveBot();
  if (core.getInput('build')) BotService.buildBot();

}
catch (err) {
  core.setFailed(err.message);
}