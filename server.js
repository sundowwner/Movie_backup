"use strict";
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use("/lib", express.static("./public"));
app.use("/lib", express.static("./bower_components"));
app.set("views", "./views");
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/stuff", function (req, res, next) {
    console.log("GET / has been hit.");
    res.send("<h1>Hello World</h1>");
});
app.get("/test", function (req, res, next) {
    res.send("<h1 style=\"color: red\"> You have hit the test route.</h1>");
});
var countRoutes = require("./routes/countRoutes");
app.use("/", countRoutes);
app.get("/*", function (req, res, next) {
    if (req.accepts("html"))
        res.render("index");
    else
        next("Not Found");
});
app.use(function (err, req, res, next) {
    if (req.accepts("json"))
        return res.status(404).send("Route could not be found.");
    else
        return res.status(404).send("Not Found.");
});
module.exports = app;
