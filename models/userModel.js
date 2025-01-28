const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const { type } = require("os");
// const { validate } = require("./tourModel");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name."],
  },
  email: {
    type: String,
    required: [true, "Please enter your email."],
    lowercase: true,
    unique: true,
    validate: [validator.isEmail, "Please provide a valid email!"],
  },
  role: {
    type: String,
    enum: ["user", "guide", "lead-guide", "admin"],
    default: "user",
  },
  password: {
    type: String,
    minlength: 8,
    required: [true, "Please enter your password."],
    select: false,
  },
  passwordConfirm: {
    type: String,
    minlength: 8,
    required: [true, "Please confirm your password."],
    validate: {
      validator: function (el) {
        return this.password === el;
      },
      message: "Passwords are not the same.",
    },
  },
  photo: {
    type: String,
    default: "default.png",
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

userSchema.pre("save", async function (next) {
  // Use this if the password has not been midified
  if (!this.isModified("password")) return next();

  //If modified, Hash with the cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // Delete confirmation password
  this.passwordConfirm = undefined;
});

userSchema.pre("save", function (next) {
  if (!this.isModified("password") || !this.isNew) return next();

  this.passwordChangedAt = Date.now() - 1000;
  next();
});

userSchema.pre(/^find/, function (next) {
  this.find({ active: true });
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    console.log(JWTTimestamp, changedTimestamp);
    return JWTTimestamp < changedTimestamp;
  }

  return false;
};

userSchema.methods.createPasswordResetToken = function () {
  // Creating a reset token
  const resetToken = crypto.randomBytes(32).toString("hex");

  // encrypting the token, it should not be plain in the database
  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  console.log({ resetToken }, this.passwordResetToken);

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;
  return resetToken;
};

const User = mongoose.model("User", userSchema);
module.exports = User;
