// =====================================================================
// ¿Para qué usarás el crédito?: enum
const ANSWERS_4 = [
  "*_¿Para qué usarás el crédito?_*",
  "\n_Selecciona una opción:_\n",
];
const OPTIONS_4 = [
  "Inversión en negocios",
  "Pago de deudas con otros",
  "Inversión familiar",
  "Gastos médicos",
  "Inversión agrícola",
];
const CONFIG_4 = {
  capture: true,
  buttons: OPTIONS_4.map((body) => ({ body })),
};

module.exports = {
  ANSWERS_4,
  CONFIG_4,
  OPTIONS_4,
};
