const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    review: {
      type: String,
      required: [true, "Please enter review texts!"],
      unique: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      // default: 4.5,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
    tour: {
      type: mongoose.Schema.ObjectId,
      ref: "Tour",
      required: ["A review must belong to a tour!"],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: ["A review must belong to a user!"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "name",
  });

  next();
});

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
