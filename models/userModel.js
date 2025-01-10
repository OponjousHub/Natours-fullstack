const mongoose = require("mongoose");
const validator = require("validator");
const { validate } = require("./tourModel");

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

const User = mongoose.model("User", userSchema);
module.exports = User;
