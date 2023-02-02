const { addKeyword } = require("@bot-whatsapp/bot");
const { defaultConfig, defaultFunc } = require("../../utils/config");

const KEYWORDS = ["Comprar acciones"];

const userForm = {
  id: "",
  actions: "",
};

// =====================================================================
// Identidad del socio: string
const ANSWERS_1 = [
  "*_Identidad del socio._*",
  "\n_Escribe tu número de documento de identidad:_\n",
];

// =====================================================================
// ¿Cuántas acciones quieres comprar?: string
const ANSWERS_2 = [
  "*_¿Cuántas acciones quieres comprar?_*",
  "\n_Escribe cuántas acciones quieres comprar:_\n",
];

// =====================================================================
// Enviando al backend
const ANSWERS_3 = ["*_Información enviada con éxito._*"];
const CONFIG_3 = {
  buttons: [{ body: "⬅️ Volver al Inicio" }],
};
const FUNC_3 = async (ctx, { flowDynamic, endFlow }) => {
  console.log({ userForm });
  await flowDynamic();
  return endFlow();
};

const buy_actions = addKeyword(KEYWORDS)
  .addAnswer(ANSWERS_1, defaultConfig, defaultFunc(userForm, "id"))
  .addAnswer(ANSWERS_2, defaultConfig, defaultFunc(userForm, "actions"))
  .addAnswer(ANSWERS_3, CONFIG_3, FUNC_3);

module.exports = { buy_actions };
