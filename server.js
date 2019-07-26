const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

const login = require("./routes/login");
const item = require("./routes/item");

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

//routes
app.use("/login", login);
app.use("/item", item);

//port communication
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server running on port ${port}`));