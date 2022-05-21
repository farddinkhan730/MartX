const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Name"],
    maxLength: [30, "Name can not Exceed 30 characters"],
    minLength: [4, "Name should be greater than 4 characters"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please Enter your Email"],
    validator: [validator.isEmail, "Please Enter valid Email"],
  },
  password: {
    type: String,
    required: [true, "Please Enter your Password"],
    minLength: [8, "password should be greater than a character"],
    select: false, // when you run query on mongo db find() then password will not show in this query if it is false for the sequrity purpose
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  role: {
    type: String,
    default: "user",
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

// json web token store in cookies   use for direcct login after registration
userSchema.methods.getJWTToken = function () {
  return jwt.sign(
    {
      id: this._id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRE,
    }
  );
};
// compare password

userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
//  Generating password reset Token

userSchema.methods.getResetPasswordToken = function () {
  //  Generating Token
  const resetToken = crypto.randomBytes(20).toString("hex");

  // Hashing and adding resetPasswordToken to userSchema

  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

  return resetToken;
};
module.exports = mongoose.model("User", userSchema);
