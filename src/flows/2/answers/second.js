const { getUserActionsService } = require("../../../services/getUserActions");

const ANSWERS_2 = [
  "*_¿Cuántas acciones quieres comprar?_*",
  "\n_Escribe cuántas acciones quieres comprar:_\n",
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
        return fallBack();
      }
      const { data } = await getUserActionsService(object?.["id"]);
      const { err, quantityOfActions } = data;
      if (err) {
        return endFlow({
          body: "*❌ Ha ocurrido un error, por favor intenta más tarde.*",
          buttons: [{ body: "⬅️ Menú principal" }],
        });
      }
      if (+userAnswer > +quantityOfActions) {
        return endFlow({
          body: `*❌ Este usuario puede comprar ${quantityOfActions} hasta acciones.*`,
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

const REGEX_2 = new RegExp(/^\d{1,12}$/, "g");

module.exports = { ANSWERS_2, FUNC_2, REGEX_2 };
