const { userForm } = require("../userForm");
const { getAdminExistsService } = require("../../../services/getAdminExists");

const ANSWERS_id = [
  "*_Identidad del administrador._*",
  "\n_Escribe tu número de documento de identidad:_ \n",
];

const FUNC_id = async (ctx, { fallBack, flowDynamic, endFlow }) => {
  try {
    const userAnswer = ctx?.body?.trim();
    const regex = new RegExp(/^\d{1,12}$/, "g");
    const isFieldValid = regex.test(userAnswer);
    if (!userAnswer || !isFieldValid) return fallBack();
    const { data } = await getAdminExistsService(userAnswer);
    if (!data?.isAdminExists) {
      // await flowDynamic({
      //   body: "*❌ No existe un administrador con esta identificación.*",
      // });
      return fallBack();
    }
    userForm.adminId = userAnswer;
    userForm.groupId = data?.data?.group;
    await flowDynamic({
      body: `_*${data?.data?.name}*_\n_Su grupo tiene el ID *${data?.data?.group}*_
      `,
    });
  } catch (err) {
    console.log(err.message);
    return endFlow({
      body: "*❌ Ha ocurrido un error, por favor intenta más tarde.*",
      buttons: [{ body: "⬅️ Menú principal" }],
    });
  }
};

module.exports = { ANSWERS_id, FUNC_id };
