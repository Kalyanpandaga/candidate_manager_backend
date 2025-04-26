require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;

const allowedOrigins = [process.env.ALLOWED_URL] || ["http://localhost:3000"];

module.exports = { MONGO_URI, PORT, allowedOrigins };
