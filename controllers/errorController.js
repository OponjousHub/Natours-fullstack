const AppError = require("../utils/appError");

const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}`;
  return new AppError(message, 404);
};

const handleDupliicateErrorDB = (err) => {
  const value = err.errmsg.match(/"(?:[^"\\]|\\.)*"/);
  const message = `Duplicate name value ${value}. Please use another value`;
  return new AppError(message, 404);
};

const handleValidationErrorDB = (err) => {
  const value = Object.values(err.errors).map((el) => el.message);
  const message = `Invalid input data: ${value.join(". ")}`;
  return new AppError(message, 404);
};

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    error: err,
    stack: err.stack,
  });
};

const sendErrorProd = (err, res) => {
  // this is operational error we trust
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
    // Programing error or other unknown error, do not leak message to user
  } else {
    // Log the error
    console.error(err);

    // Send to user
    res.status(500).json({
      status: "error",
      message: "Something went very wrong!",
    });
  }
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === "production") {
    // let err = { ...err };
    console.log(err.name);
    if (err.name === "CastError") err = handleCastErrorDB(err);
    if (err.code === 11000) err = handleDupliicateErrorDB(err);
    if (err.name === "ValidationError") err = handleValidationErrorDB(err);
    sendErrorProd(err, res);
  }
};
