const mongoose = require("mongoose");
const slugify = require("slugify");

const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      unique: true,
      required: [true, "A tour must have a name"],
    },
    slug: String,
    ratingAverage: {
      type: "Number",
      default: 4.5,
    },
    ratingQuantity: {
      type: "Number",
      default: 0,
    },
    duration: "String",
    maxGroupSize: {
      type: "Number",
      required: [true, "A tour must have maximum group size!"],
    },
    difficulty: {
      type: String,
      required: [true, "A tour must have difficulty!"],
      enum: {
        values: ["easy", "medium", "difficult"],
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
      type: Date,
      default: Date.now(),
      select: false,
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
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

//VIRTUAL PROPERTY
tourSchema.virtual("durationWeek").get(function () {
  return this.duration / 7;
});

// dOCUMENT MIDDLEWARE
tourSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

tourSchema.post("save", function (doc, next) {
  console.log(doc);
  next();
});

const Tour = mongoose.model("Tour", tourSchema);
module.exports = Tour;
