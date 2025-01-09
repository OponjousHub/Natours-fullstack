const mongoose = require("mongoose");
const slugify = require("slugify");
const validator = require("validator");

const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      unique: true,
      required: [true, "A tour must have a name"],
      maxlength: [50, "A name must be less than or equal 50 characters!"],
      minlength: [8, " Name must be more than more or equal 8 characters"],
      // validate: [validator.isAlpha, "Name must only contain characters."],
    },
    slug: String,
    ratingAverage: {
      type: Number,
      default: 4.5,
      min: [1, "A rating must be above 1.0"],
      max: [5, "A rating must not be below 5.0"],
    },
    ratingQuantity: {
      type: Number,
      default: 0,
    },
    duration: {
      type: Number,
      required: [true, "A tour must have a duration"],
    },
    maxGroupSize: {
      type: Number,
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
      type: Number,
      required: [true, "A Tour must have a price!"],
    },
    priceDiscount: {
      type: Number,
      validate: {
        // This function does not work on update, only on create doc
        validator: function (val) {
          return val < this.price;
        },
        message: "Discount price ({VALUE}) must be below regular price!",
      },
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
    secretTour: {
      type: Boolean,
      default: false,
    },
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
    locations: [
      {
        type: {
          type: String,
          default: "Point",
          enum: ["Point"],
        },
        coordinates: [Number],
        address: String,
        description: String,
        day: Number,
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

// tourSchema.post("save", function (doc, next) {
//   console.log(doc);
//   next();
// });

// QUERY MIDDLEWARE
tourSchema.pre(/^find/, function (next) {
  this.find({ secretTour: { $ne: true } });
  this.start = Date.now();
  next();
});

tourSchema.post(/^find/, function (doc, next) {
  console.log(`This doc took ${Date.now() - this.start} milliseconds`);

  next();
});

// AGGREGATION MIDDLEWARE
tourSchema.pre("aggregate", function (next) {
  this.pipeline().unshift({ $match: { secretTour: { $ne: true } } });
  next();
});

const Tour = mongoose.model("Tour", tourSchema);
module.exports = Tour;
