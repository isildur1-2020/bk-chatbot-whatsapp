// Género: enum
const ANSWERS_5 = [
  "*_¿Como te enteraste de nuestro modelo de grupos de ahorro y crédito?_*",
  "\n_Selecciona una opción:_\n",
];

const OPTIONS_5 = [
  "Una persona me contó sobre estos grupos",
  "Lo vi en las redes sociales",
  "Fui anteriormente miembro de un grupo",
  "Revisé su paágina web",
  "Otro",
];

const CONFIG_5 = {
  capture: true,
  buttons: OPTIONS_5.map((body) => ({ body })),
};

module.exports = {
  CONFIG_5,
  ANSWERS_5,
};
