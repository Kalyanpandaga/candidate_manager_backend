const validator = require("validator");

const validateSignupData = (userData) => {
  const { firstName, lastName, emailId, password } = userData;

  if (!firstName || firstName.length < 3) {
    throw new Error("firstName is required with minumum 3 characters");
  }

  if (!lastName || lastName.length < 3) {
    throw new Error("lastName is required with minumum 3 characters");
  }

  if (!emailId || !validator.isEmail(emailId.toLowerCase().trim())) {
    throw new Error("A valid email is required");
  }

  if (!password || !validator.isStrongPassword(password)) {
    throw new Error(
      "A strong password is required, password contains (min 8 chars, with letters, numbers & symbols)"
    );
  }
};

const validateLoginData = (userData) => {
  const { emailId, password } = userData;

  if (!emailId || !validator.isEmail(emailId.toLowerCase().trim())) {
    throw new Error("A valid email is required");
  }

  if (!password) {
    throw new Error("Password is required");
  }
};

const validateCandidateData = (candidateData) => {
  const { name, email, phone, gender, skills, experience } = candidateData;

  if (!name || name.length < 3 || name.length > 50) {
    throw new Error(
      "name is required with minumum 3 characters and maximum 50 characters"
    );
  }

  if (!email || !validator.isEmail(email.toLowerCase().trim())) {
    throw new Error("A valid email is required");
  }

  if (!phone || !validator.isMobilePhone(phone)) {
    throw new Error("A valid phone number is required");
  }

  if (!gender || !["Male", "Female", "Others"].includes(gender)) {
    throw new Error("A valid gender is required");
  }

  if (skills && skills.length > 20) {
    throw new Error("maximum skills should be 20");
  }

  if (
    experience &&
    (experience < 0 || experience > 30 || !Number.isInteger(experience))
  ) {
    throw new Error("experience should be integer between 0 and 30");
  }
};

module.exports = {
  validateSignupData,
  validateLoginData,
  validateCandidateData,
};
