const { addKeyword } = require("@bot-whatsapp/bot");
const { defaultConfig, defaultFunc, closeFunc } = require("../../utils/config");

const KEYWORDS = ["Solicitar crédito"];

// =====================================================================
// ¿Cuánto dinero vas a solicitar?: string
const ANSWERS_1 = [
  "*_¿Cuánto dinero vas a solicitar?_*",
  "\n_Escribe cuánto dinero vas a solicitar:_\n",
];

// =====================================================================
// ¿En cuántos meses quieres pagar el crédito?: enum
const ANSWERS_2 = [
  "*_¿En cuántos meses quieres pagar el crédito?_*",
  "\n_Selecciona el número de meses:_\n",
];
const OPTIONS_2 = [
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
const CONFIG_2 = {
  capture: true,
  buttons: OPTIONS_2.map((body) => ({ body })),
};

// =====================================================================
// ¿Para qué usarás el crédito?: enum
const ANSWERS_3 = [
  "*_¿Para qué usarás el crédito?_*",
  "\n_Selecciona una opción:_\n",
];
const OPTIONS_3 = [
  "Inversión en negocios",
  "Pago de deudas con otros",
  "Inversión familiar",
  "Gastos médicos",
  "Inversión agrícola",
];
const CONFIG_3 = {
  capture: true,
  buttons: OPTIONS_3.map((body) => ({ body })),
};

const apply_for_credit = addKeyword(KEYWORDS)
  .addAnswer(ANSWERS_1, defaultConfig, defaultFunc)
  .addAnswer(ANSWERS_2, CONFIG_2, defaultFunc)
  .addAnswer(ANSWERS_3, CONFIG_3, closeFunc);

module.exports = { apply_for_credit };
