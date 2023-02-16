const { addKeyword } = require("@bot-whatsapp/bot");
const { KEYWORDS } = require("../../utils/keywords");
const { captureConfig } = require("../../utils/config");
const { ANSWERS_1, FUNC_1, REGEX_1 } = require("./answers/first");
const { ANSWERS_2, FUNC_2, REGEX_2 } = require("./answers/second");
const { ANSWERS_3, FUNC_3 } = require("./answers/sendData");

const userForm = {
  id: "",
  actions: "",
};

const buy_actions = addKeyword(KEYWORDS.buy_actions)
  .addAnswer(ANSWERS_1, captureConfig, FUNC_1(REGEX_1, userForm, "id"))
  .addAnswer(ANSWERS_2, captureConfig, FUNC_2(REGEX_2, userForm, "actions"))
  .addAnswer(ANSWERS_3, null, FUNC_3(userForm));

module.exports = { buy_actions };
