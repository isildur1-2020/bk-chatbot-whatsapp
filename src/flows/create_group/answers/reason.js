// Género: enum
const ANSWERS_4 = [
  "*_¿Por qué quieres abrir un grupo?_*",
  "\n_Selecciona una opción:_\n",
];

const OPTIONS_4 = [
  "Quiero ahorrar y tener créditos con mis amigos",
  "Soy miembro de una organización y quiero usar el modelo con nuestros beneficiarios",
  "Soy líder comunitario y quiero este beneficio para mi comunidad",
  "Otro",
];

const CONFIG_4 = {
  capture: true,
  buttons: OPTIONS_4.map((body) => ({ body })),
};

module.exports = {
  CONFIG_4,
  ANSWERS_4,
};
