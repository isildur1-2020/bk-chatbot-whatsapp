const ANSWERS_1 = [
  "*_¿Cuál es tu número de identidad?_*",
  "\n_Escribe tu número de documento de identidad:_\n",
];

const REGEX_1 = new RegExp(/^\d{1,12}$/, "g");

module.exports = { ANSWERS_1, REGEX_1 };
