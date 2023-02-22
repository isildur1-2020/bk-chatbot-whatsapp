// =====================================================================
// ¿En cuántos meses quieres pagar el crédito?: enum
const ANSWERS_months = [
  "*_¿En cuántos meses quieres pagar el crédito?_*",
  "\n_Selecciona el número de cuotas:_\n",
];

const OPTIONS_months = [
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

const CONFIG_months = {
  capture: true,
  buttons: OPTIONS_months.map((body) => ({ body })),
};

module.exports = {
  ANSWERS_months,
  CONFIG_months,
  OPTIONS_months,
};
