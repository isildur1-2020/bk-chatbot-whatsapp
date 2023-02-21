const { userForm } = require("./userForm");
const { bkPath } = require("../../utils/bkPath");
const { addKeyword } = require("@bot-whatsapp/bot");
const { captureConfig, regexFormFunc } = require("../../utils/config");
const { enumFormFunc, fillFormFunc } = require("../../utils/config");
const { ANSWERS_1, CONFIG_1, OPTIONS_1 } = require("./answers/typeId");
const { ANSWERS_2, FUNC_2 } = require("./answers/id");
const { ANSWERS_3, REGEX_3 } = require("./answers/names");
const { ANSWERS_4, REGEX_4 } = require("./answers/lastname");
const { ANSWERS_5, CONFIG_5, OPTIONS_5 } = require("./answers/gender");
const { ANSWERS_6, CONFIG_6, REGEX_6 } = require("./answers/birthday");
const { ANSWERS_7, REGEX_7 } = require("./answers/email");
const { ANSWERS_8, REGEX_8 } = require("./answers/phone");
const { ANSWERS_9, REGEX_9 } = require("./answers/state");
const { ANSWERS_10, REGEX_10 } = require("./answers/downtown");
const { ANSWERS_11, CONFIG_11, OPTIONS_11 } = require("./answers/escolarity");
const { ANSWERS_12, REGEX_12 } = require("./answers/job");
const { ANSWERS_13, CONFIG_13 } = require("./answers/groupCode");
const { ANSWERS_14, CONFIG_14 } = require("./answers/groupName");
const { ANSWERS_15, CONFIG_15, OPTIONS_15 } = require("./answers/country");
const { ANSWERS_16, FUNC_16 } = require("./answers/sendData");

const register_as_a_new_partner = addKeyword(bkPath.register_as_a_new_partner)
  .addAnswer(ANSWERS_1, CONFIG_1, enumFormFunc(OPTIONS_1, userForm, "typeOfId"))
  .addAnswer(ANSWERS_2, captureConfig, FUNC_2)
  .addAnswer(ANSWERS_3, captureConfig, regexFormFunc(REGEX_3, userForm, "name"))
  .addAnswer(
    ANSWERS_4,
    captureConfig,
    regexFormFunc(REGEX_4, userForm, "lastname")
  )
  .addAnswer(ANSWERS_5, CONFIG_5, enumFormFunc(OPTIONS_5, userForm, "gender"))
  .addAnswer(
    ANSWERS_6.year,
    captureConfig,
    regexFormFunc(REGEX_6.year, userForm.dateOfBirth, "year")
  )
  .addAnswer(
    ANSWERS_6.month,
    CONFIG_6.month,
    fillFormFunc(userForm.dateOfBirth, "month")
    // enumFormFunc(OPTIONS_6.month, userForm.dateOfBirth, "month")
  )
  .addAnswer(
    ANSWERS_6.day,
    captureConfig,
    fillFormFunc(userForm.dateOfBirth, "day")
    // enumFormFunc(OPTIONS_6.day, userForm.dateOfBirth, "day")
  )
  .addAnswer(
    ANSWERS_7,
    captureConfig,
    regexFormFunc(REGEX_7, userForm, "email")
  )
  .addAnswer(
    ANSWERS_8,
    captureConfig,
    regexFormFunc(REGEX_8, userForm, "phone")
  )
  .addAnswer(
    ANSWERS_9,
    captureConfig,
    regexFormFunc(REGEX_9, userForm, "state")
  )
  .addAnswer(
    ANSWERS_10,
    captureConfig,
    regexFormFunc(REGEX_10, userForm, "town")
  )
  .addAnswer(
    ANSWERS_11,
    CONFIG_11,
    enumFormFunc(OPTIONS_11, userForm, "scholarship")
  )
  .addAnswer(
    ANSWERS_12,
    captureConfig,
    regexFormFunc(REGEX_12, userForm, "job")
  )
  .addAnswer(
    ANSWERS_13,
    CONFIG_13,
    fillFormFunc(userForm, "groupCode")
    // enumFormFunc(OPTIONS_13, userForm, "groupCode")
  )
  .addAnswer(
    ANSWERS_14,
    CONFIG_14,
    fillFormFunc(userForm, "groupName")
    // enumFormFunc(OPTIONS_14, userForm, "groupName")
  )
  .addAnswer(
    ANSWERS_15,
    CONFIG_15,
    enumFormFunc(OPTIONS_15, userForm, "groupCountry")
  )
  .addAnswer(ANSWERS_16, null, FUNC_16(userForm));

module.exports = { register_as_a_new_partner };
