//Número de teléfono: string
const ANSWERS_phone = [
  "*_Número de teléfono._*",
  "\n_Escribe tu número de teléfono con el código de tu país:_\n",
];

// const REGEX_phone = new RegExp(
//   /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/,
//   "g"
// );

const REGEX_phone = new RegExp(/^\d{5,15}$/, "g");

module.exports = { ANSWERS_phone, REGEX_phone };
