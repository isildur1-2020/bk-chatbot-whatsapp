const axios = require("../config/axios");
const { bkPathAPI } = require("../utils/bkPath");

const getUserCreditService = (userId) =>
  axios.get(`${bkPathAPI.getUserCredit}/${userId}`);

module.exports = { getUserCreditService };
