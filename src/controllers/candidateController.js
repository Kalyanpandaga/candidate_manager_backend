const Candidate = require("../models/Candidate");
const errorResponse = require("../utils/errorResponse");

const viewCandidates = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const query = {};

    if (req.query.search) {
      const searchRegex = new RegExp(req.query.search, "i");
      query.$or = [
        { name: searchRegex },
        { email: searchRegex },
        { phone: { $regex: searchRegex } },
      ];
    }

    if (req.query.gender) {
      query.gender = req.query.gender;
    }

    if (req.query.experience) {
      query.experience = parseInt(req.query.experience);
    }

    if (req.query.skills) {
      const skills = req.query.skills.split(",").map((skill) => skill.trim());
      query.skills = { $in: skills };
    }

    const totalCandidates = await Candidate.countDocuments(query);
    const totalPages = Math.ceil(totalCandidates / limit);

    const candidates = await Candidate.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    res.status(200).json({
      success: true,
      data: candidates,
      pagination: {
        currentPage: page,
        totalPages,
        totalCandidates,
        limit,
      },
    });
  } catch (error) {
    errorResponse(res, 500, error.message);
  }
};

const addCandidate = async (req, res) => {
  try {
    const { name, email, phone, gender, skills, experience } = req.body;

    const existingCandidate = await Candidate.findOne({
      $or: [{ email }, { phone }],
    });

    if (existingCandidate) {
      return errorResponse(
        res,
        400,
        "Candidate with this email or phone already exists"
      );
    }

    const candidate = new Candidate({
      name,
      email,
      phone,
      gender,
      skills,
      experience,
    });

    await candidate.save();

    res.status(201).json({
      success: true,
      message: "Candidate added successfully",
      data: candidate,
    });
  } catch (error) {
    errorResponse(res, 500, error.message);
  }
};

module.exports = {
  viewCandidates,
  addCandidate,
};
