const Review = require("../models/reviewModel");
const User = require("../models/userModel");
const AppError = require("../utils/appError");
const catchAsyncError = require("../utils/catchAsyncError");

exports.getAllReviews = catchAsyncError(async (req, res) => {
  let filter = {};
  if (req.params.tourId) filter = { tour: req.params.tourId };
  const reviews = await Review.find(filter);

  res.status(200).json({
    status: "success",
    results: reviews.length,
    data: {
      reviews,
    },
  });
});

// exports.getMyReview = catchAsyncError(async (req, res) => {
//   const review = await Review.findById({ user: req.user.id });

//   res.status(200).json({
//     status: "success",
//     data: {
//       review,
//     },
//   });
// });

exports.updateReview = catchAsyncError(async (req, res) => {
  const updatedReview = await Review.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(200).json({
    status: "success",
    message: "Updated successfully",
    data: {
      updatedReview,
    },
  });
});

exports.createReview = catchAsyncError(async (req, res) => {
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;
  const newReview = await Review.create(req.body);

  res.status(201).json({
    status: "success",
    message: "Review created successfully",
    data: {
      review: newReview,
    },
  });
});
exports.deleteReview = catchAsyncError(async (req, res, next) => {
  const delReview = await Review.findByIdAndDelete(req.params.id, req.body);
  if (!delReview)
    next(new AppError("There is no document found with that ID!", 404));

  res.status(404).json({
    status: "success",
    data: null,
  });
});
