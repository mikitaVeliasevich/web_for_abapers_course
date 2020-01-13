const express = require("express");
const router = express.Router();

const usersController = require("../controllers/users");

router
    .route("/")
    .get(usersController.getUsers)
    .post(usersController.createUser);

router
    .route("/:userId")
    .put(usersController.updateUser)
    .delete(usersController.deleteUser);

module.exports = router;

class Nikita {}
