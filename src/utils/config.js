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

const enumFormFunc = (options, object, keyName) => {
  return async (ctx, { fallBack, flowDynamic }) => {
    const userAnswer = ctx?.body;
    if (
      userAnswer === null ||
      userAnswer === undefined ||
      !options.some((opt) => opt === userAnswer)
    ) {
      return fallBack();
    }
    object[keyName] = userAnswer;
    await flowDynamic();
  };
};

const regexFormFunc = (regex, object, keyName) => {
  return async (ctx, { fallBack, flowDynamic }) => {
    const userAnswer = ctx?.body;
    if (
      userAnswer === null ||
      userAnswer === undefined ||
      !regex.test(userAnswer)
    ) {
      return fallBack();
    }
    object[keyName] = userAnswer;
    await flowDynamic();
  };
};

const closeFunc = async (ctx, { flowDynamic, endFlow }) => {
  await flowDynamic();
  return endFlow();
};

module.exports = {
  closeFunc,
  simpleFunc,
  fillFormFunc,
  enumFormFunc,
  captureConfig,
  regexFormFunc,
};
