const { addKeyword } = require("@bot-whatsapp/bot");
const { enumFormFunc } = require("../../utils/config");
const { INIT_KEYWORDS } = require("../../utils/keywords");
const { ANSWERS_main, CONFIG_main, OPTIONS_main } = require("./config");

const mainFlow = addKeyword(INIT_KEYWORDS).addAnswer(
  ANSWERS_main,
  CONFIG_main,
  enumFormFunc(OPTIONS_main)
);

module.exports = mainFlow;
