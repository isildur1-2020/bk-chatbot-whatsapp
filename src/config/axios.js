const axios = require("axios");

const BACK_URL =
  process.env.ENV === "PROD"
    ? "https://markers-2.herokuapp.com/api"
    : "http://127.0.0.1:3001/api";

const axiosInstance = axios.create({
  baseURL: BACK_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

module.exports = axiosInstance;
