const AppError = require("../utils/appError");

const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}`;
  return new AppError(message, 404);
};

const handleJWTError = () =>
  new AppError("Invalid token! Please log in again.", 401);

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

const sendErrorDev = (err, req, res) => {
  return res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    error: err,
    stack: err.stack,
  });
};

const sendErrorProd = (err, res) => {
  // this is operational error we trust
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
    // Programing error or other unknown error, do not leak message to user
  } else {
    // Log the error
    console.error(err);

    // Send to user
    return res.status(500).json({
      status: "error",
      message: "Something went very wrong!",
    });
  }
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, req, res);
  } else if (process.env.NODE_ENV === "production") {
    let error = { ...err };
    error.message = err.message;
    // console.log(err.name);
    if (error.name === "CastError") error = handleCastErrorDB(error);
    if (error.code === 11000) error = handleDupliicateErrorDB(error);
    if (error.name === "ValidationError")
      error = handleValidationErrorDB(error);
    if (error.name === "JsonWebTokenError") error = handleJWTError();
    // console.log(err);
    sendErrorProd(error, res);
  }
};
