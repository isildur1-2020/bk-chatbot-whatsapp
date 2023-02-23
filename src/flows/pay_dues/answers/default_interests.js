const ANSWERS_default_interests = [
  "*_¿Cuanto vas a pagar de intereses de mora?_*",
  "\n_Escribe un monto:_\n",
];

const REGEX_default_interests = new RegExp(/^\d{1,12}$/, "g");

module.exports = {
  ANSWERS_default_interests,
  REGEX_default_interests,
};
