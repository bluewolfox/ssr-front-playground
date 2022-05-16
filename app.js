const express = require("express");
const app = express();
const port = 5000;
const path = require("path");

app.use(express.static(path.join(__dirname, "/kws/build")));

app.get("*", function (_, response) {
  response.sendFile(path.join(__dirname, "/kws/build/index.html"));
});

app.listen(port);
