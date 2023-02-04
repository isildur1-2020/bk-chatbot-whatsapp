const ANSWERS_4_1 = [
  "*_¿Qué tipo de negocios?_*",
  "\n_Si es otro, por favor escríbalo:_\n",
];

const OPTIONS_4_1 = ["Comercio", "Pequeña empresa de producción"];

const CONFIG_4_1 = {
  capture: true,
  buttons: OPTIONS_4_1.map((body) => ({ body })),
};

module.exports = {
  ANSWERS_4_1,
  CONFIG_4_1,
};
