// Nombre del grupo: string
const ANSWERS_14 = [
  "*_Nombre del grupo._*",
  "\n_(Debes solicitar el nombre al administrador)_",
  "\n_Escribe el nombre del grupo:_",
];

const OPTIONS_14 = ["Nombre 1", "Nombre 2", "Nombre 3"];

const CONFIG_14 = {
  capture: true,
  buttons: OPTIONS_14.map((body) => ({ body })),
};

module.exports = { ANSWERS_14, OPTIONS_14, CONFIG_14 };
