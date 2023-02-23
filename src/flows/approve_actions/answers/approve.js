const { approveActionsService } = require("../../../services/approveActions");

const ANSWERS_approve = ["🌐 *_Aprobando compra de acciones..._*"];

const FUNC_approve = async (ctx, { fallBack, flowDynamic, endFlow }) => {
  try {
    const userAnswer = ctx?.body?.trim();
    const regex = new RegExp(/^\d{1,12}$/, "g");
    const isFieldValid = regex.test(userAnswer);
    if (!userAnswer || !isFieldValid) return fallBack();
    await approveActionsService(userAnswer);
    await flowDynamic({
      body: "\n✅ *_Acciones aprobadas con éxito._* \n",
    });
  } catch (err) {
    console.log(err);
    return endFlow({
      body: "*❌ Ha ocurrido un error, por favor intenta más tarde.*",
      buttons: [{ body: "⬅️ Menú principal" }],
    });
  }
};

module.exports = { ANSWERS_approve, FUNC_approve };
