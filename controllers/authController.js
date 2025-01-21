const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const catchAsyncError = require("../utils/catchAsyncError");
const AppError = require("../utils/appError");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, {
    expiresIn: process.env.JWT_EXPIRE_IN,
  });
};

exports.signup = catchAsyncError(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });

  const token = signToken(newUser._id);

  res.status(201).json({
    status: "success",
    token,
    data: newUser,
  });
});

exports.login = catchAsyncError(async function (req, res, next) {
  // CHECK IF EMAIL AND PASSWORD EXIST
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new AppError("Please provide email and password!", 400));
  }

  // CHECK IF USER EXIST AND PASSWORD IS CORRECT
  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError("Username or password is incorrect!", 401));
  }

  // IF EVERYTHING IS OK, SEND TOKEN TO CLEINT
  const token = signToken(user._id);
  res.status(200).json({
    status: "success",
    token,
  });
});

exports.protect = catchAsyncError(async (req, res, next) => {
  // 1) Get the token and check if it exist

  // 2) Verification token

  // 3) Check if User still exist

  // 4) Check if user change password after the token has been issued

  next();
});
