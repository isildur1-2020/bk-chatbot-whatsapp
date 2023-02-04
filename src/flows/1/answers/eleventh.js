// Escolaridad: enum
const ANSWERS_11 = [
  "*_Escolaridad._*",
  "\n_Selecciona tu nivel de estudios:_\n",
];

const OPTIONS_11 = ["Primaria", "Secundaria", "Universidad"];

const CONFIG_11 = {
  capture: true,
  buttons: OPTIONS_11.map((body) => ({ body })),
};

module.exports = { ANSWERS_11, CONFIG_11 };
