//Número de teléfono: string
const ANSWERS_8 = [
  "*_Número de teléfono._*",
  "\n_Escribe tu número de teléfono:_\n",
];

// const REGEX_8 = new RegExp(
//   /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/,
//   "g"
// );

const REGEX_8 = new RegExp(/^\d{5,15}$/, "g");

module.exports = { ANSWERS_8, REGEX_8 };
