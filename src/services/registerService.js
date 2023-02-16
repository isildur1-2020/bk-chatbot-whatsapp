const axios = require("../config/axios");
const { bkPathAPI } = require("../utils/bkPath");

const registerService = (data) => axios.post(bkPathAPI.registerUser, data);

module.exports = { registerService };
