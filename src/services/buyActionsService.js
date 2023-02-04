const axios = require("../config/axios");

const buyActionsService = async (data) => {
  try {
    await axios.post("/buy-actions", data);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { buyActionsService };
