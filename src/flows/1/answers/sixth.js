// Fecha de nacimiento: string
const ANSWERS_6 = {
  year: ["*_Año de nacimiento._*", "\n_Escribe tu año de nacimiento:_"],
  month: ["*_Mes de nacimiento._*", "\n_Escribe tu mes de nacimiento:_"],
  day: ["*_Día de nacimiento._*", "\n_Escribe tu día de nacimiento:_"],
};

const DATA_6 = {
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
};

const CONFIG_6 = {
  month: {
    capture: true,
    buttons: OPTIONS_6.month.map((body) => ({ body })),
  },
};

module.exports = { ANSWERS_6, CONFIG_6 };
