const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "build")));

app
  .get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  })
  .listen(app.get(process.env.PORT), function () {
    console.log(
      "App is running, server is listening on port ",
      app.get(process.env.PORT)
    );
  });
