const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    unique: true,
    required: [true, "A tour must have a name"],
  },
  ratingAverage: {
    type: "Number",
    default: 4.5,
  },
  ratingQuantity: {
    type: "Number",
    default: 0,
  },
  maxGroupSize: {
    type: "Number",
    required: [true, "A tour must have maximum group size!"],
  },
  difficulty: {
    type: String,
    required: [true, "A tour must have difficulty!"],
    enum: {
      values: ["easy", "medium", "difficulty"],
      message: "Difficulty must be either easy, medium or difficult.",
    },
  },
  price: {
    type: String,
    // required: [true, "A Tour must have a price!"],
  },
  priceDiscount: {
    type: "Number",
  },
  summary: {
    type: String,
    required: [true, "A tour must have a summary!"],
  },
  description: {
    type: String,
    required: [true, "A tour must have a description!"],
  },
  imageCover: {
    type: String,
    // required: [true, "A tour must have an image cover!"],
  },
  images: [String],
  createdAt: {
    type: "Date",
    default: Date.now(),
  },
  startDates: [Date],
  startLocation: {
    type: {
      type: String,
      default: "point",
      enum: ["point"],
    },
    coordinates: [Number],
    address: String,
    description: String,
  },
  location: [
    {
      type: {
        type: String,
        default: "Point",
        enum: ["Point"],
      },
      coordinates: ["Number"],
      address: String,
      description: String,
      day: "Number",
    },
  ],
});

const Tour = mongoose.model("Tour", tourSchema);
module.exports = Tour;
