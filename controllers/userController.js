const users = "Ogbonna Johson";

exports.getAllUsers = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      users,
    },
  });
};
exports.createUser = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      message: "created successfully",
    },
  });
};

exports.getUser = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
};

exports.updateUser = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      message: "Updated successfully",
    },
  });
};
exports.deleteUser = (req, res) => {
  res.status(400).json({
    status: "success",
    data: null,
  });
};
