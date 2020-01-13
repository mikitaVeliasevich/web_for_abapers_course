"use strict";

var Datastore = require("nedb");

var users = new Datastore({
  filename: "./database/users.db",
  autoload: true,
  timestampData: true
});
module.exports = users;
//# sourceMappingURL=models.js.map
