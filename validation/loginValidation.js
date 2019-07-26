const validator = require("validator");

const isEmpty = require("./isEmpty");

function validateLoginInput(data) {
    const errors = {};

    //if the values are not present (null or undefined), change to empty strings
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.username = !isEmpty(data.username) ? data.username : "";

    //login validation rules
    //email
    if (!validator.isEmail(data.email)) {
        errors.email = "Email invalid. Enter a correct email";
    }

    if (validator.isEmpty(data.email)) {
        errors.email = "Email field is required";

    }

    //username
    if (!validator.isAlphanumeric(data.username)) {
        errors.username = "Username invalid. Must contain letters and numbers only";
    }

    if (validator.isEmpty(data.username)) {
        errors.username = "Username field is required";
    }

    //password
    if (!validator.isLength(data.password, { min: 6, max: 20 })) {
        errors.password = "Password length incorrect. Must be between 8 and 20 characters."
    }


    if (validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }

    //return errors and validity
    return {
        errors,
        isValid: isEmpty(errors)
    };
}

module.exports = validateLoginInput;