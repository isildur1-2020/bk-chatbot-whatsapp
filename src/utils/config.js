const defaultConfig = {
  capture: true,
};

const defaultFunc =
  (object, keyName) =>
  async (ctx, { flowDynamic }) => {
    object[keyName] = ctx.body;
    await flowDynamic();
  };

const closeFunc = async (ctx, { flowDynamic, endFlow }) => {
  await flowDynamic();
  return endFlow();
};

module.exports = {
  defaultConfig,
  defaultFunc,
  closeFunc,
};
