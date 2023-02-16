const axios = require("../config/axios");
const { bkPathAPI } = require("../utils/bkPath");

const buyActionsService = async (data) =>
  axios.post(bkPathAPI.postBuyActions, data);

module.exports = { buyActionsService };
