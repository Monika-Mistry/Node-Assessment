const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  content: String
});

module.exports = itemSchema;