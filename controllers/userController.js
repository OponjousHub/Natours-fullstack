const User = require("../models/userModel");
const AppError = require("../utils/appError");
const catchAsyncError = require("../utils/catchAsyncError");

// Function that filtered not allowed fields like role
const filterObj = (bodyObj, ...wantedFields) => {
  const userObj = {};
  Object.keys(bodyObj).forEach((el) => {
    if (wantedFields.includes(el)) userObj[el] = bodyObj[el];
  });
  return userObj;
};

exports.getAllUsers = catchAsyncError(async (req, res) => {
  const users = await User.find();

  res.status(200).json({
    status: "success",
    result: users.length,
    data: {
      users,
    },
  });
});
exports.createUser = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      message: "created successfully",
    },
  });
};

exports.getUser = catchAsyncError(async (req, res) => {
  const user = await User.findById(req.params.id);

  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
});

exports.deleteMe = catchAsyncError(async (req, res) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });

  res.status(204).json({
    status: "success",
    data: null,
  });
});

exports.updateUser = catchAsyncError(async (req, res, next) => {
  // Check if user include password data
  if (req.body.password || req.body.passwordConfirm)
    return next(
      new AppError(
        "This route is not for password update! Please use /updateMyPassword route",
        400
      )
    );

  // Filter unwanted data from entering the database -- role
  const filteredBody = filterObj(req.body, "name", "email");
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true,
  });

  // Send the updated data to the user
  res.status(200).json({
    status: "success",
    data: {
      user: updatedUser,
    },
  });
});
