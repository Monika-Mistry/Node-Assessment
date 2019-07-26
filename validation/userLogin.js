const bcrypt = require("bcrypt");

const Login = require("../models/loginModel");
const isEmpty = require("./isEmpty");

const success = { success: true };

function userLogin(data) {

    return new Promise((res, rej) => {

        const errors = {};

        const search = { username: data.username };
        Login.findOne(search, (err, user) => {
            if (!user) {
                errors.noUser = "There is no user with this username: " + username;
            }
            bcrypt.compare(data.password, user.password, (err, isMatch) => {
                if (!isMatch) {
                    errors.password = "Incorrect password"
                }
                if (err) {
                    errors.error = err;
                }
                isEmpty(errors) ? res(success) : rej(errors);
            })

        });

    })

}

module.exports = userLogin;