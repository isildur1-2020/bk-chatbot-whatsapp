const axios = require("../config/axios");
const { bkPathAPI } = require("../utils/bkPath");

const getAdminExistsService = (adminId) =>
  axios(`${bkPathAPI.getAdminExists}/${adminId}`);

module.exports = { getAdminExistsService };
