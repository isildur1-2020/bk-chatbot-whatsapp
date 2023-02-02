const defaultConfig = {
  capture: true,
};

const defaultFunc = async (ctx, { flowDynamic }) => {
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
