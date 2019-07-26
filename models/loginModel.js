const mongoose = require("mongoose");

const loginSchema = require("../schemas/loginSchema");

const Login = mongoose.model("Login", loginSchema);

module.exports = Login;