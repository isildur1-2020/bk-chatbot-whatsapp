const { getUserCreditService } = require("../../../services/getUserCredit");
const { userForm } = require("../userForm");

const ANSWERS_money = [
  "*_¿Cuánto dinero vas a solicitar?_*",
  "\n_Escribe cuánto dinero vas a solicitar:_",
];

const FUNC_money = async (ctx, { fallBack, flowDynamic, endFlow }) => {
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
    const { data } = await getUserCreditService(userForm.id);
    const { err, quantityOfCredit } = data;
    console.log(quantityOfCredit);
    if (err) {
      return endFlow({
        body: "*❌ Ha ocurrido un error, por favor intenta más tarde.*",
        buttons: [{ body: "⬅️ Menú principal" }],
      });
    }
    const quantityNumber = +quantityOfCredit.split(" ")[1].replace(",", "");
    console.log({ quantityNumber });
    if (+userAnswer > quantityNumber) {
      return endFlow({
        body: `*❌ Este usuario puede pedir hasta ${quantityOfCredit} en crédito.*`,
        buttons: [{ body: "⬅️ Menú principal" }],
      });
    }
    userForm.money = userAnswer;
    await flowDynamic();
  } catch (err) {
    console.log(err);
    return endFlow({
      body: "*❌ Ha ocurrido un error, por favor intenta más tarde.*",
      buttons: [{ body: "⬅️ Menú principal" }],
    });
  }
};

module.exports = { ANSWERS_money, FUNC_money };
