const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const tourRouter = require("./routes/tourRoute");
const userRouter = require("./routes/userRoute");
const reviewRouter = require("./routes/reviewRoute");
// const userRouter = require("./routes/userRoute");
const AppError = require("./utils/appError");
const ErrorGlobalHandler = require("./controllers/errorController");
// const { signin } = require("./controllers/authController");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log(process.env);
}
app.use(cors());
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/reviews", reviewRouter);
app.use("/api/v1/", userRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server.`, 404));
});

app.use(ErrorGlobalHandler);

module.exports = app;
