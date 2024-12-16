const tours = "These are the tours";

exports.getAllTours = (req, res, next) => {
  res.status(200).json({
    status: "sucess",
    data: {
      tours,
    },
  });
};

exports.deleteTour = (req, res, next) => {
  res.status(400).json({
    status: "success",
    data: null,
  });
};
exports.createTour = (req, res, next) => {
  res.send("DONE");
};

exports.updateTour = (req, res, next) => {
  res.send("updated successfully");
};

exports.getTour = (req, res) => {
  res.status(200).json({
    status: "sucess",
    data: {
      tour,
    },
  });
};
