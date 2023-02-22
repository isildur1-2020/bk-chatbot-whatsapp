// Género: enum
const ANSWERS_findOut = [
  "*_¿Como te enteraste de nuestro modelo de grupos de ahorro y crédito?_*",
  "\n_Selecciona una opción:_\n",
];

const OPTIONS_findOut = [
  "Una persona me contó sobre estos grupos",
  "Lo vi en las redes sociales",
  "Fui anteriormente miembro de un grupo",
  "Revisé su página web",
  "Otro",
];

const CONFIG_findOut = {
  capture: true,
  buttons: OPTIONS_findOut.map((body) => ({ body })),
};

module.exports = {
  CONFIG_findOut,
  ANSWERS_findOut,
};
