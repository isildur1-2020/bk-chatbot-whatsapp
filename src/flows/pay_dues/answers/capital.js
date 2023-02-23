const ANSWERS_capital = [
  "*_¿Cuanto vas a pagar de capital?_*",
  "\n_Escribe un monto:_\n",
];

const REGEX_capital = new RegExp(/^\d{1,12}$/, "g");

module.exports = {
  ANSWERS_capital,
  REGEX_capital,
};
