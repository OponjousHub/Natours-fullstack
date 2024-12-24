const Tour = require("../models/tourModel");

exports.getAllTours = (req, res, next) => {
  try {
    const tours = Tour.find();
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
  res.status(400).json({
    status: "success",
    data: null,
  });
};
exports.createTour = async (req, res, next) => {
  try {
    console.log(req.body);
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

exports.updateTour = (req, res, next) => {
  res.send("updated successfully");
};

exports.getTour = async (req, res) => {
  const tour = await Tour.findById(req.params.id);

  // if (!tour) {
  //   return throw new Error("We could not find the requested tour!");
  // }

  res.status(200).json({
    status: "sucess",
    data: {
      tour,
    },
  });
};
