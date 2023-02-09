const { bkPath } = require("../utils/bkPath");
const { addKeyword } = require("@bot-whatsapp/bot");
const { enumFormFunc } = require("../utils/config");
const { INIT_KEYWORDS } = require("../utils/keywords");

const ANSWERS_1 = [
  "*_¡ Bienvenido a nuestro chatbot !_*",
  "\n_Por favor, elige una opción:_\n",
];

const OPTIONS_1 = [
  bkPath.register_as_a_new_partner,
  bkPath.buy_actions,
  bkPath.apply_for_credit,
];

const config = {
  capture: true,
  sensitive: true,
  buttons: OPTIONS_1.map((body) => ({ body })),
};

const mainFlow = addKeyword(INIT_KEYWORDS).addAnswer(
  ANSWERS_1,
  config,
  enumFormFunc(OPTIONS_1)
);

module.exports = mainFlow;
