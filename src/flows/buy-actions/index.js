const { userForm } = require("./userForm");
const { addKeyword } = require("@bot-whatsapp/bot");
const { KEYWORDS } = require("../../utils/keywords");
const { captureConfig } = require("../../utils/config");
const { ANSWERS_1, FUNC_1 } = require("./answers/id");
const { ANSWERS_2, FUNC_2, REGEX_2 } = require("./answers/actions");
const { ANSWERS_3, FUNC_3 } = require("./answers/sendData");

const buy_actions = addKeyword(KEYWORDS.buy_actions)
  .addAnswer(ANSWERS_1, captureConfig, FUNC_1)
  .addAnswer(ANSWERS_2, captureConfig, FUNC_2(REGEX_2, userForm, "actions"))
  .addAnswer(ANSWERS_3, null, FUNC_3(userForm));

module.exports = { buy_actions };
