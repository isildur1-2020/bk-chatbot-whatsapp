const { addKeyword } = require("@bot-whatsapp/bot");
const { KEYWORDS } = require("../../utils/keywords");
const { captureConfig, fillFormFunc } = require("../../utils/config");
const { ANSWERS_1 } = require("./answers/first");
const { ANSWERS_2 } = require("./answers/second");
const { buyActionsService } = require("../../services/buyActionsService");

const userForm = {
  id: "",
  actions: "",
};

// =====================================================================
// Enviando al backend
const ANSWERS_3 = ["*_Información enviada con éxito._*"];
const CONFIG_3 = {
  buttons: [{ body: "⬅️ Volver al Inicio" }],
};
const FUNC_3 = async (ctx, { flowDynamic, endFlow }) => {
  buyActionsService(userForm);
  await flowDynamic();
  return endFlow();
};

const buy_actions = addKeyword(KEYWORDS.buy_actions)
  .addAnswer(ANSWERS_1, captureConfig, fillFormFunc(userForm, "id"))
  .addAnswer(ANSWERS_2, captureConfig, fillFormFunc(userForm, "actions"))
  .addAnswer(ANSWERS_3, CONFIG_3, FUNC_3);

module.exports = { buy_actions };
