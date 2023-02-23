const axios = require("../config/axios");
const { bkPathAPI } = require("../utils/bkPath");

const getUserActionsExists = (userId) =>
  axios(`${bkPathAPI.getUserActionsExists}/${userId}`);

module.exports = { getUserActionsExists };
