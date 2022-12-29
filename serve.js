const express = require("express");
const path = require("path");
const app = express();

app.set("port", process.env.PORT || 9000);

app.use(express.static(path.join(__dirname, "build")));

app
  .get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  })
  .listen(app.get("port"), function () {
    console.log(
      "App is running, server is listening on port ",
      app.get("port")
    );
  });
