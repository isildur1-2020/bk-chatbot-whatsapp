// Municipio: string
const ANSWERS_10 = [
  "*_Municipio._*",
  "\n_Escribe el municipio donde estás ubicado:_\n",
];

const REGEX_10 = new RegExp(/\D{3,40}/, "g");

module.exports = { ANSWERS_10, REGEX_10 };
