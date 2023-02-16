const { getUserCreditService } = require("../../../services/getUserCredit");

const ANSWERS_2 = [
  "*_¿Cuánto dinero vas a solicitar?_*",
  "\n_Escribe cuánto dinero vas a solicitar:_",
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
      const { data } = await getUserCreditService(object?.["id"]);
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
