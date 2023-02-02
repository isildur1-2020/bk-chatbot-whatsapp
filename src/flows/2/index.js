const { addKeyword } = require("@bot-whatsapp/bot");
const { defaultConfig, closeFunc } = require("../../utils/config");

const KEYWORDS = ["Comprar acciones"];

// =====================================================================
// ¿Cuántas acciones quieres comprar?: string
const ANSWERS_1 = [
  "*_¿Cuántas acciones quieres comprar?_*",
  "\n_Escribe cuántas acciones quieres comprar:_\n",
];

const buy_actions = addKeyword(KEYWORDS).addAnswer(
  ANSWERS_1,
  defaultConfig,
  closeFunc
);

module.exports = { buy_actions };
