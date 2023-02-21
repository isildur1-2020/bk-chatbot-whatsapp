const { addKeyword } = require("@bot-whatsapp/bot");
const { enumFormFunc } = require("../../utils/config");
const { INIT_KEYWORDS } = require("../../utils/keywords");
const { ANSWERS_1, CONFIG_1, OPTIONS_1 } = require("./config");

const mainFlow = addKeyword(INIT_KEYWORDS).addAnswer(
  ANSWERS_1,
  CONFIG_1,
  enumFormFunc(OPTIONS_1)
);

module.exports = mainFlow;
