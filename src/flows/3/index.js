const { addKeyword } = require("@bot-whatsapp/bot");
const { defaultConfig, defaultFunc, closeFunc } = require("../../utils/config");

const KEYWORDS = ["Solicitar crédito"];

const userForm = {
  id: "",
  money: "",
  months: "",
  purpose: "",
};

// =====================================================================
// Identidad del socio: string
const ANSWERS_1 = [
  "*_Identidad del socio._*",
  "\n_Escribe tu número de documento de identidad:_\n",
];

// =====================================================================
// ¿Cuánto dinero vas a solicitar?: string
const ANSWERS_2 = [
  "*_¿Cuánto dinero vas a solicitar?_*",
  "\n_Escribe cuánto dinero vas a solicitar:_\n",
];

// =====================================================================
// ¿En cuántos meses quieres pagar el crédito?: enum
const ANSWERS_3 = [
  "*_¿En cuántos meses quieres pagar el crédito?_*",
  "\n_Selecciona el número de meses:_\n",
];
const OPTIONS_3 = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
];
const CONFIG_3 = {
  capture: true,
  buttons: OPTIONS_3.map((body) => ({ body })),
};

// =====================================================================
// ¿Para qué usarás el crédito?: enum
const ANSWERS_4 = [
  "*_¿Para qué usarás el crédito?_*",
  "\n_Selecciona una opción:_\n",
];
const OPTIONS_4 = [
  "Inversión en negocios",
  "Pago de deudas con otros",
  "Inversión familiar",
  "Gastos médicos",
  "Inversión agrícola",
];
const CONFIG_4 = {
  capture: true,
  buttons: OPTIONS_4.map((body) => ({ body })),
};

// =====================================================================
// Enviando al backend
const ANSWERS_5 = ["*_Información enviada con éxito._*"];
const CONFIG_5 = {
  buttons: [{ body: "⬅️ Volver al Inicio" }],
};
const FUNC_5 = async (ctx, { flowDynamic, endFlow }) => {
  console.log({ userForm });
  await flowDynamic();
  return endFlow();
};

const apply_for_credit = addKeyword(KEYWORDS)
  .addAnswer(ANSWERS_1, defaultConfig, defaultFunc(userForm, "id"))
  .addAnswer(ANSWERS_2, defaultConfig, defaultFunc(userForm, "money"))
  .addAnswer(ANSWERS_3, CONFIG_3, defaultFunc(userForm, "months"))
  .addAnswer(ANSWERS_4, CONFIG_4, defaultFunc(userForm, "purpose"))
  .addAnswer(ANSWERS_5, CONFIG_5, FUNC_5);

module.exports = { apply_for_credit };
