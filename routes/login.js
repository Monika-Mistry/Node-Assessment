const express = require("express");

const router = express.Router();

const Login = require("../models/loginModel");

// @route  login/login
// @desc User 'login' to account with valid credentials
// @access Public

// @route POST login/addUser
// @desc Create new user login
// @access Public

// @route GET login/getUser
// @desc Get a user with a given email
// @access Public

// @route PUT login/updateUser
// @desc Update a users' details
// @access Public

// @route DELETE login/deleteUser
// @desc Remove a user with a given email
// @access Public