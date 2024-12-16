const reviews = "reviews reviews reviews";

exports.getAllReviews = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      reviews,
    },
  });
};

exports.getReview = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      reviews,
    },
  });
};

exports.updateReview = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Updated successfully",
  });
};

exports.createReview = (req, res) => {
  res.status(201).json({
    status: "success",
    message: "Review created successfully",
  });
};
exports.deleteReview = (req, res) => {
  res(400).json({
    status: "success",
    data: null,
  });
};
