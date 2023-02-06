const { addKeyword } = require("@bot-whatsapp/bot");
const { KEYWORDS } = require("../../utils/keywords");
const { ANSWERS_1 } = require("./answers/first");
const { ANSWERS_2 } = require("./answers/second");
const { ANSWERS_3, CONFIG_3 } = require("./answers/third");
const { ANSWERS_4, CONFIG_4 } = require("./answers/fourth");
const { ANSWERS_4_1, CONFIG_4_1 } = require("./answers/fourth/sub/first");
const { ANSWERS_4_2, CONFIG_4_2 } = require("./answers/fourth/sub/second");
const { ANSWERS_4_3, CONFIG_4_3 } = require("./answers/fourth/sub/third");
const { ANSWERS_4_4, CONFIG_4_4 } = require("./answers/fourth/sub/fourth");
const { ANSWERS_4_5, CONFIG_4_5 } = require("./answers/fourth/sub/fifth");
const {
  captureConfig,
  simpleFunc,
  fillFormFunc,
} = require("../../utils/config");
const {
  applyForCreditService,
} = require("../../services/applyForCreditService");

const userForm = {
  id: "",
  money: "",
  months: "",
  purpose: "",
};

const customFunc =
  (object, keyName) =>
  async (ctx, { flowDynamic, endFlow }) => {
    object[keyName] = ctx.body;
    applyForCreditService(userForm);
    await flowDynamic([
      {
        body: "_*Crédito solicitado exitosamente.*_",
      },
    ]);
    return endFlow();
  };

const businessInvestment = addKeyword("Inversión en negocios").addAnswer(
  ANSWERS_4_1,
  CONFIG_4_1,
  customFunc(userForm, "purpose")
);

const bebtPayment = addKeyword("Pago de deudas con otros").addAnswer(
  ANSWERS_4_2,
  CONFIG_4_2,
  customFunc(userForm, "purpose")
);

const familyInvestment = addKeyword("Inversión familiar").addAnswer(
  ANSWERS_4_3,
  CONFIG_4_3,
  customFunc(userForm, "purpose")
);

const medicalExpenses = addKeyword("Gastos médicos").addAnswer(
  ANSWERS_4_4,
  CONFIG_4_4,
  customFunc(userForm, "purpose")
);

const agriculturalInvestment = addKeyword("Inversión agrícola").addAnswer(
  ANSWERS_4_5,
  CONFIG_4_5,
  customFunc(userForm, "purpose")
);

const apply_for_credit = addKeyword(KEYWORDS.apply_for_credit)
  .addAnswer(ANSWERS_1, captureConfig, fillFormFunc(userForm, "id"))
  .addAnswer(ANSWERS_2, captureConfig, fillFormFunc(userForm, "money"))
  .addAnswer(ANSWERS_3, CONFIG_3, fillFormFunc(userForm, "months"))
  .addAnswer(ANSWERS_4, CONFIG_4, simpleFunc, [
    businessInvestment,
    bebtPayment,
    familyInvestment,
    medicalExpenses,
    agriculturalInvestment,
  ])
  .addAnswer(ANSWERS_1, captureConfig, fillFormFunc(userForm, "id"));

module.exports = { apply_for_credit };
