const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "build")));
const port = process.env.PORT || 5000;
app
  .get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  })
  .listen(port, function () {
    console.log("App is running, server is listening on port ", port);
  });
