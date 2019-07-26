const mongoose = require("mongoose");
const express = require("express");

const app = express();

//connect to database
mongoose.connect('mongodb://localhost:27017/assessment',
    { useNewUrlParser: true }
).then(
    () => { console.log("Connection Successful") },
    err => { console.log(err) });

//port communication
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server running on port ${port}`));