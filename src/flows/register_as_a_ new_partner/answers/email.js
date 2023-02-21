// Correo electrónico: string
const ANSWERS_7 = [
  "*_Correo electrónico._*",
  "\n_Escribe tu correo electrónico:_\n",
];

const REGEX_7 = new RegExp(
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
  "g"
);

module.exports = { ANSWERS_7, REGEX_7 };
