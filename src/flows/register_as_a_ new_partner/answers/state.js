// Estado o departamento: string
const ANSWERS_9 = [
  "*_Estado o departamento._*",
  "\n_Escribe el estado o departamento donde estás ubicado:_\n",
];

const REGEX_9 = new RegExp(/\D{3,40}/, "g");

module.exports = { ANSWERS_9, REGEX_9 };
