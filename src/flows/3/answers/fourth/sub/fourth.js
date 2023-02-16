const ANSWERS_4_4 = [
  "*_¿Qué tipo de gasto médico?_*",
  "\n_Si es otro, por favor escríbalo:_\n",
];

const OPTIONS_4_4 = [
  "Compra de medicinas",
  "Exámenes de laboratorio",
  "Citas médicas",
];

const CONFIG_4_4 = {
  capture: true,
  buttons: OPTIONS_4_4.map((body) => ({ body })),
};

module.exports = {
  ANSWERS_4_4,
  CONFIG_4_4,
  OPTIONS_4_4,
};
