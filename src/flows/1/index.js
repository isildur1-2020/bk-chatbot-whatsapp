const { addKeyword } = require("@bot-whatsapp/bot");
const {
  simpleFunc,
  captureConfig,
  fillFormFunc,
} = require("../../utils/config");
const { KEYWORDS } = require("../../utils/keywords");
const { ANSWERS_1, CONFIG_1 } = require("./answers/first");
const { ANSWERS_2 } = require("./answers/second");
const { ANSWERS_3 } = require("./answers/third");
const { ANSWERS_4 } = require("./answers/fourth");
const { ANSWERS_5, CONFIG_5 } = require("./answers/fifth");
const { ANSWERS_6, CONFIG_6 } = require("./answers/sixth");
const { ANSWERS_7 } = require("./answers/seventh");
const { ANSWERS_8 } = require("./answers/eighth");
const { ANSWERS_9 } = require("./answers/nineth");
const { ANSWERS_10 } = require("./answers/tenth");
const { ANSWERS_11, CONFIG_11 } = require("./answers/eleventh");
const { ANSWERS_12 } = require("./answers/twelveth");
const { ANSWERS_13 } = require("./answers/thirteenth");
const { ANSWERS_14 } = require("./answers/fourteenth");
const { ANSWERS_15, CONFIG_15 } = require("./answers/fifteenth");
const { registerService } = require("../../services/registerService");

const userForm = {
  action: KEYWORDS.register_as_a_new_partner,
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

// =====================================================================
// Enviando al backend
const ANSWERS_16 = ["*_Nuevo socio registrado exitosamente._*\n"];
const CONFIG_16 = {
  buttons: [{ body: "⬅️ Volver al Inicio" }],
};
const FUNC_16 = async (ctx, { flowDynamic, endFlow }) => {
  registerService(userForm);
  await flowDynamic();
  return endFlow();
};

const register_as_a_new_partner = addKeyword(KEYWORDS.register_as_a_new_partner)
  .addAnswer(ANSWERS_1, CONFIG_1, fillFormFunc(userForm, "typeOfId"))
  .addAnswer(ANSWERS_2, captureConfig, fillFormFunc(userForm, "id"))
  .addAnswer(ANSWERS_3, captureConfig, fillFormFunc(userForm, "name"))
  .addAnswer(ANSWERS_4, captureConfig, fillFormFunc(userForm, "lastname"))
  .addAnswer(ANSWERS_5, CONFIG_5, fillFormFunc(userForm, "gender"))
  .addAnswer(
    ANSWERS_6.year,
    captureConfig,
    fillFormFunc(userForm.dateOfBirth, "year")
  )
  .addAnswer(
    ANSWERS_6.month,
    CONFIG_6.month,
    fillFormFunc(userForm.dateOfBirth, "month")
  )
  .addAnswer(
    ANSWERS_6.day,
    captureConfig,
    fillFormFunc(userForm.dateOfBirth, "day")
  )
  .addAnswer(ANSWERS_7, captureConfig, fillFormFunc(userForm, "email"))
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
