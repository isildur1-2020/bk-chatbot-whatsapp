const ANSWERS_4_5 = [
  "*_¿Qué tipo de inversión agrícola?_*",
  "\n_Si es otro, por favor escríbalo:_\n",
];

const OPTIONS_4_5 = [
  "Compra de semilla",
  "Compra de fertilizantes",
  "Compra de insecticidas",
  "Pago de labores",
];

const CONFIG_4_5 = {
  capture: true,
  buttons: OPTIONS_4_5.map((body) => ({ body })),
};

module.exports = {
  ANSWERS_4_5,
  CONFIG_4_5,
};
