const express = require("express");

const candidateRouter = express.Router();

const {
  addCandidate,
  viewCandidates,
} = require("../controllers/candidateController");
const validateRequest = require("../middlewares/validateMiddleware");
const { validateCandidateData } = require("../utils/validate");
const authMiddleware = require("../middlewares/authMiddleware");

candidateRouter.get("/view", authMiddleware, viewCandidates);

candidateRouter.post(
  "/add",
  authMiddleware,
  validateRequest(validateCandidateData),
  addCandidate
);

module.exports = candidateRouter;
