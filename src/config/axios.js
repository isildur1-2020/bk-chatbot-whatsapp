const axios = require("axios");

const BACK_URL = "http://127.0.0.1:3000/api";

const axiosInstance = axios.create({
  baseURL: BACK_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

module.exports = axiosInstance;
