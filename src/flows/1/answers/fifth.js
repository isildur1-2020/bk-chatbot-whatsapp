// Género: enum
const ANSWERS_5 = ["*_Género._*", "\n_Selecciona tu género:_\n"];

const OPTIONS_5 = ["Femenino", "Masculino", "Otro"];

const CONFIG_5 = {
  capture: true,
  buttons: OPTIONS_5.map((body) => ({ body })),
};

module.exports = {
  ANSWERS_5,
  CONFIG_5,
};
