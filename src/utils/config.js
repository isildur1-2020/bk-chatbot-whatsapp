const captureConfig = {
  capture: true,
};

const simpleFunc = async (ctx, { flowDynamic }) => {
  await flowDynamic();
};

const fillFormFunc =
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
  captureConfig,
  closeFunc,
  simpleFunc,
  fillFormFunc,
};
