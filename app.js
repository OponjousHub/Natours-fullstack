const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const tourRouter = require("./routes/tourRoute");
const userRouter = require("./routes/userRoute");
const reviewRouter = require("./routes/reviewRoute");

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

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`App running on port: ${port}...`);
// });

module.exports = app;
