"use strict";

var express = require("express");

var bodyParser = require("body-parser");

var users = require("./routes/users");

var app = express(); // Middleware

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json()); // Routes

app.use("/users", users);
app.get("/", function (req, res) {
  res.send("NodeJS + nedb");
}); // Server

app.listen(3000, function () {
  console.log("Server listening on port 3000!");
});
//# sourceMappingURL=server.js.map
