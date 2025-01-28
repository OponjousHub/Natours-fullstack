const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const morgan = require("morgan");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const bodyParser = require("body-parser");
const tourRouter = require("./routes/tourRoute");
const userRouter = require("./routes/userRoute");
const reviewRouter = require("./routes/reviewRoute");
const AppError = require("./utils/appError");
const ErrorGlobalHandler = require("./controllers/errorController");

const app = express();

// GLOBAL MIDDLEWARES
// Set HTTP headers
app.use(helmet());

// Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log(process.env);
}

// Limitting too many request from the /api
const limit = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this api! Please try again later.",
});
app.use("/api", limit);

// Implementing Cors
app.use(cors());
app.use(express.json());

// Body  parser, reading data from the body into req.body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "10kb" }));

//Data sanitization against no sequel query injection
app.use(mongoSanitize());

// Data sanitization against cross-site-scripting XSS
app.use(xss());

//Prevent parameter pollution
app.use(
  hpp({
    whitelist: [
      "duration",
      "ratingQuantity",
      "maxGroupSize",
      "maxGroupSize",
      "ratingAverage",
      "price",
    ],
  })
);

// Serving static files
app.use(express.static(`${__dirname}/public`));

//Test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log(req.headers);

  next();
});

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/reviews", reviewRouter);
app.use("/api/v1/", userRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server.`, 404));
});

app.use(ErrorGlobalHandler);

module.exports = app;
