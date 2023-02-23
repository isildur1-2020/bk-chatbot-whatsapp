const axios = require("../config/axios");
const { bkPathAPI } = require("../utils/bkPath");

const approveActionsService = (userId) =>
  axios.post(`${bkPathAPI.approveActions}/${userId}`);

module.exports = { approveActionsService };
