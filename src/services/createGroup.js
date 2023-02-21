const axios = require("../config/axios");
const { bkPathAPI } = require("../utils/bkPath");

const createGroupService = async (data) =>
  axios.post(bkPathAPI.createGroup, data);

module.exports = { createGroupService };
