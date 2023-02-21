// Tipo de documento de identidad: enum
const ANSWERS_1 = [
  "*_Tipo de documento de identidad._*",
  "\n_Selecciona el tipo de documento de identidad:_\n",
];

const OPTIONS_1 = ["Cédula ciudadanía", "Cédula extranjería", "PPT", "Otra"];

const CONFIG_1 = {
  capture: true,
  buttons: OPTIONS_1.map((body) => ({ body })),
};

module.exports = {
  ANSWERS_1,
  CONFIG_1,
  OPTIONS_1,
};
