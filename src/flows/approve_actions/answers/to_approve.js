const {
  getApproveActionsInfo,
} = require("../../../services/getApproveActionsInfo");

const ANSWERS_to_approve = ["🌐 *_Buscando información..._* \n"];

const FUNC_to_approve =
  (userForm) =>
  async (ctx, { endFlow, flowDynamic }) => {
    try {
      const { groupId } = userForm;
      const { err, data } = await getApproveActionsInfo(groupId);
      if (err) {
        return endFlow({
          body: "*❌ Ha ocurrido un error, por favor intenta más tarde.*",
          buttons: [{ body: "⬅️ Menú principal" }],
        });
      }
      let respTemplate = `\n`;
      data?.data?.forEach(({ id, value }) => {
        if (id && value) {
          respTemplate += `Socio con id *${id}* desea comprar *${value}* acciones\n`;
        }
      });
      await flowDynamic({
        body: respTemplate,
      });
    } catch (err) {
      console.log(err.message);
      return endFlow({
        body: "*❌ Ha ocurrido un error, por favor intenta más tarde.*",
        buttons: [{ body: "⬅️ Menú principal" }],
      });
    }
  };

module.exports = {
  ANSWERS_to_approve,
  FUNC_to_approve,
};
