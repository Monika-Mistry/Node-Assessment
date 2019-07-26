const mongoose = require("mongoose");

const loginSchema = require("../shemas/loginSchema");

const Login = mongoose.model("Login", loginSchema);

module.exports = Login;