const express = require("express");

const candidateRouter = express.Router();

const {
  addCandidate,
  viewCandidates,
} = require("../controllers/candidateController");
const validateRequest = require("../middlewares/validateMiddleware");
const { validateCandidateData } = require("../utils/validate");

candidateRouter.get("/view", viewCandidates);

candidateRouter.post(
  "/add",
  validateRequest(validateCandidateData),
  addCandidate
);

module.exports = candidateRouter;
