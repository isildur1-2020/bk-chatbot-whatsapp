const axios = require("../config/axios");

const applyForCreditService = async (data) => {
  try {
    await axios.post("/apply-for-credit", data);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { applyForCreditService };
