const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fs = require("fs");
const app = require("./app");
// const https = require("https");

process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
  console.log("UNCAUGHTEXCEPTION shutting down");
  process.exit(1);
});
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

const options = {
  key: fs.readFileSync("server.key"),
  cert: fs.readFileSync("server.cert"),
};

const port = process.env.PORT || 8000;
// const httpPort = process.env.HTTPSPORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port: ${port}...`);
});
// const httpsServer = https.createServer(options, app).listen(httpPort, () => {
//   console.log(`App running on port: ${httpPort}...`);
// });

process.on("unhandledRejection", (err) => {
  console.log(err);
  console.log("UNHANDLEDREJECTION shutting down");
  server.close(() => {
    process.exit(1);
  });
  // httpsServer.close(() => {
  //   process.exit(1);
  // });
});
