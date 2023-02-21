// País del grupo: string
const ANSWERS_15 = [
  "*_País del grupo._*",
  "\n_Selecciona el país del grupo:_\n",
];

const OPTIONS_15 = ["Colombia", "Argentina", "Otro"];

const CONFIG_15 = {
  capture: true,
  buttons: OPTIONS_15.map((body) => ({ body })),
};

module.exports = {
  ANSWERS_15,
  CONFIG_15,
  OPTIONS_15,
};
