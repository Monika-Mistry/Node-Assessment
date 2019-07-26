const validator = require("validator");

const isEmpty = require("./isEmpty");

function validateItemInput(data) {
    const errors = {};

    //if the values are not present, change to empty strings
    data.username = !isEmpty(data.username) ? data.username : "";
    data.content = !isEmpty(data.content) ? data.content : "";

    //item validation rules

    //username
    if (validator.isEmpty(data.username)) {
        errors.username = "Username field is required";
    }

    //content
    if (validator.isEmpty(data.content)) {
        errors.content = "Content field is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };

}

module.exports = validateItemInput;