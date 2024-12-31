const { query } = require("express");
const Tour = require("../models/tourModel");

exports.aliasCheapTour = (req, res, next) => {
  req.query.limit = "2";
  req.query.sort = "-retingsAverage,price";
  req.query.fields = "name,price,ratingsSverage,summary,difficulty";
  next();
};

exports.getTourStats = async (req, res, next) => {
  try {
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
  } catch (err) {
    console.log(err);
  }
};

exports.getMonthlyPlan = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
  const year = req.params.year;
};

exports.getAllTours = async (req, res, next) => {
  try {
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
  } catch (err) {
    // res.send(err);
    console.log(err);
  }
};

exports.deleteTour = (req, res, next) => {
  Tour.findByIdAndDelete(req.params.id, req.body);
  res.status(204).json({
    status: "success",
    data: null,
  });
};
exports.createTour = async (req, res, next) => {
  try {
    // console.log(req.body);
    const tour = await Tour.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        tour,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

exports.updateTour = async (req, res, next) => {
  const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(201).json({
    status: "success",
    tour,
  });
};

exports.getTour = async (req, res) => {
  const tour = await Tour.findById(req.params.id);

  if (!tour) {
    return;
  }

  res.status(200).json({
    status: "sucess",
    data: {
      tour,
    },
  });
};
