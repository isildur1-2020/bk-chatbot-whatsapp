const axios = require("../config/axios");
const { bkPathAPI } = require("../utils/bkPath");

const applyForCreditService = (data) =>
  axios.post(bkPathAPI.applyForCredit, data);

module.exports = { applyForCreditService };
