const { allowedOrigin } = require("./constants");

const corsOptions = {
  origin: allowedOrigin,
  credentials: true,
};

module.exports = corsOptions;
