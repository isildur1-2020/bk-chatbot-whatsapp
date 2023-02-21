const { bkPath } = require("../../utils/bkPath");

const ANSWERS_1 = [
  "*_¡ Bienvenido a nuestro chatbot !_*",
  "\n_Por favor, elige una opción:_\n",
];

const OPTIONS_1 = [
  bkPath.register_as_a_new_partner,
  bkPath.buy_actions,
  bkPath.apply_for_credit,
];

const CONFIG_1 = {
  capture: true,
  buttons: OPTIONS_1.map((body) => ({ body })),
};

module.exports = { ANSWERS_1, OPTIONS_1, CONFIG_1 };
