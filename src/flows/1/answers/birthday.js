// Fecha de nacimiento: string
const ANSWERS_6 = {
  year: ["*_Año de nacimiento._*", "\n_Escribe tu año de nacimiento:_"],
  month: ["*_Mes de nacimiento._*", "\n_Escribe tu mes de nacimiento:_"],
  day: ["*_Día de nacimiento._*", "\n_Escribe tu día de nacimiento:_"],
};

const DATA_6 = {
  day: [
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
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
  ],
  month: {
    Enero: 1,
    Febrero: 2,
    Marzo: 3,
    Abril: 4,
    Mayo: 5,
    Junio: 6,
    Julio: 7,
    Agosto: 8,
    Septiembre: 9,
    Octubre: 10,
    Noviembre: 11,
    Diciembre: 12,
  },
};

const OPTIONS_6 = {
  month: Object.keys(DATA_6.month),
  day: DATA_6.day,
};

const CONFIG_6 = {
  month: {
    capture: true,
    buttons: OPTIONS_6.month.map((body) => ({ body })),
  },
};

const REGEX_6 = {
  year: new RegExp(/^\d{4}$/, "g"),
};

module.exports = { ANSWERS_6, OPTIONS_6, CONFIG_6, REGEX_6 };
