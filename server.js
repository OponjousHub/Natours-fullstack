const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

process.on(
  "uncaughtException"(() => {
    console.log(err.name, err.message);
    console.log("UNCAUGHTEXCEPTION shutting down");
    server.close(() => {
      process.exit(1);
    });
  })
);

dotenv.config({ path: "./config.env" });

const DB = process.env.DB_CONNECTING_STRING;
mongoose
  .connect(DB, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then((con) => {
    // console.log(con.connections);
    console.log("Database connection successful!");
  });

const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
  console.log(`App running on port: ${port}...`);
});

process.on("unhandledRejection", (err) => {
  console.log(err);
  console.log("UNHANDLEDREJECTION shutting down");
  server.close(() => {
    process.exit(1);
  });
});
