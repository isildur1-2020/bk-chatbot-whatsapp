// País del grupo: string
const ANSWERS_country = [
  "*_¿En qué país vives?_*",
  "\n_Selecciona el país tu país:_\n",
];
const OPTIONS_country = ["Colombia", "Argentina", "Otro"];

const CONFIG_country = {
  capture: true,
  buttons: OPTIONS_country.map((body) => ({ body })),
};

module.exports = {
  ANSWERS_country,
  CONFIG_country,
};
