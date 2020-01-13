"use strict";

var UsersDB = require("../models/db"); // Get all users details


var getUsers = function getUsers(req, res, next) {
  UsersDB.find({}, function (err, users) {
    res.status(200).json(users);
  });
}; // Create a new userr


var createUser = function createUser(req, res, next) {
  var _req$body;

  var user = (_req$body = req.body, name = _req$body.name, email = _req$body.email, phoneNumber = _req$body.phoneNumber, street = _req$body.street, city = _req$body.city, _req$body);
  UsersDB.insert(user, function () {
    res.status(200).json(user);
  });
}; // Update user.


var updateUser = function updateUser(req, res, next) {
  var _req$body2;

  var id = req.params.userId;
  var user = (_req$body2 = req.body, name = _req$body2.name, email = _req$body2.email, phoneNumber = _req$body2.phoneNumber, street = _req$body2.street, city = _req$body2.city, _req$body2);
  UsersDB.update({
    _id: id
  }, {
    $set: user
  }, function () {
    res.status(200).json({
      success: true
    });
  });
}; // Delete user


var deleteUser = function deleteUser(req, res, next) {
  var id = req.params.userId;
  UsersDB.remove({
    _id: id
  }, function () {
    res.status(200).json({
      success: true
    });
  });
};

module.exports = {
  getUsers: getUsers,
  createUser: createUser,
  updateUser: updateUser,
  deleteUser: deleteUser
};
//# sourceMappingURL=controllers.js.map
