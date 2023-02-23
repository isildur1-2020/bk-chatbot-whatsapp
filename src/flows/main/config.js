const { bkPath } = require("../../utils/bkPath");

const ANSWERS_main = [
  "*_¡ Bienvenido a nuestro chatbot !_*",
  "\n_Por favor, elige una opción:_\n",
];

const OPTIONS_main = [
  bkPath.register_as_a_new_partner,
  bkPath.buy_actions,
  bkPath.apply_for_credit,
  bkPath.create_group,
  bkPath.pay_dues,
  bkPath.approve_actions,
];

const CONFIG_main = {
  capture: true,
  buttons: OPTIONS_main.map((body) => ({ body })),
};

module.exports = { ANSWERS_main, OPTIONS_main, CONFIG_main };
