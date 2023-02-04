const axios = require("../config/axios");

const registerService = async (data) => {
  try {
    await axios.post("/register", data);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { registerService };
