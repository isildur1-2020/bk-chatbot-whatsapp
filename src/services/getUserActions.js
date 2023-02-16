const axios = require("../config/axios");
const { bkPathAPI } = require("../utils/bkPath");

const getUserActionsService = (userId) =>
  axios.get(`${bkPathAPI.getUserActions}/${userId}`);

module.exports = { getUserActionsService };
