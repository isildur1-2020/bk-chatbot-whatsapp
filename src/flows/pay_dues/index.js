const { userForm } = require("./userForm");
const { addKeyword } = require("@bot-whatsapp/bot");
const { KEYWORDS } = require("../../utils/keywords");
const { captureConfig, regexFormFunc } = require("../../utils/config");
const { ANSWERS_id, FUNC_id } = require("./answers/id");
const { ANSWERS_capital, REGEX_capital } = require("./answers/capital");
const { ANSWERS_interests, REGEX_interests } = require("./answers/interests");
const {
  ANSWERS_default_interests,
  REGEX_default_interests,
} = require("./answers/default_interests");

const pay_dues = addKeyword(KEYWORDS.pay_dues)
  .addAnswer(ANSWERS_id, captureConfig, FUNC_id)
  .addAnswer(
    ANSWERS_capital,
    captureConfig,
    regexFormFunc(REGEX_capital, userForm, "capital")
  )
  .addAnswer(
    ANSWERS_interests,
    captureConfig,
    regexFormFunc(REGEX_interests, userForm, "interests")
  )
  .addAnswer(
    ANSWERS_default_interests,
    captureConfig,
    regexFormFunc(REGEX_default_interests, userForm, "default_interests")
  );

module.exports = { pay_dues };
