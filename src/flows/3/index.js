const { addKeyword } = require("@bot-whatsapp/bot");
const { KEYWORDS } = require("../../utils/keywords");
const { ANSWERS_1, FUNC_1, REGEX_1 } = require("./answers/first");
const { ANSWERS_2, FUNC_2, REGEX_2 } = require("./answers/second");
const { ANSWERS_3, CONFIG_3, OPTIONS_3 } = require("./answers/third");
const { ANSWERS_4, CONFIG_4, OPTIONS_4 } = require("./answers/fourth");
const {
  ANSWERS_4_1,
  CONFIG_4_1,
  OPTIONS_4_1,
} = require("./answers/fourth/sub/first");
const {
  ANSWERS_4_2,
  CONFIG_4_2,
  OPTIONS_4_2,
} = require("./answers/fourth/sub/second");
const {
  ANSWERS_4_3,
  CONFIG_4_3,
  OPTIONS_4_3,
} = require("./answers/fourth/sub/third");
const {
  ANSWERS_4_4,
  CONFIG_4_4,
  OPTIONS_4_4,
} = require("./answers/fourth/sub/fourth");
const {
  ANSWERS_4_5,
  CONFIG_4_5,
  OPTIONS_4_5,
} = require("./answers/fourth/sub/fifth");
const { captureConfig, enumFormFunc } = require("../../utils/config");
const {
  applyForCreditService,
} = require("../../services/applyForCreditService");

const userForm = {
  id: "",
  money: "",
  months: "",
  purpose: "",
  toUseTheCredit: "",
};

const customFunc = (options, object, keyName) => {
  return async (ctx, { fallBack, endFlow }) => {
    try {
      const userAnswer = ctx?.body?.trim();
      if (
        userAnswer === null ||
        userAnswer === undefined ||
        !options.some((opt) => opt === userAnswer)
      ) {
        return fallBack();
      }
      if (object !== undefined) object[keyName] = userAnswer;
      const { err } = await applyForCreditService(userForm);
      if (err) {
        return endFlow({
          body: "*❌ Ha ocurrido un error, por favor intenta más tarde.*",
          buttons: [{ body: "⬅️ Menú principal" }],
        });
      }
      return endFlow({
        body: "✅ *Crédito solicitado exitosamente.*",
        buttons: [{ body: "⬅️ Menú principal" }],
      });
    } catch (err) {
      console.log(err);
      return endFlow({
        body: "*❌ Ha ocurrido un error, por favor intenta más tarde.*",
        buttons: [{ body: "⬅️ Menú principal" }],
      });
    }
  };
};

const businessInvestment = addKeyword("Inversión en negocios").addAnswer(
  ANSWERS_4_1,
  CONFIG_4_1,
  customFunc(OPTIONS_4_1, userForm, "purpose")
);

const bebtPayment = addKeyword("Pago de deudas con otros").addAnswer(
  ANSWERS_4_2,
  CONFIG_4_2,
  customFunc(OPTIONS_4_2, userForm, "purpose")
);

const familyInvestment = addKeyword("Inversión familiar").addAnswer(
  ANSWERS_4_3,
  CONFIG_4_3,
  customFunc(OPTIONS_4_3, userForm, "purpose")
);

const medicalExpenses = addKeyword("Gastos médicos").addAnswer(
  ANSWERS_4_4,
  CONFIG_4_4,
  customFunc(OPTIONS_4_4, userForm, "purpose")
);

const agriculturalInvestment = addKeyword("Inversión agrícola").addAnswer(
  ANSWERS_4_5,
  CONFIG_4_5,
  customFunc(OPTIONS_4_5, userForm, "purpose")
);

const apply_for_credit = addKeyword(KEYWORDS.apply_for_credit)
  .addAnswer(ANSWERS_1, captureConfig, FUNC_1(REGEX_1, userForm, "id"))
  .addAnswer(ANSWERS_2, captureConfig, FUNC_2(REGEX_2, userForm, "money"))
  .addAnswer(ANSWERS_3, CONFIG_3, enumFormFunc(OPTIONS_3, userForm, "months"))
  .addAnswer(
    ANSWERS_4,
    CONFIG_4,
    enumFormFunc(OPTIONS_4, userForm, "toUseTheCredit"),
    [
      businessInvestment,
      bebtPayment,
      familyInvestment,
      medicalExpenses,
      agriculturalInvestment,
    ]
  );

module.exports = { apply_for_credit };
