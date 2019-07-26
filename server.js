const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//connect to database
mongoose.connect('mongodb://localhost:27017/assessment',
    { useNewUrlParser: true }
).then(
    () => { console.log("Connection Successful") },
    err => { console.log(err) });

//port communication
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server running on port ${port}`));