const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./src/routes");
const path = require('path')

const app = express();

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

global.__basedir = path.resolve(__dirname);

mongoose
    .connect("mongodb://127.0.0.1:27017/ubsbsm")
    .then(() =>
    {
        console.log("DB connected!");
    })
    .catch((e) => console.log(e));

// simple route
app.get("/", (req, res) =>
{
    res.json({ message: "Welcome!" });
}
);

app.use("/api", routes);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>
{
    console.log(`Server is running on port ${PORT}.`);
});