const { query } = require("express");
const Tour = require("../models/tourModel");
const catchAsyncError = require("../utils/catchAsyncError");
const AppError = require("../utils/appError");

exports.aliasCheapTour = (req, res, next) => {
  req.query.limit = "2";
  req.query.sort = "-retingsAverage,price";
  req.query.fields = "name,price,ratingsSverage,summary,difficulty";
  next();
};

exports.getTourStats = catchAsyncError(async (req, res, next) => {
  const stats = await Tour.aggregate([
    {
      $match: { ratingAverage: { $gte: 4.0 } },
    },
    {
      $group: {
        _id: { $toUpper: "$difficulty" },
        numTours: { $sum: 1 },
        numRatings: { $sum: "$ratingQuantity" },
        avgRating: { $avg: "$ratingAverage" },
        avgPrice: { $avg: "$price" },
        minPrice: { $min: "$price" },
        maxPrice: { $max: "$price" },
      },
    },
    // {
    //   $match: { _id: { $ne: "EASY" } },
    // },
  ]);

  res.status(200).json({
    status: "success",
    data: {
      stats,
    },
  });
});

exports.getMonthlyPlan = catchAsyncError(async (req, res) => {
  const year = req.params.year * 1;
  const plan = await Tour.aggregate([
    {
      $unwind: "$startDates",
    },
    {
      $match: {
        startDates: {
          $gte: new Date(`${year}-01-01`),
          $lte: new Date(`${year}-12-31`),
        },
      },
    },
    {
      $group: {
        _id: { $month: "$startDates" },
        numTourStart: { $sum: 1 },
        tourName: { $push: "$name" },
      },
    },
    {
      $addFields: { month: "$_id" },
    },
    {
      $project: { _id: 0 },
    },
    {
      $sort: { numTourStart: -1 },
    },
    // { $limit: 2 },
  ]);
  res.status(200).json({
    status: "success",
    result: plan.length,
    data: plan,
  });

  // const year = req.params.year;
});

exports.getAllTours = catchAsyncError(async (req, res, next) => {
  let query = Tour.find();

  // Field Limiting
  if (req.query.fields) {
    const field = req.query.fields.split(",").join(" ");
    query = query.select(field);
  } else {
    query = query.select("-__v");
  }

  // PAGINATION
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 100;
  const skip = (page - 1) * limit;

  query = query.skip(skip).limit(limit);

  if (req.query.page) {
    const numTours = await Tour.countDocuments();
    if (skip >= numTours) throw new Error("This page does not exist");
  }

  const tours = await query;

  res.status(200).json({
    status: "sucess",
    result: tours.length,
    data: {
      tours,
    },
  });
});

exports.deleteTour = catchAsyncError(async (req, res, next) => {
  const tour = await Tour.findByIdAndDelete(req.params.id, req.body);

  if (!tour) {
    return next(new AppError(`Could not delete. Tour dosen't exit.`, 404));
  }

  res.status(204).json({
    status: "success",
    data: null,
  });
});

exports.createTour = catchAsyncError(async (req, res, next) => {
  const tour = await Tour.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      tour,
    },
  });
});

exports.updateTour = catchAsyncError(async (req, res, next) => {
  const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!tour) {
    return next(new AppError("No tour found with that ID.", 404));
  }

  res.status(201).json({
    status: "success",
    tour,
  });
});

exports.getTour = catchAsyncError(async (req, res) => {
  const tour = await Tour.findById(req.params.id).populate("reviews");

  if (!tour) {
    return next(new AppError("No tour found with that ID.", 404));
  }

  res.status(200).json({
    status: "sucess",
    data: {
      tour,
    },
  });
});

// /tours-within/:distance/center/:latlng/unit/:unit
// /tours-within/?distance=233&center=-40,45&unit=ml
exports.getToursWithin = catchAsyncError(async (req, res, next) => {
  const { distance, latlng, unit } = req.params;
  const [lat, lng] = latlng.split(",");

  const radius = unit === "mi" ? distance / 3963.2 : distance / 6378.1;

  if (!lat || !lng)
    return next(
      new AppError(
        "Please provide latitude and longitude in the format lat,lng",
        400
      )
    );

  const tours = await Tour.find({
    startLocation: { $geoWithin: { $centerSphere: [[lng, lat], radius] } },
  });

  console.log(distance, lat, lng, unit);

  res.status(200).json({
    status: "success",
    result: tours.length,
    data: {
      data: tours,
    },
  });
});

exports.getDistances = catchAsyncError(async (req, res, next) => {
  const { latlng, unit } = req.params;
  const [lat, lng] = latlng.split(",");

  if (!lat || !lng)
    return next(
      new AppError(
        "Please provide latitude and longitude in the format lat,lng",
        400
      )
    );

  const distances = await Tour.aggregate([
    {
      $geoNear: {
        near: {
          type: "Point",
          coordinates: [lng * 1, lat * 1],
        },
        distanceField: "distance",
      },
    },
  ]);

  res.status(200).json({
    status: "success",
    result: tours.length,
    data: {
      data: tours,
    },
  });
});
