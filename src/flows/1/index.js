const {
  captureConfig,
  fillFormFunc,
  regexFormFunc,
  enumFormFunc,
} = require("../../utils/config");
const { bkPath } = require("../../utils/bkPath");
const { addKeyword } = require("@bot-whatsapp/bot");
const { ANSWERS_1, CONFIG_1 } = require("./answers/typeId");
const { ANSWERS_2, REGEX_2 } = require("./answers/id");
const { ANSWERS_3, REGEX_3 } = require("./answers/names");
const { ANSWERS_4, REGEX_4 } = require("./answers/lastname");
const { ANSWERS_5, CONFIG_5, OPTIONS_5 } = require("./answers/gender");
const {
  ANSWERS_6,
  CONFIG_6,
  REGEX_6,
  OPTIONS_6,
} = require("./answers/birthday");
const { ANSWERS_7, REGEX_7 } = require("./answers/email");
const { ANSWERS_8 } = require("./answers/phone");
const { ANSWERS_9 } = require("./answers/state");
const { ANSWERS_10 } = require("./answers/downtown");
const { ANSWERS_11, CONFIG_11 } = require("./answers/escolarity");
const { ANSWERS_12 } = require("./answers/job");
const { ANSWERS_13 } = require("./answers/groupCode");
const { ANSWERS_14 } = require("./answers/groupName");
const { ANSWERS_15, CONFIG_15 } = require("./answers/country");
const { ANSWERS_16, CONFIG_16, FUNC_16 } = require("./answers/sendData");

const userForm = {
  action: bkPath.register_as_a_new_partner,
  groupCode: "",
  groupName: "",
  groupCountry: "",
  state: "",
  town: "",
  typeOfId: "",
  id: "",
  name: "",
  lastname: "",
  phone: "",
  email: "",
  gender: "",
  dateOfBirth: {
    year: "",
    month: "",
    day: "",
  },
  scholarship: "",
  job: "",
};

const register_as_a_new_partner = addKeyword(bkPath.register_as_a_new_partner)
  .addAnswer(ANSWERS_1, CONFIG_1, fillFormFunc(userForm, "typeOfId"))
  .addAnswer(ANSWERS_2, captureConfig, regexFormFunc(REGEX_2, userForm, "id"))
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
    enumFormFunc(OPTIONS_6.month, userForm.dateOfBirth, "month")
  )
  .addAnswer(
    ANSWERS_6.day,
    captureConfig,
    enumFormFunc(OPTIONS_6.day, userForm.dateOfBirth, "day")
  )
  .addAnswer(
    ANSWERS_7,
    captureConfig,
    regexFormFunc(REGEX_7, userForm, "email")
  )
  .addAnswer(ANSWERS_8, captureConfig, fillFormFunc(userForm, "phone"))
  .addAnswer(ANSWERS_9, captureConfig, fillFormFunc(userForm, "state"))
  .addAnswer(ANSWERS_10, captureConfig, fillFormFunc(userForm, "town"))
  .addAnswer(ANSWERS_11, CONFIG_11, fillFormFunc(userForm, "scholarship"))
  .addAnswer(ANSWERS_12, captureConfig, fillFormFunc(userForm, "job"))
  .addAnswer(ANSWERS_13, captureConfig, fillFormFunc(userForm, "groupCode"))
  .addAnswer(ANSWERS_14, captureConfig, fillFormFunc(userForm, "groupName"))
  .addAnswer(ANSWERS_15, CONFIG_15, fillFormFunc(userForm, "groupCountry"))
  .addAnswer(ANSWERS_16, CONFIG_16, FUNC_16);

module.exports = { register_as_a_new_partner };
