const ANSWERS_id = [
  "*_¿Cuál es tu número de identidad?_*",
  "\n_Escribe tu número de documento de identidad:_\n",
];

const REGEX_id = new RegExp(/^\d{1,12}$/, "g");

module.exports = { ANSWERS_id, REGEX_id };
