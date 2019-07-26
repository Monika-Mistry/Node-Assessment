const express = require("express");

const router = express.Router();

const Login = require("../models/loginModel");

let success = { success: true };

// @route POST login/addUser
// @desc Create new user login
// @access Public
router.post("/addUser", (req, res) => {
    const newUser = new Login({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    newUser.save().then(() => res.send(success)).catch(err => res.status(404).send(err));

});

// @route GET login/login
// @desc User 'login' to account with valid credentials
// @access Public
// router.get("/login", (req, res) => {

// });

// @route GET login/getUser
// @desc Get a user with a given email
// @access Public
router.get("/getUser", (req, res) => {
    const errors = {};
    Login.findOne(req.body, '-password -__v')
        .then(user => {
            if (!user) {
                errors.noUser = "There is no user with this email: " + req.body.email;
                res.status(404).json(errors);
            }
            res.send(user);
        })
        .catch(err => res.status(404).send(err));

});

// @route PUT login/updateUser
// @desc Update a users' details
// @access Public
router.put("/updateUser", (req, res) => {
    const errors = {};

    const search = { email: req.body.email };
    const update = { username: req.body.username };

    Login.updateOne(search, update)
        .then(user => {
            if (user.n === 1 && user.nModified === 1) {
                res.send(success);
            }
            else {
                errors.noUpdate = "The user has not been updated";
                res.status(404).json(errors);
            }
        })
        .catch(err => res.status(404).send(err));

});

// @route DELETE login/deleteUser
// @desc Remove a user with a given email
// @access Public
router.delete("/deleteUser", (req, res) => {
    const errors = {};
    Login.deleteOne(req.body)
        .then(user => {
            if (user.ok === 1) {
                res.send(success);
            } else {
                errors.noDelete = "The user has not been deleted";
                res.status(404).json(errors);
            }
        })
        .catch(err => res.status(404).send(err));

});

module.exports = router;