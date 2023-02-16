const axios = require("../config/axios");
const { bkPathAPI } = require("../utils/bkPath");

const getUserExistsService = (userAnswer) =>
  axios(`${bkPathAPI.getUserExists}/${userAnswer}`);

module.exports = { getUserExistsService };
