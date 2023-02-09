// Número de documento de identidad: string
const ANSWERS_2 = [
  "*_Número de documento de identidad._*",
  "\n_Escribe tu número de documento de identidad:_\n",
];

const REGEX_2 = new RegExp(/^\d{5,12}$/, "g");

module.exports = { ANSWERS_2, REGEX_2 };
