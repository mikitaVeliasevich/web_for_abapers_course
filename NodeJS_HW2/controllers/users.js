const UsersDB = require("../models/db");

// Get all users details
const getUsers = (req, res, next) => {
    UsersDB.find({}, (err, users) => {
        res.status(200).json(users);
    });
};

// Create a new userr
const createUser = (req, res, next) => {
    let user = ({ name, email, phoneNumber, street, city } = req.body);

    UsersDB.insert(user, () => {
        res.status(200).json(user);
    });
};

// Update user.
const updateUser = (req, res, next) => {
    let id = req.params.userId;
    let user = ({ name, email, phoneNumber, street, city } = req.body);

    UsersDB.update(
        {
            _id: id
        },
        {
            $set: user
        },
        () => {
            res.status(200).json({
                success: true
            });
        }
    );
};

// Delete user
const deleteUser = (req, res, next) => {
    let id = req.params.userId;
    UsersDB.remove(
        {
            _id: id
        },
        () => {
            res.status(200).json({
                success: true
            });
        }
    );
};

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
};
