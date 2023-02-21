// País del grupo: string
const ANSWERS_2 = [
  "*_¿En qué país vives?_*",
  "\n_Selecciona el país tu país:_\n",
];
const OPTIONS_2 = ["Colombia", "Argentina", "Otro"];

const CONFIG_2 = {
  capture: true,
  buttons: OPTIONS_2.map((body) => ({ body })),
};

module.exports = {
  ANSWERS_2,
  CONFIG_2,
};
