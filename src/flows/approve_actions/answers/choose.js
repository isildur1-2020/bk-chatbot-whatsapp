const { userForm } = require("../userForm");
const {
  getUserActionsExists,
} = require("../../../services/getUserActionsExists");

const ANSWERS_choose = [
  "\n✅ *_Escribe el número de identificación que seas aprobar:_* \n",
];

const FUNC_choose = async (ctx, { fallBack, flowDynamic, endFlow }) => {
  try {
    const userAnswer = ctx?.body?.trim();
    const regex = new RegExp(/^\d{1,12}$/, "g");
    const isFieldValid = regex.test(userAnswer);
    if (!userAnswer || !isFieldValid) return fallBack();
    const { data } = await getUserActionsExists(userAnswer);
    if (!data?.isUserExists) {
      // return endFlow({
      //   body: "*❌ No existe un usuario en la lista con esta identificación.*",
      //   buttons: [{ body: "⬅️ Menú principal" }],
      // });
      return fallBack();
    }
    userForm.userId = userAnswer;
    await flowDynamic();
  } catch (err) {
    console.log(err);
    return endFlow({
      body: "*❌ Ha ocurrido un error, por favor intenta más tarde.*",
      buttons: [{ body: "⬅️ Menú principal" }],
    });
  }
};

module.exports = { ANSWERS_choose, FUNC_choose };
