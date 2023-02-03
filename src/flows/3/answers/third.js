// =====================================================================
// ¿En cuántos meses quieres pagar el crédito?: enum
const ANSWERS_3 = [
  "*_¿En cuántos meses quieres pagar el crédito?_*",
  "\n_Selecciona el número de cuotas:_\n",
];
const OPTIONS_3 = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
];
const CONFIG_3 = {
  capture: true,
  buttons: OPTIONS_3.map((body) => ({ body })),
};

module.exports = {
  ANSWERS_3,
  CONFIG_3,
};
