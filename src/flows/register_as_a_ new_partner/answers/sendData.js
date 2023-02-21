const { registerService } = require("../../../services/registerService");

const ANSWERS_16 = ["*_Guardando información..._*\n"];

const FUNC_16 =
  (form) =>
  async (ctx, { endFlow }) => {
    try {
      const { err } = await registerService(form);
      if (err) {
        return endFlow({
          body: "*❌ Ha ocurrido un error, por favor intenta más tarde.*",
          buttons: [{ body: "⬅️ Menú principal" }],
        });
      }
      return endFlow({
        body: "✅ *Socio creado exitosamente.*",
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

module.exports = {
  ANSWERS_16,
  FUNC_16,
};
