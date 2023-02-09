const { addKeyword } = require("@bot-whatsapp/bot");
const { bkPath } = require("../utils/bkPath");

const KEYWORDS_1 = [
  "inicio",
  "menu",
  "menú",
  "Menú principal",
  "ayuda",
  "bot",
  "chatbot",
  "chat",
];

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
  sensitive: true,
  capture: true,
  buttons: OPTIONS_1.map((body) => ({ body })),
};

const mainFlow = addKeyword(KEYWORDS_1).addAnswer(ANSWERS_1, config);

module.exports = mainFlow;
