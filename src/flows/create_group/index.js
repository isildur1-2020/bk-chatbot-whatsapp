const { userForm } = require("./userForm");
const { addKeyword } = require("@bot-whatsapp/bot");
const { KEYWORDS } = require("../../utils/keywords");
const { captureConfig } = require("../../utils/config");
const { regexFormFunc, fillFormFunc } = require("../../utils/config");
const { ANSWERS_id, REGEX_id } = require("./answers/id");
const { ANSWERS_name } = require("./answers/name");
const { ANSWERS_phone, REGEX_phone } = require("./answers/phone");
const { ANSWERS_country, CONFIG_country } = require("./answers/country");
const { ANSWERS_reason, CONFIG_reason } = require("./answers/reason");
const { ANSWERS_findOut, CONFIG_findOut } = require("./answers/findOut");
const { ANSWERS_sendData, FUNC_sendData } = require("./answers/sendData");

const create_group = addKeyword(KEYWORDS.create_group)
  .addAnswer(ANSWERS_id, captureConfig, regexFormFunc(REGEX_id, userForm, "id"))
  .addAnswer(ANSWERS_name, captureConfig, fillFormFunc(userForm, "name"))
  .addAnswer(
    ANSWERS_phone,
    captureConfig,
    regexFormFunc(REGEX_phone, userForm, "phone")
  )
  .addAnswer(ANSWERS_country, CONFIG_country, fillFormFunc(userForm, "country"))
  .addAnswer(ANSWERS_reason, CONFIG_reason, fillFormFunc(userForm, "reason"))
  .addAnswer(ANSWERS_findOut, CONFIG_findOut, fillFormFunc(userForm, "findOut"))
  .addAnswer(ANSWERS_sendData, null, FUNC_sendData(userForm));

module.exports = { create_group };
