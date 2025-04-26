require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("MONGO_URI is not defined in environment variables");
  process.exit(1);
}

const PORT = process.env.PORT || 5000;

const allowedOrigin = process.env.ALLOWED_URL || "http://localhost:3000";

const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY;
if (!JWT_PRIVATE_KEY) {
  console.error("JWT_PRIVATE_KEY is not defined in environment variables");
  process.exit(1);
}

module.exports = { MONGO_URI, PORT, allowedOrigin, JWT_PRIVATE_KEY };
