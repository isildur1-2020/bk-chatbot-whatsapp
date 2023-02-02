const { addKeyword } = require("@bot-whatsapp/bot");
const { defaultConfig, defaultFunc } = require("../../utils/config");

const KEYWORDS = ["Registrarme como nuevo socio"];

const userForm = {
  typeOfId: "",
  id: "",
  name: "",
  lastname: "",
  gender: "",
  dateOfBirth: "",
  email: "",
  phone: "",
  state: "",
  town: "",
  scholarship: "",
  job: "",
  groupCode: "",
  groupName: "",
  groupCountry: "",
};

// =====================================================================
// Tipo de documento de identidad: enum
const ANSWERS_1 = [
  "*_Tipo de documento de identidad._*",
  "\n_Selecciona el tipo de documento de identidad:_\n",
];
const OPTIONS_1 = [
  "Cédula de ciudadanía",
  "Cédula de extranjería",
  "PPT",
  "Otra",
];
const CONFIG_1 = {
  capture: true,
  buttons: OPTIONS_1.map((body) => ({ body })),
};

// =====================================================================
// Número de documento de identidad: string
const ANSWERS_2 = [
  "*_Número de documento de identidad._*",
  "\n_Escribe tu número de documento de identidad:_\n",
];

// =====================================================================
// Nombres del nuevo socio: string
const ANSWERS_3 = [
  "*_Nombres del nuevo socio._*",
  "\n_Escribe tus nombres:_\n",
];

// =====================================================================
// Apellidos del nuevo socio: string
const ANSWERS_4 = [
  "*_Apellidos del nuevo socio._*",
  "\n_Escribe tus apellidos:_\n",
];

// =====================================================================
// Género: enum
const ANSWERS_5 = ["*_Género._*", "\n_Selecciona tu género:_\n"];
const OPTIONS_5 = ["Femenino", "Masculino", "Otro"];
const CONFIG_5 = {
  capture: true,
  buttons: OPTIONS_5.map((body) => ({ body })),
};

// =====================================================================
// Fecha de nacimiento: string
const ANSWERS_6 = [
  "*_Fecha de nacimiento._*",
  "\n_Escribe tu fecha de nacimiento (dd/mm/aaaa)_",
  "Por ejemplo 08/11/1999:\n",
];

// =====================================================================
// Correo electrónico: string
const ANSWERS_7 = [
  "*_Correo electrónico._*",
  "\n_Escribe tu correo electrónico:_\n",
];

// =====================================================================
//Número de teléfono: string
const ANSWERS_8 = [
  "*_Número de teléfono._*",
  "\n_Escribe tu número de teléfono:_\n",
];

// =====================================================================
// Estado o departamento: string
const ANSWERS_9 = [
  "*_Estado o departamento._*",
  "\n_Escribe el estado o departamento donde estás ubicado:_\n",
];

// =====================================================================
// Municipio: string
const ANSWERS_10 = [
  "*_Municipio._*",
  "\n_Escribe el municipio donde estás ubicado:_\n",
];

// =====================================================================
// Escolaridad: enum
const ANSWERS_11 = [
  "*_Escolaridad._*",
  "\n_Selecciona tu nivel de estudios:_\n",
];
const OPTIONS_11 = ["Primaria", "Secundaria", "Universidad"];
const CONFIG_11 = {
  capture: true,
  buttons: OPTIONS_11.map((body) => ({ body })),
};

// =====================================================================
// Oficio: string
const ANSWERS_12 = ["*_Oficio._*", "\n_Escribe tu oficio actual:_\n"];

// =====================================================================
// Código del grupo: string
const ANSWERS_13 = [
  "*_Codigo del grupo._*",
  "\n_(Debes solicitar el código al administrador)_",
  "_Escribe el código del grupo:_\n",
];

// =====================================================================
// Nombre del grupo: string
const ANSWERS_14 = [
  "*_Nombre del grupo._*",
  "\n_(Debes solicitar el nombre al administrador)_",
  "\n_Escribe el nombre del grupo:_",
];

// =====================================================================
// País del grupo: string
const ANSWERS_15 = [
  "*_País del grupo._*",
  "\n_Selecciona el país del grupo:_\n",
];
const OPTIONS_15 = ["Colombia", "Argentina"];
const CONFIG_15 = {
  capture: true,
  buttons: OPTIONS_15.map((body) => ({ body })),
};

// =====================================================================
// Enviando al backend
const ANSWERS_16 = ["*_Información enviada con éxito._*"];
const CONFIG_16 = {
  buttons: [{ body: "⬅️ Volver al Inicio" }],
};
const FUNC_16 = async (ctx, { flowDynamic, endFlow }) => {
  console.log({ userForm });
  await flowDynamic();
  return endFlow();
};

const register_as_a_new_partner = addKeyword(KEYWORDS)
  .addAnswer(ANSWERS_1, CONFIG_1, defaultFunc(userForm, "typeOfId"))
  .addAnswer(ANSWERS_2, defaultConfig, defaultFunc(userForm, "id"))
  .addAnswer(ANSWERS_3, defaultConfig, defaultFunc(userForm, "name"))
  .addAnswer(ANSWERS_4, defaultConfig, defaultFunc(userForm, "lastname"))
  .addAnswer(ANSWERS_5, CONFIG_5, defaultFunc(userForm, "gender"))
  .addAnswer(ANSWERS_6, defaultConfig, defaultFunc(userForm, "dateOfBirth"))
  .addAnswer(ANSWERS_7, defaultConfig, defaultFunc(userForm, "email"))
  .addAnswer(ANSWERS_8, defaultConfig, defaultFunc(userForm, "phone"))
  .addAnswer(ANSWERS_9, defaultConfig, defaultFunc(userForm, "state"))
  .addAnswer(ANSWERS_10, defaultConfig, defaultFunc(userForm, "town"))
  .addAnswer(ANSWERS_11, CONFIG_11, defaultFunc(userForm, "scholarship"))
  .addAnswer(ANSWERS_12, defaultConfig, defaultFunc(userForm, "job"))
  .addAnswer(ANSWERS_13, defaultConfig, defaultFunc(userForm, "groupCode"))
  .addAnswer(ANSWERS_14, defaultConfig, defaultFunc(userForm, "groupName"))
  .addAnswer(ANSWERS_15, CONFIG_15, defaultFunc(userForm, "groupCountry"))
  .addAnswer(ANSWERS_16, CONFIG_16, FUNC_16);

module.exports = { register_as_a_new_partner };
