const { userForm } = require("./userForm");
const { addKeyword } = require("@bot-whatsapp/bot");
const { KEYWORDS } = require("../../utils/keywords");
const { captureConfig } = require("../../utils/config");
const { regexFormFunc, fillFormFunc } = require("../../utils/config");
const { ANSWERS_1, REGEX_1 } = require("./answers/id");
const { ANSWERS_2, CONFIG_2 } = require("./answers/country");
const { ANSWERS_3, REGEX_3 } = require("./answers/phone");
const { ANSWERS_4, CONFIG_4 } = require("./answers/reason");
const { ANSWERS_5, CONFIG_5 } = require("./answers/findOut");
const { ANSWERS_6, FUNC_6 } = require("./answers/sendData");

const create_group = addKeyword(KEYWORDS.create_group)
  .addAnswer(ANSWERS_1, captureConfig, regexFormFunc(REGEX_1, userForm, "id"))
  .addAnswer(ANSWERS_2, CONFIG_2, fillFormFunc(userForm, "country"))
  .addAnswer(
    ANSWERS_3,
    captureConfig,
    regexFormFunc(REGEX_3, userForm, "phone")
  )
  .addAnswer(ANSWERS_4, CONFIG_4, fillFormFunc(userForm, "reason"))
  .addAnswer(ANSWERS_5, CONFIG_5, fillFormFunc(userForm, "findOut"))
  .addAnswer(ANSWERS_6, null, FUNC_6(userForm));

module.exports = { create_group };
