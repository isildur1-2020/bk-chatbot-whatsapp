const ANSWERS_4_2 = [
  "*_¿A quién va a pagar?_*",
  "\n_Si es otro, por favor escríbalo:_\n",
];

const OPTIONS_4_2 = ["Prestamista", "Banco", "Familiar"];

const CONFIG_4_2 = {
  capture: true,
  buttons: OPTIONS_4_2.map((body) => ({ body })),
};

module.exports = {
  ANSWERS_4_2,
  CONFIG_4_2,
};
