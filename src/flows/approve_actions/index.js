const { userForm } = require("./userForm");
const { addKeyword } = require("@bot-whatsapp/bot");
const { KEYWORDS } = require("../../utils/keywords");
const { captureConfig } = require("../../utils/config");
const { ANSWERS_id, FUNC_id } = require("./answers/id");
const { ANSWERS_to_approve, FUNC_to_approve } = require("./answers/to_approve");
const { ANSWERS_choose, FUNC_choose } = require("./answers/choose");
const { ANSWERS_approve, FUNC_approve } = require("./answers/approve");

const approve_actions = addKeyword(KEYWORDS.approve_actions)
  .addAnswer(ANSWERS_id, captureConfig, FUNC_id)
  .addAnswer(ANSWERS_to_approve, null, FUNC_to_approve(userForm))
  .addAnswer(ANSWERS_choose, captureConfig, FUNC_choose)
  .addAnswer(ANSWERS_approve, null, FUNC_approve);

module.exports = { approve_actions };
