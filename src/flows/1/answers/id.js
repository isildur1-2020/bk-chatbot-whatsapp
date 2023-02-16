// Número de documento de identidad: string
const {
  getUserExistsService,
} = require("../../../services/getUserExistsService");

const ANSWERS_2 = [
  "*_Número de documento de identidad._*",
  "\n_Escribe tu número de documento de identidad:_\n",
];

const FUNC_2 = (regex, object, keyName) => {
  return async (ctx, { fallBack, flowDynamic, endFlow }) => {
    try {
      const userAnswer = ctx?.body?.trim();
      if (
        userAnswer === null ||
        userAnswer === undefined ||
        !regex.test(userAnswer)
      ) {
        console.log(userAnswer, "Incorrect input (ID)");
        return fallBack();
      }
      const { data } = await getUserExistsService(userAnswer);
      if (data?.isUserExists) {
        return endFlow({
          body: "*❌ Ya existe un usuario con esta identificación.*",
          buttons: [{ body: "⬅️ Menú principal" }],
        });
      }
      object[keyName] = userAnswer;
      await flowDynamic();
    } catch (err) {
      console.log(err);
      return endFlow({
        body: "*❌ Ha ocurrido un error, por favor intenta más tarde.*",
        buttons: [{ body: "⬅️ Menú principal" }],
      });
    }
  };
};

// const REGEX_2 = new RegExp(/^\d{5,12}$/, "g");
const REGEX_2 = new RegExp(/^\d{1,12}$/, "g");

module.exports = { ANSWERS_2, REGEX_2, FUNC_2 };
