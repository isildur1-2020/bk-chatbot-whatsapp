const { getUserActionsService } = require("../../../services/getUserActions");
const { userForm } = require("../userForm");

const ANSWERS_actions = [
  "*_¿Cuántas acciones quieres comprar?_*",
  "\n_Escribe cuántas acciones quieres comprar:_\n",
];

const FUNC_actions = async (ctx, { fallBack, flowDynamic, endFlow }) => {
  try {
    const userAnswer = ctx?.body?.trim();
    const regex = new RegExp(/^\d{1,12}$/, "g");
    if (
      userAnswer === null ||
      userAnswer === undefined ||
      !regex.test(userAnswer)
    ) {
      return fallBack();
    }
    const { data } = await getUserActionsService(userForm.id);
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
    userForm.actions = userAnswer;
    await flowDynamic();
  } catch (err) {
    console.log(err);
    return endFlow({
      body: "*❌ Ha ocurrido un error, por favor intenta más tarde.*",
      buttons: [{ body: "⬅️ Menú principal" }],
    });
  }
};

const REGEX_actions = new RegExp(/^\d{1,12}$/, "g");

module.exports = { ANSWERS_actions, FUNC_actions };
