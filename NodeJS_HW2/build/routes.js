"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var express = require("express");

var router = express.Router();

var usersController = require("../controllers/users");

router.route("/").get(usersController.getUsers).post(usersController.createUser);
router.route("/:userId").put(usersController.updateUser)["delete"](usersController.deleteUser);
module.exports = router;

var Nikita = function Nikita() {
  _classCallCheck(this, Nikita);
};
//# sourceMappingURL=routes.js.map
