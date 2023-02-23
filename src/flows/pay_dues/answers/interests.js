const ANSWERS_interests = [
  "*_¿Cuanto vas a pagar de intereses ordinarios?_*",
  "\n_Escribe un monto:_\n",
];

const REGEX_interests = new RegExp(/^\d{1,12}$/, "g");

module.exports = {
  ANSWERS_interests,
  REGEX_interests,
};
