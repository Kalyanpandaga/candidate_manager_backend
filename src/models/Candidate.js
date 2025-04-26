const mongoose = require("mongoose");
const validator = require("validator");

const candidateSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 50,
      set: function (v) {
        if (typeof v !== "string") {
          throw new Error("firstName must be a string");
        }
        return v;
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      minLength: 5,
      maxLength: 100,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("invalid email address, invalid email: " + value);
        }
      },
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      validate(value) {
        if (!validator.isMobilePhone(value)) {
          throw new Error(
            "invalid phone number, invalid phone number: " + value
          );
        }
      },
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Others"],
      required: true,
    },
    skills: {
      type: [String],
      validate(value) {
        if (value.length > 20) {
          throw new Error("maximum skills should be 20");
        }
      },
    },
    experience: {
      type: Number,
      min: 0,
      max: 100,
    },
  },
  { timestamps: true }
);

const Candidate = mongoose.model("Candidate", candidateSchema);
module.exports = Candidate;
