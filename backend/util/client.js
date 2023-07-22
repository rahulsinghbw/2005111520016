const axios = require("axios");

const client = axios.create({ baseURL: "http://20.244.56.144/train/"});

module.exports = client;