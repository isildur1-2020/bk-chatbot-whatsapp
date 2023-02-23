const axios = require("../config/axios");
const { bkPathAPI } = require("../utils/bkPath");

const getApproveActionsInfo = (groupId) =>
  axios(`${bkPathAPI.getApproveActionsInfo}/${groupId}`);

module.exports = { getApproveActionsInfo };
