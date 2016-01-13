"use strict";

import express = require("express");
let bodyParser = require("body-parser");
let app = express();

app.use("/lib", express.static("./public"));
app.use("/lib", express.static("./bower_components"));

//we can now say index.html instead of './view/index.html'
app.set("views","./views");
//all us to 'render' html files
app.engine("html",require("ejs").renderFile);
//set the default view engine. We can just say "index" instead of "index.html"
app.set("view engine", "html");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get("/stuff",( req,res,next) =>{
    console.log("GET / has been hit.");
    res.send("<h1>Hello World</h1>");
});

app.get("/test", (req,res,next) =>  {
    res.send(`<h1 style="color: red"> You have hit the test route.</h1>`)
});

//bring in the routes objects
let countRoutes = require("./routes/countRoutes");

//use the route objects
//firt param is the route prefix
app.use("/", countRoutes)

//For any route trying to get an html...send the index back
app.get("/*", (req,res,next) => {
//send the ./views/index.html file back to the client
    if(req.accepts("html"))res.render("index");
    else next("Not Found");
});

app.use((err,req: express.Request, res: express.Response, next: Function) => {
    if(req.accepts("json")) return res.status(404).send("Route could not be found.");
    else return res.status(404).send("Not Found.");
});

export = app;
