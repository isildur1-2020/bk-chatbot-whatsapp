const ANSWERS_4_3 = [
  "*_¿En qué va a invertir?_*",
  "\n_Si es otro, por favor escríbalo:_\n",
];
const OPTIONS_4_3 = [
  "Electrodoméstico",
  "Mejora de vivienda",
  "Adquisición de muebles",
  "Tecnología",
];
const CONFIG_4_3 = {
  capture: true,
  buttons: OPTIONS_4_3.map((body) => ({ body })),
};

module.exports = {
  ANSWERS_4_3,
  CONFIG_4_3,
  OPTIONS_4_3,
};
