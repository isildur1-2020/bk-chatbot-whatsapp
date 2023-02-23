const ANSWERS_reason = [
  "*_¿Por qué quieres abrir un grupo?_*",
  "\n_Selecciona una opción:_\n",
];

const OPTIONS_reason = [
  "Quiero ahorrar y tener créditos con mis amigos",
  "Soy miembro de una organización social",
  "Soy líder comunitario",
  "Otro",
];

const CONFIG_reason = {
  capture: true,
  buttons: OPTIONS_reason.map((body) => ({ body })),
};

module.exports = {
  CONFIG_reason,
  ANSWERS_reason,
};
