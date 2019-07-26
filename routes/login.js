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
// router.put("/updateUser", (req, res) => {

// });

// @route DELETE login/deleteUser
// @desc Remove a user with a given email
// @access Public
// router.post("/deleteUser", (req, res) => {

// });

module.exports = router;