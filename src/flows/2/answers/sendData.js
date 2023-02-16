const { buyActionsService } = require("../../../services/buyActionsService");

const ANSWERS_3 = ["*_Creando solicitud..._*\n"];

const FUNC_3 =
  (form) =>
  async (ctx, { endFlow }) => {
    try {
      const { err } = await buyActionsService(form);
      if (err) {
        return endFlow({
          body: "*❌ Ha ocurrido un error, por favor intenta más tarde.*",
          buttons: [{ body: "⬅️ Menú principal" }],
        });
      }
      return endFlow({
        body: "✅ *_Solicitud enviada exitosamente._*\n",
        buttons: [{ body: "⬅️ Menú principal" }],
      });
    } catch (err) {
      console.log(err);
      return endFlow({
        body: "*❌ Ha ocurrido un error, por favor intenta más tarde.*",
        buttons: [{ body: "⬅️ Menú principal" }],
      });
    }
  };

module.exports = { ANSWERS_3, FUNC_3 };
