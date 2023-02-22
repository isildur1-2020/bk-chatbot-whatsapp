const { userForm } = require("./userForm");
const { addKeyword } = require("@bot-whatsapp/bot");
const { KEYWORDS } = require("../../utils/keywords");
const { captureConfig } = require("../../utils/config");
const { ANSWERS_id, FUNC_id } = require("./answers/id");
const { ANSWERS_actions, FUNC_actions } = require("./answers/actions");
const { ANSWERS_sendData, FUNC_sendData } = require("./answers/sendData");

const buy_actions = addKeyword(KEYWORDS.buy_actions)
  .addAnswer(ANSWERS_id, captureConfig, FUNC_id)
  .addAnswer(ANSWERS_actions, captureConfig, FUNC_actions)
  .addAnswer(ANSWERS_sendData, null, FUNC_sendData(userForm));

module.exports = { buy_actions };
