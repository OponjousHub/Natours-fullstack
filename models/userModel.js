const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
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
});

userSchema.pre("save", async function (next) {
  // Use this if the password has not been midified
  if (!this.isModified("password")) return next();

  //If modified, Hash with the cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // Delete confirmation password
  this.passwordConfirm = undefined;
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model("User", userSchema);
module.exports = User;
