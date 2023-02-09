const { registerService } = require("../../../services/registerService");

const ANSWERS_16 = ["*_Nuevo socio registrado exitosamente._*\n"];
const CONFIG_16 = {
  buttons: [{ body: "⬅️ Menú principal" }],
};
const FUNC_16 =
  (form) =>
  async (ctx, { flowDynamic, endFlow }) => {
    registerService(form);
    await flowDynamic();
    return endFlow();
  };

module.exports = {
  ANSWERS_16,
  CONFIG_16,
  FUNC_16,
};
