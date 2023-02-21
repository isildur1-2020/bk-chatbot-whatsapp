const { createGroupService } = require("../../../services/createGroup");

const ANSWERS_6 = ["🌐 *_Creando solicitud..._*\n"];

const FUNC_6 =
  (form) =>
  async (ctx, { endFlow }) => {
    try {
      const { err } = await createGroupService(form);
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

module.exports = { ANSWERS_6, FUNC_6 };
